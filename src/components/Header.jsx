import { LogoLight } from "../assets/index";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import LongMenu from "./dropwDownMenu";
import BasicList from "./dropwDownMenu";
import MenuPopupState from "./dropwDownMenu";
import { getAllCategories } from "../api/Api";
import { useEffect, useState } from "react";
import { addCategories, removeUser } from "../redux/bazaarSlice";
import { toast } from "react-toastify";

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productData = useSelector((state) => state.bazar.productData);
  const UserInfo = useSelector((state) => state.bazar.userInfo);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories().then((categories) => {
      setCategories(categories.data);
    });
  }, []);

  const handleLogout = async () => {
    try {
      toast.success("Başarıyla Çıkış yapıldı");
      dispatch(removeUser());
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      toast.warn(error);
    }
  };
  return (
    <div className="z-50 w-full h-30 bg-white border-b-[1px] z-index-1 sticky top-0 border-b-gray-800 font-titleFont ">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <div className="flex flex-row items-center gap-4">
          {UserInfo && UserInfo.name !== "admin" && (
            <MenuPopupState categories={categories} />
          )}
          <Link to="/">
            <div>
              <img src={LogoLight} alt="LogoLight" className="w-28" />
            </div>
          </Link>
          {UserInfo && UserInfo.name === "admin" && (
            <div>
              <Link to="/addProduct">
                <div>Ürün ekle</div>
              </Link>
              <Link to="/addCategories">
                <div>Kategori ekle</div>
              </Link>
            </div>
          )}
        </div>
        <div className="flex gap-5 items-center">
          {UserInfo && UserInfo.name !== "admin" && (
            <ul className="flex items-center gap-8 cursor-pointer">
              <Link to={"/"}>
                <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                  Ana Sayfa
                </li>
              </Link>
            </ul>
          )}
          {UserInfo && UserInfo.name !== "admin" && (
            <Link to="/cart">
              <div className="cursor-pointer relative">
                <ShoppingCartIcon />
                <span className="abslute top-2 left-0">
                  {productData.length}
                </span>
              </div>
            </Link>
          )}

          <div>
            {UserInfo && (
              <img
                className="w-8 h-8 round-full"
                src={UserInfo ? UserInfo.avatar : null}
              />
            )}
          </div>
          <Link to={"/login"}>
            {!UserInfo && (
              <div>
                <p>Giriş yap</p>
              </div>
            )}
          </Link>
          <Link to={"/register"}>
            {!UserInfo && (
              <div className="flex flex-row gap-4">
                <p>Kayıt Ol</p>
              </div>
            )}
          </Link>
          {UserInfo && <p>{UserInfo.name}</p>}
          <Link onClick={handleLogout} to={"/"}>
            {UserInfo && <p>Logout</p>}
          </Link>
        </div>
      </div>
    </div>
  );
};
