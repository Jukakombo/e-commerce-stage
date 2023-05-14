import React from "react";
import { BiCloudUpload } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import FileBase from "react-file-base64";
import { useState } from "react";
import { createNews, deleteNews, updateNews } from "../../actions/news";

function CreateMenu() {
  const [query, setQuery] = useState("");
  const foodMenu = useSelector((state) => state.news);
  const [currentId, setCurrentId] = useState(0);
  const newsupdatedNews = useSelector((state) =>
    currentId ? state.news.find((p) => p._id === currentId) : null
  );

  const dispatch = useDispatch();
  const [news, setNews] = useState({
    foodName: "",
    description: "",
    image: "",
    price: "",
  });

  useEffect(() => {
    if (newsupdatedNews) setNews(newsupdatedNews);
  }, [newsupdatedNews]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentId === 0) {
      dispatch(createNews(news));
      clear();
    } else {
      dispatch(updateNews(currentId, news));
      clear();
    }
    clear();
  };
  const clear = () => {
    setCurrentId(0);
    setNews({
      foodName: "",
      description: "",
      image: "",
      price: "",
    });
  };
  return (
    <div className="h-[450px] overflow-y-scroll pr-2">
      <div className="">
        <h1 className="font-bold text-3xl py-2 text_navigation text-[#44BBA4]">
          Create New Menu
        </h1>
        <div className="">
          <form className="grid md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
            <div className="card_man_fiver p-4 flex flex-col">
              <label htmlFor="name" className="font-bold my-4">
                Name:
              </label>
              <input
                className="bg-gray-100 rounded p-4 outline-none"
                type="text"
                name="foodName"
                value={news.foodName}
                id="name"
                onChange={(e) =>
                  setNews({
                    ...news,
                    foodName: e.target.value,
                  })
                }
                required
                placeholder="Please enter the name of the food!"
              />
            </div>
            <div className="card_man_fiver p-4 flex flex-col">
              <label htmlFor="price" className="font-bold my-4">
                Price $:
              </label>
              <input
                className="bg-gray-100 rounded p-4 outline-none"
                type="text"
                name="price"
                value={news.price}
                onChange={(e) =>
                  setNews({
                    ...news,
                    price: e.target.value,
                  })
                }
                required
                id="price"
                placeholder="Please enter the price of the food!"
              />
            </div>
            <div className="card_man_fiver p-4 flex flex-col">
              <label htmlFor="description" className="font-bold my-4">
                Description:
              </label>
              <input
                className="bg-gray-100 rounded p-4 outline-none"
                type="text"
                name="description"
                value={news.description}
                onChange={(e) =>
                  setNews({
                    ...news,
                    description: e.target.value,
                  })
                }
                required
                id="description"
                placeholder="Please enter the description of the food!"
              />
            </div>
            <div className="card_man_fiver p-4 flex flex-col">
              <label htmlFor="file" className="font-bold my-4">
                Upload Food Image
              </label>
              <div className=" ">
                <label
                  htmlFor="file"
                  className="font-bold my-4  flex items-center"
                >
                  <BiCloudUpload size={50} color="#44BBA4" /> or Drag the image
                  Here
                </label>
                <FileBase
                  style={{ display: "none" }}
                  id="file"
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) => setNews({ ...news, image: base64 })}
                />
              </div>
            </div>
            <button type="submit" className="primary_button">
              {currentId ? "Update Menu" : "Create Menu"}
            </button>
          </form>
        </div>
      </div>
      <div className="">
        <div className="max__width">
          <h1 className="font-bold text-xl text-cenetr text-[#44BBA4]  py-4 ">
            Our Menu ({foodMenu?.length}) Available foods in the restaurant
          </h1>
          <div className="bg-white rounded card_man_fiver">
            <form action="" className="flex items-center p-4 ">
              <input
                onChange={(e) => setQuery(e.target.value.toLowerCase())}
                type="text"
                placeholder="Search dish by name ..."
                className="flex-1 outline-none bg-white"
              />
              <BiSearch className="cursor-pointer  " />
            </form>
          </div>
          <div className=" grid sm:grid-cols-1 md:grid-cols-2 gap-4">
            {foodMenu
              .filter((x) => x.foodName.toLowerCase().includes(query))
              .map((x) => (
                <div
                  className="card_man_fiver p-4 flex items-center"
                  key={x._id}
                >
                  <Link to={`/food-detail/${x._id}`}>
                    <img
                      src={x.image}
                      alt=""
                      className="w-[80px] rounded mr-4"
                    />
                  </Link>
                  <Link to={`/food-detail/${x._id}`}>
                    <div className="">
                      <h1>{x.foodName}</h1>
                      <p className="text-[#44BBA4]">Price:{x.price}</p>
                    </div>
                  </Link>
                  <button
                    onClick={() => setCurrentId(x._id)}
                    className="p-4 bg-[#44BBA4] mx-2 rounded"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => dispatch(deleteNews(x._id))}
                    className="p-4 bg-red-800 mx-2 rounded text-white"
                  >
                    Delete
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateMenu;
