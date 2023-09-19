import { useEffect, useRef } from "react";
import Matter from "matter-js";
interface AboutProps {
  currentScrollTop: any;
  refreshEric: boolean;
}

const About = ({ currentScrollTop, refreshEric }: AboutProps) => {
  const boxRef = useRef(null);
  const canvasRef = useRef(null);
  const ww = window.innerWidth;
  const wh = window.innerHeight;

  useEffect(() => {
    // create engine
    let Engine = Matter.Engine,
      Render = Matter.Render,
      MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse,
      Composite = Matter.Composite,
      Bodies = Matter.Bodies;
    let engine = Engine.create();
    let world = engine.world;

    // create renderer
    var render = Render.create({
      element: boxRef.current,
      engine: engine,
      canvas: canvasRef.current,
      options: {
        width: ww,
        height: wh + currentScrollTop,
        background: "transparent",
        wireframes: false,
      },
    });
    // for (let i = 0; i < 20000; i++) {
    //   setInterval(() => {
    //     const circle = Matter.Bodies.circle(ww - 80, 80, 80, {
    //       render: {
    //         sprite: {
    //           // 使用精灵
    //           texture: "./eric.png", // 图片纹理位置
    //         },
    //       },
    //     });
    //     Composite.add(world, circle);
    //   }, 1000);
    // }

    setInterval(() => {
      const circle = Matter.Bodies.circle(ww - 80, 80, 80, {
        render: {
          sprite: {
            // 使用精灵
            texture: "./eric.png", // 图片纹理位置
          },
        },
      });
      Composite.add(world, circle);
    }, 1000);
    Composite.add(world, [
      // walls
      // Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
      Bodies.rectangle(ww / 2, wh, ww, 10, {
        isStatic: true,
        render: {
          fillStyle: "#26263D",
        },
      }),
      Bodies.rectangle(ww, wh / 2, 1, 6400, {
        isStatic: true,
        render: {
          fillStyle: "#26263D",
        },
      }),
      // 左偏移  中心向下    宽度     长度
      // Bodies.rectangle(0, wh/2, 2, 6400, {
      //   isStatic: true,
      //   render: {
      //     fillStyle: "#26263D",
      //   },
      // }),
    ]);

    let mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.1,
          render: {
            visible: false,
          },
        },
      });
    Composite.add(world, mouseConstraint);
    Matter.Runner.run(engine);
    Render.run(render);
  }, [refreshEric]);

  return (
    <div id="about" className="h-full relative ">
      <div className=" absolute flex justify-center items-center z-[-1]  ">
        <div className="bg-transparent" ref={boxRef}>
          <canvas className="bg-transparent" ref={canvasRef} />
        </div>
      </div>
      <div className="flex  pl-[10vw]  ">
        <div className="pt-[240px] font-bold">
          <p className="md:text-[4vw] text-[30px]">Pixel Eric</p>
          <p className="md:text-[1.5vw] text-[20px] text-[#434fcf]">
            The Memetastic Token of the Crypto World!
          </p>
          <div className="pt-[20px]">
            <p>99999999+</p>
          </div>
          <div className="pl-[200px] mt-[-10px]">
            <p>112200+</p>
          </div>
          
          <p className="md:text-[1vw] text-[10px]  md:w-[800px] w-[90%] mt-[20px]">
            Inspired by the irreverent and iconic character from South Park,
            $Eric is a meme token that embraces the spirit of humor, satire, and
            pop culture references. With its charismatic charm and cheeky
            personality, $Eric aims to revolutionize the crypto space by
            injecting a healthy dose of laughter and entertainment into every
            transaction.
          </p>
          <a href="https://eric-40.gitbook.io/usderic-whitepaper" target="_blank" className="block mt-[20px] hover:border-2 w-[200px] text-center p-2">
            White Paper
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
