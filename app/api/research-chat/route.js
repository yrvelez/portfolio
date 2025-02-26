// No need to import Response as it's a global object
// Rate limiting storage in memory (in production, use Redis or a database)
const RATE_LIMIT = 100; // 100 requests per 15 minutes
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes in milliseconds
const rateLimitStore = new Map();

export const runtime = 'edge';

export async function POST(req) {
  try {
    const { query, fingerprint } = await req.json();
    
    // Rate limiting
    const now = Date.now();
    const userKey = fingerprint || 'anonymous';
    
    // Initialize or clean up old rate limit entries
    if (!rateLimitStore.has(userKey)) {
      rateLimitStore.set(userKey, { count: 0, resetAt: now + RATE_LIMIT_WINDOW });
    } else {
      const userData = rateLimitStore.get(userKey);
      // Reset count if the time window has passed
      if (now > userData.resetAt) {
        userData.count = 0;
        userData.resetAt = now + RATE_LIMIT_WINDOW;
        rateLimitStore.set(userKey, userData);
      }
    }
    
    // Check rate limit
    const userData = rateLimitStore.get(userKey);
    if (userData.count >= RATE_LIMIT) {
      return new Response(
        JSON.stringify({ error: 'Rate limit exceeded. Try again later.' }),
        { status: 429, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    // Increment count
    userData.count += 1;
    rateLimitStore.set(userKey, userData);

    // For now, return a static response
    return new Response(
      JSON.stringify({ 
        response: "Yamil's research focuses on immigration, racial and ethnic politics, misinformation, and political psychology. His current projects include research on media, information environments, and attitude change." 
      }),
      { 
        status: 200, 
        headers: { 'Content-Type': 'application/json' } 
      }
    );
  } catch (error) {
    console.error('Error in research chat API:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'An error occurred during the request' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
} 