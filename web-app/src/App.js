// src/App.js
import React from 'react';
import CertificateForm from './components/CertificateForm';
import CertificateList from './components/CertificateList';
import './styles/styles.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Educational Certificate Verification System</h1>
      </header>
      <main>
        <CertificateForm />
        <CertificateList />
      </main>
    </div>
  );
}

export default App;