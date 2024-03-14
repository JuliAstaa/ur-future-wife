import React, { useEffect, useState } from "react";
import { categories } from "../../libs/api";
import { useSelector, useDispatch } from "react-redux";
import { getSelectedCategory, setSelectedCategory } from "../../data/dataSlice";

const Categories = () => {
  const [category, setCategory] = useState();
  const dispatch = useDispatch();
  const selectedCategory = useSelector(getSelectedCategory);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const datas = await categories().then((data) => data);
        setCategory(datas.categories);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="w-full h-full gap-2 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 my-4 p-2 shadow-xl rounded-md">
      <div
        onClick={() => dispatch(setSelectedCategory("All"))}
        className="py-2 grid place-content-center bg-slate-200 relative overflow-hidden group cursor-pointer"
      >
        <span className="font-poppins">All</span>
        <span
          className={`block w-full h-full absolute -left-full bg-[#FF9800]/70 ${
            selectedCategory == "All" ? "left-0" : "group-hover:left-0"
          }  transition-all ease-in-out duration-300`}
        ></span>
      </div>
      {category?.map((cat) => {
        return (
          <div
            onClick={() => dispatch(setSelectedCategory(cat.strCategory))}
            className="py-2 grid place-content-center bg-slate-200 relative overflow-hidden group cursor-pointer"
            key={cat.idCategory}
          >
            <span className="font-poppins">{cat.strCategory}</span>
            <span
              className={`block w-full h-full absolute -left-full bg-[#FF9800]/70 ${
                cat.strCategory === selectedCategory
                  ? "left-0"
                  : "group-hover:left-0"
              } transition-all ease-in-out duration-300`}
            ></span>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
