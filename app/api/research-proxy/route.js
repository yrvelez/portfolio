export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');
  const fingerprint = searchParams.get('fingerprint');
  
  if (!query) {
    return new Response(JSON.stringify({ error: 'Query parameter is required' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  
  try {
    const response = await fetch(
      `https://ourlocalcommunities.com/research_search/process.php?query=${encodeURIComponent(query)}&fingerprint=${encodeURIComponent(fingerprint || '')}`,
      {
        method: 'GET',
        headers: {
          'Accept': 'text/event-stream',
          'User-Agent': 'Mozilla/5.0 (compatible; ResearchChatProxy/1.0)',
        },
      }
    );
    
    if (!response.ok) {
      // If the external API returns an error, provide a fallback response
      return new Response(JSON.stringify({
        response: `I'm sorry, but I couldn't retrieve information about Yamil's research at the moment. Based on the portfolio, Yamil Velez is an Assistant Professor of Political Science at Columbia University who specializes in political psychology, focusing on attitude and belief change, misinformation, Latino politics, and experimental methodology. You can explore his publications in the Research section of this portfolio.`
      }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }
    
    const data = await response.text();
    
    return new Response(data, {
      status: response.status,
      headers: {
        'Content-Type': response.headers.get('Content-Type') || 'text/plain',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    console.error('Proxy error:', error);
    return new Response(JSON.stringify({ error: error.message || 'Failed to fetch from research API' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
} 