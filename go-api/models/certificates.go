// go-api/models/certificate.go

package models

type Certificate struct {
	StudentName string `json:"studentName"`
	Course      string `json:"course"`
	Institution string `json:"institution"`
	IssueDate   uint64 `json:"issueDate"`
	IsValid     bool   `json:"isValid"`
}
