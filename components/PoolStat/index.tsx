import {
  Avatar,
  HStack,
  Stack,
  Stat,
  StatGroup,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import { TokenStat } from "./TokenStat";

interface Props {
  pool: any;
}

export const PoolStat: FC<Props> = ({ pool }) => (
  <StatGroup border="1px" rounded="xl" w={["100%", "50%", "45%", "40%"]} p={4}>
    <Stat>
      <StatLabel>Tokens Value</StatLabel>
      <Stack>
        <TokenStat token={pool?.token0} />
        <TokenStat token={pool?.token1} />
      </Stack>
    </Stat>

    <Stat>
      <StatLabel>TX Count</StatLabel>
      <StatNumber>{pool?.txCount}</StatNumber>
    </Stat>
  </StatGroup>
);
