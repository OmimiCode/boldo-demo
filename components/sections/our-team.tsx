import Image from "next/image"

export function OurTeam() {
  const mainMembers = [
    { name: "Michael Scott", role: "General Manager" },
    { name: "Michael Scott", role: "General Manager" },
    { name: "Michael Scott", role: "General Manager" },
  ]

  const secondaryMembers = [
    { name: "Dwight Schrute", role: "General Manager" },
    { name: "Pam Beetsley", role: "General Manager" },
    { name: "Pam Beetsley", role: "General Manager" },
    { name: "Pam Beetsley", role: "General Manager" },
  ]

  return (
    <section id="team" aria-labelledby="team-heading" className="px-6 pt-28 pb-20 sm:px-12 lg:px-[100px] lg:pt-32 lg:pb-24">
      <div className="mx-auto max-w-[900px]">
        {/* Intro */}
        <div className="mb-14">
          <p className="mb-3 font-open-sans text-[16px] leading-[32px] text-gray sm:text-[20px]">
            Our team
          </p>
          <h2 id="team-heading" className="font-manrope text-[32px] leading-[1.4] sm:text-[40px] sm:leading-[60px] lg:text-[48px] lg:leading-[72px]">
            The people behind the work
          </h2>
          <p className="mt-5 max-w-[800px] font-open-sans text-[16px] leading-[28px] text-gray sm:text-[20px] sm:leading-[32px]">
            Conversion angel investor entrepreneur first mover advantage.
            Handshake infographic mass market crowdfunding iteration. Traction
            stock user experience deployment beta innovator incubator focus.
          </p>
        </div>

        {/* Main Team Members */}
        <ul className="mb-28 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-16" role="list">
          {mainMembers.map((member, i) => (
            <li key={i}>
              <figure className="flex flex-col items-start">
                <div className="relative aspect-square w-full max-w-[250px] overflow-hidden rounded-[24px]">
                  <Image
                    src="/person.png"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-6">
                  <p className="font-manrope text-[22px] leading-[48px] sm:text-[28px]">
                    {member.name}
                  </p>
                  <p className="font-open-sans text-[16px] leading-[32px] text-gray sm:text-[20px]">
                    {member.role}
                  </p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        {/* Secondary Team Members */}
        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-[100px] sm:gap-y-12" role="list">
          {secondaryMembers.map((member, i) => (
            <li key={i} className="flex items-center gap-6">
              <div className="relative h-[80px] w-[80px] shrink-0 overflow-hidden rounded-[24px] sm:h-[120px] sm:w-[120px]">
                <Image
                  src="/person.png"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-manrope text-[22px] leading-[48px] sm:text-[28px]">
                  {member.name}
                </p>
                <p className="font-open-sans text-[16px] leading-[32px] text-gray sm:text-[20px]">
                  {member.role}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
