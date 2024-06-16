import {
  Avatar,
  Badge,
  Box,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";

const TableData = ({ filterData }) => {
  function tableDate() {
    const year = new Date(Date.now()).getFullYear();
    const date = new Date(Date.now()).getDate();
    const month = new Date(Date.now()).getMonth();
    const hour = new Date(Date.now()).getHours();
    const minute = new Date(Date.now()).getMinutes();
    return `${date} / ${month} / ${year} (${hour} : ${minute})`;
  }

  console.log(filterData);
  return (
    <TableContainer mt={10}>
      {filterData ? (
        <Table variant="striped" colorScheme="teal" size="lg">
          <Thead>
            <Tr>
              <Th py={7} fontSize="xl">
                ID
              </Th>
              <Th py={7} fontSize="xl">
                Customer Name
              </Th>
              <Th py={7} fontSize="xl">
                Price
              </Th>
              <Th py={7} fontSize="xl">
                Last Modified
              </Th>
              <Th py={7} fontSize="xl">
                Edit / View
              </Th>
            </Tr>
          </Thead>

          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>
                <Flex alignItems="center" gap={5}>
                  <Text>
                    <Avatar />
                  </Text>
                  <Text>{filterData.customer_profile["name"]}</Text>
                  <Text>
                    <Badge
                      colorScheme="purple"
                      fontSize="1rem"
                      borderRadius="md"
                    >
                      ap2000
                    </Badge>
                  </Text>
                </Flex>
              </Td>
              <Td>100</Td>
              <Td>{tableDate()}</Td>
              <Td>
                <BsThreeDots cursor="pointer" />
              </Td>
            </Tr>
          </Tbody>
        </Table>
      ) : (
        <Box color="red">please press any tab once.</Box>
      )}
    </TableContainer>
  );
};

export default TableData;
