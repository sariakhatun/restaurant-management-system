import React, { useContext, useState } from "react";
import { ThemeContext } from "../Components/ThemeContext";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import animationData from '../../public/Contact Us.json'

const ContactUs = () => {
  const { theme } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Here you can add API call to send message

    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: `Thank you, ${formData.name}. We'll get back to you soon.`,
      timer: 2500,
      showConfirmButton: false,
    });
    setFormData({ name: "", email: "", message: "" });
  };

  // Theme-based classes
  
  const inputBgClass = theme === "dark" ? "bg-gray-700 text-white" : "bg-white text-gray-900";
  const labelTextClass = theme === "dark" ? "text-gray-300" : "text-gray-700";
  const textareaBgClass = theme === "dark" ? "bg-gray-700 text-white" : "bg-white text-gray-900";
  const btnClass =
    theme === "dark"
      ? "btn btn-outline border-orange-400 text-orange-400 hover:bg-orange-600 hover:text-white"
      : "btn btn-outline border-[#e43c1c] text-[#e43c1c] hover:bg-[#e43c1c] hover:text-white";
   const textPrimary = theme === "dark" ? "text-orange-400" : "text-[#f74526]";


  return (
    <div className={`mx-auto pb-8 rounded-xl shadow-lg mb-12  px-6 `}>
      <h2 className={`text-4xl font-bold text-center mb-10 great-vibes ${textPrimary}`}>Contact Us</h2>
     <div className="flex flex-col lg:flex-row items-center justify-around">
      <div className="" style={{width: 300, height: 400 }}>
          <Lottie animationData={animationData} loop={true} />
        </div>
      <form onSubmit={handleSubmit} className="grid gap-3 grid-cols-1 lg:w-1/2">
        <div>
          <label className={`block mb-1 font-medium ${labelTextClass}`}>Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className={`input input-bordered w-full ${inputBgClass}`}
          />
        </div>

        <div>
          <label className={`block mb-1 font-medium ${labelTextClass}`}>Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={`input input-bordered w-full ${inputBgClass}`}
          />
        </div>

        <div>
          <label className={`block mb-1 font-medium ${labelTextClass}`}>Message</label>
          <textarea
            name="message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
            className={`textarea textarea-bordered w-full ${textareaBgClass}`}
            placeholder="Your message here..."
          />
        </div>

        <div className="text-center">
          <button type="submit" className={`${btnClass} px-10 mt-6 w-full`}>
            Send Message
          </button>
        </div>
      </form>
     </div>
    </div>
  );
};

export default ContactUs;
