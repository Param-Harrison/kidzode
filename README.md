# Kidsemy

This is a kids learning platform built with Next.js, PostgreSQL, and Stripe.

## Getting Started

### Prerequisites

- Node.js 18+ and pnpm
- Docker and Docker Compose

### Setup

1. **Clone the repository**

```bash
git clone <repo-url>
cd kidsemy
```

2. **Install dependencies**

```bash
pnpm install
```

3. **Start the database**

```bash
docker-compose up -d
```

4. **Set up environment variables**

```bash
cp .env.example .env
# Edit .env and add your Stripe and Resend API keys
```

5. **Run database migrations**

```bash
pnpm db:migrate
```

6. **Seed the database (optional)**

```bash
pnpm db:seed
```

7. **Start the development server**

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Database Management

- **Start database**: `docker-compose up -d`
- **Stop database**: `docker-compose down`
- **View logs**: `docker-compose logs -f postgres`
- **Reset database**: `docker-compose down -v` (removes all data)
- **Generate migrations**: `pnpm db:generate`
- **Run migrations**: `pnpm db:migrate`
- **Open Drizzle Studio**: `pnpm db:studio`

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **ORM**: [Drizzle](https://orm.drizzle.team/)
- **Payments**: [Stripe](https://stripe.com/)
- **Email**: [Resend](https://resend.com/)
- **UI Library**: [shadcn/ui](https://ui.shadcn.com/)

## Project Structure

```
kidsemy/
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

MIT
