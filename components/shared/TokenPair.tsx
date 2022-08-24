import {
  AvatarGroup,
  AvatarGroupProps,
  HStack,
  Text,
  TextProps,
} from "@chakra-ui/react";
import { FC } from "react";
import { TokenIcon } from "./TokenIcon";

interface Props {
  pool: any;
  avatarSize?: AvatarGroupProps["size"];
  fontSize?: TextProps["fontSize"];
}

export const TokenPair: FC<Props> = ({
  pool,
  avatarSize = "xs",
  fontSize = "md",
}) => {
  return (
    <HStack>
      <AvatarGroup size={avatarSize}>
        <TokenIcon token={pool?.token0} />
        <TokenIcon token={pool?.token1} />
      </AvatarGroup>
      <Text fontSize={fontSize}>
        {pool?.token0.symbol}/{pool?.token1.symbol}
      </Text>
    </HStack>
  );
};
