require("@nomicfoundation/hardhat-toolbox");

;
/** @type import('hardhat/config').HardhatUserConfig */



module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url: "YOUR_ALCHEMY_API_URL",
      accounts: ["Your wallet private key"],
    },
  },
};