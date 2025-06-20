
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Truck, Bus, Package } from 'lucide-react';

interface DeliveryFormProps {
  onDeliveryChange: (deliveryData: DeliveryData) => void;
}

export interface DeliveryData {
  name: string;
  address: string;
  city: string;
  zipCode: string;
  phone: string;
  shippingMethod: 'onibus' | 'correio' | 'transportadora';
}

const DeliveryForm = ({ onDeliveryChange }: DeliveryFormProps) => {
  const [deliveryData, setDeliveryData] = useState<DeliveryData>({
    name: '',
    address: '',
    city: '',
    zipCode: '',
    phone: '',
    shippingMethod: 'onibus'
  });

  const handleInputChange = (field: keyof DeliveryData, value: string) => {
    const newData = { ...deliveryData, [field]: value };
    setDeliveryData(newData);
    onDeliveryChange(newData);
  };

  const shippingOptions = [
    {
      id: 'onibus' as const,
      label: 'Ônibus',
      icon: Bus,
      description: 'Entrega via transporte rodoviário',
      price: 'R$ 15,00'
    },
    {
      id: 'correio' as const,
      label: 'Correios',
      icon: Package,
      description: 'Entrega pelos Correios',
      price: 'R$ 25,00'
    },
    {
      id: 'transportadora' as const,
      label: 'Transportadora',
      icon: Truck,
      description: 'Entrega via transportadora',
      price: 'R$ 35,00'
    }
  ];

  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle className="text-lg">Dados para Entrega</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 gap-4">
          <div>
            <Label htmlFor="name">Nome completo</Label>
            <Input
              id="name"
              placeholder="Seu nome completo"
              value={deliveryData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
            />
          </div>

          

          <div>
            <Label htmlFor="address">Endereço completo</Label>
            <Textarea
              id="address"
              placeholder="Rua, número, complemento, bairro"
              value={deliveryData.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="city">Cidade</Label>
              <Input
                id="city"
                placeholder="Sua cidade"
                value={deliveryData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="zipCode">CEP</Label>
              <Input
                id="zipCode"
                placeholder="00000-000"
                value={deliveryData.zipCode}
                onChange={(e) => handleInputChange('zipCode', e.target.value)}
              />
            </div>
          </div>
        </div>

        <div>
          <Label>Forma de entrega</Label>
          <RadioGroup
            value={deliveryData.shippingMethod}
            onValueChange={(value) => handleInputChange('shippingMethod', value)}
            className="mt-2"
          >
            {shippingOptions.map((option) => (
              <div key={option.id} className="flex items-center space-x-2 p-3 border rounded-lg">
                <RadioGroupItem value={option.id} id={option.id} />
                <div className="flex items-center space-x-3 flex-1">
                  <option.icon className="h-5 w-5 text-whatsapp-600" />
                  <div className="flex-1">
                    <Label htmlFor={option.id} className="font-medium cursor-pointer">
                      {option.label}
                    </Label>
                    <p className="text-sm text-gray-500">{option.description}</p>
                  </div>
                  <span className="font-semibold text-whatsapp-600">{option.price}</span>
                </div>
              </div>
            ))}
          </RadioGroup>
        </div>
      </CardContent>
    </Card>
  );
};

export default DeliveryForm;
