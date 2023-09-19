import React from "react";
import logo from "./assets/logo.png";
import twitter from "./assets/social-media-icons/twitter.png";
import telegram from "./assets/social-media-icons/telegram.png";
const Team = () => {
  return (
    <div id="team" className="flex flex-col items-center pb-[100px]">
      <p>Get to know me</p>
      <img className="w-[200px]" src={logo} alt="logo" />
      <div className="flex gap-[20px]">
        <a
          href="https://twitter.com/intent/follow?screen_name=EricTokenETH&ref_src=twsrc%5Etfw%7Ctwcamp%5Eembeddedtimeline%7Ctwterm%5Escreen-name%3AEricTokenETH%7Ctwcon%5Es2"
          target="_blank"
          className="cursor-pointer"
        >
          <img
            className="w-[80px] hover:scale-120 hover:border-2"
            src={twitter}
            alt={twitter}
          />
        </a>
        <a
          href="https://t.me/EricTokenETH"
          target="_blank"
          className="cursor-pointer"
        >
          <img className="w-[80px] hover:scale-120 hover:border-2" src={telegram} alt={telegram} />
        </a>
      </div>

      <div className=" bg-[rgba(0,0,0,0.7)] md:w-[800px] w-[90%] p-4 rounded-xl ">
        <p>
          Inspired by the irreverent and iconic character from South Park, $Eric
          is a meme token that embraces the spirit of humor, satire, and pop
          culture references. With its charismatic charm and cheeky personality,
          $Eric aims to revolutionize the crypto space by injecting a healthy
          dose of laughter and entertainment into every transaction.
        </p>
      </div>
    </div>
  );
};

export default Team;
