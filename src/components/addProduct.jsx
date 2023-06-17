import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import {
  decrementQantity,
  deleteFromCart,
  incrementQuantity,
  resetCart,
} from "../redux/bazaarSlice";
import { useEffect, useState } from "react";
import { createProduct, getAllCategories } from "../api/Api";

export const AddProduct = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.bazar.productData);

  const initialValues = {
    title: "",
    price: 0,
    description: "",
    categoryId: "",
    image: "",
  };

  const [values, setValues] = useState(initialValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleCategoryChange = (e) => {
    const { value } = e.target;
    setValues({
      ...values,
      categoryId: value,
    });
  };

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getAllCategories().then((categories) => {
      setCategories(categories.data);
    });
  }, []);
  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 py-20">
      <div className="text-2xl">
        <h1>ÜRÜN EKLE</h1>
      </div>
      <div className="flex flex-col space-y-12">
        <div className="flex flex-row justify-between">
          <div className=" mr-6">
            <h2>Başlık: </h2>
          </div>
          <div>
            <input
              className="border-[1px] border-black cursor-pointer"
              type="text"
              id="title"
              name="title"
              value={values.title}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className=" mr-6">
            <h2>Fiyat: </h2>
          </div>
          <div>
            <input
              className="border-[1px] border-black cursor-pointer"
              type="number"
              id="price"
              name="price"
              value={values.price}
              onChange={handleInputChange}
              pattern="[0-9]{0,5}"
            />
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className=" mr-6">
            <h2>Açıklama: </h2>
          </div>
          <div>
            <input
              className="border-[1px] border-black cursor-pointer"
              type="text"
              id="description"
              name="description"
              value={values.description}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className=" mr-6">
            <h2>Kategori: </h2>
          </div>
          <div className="">
            <select
              className="border-[1px] border-black cursor-pointer"
              name="categoryId"
              value={values.categoryId}
              onChange={handleCategoryChange}
            >
              <option value="">Seçiniz</option>
              {categories &&
                categories.map((item, key) => {
                  return (
                    <option value={item.id} key={key}>
                      {item.name}
                    </option>
                  );
                })}
            </select>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className=" mr-6">
            <h2>Resim Url: </h2>
          </div>
          <div>
            <input
              className="border-[1px] border-black cursor-pointer"
              type="text"
              id="imgage"
              name="image"
              value={values.image}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <button
          onClick={() => {
            createProduct({
              ...values,
            });
          }}
          className="bg-black text-white text-base py-3 px-10 tracking-wide 
        rounded-md hover:bg-gray-800 duration-300"
        >
          Ekle
        </button>
      </div>
    </div>
  );
};
