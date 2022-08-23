import { FC } from "react";
import { Avatar, HStack, StatNumber, Text } from "@chakra-ui/react";
import Image from "next/image";
import { getTokenLogoUrl } from "../../shared/utils";

interface Props {
  token: any;
}

export const TokenStat: FC<Props> = ({ token }) => (
  <StatNumber>
    <HStack>
      <Avatar size="xs" name={token?.symbol}>
        <Image
          src={getTokenLogoUrl(token?.id)}
          layout="fill"
          alt={token?.symbol}
        />
      </Avatar>
      <Text>{token?.tvl}</Text>
    </HStack>
  </StatNumber>
);
