import React, { createContext, useContext, useState, ReactNode } from "react";
import { CardStatus } from "../types/card";

export enum OrderByEnum {
  DEFAULT = "default",
  RARITY = "rarity",
  YEAR = "year",
}

export interface RarityType {
  rarity_1: boolean;
  rarity_2: boolean;
  rarity_3: boolean;
  rarity_4: boolean;
  rarity_5: boolean;
}

export interface StatusType {
  [CardStatus.Tengui]: boolean;
  [CardStatus.Falti]: boolean;
  [CardStatus.Pending]: boolean;
}

interface FiltersContextType {
  rarity: RarityType;
  status: StatusType;
  orderBy: OrderByEnum;
  setRarity: (key: keyof RarityType, value: boolean) => void;
  setStatus: (key: keyof StatusType, value: boolean) => void;
  setOrderBy: (value: OrderByEnum) => void;
}

const FiltersContext = createContext<FiltersContextType | undefined>(undefined);

const LOCAL_STORAGE_RARITY_KEY = "filters_rarity";
const LOCAL_STORAGE_STATUS_KEY = "filters_status";
const LOCAL_STORAGE_ORDERBY_KEY = "filters_orderBy";

export const FiltersProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [rarity, setRarityState] = useState<RarityType>(() => {
    const savedRarity = localStorage.getItem(LOCAL_STORAGE_RARITY_KEY);
    return savedRarity
      ? JSON.parse(savedRarity)
      : {
          rarity_1: true,
          rarity_2: true,
          rarity_3: true,
          rarity_4: true,
          rarity_5: true,
        };
  });

  const [status, setStatusState] = useState<StatusType>(() => {
    const savedStatus = localStorage.getItem(LOCAL_STORAGE_STATUS_KEY);
    return savedStatus
      ? JSON.parse(savedStatus)
      : {
          [CardStatus.Tengui]: true,
          [CardStatus.Falti]: true,
          [CardStatus.Pending]: true,
        };
  });

  const [orderBy, setOrderByState] = useState<OrderByEnum>(() => {
    const savedOrderBy = localStorage.getItem(LOCAL_STORAGE_ORDERBY_KEY);
    return savedOrderBy ? (savedOrderBy as OrderByEnum) : OrderByEnum.DEFAULT;
  });

  const setRarity = (key: keyof RarityType, value: boolean) => {
    setRarityState((prev) => {
      const newRarity = { ...prev, [key]: value };
      localStorage.setItem(LOCAL_STORAGE_RARITY_KEY, JSON.stringify(newRarity));
      return newRarity;
    });
  };

  const setStatus = (key: keyof StatusType, value: boolean) => {
    setStatusState((prev) => {
      const newStatus = { ...prev, [key]: value };
      localStorage.setItem(LOCAL_STORAGE_STATUS_KEY, JSON.stringify(newStatus));
      return newStatus;
    });
  };

  const setOrderBy = (value: OrderByEnum) => {
    setOrderByState(value);
    localStorage.setItem(LOCAL_STORAGE_ORDERBY_KEY, value);
  };

  return <FiltersContext.Provider value={{ rarity, status, orderBy, setRarity, setStatus, setOrderBy }}>{children}</FiltersContext.Provider>;
};

export const useFiltersContext = () => {
  const context = useContext(FiltersContext);
  if (!context) {
    throw new Error("useFiltersContext must be used within a FiltersProvider");
  }
  return context;
};
