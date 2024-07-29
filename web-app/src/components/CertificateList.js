// src/components/CertificateList.js
import React, { useEffect, useState } from 'react';
import api from '../services/api';

const CertificateList = () => {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const data = await api.getCertificates();
        setCertificates(data);
      } catch (error) {
        console.error('Error fetching certificates:', error);
      }
    };

    fetchCertificates();
  }, []);

  return (
    <div>
      <h2>Certificate List</h2>
      <ul>
        {certificates.map((certificate) => (
          <li key={certificate.id}>
            {certificate.studentName} - {certificate.courseName} (ID: {certificate.certificateID})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CertificateList;
