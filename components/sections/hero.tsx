export function Hero() {
  return (
    <section id="about" aria-labelledby="hero-heading" className="px-6 pt-20 pb-24 sm:px-12 sm:pt-24 sm:pb-28 lg:px-[100px] lg:pt-24 lg:pb-28">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-[600px]">
          <p className="mb-3 font-open-sans text-[16px] leading-[32px] text-dark-blue sm:text-[20px]">
            About
          </p>
          <h1 id="hero-heading" className="font-manrope text-[32px] leading-[1.4] sm:text-[40px] sm:leading-[60px] lg:text-[48px] lg:leading-[72px]">
            We love to make great things, things that matter.
          </h1>
        </div>
        <div className="max-w-[455px] lg:pt-12">
          <p className="font-open-sans text-[14px] leading-[24px] text-dark-blue sm:text-[16px] sm:leading-[28px]">
            Funding handshake buyer business-to-business metrics iPad
            partnership. First mover advantage innovator success deployment
            non-disclosure.
          </p>
        </div>
      </div>
    </section>
  )
}
