export function Values() {
  const items = [
    {
      heading: "We are commited.",
      highlight: "commited",
      text: "Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration.",
    },
    {
      heading: "We are responsible.",
      highlight: "responsible",
      text: "Mass market iPhone buzz conversion analytics stock iteration responsive web design user experience business plan handshake. Return on investment seed round MVP backing supply chain.",
    },
    {
      heading: "We aim for progress.",
      highlight: "progress",
      text: "Bootstrapping rockstar first mover advantage business model canvas alpha deployment launch party beta facebook metrics gamification growth hacking customer focus.",
    },
  ]

  return (
    <section id="services" aria-labelledby="values-heading" className="mt-28 bg-dark-blue px-6 py-28 sm:px-12 lg:px-[100px] lg:py-32">
      <div className="mx-auto max-w-[1100px]">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 font-open-sans text-[16px] leading-[32px] text-white sm:text-[20px]">
            Our Blog
          </p>
          <h2 id="values-heading" className="mx-auto max-w-[600px] font-manrope text-[32px] leading-[1.4] text-white sm:text-[40px] sm:leading-[60px] lg:max-w-[842px] lg:text-[48px] lg:leading-[72px]">
            Value proposition accelerator product management venture
          </h2>
        </div>

        {/* Divider */}
        <hr className="mb-20 border-0 border-t border-white" />

        {/* Value items */}
        <dl className="space-y-20">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-16"
            >
              <dt className="shrink-0 font-manrope text-[28px] leading-[48px] text-white sm:w-[500px] sm:text-[36px] sm:leading-[56px] lg:text-[48px] lg:leading-[72px]">
                {item.heading.split(item.highlight).map((part, j) =>
                  j === 0 ? (
                    <span key={j}>
                      {part}
                      <span className="text-green">{item.highlight}</span>
                    </span>
                  ) : (
                    <span key={j}>{part}</span>
                  )
                )}
              </dt>
              <dd className="font-open-sans text-[16px] leading-[28px] text-light-grey sm:text-[20px] sm:leading-[32px]">
                {item.text}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
