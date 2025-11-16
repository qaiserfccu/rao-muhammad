💻 Repository Agent Instructions: Express/Next.js/PostgreSQL
This repository is built on a Node.js/Express backend (for API/business logic), a Next.js frontend (for SSR/SSG and the 4-page site generation), and PostgreSQL for data persistence. Its primary responsibility is to ingest user resume/information input and generate structured, detailed content, along with rendering the four required website pages: Home, About, Portfolio, and Contact Me.
🛠️ Code Standards
Required Before Each Commit
• Run npm run format (or yarn format) before committing any changes to ensure consistent code styling across JavaScript, TypeScript, and CSS/SCSS files. This typically uses Prettier.
• Run npm run lint (or yarn lint) to verify code quality against configured rules (e.g., ESLint).
Development Flow
• Install Dependencies: npm install (or yarn install)
• Run Backend (API): npm run dev:api (Starts the Express server)
• Run Frontend (Next.js): npm run dev:web (Starts the Next.js development server)
• Run Tests: npm run test (Executes unit and integration tests)
• Full CI Check: npm run ci (Includes linting, formatting check, and testing)
📂 Repository Structure
The architecture separates the server-side API, the Next.js application, and the database setup.
• **api/**: Contains the Express/Node.js backend logic.
• api/src/: Core backend source code.
• api/src/controllers/: API route handlers and business logic entry points.
• api/src/services/: Services for data processing, content generation, and third-party integrations.
• api/src/models/: Sequelize/Prisma models or raw SQL interfaces for PostgreSQL interaction.
• **web/**: Contains the Next.js frontend application.
• web/pages/: The core page files (index.tsx, about.tsx, portfolio.tsx, contact.tsx).
• web/components/: Reusable React components.
• web/styles/: Global styles and SCSS/CSS modules.
• web/utils/: Frontend-specific utility functions.
• **database/**: Database configuration, migrations, and seed files.
• database/migrations/: Knex/TypeORM/Prisma migration scripts.
• database/seeds/: Initial data population scripts.
• config/: Environment configuration files.
• docs/: Project documentation (e.g., API specifications, deployment guides).
• testing/: Mocks, fixtures, and specific end-to-end (E2E) test helpers.
• **types/**: Shared TypeScript definitions and interfaces used by both api/ and web/.
🔑 Key Guidelines for Contribution
1. TypeScript First: All new functionality should be written in TypeScript for strong typing and better maintainability, especially for the OpenAPI document parsing/transformation utilities you are developing.
2. API/Web Separation: Ensure a clear separation of concerns. Express handles data ingestion, processing, and content generation logic. Next.js focuses on data fetching and rendering the generated content into the static page structure.
3. Data Integrity: All PostgreSQL interactions must leverage ORM/Query Builder capabilities (like Sequelize or Prisma) and be wrapped in secure, transactional logic.
4. Content Generation Logic: The content generation service (api/src/services/) must be robust and auditable, transforming the raw resume input into a structured content model before persistence.
5. Testing: Implement unit tests for all backend services and utility functions. For critical content generation logic, use parameterized tests (similar to table-driven tests) to cover diverse input scenarios.
6. Documentation: Document public APIs (e.g., using JSDoc or Swagger/OpenAPI specifications, linking to your OpenAPI tooling). Ensure any complex content generation algorithms are clearly explained in the docs/ folder.
