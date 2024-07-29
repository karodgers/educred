// go-api/main.go

package main

import (
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/karodgers/educred/go-api/config"
	"github.com/karodgers/educred/go-api/routes"
)

func main() {
	// Load configuration
	cfg, err := config.LoadConfig(".env")
	if err != nil {
		log.Fatalf("Error loading config: %v", err)
	}

	// Initialize router
	r := mux.NewRouter()

	// Define routes
	routes.RegisterRoutes(r)

	// Start the server
	log.Printf("Starting server on port %s...", cfg.ServerPort)
	if err := http.ListenAndServe(":"+cfg.ServerPort, r); err != nil {
		log.Fatalf("Error starting server: %v", err)
	}
}
