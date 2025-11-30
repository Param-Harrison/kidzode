.PHONY: setup dev stop clean db-shell

# Setup the project (install dependencies, start db, migrate, seed)
setup:
	@echo "🚀 Setting up Kidzode..."
	@npm install
	@docker compose up -d postgres
	@echo "⏳ Waiting for database to be ready..."
	@sleep 5
	@npm run db:migrate
	@echo "🧹 Cleaning existing data for fresh start..."
	@docker exec kidzode-postgres psql -U kidzode -d kidzode -c "TRUNCATE TABLE classroom_students, students, accounts, users RESTART IDENTITY CASCADE;" >/dev/null 2>&1 || true
	@npm run db:seed
	@echo "✅ Setup complete! Run 'make dev' to start the app."

# Start development environment (App + DB in Docker)
dev:
	@echo "🐳 Starting development environment in Docker..."
	@docker compose up --build

# Start local development (App local + DB Docker)
dev-local:
	@echo "💻 Starting local development..."
	@docker compose up -d postgres
	@npm run dev

# Stop all containers
stop:
	@echo "🛑 Stopping all containers..."
	@docker compose down

# Clean up (stop containers and remove volumes)
clean:
	@echo "🧹 Cleaning up..."
	@docker compose down -v
	@echo "✅ Clean complete."

# Open database shell
db-shell:
	@docker exec -it kidzode-postgres psql -U kidzode -d kidzode

# View database logs
logs-db:
	@docker compose logs -f postgres

# Run database migrations
db-migrate:
	@npm run db:migrate

# Generate database migrations
db-generate:
	@npm run db:generate

# Seed database
db-seed:
	@npm run db:seed

# Open Drizzle Studio
db-studio:
	@npm run db:studio
