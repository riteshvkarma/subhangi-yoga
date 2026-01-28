export const dynamic = "force-dynamic";
import Link from "next/link";
import Image from "next/image";

const API_BASE = "http://api.vishwabhartiprojects.com/";

type BlogPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  category: string;
  date: string;
  authorImage?: string;
  authorBio?: string;
};

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const res = await fetch(
      `${API_BASE}/blog.php?slug=${encodeURIComponent(slug)}`,
      {
        cache: "no-store",
        next: { revalidate: 0 },
      },
    );

    if (!res.ok) return null;

    const data = await res.json();
    return data && data.post ? data.post : null;
  } catch {
    return null;
  }
}

async function getRelatedPosts(slug: string): Promise<BlogPost[]> {
  try {
    const res = await fetch(`${API_BASE}/blog.php`, {
      cache: "no-store",
    });

    if (!res.ok) return [];

    const data = await res.json();
    return (data.posts ?? [])
      .filter((p: BlogPost) => p.slug !== slug)
      .slice(0, 3);
  } catch {
    return [];
  }
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return (
      <section id="content">
        <div className="content-wrap">
          <div className="container text-center py-5">
            <h2>Post Not Found</h2>
            <p>The blog post you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/blog" className="btn rounded bg-color text-white">
              Back to Blog
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const relatedPosts = await getRelatedPosts(slug);

  return (
    <>
      {/* Page Title */}
      <section
        className="page-title text-start"
        style={{ paddingBottom: "20px" }}
      >
        <div className="container">
          <div className="page-title-row">
            <div className="page-title-content">
              <div className="d-flex align-items-center gap-3 mb-3">
                <Link href="/blog" className="text-muted text-decoration-none">
                  <i className="bi-arrow-left me-1"></i> Back to Blog
                </Link>
                <span className="badge bg-color text-white">
                  {post.category}
                </span>
              </div>
              <h1
                className="text-transform-none fw-bold mb-3"
                style={{ fontSize: "42px" }}
              >
                {post.title}
              </h1>
              <div className="d-flex align-items-center gap-4 text-muted">
                <div className="d-flex align-items-center">
                  {post.authorImage && (
                    <Image
                      src={`${API_BASE}${post.authorImage}`}
                      alt={post.author}
                      width={40}
                      height={40}
                      unoptimized
                      className="rounded-circle me-2"
                      style={{ objectFit: "cover" }}
                    />
                  )}
                  <span>{post.author}</span>
                </div>
                <span>
                  <i className="bi-calendar me-1"></i> {post.date}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="container mb-5">
        <Image
          src={`${API_BASE}${post.image}`}
          alt={post.title}
          width={1200}
          height={600}
          unoptimized
          className="rounded"
          style={{ width: "100%", maxHeight: "500px", objectFit: "cover" }}
        />
      </div>

      {/* Content */}
      <section id="content">
        <div className="content-wrap pt-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                {/* Article Content */}
                <article
                  className="blog-content"
                  style={{ fontSize: "1.1rem", lineHeight: "1.8" }}
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Tags and Share */}
                <div className="d-flex justify-content-between align-items-center border-top border-bottom py-4 my-5">
                  <div>
                    <strong>Tags:</strong>{" "}
                    <span className="badge bg-light text-dark me-1">
                      {post.category}
                    </span>
                    <span className="badge bg-light text-dark me-1">Yoga</span>
                    <span className="badge bg-light text-dark">Wellness</span>
                  </div>
                  <div className="social-icons">
                    <span className="me-2">Share:</span>
                    <a
                      href="#"
                      className="social-icon si-small bg-light text-dark rounded-circle"
                    >
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a
                      href="#"
                      className="social-icon si-small bg-light text-dark rounded-circle"
                    >
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a
                      href="#"
                      className="social-icon si-small bg-light text-dark rounded-circle"
                    >
                      <i className="bi-linkedin"></i>
                    </a>
                  </div>
                </div>

                {/* Author Box */}
                <div className="card border-0 shadow-sm mb-5">
                  <div className="card-body p-4">
                    <div className="d-flex gap-4">
                      {post.authorImage && (
                        <Image
                          src={`${API_BASE}${post.authorImage}`}
                          alt={post.author}
                          width={80}
                          height={80}
                          unoptimized
                          className="rounded-circle"
                          style={{ objectFit: "cover" }}
                        />
                      )}
                      <div>
                        <h5 className="mb-1">About {post.author}</h5>
                        <p className="text-muted mb-2">{post.authorBio}</p>
                        <div className="social-icons">
                          <a
                            href="#"
                            className="social-icon si-small bg-light text-dark rounded-circle"
                          >
                            <i className="fa-brands fa-facebook-f"></i>
                          </a>
                          <a
                            href="#"
                            className="social-icon si-small bg-light text-dark rounded-circle"
                          >
                            <i className="bi-instagram"></i>
                          </a>
                          <a
                            href="#"
                            className="social-icon si-small bg-light text-dark rounded-circle"
                          >
                            <i className="fa-brands fa-twitter"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Posts */}
            <div className="mt-5">
              <h3 className="fw-bold mb-4">Related Articles</h3>
              <div className="row">
                {relatedPosts.map((relatedPost) => (
                  <div key={relatedPost.slug} className="col-md-4 mb-4">
                    <article className="card border-0 shadow-sm h-100">
                      <Link href={`/blog/${relatedPost.slug}`}>
                        <Image
                          src={`${API_BASE}${relatedPost.image}`}
                          alt={relatedPost.title}
                          width={600}
                          height={360}
                          unoptimized
                          className="card-img-top"
                          style={{ height: "180px", objectFit: "cover" }}
                        />
                      </Link>
                      <div className="card-body">
                        <span className="badge bg-color text-white mb-2">
                          {relatedPost.category}
                        </span>
                        <h5 className="card-title">
                          <Link
                            href={`/blog/${relatedPost.slug}`}
                            className="text-dark text-decoration-none"
                          >
                            {relatedPost.title}
                          </Link>
                        </h5>
                        <small className="text-muted">{relatedPost.date}</small>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
