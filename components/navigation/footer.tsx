import Link from "next/link"

export function Footer() {
  return (
    <footer
      aria-label="Site footer"
      className="bg-white px-6 pt-20 pb-16 sm:px-12 sm:pt-24 lg:px-[100px]"
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-10 sm:grid-cols-4 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-16">
        {/* Brand */}
        <div className="col-span-2 sm:col-span-4 lg:col-span-1">
          <Link href="/" aria-label="Boldo — Go to homepage" className="mb-6 inline-flex items-center gap-2">
            <svg width="42" height="34" viewBox="0 0 42 34" fill="none" aria-hidden="true">
              <rect y="17" width="42" height="17" rx="4" fill="#0A2640" />
              <rect width="20" height="13" rx="4" fill="#0A2640" />
            </svg>
            <span className="font-manrope text-[28px] leading-[34px] font-bold text-dark-blue sm:text-[43.25px]">
              Boldo
            </span>
          </Link>
          <p className="mb-6 max-w-[300px] font-open-sans text-[14px] leading-[24px] text-gray sm:text-[16px] sm:leading-[28px]">
            Social media validation business model canvas graphical user
            interface launch party creative facebook iPad twitter.
          </p>
          <p className="font-open-sans text-[14px] leading-[28px] text-gray sm:text-[16px]">
            <small>&copy; {new Date().getFullYear()} Boldo. All rights reserved.</small>
          </p>
        </div>

        {/* Landings */}
        <nav aria-label="Landings">
          <h4 className="mb-4 font-open-sans text-[16px] leading-[32px] font-bold text-black sm:text-[20px]">
            Landings
          </h4>
          <ul className="space-y-0 font-open-sans text-[16px] leading-[32px] text-gray sm:text-[20px]" role="list">
            <li><Link href="/" className="transition-colors hover:text-dark-blue">Home</Link></li>
            <li><Link href="/#numbers" className="transition-colors hover:text-dark-blue">Products</Link></li>
            <li><Link href="/#services" className="transition-colors hover:text-dark-blue">Services</Link></li>
          </ul>
        </nav>

        {/* Company */}
        <nav aria-label="Company">
          <h4 className="mb-4 font-open-sans text-[16px] leading-[32px] font-bold text-black sm:text-[20px]">
            Company
          </h4>
          <ul className="space-y-0 font-open-sans text-[16px] leading-[32px] text-gray sm:text-[20px]" role="list">
            <li><Link href="/" className="transition-colors hover:text-dark-blue">Home</Link></li>
            <li>
              <Link href="#" className="inline-flex items-center gap-3 transition-colors hover:text-dark-blue">
                Careers
                <span className="rounded-[120px] bg-green px-3.5 py-px font-open-sans text-[13px] leading-[28px] font-bold text-dark-blue">
                  Hiring!
                </span>
              </Link>
            </li>
            <li><Link href="/#services" className="transition-colors hover:text-dark-blue">Services</Link></li>
          </ul>
        </nav>

        {/* Resources */}
        <nav aria-label="Resources">
          <h4 className="mb-4 font-open-sans text-[16px] leading-[32px] font-bold text-black sm:text-[20px]">
            Resources
          </h4>
          <ul className="space-y-0 font-open-sans text-[16px] leading-[32px] text-gray sm:text-[20px]" role="list">
            <li><Link href="/blog" className="transition-colors hover:text-dark-blue">Blog</Link></li>
            <li><Link href="/#numbers" className="transition-colors hover:text-dark-blue">Products</Link></li>
            <li><Link href="/#services" className="transition-colors hover:text-dark-blue">Services</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
