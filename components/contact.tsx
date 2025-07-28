"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">Entre em Contato</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para ajudar sua empresa a alcançar o sucesso em licitações públicas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#1e3a5f] mb-6">Fale com nossos especialistas</h3>
              <p className="text-gray-600 mb-8">
                Nossa equipe está disponível para esclarecer suas dúvidas e apresentar as melhores soluções para sua
                empresa.
              </p>
            </div>

            <div className="grid gap-6">
              <Card className="border-l-4 border-l-[#1e3a5f]">
                <CardContent className="flex items-center p-6">
                  <Phone className="h-8 w-8 text-[#1e3a5f] mr-4" />
                  <div>
                    <div className="font-semibold text-[#1e3a5f]">Telefone</div>
                    <div className="text-gray-600">(11) 4002-8922</div>
                    <div className="text-gray-600">(11) 99876-5432</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-[#1e3a5f]">
                <CardContent className="flex items-center p-6">
                  <Mail className="h-8 w-8 text-[#1e3a5f] mr-4" />
                  <div>
                    <div className="font-semibold text-[#1e3a5f]">E-mail</div>
                    <div className="text-gray-600">contato@ejopconsultoria.com.br</div>
                    <div className="text-gray-600">cursos@ejopconsultoria.com.br</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-[#1e3a5f]">
                <CardContent className="flex items-center p-6">
                  <MapPin className="h-8 w-8 text-[#1e3a5f] mr-4" />
                  <div>
                    <div className="font-semibold text-[#1e3a5f]">Endereço</div>
                    <div className="text-gray-600">Av. Faria Lima, 2500 - Sala 1205</div>
                    <div className="text-gray-600">São Paulo - SP, 04538-132</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-[#1e3a5f]">
                <CardContent className="flex items-center p-6">
                  <Clock className="h-8 w-8 text-[#1e3a5f] mr-4" />
                  <div>
                    <div className="font-semibold text-[#1e3a5f]">Horário de Atendimento</div>
                    <div className="text-gray-600">Segunda a Sexta: 8h às 18h</div>
                    <div className="text-gray-600">Sábado: 8h às 12h</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-[#1e3a5f]">Envie sua mensagem</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome *</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa</Label>
                    <Input id="company" name="company" value={formData.company} onChange={handleChange} />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-[#1e3a5f] hover:bg-[#2d5a87] text-white">
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
