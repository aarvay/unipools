import {
  Avatar,
  AvatarGroup,
  AvatarGroupProps,
  HStack,
  Text,
  TextProps,
} from "@chakra-ui/react";
import { FC } from "react";

interface Props {
  pool: any;
  avatarSize?: AvatarGroupProps["size"];
  fontSize?: TextProps["fontSize"];
}

export const TokenPair: FC<Props> = ({
  pool,
  avatarSize = "xs",
  fontSize = "md",
}) => (
  <HStack spacing="1">
    <AvatarGroup size={avatarSize}>
      <Avatar name={pool?.token0.symbol} />
      <Avatar name={pool?.token1.symbol} />
    </AvatarGroup>
    <Text fontSize={fontSize}>
      {pool?.token0.symbol}/{pool?.token1.symbol}
    </Text>
  </HStack>
);
