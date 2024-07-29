// go-api/handlers/certificate.go

package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/karodgers/educred/go-api/blockchain"
	"github.com/karodgers/educred/go-api/models"
)

func GetCertificateHandler(w http.ResponseWriter, r *http.Request) {
    vars := mux.Vars(r)
    certificateId := vars["id"]

    // Call blockchain function to get certificate
    cert, err := blockchain.GetCertificate(certificateId)
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }

    response, err := json.Marshal(cert)
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }

    w.Header().Set("Content-Type", "application/json")
    w.Write(response)
}

func IssueCertificateHandler(w http.ResponseWriter, r *http.Request) {
    var cert models.Certificate
    if err := json.NewDecoder(r.Body).Decode(&cert); err != nil {
        http.Error(w, err.Error(), http.StatusBadRequest)
        return
    }

    // Call blockchain function to issue certificate
    if err := blockchain.IssueCertificate(cert); err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }

    w.WriteHeader(http.StatusOK)
}

func RevokeCertificateHandler(w http.ResponseWriter, r *http.Request) {
    vars := mux.Vars(r)
    certificateId := vars["id"]

    // Call blockchain function to revoke certificate
    if err := blockchain.RevokeCertificate(certificateId); err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }

    w.WriteHeader(http.StatusOK)
}
