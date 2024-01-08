module.exports = {
  mumbai: {
    url: process.env.MUMBAI_URL, // INPUT_REQUIRED: Provide the Mumbai testnet node URL.
    accounts: [process.env.DEPLOYER_PRIVATE_KEY] // INPUT_REQUIRED: Provide the deployer's private key.
  }
};
