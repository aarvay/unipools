import { FC } from "react";
import { useRouter } from "next/router";
import { Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Table } from "./Table";

interface Props {
  txns?: any[];
}

export const TxTable: FC<Props> = ({ txns }) => {
  const router = useRouter();
  return (
    <Table
      columnDefs={[
        {
          name: "Link to Etherscan",
          cell: (txn) => {
            const link = `https://etherscan.io/tx/${txn.id}`;
            const truncate = (str: string) => str.slice(0, 30) + "...";
            return (
              <Link href={link} isExternal>
                {truncate(link)} <ExternalLinkIcon mx="2px" />
              </Link>
            );
          },
        },
        { name: "TX Type", fieldName: "txType", isNumeric: true },
        { name: "Token Amount (USD)", fieldName: "amount", isNumeric: true },
        { name: "Timestamp", fieldName: "timestamp", isNumeric: true },
      ]}
      rowDatas={txns}
    />
  );
};
