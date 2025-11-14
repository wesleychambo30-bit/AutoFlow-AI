'use client'

import { useState } from 'react'
import { Sparkles, MessageSquare, Zap, Calendar, ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function AutoFlowIA() {
  const [showLogin, setShowLogin] = useState(false)

  if (showLogin) {
    return <LoginScreen onBack={() => setShowLogin(false)} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 sm:py-24">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          {/* Logo */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-2xl">
                <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
              </div>
            </div>
          </div>

          {/* Título */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                AutoFlow IA
              </span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-medium">
              Seu assistente que faz tudo sozinho
            </p>
            <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Menos trabalho. Mais vida.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg"
              onClick={() => setShowLogin(true)}
              className="w-full sm:w-auto text-lg px-8 py-6 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Criar conta
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => setShowLogin(true)}
              className="w-full sm:w-auto text-lg px-8 py-6 rounded-2xl border-2 border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950 transition-all duration-300"
            >
              Login
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <Card className="rounded-3xl border-2 border-blue-200 dark:border-blue-900 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl">Responder Mensagens</CardTitle>
              <CardDescription className="text-base">
                Auto-respostas inteligentes para WhatsApp, Instagram e e-mail
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">Aprende seu estilo de escrita</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">Respostas personalizadas</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">Fluxos automáticos</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Feature 2 */}
          <Card className="rounded-3xl border-2 border-purple-200 dark:border-purple-900 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl">Criar Conteúdo</CardTitle>
              <CardDescription className="text-base">
                Posts e vídeos prontos a partir de fotos, áudios ou frases
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">Geração automática de posts</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">Hashtags virais</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">Roteiros de vídeo</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Feature 3 */}
          <Card className="rounded-3xl border-2 border-blue-200 dark:border-blue-900 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl">Organizar Rotina</CardTitle>
              <CardDescription className="text-base">
                Transforme informações em tarefas e lembretes automáticos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">Agenda inteligente</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">Lembretes automáticos</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">Priorização de tarefas</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Planos e Preços
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Escolha o plano ideal para você
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Free Plan */}
          <Card className="rounded-3xl border-2 border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl mb-2">Free</CardTitle>
              <div className="text-4xl font-bold mb-2">R$ 0</div>
              <CardDescription>Para começar</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">30 mensagens automáticas/mês</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">5 conteúdos por mês</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">3 fluxos básicos</span>
                </li>
              </ul>
              <Button 
                variant="outline" 
                className="w-full rounded-xl"
                onClick={() => setShowLogin(true)}
              >
                Começar grátis
              </Button>
            </CardContent>
          </Card>

          {/* Pro Plan */}
          <Card className="rounded-3xl border-2 border-blue-500 dark:border-blue-600 bg-white dark:bg-gray-900 shadow-2xl scale-105 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold px-4 py-1 rounded-bl-xl">
              POPULAR
            </div>
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl mb-2">Pro</CardTitle>
              <div className="text-4xl font-bold mb-2">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  R$ 19
                </span>
              </div>
              <CardDescription>por mês</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-medium">Respostas ilimitadas</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-medium">Conteúdo ilimitado</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-medium">WhatsApp Business</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-medium">Fluxos avançados</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-medium">Estilos personalizados</span>
                </li>
              </ul>
              <Button 
                className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                onClick={() => setShowLogin(true)}
              >
                Começar agora
              </Button>
            </CardContent>
          </Card>

          {/* Ultra Plan */}
          <Card className="rounded-3xl border-2 border-purple-200 dark:border-purple-900 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl mb-2">Ultra</CardTitle>
              <div className="text-4xl font-bold mb-2">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  R$ 39
                </span>
              </div>
              <CardDescription>por mês</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-medium">Tudo do Pro</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-medium">Automações infinitas</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-medium">Publicação direta</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-medium">Múltiplas contas</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-medium">Suporte prioritário</span>
                </li>
              </ul>
              <Button 
                variant="outline"
                className="w-full rounded-xl border-2 border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-950"
                onClick={() => setShowLogin(true)}
              >
                Começar agora
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AutoFlow IA
            </span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Seu assistente que faz tudo sozinho
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
            © 2026 AutoFlow IA. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

function LoginScreen({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950 flex items-center justify-center p-4">
      <Card className="w-full max-w-md rounded-3xl border-2 border-blue-200 dark:border-blue-900 shadow-2xl">
        <CardHeader className="text-center pb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-3xl">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Bem-vindo ao AutoFlow IA
            </span>
          </CardTitle>
          <CardDescription className="text-base mt-2">
            Deixe a IA trabalhar por você
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:border-blue-500 focus:outline-none transition-colors"
            />
            <input
              type="password"
              placeholder="Sua senha"
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:border-blue-500 focus:outline-none transition-colors"
            />
          </div>
          
          <Button className="w-full py-6 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg font-medium shadow-lg hover:shadow-xl transition-all">
            Entrar
          </Button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white dark:bg-gray-900 text-gray-500">ou</span>
            </div>
          </div>

          <Button 
            variant="outline" 
            className="w-full py-6 rounded-xl border-2 text-base"
          >
            Criar nova conta
          </Button>

          <Button 
            variant="ghost" 
            onClick={onBack}
            className="w-full text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
          >
            ← Voltar para início
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
