export function Numbers() {
  const stats = [
    { value: "120m", label: "Cool feature title" },
    { value: "10.000", label: "Cool feature title" },
    { value: "240", label: "Cool feature title" },
  ]

  return (
    <section id="numbers" aria-labelledby="numbers-heading" className="px-6 pt-24 pb-24 sm:px-12 lg:px-[100px]">
      <div className="mx-auto max-w-[1000px]">
        {/* Heading */}
        <div className="mb-20 text-center">
          <p className="mb-3 font-open-sans text-[16px] leading-[32px] text-dark-blue sm:text-[20px]">
            Our numbers
          </p>
          <h2 id="numbers-heading" className="mx-auto max-w-[600px] font-manrope text-[32px] leading-[1.4] text-dark-blue sm:text-[40px] sm:leading-[60px] lg:max-w-[842px] lg:text-[48px] lg:leading-[72px]">
            Handshake infographic mass market crowdfunding iteration.
          </h2>
        </div>

        {/* Stats */}
        <dl className="flex flex-col items-center gap-12 sm:flex-row sm:justify-between sm:gap-0">
          {stats.map((stat) => (
            <div key={stat.value}>
              <dt className="font-manrope text-[56px] leading-[56px] text-dark-blue sm:text-[72px] lg:text-[96px] lg:leading-[56px]">
                {stat.value}
              </dt>
              <dd className="mt-8 font-open-sans text-[20px] leading-[36px] text-dark-blue sm:text-[24px]">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
