import { FC } from "react";
import { Td, Tr } from "@chakra-ui/react";
import { TokenPair } from "../shared/TokenPair";
import { useRouter } from "next/router";

interface Props {
  data?: any;
}

export const Row: FC<Props> = ({ data }) => {
  const router = useRouter();

  return (
    <Tr
      _hover={{ color: "darkgray", cursor: "pointer" }}
      onClick={() => router.push(`/pools/${data.id}`)}
    >
      <Td>
        <TokenPair pool={data} />
      </Td>
      <Td isNumeric>{data.txCount}</Td>
      <Td isNumeric>{data.tvl}</Td>
      <Td isNumeric>{data.volume}</Td>
    </Tr>
  );
};
