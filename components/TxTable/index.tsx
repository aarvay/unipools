import { FC, useState } from "react";
import {
  Center,
  HStack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Row } from "./Row";

interface Props {
  txns?: any[];
}

export const TxTable: FC<Props> = ({ txns }) => {
  const [page, setPage] = useState(1);
  const maxPage = Math.floor((txns?.length || 0) / 10);

  return (
    <TableContainer border="1px" rounded="xl">
      <Table size="md" variant="simple" colorScheme="gray">
        <TableCaption>
          <Center w="100%">
            <HStack spacing="2">
              <ArrowBackIcon
                boxSize={4}
                onClick={() => setPage((page) => (page != 1 ? page - 1 : page))}
              />
              <Text fontSize="sm">
                Page {page} of {maxPage || 1}
              </Text>
              <ArrowForwardIcon
                boxSize={4}
                onClick={() =>
                  setPage((page) => (page != (maxPage || 1) ? page + 1 : page))
                }
              />
            </HStack>
          </Center>
        </TableCaption>
        <Thead>
          <Tr>
            <Th>Link to Etherscan</Th>
            <Th isNumeric>TX Type</Th>
            <Th isNumeric>Token Amount (USD)</Th>
            <Th isNumeric>Timestamp</Th>
          </Tr>
        </Thead>
        <Tbody>
          {txns?.slice((page - 1) * 10, page * 10).map((pool) => (
            <Row key={pool.id} data={pool} />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
