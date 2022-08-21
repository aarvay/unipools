import { Box, Stack, Text } from "@chakra-ui/react";
import { PoolsTable } from "../components/PoolsTable";
import { usePools } from "../hooks/usePools";
import { type NextPage } from "next";
import { useMemo } from "react";
import { useWatchlist } from "../hooks/useWatchlist";

const Home: NextPage = () => {
  const { pools } = usePools();
  const { pools: watchedPoolIds } = useWatchlist();
  const watchedPools = useMemo(
    () => pools?.filter((p: any) => watchedPoolIds?.includes(p.id)),
    [pools, watchedPoolIds]
  );
  return (
    <Box w="90%">
      <Stack spacing="6">
        <Text fontSize="2xl">Pool Watchlist</Text>
        {watchedPools && watchedPools.length ? (
          <PoolsTable pools={watchedPools} />
        ) : (
          <Box bg="lightgrey" w="100%" p="4" color="white" rounded="xl">
            <Text fontSize="sm" color="black">
              Pools added to your watchlist will appear here.
            </Text>
          </Box>
        )}

        <Text fontSize="2xl">All Pools</Text>
        <PoolsTable pools={pools} />
      </Stack>
    </Box>
  );
};

export default Home;
