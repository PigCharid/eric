import { useEffect, useRef, useState } from "react";
import logo from "./assets/logo.png";
import video from "./assets/background/bg.mp4";
import { navlist } from "./assets/constant";
import Navbar from "./Navbar";
import Home from "./About";
import About from "./About";
import Tokenomics from "./Tokenomics";
import Roadmap from "./Roadmap";
import Team from "./Team";
const App = () => {
  const [isActive, setIsActive] = useState("");
  const scrollRef: any = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [refreshEric, setRefreshEric] = useState(false);
  const [currentScrollTop, setCurrentScrollTop] = useState(0);
  const handleScroll = (event: any) => {
    setCurrentScrollTop(event.currentTarget.scrollTop);
    if (event.currentTarget.scrollTop > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  return (
    // <div className="w-full h-[100vh]">
    //   <video className="w-full h-full object-cover z-[-100]" src={video} autoPlay loop muted></video>
    //   <div className="absolute w-full h-full top-0 flex justify-center items-center font-bold z-0">
    //   <div
    //     ref={scrollRef}
    //     onScroll={handleScroll}
    //     className="w-[100%] h-[100%] overflow-auto"
    //   >
    //     <Navbar
    //       scrolled={scrolled}
    //       isActive={isActive}
    //       setIsActive={setIsActive}
    //       refreshEric={refreshEric}
    //       setRefreshEric={setRefreshEric}
    //       scrollRef={scrollRef}
    //     />
    //     <About currentScrollTop={currentScrollTop} refreshEric={refreshEric} />
    //     <Tokenomics />
    //     <Roadmap />
    //     <Team />
    //   </div>
    // </div>
    // </div>

    <div className="moving-background fixed w-full h-full flex justify-center items-center font-bold z-0">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="w-[100%] h-[100%] overflow-auto"
      >
        <Navbar
          scrolled={scrolled}
          isActive={isActive}
          setIsActive={setIsActive}
          refreshEric={refreshEric}
          setRefreshEric={setRefreshEric}
          scrollRef={scrollRef}
        />
        <About currentScrollTop={currentScrollTop} refreshEric={refreshEric} />
        <Tokenomics />
        <Roadmap />
        <Team />
      </div>
    </div>
  );
};

export default App;
