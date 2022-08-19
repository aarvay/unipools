import { usePools } from "./usePools";

export const usePool = (id: string) => {
  const { pools, isError, isLoading } = usePools();
  const pool = pools?.find((p: any) => p.id === id);
  return { pool, isError, isLoading };
};
