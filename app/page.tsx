import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { AIGenerator } from "@/components/ai-generator"
import { Courses } from "@/components/courses"
import { About } from "@/components/about"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <AIGenerator />
      <Courses />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
