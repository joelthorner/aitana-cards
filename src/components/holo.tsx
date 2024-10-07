import { useEffect, useRef, useState } from "react";
import { useMouseGyro } from "../providers/mouse-gyro";
import { CardBrilli } from "../types/card";
import { CardBrilliMask } from "../data/card-masks";

interface HoloProps {
  type: CardBrilli;
  cardId: string;
}

interface CustomCSSProperties extends React.CSSProperties {
  "--mask"?: string;
}

export default function Holo({ type, cardId }: HoloProps) {
  const { mouseX, mouseY, alpha, beta, gamma } = useMouseGyro();

  const holographicElement = useRef<HTMLDivElement | null>(null);
  const [randomOffsetX, setRandomOffsetX] = useState(0);
  const [randomOffsetY, setRandomOffsetY] = useState(0);

  const gyroEffectMultiplierX = 3;
  const gyroEffectMultiplierY = 3;

  const betaMax = 90;
  const gammaMax = 90;

  const mask = CardBrilliMask.hasOwnProperty(cardId) ? CardBrilliMask[cardId] : null;

  const cardMask: CustomCSSProperties = mask
    ? {
        "--mask": `url(${mask})` as string,
      }
    : {};

  const cardStyles = { ...cardMask };

  useEffect(() => {
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
        const screenCenterX = window.innerWidth / 2;
        const screenCenterY = window.innerHeight / 2;

        const rect = holographicElement.current.getBoundingClientRect();
        const elementCenterX = rect.left + rect.width / 2;
        const elementCenterY = rect.top + rect.height / 2;

        const distanceXToElement = mouseX - elementCenterX;
        const distanceYToElement = mouseY - elementCenterY;

        const maxElementDistance = Math.sqrt(rect.width ** 2 + rect.height ** 2);
        const normalizedElementDistanceX = Math.min(distanceXToElement / maxElementDistance, 1);
        const normalizedElementDistanceY = Math.min(distanceYToElement / maxElementDistance, 1);

        const hasGyroscope = alpha !== 0 || beta !== 0 || gamma !== 0;
        let percentageX, percentageY;

        if (hasGyroscope) {
          percentageX = Math.max(0, Math.min((beta / betaMax) * gyroEffectMultiplierX * (randomOffsetX + 50), 100));
          percentageY = Math.max(0, Math.min(((gamma + 90) / (gammaMax + 90)) * gyroEffectMultiplierY * (randomOffsetY + 50), 100));
        } else {
          const distanceXToScreenCenter = mouseX - screenCenterX;
          const distanceYToScreenCenter = mouseY - screenCenterY;

          const maxDistanceToScreenCenter = Math.max(screenCenterX, screenCenterY);
          const normalizedDistanceXToScreenCenter = Math.min(distanceXToScreenCenter / maxDistanceToScreenCenter, 1);
          const normalizedDistanceYToScreenCenter = Math.min(distanceYToScreenCenter / maxDistanceToScreenCenter, 1);

          percentageX = (normalizedDistanceXToScreenCenter + 1) * 50 + randomOffsetX + normalizedElementDistanceX * 5;
          percentageY = (normalizedDistanceYToScreenCenter + 1) * 50 + randomOffsetY + normalizedElementDistanceY * 5;
        }

        if (percentageX > 100) percentageX = 100;
        if (percentageY > 100) percentageY = 100;

        holographicElement.current.style.backgroundPosition = `${percentageX}% ${percentageY}%`;
      }
    };

    updateHolographicBackground();
  }, [mouseX, mouseY, randomOffsetX, randomOffsetY, alpha, beta, gamma]);

  return (
    <div className="overflow-hidden inset-0 absolute">
      <div className={`absolute z-20 inset-0 effect-${type} ${mask ? "effect-mask" : ""}`} style={cardStyles} ref={holographicElement}></div>
    </div>
  );
}
