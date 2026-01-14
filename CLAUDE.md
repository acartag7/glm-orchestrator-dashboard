# GLM Orchestrator Dashboard

Web dashboard for visualizing GLM Orchestrator activity in real-time.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **UI**: React 19, Tailwind CSS
- **Database**: SQLite via better-sqlite3
- **Port**: 4740 (GLM O)

## Architecture

```
Dashboard (Next.js)     ←── reads ───     SQLite DB
    ↑                                   (~/.glm-orchestrator/orchestrator.db)
    │                                          ↑
Browser (localhost:4740)              MCP Servers write here
```

## Database Location

Global shared database at `~/.glm-orchestrator/orchestrator.db`

## Server Identification

Servers register as `folderName:pid`, e.g., `orchestrator:42981`

## Key Features

1. **Active Servers Panel** - Show connected MCP servers
2. **Active Tasks Panel** - Real-time task progress with cancel
3. **Workflow Visualization** - Graph view of stages/dependencies
4. **History Browser** - Searchable task history with full logs

## Logging Levels

Capture everything:
- Task start/end/status
- Full prompts sent to GLM
- Full GLM output
- Tool calls within GLM

## Development

```bash
pnpm install
pnpm dev        # Start at localhost:4740
pnpm build      # Production build
pnpm start      # Start production server
```

## Related

- `glm-orchestrator` - MCP server that writes to the shared DB
- `@glm-orchestrator/types` - Shared types (published from orchestrator repo)

## Guidelines

- pnpm always
- No Claude Code mentions in commits
- Keep components small and focused
- Use server components where possible
- API routes for database access
