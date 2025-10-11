// components/UpiQRCode.tsx
'use client';

import React, { useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode';

interface Props {
  upiUrl: string;
}

const UpiQRCode: React.FC<Props> = ({ upiUrl }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isGenerated, setIsGenerated] = useState(false);

  useEffect(() => {
    if (upiUrl && canvasRef.current && !isGenerated) {
      QRCode.toCanvas(canvasRef.current, upiUrl, {
        width: 250,
        margin: 2,
      }, (error) => {
        if (error) console.error('QR Code generation failed:', error);
        else setIsGenerated(true);
      });
    }
  }, [upiUrl, isGenerated]);

  const downloadQR = () => {
    if (!canvasRef.current) return;
    const link = document.createElement('a');
    link.download = 'upi-payment.png';
    link.href = canvasRef.current.toDataURL();
    link.click();
  };

  return (
    <div className="text-center space-y-4">
      <canvas ref={canvasRef} />
      {/* <button
        onClick={downloadQR}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Download QR
      </button> */}
    </div>
  );
};

export default UpiQRCode;
