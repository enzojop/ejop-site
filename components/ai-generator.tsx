import { Bot, FileText, Zap, Shield, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function AIGenerator() {
  const features = [
    {
      icon: Bot,
      title: "Assistente de IA Integrado",
      description: "Inteligência artificial especializada em legislação de licitações para orientação em tempo real.",
    },
    {
      icon: FileText,
      title: "Templates Personalizáveis",
      description: "Modelos de editais atualizados conforme a Lei 14.133/21 e demais normativas vigentes.",
    },
    {
      icon: Zap,
      title: "Geração Rápida",
      description: "Criação de editais completos em minutos, com todos os anexos e documentos necessários.",
    },
    {
      icon: Shield,
      title: "Conformidade Garantida",
      description: "Verificação automática de conformidade legal e sugestões de melhorias.",
    },
  ]

  const benefits = [
    "Redução de 80% no tempo de elaboração",
    "Conformidade com Lei 14.133/21",
    "Revisão jurídica automatizada",
    "Biblioteca de cláusulas atualizadas",
    "Suporte técnico especializado",
    "Atualizações automáticas da legislação",
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-[#1e3a5f] to-[#2d5a87] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 mb-6">
            <Bot className="h-5 w-5 mr-2" />
            <span className="text-sm font-medium">Tecnologia de Ponta</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Gerador de Editais com IA</h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Revolucione a elaboração de editais com nossa plataforma inteligente, desenvolvida especificamente para
            órgãos públicos
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Como Funciona</h3>
              <p className="text-blue-100 mb-6">
                Nossa plataforma utiliza inteligência artificial treinada especificamente em legislação de licitações
                para gerar editais personalizados e juridicamente seguros.
              </p>
            </div>

            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-white/10 rounded-lg p-3 flex-shrink-0">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{feature.title}</h4>
                    <p className="text-blue-100 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Benefícios da Plataforma</h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-blue-100">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-white/20">
              <Button className="bg-white text-[#1e3a5f] hover:bg-gray-100 w-full">
                Solicitar Demonstração
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Pronto para Modernizar seus Processos?</CardTitle>
              <CardDescription className="text-blue-100">
                Agende uma demonstração gratuita e veja como nossa IA pode transformar a elaboração de editais no seu
                órgão
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-[#1e3a5f] hover:bg-gray-100">Agendar Demonstração</Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#1e3a5f] bg-transparent"
              >
                Falar com Especialista
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
