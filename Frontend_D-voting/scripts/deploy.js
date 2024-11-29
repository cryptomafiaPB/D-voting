import hardhat from "hardhat"; // Import the default export

const { ethers } = hardhat; // Destructure the `ethers` object

async function main() {
  const VotingEVM = await ethers.getContractFactory("VotingEVM");
  const votingEVM = await VotingEVM.deploy();

  await votingEVM.waitForDeployment();

  console.log(`Deployed contract address: ${votingEVM.address}, ${votingEVM}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

//npx hardhat run scripts/deploy.js --network polygon_amoy
//npx hardhat run scripts/deploy.js --network localhost
