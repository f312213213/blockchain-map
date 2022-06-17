import React from "react";

import GoogleMapBase from "../components/GoogleMapBase";
import { WalletContext } from "../context/useWallet";
import Meta from "../components/Meta";

export default function Home() {
  const { wallet } = React.useContext(WalletContext);
  return (
    <>
      <Meta title={"首頁 | 救難の鏈"} description={"救難の鏈"} />
      <div
        className={
          "flex h-screen w-full flex-col items-center justify-center md:flex-row"
        }
      >
        <GoogleMapBase
          className={"md:1/2 h-3/5 w-11/12 overflow-hidden rounded-xl md:w-3/5"}
        />
        {wallet.address && (
          <>
            <p>Hi, </p>
            <pre className={"text-sm"}>
              {wallet.address.substr(0, 5)}...{wallet.address.substr(38)}
            </pre>
          </>
        )}
      </div>
    </>
  );
}
