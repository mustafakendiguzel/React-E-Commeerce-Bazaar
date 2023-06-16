import axios from "axios";

export const productsData = async () => {
  const products = await axios.get(
    "https://fakestoreapiserver.reactbd.com/products"
  );
  return products;
};

export const login = async (data) => {
  console.log(data);
  const login = await axios.request({
    method: "POST",
    url: "https://fakestoreapi.com/auth/login",
    data: {
      username: data.username,
      password: data.password,
    },
  });
  return login;
};
