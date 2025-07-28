import { Clock, Users, BadgeIcon as Certificate, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Courses() {
  const courses = [
    {
      title: "Licitações para Iniciantes",
      description: "Curso completo sobre os fundamentos das licitações públicas no Brasil.",
      duration: "20 horas",
      students: "150+ alunos",
      rating: 4.9,
      price: "R$ 297",
      badge: "Mais Popular",
      features: [
        "Lei 8.666/93 e Lei 14.133/21",
        "Modalidades de licitação",
        "Documentação necessária",
        "Certificado de conclusão",
      ],
    },
    {
      title: "Pregão Eletrônico Avançado",
      description: "Especialização em pregão eletrônico com foco em estratégias vencedoras.",
      duration: "30 horas",
      students: "200+ alunos",
      rating: 4.8,
      price: "R$ 497",
      badge: "Avançado",
      features: ["Estratégias de lance", "Análise de editais", "Recursos e impugnações", "Cases de sucesso"],
    },
    {
      title: "Compliance em Licitações",
      description: "Conformidade legal e boas práticas em processos licitatórios.",
      duration: "15 horas",
      students: "80+ alunos",
      rating: 4.7,
      price: "R$ 397",
      badge: "Especialização",
      features: [
        "Marco legal das licitações",
        "Controles internos",
        "Auditoria e fiscalização",
        "Prevenção de irregularidades",
      ],
    },
  ]

  return (
    <section id="cursos" className="py-20 bg-[#f5f1e8]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">Cursos de Capacitação</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Desenvolva suas competências em licitações com nossos cursos práticos e atualizados
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="bg-[#1e3a5f] text-white">
                    {course.badge}
                  </Badge>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{course.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-[#1e3a5f] text-xl">{course.title}</CardTitle>
                <CardDescription className="text-gray-600">{course.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {course.students}
                  </div>
                </div>

                <ul className="space-y-2">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <Certificate className="h-4 w-4 text-[#1e3a5f] mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-[#1e3a5f]">{course.price}</span>
                    <span className="text-sm text-gray-500">à vista</span>
                  </div>
                  <Button className="w-full bg-[#1e3a5f] hover:bg-[#2d5a87] text-white">Inscrever-se Agora</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Precisa de um curso personalizado para sua empresa?</p>
          <Button
            variant="outline"
            className="border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white bg-transparent"
          >
            Solicitar Treinamento In-Company
          </Button>
        </div>
      </div>
    </section>
  )
}
