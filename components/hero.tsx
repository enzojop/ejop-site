import { ArrowRight, Award, Users, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="inicio" className="pt-16 bg-gradient-to-br from-[#f5f1e8] to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e3a5f] leading-tight">
                Consultoria Jurídica
                <span className="block text-[#2d5a87]">para Órgãos Públicos</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-xl">
                A EJOP Consultoria e Tecnologia oferece assessoria jurídica especializada em licitações para órgãos
                públicos, incluindo confecção de editais com tecnologia de IA e consultoria em processos licitatórios.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#1e3a5f] hover:bg-[#2d5a87] text-white">
                Nossos Serviços
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white bg-transparent"
              >
                Conheça os Cursos
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="h-8 w-8 text-[#1e3a5f]" />
                </div>
                <div className="text-2xl font-bold text-[#1e3a5f]">5+</div>
                <div className="text-sm text-gray-600">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-8 w-8 text-[#1e3a5f]" />
                </div>
                <div className="text-2xl font-bold text-[#1e3a5f]">50+</div>
                <div className="text-sm text-gray-600">Órgãos Atendidos</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <BookOpen className="h-8 w-8 text-[#1e3a5f]" />
                </div>
                <div className="text-2xl font-bold text-[#1e3a5f]">800+</div>
                <div className="text-sm text-gray-600">Editais Elaborados</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-[#1e3a5f] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Consultoria Especializada</h3>
              <p className="mb-6">
                Agende uma conversa com nossos especialistas jurídicos e descubra como podemos otimizar os processos
                licitatórios do seu órgão público.
              </p>
              <Button className="bg-white text-[#1e3a5f] hover:bg-gray-100 w-full">Solicitar Consultoria</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
