import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";
import {parseEther} from 'ethers/lib/utils';

describe("Dune", function () {

  async function deployContractsFixture() {
    const [alice, bob] = await ethers.getSigners();
    const Dune = await ethers.getContractFactory("Dune");
    const dune = await Dune.deploy();
    await dune.deployed();
    return { dune, alice, bob };
  }

  describe("Interactions", function () {
    it("Should transfer 1 EUR from Alice to Bob", async function () {
      const { dune, alice, bob } = await loadFixture(deployContractsFixture);
      await dune.connect(alice as any).mint(alice.address, parseEther('10000'));
      await dune.connect(alice as any).transfer(bob.address, parseEther('1'));
      expect(await dune.balanceOf(bob.address)).to.equal(parseEther('1'));
    });
  });
});