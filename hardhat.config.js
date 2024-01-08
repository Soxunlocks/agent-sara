require('dotenv').config();

require("@nomiclabs/hardhat-waffle");

const PRIVATE_KEY = process.env.PRIVATE_KEY; // INPUT_REQUIRED: Replace with your actual private key
const MUMBAI_URL = process.env.MUMBAI_URL; // INPUT_REQUIRED: Replace with your actual Mumbai testnet node URL

module.exports = {
  solidity: "0.8.4",
  networks: {
    mumbai: {
      url: MUMBAI_URL,
      accounts: [PRIVATE_KEY]
    }
  }
};
