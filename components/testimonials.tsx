import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function Testimonials() {
  const testimonials = [
    {
      name: "Dr. Roberto Almeida",
      company: "Prefeitura Municipal de Campinas",
      content:
        "A EJOP revolucionou nossos processos licitatórios. O gerador de editais com IA reduziu nosso tempo de elaboração em 75%.",
      rating: 5,
    },
    {
      name: "Dra. Patricia Santos",
      company: "Secretaria de Educação - MG",
      content:
        "Consultoria jurídica excepcional. Nos ajudaram a modernizar todos os nossos processos com total segurança jurídica.",
      rating: 5,
    },
    {
      name: "Carlos Eduardo Lima",
      company: "Tribunal Regional do Trabalho - SP",
      content:
        "Profissionais altamente qualificados. A capacitação dos nossos servidores foi fundamental para nossa equipe.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-[#f5f1e8]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">O que nossos clientes dizem</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conheça os resultados alcançados por empresas que confiaram em nossos serviços
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-[#1e3a5f] mb-4" />
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-[#1e3a5f]">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
