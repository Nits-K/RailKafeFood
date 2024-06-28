"use client";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import OrderMenu from "./components/OrderMenu";
import Navbar from "./components/Navbar";
import orders from "@/app/assets/data/orders.json";
import { FaTrain, FaSearch } from "react-icons/fa";


export default function Home() {
  const [searchType, setSearchType] = useState("PNR");
  const [showMoreText, setShowMoreText] = useState(false);

  const handleButtonClick = (type) => {
    setSearchType(type);
  };

  const handleExploreClick = () => {
    setShowMoreText(!showMoreText);
  };
 console.log(orders);
  return (
    <div className="flex">
      <Navbar />
      <div className="flex flex-col items-center bg-red-50 m-0 p-0 w-full min-h-screen font-poppins sm:ml-16">
        <Header />
        <img
          className="w-full h-auto object-fill"
          src="images/banner2.jpg"
          alt="banner"
        />
        <div className=" w-full flex flex-col items-center">
          {/* <video
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover "
            src="images/videos/background.mp4"
          >
            
            Your browser does not support the video tag.
          </video> */}
            <div className="">          
            <h1 className="text-gray-700 text-5xl mt-16 font-bold text-center ">
              Order Food on Train Online
            </h1>
            <div className="bg-slate-100 p-1 flex flex-col items-center w-full py-6 rounded-lg max-w-2xl mx-auto shadow-lg mt-8 hover:bg-white transition-colors">
              <div className="flex bg-red-500 rounded-full justify-around w-full mb-8 p-1 py-1.5">
                <button
                  className={`flex items-center px-2 sm:px-4 py-2 text-xs sm:text-base rounded-full transition-colors ${
                    searchType === "PNR"
                      ? "bg-white text-red-500"
                      : "bg-red-500 text-white"
                  } hover:bg-white hover:text-red-500`}
                  onClick={() => handleButtonClick("PNR")}
                >
                  <FaSearch className="h-5 w-5 mr-2" />
                  Search By PNR
                </button>
                <button
                  className={`flex items-center px-2 sm:px-4 py-2 text-xs sm:text-base rounded-full transition-colors ${
                    searchType === "Train"
                      ? "bg-white text-red-500"
                      : "bg-red-500 text-white"
                  } hover:bg-white hover:text-red-500`}
                  onClick={() => handleButtonClick("Train")}
                >
                  <FaTrain className="h-5 w-5 mr-2" />
                  Search By Train
                </button>
                <button
                  className={`flex items-center px-2 sm:px-4 py-2 text-xs sm:text-base rounded-full transition-colors ${
                    searchType === "WhatsApp"
                      ? "bg-white text-red-500"
                      : "bg-red-500 text-white"
                  } hover:bg-white hover:text-red-500`}
                  onClick={() => handleButtonClick("WhatsApp")}
                >
                  <img
                    src="images/whatsapp.png"
                    alt="WhatsApp"
                    className="h-5 w-5 mr-1"
                  />
                  WhatsApp
                </button>
              </div>
              {searchType !== "WhatsApp" ? (
                <div className="flex items-center mt-4 w-full px-4">
                  <div className="relative w-full">
                    <input
                      type="text"
                      placeholder={
                        searchType === "PNR"
                          ? "Enter PNR number to Order"
                          : "Enter Train number to Order"
                      }
                      className="p-4 border border-gray-300 rounded-full w-full"
                    />
                    <button
                      type="submit"
                      className="absolute right-1 top-1/2 transform -translate-y-1/2 px-5 p-3 mr-1 bg-gray-800 text-white rounded-full hover:bg-red-700"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              ) : (
                <button className="px-4 py-2 bg-white text-red-500 border border-gray-300 rounded-full flex items-center hover:bg-gray-100 mt-4">
                  <img
                    src="images/whatsapp.png"
                    alt="WhatsApp"
                    className="h-6 w-6 mr-2"
                  />
                  980713867
                </button>
              )}
              </div>
            </div>
          </div>
        

        <h3 className="text-gray-700 mt-16 text-3xl font-bold text-center">
          Follow these steps to order food on Train
        </h3>
        <img
          src="images/home_page.webp"
          alt="homepage"
          className="w-full max-w-screen-lg h-auto object-cover mt-4 rounded-lg md:rounded-xl"
        />

        <div className="bg-white p-4 md:p-8 shadow-lg rounded-lg mt-16 w-full max-w-screen-sm flex flex-col items-center">
          <div className="flex items-center mb-4 w-full">
            <img
              src="images/groupIcon.png"
              alt="group icon"
              className="w-16"
            />
            <div className="ml-4 flex-1">
              <p className="text-base md:text-lg text-gray-800">
                <strong className="text-lg md:text-xl">
                  Group food ordering in train
                </strong>
                <br />
                <span className="text-base md:text-lg">
                  Travelling in a group of 10 or more
                </span>
              </p>
            </div>
            <button
              className="text-gray-800 text-lg md:text-xl ml-auto"
              onClick={() => (window.location.href = "/")}
            >
              &gt;
            </button>
          </div>
        </div>

        <h1 className="text-3xl mt-16 text-gray-700 font-bold">LATEST ORDER</h1>
        <div className="scroll-container text-balance h-8 mt-8 py-8 w-full max-w-lg overflow-hidden">
          <div className="text-wrap break-words whitespace-normal scroll-content text-black my-8">
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
            className="p-5 my-6 text-white bg-red-500 rounded-full font-semibold hover:bg-red-700"
            onClick={handleExploreClick}
          >
            Explore More &gt;
          </button>
          {showMoreText && (
            <div className="bg-gray-100 p-4 mt-4 rounded-lg text-center w-full max-w-screen-sm">
              <OrderMenu />
            </div>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
}