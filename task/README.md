# Task Structure

This directory contains modular Taskfile configurations for the Next.js Job Board project.

## Structure

- **`DockerTaskfile.yml`** - Docker Compose management (aliases: `d:`)
- **`NextTaskfile.yml`** - Next.js development and build tasks (aliases: `n:`)
- **`InngestTaskfile.yml`** - Inngest development server tasks (aliases: `i:`)
- **`DatabaseTaskfile.yml`** - Database management with Drizzle (aliases: `db:`)

## Key Features

### Smart Dependencies
- Tasks automatically handle dependencies (e.g., `npm ci` before `dev`)
- Source/generate tracking for efficient rebuilds
- Proper task ordering

### Modular Design
- Each service has its own taskfile
- Clean separation of concerns
- Easy to extend and maintain

### Aliases
You can use short aliases for common tasks:
```bash
task d:up      # docker:up
task n:dev     # next:dev
task i:dev     # inngest:dev
task db:push   # db:push
```

## Main Commands

From the root directory:

```bash
# Start all development services
task dev

# Check status of all services
task status

# Stop all services
task stop

# Clean everything
task clean
```

## Individual Service Commands

```bash
# Docker
task docker:up
task docker:down
task docker:logs

# Next.js
task next:dev
task next:build
task next:lint

# Inngest
task inngest:dev
task inngest:status

# Database
task db:push
task db:studio
task db:migrate
```
