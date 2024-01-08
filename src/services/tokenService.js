// INPUT_REQUIRED: The following implementation assumes you have a signer and provider already set up correctly.
const { ethers } = require('ethers');
const blockchainConfig = require('../config/blockchainConfig');

async function mintToken(data) {
  // The contractABI.json should be the artifact of your compiled contract
  const contractABI = require('../contracts/SoulboundToken.json').abi;
  // The contractAddress should hold the address of the deployed contract on Mumbai testnet
  const contractAddress = process.env.SBT_CONTRACT_ADDRESS; // INPUT_REQUIRED: The contract address from deployment will be loaded from environment variables.
  const provider = new ethers.providers.JsonRpcProvider(blockchainConfig.mumbai.url);
  const wallet = new ethers.Wallet(blockchainConfig.mumbai.accounts[0], provider);
  const sbtContract = new ethers.Contract(contractAddress, contractABI, wallet);

  const tokenURI = `data:application/json;base64,${Buffer.from(JSON.stringify(data)).toString('base64')}`;
  const transaction = await sbtContract.mint(wallet.address, tokenURI);
  const receipt = await transaction.wait();
  return receipt.events[0].args.tokenId;
}

module.exports = {
  mintToken
};
