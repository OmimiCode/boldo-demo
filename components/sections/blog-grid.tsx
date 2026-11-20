import Image from "next/image"

const posts = [
  {
    category: "Category",
    date: "November 22, 2021",
    dateTime: "2021-11-22",
    title: "Pitch termsheet backing validation focus release.",
    author: "Chandler Bing",
  },
  {
    category: "Category",
    date: "November 22, 2021",
    dateTime: "2021-11-22",
    title: "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
    author: "Rachel Green",
  },
  {
    category: "Category",
    date: "November 22, 2021",
    dateTime: "2021-11-22",
    title: "Beta prototype sales iPad gen-z marketing network effects value proposition",
    author: "Monica Geller",
  },
]

function BlogCard({
  post,
}: {
  post: (typeof posts)[number]
}) {
  return (
    <article className="flex flex-col">
      {/* Image */}
      <div className="mb-5 aspect-[4/3] w-full overflow-hidden rounded-[12px] bg-linear-to-br from-gray-200 to-gray-300">
        <div className="flex h-full w-full items-center justify-center">
          <svg aria-hidden="true" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      </div>

      {/* Meta */}
      <div className="mb-3 flex items-center gap-3">
        <span className="font-open-sans text-[14px] font-bold text-green sm:text-[16px]">
          {post.category}
        </span>
        <time
          dateTime={post.dateTime}
          className="font-open-sans text-[14px] text-gray sm:text-[16px]"
        >
          {post.date}
        </time>
      </div>

      {/* Title */}
      <h3 className="mb-5 font-open-sans text-[16px] leading-[28px] text-dark-blue sm:text-[18px] sm:leading-[28px]">
        {post.title}
      </h3>

      {/* Author */}
      <div className="mt-auto flex items-center gap-3">
        <div className="relative h-[32px] w-[32px] overflow-hidden rounded-full">
          <Image src="/person.png" alt="" fill className="object-cover" />
        </div>
        <span className="font-open-sans text-[14px] text-dark-blue sm:text-[16px]">
          {post.author}
        </span>
      </div>
    </article>
  )
}

export function BlogGrid() {
  return (
    <section aria-labelledby="latest-news-heading" className="px-6 pt-4 pb-16 sm:px-12 sm:pb-20 lg:px-[100px]">
      <div className="mx-auto max-w-[1200px]">
        {/* Divider */}
        <hr className="mb-16 border-0 border-t border-gray-200 sm:mb-20" />

        <h2 id="latest-news-heading" className="mb-10 font-manrope text-[28px] leading-[1.3] text-dark-blue sm:mb-14 sm:text-[36px] sm:leading-[52px] lg:text-[48px] lg:leading-[72px]">
          Latest news
        </h2>

        {/* First row */}
        <div className="mb-12 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10">
          {posts.map((post, i) => (
            <BlogCard key={i} post={post} />
          ))}
        </div>

        {/* Second row */}
        <div className="mb-16 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10">
          {posts.map((post, i) => (
            <BlogCard key={i + 3} post={post} />
          ))}
        </div>

        {/* Load more button */}
        <div className="text-center">
          <button
            type="button"
            className="rounded-[24px] border-2 border-dark-blue px-12 py-3 font-open-sans text-[16px] font-bold text-dark-blue transition-colors hover:bg-dark-blue hover:text-white focus:outline-none focus:ring-2 focus:ring-dark-blue focus:ring-offset-2 sm:text-[20px]"
          >
            Load more
          </button>
        </div>
      </div>
    </section>
  )
}
