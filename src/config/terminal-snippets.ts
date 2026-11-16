import { siteConfig } from "@/config/site";

export interface CodeSnippet {
  id: "ts" | "curl" | "go";
  language: string;
  filename: string;
  code: string;
}

export const terminalSnippets: CodeSnippet[] = [
  {
    id: "ts",
    language: "typescript",
    filename: "ingest-log.ts",
    code: `// Ingest an application log into Orkhon via Gateway API (/v1/logs)
await fetch("${siteConfig.apiBaseUrl}/v1/logs", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": \`Bearer \${process.env.NEXUS_API_KEY}\`,
  },
  body: JSON.stringify({
    level: "ERROR",
    service: "checkout-worker",
    message: "Stripe webhook signature mismatch",
    metadata: { attempt: 2, region: "eu-central" },
  }),
});`,
  },
  {
    id: "curl",
    language: "bash",
    filename: "ingest.sh",
    code: `# Check Gateway health with your nx_live_ API key
curl -s "${siteConfig.apiBaseUrl}/v1/health" \\
  -H "Authorization: Bearer $NEXUS_API_KEY"

# Send a structured error log to Logs & Errors
curl -s -X POST "${siteConfig.apiBaseUrl}/v1/logs" \\
  -H "Authorization: Bearer $NEXUS_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "level": "ERROR",
    "service": "api-gateway",
    "message": "upstream timeout after 5000ms",
    "metadata": { "route": "/checkout", "status": 504 }
  }'`,
  },
  {
    id: "go",
    language: "go",
    filename: "logger.go",
    code: `package main

import (
	"bytes"
	"net/http"
	"os"
)

func sendOrkhonLog() error {
	payload := []byte(\`{"level":"ERROR","service":"worker","message":"pgxpool acquire timeout"}\`)
	req, err := http.NewRequest(http.MethodPost, "${siteConfig.apiBaseUrl}/v1/logs", bytes.NewReader(payload))
	if err != nil {
		return err
	}
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer "+os.Getenv("NEXUS_API_KEY"))

	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		return err
	}
	defer resp.Body.Close()
	return nil
}`,
  },
];
