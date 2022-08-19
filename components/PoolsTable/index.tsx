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
  pools?: any[];
}

export const PoolsTable: FC<Props> = ({ pools }) => {
  const [page, setPage] = useState(1);
  return (
    <TableContainer border="1px" rounded="xl">
      <Table size="md" variant="simple" colorScheme="gray">
        <TableCaption>
          <Center w="100%">
            <HStack spacing="2">
              <ArrowBackIcon boxSize={4} />
              <Text fontSize="sm">Page 1 of 5</Text>
              <ArrowForwardIcon boxSize={4} />
            </HStack>
          </Center>
        </TableCaption>
        <Thead>
          <Tr>
            <Th>Pool</Th>
            <Th isNumeric>TX Count</Th>
            <Th isNumeric>TVL (USD)</Th>
            <Th isNumeric>Volume</Th>
          </Tr>
        </Thead>
        <Tbody>
          {pools?.map((pool) => (
            <Row key={pool.id} data={pool} />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
