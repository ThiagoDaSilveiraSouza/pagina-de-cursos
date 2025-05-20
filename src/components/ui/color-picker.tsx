
import React, { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface ColorPickerProps {
  color: string;
  onColorChange: (color: string) => void;
}

export const ColorPicker = ({ color, onColorChange }: ColorPickerProps) => {
  const [currentColor, setCurrentColor] = useState(color || '#000000');

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    setCurrentColor(newColor);
    onColorChange(newColor);
  };

  return (
    <div className="flex items-center gap-2">
      <Popover>
        <PopoverTrigger asChild>
          <Button 
            variant="outline" 
            className="w-10 h-10 p-0 border"
            style={{ backgroundColor: currentColor }}
          >
            <span className="sr-only">Open color picker</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-64">
          <div className="flex flex-col gap-2">
            <Input
              type="color"
              value={currentColor}
              onChange={handleColorChange}
              className="w-full h-8"
            />
            <Input
              type="text"
              value={currentColor}
              onChange={handleColorChange}
              className="w-full"
            />
          </div>
        </PopoverContent>
      </Popover>
      <span className="text-sm text-gray-500">{currentColor}</span>
    </div>
  );
};
