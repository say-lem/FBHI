import React from "react"
import Image from "next/image"
import Link from "next/link"

const blogs = [
              {
                date: "20 Jan, 2025",
                title:
                  "Providing Food, Clean Water, and Medical Care to Those Who Need",
                slug: "/blog/1",
                img: "/image2.jpeg",
              },
              {
                date: "25 Jan, 2025",
                title: "No One Should Go Hungry, Thirsty, or Without Treatment",
                slug: "/blog/2",
                img: "/image6.jpeg",
              },
              {
                date: "30 Jan, 2025",
                title: "Nutritious Meals, Safe Water, and Healthcare",
                slug: "/blog/3",
                img: "/image7.jpeg",
              },
            ]

export default function BlogsSection() {
  return (
    <section
          aria-labelledby="blog-heading"
          className="max-w-7xl mx-auto px-6 lg:px-8 py-12 bg-slate-50"
        >
          <div className="text-center">
            <h3 className="text-sm font-semibold text-amber-500">
              From The Blog
            </h3>
            <h2 id="blog-heading" className="mt-2 text-2xl font-bold">
              Our Latest News And Articles
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 ">
            {blogs.map((post) => (
              <article
                key={post.slug}
                className="rounded-md overflow-hidden bg-emerald-900 text-white shadow-2xl border border-emerald-800"
              >
                {/* Image area */}
                <div className="relative w-full h-44 md:h-48 lg:h-52">
                  <Image
                    src={post.img}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  {/* date badge */}
                  <div className="absolute left-4 bottom-3">
                    <div className="relative inline-flex items-center bg-white text-slate-800 text-sm font-medium px-3 py-1.5 rounded-full shadow">
                      <span>{post.date}</span>
                      {/* small triangle pointer using SVG */}
                      <svg
                        className="absolute -bottom-2 left-4"
                        width="16"
                        height="8"
                        viewBox="0 0 16 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden
                      >
                        <path d="M0 0L8 8L16 0H0Z" fill="white" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Card content */}
                <div className="p-6">
                  <h4 className="text-lg md:text-xl font-semibold leading-tight text-white">
                    {post.title}
                  </h4>
                  <p className="mt-3 text-sm text-slate-200 leading-relaxed">
                    Short excerpt for the article to entice readers.
                  </p>

                  {/* thin divider like the screenshot */}
                  <div className="mt-5 border-t border-emerald-800" />

                  <div className="mt-4 text-center">
                    <Link
                      href={post.slug}
                      prefetch={false}
                      className="inline-flex items-center text-sm font-medium text-white hover:underline"
                    >
                      Read more &nbsp;→
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* center button like in screenshot */}
          <div className="text-center mt-8">
            <Link
              href="/blog"
              prefetch={false}
              className="inline-block bg-emerald-600 text-white rounded-full px-6 py-2 text-sm font-medium hover:bg-emerald-700 shadow"
            >
              View All Blogs
            </Link>
          </div>
        </section>
  )
}
