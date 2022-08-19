import { useEffect, useState } from "react";

export const useWatchlist = () => {
  const [pools, setPools] = useLocalStorage("watchlist", []);

  const add = (id: string) => setPools((prev: string[]) => [...prev, id]);

  const remove = (id: string) =>
    setPools((prev: string[]) => [...prev.filter((p: string) => p !== id)]);

  return { pools, add, remove };
};

function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);

      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue] as const;
}
