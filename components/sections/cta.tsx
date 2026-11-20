"use client"

export function CTA() {
  return (
    <section aria-label="Newsletter signup" className="px-6 pt-28 pb-12 sm:px-12 lg:px-[100px] lg:pt-32">
      <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[12px] bg-dark-blue px-6 py-16 sm:px-16 sm:py-[72px]">
        {/* Background circle decoration */}
        <div aria-hidden="true" className="pointer-events-none absolute -top-[800px] -right-[400px] h-[1200px] w-[1200px] rounded-full bg-cta-bg" />

        <div className="relative z-10 mx-auto max-w-[716px] text-center">
          <h2 className="mb-10 font-manrope text-[28px] leading-[1.4] text-white sm:text-[36px] sm:leading-[56px] lg:text-[48px] lg:leading-[72px]">
            An enterprise template to ramp up your company website
          </h2>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-center sm:gap-4"
          >
            <label htmlFor="cta-email" className="sr-only">
              Email address
            </label>
            <input
              id="cta-email"
              type="email"
              autoComplete="email"
              required
              placeholder="Your email address"
              className="w-full rounded-[240px] border-2 border-white bg-white px-8 py-4 font-open-sans text-[16px] leading-[32px] text-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-green sm:max-w-[370px] sm:text-[20px]"
            />
            <button
              type="submit"
              className="w-full cursor-pointer rounded-[56px] border-2 border-green bg-green px-14 py-4 font-open-sans text-[16px] leading-[28px] font-bold whitespace-nowrap text-dark-blue transition-colors hover:bg-green/90 focus:outline-none focus:ring-2 focus:ring-white sm:w-auto sm:text-[20px]"
            >
              Start now
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
