import { FC } from "react";
import dynamic from "next/dynamic";

// Internal Import
import { useNetworkConfiguration } from "../contexts/NetworkConfigurationProvider";
import NetworkSwitcherSVG from "./SVG/NetworkSwitcherSVG";

const NetworkSwitcher: FC = () => {
  const { networkConfiguration, setNetworkConfiguration } =
    useNetworkConfiguration();
  return (
    <>
      <input type="checkbox" id="checkbox" />
      <label className="switch">
        <select
          value={networkConfiguration}
          onChange={(e) => setNetworkConfiguration(e.target.value || "devnet")}
          className="select max-w-xs border-none bg-transparent outline-0"
        >
          {/* todo : network switch btn me option bg white h jis waj se ye dikhn
          nhi rha */}
          <option value="mainnet-beta" className="  ">
            main
          </option>
          <option value="devnet">dev</option>
          <option value="testnet">test</option>
        </select>
      </label>
    </>
  );
};

export default dynamic(() => Promise.resolve(NetworkSwitcher), {
  ssr: false,
});
