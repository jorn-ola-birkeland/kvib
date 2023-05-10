import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Code } from "@chakra-ui/react";
import { fonts } from "@kvib/react/src/theme/foundations";

export const Fonts = () => {
  return (
    <TableContainer>
      <Table variant="simple" width="100%">
        <Thead textAlign="left">
          <Tr>
            <Th width="20%">Navn</Th>
            <Th width="50%">Verdi</Th>
            <Th width="30%">Kode</Th>
          </Tr>
        </Thead>
        <Tbody>
          {Object.entries(fonts).map(([name, value]) => (
            <Tr key={name}>
              <Td backgroundColor="white">{name}</Td>
              <Td backgroundColor="white">{value}</Td>
              <Td backgroundColor="white">
                <Code>{`var(--kvib-fonts-${name})`}</Code>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
