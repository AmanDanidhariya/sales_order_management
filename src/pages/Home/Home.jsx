import { useState } from "react";
import { Box, Container, Flex } from "@chakra-ui/react";
import { saleOrderData, fetchCustomer } from "../../utils/http";
import TableData from "../../components/TableData";
import { useQuery } from "@tanstack/react-query";
import Buttons from "../../components/Buttons";
import ColorModeSwitch from "../../components/ColorModeSwitch";
import SaleOrderModal from "../../components/SaleOrderModal";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("active");
  const [findCustomer, setFindCustomer] = useState();

  const { data } = useQuery({
    queryKey: ["sale_order"],
    queryFn: saleOrderData,
  });

  const { data: allCustomers } = useQuery({
    queryKey: ["customer"],
    queryFn: fetchCustomer,
  });

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  //filter data according to tab value
  const handleFilter = (status, filterType) => {
    const filter = data.find((item) => item.paid === status);
    findMatchingUser(filter);
    setActiveFilter(filterType);
  };

  //find customer from customer.json
  const findMatchingUser = (filter) => {
    if (allCustomers && filter) {
      const customerId = filter.customer_id;
      const matched = allCustomers.find(
        (customer) => customer.customer === customerId
      );
      setFindCustomer(matched);
    }
  };

  return (
    <Container maxW="100vw" p="3rem">
      {/* buttons start */}
      <Flex justifyContent="space-between">
        <Box>
          <Buttons
            colorScheme={activeFilter === "active" ? "blue" : "gray"}
            text="Active Sale Orders"
            onClick={() => handleFilter(false, "active")}
          />
          <Buttons
            colorScheme={activeFilter === "completed" ? "green" : "gray"}
            text="Completed Sale Orders"
            onClick={() => handleFilter(true, "completed")}
          />
        </Box>
        <Flex>
          <ColorModeSwitch />
          <Buttons color="yellow" text="+ Sale order" onClick={openModal} />
          <SaleOrderModal isOpen={isOpen} onClose={closeModal} />
        </Flex>
      </Flex>
      {/* buttons end */}
      <Box>
        <TableData filterData={findCustomer} />
      </Box>
    </Container>
  );
};

export default Home;
