import React, { useState, useEffect, useRef } from 'react';
import './index.css';
import './App.css';
import { Calendar, Clock, MapPin, ExternalLink, Navigation, Heart, UserPlus, MessageCircle, Music, Hotel, Star, Bell, Quote, Waves } from 'lucide-react';

const App = () => {
  const [isAssetsLoaded, setIsAssetsLoaded] = useState(false);
  const [isFadeStarted, setIsFadeStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const videoRef = useRef(null);
  const targetDate = new Date('2026-09-04T19:00:00').getTime();

  const videoUrl = "https://raw.githubusercontent.com/daviddiasdesigner-ui/Convite-Digital-Sthephany/main/S%20%26%20M.mp4";
  const heroBgUrl = "https://raw.githubusercontent.com/daviddiasdesigner-ui/Convite-Digital-Sthephany/main/Whisk_2aa43e62089c43182274b97709a6838adr.png";

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  useEffect(() => {
    const loadAssets = async () => {
      const img = new Image();
      img.src = heroBgUrl;
      await new Promise(resolve => { img.onload = resolve; img.onerror = resolve; });
      setIsAssetsLoaded(true);
    };
    loadAssets();
    const interval = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const handleVideoEnded = () => {
    setIsFadeStarted(true);
    setTimeout(() => setIsLoading(false), 800);
  };

  const address = "Lagunn Gourmet, R. Israel Pinheiro, 492 - Universitário, Governador Valadares - MG";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent(address)}&navigate=yes`;
  const whatsappUrl = "https://wa.me/5533984220805?text=Oiee, gostaria de confirmar minha presença no casamento de Sthephany e Matheus!";

  const accommodations = [
    { name: "GV Park Hotel", description: "Opção moderna e bem localizada no centro, com fácil acesso ao evento.", link: "https://www.booking.com/hotel/br/gv-park.pt-br.html" },
    { name: "Hotel Real Minas", description: "Um dos mais tradicionais da cidade, oferecendo conforto e ótimo pequeno-almoço.", link: "https://www.booking.com/hotel/br/real-minas.pt-br.html" },
    { name: "Ibis Governador Valadares", description: "Praticidade e padrão internacional para quem busca uma estadia funcional.", link: "https://all.accor.com/hotel/9605/index.pt-br.shtml" }
  ];

  if (isLoading) {
    return (
      <div className={`fixed inset-0 z-50 flex items-center justify-center bg-[#142F00] transition-opacity duration-1000 ${isFadeStarted ? 'opacity-0' : 'opacity-100'}`}>
        {isAssetsLoaded ? (
          <video ref={videoRef} autoPlay muted playsInline onEnded={handleVideoEnded} className="w-full h-full object-cover">
            <source src={videoUrl} type="video/mp4" />
          </video>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-[#83BD0F]/20 border-t-[#83BD0F] rounded-full animate-spin"></div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[#FFFFF7] flex flex-col items-center overflow-x-hidden font-['Poppins']">

      {/* SESSÃO 1: HERO */}
      <section className="relative w-screen min-h-[65vh] flex flex-col items-center py-10 px-6 gap-8 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url(${heroBgUrl})` }} />
        <div className="absolute inset-0 bg-white/60 z-[1]" />
        <div className="relative z-10 w-[170px] h-14 bg-gradient-to-b from-[#3C5707] to-[#284300] rounded-full border border-[#83BD0F] flex items-center justify-center gap-2 shadow-lg text-white font-['Sedan'] tracking-widest uppercase">S & M</div>
        <div className="relative z-10 text-center py-4 flex flex-col items-center">
          <h1 className="text-[#3C5707] text-7xl font-['Imperial_Script'] leading-[60px] drop-shadow-md text-balance text-center mb-10">Sthephany<br />& Matheus</h1>
          <div className="px-4 max-w-sm mx-auto flex flex-col items-center">
            <div className="w-8 h-[1px] bg-[#3C5707]/30 mb-4"></div>
            <p className="text-[#3C5707] font-['Sedan'] italic text-base leading-relaxed opacity-80 text-balance px-4">
              "De modo que não são mais dois, mas uma só carne."
            </p>
            <p className="text-[#3C5707] font-bold text-[9px] uppercase tracking-[3px] mt-4 opacity-50">— Mateus 19:6</p>
          </div>
        </div>
      </section>

      {/* SESSÃO 2: SAVE THE DATE */}
      <section className="w-screen flex flex-col items-center px-6 py-20 bg-gradient-to-b from-[#3C5707] to-[#142F00] shadow-2xl relative">
        <h2 className="text-[#D0E6A3] opacity-40 text-sm uppercase tracking-[10px] mb-8 text-center font-['Sedan']">Save the Date</h2>
        <div className="max-w-2xl text-center px-4 mb-12">
          <p className="text-[#D0E6A3] font-['Sedan'] text-xl leading-relaxed mb-6 text-balance italic">
            "O nosso dia está chegando, e é com muita alegria e com as bênçãos de nosso Deus Jeová, que queremos celebrar esse momento tão especial ao lado de pessoas queridas que fazem parte da nossa história."
          </p>
        </div>
        <div className="w-full max-w-lg bg-[#FFFFF7]/95 rounded-[40px] border border-[#3C5707] p-8 flex flex-col gap-6 shadow-xl">
          <div className="flex gap-4">
            <div className="flex-1 bg-[#3C4825] rounded-2xl p-6 flex flex-col items-center gap-2 border border-[#83BD0F]/20">
              <Calendar className="text-[#D0E6A3] w-6 h-6" />
              <span className="text-[#D0E6A3] text-sm font-medium tracking-widest">04/09/26</span>
            </div>
            <div className="flex-1 bg-[#3C4825] rounded-2xl p-6 flex flex-col items-center gap-2 border border-[#83BD0F]">
              <Clock className="text-[#D0E6A3] w-6 h-6" />
              <span className="text-[#D0E6A3] text-sm font-medium tracking-widest">19:00</span>
            </div>
          </div>
          <div className="bg-[#3C4825] rounded-2xl p-6 flex flex-col items-center gap-3 border border-[#83BD0F]">
            <MapPin className="text-[#D0E6A3] w-6 h-6" />
            <span className="text-[#D0E6A3] text-[11px] font-light uppercase text-center tracking-wider text-balance leading-relaxed px-2">{address}</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={googleMapsUrl} target="_blank" rel="noreferrer" className="flex-1 py-4 bg-[#D0E6A3] text-[#3C5707] rounded-full text-center text-[10px] font-bold uppercase flex items-center justify-center gap-2 shadow-sm transition-transform active:scale-95"><Navigation size={14} /> Google Maps</a>
            <a href={wazeUrl} target="_blank" rel="noreferrer" className="flex-1 py-4 bg-[#A3E2E6] text-[#3C5707] rounded-full text-center text-[10px] font-bold uppercase flex items-center justify-center gap-2 shadow-sm transition-transform active:scale-95"><Navigation size={14} /> Waze</a>
          </div>
        </div>
      </section>

      {/* SESSÃO 3: CONTAGEM REGRESSIVA (ESTILO ATUALIZADO) */}
      <section className="w-screen bg-[#FFFFF7] py-24 px-6 flex flex-col items-center border-t border-[#3C5707]/5 relative">

        {/* Título da Seção */}
        <div className="text-center mb-16">
          <Clock className="mx-auto text-[#3C5707] mb-6 opacity-30" size={32} />
          <h2 className="text-[#3C5707] text-3xl font-['Sedan'] uppercase tracking-[8px] mb-4">Contagem Regressiva</h2>
          <p className="text-gray-400 text-[10px] uppercase tracking-[4px]">Prepare o coração para o nosso grande dia</p>
        </div>

        {/* Card Flutuante com os Números */}
        <div className="w-full max-w-4xl bg-gradient-to-b from-[#3C5707] to-[#142F00] rounded-[40px] shadow-2xl p-6 md:p-10 flex flex-col md:flex-row items-center border border-[#83BD0F]/20 relative overflow-hidden">

          {/* Efeito de Luz Decorativo */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>

          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-0 relative z-10">
            {[
              { label: 'Dias', value: timeLeft.days },
              { label: 'Horas', value: timeLeft.hours },
              { label: 'Minutos', value: timeLeft.minutes },
              { label: 'Segundos', value: timeLeft.seconds }
            ].map((item, idx) => (
              <div key={idx} className={`flex flex-col items-center justify-center py-10 border-[#D0E6A3]/10
                  ${idx % 2 === 0 ? 'border-r' : ''} 
                  ${idx < 2 ? 'border-b md:border-b-0' : ''} 
                  ${idx === 0 || idx === 1 ? 'md:border-r' : ''} 
                  ${idx === 2 ? 'md:border-r' : ''}`}>
                <span className="text-[#D0E6A3] text-5xl md:text-6xl font-extralight tracking-tight opacity-90">{String(item.value).padStart(2, '0')}</span>
                <span className="text-[#D0E6A3] text-[9px] md:text-[10px] uppercase tracking-[5px] mt-3 opacity-60 font-semibold">{item.label}</span>
              </div>
            ))}
          </div>

        </div>

        {/* Detalhe Visual de Fundo (Linha sutil) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-[#3C5707]/10 to-transparent"></div>
      </section>

      {/* SESSÃO 4: NOSSA HISTÓRIA */}
      <section className="w-screen bg-[#FFFFF7] py-24 px-6 flex flex-col items-center">
        <h2 className="text-[#3C5707] text-3xl font-['Sedan'] uppercase tracking-widest mb-16 text-center">Nossa História</h2>
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-12 relative mb-24">
          <div className="absolute top-8 left-0 w-full h-[1px] bg-[#3C5707]/10 hidden md:block"></div>
          {[
            { icon: <UserPlus />, title: 'O Início', text: 'O que era um simples perfil em "pessoas que você talvez conheça" no Instagram...' },
            { icon: <Heart fill="currentColor" />, title: 'O Encontro', text: '...se tornou uma linda história de amor que cresceu a cada dia.' },
            { icon: <Waves />, title: 'O Sim', text: 'Resultando em um pedido de casamento lindo à beira-mar.', highlight: true }
          ].map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center relative z-10 group">
              <div className={`w-16 h-16 rounded-full border flex items-center justify-center mb-6 shadow-sm transition-all ${step.highlight ? 'bg-[#3C5707] text-white border-[#3C5707]' : 'bg-white border-[#3C5707]/20 group-hover:bg-[#3C5707] group-hover:text-white'}`}>
                {step.icon}
              </div>
              <h3 className="text-[#3C5707] font-bold text-xs uppercase mb-2 tracking-widest">{step.title}</h3>
              <p className="text-gray-500 text-[11px] leading-relaxed max-w-[200px] text-balance">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SESSÃO 5: ONDE FICAR */}
      <section className="w-screen bg-[#FFFFF7] py-20 px-6 flex flex-col items-center border-t border-[#3C5707]/5">
        <Hotel className="text-[#3C5707] mb-4 opacity-30" size={32} />
        <h2 className="text-[#3C5707] text-2xl font-['Sedan'] uppercase tracking-widest mb-12">Onde Ficar</h2>
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6">
          {accommodations.map((hotel, idx) => (
            <div key={idx} className="bg-white rounded-[30px] p-8 border border-[#3C5707]/10 shadow-sm flex flex-col justify-between group hover:shadow-md transition-all">
              <div>
                <div className="flex items-center gap-1 mb-4">{[...Array(4)].map((_, i) => <Star key={i} size={10} className="text-[#ABC773] fill-[#ABC773]" />)}</div>
                <h3 className="text-[#3C5707] font-bold text-lg mb-3">{hotel.name}</h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-6 text-balance">{hotel.description}</p>
              </div>
              <a href={hotel.link} target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-[#3C5707] text-white rounded-full text-center text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2">Ver Hotel <ExternalLink size={12} /></a>
            </div>
          ))}
        </div>
      </section>

      {/* SESSÃO 6: CONFIRMAÇÃO E AGENDA */}
      <section className="w-screen bg-[#FFFFF7] py-24 px-6 flex flex-col items-center border-t border-[#3C5707]/5">

        {/* Título da Seção que estava faltando */}
        <div className="text-center mb-16">
          <Heart className="mx-auto text-[#3C5707] mb-6 animate-pulse" size={32} />
          <h2 className="text-[#3C5707] text-3xl font-['Sedan'] uppercase tracking-[8px] mb-4">Confirmação</h2>
          <p className="text-gray-400 text-[10px] uppercase tracking-[4px]">Sua presença é essencial para nós</p>
        </div>

        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* CARD WHATSAPP */}
          <div className="bg-white p-10 rounded-[40px] shadow-xl border border-gray-100 flex flex-col items-center text-center group hover:scale-[1.02] transition-transform duration-300">
            <div className="w-16 h-16 bg-[#25D366]/10 rounded-full flex items-center justify-center mb-6">
              <MessageCircle className="text-[#25D366]" size={32} />
            </div>
            <h3 className="text-[#3C5707] font-bold text-sm uppercase tracking-widest mb-4">Confirmar Presença</h3>
            <p className="text-gray-500 text-xs mb-8 leading-relaxed text-balance px-4">Clique abaixo para nos enviar sua confirmação via WhatsApp.</p>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="w-full py-5 bg-[#25D366] text-white rounded-full font-bold uppercase tracking-[3px] text-[10px] flex items-center justify-center gap-3 shadow-lg active:scale-95 transition-all">
              <Send size={14} /> Enviar no WhatsApp
            </a>
          </div>

          {/* CARD AGENDA */}
          <div className="bg-[#3C5707] p-10 rounded-[40px] shadow-xl flex flex-col items-center text-center relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
              <Bell className="text-[#D0E6A3]" size={32} />
            </div>
            <h3 className="text-[#D0E6A3] font-bold text-sm uppercase tracking-widest mb-4">Lembretes na Agenda</h3>
            <p className="text-[#D0E6A3]/60 text-xs mb-8 leading-relaxed text-balance px-4 italic">Escolha quando deseja ser avisado:</p>

            <div className="w-full flex flex-col gap-3 relative z-10">
              <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Casamento+Sthephany+%26+Matheus+💍&dates=20260904T220000Z/20260905T050000Z&details=O+grande+dia+chegou!&location=Lagunn+Gourmet" target="_blank" rel="noreferrer" className="w-full py-4 bg-[#D0E6A3] text-[#3C5707] rounded-full font-bold uppercase tracking-[2px] text-[9px] flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-md">
                <Calendar size={14} /> Salvar Data do Casamento
              </a>
              <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Falta+1+Mês:+Casamento+S+%26+M+💍&dates=20260804T120000Z/20260804T130000Z&details=Falta+um+mês!" target="_blank" rel="noreferrer" className="w-full py-4 border border-[#D0E6A3]/30 text-[#D0E6A3] rounded-full font-bold uppercase tracking-[2px] text-[9px] flex items-center justify-center gap-2 hover:bg-white/5 transition-all">
                <Clock size={14} /> Me lembre 30 dias antes
              </a>
              <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Falta+15+Dias:+Casamento+S+%26+M+💍&dates=20260820T120000Z/20260820T130000Z&details=Faltam+15+dias!" target="_blank" rel="noreferrer" className="w-full py-4 border border-[#D0E6A3]/30 text-[#D0E6A3] rounded-full font-bold uppercase tracking-[2px] text-[9px] flex items-center justify-center gap-2 hover:bg-white/5 transition-all">
                <Clock size={14} /> Me lembre 15 dias antes
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* SESSÃO 7: MENSAGEM FINAL */}
      <section className="w-screen bg-gradient-to-b from-[#FFFFF7] to-[#F1F7E6] py-32 px-6 flex flex-col items-center overflow-hidden relative">
        <div className="absolute -left-20 top-0 opacity-10"><Heart size={200} className="text-[#3C5707] rotate-12" /></div>
        <div className="absolute -right-20 bottom-0 opacity-10"><Heart size={250} className="text-[#3C5707] -rotate-12" /></div>
        <div className="relative z-10 text-center max-w-xl">
          <Quote className="mx-auto text-[#ABC773] mb-8 opacity-40 rotate-180" size={40} />
          <h2 className="text-[#3C5707] text-4xl md:text-5xl font-['Imperial_Script'] leading-tight mb-4">Esperamos ansiosamente<br />sua presença!</h2>
          <p className="text-[#3C5707] font-['Sedan'] text-lg opacity-70 tracking-widest mb-6">dos noivos Sthephany e Matheus</p>
          <div className="w-12 h-[2px] bg-[#3C5707]/20 mx-auto mt-4"></div>
        </div>
      </section>

      <footer className="w-full py-16 bg-[#F1F7E6] flex flex-col items-center">
        <div className="text-[#3C5707] text-[10px] uppercase tracking-[10px] font-bold opacity-30">S & M • 2026</div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&family=Imperial+Script&family=Sedan&display=swap');
        .text-balance { text-wrap: balance; }
      `}</style>
    </div>
  );
};

export default App;