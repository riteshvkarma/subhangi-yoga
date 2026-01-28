import Link from "next/link";
import Image from "next/image";

type BlogPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  category: string;
  date: string;
};

type BlogApiResponse = {
  posts: BlogPost[];
  totalPages: number;
  currentPage: number;
};

async function getBlogPosts(page: number): Promise<BlogApiResponse> {
  try {
    const API_BASE =
      process.env.NEXT_PUBLIC_BLOG_API || "http://api.vishwabhartiprojects.com";

    const API_URL = `${API_BASE}/blog.php`;

    const res = await fetch(`${API_URL}?page=${page}`, {
      cache: "no-store",
      next: { revalidate: 0 },
    });

    if (!res.ok) {
      return { posts: [], totalPages: 1, currentPage: 1 };
    }

    const data: BlogApiResponse = await res.json();

    return {
      posts: data.posts ?? [],
      totalPages: data.totalPages ?? 1,
      currentPage: data.currentPage ?? 1,
    };
  } catch {
    return { posts: [], totalPages: 1, currentPage: 1 };
  }
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams?: { page?: string };
}) {
  const page = Number(searchParams?.page) || 1;
  const {
    posts: blogPosts,
    totalPages,
    currentPage,
  } = await getBlogPosts(page);

  const API_BASE =
    process.env.NEXT_PUBLIC_BLOG_API || "http://api.vishwabhartiprojects.com";

  return (
    <>
      {/* Page Title */}
      <section className="page-title text-start">
        <div className="container">
          <div className="page-title-row align-items-center">
            <div className="page-title-content mw-sm pe-4 text-start">
              <div className="fancy-title title-border mb-3">
                <h5 className="fw-normal color font-body text-uppercase ls-1">
                  Our Blog | योग ब्लॉग
                </h5>
              </div>
              <h2 className="text-transform-none display-4 fw-semibold">
                Latest Articles | नवीन लेख
              </h2>
              <span>
                Practical tips, wellness insights, and yoga inspiration. <br />
                योग, आरोग्य आणि सकारात्मक जीवनशैलीसाठी उपयुक्त लेख.
              </span>
            </div>
            <Image
              src="/demos/yoga/images/yoga-2.svg"
              alt="Yoga Illustration"
              width={300}
              height={300}
              className="d-none d-sm-flex"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section id="content">
        <div className="content-wrap">
          <div className="container">
            {/* Blog Grid */}
            <div className="row gutter-40">
              {blogPosts.length > 0 ? (
                blogPosts.map((post: BlogPost) => (
                  <div key={post.slug} className="col-lg-4 col-md-6 mb-5">
                    <article className="card border-0 shadow-sm h-100">
                      <Link href={`/blog/${post.slug}`}>
                        <Image
                          src={`${API_BASE}${post.image}`}
                          alt={post.title}
                          width={600}
                          height={400}
                          unoptimized
                          className="card-img-top"
                          style={{ height: "220px", objectFit: "cover" }}
                        />
                      </Link>
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <span className="badge bg-color text-white">
                            {post.category}
                          </span>
                          <small className="text-muted">{post.date}</small>
                        </div>
                        <h4 className="card-title mb-3">
                          <Link
                            href={`/blog/${post.slug}`}
                            className="text-dark text-decoration-none"
                          >
                            {post.title}
                          </Link>
                        </h4>
                        <p className="card-text text-muted">{post.excerpt}</p>
                      </div>
                      <div className="card-footer bg-transparent border-top">
                        <div className="d-flex justify-content-between align-items-center">
                          <small className="text-muted">By {post.author}</small>
                          <Link
                            href={`/blog/${post.slug}`}
                            className="btn btn-sm btn-link color p-0"
                          >
                            Read More | अधिक वाचा{" "}
                            <i className="bi-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </article>
                  </div>
                ))
              ) : (
                <p className="text-center text-muted">
                  No blog posts available right now. <br />
                  सध्या कोणतेही ब्लॉग लेख उपलब्ध नाहीत.
                </p>
              )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="d-flex justify-content-center mt-4">
                <nav aria-label="Blog pagination">
                  <ul className="pagination">
                    {/* Previous */}
                    <li
                      className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                    >
                      <Link
                        className="page-link"
                        href={`/blog?page=${Math.max(1, currentPage - 1)}`}
                      >
                        Previous
                      </Link>
                    </li>

                    {/* Page Numbers */}
                    {Array.from({ length: totalPages }).map((_, i) => {
                      const pageNumber = i + 1;
                      return (
                        <li
                          key={pageNumber}
                          className={`page-item ${
                            pageNumber === currentPage ? "active" : ""
                          }`}
                        >
                          <Link
                            className={`page-link ${
                              pageNumber === currentPage
                                ? "bg-color border-0"
                                : ""
                            }`}
                            href={`/blog?page=${pageNumber}`}
                          >
                            {pageNumber}
                          </Link>
                        </li>
                      );
                    })}

                    {/* Next */}
                    <li
                      className={`page-item ${
                        currentPage === totalPages ? "disabled" : ""
                      }`}
                    >
                      <Link
                        className="page-link"
                        href={`/blog?page=${Math.min(totalPages, currentPage + 1)}`}
                      >
                        Next
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            )}

            {/* Newsletter Section */}
            <div
              className="section mt-5 mb-0 rounded"
              style={{
                backgroundColor: "rgba(126, 150, 128, 0.2)",
                padding: "60px 40px",
              }}
            >
              <div className="row justify-content-center">
                <div className="col-lg-8 text-center">
                  <h3 className="fw-bold mb-3">
                    Subscribe to Our Newsletter <br />
                    आमच्या न्यूजलेटरसाठी सबस्क्राइब करा
                  </h3>
                  <p className="text-muted mb-4">
                    Get yoga tips, wellness advice, and mindful living updates.{" "}
                    <br />
                    योग, आरोग्य आणि सकारात्मक जीवनशैलीविषयी अपडेट्स मिळवा.
                  </p>
                  <form className="row g-2 justify-content-center">
                    <div className="col-md-6">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Enter your email | तुमचा ई-मेल"
                        required
                      />
                    </div>
                    <div className="col-auto">
                      <button
                        type="submit"
                        className="btn rounded bg-color text-white text-uppercase fw-semibold ls-1 py-2 px-4"
                      >
                        Subscribe | सबस्क्राइब करा
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
