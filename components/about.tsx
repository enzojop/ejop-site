import { Target, Eye, Award, Users } from "lucide-react"

export function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">
                Sobre a EJOP Consultoria e Tecnologia
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Fundada em 2019, a EJOP Consultoria e Tecnologia é especializada em assessoria jurídica para órgãos
                públicos, oferecendo soluções inovadoras que combinam expertise jurídica com tecnologia de ponta em
                licitações.
              </p>
              <p className="text-gray-600">
                Nossa equipe é formada por especialistas em direito administrativo e licitações, garantindo segurança
                jurídica e conformidade legal em todos os processos.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-[#f5f1e8] rounded-lg">
                <div className="text-3xl font-bold text-[#1e3a5f] mb-2">5+</div>
                <div className="text-sm text-gray-600">Anos no Mercado</div>
              </div>
              <div className="text-center p-4 bg-[#f5f1e8] rounded-lg">
                <div className="text-3xl font-bold text-[#1e3a5f] mb-2">50+</div>
                <div className="text-sm text-gray-600">Órgãos Atendidos</div>
              </div>
              <div className="text-center p-4 bg-[#f5f1e8] rounded-lg">
                <div className="text-3xl font-bold text-[#1e3a5f] mb-2">95%</div>
                <div className="text-sm text-gray-600">Conformidade Legal</div>
              </div>
              <div className="text-center p-4 bg-[#f5f1e8] rounded-lg">
                <div className="text-3xl font-bold text-[#1e3a5f] mb-2">24h</div>
                <div className="text-sm text-gray-600">Suporte Jurídico</div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-[#1e3a5f] text-white p-8 rounded-2xl">
              <Target className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-bold mb-3">Nossa Missão</h3>
              <p>
                Fornecer assessoria jurídica especializada em licitações para órgãos públicos, garantindo conformidade
                legal, transparência e eficiência nos processos de compras públicas.
              </p>
            </div>

            <div className="bg-[#f5f1e8] p-8 rounded-2xl">
              <Eye className="h-12 w-12 text-[#1e3a5f] mb-4" />
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">Nossa Visão</h3>
              <p className="text-gray-600">
                Ser reconhecida como a principal referência em consultoria de licitações no Brasil, promovendo
                transparência e eficiência nas compras públicas.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-6 border-2 border-[#1e3a5f] rounded-lg">
                <Award className="h-8 w-8 text-[#1e3a5f] mx-auto mb-2" />
                <div className="font-semibold text-[#1e3a5f]">Excelência</div>
              </div>
              <div className="text-center p-6 border-2 border-[#1e3a5f] rounded-lg">
                <Users className="h-8 w-8 text-[#1e3a5f] mx-auto mb-2" />
                <div className="font-semibold text-[#1e3a5f]">Parceria</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
