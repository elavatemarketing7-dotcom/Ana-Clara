
import React from 'react';
import { EXPERT_NAME, EXPERT_PROFESSION, IMAGES, RESULTS, TESTIMONIALS, WHATSAPP_URL, INSTAGRAM_URL } from '../constants';
import Navbar from './Navbar';
import AutoSlider from './AutoSlider';
import { 
  Check, 
  MapPin, 
  Instagram, 
  Play, 
  Star, 
  Heart, 
  ShieldCheck, 
  Calendar, 
  MessageCircle,
  Clock,
  UserCheck,
  ChevronRight,
  Sparkles
} from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="bg-stone-50 pb-20 md:pb-0">
      <Navbar />

      {/* HERO SECTION */}
      <section id="hero" className="relative py-12 md:py-24 px-4 overflow-hidden min-h-[80vh] flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          {/* Container do Bloco de Texto com Imagem de Fundo */}
          <div className="relative rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl border border-white/20 group">
            
            {/* Imagem de Fundo (Expert) */}
            <div className="absolute inset-0 z-0">
              <img 
                src={IMAGES.hero} 
                alt={EXPERT_NAME} 
                className="w-full h-full object-cover object-center md:object-[center_20%] transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Overlay para contraste */}
              <div className="absolute inset-0 bg-stone-900/40 md:bg-transparent md:bg-gradient-to-r md:from-stone-900/80 md:via-stone-900/40 md:to-transparent"></div>
            </div>

            {/* Conteúdo do Texto sobre o Fundo */}
            <div className="relative z-10 p-8 md:p-20 md:max-w-2xl text-white">
              <div className="backdrop-blur-sm bg-black/20 md:bg-transparent p-6 md:p-0 rounded-3xl">
                <span className="inline-block px-4 py-1.5 bg-amber-500 text-stone-900 rounded-full text-[10px] font-bold tracking-[0.2em] mb-6 uppercase animate-in slide-in-from-left-4 duration-500">
                  Beleza com Propósito
                </span>
                
                <h1 className="text-4xl md:text-6xl font-serif leading-[1.1] mb-6 animate-in slide-in-from-left-6 duration-700">
                  Eu sou a <span className="italic">Dra. {EXPERT_NAME}</span> e vou realçar sua melhor versão.
                </h1>
                
                <p className="text-stone-100 text-lg mb-8 max-w-lg leading-relaxed font-light animate-in slide-in-from-left-8 duration-1000">
                  Minha missão é devolver sua autoestima através de resultados naturais, seguros e focados na sua essência. Esqueça o aspecto artificial.
                </p>
                
                <div className="flex flex-col space-y-4 max-w-md animate-in fade-in duration-1000 delay-500">
                  <a 
                    href={WHATSAPP_URL}
                    target="_blank"
                    className="w-full py-5 bg-white text-stone-900 rounded-2xl font-bold text-lg shadow-2xl active:scale-95 transition-all text-center flex items-center justify-center hover:bg-amber-50"
                  >
                    Agendar consulta no WhatsApp
                    <ChevronRight className="ml-2" size={18} />
                  </a>
                  <p className="text-white/60 text-xs text-center md:text-left">Inicie sua jornada sem compromisso inicial</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decor Elements - Background */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-stone-100 -z-10 hidden md:block"></div>
      </section>

      {/* VIDEO SECTION - UPDATED TO 9:16 (720x1280) */}
      <section className="bg-stone-900 text-white py-24 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 w-full flex justify-center">
            <div className="w-full max-w-[340px] aspect-[9/16] bg-stone-800 rounded-[3rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] relative group cursor-pointer border-[8px] border-stone-800">
              <video 
                src={IMAGES.video} 
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" 
                autoPlay 
                muted 
                loop 
                playsInline
              />
            </div>
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-serif mb-8 leading-tight">
              Aperte o play e sinta a diferença de ser cuidada por quem entende você.
            </h2>
            <div className="space-y-6">
              <p className="text-stone-300 text-lg leading-relaxed font-light">
                Descubra como a beleza pode ser realçada com técnica, sensibilidade e propósito. 
              </p>
              <p className="text-stone-300 text-lg leading-relaxed italic border-l-4 border-amber-500 pl-6">
                Resultados naturais e transformadores. Sinta a diferença de ser cuidada por quem entende que sua beleza é única, e merece atenção especial.
              </p>
            </div>
            <div className="mt-12">
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                className="inline-flex items-center px-8 py-4 bg-amber-500 hover:bg-amber-600 text-stone-900 rounded-2xl font-bold text-base transition-all shadow-lg shadow-amber-500/10"
              >
                Quero um resultado assim
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* QUEM SOU EU */}
      <section id="sobre" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img src={IMAGES.authority1} alt="Sobre a Dra." className="rounded-[2rem] shadow-xl w-full" />
              <div className="absolute -bottom-6 -right-6 bg-stone-900 text-white p-6 rounded-2xl shadow-xl hidden md:block max-w-[200px]">
                <p className="text-xs uppercase tracking-widest opacity-60 mb-2">Expertise</p>
                <p className="font-serif italic text-lg">+1000 Pacientes transformadas com naturalidade</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-serif mb-8">Harmonização que preserva sua essência</h2>
              <p className="text-stone-600 mb-8 leading-relaxed text-lg">
                Olá, eu sou a Dra. Ana Clara. Minha paixão é entender o que faz você se sentir única e potencializar isso através da ciência e do olhar artístico.
              </p>
              <ul className="space-y-6 mb-10">
                <li className="flex items-start">
                  <div className="bg-stone-100 p-2 rounded-lg mr-4 mt-1">
                    <UserCheck className="text-stone-800" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900">Atendimento Humanizado</h4>
                    <p className="text-stone-500 text-sm">Nada de pressa. Cada detalhe da sua face é estudado com calma.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-stone-100 p-2 rounded-lg mr-4 mt-1">
                    <ShieldCheck className="text-stone-800" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900">Segurança Absoluta</h4>
                    <p className="text-stone-500 text-sm">Utilizo apenas os melhores produtos do mercado mundial.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-stone-100 p-2 rounded-lg mr-4 mt-1">
                    <Sparkles className="text-stone-800" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900">Resultados Naturais</h4>
                    <p className="text-stone-500 text-sm">O segredo é ninguém perceber que você fez, apenas que está mais bonita.</p>
                  </div>
                </li>
              </ul>
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                className="inline-flex items-center text-stone-900 font-bold border-b-2 border-stone-900 pb-1 hover:opacity-70 transition-opacity"
              >
                Conhecer meu método exclusivo
                <ChevronRight className="ml-1" size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GALERIA DE RESULTADOS (AUTO SLIDING) */}
      <section id="resultados" className="py-24 px-0 bg-stone-50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 mb-12">
          <div className="text-center">
            <h2 className="text-4xl font-serif mb-4">Galeria de Resultados</h2>
            <p className="text-stone-500">Transformações reais. Deslizando automaticamente.</p>
          </div>
        </div>
        
        <AutoSlider 
          images={RESULTS} 
          animationClass="animate-marquee" 
          itemWidth="w-72 md:w-80" 
          aspectRatio="aspect-[3/4]" 
        />
        
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center mt-8 text-stone-400 text-xs italic">
            *Resultados podem variar de pessoa para pessoa. Fotos autorizadas por pacientes.
          </p>
        </div>
      </section>

      {/* POR QUE CONFIAR */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 rounded-3xl bg-stone-50 border border-stone-100 hover:shadow-xl transition-shadow">
              <Check className="text-stone-900 mb-6" size={32} />
              <h4 className="text-xl font-bold mb-3">Avaliação Honesta</h4>
              <p className="text-stone-500 text-sm">Eu só indico o que você realmente precisa. Sem exageros ou vendas forçadas.</p>
            </div>
            <div className="p-8 rounded-3xl bg-stone-50 border border-stone-100 hover:shadow-xl transition-shadow">
              <MessageCircle className="text-stone-900 mb-6" size={32} />
              <h4 className="text-xl font-bold mb-3">Pós-Procedimento</h4>
              <p className="text-stone-500 text-sm">Acompanhamento próximo para garantir que sua recuperação seja perfeita.</p>
            </div>
            <div className="p-8 rounded-3xl bg-stone-50 border border-stone-100 hover:shadow-xl transition-shadow">
              <ShieldCheck className="text-stone-900 mb-6" size={32} />
              <h4 className="text-xl font-bold mb-3">Clareza e Ética</h4>
              <p className="text-stone-500 text-sm">Explico cada etapa do processo e os benefícios reais de cada aplicação.</p>
            </div>
            <div className="p-8 rounded-3xl bg-stone-50 border border-stone-100 hover:shadow-xl transition-shadow">
              <Clock className="text-stone-900 mb-6" size={32} />
              <h4 className="text-xl font-bold mb-3">Pontualidade</h4>
              <p className="text-stone-500 text-sm">Seu tempo é precioso. Respeito rigorosamente os horários agendados.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA INTERMEDIARIO */}
      <section className="py-16 px-6 bg-stone-900 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-serif mb-8 italic">"Eu tenho medo de ficar com o rosto inchado ou artificial..."</h2>
          <p className="text-stone-400 mb-10">Esse é o maior receio de 90% das minhas pacientes. Meu método é focado justamente em evitar isso.</p>
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            className="inline-flex items-center px-10 py-5 bg-amber-500 hover:bg-amber-600 text-stone-900 rounded-2xl font-bold text-lg transition-all"
          >
            Tire suas dúvidas agora
          </a>
        </div>
      </section>

      {/* BASTIDORES (AUTO SLIDING) */}
      <section className="py-24 px-0 bg-stone-100 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 mb-12 text-center">
          <h2 className="text-4xl font-serif mb-4">Bastidores e Consultório</h2>
          <p className="text-stone-500 italic">Harmonização Facial de Coração 💚</p>
        </div>
        
        <AutoSlider 
          images={[IMAGES.biomed1, IMAGES.biomed2, IMAGES.biomed3, IMAGES.biomed4]} 
          animationClass="animate-marquee-reverse" 
          itemWidth="w-56 md:w-64" 
          aspectRatio="aspect-square" 
        />
      </section>

      {/* DEPOIMENTOS (AUTO SLIDING) */}
      <section className="py-24 px-0 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center mb-12">
          <h2 className="text-4xl font-serif mb-4">O que dizem as pacientes</h2>
          <div className="flex justify-center space-x-1 text-amber-500">
            <Star fill="currentColor" size={20} />
            <Star fill="currentColor" size={20} />
            <Star fill="currentColor" size={20} />
            <Star fill="currentColor" size={20} />
            <Star fill="currentColor" size={20} />
          </div>
        </div>
        
        <AutoSlider 
          images={TESTIMONIALS} 
          animationClass="animate-marquee-fast" 
          itemWidth="w-64 md:w-72" 
          aspectRatio="aspect-auto"
          enableLightbox={true}
          objectFit="object-contain"
        />
      </section>

      {/* ONDE ENCONTRAR */}
      <section id="onde" className="py-24 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif mb-8">Onde estou localizada</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-stone-800 mr-4 mt-1" size={24} />
                  <p className="text-stone-600 text-lg leading-relaxed">
                    Atendimento exclusivo em ambiente premium, pensado no seu conforto e privacidade.
                  </p>
                </div>
                <p className="text-stone-500 font-medium">Rio de Janeiro - RJ</p>
                <a 
                  href={INSTAGRAM_URL}
                  target="_blank"
                  className="inline-flex items-center text-stone-900 font-bold bg-white px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition-all"
                >
                  <Instagram size={20} className="mr-2" />
                  Siga-me no Instagram
                </a>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl aspect-video bg-stone-300 relative border-8 border-white">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.356241275304!2d-43.1728965!3d-22.9068467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f58a6a00a9d%3A0x3f2513915603!2sRio%20de%20Janeiro%2C%20RJ!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                loading="lazy"
                title="Localização Dra Ana Clara"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="contato" className="py-24 px-6 bg-stone-900 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <Heart className="mx-auto text-amber-500 mb-8" size={48} />
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Pronta para redescobrir sua beleza?</h2>
          <p className="text-stone-400 text-lg mb-12">
            Clique no botão abaixo para agendar sua primeira consulta. Estou ansiosa para cuidar de você.
          </p>
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            className="group flex flex-col items-center justify-center"
          >
            <div className="px-12 py-6 bg-green-500 hover:bg-green-600 rounded-2xl font-bold text-2xl shadow-xl shadow-green-500/20 active:scale-95 transition-all animate-bounce-subtle text-white">
              QUERO MEU AGENDAMENTO
            </div>
            <span className="mt-4 text-stone-500 font-medium">Primeira consulta sem compromisso inicial</span>
          </a>
        </div>
      </section>

      {/* RODAPE */}
      <footer className="py-12 px-6 border-t border-stone-100 bg-white text-center">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <h3 className="text-2xl font-signature text-stone-900">Ana Clara Fernandes</h3>
            <p className="text-stone-500 text-xs uppercase tracking-widest mt-1">Biomédica Esteta | CRBM XXXX</p>
          </div>
          <div className="flex justify-center space-x-6 mb-8">
            <a href={INSTAGRAM_URL} className="text-stone-400 hover:text-stone-900 transition-colors"><Instagram size={20} /></a>
            <a href={WHATSAPP_URL} className="text-stone-400 hover:text-stone-900 transition-colors"><MessageCircle size={20} /></a>
          </div>
          <p className="text-stone-400 text-[10px] uppercase tracking-tighter">
            © {new Date().getFullYear()} Todos os direitos reservados. Design Premium.
          </p>
        </div>
      </footer>

      {/* MOBILE STICKY BUTTON */}
      <div className="fixed bottom-6 left-6 right-6 md:hidden z-50">
        <a 
          href={WHATSAPP_URL}
          target="_blank"
          className="flex items-center justify-center w-full py-4 bg-green-500 text-white rounded-2xl font-bold shadow-2xl animate-in slide-in-from-bottom-10"
        >
          <MessageCircle size={20} className="mr-2" />
          Falar com a Dra agora
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
