import { Navbar } from "@/components/navigation/navbar"
import { BlogHero } from "@/components/sections/blog-hero"
import { BlogGrid } from "@/components/sections/blog-grid"
import { CTA } from "@/components/sections/cta"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <BlogHero />
      <BlogGrid />
      <CTA />
    </div>
  )
}
