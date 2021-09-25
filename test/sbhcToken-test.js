const { getCreate2Address } = require("@ethersproject/address");
const {expect} = require("chai");
const {ethers} = require("hardhat");

describe("SBHC Token", () => {

    // it("Should return 300000 supply", async () => {
    //     const SBHCToken = await ethers.getContractFactory("SBHCToken");
    //     const sbhcToken = await SBHCToken.deploy();
    //     await sbhcToken.deployed();
    //     expect(await sbhcToken.getTotalSupply()).to.equal(300000);
    // })

    // it("Should return msg.sender's address", async () => {
    //     const SBHCToken = await ethers.getContractFactory("SBHCToken");
    //     const sbhcToken = await SBHCToken.deploy();
    //     await sbhcToken.deployed();
    //     expect (await sbhcToken.getOwner()).to.equal("0xcFB98c04252afC633644bAa14418F7332A490C67");
    // })
    // it("Should return token name", async () => {
    //     const SBHCToken = await ethers.getContractFactory("SBHCToken");
    //     const sbhcToken = await SBHCToken.deploy();
    //     await sbhcToken.deployed();
    //     expect (await sbhcToken.getToken()).to.equal("SBHC Token");
    // })

    it("Should pass 3 tests", async () => {
        const SBHCToken = await ethers.getContractFactory("SBHCToken");
        const sbhcToken = await SBHCToken.deploy();
        await sbhcToken.deployed();

        expect(await sbhcToken.getTotalSupply()).to.equal(3000000);
        expect (await sbhcToken.getOwner()).to.equal("0xcFB98c04252afC633644bAa14418F7332A490C67");
        expect (await sbhcToken.getToken()).to.equal("SBHC Token");
    })
})