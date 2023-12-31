import axios from "axios";

export const productsData = async () => {
  const products = await axios.get("https://api.escuelajs.co/api/v1/products/");
  return products;
};

export const login = async (data) => {
  console.log(data);
  const login = await axios.request({
    method: "POST",
    url: "https://api.escuelajs.co/api/v1/auth/login",
    data: {
      email: data.email,
      password: data.password,
    },
  });
  return login;
};

export const register = async (data) => {
  const register = await axios.request({
    method: "POST",
    url: " https://api.escuelajs.co/api/v1/users/",
    data: {
      name: data.name,
      email: data.email,
      password: data.password,
      avatar: data.avatar,
    },
  });
  return register;
};

export const getAllCategories = async (data) => {
  const categories = await axios.request({
    method: "GET",
    url: "https://api.escuelajs.co/api/v1/categories",
  });
  return categories;
};

export const createProduct = async (data) => {
  const product = await axios.request({
    method: "POST",
    url: "https://api.escuelajs.co/api/v1/products/",
    data: {
      title: data.title,
      price: Number(data.price),
      description: data.description,
      categoryId: Number(data.categoryId),
      images: [data.image],
    },
  });
  return product;
};

export const createCategory = async (data) => {
  const product = await axios.request({
    method: "POST",
    url: "https://api.escuelajs.co/api/v1/categories/",
    data: {
      name: data.name,
      image: data.image,
    },
  });
  return product;
};

export const getMe = async (data) => {
  const me = await axios.request({
    method: "GET",
    url: "https://api.escuelajs.co/api/v1/auth/profile",
    headers: { Authorization: `Bearer ${data.token}` },
  });
  return me;
};
