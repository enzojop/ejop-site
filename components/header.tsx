"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "#inicio", label: "Início" },
    { href: "#servicos", label: "Serviços" },
    { href: "#cursos", label: "Cursos" },
    { href: "#sobre", label: "Sobre" },
    { href: "#contato", label: "Contato" },
  ]

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative">
              <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2d5a87] text-white px-6 py-3 rounded-xl font-bold text-xl shadow-lg">
                <span className="text-2xl">EJOP</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#f5f1e8] rounded-full border-2 border-[#1e3a5f]"></div>
            </div>
            <div className="hidden sm:block">
              <div className="text-[#1e3a5f] font-bold text-lg leading-tight">
                Consultoria e<br />
                <span className="text-[#2d5a87] text-sm font-medium">Tecnologia</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[#1e3a5f] hover:text-[#2d5a87] font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button className="bg-[#1e3a5f] hover:bg-[#2d5a87] text-white">Fale Conosco</Button>
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-[#1e3a5f]" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-[#1e3a5f] hover:text-[#2d5a87] font-medium py-2 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button className="bg-[#1e3a5f] hover:bg-[#2d5a87] text-white mt-4">Fale Conosco</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
