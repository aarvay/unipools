import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Center,
  HStack,
  Table as ChakraTable,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { usePages } from "../../hooks/usePages";

interface BaseColDef {
  name: string;
  isNumeric?: boolean;
}

type ColumnDef =
  | (BaseColDef & { fieldName: string })
  | (BaseColDef & { cell: (rowData: any) => ReactNode });

interface Props {
  columnDefs: ColumnDef[];
  rowDatas?: any[];
  onRowClick?: (rowData: any) => void;
}

export const Table: FC<Props> = ({ columnDefs, rowDatas, onRowClick }) => {
  const { page, pageCount, pageItems, previous, next } = usePages(rowDatas);

  const rowProps = (item: any) =>
    onRowClick && {
      onClick: () => onRowClick(item),
      _hover: { color: "darkgray", cursor: "pointer" },
    };

  return (
    <TableContainer border="1px" rounded="xl">
      <ChakraTable size="md" variant="simple" colorScheme="gray">
        <TableCaption>
          <Center w="100%">
            <HStack spacing="2">
              <ArrowBackIcon boxSize={4} onClick={previous} />
              <Text fontSize="sm">
                Page {page} of {pageCount}
              </Text>
              <ArrowForwardIcon boxSize={4} onClick={next} />
            </HStack>
          </Center>
        </TableCaption>
        <Thead>
          <Tr>
            {columnDefs.map(({ name, isNumeric }) => (
              <Th key={name} isNumeric={isNumeric}>
                {name}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {pageItems?.map((item) => (
            <Tr key={item.id} {...rowProps(item)}>
              {columnDefs.map(({ isNumeric, cell, fieldName, name }: any) => (
                <Td key={name} isNumeric={isNumeric}>
                  {cell ? cell(item) : item[fieldName]}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </ChakraTable>
    </TableContainer>
  );
};
