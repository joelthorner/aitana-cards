import { useEffect, useRef, useState } from "react";
import { useMouseGyro } from "../providers/mouse-gyro";
import { CardBrilli } from "../types/card";

interface HoloProps {
  type: CardBrilli;
}

export default function Holo({ type }: HoloProps) {
  // TODO: implement type

  const { mouseX, mouseY, alpha, beta, gamma } = useMouseGyro();

  const holographicElement = useRef<HTMLDivElement | null>(null);
  const [randomOffsetX, setRandomOffsetX] = useState(0);
  const [randomOffsetY, setRandomOffsetY] = useState(0);

  const gyroEffectMultiplierX = 3;
  const gyroEffectMultiplierY = 3;

  const betaMax = 90;
  const gammaMax = 90;

  useEffect(() => {
    // Genera una petita variació aleatòria per a cada component quan es carrega
    const generateRandomOffsets = () => {
      const offsetX = Math.random() * 20 - 5;
      const offsetY = Math.random() * 20 - 5;

      setRandomOffsetX(offsetX);
      setRandomOffsetY(offsetY);
    };

    generateRandomOffsets();
  }, []);

  useEffect(() => {
    const updateHolographicBackground = () => {
      if (holographicElement.current) {
        const rect = holographicElement.current.getBoundingClientRect();

        // Posició del centre de l'element
        const elementCenterX = rect.left + rect.width / 2;
        const elementCenterY = rect.top + rect.height / 2;

        // Calcular la distància entre el ratolí i el centre de l'element
        const hasGiroscope = alpha !== 0 || beta !== 0 || gamma !== 0; // Comprovem si el giroscopi és vàlid
        let percentageX, percentageY;

        if (hasGiroscope) {
          // Utilitzar valors del giroscopi per ajustar el background
          percentageX = Math.max(0, Math.min((beta / betaMax) * gyroEffectMultiplierX * (randomOffsetX + 50), 100));
          percentageY = Math.max(0, Math.min(((gamma + 90) / (gammaMax + 90)) * gyroEffectMultiplierY * (randomOffsetY + 50), 100));
        } else {
          // Utilitzar la posició del ratolí
          const distanceX = mouseX - elementCenterX;
          const distanceY = mouseY - elementCenterY;

          // Calcular la distància en píxels
          const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

          // Normalitzar la distància (pots ajustar el divisor per controlar la sensibilitat)
          const maxDistance = 300; // Ajusta aquest valor segons la mida de l'element
          const normalizedDistance = Math.min(distance / maxDistance, 1); // Manté entre 0 i 1

          // Ajustar la posició del background en funció de la distància
          percentageX = (1 - normalizedDistance) * (randomOffsetX + 50); // Ajusta el multiplicador segons sigui necessari
          percentageY = (1 - normalizedDistance) * (randomOffsetY + 50); // Ajusta el multiplicador segons sigui necessari
        }

        holographicElement.current.style.backgroundPosition = `${percentageX}% ${percentageY}%`;
      }
    };

    updateHolographicBackground();
  }, [mouseX, mouseY, randomOffsetX, randomOffsetY, alpha, beta, gamma]);

  return (
    <>
      {/* <div className="absolute bg-white">
        {Math.round(alpha)}/{Math.round(beta)}/{Math.round(gamma)}
        <br />
        {holographicElement.current && holographicElement.current.style.backgroundPosition}
      </div> */}
      <div className="absolute inset-0 z-20 holo" ref={holographicElement}></div>
    </>
  );
}
