interface Env {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ASSETS: any;
}

const handler = {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    
    // Handle API routes if needed in the future
    if (url.pathname.startsWith('/api/')) {
      return new Response(JSON.stringify({ 
        message: 'API endpoint - ready for form submissions and dynamic functionality' 
      }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Serve static assets
    return env.ASSETS.fetch(request);
  },
};

export default handler;