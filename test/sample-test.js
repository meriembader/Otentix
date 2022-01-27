const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Otentix", function () {
  it("otentix", async function () {
    const Otentix1 = await ethers.getContractFactory("Otentix");
    const Otentix1 = await Otentix.deploy("Otentix deployed right now");
    await Otentix.deployed();

    expect(await Otentix.greet()).to.equal("Otentix deployed right now");

    const setGreetingTx = await Otentix.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await Otentix.greet()).to.equal("Hola, mundo!");
  });
});
