// go-api/config/config.go

package config

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

type Config struct {
	ServerPort string
}

func LoadConfig(path string) (*Config, error) {
	if err := godotenv.Load(path); err != nil {
		log.Printf("No .env file found")
	}

	return &Config{
		ServerPort: getEnv("SERVER_PORT", "8080"),
	}, nil
}

func getEnv(key, defaultValue string) string {
	if value, exists := os.LookupEnv(key); exists {
		return value
	}
	return defaultValue
}
