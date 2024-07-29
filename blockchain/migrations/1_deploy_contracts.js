// blockchain/migrations/1_deploy_contracts.js

const CertificateRegistry = artifacts.require("CertificateRegistry");

module.exports = function (deployer) {
  deployer.deploy(CertificateRegistry);
};