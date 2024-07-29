// blockchain/scripts/deploy.js

const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const CertificateRegistry = await hre.ethers.getContractFactory("CertificateRegistry");
    const certificateRegistry = await CertificateRegistry.deploy();

    console.log("CertificateRegistry deployed to:", certificateRegistry.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
