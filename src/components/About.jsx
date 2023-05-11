import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import aboutus from "../assets/aboutus.png";
import Footer from "./Footer";
import Navigation from "./Navigation";
import Notification from "./Notification";
const About = () => {
  return (
    <div className="">
      <Navigation />

      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center justify-center md:justify-start">
              <img
                src={aboutus}
                alt="About Us"
                className="w-full rounded-lg shadow-md"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Welcome to Our Restaurant!
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                vitae libero ac est commodo euismod in nec risus. In hac
                habitasse platea dictumst. Phasellus vel felis non urna sodales
                cursus in vitae eros. Sed sit amet justo dolor. Mauris faucibus
                magna vel sem tincidunt consectetur.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Come and experience the delicious taste of our food. We serve
                the best dishes using only the freshest and highest quality
                ingredients.
              </p>
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="text-gray-400 mr-2" />
                <p className="text-gray-600">Gudele 2, Juba South Sudan</p>
              </div>
              <div className="flex items-center mb-4">
                <FaPhoneAlt className="text-gray-400 mr-2" />
                <p className="text-gray-600">555-555-5555</p>
              </div>
              <div className="flex items-center mb-4">
                <FaEnvelope className="text-gray-400 mr-2" />
                <p className="text-gray-600">info@ourrestaurant.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Notification />
      <Footer />
    </div>
  );
};

export default About;
