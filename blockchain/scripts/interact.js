// blockchain/scripts/interact.js

const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    const contractAddress = "0xYourContractAddress"; // Replace with your deployed contract address

    const CertificateRegistry = await hre.ethers.getContractFactory("CertificateRegistry");
    const certificateRegistry = CertificateRegistry.attach(contractAddress);

    // Issue a certificate
    const tx = await certificateRegistry.issueCertificate(
        "12345",
        "John Doe",
        "Blockchain 101",
        "Kenyan University",
        Math.floor(Date.now() / 1000)
    );
    await tx.wait();
    console.log("Certificate issued");

    // Verify a certificate
    const cert = await certificateRegistry.verifyCertificate("12345");
    console.log("Certificate:", cert);

    // Revoke a certificate
    const revokeTx = await certificateRegistry.revokeCertificate("12345");
    await revokeTx.wait();
    console.log("Certificate revoked");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
