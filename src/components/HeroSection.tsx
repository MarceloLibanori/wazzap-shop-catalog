import React from 'react';
import { Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-[#b37c74] text-white py-16">
      <div className="container mx-auto px-4 text-center">
        {/* Título com sparkles */}
        <div className="flex items-center justify-center mb-4">
          <Sparkles className="h-8 w-8 mr-3 animate-pulse text-white" />
          <h2 className="text-4xl md:text-5xl font-bold">
            Catálogo Premium
          </h2>
          <Sparkles className="h-8 w-8 ml-3 animate-pulse text-white" />
        </div>

        {/* Subtítulo com mensagem fixa */}
        <p className="text-xl md:text-2xl mb-8 text-white/90">
          Produtos selecionados com qualidade garantida<br />

          {/* Container da imagem + texto fixos */}
          <div className="mt-2 flex justify-center">
            <img 
              src="/images/icons/desconto-20.png" 
              alt="20% OFF" 
              className="h-16 w-auto inline-block align-middle mr-4"
            />
            <span className="text-black font-bold text-2xl">
              ATACADO ACIMA DE 3 PEÇAS 
            </span>
          </div>
        </p>

        {/* Benefícios */}
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