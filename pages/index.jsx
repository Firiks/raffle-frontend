/**
 * Main page
 */

import Header from "@/components/Header";
import LotteryEntrance from "@/components/LotteryEntrance";
import styles from "@/styles/Home.module.css";
import { useMoralis } from "react-moralis";

const supportedChains = ["31337", "11155111"];

export default function Home() {
  const { isWeb3Enabled, chainId } = useMoralis();

  return (
    <div className={styles.container}>
      <Header />
      {isWeb3Enabled ? (
        <div>
          {supportedChains.includes(parseInt(chainId).toString()) ? (
            <div className="flex flex-row">
              <LotteryEntrance className="p-8" />
            </div>
          ) : (
            <div>{`Please switch to a supported chainId. The supported Chain Ids are: ${supportedChains}`}</div>
          )}
        </div>
      ) : (
        <div>Please connect to a Wallet</div>
      )}
    </div>
  )
}
