import Link from "next/link";

export default function HelloWorldPost() {
  return (
    <div className="container py-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">
          <Link href="/" className="hover:text-primary/80 transition-colors">
            mason test ldea
          </Link>
        </h1>
        <nav className="border-b pb-4">
          <Link 
            href="/sample-page" 
            className="text-primary hover:text-primary/80 transition-colors"
          >
            Sample Page
          </Link>
        </nav>
      </header>

      <main>
        <article className="card p-8 max-w-4xl mx-auto">
          <header className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Hello world!</h2>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <time>July 8, 2025</time>
              <span>•</span>
              <span>by masonjames</span>
              <span>•</span>
              <span>Uncategorized</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed">
              Welcome to WordPress. This is your first post. Edit or delete it, then start writing!
            </p>
          </div>

          <footer className="mt-8 pt-8 border-t">
            <div className="flex justify-between items-center">
              <Link 
                href="/" 
                className="btn btn-secondary"
              >
                ← Back to Home
              </Link>
              <Link 
                href="/new-post" 
                className="btn btn-primary"
              >
                Next Post →
              </Link>
            </div>
          </footer>
        </article>
      </main>
    </div>
  );
}