import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import {
  decrementQantity,
  deleteFromCart,
  incrementQuantity,
  resetCart,
} from "../redux/bazaarSlice";
import { useState } from "react";
import { createCategory } from "../api/Api";

export const AddCategories = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.bazar.productData);

  const initialValues = {
    name: "",
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
  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 py-20">
      <div className="text-2xl">
        <h1>KATEGORİ EKLE</h1>
      </div>
      <div className="flex flex-col space-y-12">
        <div className="flex flex-row justify-between">
          <div className=" mr-6">
            <h2>Kategori ismi: </h2>
          </div>
          <div>
            <input
              className="border-[1px] border-black cursor-pointer"
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={handleInputChange}
            />
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
              id="image"
              name="image"
              value={values.image}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <button
          onClick={() => {
            createCategory({ ...values });
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
