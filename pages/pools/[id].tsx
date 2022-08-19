import {
  Box,
  Button,
  Flex,
  HStack,
  LinkBox,
  LinkOverlay,
  Select,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { ChevronLeftIcon, StarIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { usePool } from "../../hooks/usePool";
import { useRouter } from "next/router";
import { TokenPair } from "../../components/shared/TokenPair";
import { PoolStat } from "../../components/PoolStat";
import { TxTable } from "../../components/TxTable";
import { TxType, useTxns } from "../../hooks/useTxns";
import { useMemo, useState } from "react";
import { useWatchlist } from "../../hooks/useWatchlist";

const Home: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { pool } = usePool(id as string);
  const { getTxns } = useTxns(id as string);

  const [txFilter, setTxFilter] = useState<TxType>("Swap");
  const txns = useMemo(() => getTxns(txFilter), [getTxns, txFilter]);

  const { pools, add, remove } = useWatchlist();

  const added = pools.includes(id);

  return (
    <Box w="90%">
      <Stack spacing="6">
        <LinkBox>
          <Link href="/" passHref>
            <LinkOverlay>
              <HStack spacing="1">
                <ChevronLeftIcon w="6" h="6" />
                <Text>Back to Pools</Text>
              </HStack>
            </LinkOverlay>
          </Link>
        </LinkBox>
        <Flex>
          <TokenPair pool={pool} avatarSize="sm" fontSize="xl" />
          <Spacer />
          <Button
            leftIcon={<StarIcon />}
            variant="solid"
            colorScheme={"telegram"}
            onClick={() => (added ? remove(id) : add(id))}
          >
            {added ? "Remove from Watchlist" : "Add to Watchlist"}
          </Button>
        </Flex>
        <PoolStat pool={pool} />
        <Flex>
          <Text fontSize="2xl">Transactions</Text>
          <Spacer />
          <Select
            value={txFilter}
            onChange={(e) => setTxFilter(e.target.value as TxType)}
            w="200px"
          >
            <option value="Swap">Swap</option>
            <option value="Mint">Mint</option>
            <option value="Burn">Burn</option>
            <option value="All">All</option>
          </Select>
        </Flex>
        <TxTable txns={txns} />
      </Stack>
    </Box>
  );
};

export default Home;
