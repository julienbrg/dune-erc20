import { ethers } from "hardhat"
import {parseEther} from 'ethers/lib/utils'
const hre = require("hardhat");
const fs = require('fs');
import * as store from '../store.json'

async function main() {

  console.log(" ")
  
  const contractAddress = store.duneContractAddress;

  const abiDir = __dirname + '/../artifacts/contracts';
  const duneAbiContract = abiDir + "/" + "Dune.sol" + "/" + "Dune" + ".json" 

  let duneAbi;
  try {
    duneAbi = JSON.parse(fs.readFileSync(duneAbiContract,{encoding:'utf8', flag:'r'}));
  } catch (error) {
    console.log("hello error", error)
    return;
  }

  const [deployer] = await ethers.getSigners()

  const dune = new ethers.Contract(contractAddress, duneAbi.abi, deployer)

  // here you can modify the recipient address
  const recipient = deployer.address

  // here you can modify the amount of DUNE to send
  const amount = ethers.utils.parseEther("1")

  const transfer = await dune.mint(recipient, amount)

  console.log(`${ethers.utils.formatEther(amount)} DUNE minted and transfered to ${recipient} ✅`)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
});
