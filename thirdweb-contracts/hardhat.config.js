require("@matterlabs/hardhat-zksync-solc");

module.exports = {
  defaultNetwork: 'ganache',
  networks: {
    ganache: {
      url: "http://127.0.0.1:7545", 
      chainId: 1337,
      accounts: ["0xc90ffc64cf598af260832047cf57bce30c6b48f1e7e8bf97119654890e12385c"],
    },
    zksync_testnet: {
      url: "https://zksync2-testnet.zksync.dev",
      ethNetwork: "goerli",
      chainId: 280,
      zksync: true,
    },
    zksync_mainnet: {
      url: "https://zksync2-mainnet.zksync.io/",
      ethNetwork: "mainnet",
      chainId: 324,
      zksync: true,
    },
  },
  paths: {
    artifacts: "./artifacts-zk",
    cache: "./cache-zk",
    sources: "./contracts",
    tests: "./test",
  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};