import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-contract-sizer";

import { environment } from "./environment";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.18",
    settings: {
      viaIR: false,
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  defaultNetwork: "RSK",
  networks: {
    RSK: {
      url: "https://public-node.testnet.rsk.co",
      accounts: [environment.walletPrivateAddress],
      chainId: 31,
    },
    BFT: {
      url: "https://testnet.bitfinity.network/",
      accounts: [environment.walletPrivateAddress],
      chainId: 355113,
    }
  }
};

export default config;
