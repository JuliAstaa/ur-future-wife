import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";

const socmeds = [
  {
    name: "Instagram",
    logo: <FaInstagram />,
  },
  {
    name: "Facebook",
    logo: <FaFacebookF />,
  },
  {
    name: "X",
    logo: <FaXTwitter />,
  },
  {
    name: "Tiktok",
    logo: <FaTiktok />,
  },
  {
    name: "Youtube",
    logo: <FaYoutube />,
  },
];

const Footer = () => {
  return (
    <div className="w-full h-full mt-8 bg-slate-100">
      <div className="max-w-5xl mx-auto">
        <div className="w-full h-full grid grid-cols-3 py-8 px-2 lg:px-0">
          <div className="col-span-3 lg:col-span-2 grid grid-cols-2">
            <div className="socmed col-span-2 lg:col-span-1">
              <h3 className="text-2xl font-semibold font-robotoCondensed">
                Follow Us
              </h3>
              <div className="mt-4">
                <ul className="flex flex-col gap-2">
                  {socmeds.map((socmed, index) => {
                    return (
                      <li key={index} className="group">
                        <a
                          className="font-poppins text-base flex items-center gap-2 relative"
                          href="#"
                        >
                          <div className="logo text-3xl transition-all ease-in-out duration-500 group-hover:text-[#FF9800]">
                            {socmed.logo}
                          </div>
                          <span className="scale-0 origin-left transition-all ease-in-out duration-500 group-hover:scale-100 text-slate-700 group-hover:text-[#FF9800]">
                            {socmed.name}
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="mt-8 lg:mt-0 col-span-2 lg:col-span-1">
              <div className="about">
                <div className="heading">
                  <h3 className="text-2xl font-semibold font-robotoCondensed">
                    About Us
                  </h3>
                </div>
                <div className="decs mt-4">
                  <p className="text-slate-700 font-poppins">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat consectetur obcaecati in quam architecto voluptate
                    tempore excepturi earum, quis quos.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="logo-brand col-span-3 lg:col-span-1 w-full h-24 lg:h-full">
            <div className="w-full h-full grid place-content-center">
              <h1 className="font-bold font-lobster text-4xl">
                Ur future wife.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-black/60 my-8"></div>
      <div className="copyright">
        <p className="text-center">
          Copyright © <span className="font-lobster">Ur future wife.</span>. All
          right reserved | created with ❤️ by{" "}
          <a href="https://github.com/JuliAstaa">Juliasta</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
