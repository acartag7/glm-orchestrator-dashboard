# GLM Orchestrator Dashboard

> Real-time web dashboard for monitoring GLM Orchestrator activity

![License](https://img.shields.io/badge/license-MIT-blue.svg)

## Features

- **Real-time monitoring** - Watch GLM tasks execute live
- **Workflow visualization** - See task dependencies as a graph
- **Task history** - Browse and search past executions
- **Multi-server support** - Monitor multiple MCP servers simultaneously
- **Cancel tasks** - Stop running tasks from the UI

## Installation

```bash
npm install -g glm-orchestrator-dashboard
# or
pnpm add -g glm-orchestrator-dashboard
```

## Usage

```bash
# Start the dashboard
glm-dashboard

# Opens at http://localhost:4740
```

## Development

```bash
git clone https://github.com/acartag7/glm-orchestrator-dashboard.git
cd glm-orchestrator-dashboard
pnpm install
pnpm dev
```

## How It Works

The dashboard reads from a shared SQLite database at `~/.glm-orchestrator/orchestrator.db`.

MCP servers (glm-orchestrator) write task state to this database, and the dashboard displays it in real-time.

```
┌─────────────────┐     writes      ┌──────────────────┐
│  MCP Server     │ ───────────────▶│  SQLite DB       │
│  (orchestrator) │                 │  (~/.glm-...)    │
└─────────────────┘                 └────────┬─────────┘
                                             │ reads
                                             ▼
┌─────────────────┐     serves      ┌──────────────────┐
│  Browser        │ ◀───────────────│  Dashboard       │
│  (localhost)    │                 │  (port 4740)     │
└─────────────────┘                 └──────────────────┘
```

## Related

- [glm-orchestrator](https://github.com/acartag7/glm-orchestrator) - MCP server for delegating tasks to GLM

## License

MIT
