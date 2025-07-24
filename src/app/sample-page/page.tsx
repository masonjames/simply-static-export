import Link from "next/link";

export default function SamplePage() {
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
            className="text-primary font-medium"
          >
            Sample Page
          </Link>
        </nav>
      </header>

      <main className="prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold mb-6">Sample Page</h2>
        
        <div className="space-y-6 text-foreground/80 leading-relaxed">
          <p>
            This is an example page. It&apos;s different from a blog post because it will stay in one place and will show up in your site navigation (in most themes). Most people start with an About page that introduces them to potential site visitors. It might say something like this:
          </p>

          <blockquote className="border-l-4 border-primary pl-6 py-4 bg-muted/50 rounded-r-lg">
            <p className="italic text-foreground/70 mb-4">
              Hi there! I&apos;m a bike messenger by day, aspiring actor by night, and this is my website. I live in Los Angeles, have a great dog named Jack, and I like piña coladas. (And gettin&apos; caught in the rain.)
            </p>
          </blockquote>

          <p>
            ...or something like this:
          </p>

          <blockquote className="border-l-4 border-primary pl-6 py-4 bg-muted/50 rounded-r-lg">
            <p className="italic text-foreground/70">
              The XYZ Doohickey Company was founded in 1971, and has been providing quality doohickeys to the public ever since. Located in Gotham City, XYZ employs over 2,000 people and does all kinds of awesome things for the Gotham community.
            </p>
          </blockquote>

          <p>
            As a new WordPress user, you should go to <Link href="/" className="text-primary hover:underline">your dashboard</Link> to delete this page and create new pages for your content. Have fun!
          </p>
        </div>
      </main>

      <footer className="mt-16 pt-8 border-t">
        <Link 
          href="/" 
          className="btn btn-secondary"
        >
          ← Back to Home
        </Link>
      </footer>
    </div>
  );
}