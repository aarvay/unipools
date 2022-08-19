import { FC } from "react";
import { Avatar, HStack, StatNumber, Text } from "@chakra-ui/react";

interface Props {
  token: any;
}

export const TokenStat: FC<Props> = ({ token }) => (
  <StatNumber>
    <HStack>
      <Avatar size="xs" name={token?.symbol} />
      <Text>{token?.tvl}</Text>
    </HStack>
  </StatNumber>
);
