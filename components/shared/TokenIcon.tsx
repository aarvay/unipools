import { Avatar, AvatarProps } from "@chakra-ui/react";
import Image from "next/image";
import { FC, useState } from "react";

type Props = { token?: any } & AvatarProps;

export const TokenIcon: FC<Props> = ({ token, ...avatarProps }) => {
  const [err, setErr] = useState(false);

  return (
    <Avatar {...avatarProps}>
      <Image
        src={!err ? getTokenLogoUrl(token?.id) : "/favicon.ico"}
        layout="fill"
        alt={token?.symbol}
        onError={(e) => {
          e.preventDefault();
          setErr(true);
        }}
      />
    </Avatar>
  );
};

export const getTokenLogoUrl = (id: string) =>
  `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/${id}/logo.png`;
