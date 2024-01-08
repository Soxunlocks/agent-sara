const { ethers } = require('ethers');
const config = require('../config');

const createWallet = () => {
  const wallet = ethers.Wallet.createRandom();
  return wallet;
};

module.exports = {
  createWallet
};