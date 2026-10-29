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
    filename: "nexus.client.ts",
    code: `import { NexusClient } from "@nexusapp/sdk";

// Initialize client with local BFF bridge
const nexus = new NexusClient({
  baseUrl: "http://localhost:3000",
  apiKey: process.env.NEXUS_VAULT_KEY,
});

// Stream live CI/CD pipeline and deployments
const stream = await nexus.telemetry.subscribe({
  events: ["deployment.status", "db.connection_pool"],
  onMessage: (event) => {
    console.log(\`[\${event.timestamp}] \${event.type}: \${event.status}\`);
    if (event.type === "db.connection_pool" && event.utilization > 0.85) {
      console.warn("⚠️ Pool nearing capacity, dispatching SRE remediation.");
    }
  },
});`,
  },
  {
    id: "curl",
    language: "bash",
    filename: "health_check.sh",
    code: `# Check BFF service health and pgxpool diagnostics
curl -s -X GET "http://localhost:3000/health" \\
  -H "Authorization: Bearer $NEXUS_API_KEY" \\
  -H "Accept: application/json" | jq .

# Trigger release pipeline Go/No-Go evaluation
curl -s -X POST "http://localhost:3000/api/pipeline/eval" \\
  -H "Authorization: Bearer $NEXUS_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "repository": "Muzolas/NexusApp",
    "commit_sha": "HEAD",
    "require_clean_ci": true
  }'`,
  },
  {
    id: "go",
    language: "go",
    filename: "main.go",
    code: `package main

import (
	"context"
	"fmt"
	"log"
	"github.com/nexusapp/go-client/nexus"
)

func main() {
	client := nexus.NewClient("http://localhost:3000", nexus.WithEnvKey())

	ctx := context.Background()
	telemetry, err := client.Telemetry.GetStatus(ctx)
	if err != nil {
		log.Fatalf("telemetry fetch failed: %v", err)
	}

	fmt.Printf("BFF Uptime: %s | Active DB Pool: %d/%d\\n",
		telemetry.Uptime,
		telemetry.PoolInUse,
		telemetry.PoolMaxConns,
	)
}`,
  },
];
