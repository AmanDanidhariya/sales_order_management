export const fetchData = async () => {
  try {
    const response = await fetch("/json/product.json");
    if (!response.ok) throw Error("Network response was not ok");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const saleOrderData = async () => {
  try {
    const response = await fetch("/json/saleOrder.json");
    if (!response.ok) throw Error("Network response was not ok");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCustomer = async () => {
  try {
    const response = await fetch("/json/customer.json");
    if (!response.ok) throw Error("Network response was not ok");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
