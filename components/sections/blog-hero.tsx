import Image from "next/image"

export function BlogHero() {
  return (
    <section aria-labelledby="blog-heading" className="px-6 pt-12 pb-16 sm:px-12 sm:pt-16 sm:pb-20 lg:px-[100px]">
      <div className="mx-auto max-w-[1200px]">
        {/* Heading */}
        <div className="mb-12 text-center sm:mb-16">
          <p className="mb-3 font-open-sans text-[16px] leading-[32px] text-dark-blue sm:text-[20px]">
            Blog
          </p>
          <h1 id="blog-heading" className="font-manrope text-[36px] leading-[1.3] text-dark-blue sm:text-[48px] sm:leading-[72px]">
            Thoughts and words
          </h1>
        </div>

        {/* Featured Post */}
        <article
          aria-label="Featured post"
          className="mx-auto max-w-[900px] overflow-hidden rounded-[12px] border border-gray-100 shadow-sm"
        >
          <div className="flex flex-col sm:flex-row">
            {/* Image */}
            <div className="relative h-[240px] w-full sm:h-auto sm:w-[380px] sm:shrink-0">
              <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-gray-200 to-gray-300">
                <svg aria-hidden="true" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            {/* Content */}
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <div className="mb-4 flex items-center gap-3">
                <span className="font-open-sans text-[14px] font-bold text-green sm:text-[16px]">
                  Category
                </span>
                <time
                  dateTime="2021-11-22"
                  className="font-open-sans text-[14px] text-gray sm:text-[16px]"
                >
                  November 22, 2021
                </time>
              </div>
              <h2 className="mb-6 font-manrope text-[24px] leading-[1.4] text-dark-blue sm:text-[32px] sm:leading-[48px] lg:text-[36px] lg:leading-[52px]">
                Pitch termsheet backing validation focus release.
              </h2>
              <div className="flex items-center gap-3">
                <div className="relative h-[36px] w-[36px] overflow-hidden rounded-full">
                  <Image src="/person.png" alt="" fill className="object-cover" />
                </div>
                <span className="font-open-sans text-[14px] text-dark-blue sm:text-[16px]">
                  Chandler Bing
                </span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
