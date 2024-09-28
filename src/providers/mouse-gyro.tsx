import React, { createContext, useContext, useEffect, useState } from "react";

interface MouseGyroContextProps {
  mouseX: number;
  mouseY: number;
  alpha: number;
  beta: number;
  gamma: number;
}

const MouseGyroContext = createContext<MouseGyroContextProps | undefined>(undefined);

export const MouseGyroProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [alpha, setAlpha] = useState<number>(0);
  const [beta, setBeta] = useState<number>(0);
  const [gamma, setGamma] = useState<number>(0);

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouseX(event.clientX);
      setMouseY(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Handle device orientation
  useEffect(() => {
    const handleDeviceOrientation = (event: DeviceOrientationEvent) => {
      setAlpha(event.alpha || 0);
      setBeta(event.beta || 0);
      setGamma(event.gamma || 0);
    };

    window.addEventListener("deviceorientation", handleDeviceOrientation);

    return () => {
      window.removeEventListener("deviceorientation", handleDeviceOrientation);
    };
  }, []);

  return <MouseGyroContext.Provider value={{ mouseX, mouseY, alpha, beta, gamma }}>{children}</MouseGyroContext.Provider>;
};

// Hook to use the MouseGyroContext
export const useMouseGyro = () => {
  const context = useContext(MouseGyroContext);
  if (!context) {
    throw new Error("useMouseGyro must be used within a MouseGyroProvider");
  }
  return context;
};
