import { useEffect, useMemo, useState } from "react";
import { Banner } from "../../components/Banner";
import { Products } from "../../components/Products";
import { useLoaderData } from "react-router-dom";
import { useSelector } from "react-redux";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    setProducts(data.data);
  }, []);

  const selectedCategory = useSelector(
    (state) => state.bazar.selectedCategory?.name
  );
  console.log(selectedCategory);
  function getFilteredList() {
    // Avoid filter when selectedCategory is null
    if (!selectedCategory) {
      return products;
    }
    return products.filter((item) => item.category.name === selectedCategory);
  }

  // Avoid duplicate function calls with useMemo
  var filteredList = useMemo(getFilteredList, [selectedCategory, products]);

  return (
    <div>
      <Banner />
      <Products products={filteredList} />
    </div>
  );
};
