import { useState } from "react";

export const usePages = (items?: any[], count = 10) => {
  const [page, setPage] = useState<number>(1);
  const pageCount = Math.floor((items?.length || 0) / count) || 1;
  const pageItems = items?.slice((page - 1) * count, page * count);

  const previous = () => setPage((page) => (page != 1 ? page - 1 : page));
  const next = () => setPage((page) => (page != pageCount ? page + 1 : page));

  return { page, pageCount, pageItems, previous, next };
};
