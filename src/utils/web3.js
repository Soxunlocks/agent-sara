const { ethers } = require('ethers');
const blockchainConfig = require('../config/blockchainConfig');

let provider;
let signer;

function getProvider() {
  if (!provider) {
    provider = new ethers.providers.JsonRpcProvider(blockchainConfig.mumbai.url);
  }
  return provider;
}

function getSigner() {
  if (!signer) {
    const provider = getProvider();
    signer = new ethers.Wallet(blockchainConfig.mumbai.accounts[0], provider);
  }
  return signer;
}

module.exports = {
  getProvider,
  getSigner
};
