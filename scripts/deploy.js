const hre = require("hardhat");

async function main() {
  const SoulboundToken = await hre.ethers.getContractFactory("SoulboundToken");
  const sbt = await SoulboundToken.deploy("ProjectSARA_SBT", "SARA-SBT");

  await sbt.deployed();

  console.log("SoulboundToken deployed to:", sbt.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
