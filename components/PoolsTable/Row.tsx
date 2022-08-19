import { FC } from "react";
import Link from "next/link";
import { LinkBox, LinkOverlay, Td } from "@chakra-ui/react";
import { TokenPair } from "../shared/TokenPair";

interface Props {
  data?: any;
}

export const Row: FC<Props> = ({ data }) => {
  return (
    <LinkBox as="tr" _hover={{ color: "darkgray" }}>
      <Td>
        <Link href={`/pools/${data.id}`} passHref>
          <LinkOverlay>
            <TokenPair pool={data} />
          </LinkOverlay>
        </Link>
      </Td>
      <Td isNumeric>{data.txCount}</Td>
      <Td isNumeric>{data.tvl}</Td>
      <Td isNumeric>{data.volume}</Td>
    </LinkBox>
  );
};
