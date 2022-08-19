import { FC } from "react";
import { Link, Td, Tr } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

interface Props {
  data?: any;
}

export const Row: FC<Props> = ({ data }) => {
  const link = `https://etherscan.io/tx/${data.id}`;
  return (
    <Tr>
      <Td>
        <Link href={link} isExternal>
          {truncate(link)} <ExternalLinkIcon mx="2px" />
        </Link>
      </Td>
      <Td isNumeric>{data.txType}</Td>
      <Td isNumeric>{data.amount}</Td>
      <Td isNumeric>{data.timestamp}</Td>
    </Tr>
  );
};

const truncate = (str: string) => str.slice(0, 30) + "...";
