// Cloudflare Worker for Next.js Static Export
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    try {
      // Handle static assets directly
      if (url.pathname.startsWith('/_next/') || 
          url.pathname.includes('.') || 
          url.pathname === '/favicon.ico') {
        return env.ASSETS.fetch(request);
      }
      
      // Handle root path
      if (url.pathname === '/') {
        return env.ASSETS.fetch(new Request(url.origin + '/index.html'));
      }
      
      // Handle other paths - try the path first, then fallback to path/index.html
      let response = await env.ASSETS.fetch(request);
      
      if (response.status === 404) {
        // Try with .html extension
        const htmlPath = url.pathname.endsWith('/') 
          ? url.pathname + 'index.html'
          : url.pathname + '.html';
        response = await env.ASSETS.fetch(new Request(url.origin + htmlPath));
        
        if (response.status === 404) {
          // Try with /index.html
          const indexPath = url.pathname.endsWith('/') 
            ? url.pathname + 'index.html'
            : url.pathname + '/index.html';
          response = await env.ASSETS.fetch(new Request(url.origin + indexPath));
        }
      }
      
      return response;
      
    } catch (error) {
      console.error('Worker error:', error);
      return new Response('Internal Server Error', { 
        status: 500,
        headers: { 'Content-Type': 'text/plain' }
      });
    }
  },
}; 