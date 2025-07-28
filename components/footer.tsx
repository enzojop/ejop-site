import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1e3a5f] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="relative mb-4">
              <div className="bg-gradient-to-br from-white/20 to-white/10 text-white px-6 py-3 rounded-xl font-bold text-xl shadow-lg inline-block">
                <span className="text-2xl">EJOP</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#f5f1e8] rounded-full border-2 border-white/30"></div>
            </div>
            <p className="text-gray-300">
              Especialistas em consultoria jurídica e tecnologia para licitações públicas, oferecendo soluções
              inovadoras para órgãos governamentais.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Serviços</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Consultoria em Licitações
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Elaboração de Propostas
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Análise de Editais
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Acompanhamento de Processos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Cursos</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Licitações para Iniciantes
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Pregão Eletrônico
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Compliance
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Treinamento In-Company
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>(11) 4002-8922</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>contato@ejopconsultoria.com.br</span>
              </div>
              <div className="text-sm">Av. Faria Lima, 2500 - Sala 1205, São Paulo - SP, 04538-132</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 EJOP Consultoria e Tecnologia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
