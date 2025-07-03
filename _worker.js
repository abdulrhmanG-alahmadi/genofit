export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Serve static assets from the build output
    try {
      // For now, return a simple response to test deployment
      if (url.pathname === '/') {
        return new Response(`
          <!DOCTYPE html>
          <html>
          <head>
            <title>GenoFit - Genetic Testing for Athletes</title>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <script src="https://cdn.tailwindcss.com"></script>
          </head>
          <body>
            <div class="min-h-screen bg-gray-50">
              <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto px-4 py-6">
                  <h1 class="text-3xl font-bold text-gray-900">GenoFit</h1>
                </div>
              </header>
              <main class="max-w-7xl mx-auto px-4 py-12">
                <div class="text-center">
                  <h2 class="text-4xl font-bold text-gray-900 mb-4">
                    Unlock Your Genetic Potential
                  </h2>
                  <p class="text-xl text-gray-600 mb-8">
                    The first Saudi company specializing in genetic testing for athletes
                  </p>
                  <div class="grid md:grid-cols-3 gap-8 mt-12">
                    <div class="bg-white p-6 rounded-lg shadow">
                      <h3 class="text-xl font-bold mb-2">GENO FITNESS</h3>
                      <p class="text-3xl font-bold text-blue-600 mb-4">499 SAR</p>
                      <button class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                        Subscribe Now
                      </button>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow">
                      <h3 class="text-xl font-bold mb-2">GENO DIET</h3>
                      <p class="text-3xl font-bold text-green-600 mb-4">399 SAR</p>
                      <button class="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
                        Subscribe Now
                      </button>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow border-2 border-purple-500">
                      <h3 class="text-xl font-bold mb-2">GENO PREMIUM</h3>
                      <p class="text-3xl font-bold text-purple-600 mb-4">799 SAR</p>
                      <button class="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700">
                        Subscribe Now
                      </button>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </body>
          </html>
        `, {
          headers: {
            'content-type': 'text/html;charset=UTF-8',
          },
        });
      }
      
      // Handle other routes
      return new Response('Not Found', { status: 404 });
    } catch (error) {
      return new Response('Internal Server Error', { status: 500 });
    }
  },
}; 