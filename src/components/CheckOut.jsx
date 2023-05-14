import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createContact } from "../actions/contacts";

export const CheckoutForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const orders = localStorage.getItem("orders");
  const orderStorage = JSON.parse(orders);

  const initialState = {
    price: orderStorage.price,
    order: orderStorage.foodName,
    name: "",
    address: "",
    phone: "",
    email: "",
    image: orderStorage.image,
  };
  const [formData, setItemData] = useState(initialState);

  const { price, order, name, address, phone, email, image } = formData;
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setItemData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createContact(formData));
    localStorage.setItem("customerDetails", JSON.stringify(formData));
    setIsSubmitting(true);
    setTimeout(() => {
      navigate("/payment");
      setIsSubmitting(false);
    }, 3000);
    console.log(formData);
  };
  return (
    <div className="w-11/12 m-auto">
      <h1 className="text_navigation text-[#44BBA4] py-8 text-2xl">
        Deliver Information
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={onChangeHandler}
            placeholder="Enter your name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            name="email"
            onChange={onChangeHandler}
            placeholder="Enter your email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="text"
            required
            value={phone}
            onChange={onChangeHandler}
            placeholder="Enter your phone"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
            Price
          </label>
          <input
            type="number"
            id="price"
            value={price}
            name="price"
            placeholder={`You will pay a total of $ ${price}`}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="order" className="block text-gray-700 font-bold mb-2">
            Dish Ordered
          </label>
          <input
            id="order"
            type="text"
            name="order"
            value={order}
            required
            placeholder={`you have order ${order}`}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-gray-700 font-bold mb-2"
          >
            Image Url
          </label>
          <input
            type="text"
            id="address"
            name="image"
            value={image}
            placeholder={`${image}`}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-gray-700 font-bold mb-2"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={address}
            onChange={onChangeHandler}
            placeholder="Enter your address"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <button
          type="submit"
          className="mb-4 primary_button hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {isSubmitting ? "Submiting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};
