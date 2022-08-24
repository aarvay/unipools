import { FC } from "react";
import { Table } from "../components/Table";
import { TokenPair } from "./shared/TokenPair";
import { useRouter } from "next/router";

interface Props {
  pools?: any[];
}

export const PoolsTable: FC<Props> = ({ pools }) => {
  const router = useRouter();
  return (
    <Table
      columnDefs={[
        { name: "Pool", cell: (data) => <TokenPair pool={data} /> },
        { name: "TX Count", fieldName: "txCount", isNumeric: true },
        { name: "TVL (USD)", fieldName: "tvl", isNumeric: true },
        { name: "Volume", fieldName: "volume", isNumeric: true },
      ]}
      rowDatas={pools}
      onRowClick={(data) => router.push(`/pools/${data.id}`)}
    />
  );
};
