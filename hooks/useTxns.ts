import { useCallback } from "react";
import useSWR from "swr";
import { fetcher } from "../shared/api/fetcher";

const filter = "where: {pool: $pool} orderBy: timestamp orderDirection: desc";
const txFrag = `id
   amountUSD
   timestamp
  __typename`;

export type TxType = "Swap" | "Mint" | "Burn" | "All";

export const useTxns = (poolId: string) => {
  const { data, error } = useSWR(
    [
      `query txns($pool: String) {
       swaps(${filter}) {
        ${txFrag}
       }
       mints(${filter}) {
        ${txFrag}
       }
       burns(${filter}) {
         ${txFrag}
       }
      }`,
      { pool: poolId },
    ],
    fetcher
  );

  const allTxns = ((data) => {
    const format = (txns = []) =>
      txns?.map(
        ({
          id,
          amountUSD,
          timestamp,
          ...rest
        }: {
          id: string;
          amountUSD: string;
          timestamp: string;
        }) => ({
          id,
          amount: formatAsUSD(amountUSD),
          timestamp: new Date(parseInt(timestamp) * 1000).toLocaleDateString(
            "en-US"
          ),
          txType: (rest as { __typename: string })["__typename"],
        })
      );
    const { swaps, mints, burns } = data || { swaps: [], mints: [], burns: [] };
    return [...format(swaps), ...format(mints), ...format(burns)];
  })(data);

  const getTxns = useCallback(
    (txType: TxType = "Swap") => {
      if (txType === "All") return allTxns;
      return allTxns.filter((txn: any) => txn.txType === txType);
    },
    [allTxns]
  );

  return {
    getTxns,
    isLoading: !error && !data,
    isError: error,
  };
};

const formatAsUSD = (str: string) =>
  new Intl.NumberFormat(navigator.language, {
    style: "currency",
    currency: "USD",
    currencyDisplay: "narrowSymbol",
    notation: "compact",
  }).format(parseFloat(str));
