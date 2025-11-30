```
# Kidzode

This is a kids learning platform built with Next.js, PostgreSQL, and Stripe.

## 🛠️ Development Workflow

We use a `Makefile` to simplify common development tasks.

### Quick Start

1. **Setup Project** (Install dependencies, start DB, migrate, seed):
   ```bash
   make setup
   ```

2. **Start Development Server** (Local App + Docker DB):
   ```bash
   make dev-local
   ```
   Or run everything in Docker:
   ```bash
   make dev
   ```

3. **Stop Containers**:
   ```bash
   make stop
   ```

### 🧪 Test Accounts (Seeded)

The `make setup` command seeds the database with the following accounts:

| Role | Email | Password | Notes |
|------|-------|----------|-------|
| **Parent** | `parent@test.com` | `parent123` | Has 2 children: Alice (PIN: 1234), Bob (No PIN) |
| **Teacher** | `teacher@test.com` | `teacher123` | Has 1 classroom: Grade 5 Python (Code: `ABC123`) |
| **Student** | - | - | Use Class Code `ABC123` to login as Charlie (PIN: 5678) or Diana |

### 📧 Email Verification

In **development mode**, emails are **auto-verified** upon signup, so you don't need to check logs or click links.
Verification tokens are still logged to the console for debugging purposes.

### 1. Prerequisites

- Node.js 18+
- npm
- Docker & Docker Compose

### 2. Environment Variables

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Update `POSTGRES_URL` for Docker:
```env
POSTGRES_URL=postgresql://kidzode:kidzode_dev_password@localhost:5432/kidzode
```

### 3. Database Setup

Start the PostgreSQL database using Docker Compose:

```bash
docker compose up -d
```

Run migrations:

```bash
npm run db:migrate
```

Seed the database (optional):

```bash
npm run db:seed
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### 5. Database Management

- **Generate Migrations:** `npm run db:generate`
- **Run Migrations:** `npm run db:migrate`
- **Drizzle Studio:** `npm run db:studio` (GUI for database)

### 🐳 Docker Commands

- `make dev`: Runs App and Postgres in Docker containers.
- `make dev-local`: Runs Postgres in Docker, App locally (faster HMR).
- `make db-shell`: Opens a psql shell inside the database container.
- `make clean`: Stops containers and removes volumes (resets DB).
- `make stop`: Stops all running Docker containers.
- `make logs-db`: View database logs.
- `make db-migrate`: Run database migrations.
- `make db-generate`: Generate new database migrations.
- `make db-seed`: Seed the database with test data.
- `make db-studio`: Open Drizzle Studio for database inspection.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **ORM**: [Drizzle](https://orm.drizzle.team/)
- **Payments**: [Stripe](https://stripe.com/)
- **Email**: [Resend](https://resend.com/)
- **UI Library**: [shadcn/ui](https://ui.shadcn.com/)

## Project Structure

```
kidzode/
├── app/                    # Next.js app directory
│   ├── (auth)/            # Authentication pages
│   ├── (dashboard)/       # Dashboard pages
│   ├── api/               # API routes
│   └── courses/           # Course pages
├── components/            # React components
├── lib/
│   ├── auth/             # Authentication helpers
│   ├── db/               # Database schema and queries
│   └── payments/         # Stripe integration
└── public/               # Static assets
```

## Features

- **Multi-role authentication**: Parents, Teachers, and Students
- **Student login**: Simple class code + name selection
- **Subscription management**: Monthly, lifetime, and teacher plans
- **Progress tracking**: Granular lesson progress for each student
- **Free tier**: First 6 lessons free for everyone

## License

Private Project
