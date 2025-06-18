import React from 'react';
import { Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-[#b37c74] text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center mb-4">
          <Sparkles className="h-8 w-8 mr-3 animate-pulse text-white" />
          <h2 className="text-4xl md:text-5xl font-bold">
            Catálogo Premium
          </h2>
          <Sparkles className="h-8 w-8 ml-3 animate-pulse text-white" />
        </div>
        <p className="text-xl md:text-2xl mb-8 text-white/90">
          Produtos selecionados com qualidade garantida
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <div className="flex items-center text-lg">
            <span className="bg-white/20 rounded-full p-2 mr-3">✓</span>
            Entrega rápida
          </div>
          <div className="flex items-center text-lg">
            <span className="bg-white/20 rounded-full p-2 mr-3">✓</span>
            Melhor preço
          </div>
          <div className="flex items-center text-lg">
            <span className="bg-white/20 rounded-full p-2 mr-3">✓</span>
            Atendimento no WhatsApp
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
