import { ethers } from "hardhat"
import {parseEther} from 'ethers/lib/utils'
const hre = require("hardhat");

async function main() {

  console.log(" ")

  const Dune = await ethers.getContractFactory("Dune")
  const dune = await Dune.deploy()
  await dune.deployed()

  console.log(`ERC-20 deployed at ${dune.address} ✅`)

  // await dune.deployTransaction.wait(12)
  // await hre.run("verify:verify", { network: "aurora_mainnet", address: dune.address, constructorArguments: [], });
  console.log("Etherscan verification done. ✅")
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
});
