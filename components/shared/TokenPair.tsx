import {
  Avatar,
  AvatarGroup,
  AvatarGroupProps,
  HStack,
  Text,
  TextProps,
} from "@chakra-ui/react";
import { FC } from "react";
import Image from "next/image";
import { getTokenLogoUrl } from "../../shared/utils";

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
        <Avatar>
          <Image
            src={getTokenLogoUrl(pool?.token0.id)}
            alt={pool?.token0.symbol}
            layout="fill"
          />
        </Avatar>
        <Avatar>
          <Image
            src={getTokenLogoUrl(pool?.token1.id)}
            alt={pool?.token1.symbol}
            layout="fill"
          />
        </Avatar>
      </AvatarGroup>
      <Text fontSize={fontSize}>
        {pool?.token0.symbol}/{pool?.token1.symbol}
      </Text>
    </HStack>
  );
};
