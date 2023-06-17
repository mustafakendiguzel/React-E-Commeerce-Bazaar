import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/bazaarSlice";
import { ToastContainer, toast } from "react-toastify";
import BasicModal from "./basicModal";

export const ProductsCard = ({ product }) => {
  const dispatch = useDispatch();

  const { id, title, oldPrice, price, images, category, isNew, description } =
    product;
  const navigate = useNavigate();

  const idString = (Title) => {
    const newIdString = String(Title).toLowerCase().split(" ").join("");
    return newIdString;
  };
  const rootId = idString(id);

  const handleDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: product,
      },
    });
  };

  return (
    <div className="group relative">
      <div className="w-full h-96 cursor-pointer overflow-hidden">
        <img
          onClick={handleDetails}
          className=" h-full w-full object-cover group-hover:scale-110 duration-500"
          src={images[0]}
          alt=""
        />
      </div>
      <div className="w-full border-[1px] px-2 py-4">
        <div>
          <h2 className="font-arial text-xl font-bold ">{title}</h2>
        </div>
        <div className="flex justify-between items-center">
          <p>{category.name}</p>
          <div className="flex gap-2 justify-end">
            <p className="font-semibold">${price}</p>
          </div>
        </div>
        <div className="flex justify-between mt-2">
          <button
            onClick={() =>
              dispatch(
                addToCart({
                  _id: product.id,
                  title: product.title,
                  image: product.images ? product.images[0] : product.images,
                  price: product.price,
                  quantity: 1,
                  description: product.description,
                })
              ) && toast.success(`${product.title} is added`)
            }
            className="bg-light-gray text-blue-600 hover:text-blue-400"
          >
            Karta Ekle
          </button>
          <BasicModal item={product} />
        </div>
        <div className="top-2 right-2 absolute"></div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};
