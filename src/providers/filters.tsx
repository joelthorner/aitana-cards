import React, { createContext, useContext, useState, ReactNode } from "react";
import { CardStatus } from "../types/card";

export enum OrderByEnum {
  DEFAULT = "default",
  RARITY = "rarity",
  YEAR = "year",
  COLLECTION = "collection",
}

export interface StatusType {
  [CardStatus.Tengui]: boolean;
  [CardStatus.Falti]: boolean;
  [CardStatus.Pending]: boolean;
}

interface FiltersContextType {
  rarity: number[];
  status: StatusType;
  orderBy: OrderByEnum;
  collections: string[];
  setRarity: (key: number[]) => void;
  setStatus: (key: keyof StatusType, value: boolean) => void;
  setOrderBy: (value: OrderByEnum) => void;
  setCollections: (value: string[]) => void;
}

const FiltersContext = createContext<FiltersContextType | undefined>(undefined);

const LOCAL_STORAGE_RARITY_KEY = "filters_rarity";
const LOCAL_STORAGE_STATUS_KEY = "filters_status";
const LOCAL_STORAGE_ORDERBY_KEY = "filters_orderBy";
const LOCAL_STORAGE_COLLECTIONS_KEY = "filters_collections";

export const FiltersProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [rarity, setRarityState] = useState<number[]>(() => {
    const savedRarity = localStorage.getItem(LOCAL_STORAGE_RARITY_KEY);
    return savedRarity ? JSON.parse(savedRarity) : [];
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

  const [collections, setCollectionsState] = useState<string[]>(() => {
    const savedCollections = localStorage.getItem(LOCAL_STORAGE_COLLECTIONS_KEY);
    return savedCollections ? JSON.parse(savedCollections) : [];
  });

  const setRarity = (value: number[]) => {
    setRarityState(value);
    localStorage.setItem(LOCAL_STORAGE_RARITY_KEY, JSON.stringify(value));
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

  const setCollections = (value: string[]) => {
    setCollectionsState(value);
    localStorage.setItem(LOCAL_STORAGE_COLLECTIONS_KEY, JSON.stringify(value));
  };

  return <FiltersContext.Provider value={{ rarity, status, orderBy, collections, setRarity, setStatus, setOrderBy, setCollections }}>{children}</FiltersContext.Provider>;
};

export const useFiltersContext = () => {
  const context = useContext(FiltersContext);
  if (!context) {
    throw new Error("useFiltersContext must be used within a FiltersProvider");
  }
  return context;
};
