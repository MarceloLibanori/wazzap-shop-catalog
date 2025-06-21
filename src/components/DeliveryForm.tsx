
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface DeliveryFormProps {
  deliveryData: {
    nome: string;
    endereco: string;
    cidade: string;
    cep: string;
    frete: string;
  };
  onDeliveryDataChange: (data: any) => void;
}

const DeliveryForm = ({ deliveryData, onDeliveryDataChange }: DeliveryFormProps) => {
  const handleInputChange = (field: string, value: string) => {
    onDeliveryDataChange({ ...deliveryData, [field]: value });
  };

  const handleCepChange = async (cep: string) => {
    const cleanCep = cep.replace(/\D/g, '');
    handleInputChange('cep', cep);
    
    if (cleanCep.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
        const data = await response.json();
        
        if (!data.erro) {
          handleInputChange('cidade', data.localidade);
        }
      } catch (error) {
        console.log('Erro ao consultar CEP:', error);
      }
    }
  };

  return (
    <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
      <h3 className="font-semibold text-lg">Dados para Entrega</h3>
      
      <div className="space-y-3">
        <div>
          <Label htmlFor="nome">Nome Completo</Label>
          <Input
            id="nome"
            value={deliveryData.nome}
            onChange={(e) => handleInputChange('nome', e.target.value)}
            placeholder="Seu nome completo"
          />
        </div>

        <div>
          <Label htmlFor="endereco">Endereço Completo</Label>
          <Input
            id="endereco"
            value={deliveryData.endereco}
            onChange={(e) => handleInputChange('endereco', e.target.value)}
            placeholder="Rua, número, complemento"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label htmlFor="cep">CEP</Label>
            <Input
              id="cep"
              value={deliveryData.cep}
              onChange={(e) => handleCepChange(e.target.value)}
              placeholder="00000-000"
              maxLength={9}
            />
          </div>

          <div>
            <Label htmlFor="cidade">Cidade</Label>
            <Input
              id="cidade"
              value={deliveryData.cidade}
              onChange={(e) => handleInputChange('cidade', e.target.value)}
              placeholder="Cidade será preenchida automaticamente"
              className="bg-gray-100"
            />
          </div>
        </div>

        <div>
          <Label>Opção de Frete</Label>
          <RadioGroup
            value={deliveryData.frete}
            onValueChange={(value) => handleInputChange('frete', value)}
            className="mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="onibus" id="onibus" />
              <Label htmlFor="onibus">Ônibus (consultar valor)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="correio" id="correio" />
              <Label htmlFor="correio">Correio (consultar valor)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="transportadora" id="transportadora" />
              <Label htmlFor="transportadora">Transportadora (consultar valor)</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
};

export default DeliveryForm;
