import Link from "next/link";

const posts = [
  {
    slug: "new-post",
    title: "New Post",
    date: "July 16, 2025",
    excerpt: "A post about course functionality and learning management features.",
    category: "Uncategorized"
  },
  {
    slug: "hello-world",
    title: "Hello world!",
    date: "July 8, 2025", 
    excerpt: "Welcome to WordPress. This is your first post. Edit or delete it, then start writing!",
    category: "Uncategorized"
  }
];

export default function Home() {
  return (
    <div className="container py-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">mason test ldea</h1>
        <nav className="border-b pb-4">
          <Link 
            href="/sample-page" 
            className="text-primary hover:text-primary/80 transition-colors"
          >
            Sample Page
          </Link>
        </nav>
      </header>

      <main className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-6">Latest Posts</h2>
          <div className="grid gap-6">
            {posts.map((post) => (
              <article key={post.slug} className="card p-6">
                <header className="mb-4">
                  <h3 className="text-xl font-semibold mb-2">
                    <Link 
                      href={`/${post.slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <div className="text-sm text-muted-foreground space-x-4">
                    <time>{post.date}</time>
                    <span>•</span>
                    <span className="category">{post.category}</span>
                  </div>
                </header>
                <p className="text-muted-foreground">{post.excerpt}</p>
                <footer className="mt-4">
                  <Link 
                    href={`/${post.slug}`}
                    className="btn btn-secondary text-sm px-3 py-1"
                  >
                    Read more
                  </Link>
                </footer>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-16 pt-8 border-t text-center text-sm text-muted-foreground">
        <p>© 2025 mason test ldea. Powered by Next.js and CloudFlare.</p>
      </footer>
    </div>
  );
}
