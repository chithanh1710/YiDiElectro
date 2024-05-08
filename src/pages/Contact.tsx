import { useDispatch, useSelector } from "react-redux";
import { listImg } from "../assets/assets";
import { useState } from "react";
import { setIsSubmit, setName } from "../layouts/User/AppSlice";
import { storeProps } from "../store";

export default function Contact() {
  const dispatch = useDispatch();
  const [newName, setNewName] = useState("");
  const lang = useSelector((store: storeProps) => store.app.lang);
  const isEnglish = lang === "English";
  return (
    <div className="py-32 px-6 lg:px-12 min-h-screen bg-gray-800 text-white">
      <div className="h-full md:h-[400px] rounded-xl overflow-hidden flex md:flex-row flex-col">
        <div
          style={{ backgroundImage: `url(${listImg.img1})` }}
          className="w-full h-[40%] bg-gray-600 md:w-[40%] md:h-full px-8 py-10 bg-cover bg-no-repeat"
        >
          <h2 className="text-yellow-400 font-semibold tracking-wider mb-4 text-2xl">
            {isEnglish ? "Where to find us" : "Tìm chúng tôi ở đâu"}
          </h2>
          <p className="mb-2 text-yellow-400 text-3xl">
            <span className="text-white font-semibold text-4xl tracking-wider">
              Email:
            </span>{" "}
            yidi@gmail.com
          </p>
          <p className="text-yellow-400 text-3xl">
            <span className="text-white font-semibold text-4xl tracking-wider">
              {isEnglish ? "Phone:" : "SĐT:"}
            </span>{" "}
            09123456789
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(setIsSubmit());
            dispatch(setName(newName));
          }}
          className="w-full h-[60%] bg-gray-700 md:w-[60%] md:h-full px-8 pb-10"
        >
          <h1 className="text-2xl font-semibold text-center mb-4 mt-4 text-yellow-400">
            {isEnglish ? " Get In Touch" : "Liên hệ"}
          </h1>
          <div className="flex flex-col gap-4">
            <div className="divLabel">
              <label className="w-[120px] text-yellow-400" htmlFor="name">
                {isEnglish ? "Your Name" : "Tên của bạn"}
              </label>
              <input
                value={newName}
                className="divInput"
                id="name"
                type="text"
                placeholder="Chi Thanh"
                required
                onChange={(e) => {
                  setNewName(e.target.value);
                }}
              />
            </div>
            <div className="flex md:flex-row flex-col gap-4">
              <div className="divLabel md:w-full">
                <label className="w-[120px] text-yellow-400" htmlFor="email">
                  {isEnglish ? "Your Email" : "Email của bạn"}
                </label>
                <input
                  className="divInput"
                  id="email"
                  type="email"
                  placeholder="example@gmail.com"
                  required
                />
              </div>
              <div className="divLabel md:w-full">
                <label className="w-[120px] text-yellow-400" htmlFor="phone">
                  {isEnglish ? "Phone" : "SĐT"}
                </label>
                <input
                  className="divInput"
                  type="tel"
                  placeholder="xxx-xxxx-xxxx"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="w-[120px] text-yellow-400 mb-2" htmlFor="mess">
                {isEnglish ? "Message" : "Lời nhắn"}
              </label>
              <textarea
                className="border outline-none md:h-full h-[160px] rounded-lg px-4 py-1 text-black"
                placeholder="Message..."
              />
            </div>
            <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:bg-yellow-600 hover:-translate-y-1">
              {isEnglish ? "Send message" : "Gửi"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}