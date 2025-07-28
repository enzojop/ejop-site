import { FileText, Search, Users, TrendingUp, Shield, Lightbulb } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Services() {
  const services = [
    {
      icon: FileText,
      title: "Gerador de Editais com IA",
      description: "Sistema inteligente para confecção de editais personalizados com assistente de IA integrado.",
    },
    {
      icon: Shield,
      title: "Consultoria Jurídica",
      description: "Assessoria jurídica especializada em legislação de licitações e compras públicas.",
    },
    {
      icon: Search,
      title: "Análise de Conformidade",
      description: "Revisão jurídica de editais e processos para garantir conformidade com a legislação.",
    },
    {
      icon: Users,
      title: "Assessoria em Comissões",
      description: "Suporte técnico-jurídico para comissões de licitação e pregoeiros.",
    },
    {
      icon: TrendingUp,
      title: "Otimização de Processos",
      description: "Consultoria para modernização e eficiência dos processos licitatórios.",
    },
    {
      icon: Lightbulb,
      title: "Capacitação de Servidores",
      description: "Treinamentos especializados para servidores públicos em licitações.",
    },
  ]

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">Nossos Serviços</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Oferecemos consultoria jurídica especializada para órgãos públicos em todas as fases do processo licitatório
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-2 border-gray-100 hover:border-[#1e3a5f] transition-colors group">
              <CardHeader>
                <div className="w-12 h-12 bg-[#f5f1e8] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#1e3a5f] transition-colors">
                  <service.icon className="h-6 w-6 text-[#1e3a5f] group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-[#1e3a5f]">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
