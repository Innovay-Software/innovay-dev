'use client'

import Logo from '@/components/svg/logo'
import { useState } from 'react'
import { ColorPicker, useColor } from 'react-color-palette'
import 'react-color-palette/css'

export default function LogoViewer() {
  const [size, setSize] = useState('200')
  const [stroke, setStroke] = useState('10')
  const [color1, setColor1] = useColor('#4974e0')
  const [color2, setColor2] = useColor('#00e2d3')

  return (
    <div className="bg-white flex-col justify-center py-10">
      <div className="container mx-auto flex justify-center" key={color1.hex}>
        <Logo
          stroke={parseFloat(stroke) ?? 11}
          size={size}
          color1={color1.hex.replace('#', '')}
          color2={color2.hex.replace('#', '')}
          id="logo-viewer-logo"
        />
      </div>
      <div className="container mx-auto px-4 flex-col items-center justify-center">
        <div className="grid grid-cols-2 gap-x-2 py-5">
          <div>
            <p className="text-center">Size: {size}</p>
            <input
              className="w-full"
              type="range"
              min="40"
              max="300"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            />
          </div>
          <div>
            <p className="text-center">Stroke: {stroke}</p>
            <input
              className="w-full"
              type="range"
              min="1"
              max="20"
              value={stroke}
              onChange={(e) => setStroke(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 aspect-video gap-x-2">
          <ColorPicker color={color1} onChange={setColor1} />
          <ColorPicker color={color2} onChange={setColor2} />
        </div>
      </div>
    </div>
  )
}
