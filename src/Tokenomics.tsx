import React from "react";
import ReactECharts from "echarts-for-react";
const Tokenomics = () => {
  const getOption = () => {
    const option = {
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: ["50%", "50.8%"],

          data: [
            { value: 50, name: "" },
            { value: 30, name: "" },
            { value: 20, name: "" },
          ],
        },
      ],
    };
    return option;
  };
  return (
    <div id="tokenomics" className="flex md:flex-row flex-col-reverse justify-center py-[200px] gap-[100px]">
      <div className="bg-[url('./assets/chart-bg.png')] bg-no-repeat bg-contain h-[400px] w-[400px]  bg-center   ">
        <div className="hover:scale-[1.2] cursor-pointer">
          <ReactECharts
            option={getOption()}
            style={{ height: "400px", width: "100%" }}
          />
        </div>
      </div>
      <div className="text-white pt-[60px] gap-5  flex flex-col justify-center pl-[10%] font-bold">
        <p className="text-3xl">Token Allocation</p>
        <p>Total supply: 1,000,000,000,000</p>
        <p>Tax:0%</p>
        <p>Contract Address:</p>
        <p>50% Pre-Sale</p>
        <p>30% Liquidity</p>
        <p>20% Burn</p>
      </div>
    </div>
  );
};

export default Tokenomics;
