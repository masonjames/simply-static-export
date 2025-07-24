import Link from "next/link";

export default function NewPost() {
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
            <h2 className="text-3xl font-bold mb-4">New Post</h2>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <time>July 16, 2025</time>
              <span>•</span>
              <span>by masonjames</span>
              <span>•</span>
              <span>Uncategorized</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-lg leading-relaxed">
              This post explores course functionality and learning management features. It demonstrates how educational content can be integrated into a modern web platform.
            </p>

            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Course Features</h3>
              <ul className="space-y-2">
                <li>• Interactive learning experiences</li>
                <li>• Progress tracking and analytics</li>
                <li>• Student-parent access controls</li>
                <li>• Event calendar integration</li>
                <li>• Course reviews and feedback</li>
              </ul>
            </div>

            <p>
              This content was originally created with LearnDash LMS integration, showcasing how traditional WordPress learning management systems can be modernized with Next.js and CloudFlare infrastructure.
            </p>
          </div>

          <footer className="mt-8 pt-8 border-t">
            <div className="flex justify-between items-center">
              <Link 
                href="/hello-world" 
                className="btn btn-secondary"
              >
                ← Previous Post
              </Link>
              <Link 
                href="/" 
                className="btn btn-primary"
              >
                Back to Home
              </Link>
            </div>
          </footer>
        </article>
      </main>
    </div>
  );
}