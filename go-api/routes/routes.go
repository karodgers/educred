// go-api/routes/routes.go

package routes

import (
	"github.com/gorilla/mux"
	"github.com/karodgers/educred/go-api/handlers"
)

func RegisterRoutes(r *mux.Router) {
	r.HandleFunc("/certificate", handlers.GetCertificateHandler).Methods("GET")
	r.HandleFunc("/certificate", handlers.IssueCertificateHandler).Methods("POST")
	r.HandleFunc("/certificate/{id}", handlers.RevokeCertificateHandler).Methods("DELETE")
}
