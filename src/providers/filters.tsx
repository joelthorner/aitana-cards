import React, { createContext, useContext, useState, ReactNode, useMemo } from "react";
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
  cardTypes: string[];
  filtering: boolean;
  setRarity: (key: number[]) => void;
  setStatus: (key: keyof StatusType, value: boolean) => void;
  setOrderBy: (value: OrderByEnum) => void;
  setCollections: (value: string[]) => void;
  setCardTypes: (value: string[]) => void;
  resetFilters: () => void;
}

const FiltersContext = createContext<FiltersContextType | undefined>(undefined);

const LOCAL_STORAGE_RARITY_KEY = "filters_rarity";
const LOCAL_STORAGE_STATUS_KEY = "filters_status";
const LOCAL_STORAGE_ORDERBY_KEY = "filters_orderBy";
const LOCAL_STORAGE_COLLECTIONS_KEY = "filters_collections";
const LOCAL_STORAGE_CARD_TYPES_KEY = "filters_cardTypes";

const defaultStatus = {
  [CardStatus.Tengui]: true,
  [CardStatus.Falti]: true,
  [CardStatus.Pending]: true,
};

const defaultRarity: number[] = [];
const defaultCollections: string[] = [];
const defaultCardTypes: string[] = [];
const defaultOrderBy = OrderByEnum.DEFAULT;

export const FiltersProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [rarity, setRarityState] = useState<number[]>(() => {
    const savedRarity = localStorage.getItem(LOCAL_STORAGE_RARITY_KEY);
    return savedRarity ? JSON.parse(savedRarity) : defaultRarity;
  });

  const [status, setStatusState] = useState<StatusType>(() => {
    const savedStatus = localStorage.getItem(LOCAL_STORAGE_STATUS_KEY);
    return savedStatus ? JSON.parse(savedStatus) : defaultStatus;
  });

  const [orderBy, setOrderByState] = useState<OrderByEnum>(() => {
    const savedOrderBy = localStorage.getItem(LOCAL_STORAGE_ORDERBY_KEY);
    return savedOrderBy ? (savedOrderBy as OrderByEnum) : defaultOrderBy;
  });

  const [collections, setCollectionsState] = useState<string[]>(() => {
    const savedCollections = localStorage.getItem(LOCAL_STORAGE_COLLECTIONS_KEY);
    return savedCollections ? JSON.parse(savedCollections) : defaultCollections;
  });

  const [cardTypes, setCardTypesState] = useState<string[]>(() => {
    const savedCardTypes = localStorage.getItem(LOCAL_STORAGE_CARD_TYPES_KEY);
    return savedCardTypes ? JSON.parse(savedCardTypes) : defaultCardTypes;
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

  const setCardTypes = (value: string[]) => {
    setCardTypesState(value);
    localStorage.setItem(LOCAL_STORAGE_CARD_TYPES_KEY, JSON.stringify(value));
  };

  const resetFilters = () => {
    setRarityState(defaultRarity);
    setStatusState(defaultStatus);
    setOrderByState(defaultOrderBy);
    setCollectionsState(defaultCollections);
    setCardTypesState(defaultCardTypes);
    localStorage.removeItem(LOCAL_STORAGE_RARITY_KEY);
    localStorage.setItem(LOCAL_STORAGE_STATUS_KEY, JSON.stringify(defaultStatus));
    localStorage.setItem(LOCAL_STORAGE_ORDERBY_KEY, defaultOrderBy);
    localStorage.removeItem(LOCAL_STORAGE_COLLECTIONS_KEY);
    localStorage.removeItem(LOCAL_STORAGE_CARD_TYPES_KEY);
  };

  const filtering = useMemo(() => {
    return rarity.length > 0 || JSON.stringify(status) !== JSON.stringify(defaultStatus) || orderBy !== defaultOrderBy || collections.length > 0 || cardTypes.length > 0;
  }, [rarity, status, orderBy, collections, cardTypes]);

  return (
    <FiltersContext.Provider
      value={{
        rarity,
        status,
        orderBy,
        collections,
        cardTypes,
        filtering,
        setRarity,
        setStatus,
        setOrderBy,
        setCollections,
        setCardTypes,
        resetFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export const useFiltersContext = () => {
  const context = useContext(FiltersContext);
  if (!context) {
    throw new Error("useFiltersContext must be used within a FiltersProvider");
  }
  return context;
};
