'use client';

import React, { useEffect, useRef } from 'react';

const ExternalResearchChat = () => {
  const chatbotHistoryRef = useRef(null);
  const messageInputRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const messageInput = messageInputRef.current;
    const chatbotHistory = chatbotHistoryRef.current;
    
    // Check if we're running on GitHub Pages
    const isGitHubPages = window.location.hostname.includes('github.io');
    
    // Generate a simple fingerprint
    function generateFingerprint() {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl');
      if (!gl) return Date.now().toString(36) + Math.random().toString(36).substring(2, 15);
      
      try {
        const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
        const renderer = debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : '';
        return btoa(navigator.userAgent + renderer + screen.width + screen.height + new Date().getTimezoneOffset());
      } catch (e) {
        return Date.now().toString(36) + Math.random().toString(36).substring(2, 15);
      }
    }

    const fingerprint = generateFingerprint();

    function scrollToBottom() {
      chatbotHistory.scrollTop = chatbotHistory.scrollHeight;
    }

    function handleSubmit(event) {
      event.preventDefault();

      let message = messageInput.value.trim();
      if (message === '') return;

      let historyItem = document.createElement('li');
      let userMessage = document.createElement('div');
      userMessage.className = 'chat-bubble user-message';
      userMessage.innerText = message;
      historyItem.appendChild(userMessage);
      chatbotHistory.appendChild(historyItem);

      let loadingItem = document.createElement('li');
      let loadingMessage = document.createElement('div');
      loadingMessage.className = 'chat-bubble bot-response';
      loadingMessage.innerHTML = '<span class="loading-dots"></span>';
      loadingItem.appendChild(loadingMessage);
      chatbotHistory.appendChild(loadingItem);

      scrollToBottom();

      messageInput.value = '';

      // If on GitHub Pages, use static fallback responses
      if (isGitHubPages) {
        // Remove loading indicator after a short delay to simulate processing
        setTimeout(() => {
          chatbotHistory.removeChild(loadingItem);
          
          let botResponseItem = document.createElement('li');
          let botMessage = document.createElement('div');
          botMessage.className = 'chat-bubble bot-response';
          
          // Generate a static response based on the query
          const lowerMessage = message.toLowerCase();
          let response = '';
          
          if (lowerMessage.includes('research') || lowerMessage.includes('study') || lowerMessage.includes('work')) {
            response = "Yamil Velez is an Assistant Professor of Political Science at Columbia University. His research focuses on political psychology, attitude and belief change, misinformation (especially within immigrant communities), and the impact of generative AI on understanding public opinion. His work spans several areas including Latino politics, experimental methodology, and local political environments.";
          } else if (lowerMessage.includes('misinformation') || lowerMessage.includes('fake news')) {
            response = "Yamil has published several papers on misinformation, including 'Latino-Targeted Misinformation and The Power of Factual Corrections' in the Journal of Politics, and 'Factual Corrections Eliminate False Beliefs about Covid-19 Vaccines' in Public Opinion Quarterly. His research shows that factual corrections can be effective at countering misinformation.";
          } else if (lowerMessage.includes('latino') || lowerMessage.includes('hispanic') || lowerMessage.includes('immigrant')) {
            response = "Yamil has conducted extensive research on Latino politics and immigrant incorporation. Notable works include 'Reversion to the Mean or Their Version of The Dream? Latino Voting in an Age of Populism' in the American Political Science Review and 'Residential Mobility Constraints and Immigration Restrictionism' in Political Behavior.";
          } else if (lowerMessage.includes('ai') || lowerMessage.includes('artificial intelligence') || lowerMessage.includes('generative')) {
            response = "Yamil's recent work examines the potential for generative artificial intelligence to improve our understanding of public opinion. He has published on 'Hidden Layers of Representation: Revisiting the Second Face of Power using AI-assisted surveys of Public Opinion' and has created a guide for tailored experiments that can be found at tailoredexperiments.com.";
          } else if (lowerMessage.includes('teaching') || lowerMessage.includes('course') || lowerMessage.includes('class')) {
            response = "Yamil teaches courses at Columbia University including Political Psychology, Experimental Methods, and Racial and Ethnic Politics at both undergraduate and Ph.D. levels. He previously taught at George Washington University, Wesleyan University, and Stony Brook University.";
          } else {
            response = "I'm a static version of the research chat since this site is hosted on GitHub Pages which doesn't support server-side API routes. Yamil Velez is an Assistant Professor of Political Science at Columbia University specializing in political psychology, misinformation, Latino politics, and experimental methodology. You can explore his publications in the Research section of this portfolio.";
          }
          
          botMessage.innerText = response;
          botResponseItem.appendChild(botMessage);
          chatbotHistory.appendChild(botResponseItem);
          scrollToBottom();
        }, 1500);
        
        return;
      }

      // Include fingerprint in the request
      fetch(`/api/research-proxy?query=${encodeURIComponent(message)}&fingerprint=${encodeURIComponent(fingerprint)}`, {
        method: 'GET',
        headers: {
          'Accept': 'text/event-stream'
        }
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          
          // Check if the response is a streaming response
          const contentType = response.headers.get('Content-Type');
          if (contentType && contentType.includes('text/event-stream')) {
            // Handle streaming response
            const reader = response.body.getReader();
            return new ReadableStream({
              start(controller) {
                function push() {
                  reader.read().then(({ done, value }) => {
                    if (done) {
                      controller.close();
                      return;
                    }
                    controller.enqueue(value);
                    push();
                  });
                }
                push();
              }
            });
          } else {
            // Handle regular JSON response
            return response.text().then(text => {
              chatbotHistory.removeChild(loadingItem);
              
              let botResponseItem = document.createElement('li');
              let botMessage = document.createElement('div');
              botMessage.className = 'chat-bubble bot-response';
              
              try {
                // Try to parse as JSON
                const jsonData = JSON.parse(text);
                botMessage.innerText = jsonData.response || jsonData.message || text;
              } catch (e) {
                // If not JSON, just use the text
                botMessage.innerText = text;
              }
              
              botResponseItem.appendChild(botMessage);
              chatbotHistory.appendChild(botResponseItem);
              scrollToBottom();
              
              // Return null to skip the streaming processing
              return null;
            });
          }
        })
        .then(stream => {
          if (!stream) return; // Skip if we already handled a non-streaming response
          
          const reader = stream.getReader();
          let accumulatedData = '';

          function readStream() {
            reader.read().then(({ done, value }) => {
              if (done) {
                chatbotHistory.removeChild(loadingItem);
                scrollToBottom();
                return;
              }

              const chunk = new TextDecoder().decode(value);
              accumulatedData += chunk;

              const lines = accumulatedData.split('\n');
              accumulatedData = lines.pop();  

              lines.forEach(line => {
                if (line.startsWith('data: ')) {
                  const jsonStr = line.slice(6);
                  if (jsonStr !== '[DONE]') {
                    try {
                      const jsonData = JSON.parse(jsonStr);
                      if (jsonData.choices && jsonData.choices[0].delta && jsonData.choices[0].delta.content) {
                        if (!loadingItem.nextElementSibling) {
                          let botResponseItem = document.createElement('li');
                          let botMessage = document.createElement('div');
                          botMessage.className = 'chat-bubble bot-response';
                          botResponseItem.appendChild(botMessage);
                          chatbotHistory.appendChild(botResponseItem);
                        }
                        let botMessage = chatbotHistory.lastElementChild.firstElementChild;
                        botMessage.innerText += jsonData.choices[0].delta.content;
                        scrollToBottom();
                      }
                    } catch (e) {
                      console.error('Error parsing JSON:', e);
                    }
                  }
                }
              });

              readStream();
            });
          }

          readStream();
        })
        .catch(error => {
          chatbotHistory.removeChild(loadingItem);
          console.error('Error:', error);
          let errorMessage = document.createElement('li');
          let errorContent = document.createElement('div');
          errorContent.className = 'chat-bubble bot-response';
          errorContent.innerText = `Error: ${error.message || 'An error occurred while fetching the response.'}`;
          errorMessage.appendChild(errorContent);
          chatbotHistory.appendChild(errorMessage);
          scrollToBottom();
        });
    }

    // Add initial bot message
    let initialMessage = document.createElement('li');
    let initialContent = document.createElement('div');
    initialContent.className = 'chat-bubble bot-response';
    initialContent.innerText = "Hello! I'm a research chat trained on Yamil's work. How can I help you understand his research?";
    initialMessage.appendChild(initialContent);
    chatbotHistory.appendChild(initialMessage);

    // Add event listener
    const form = document.getElementById('chatbot-form');
    if (form) {
      form.addEventListener('submit', handleSubmit);
    }

    // Cleanup
    return () => {
      if (form) {
        form.removeEventListener('submit', handleSubmit);
      }
    };
  }, []);

  return (
    <div id="chatbot-container" style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      backgroundColor: '#FFFFFF',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
    }}>
      <form id="chatbot-form" style={{
        padding: '12px',
        borderBottom: '1px solid #E2E8F0',
        backgroundColor: '#F7FAFC',
      }}>
        <div className="input-container" style={{
          display: 'flex',
        }}>
          <input 
            id="message-input" 
            ref={messageInputRef}
            placeholder="Ask about my research" 
            type="text" 
            style={{
              flexGrow: 1,
              padding: '10px',
              border: '1px solid #E2E8F0',
              borderRadius: '4px',
              marginRight: '10px',
              boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
              fontSize: '14px',
            }}
          />
          <button 
            id="submit-button" 
            type="submit"
            style={{
              backgroundColor: '#2C5282',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: '500',
              boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
              transition: 'background-color 0.2s ease',
            }}
          >
            Ask
          </button>
        </div>
      </form>

      <ul 
        id="chatbot-history" 
        ref={chatbotHistoryRef}
        style={{
          flexGrow: 1,
          overflowY: 'auto',
          padding: '20px',
          listStyleType: 'none',
          margin: 0,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#FFFFFF',
        }}
      >
      </ul>

      <style jsx global>{`
        .chat-bubble {
          max-width: 80%;
          padding: 10px 15px;
          border-radius: 12px;
          margin-bottom: 10px;
          word-wrap: break-word;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }
        .user-message {
          background-color: #2C5282;
          color: #ffffff;
          align-self: flex-end;
          border-bottom-right-radius: 4px;
        }
        .bot-response {
          background-color: #EDF2F7;
          color: #1A202C;
          align-self: flex-start;
          border-bottom-left-radius: 4px;
        }
        .loading-dots {
          display: inline-block;
          width: 50px;
          text-align: left;
        }
        .loading-dots::after {
          content: '.';
          animation: dots 1.5s steps(5, end) infinite;
        }
        @keyframes dots {
          0%, 20% { content: '.'; }
          40% { content: '..'; }
          60% { content: '...'; }
          80%, 100% { content: ''; }
        }
      `}</style>
    </div>
  );
};

export default ExternalResearchChat; 