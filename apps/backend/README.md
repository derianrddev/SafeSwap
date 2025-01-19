# SafeSwap Backend 🚀

A robust backend service built with NestJS, supporting the SafeSwap marketplace's API, business logic, and blockchain integration.

## Tech Stack 🛠

- [NestJS](https://nestjs.com/) - Progressive Node.js framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [RxJS](https://rxjs.dev/) - Reactive programming library
- [Prettier](https://prettier.io/) - Code formatter
- [ESLint](https://eslint.org/) - Linting tool
- [Jest](https://jestjs.io/) - Testing framework

## Project Structure 📁

```bash
backend/
├── src/
│   ├── modules/       # Feature-based modules
│   ├── services/      # Core services
│   ├── controllers/   # API endpoints
│   ├── entities/      # Database models
│   └── main.ts        # Application entry point
├── test/              # Unit and integration tests
├── dist/              # Compiled output (build)
├── package.json       # Project configuration
└── tsconfig.json      # TypeScript configuration
```

## Getting Started 🚀

1. **Install dependencies**:
    
    ```bash
    npm install
    ```
    
2. **Run development server**:
    
    ```bash
    npm run dev
    ```
    
3. **Access the API**:
Open [http://localhost:4000](http://localhost:4000/) in your browser or API client.

## Available Scripts 📜

- `npm run build` - Compile the application
- `npm run dev` - Start the development server
- `npm run start` - Start the application in production
- `npm run start:debug` - Start the application with debugging
- `npm run test` - Run unit tests
- `npm run test:watch` - Run tests in watch mode
- `npm run lint` - Run ESLint with autofix
- `npm run format` - Format the codebase with Prettier

## Development Guidelines 📋

1. **Code Formatting**:
    - Use Prettier to ensure consistent code formatting.
    - Run `npm run format` before committing changes.
2. **Linting**:
    - Follow ESLint rules to maintain code quality.
    - Run `npm run lint` to check for and fix linting issues.
3. **Testing**:
    - Write unit tests for all modules and services.
    - Run tests using `npm run test`.
4. **TypeScript**:
    - Use TypeScript features for strong typing and code clarity.
    - Type safety is mandatory across all modules.

## Learn More 📚

- [NestJS Documentation](https://docs.nestjs.com/)
- [RxJS Documentation](https://rxjs.dev/api)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Prettier Documentation](https://prettier.io/docs/en/)
- [ESLint Documentation](https://eslint.org/docs/latest/)

## License

MIT License
