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
              <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
                <div class="container mx-auto px-4">
                  <div class="flex items-center justify-between h-20">
                    <div class="flex items-center">
                      <img src="/bg.png" alt="GenoFit Logo" class="w-18 h-18 object-contain" />
                    </div>
                    <nav class="hidden md:flex items-center space-x-8">
                      <a href="#home" class="text-gray-700 hover:text-blue-600">Home</a>
                      <a href="#how-it-works" class="text-gray-700 hover:text-blue-600">How it works</a>
                      <a href="#packages" class="text-gray-700 hover:text-blue-600">Packages</a>
                      <a href="#about" class="text-gray-700 hover:text-blue-600">About</a>
                      <a href="#contact" class="text-gray-700 hover:text-blue-600">Contact</a>
                    </nav>
                  </div>
                </div>
              </header>
              <main class="max-w-7xl mx-auto px-4 py-12 mt-20">
                <div class="text-center">
                  <h2 class="text-4xl font-bold text-gray-900 mb-4">
                    Unlock Your Genetic Potential
                  </h2>
                  <p class="text-xl text-gray-600 mb-8">
                    The first Saudi company specializing in genetic testing for athletes
                  </p>
                  <a href="#packages" class="inline-block mb-12">
                    <button class="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all">
                      Get Started Now
                    </button>
                  </a>
                  <div id="packages" class="grid md:grid-cols-3 gap-8 mt-12">
                    <div class="bg-white p-6 rounded-lg shadow">
                      <h3 class="text-xl font-bold mb-2">GENO FITNESS</h3>
                      <p class="text-3xl font-bold text-blue-600 mb-4">2199 SAR</p>
                      <button class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                        Subscribe Now
                      </button>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow">
                      <h3 class="text-xl font-bold mb-2">GENO DIET</h3>
                      <p class="text-3xl font-bold text-green-600 mb-4">2199 SAR</p>
                      <button class="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
                        Subscribe Now
                      </button>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow border-2 border-purple-500">
                      <h3 class="text-xl font-bold mb-2">GENO PREMIUM</h3>
                      <p class="text-3xl font-bold text-purple-600 mb-4">3299 SAR</p>
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
      
      // Serve bg.png as a placeholder
      if (url.pathname === '/bg.png') {
        // Since we can't serve actual files from Workers without R2 or other storage,
        // we'll return a placeholder response
        return new Response('', {
          status: 200,
          headers: {
            'content-type': 'image/png',
            'cache-control': 'public, max-age=3600',
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