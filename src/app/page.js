"use client";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import OrderMenu from "./components/OrderMenu";
import Navbar from "./components/Navbar";
import orders from "@/app/assets/data/orders.json";
import { FaTrain, FaSearch, FaHome, FaInfoCircle,  FaUser, FaMapMarkerAlt,   FaUtensils } from "react-icons/fa";
import { IoIosArrowDroprightCircle } from "react-icons/io";

export default function Home() {
  const [searchType, setSearchType] = useState("PNR");
  const [showMoreText, setShowMoreText] = useState(false);

  const handleButtonClick = (type) => {
    setSearchType(type);
  };

  const handleExploreClick = () => {
    setShowMoreText(!showMoreText);
  };

  const cards = [
    { step:"1", text: "Enter journey details" },
    { step:"2", text: "Select restaurant" },
    { step:"3", text: "Choose your food" },
    { step:"4", text: "Place your order" },
    { step:"5", text: " Enjoy your food !" },
  ];

  return (
    <div className="flex font-poppins">
      <Navbar />
      <div className="flex flex-col items-center  m-0 p-0 w-full bg-black min-h-screen">
        <Header />
        <div className="w-full flex flex-col items-center">
          <h1 className="text-white text-5xl mt-16 font-bold text-center">
            Order Food on Train Online
          </h1>
          <div className="p-1  flex flex-col items-center w-full py-16 rounded-lg  max-w-screen-xl shadow-lg mt-8 transition-colors bg-gradient-to-t from-gold to-gold">
            <div className="flex flex-wrap justify-around w-full mb-8 p-1 py-1.5">
              <button
                className={`flex items-center px-2 sm:px-8 py-4 text-xs sm:text-xl rounded-full transition-colors ${
                  searchType === "PNR"
                    ? "bg-white text-black"
                    : "bg-black text-gold"
                } hover:bg-white hover:text-black border-2 hover:border-black`}
                onClick={() => handleButtonClick("PNR")}
              >
                <FaSearch className="h-8 w-8 mr-2" />
                Search By PNR
              </button>
              <button
                className={`flex items-center px-2 sm:px-8 py-4 text-xs sm:text-xl rounded-full transition-colors ${
                  searchType === "Train"
                    ? "bg-white text-black"
                    : "bg-black text-gold"
                } hover:bg-white hover:border-black border-2 hover:text-black`}
                onClick={() => handleButtonClick("Train")}
              >
                <FaTrain className="h-8 w-8 mr-2" />
                Search By Train
              </button>
              <button
                className={`flex items-center px-2 sm:px-8 py-4 text-xs sm:text-xl rounded-full transition-colors ${
                  searchType === "WhatsApp"
                    ? "bg-white text-black"
                    : "bg-black text-gold"
                } hover:bg-white hover:border-black border-2 hover:text-black`}
                onClick={() => handleButtonClick("WhatsApp")}
              >
                <img
                  src="images/whatsapp.png"
                  alt="WhatsApp"
                  className="h-8 w-8 mr-2"
                />
                WhatsApp
              </button>
            </div>
            {searchType !== "WhatsApp" ? (
              <div className="flex items-center bg-white rounded-full justify-between mt-4 w-full max-w-lg p-2">
                
                  <input
                    type="text"
                    placeholder={
                      searchType === "PNR"
                        ? "Enter PNR number to Order"
                        : "Enter Train number to Order"
                    }
                    className=" ml-4 bg-transparent outline-none border-0  rounded-full w-full"
                  />
                  <button
                    type="submit"
                    className=" px-5 p-3 bg-black text-gold rounded-full hover:bg-gold hover:text-black"
                  >
                    Submit
                  </button>
                </div>
             
            ) : (
              <button className="px-6 py-4 bg-white text-black border border-gray-300 rounded-full flex items-center text-xl hover:bg-gray-100 mt-4">
                <img
                  src="images/whatsapp.png"
                  alt="WhatsApp"
                  className="h-8 w-8 mr-2"
                />
                980713867
              </button>
            )}
          </div>
        </div>

        <h3 className="text-white mt-16 text-4xl font-bold text-center">
          Follow these steps to order food on Train
        </h3>

        <div className="w-full max-w-screen-xl px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-8 bg-gray-700 text-center rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl font-bold text-gray mb-4">{card.step}</div>
              <p className="text-2xl font-semibold text-gold">{card.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-gold px-16 py-4  shadow-lg rounded-lg mt-16 w-full max-w-screen-xl flex flex-col items-center">
          <div className="flex items-center mb-4 w-full">
            <img
              src="images/groupIcon.png"
              alt="group icon"
              className="w-20 h-20"
            />
            <div className="ml-4 p-8 flex-1">
              <p className=" text-black leading-normal">
                <strong className="text-2xl md:text-4xl">
                Travelling in a group of 10 or more? 
                </strong>
                <br />
                <span className="text-xl font-semibold md:text-3xl">
                Group food ordering in train
                </span>
              </p>
            </div>
            <button
              className="text-white text-lg md:text-xl ml-auto"
              onClick={() => (window.location.href = "/")}
            >
              <IoIosArrowDroprightCircle className="text-5xl hover:text-black "/>
            </button>
          </div>
        </div>

        <h1 className="text-4xl  my-16 text-white  font-bold">Latest Orders</h1>
        <div className="scroll-container text-balance h-8 py-8  overflow-hidden">
          <div className=" whitespace-normal scroll-content text-white ">
            {orders.map((item, index) => (
              <div
                key={index}
                className="scroll-item mb-2 break-words whitespace-normal"
              >
                <strong>{item.name}</strong> ordered food in{" "}
                <strong>{item.train}</strong> at <strong>{item.station}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center mt-8">
          <button
            className="p-5 my-6 text-white bg-black rounded-full font-semibold hover:bg-gold hover:text-black"
            onClick={handleExploreClick}
          >
            Explore More &gt;
          </button>
          {showMoreText && (
            <div className="bg-gray-100 p-4 mt-4 rounded-lg text-center w-full max-w-screen-xl">
              <OrderMenu />
            </div>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
}
