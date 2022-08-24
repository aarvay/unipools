import { FC } from "react";
import { HStack, StatNumber, Text } from "@chakra-ui/react";
import { TokenIcon } from "../shared/TokenIcon";

interface Props {
  token: any;
}

export const TokenStat: FC<Props> = ({ token }) => (
  <StatNumber>
    <HStack>
      <TokenIcon token={token} size="xs" />
      <Text>{token?.tvl}</Text>
    </HStack>
  </StatNumber>
);
