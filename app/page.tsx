import { Navbar } from "@/components/navigation/navbar"
import { Hero } from "@/components/sections/hero"
import { Numbers } from "@/components/sections/numbers"
import { OurStory } from "@/components/sections/our-story"
import { OurTeam } from "@/components/sections/our-team"
import { Values } from "@/components/sections/values"
import { CTA } from "@/components/sections/cta"

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-green">
        <Navbar />
        <Hero />
      </div>
      <Numbers />
      <OurStory />
      <OurTeam />
      <Values />
      <CTA />
    </div>
  )
}
