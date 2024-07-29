// blockchain/contracts/CertificateRegistry.sol

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CertificateRegistry {
    struct Certificate {
        string studentName;
        string course;
        string institution;
        uint256 issueDate;
        bool isValid;
    }

    mapping(string => Certificate) private certificates;

    event CertificateIssued(string certificateId, string studentName, string course, string institution, uint256 issueDate);
    event CertificateRevoked(string certificateId);

    function issueCertificate(
        string memory certificateId,
        string memory studentName,
        string memory course,
        string memory institution,
        uint256 issueDate
    ) public {
        require(certificates[certificateId].issueDate == 0, "Certificate already exists");
        certificates[certificateId] = Certificate(studentName, course, institution, issueDate, true);
        emit CertificateIssued(certificateId, studentName, course, institution, issueDate);
    }

    function revokeCertificate(string memory certificateId) public {
        require(certificates[certificateId].issueDate != 0, "Certificate does not exist");
        certificates[certificateId].isValid = false;
        emit CertificateRevoked(certificateId);
    }

    function verifyCertificate(string memory certificateId) public view returns (
        string memory studentName,
        string memory course,
        string memory institution,
        uint256 issueDate,
        bool isValid
    ) {
        Certificate memory cert = certificates[certificateId];
        return (cert.studentName, cert.course, cert.institution, cert.issueDate, cert.isValid);
    }
}
