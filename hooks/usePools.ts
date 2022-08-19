import useSWR from "swr";
import { fetcher } from "../shared/api/fetcher";
import { ethers } from "ethers";

export const usePools = () => {
  const { data, error } = useSWR(
    `query pools {
      pools(orderBy: totalValueLockedUSD, orderDirection: desc) {
        id
        txCount
        token0 {
          id
          symbol
          totalValueLockedUSD
        }
        token1 {
          id
          symbol
          totalValueLockedUSD
        }
        volumeUSD
        totalValueLockedUSD
      }
    }`,
    fetcher
  );

  const pools = data?.pools
    .filter((p: any) => parseFloat(p.volumeUSD) > 0)
    .map(
      ({
        totalValueLockedUSD,
        volumeUSD,
        token0,
        token1,
        ...rest
      }: {
        token0: { id: string; totalValueLockedUSD: string };
        token1: { id: string; totalValueLockedUSD: string };
        totalValueLockedUSD: string;
        volumeUSD: string;
      }) => ({
        tvl: formatAsUSD(totalValueLockedUSD),
        volume: formatAsUSD(volumeUSD),
        token0: {
          ...token0,
          id: ethers.utils.getAddress(token0.id),
          tvl: formatAsUSD(token0.totalValueLockedUSD),
        },
        token1: {
          ...token1,
          id: ethers.utils.getAddress(token1.id),
          tvl: formatAsUSD(token1.totalValueLockedUSD),
        },
        ...rest,
      })
    );

  return {
    pools,
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
