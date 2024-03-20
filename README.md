# News Aggregator

## Installation and Setup Instructions

1. Clone the repo
    ```bash
    git clone https://github.com/junaidjahan/news-aggregator.git
    ```
2. Clone `.env.example` to `.env`. _(`.env` file content shared through email)_

3. Install dependencies:
    ```bash
    yarn install
    ```
4. Run the project
    ```bash
    yarn dev
    ```
5. Run production build
    ```bash
    yarn build
    yarn preview
    ```
6. Application served at http://localhost:5173
7. Run unit tests
    ```bash
    yarn test
    ```
8. Run e2e tests
    ```bash
    yarn dev
    # Application must be served before running e2e tests
    yarn test:e2e
    ```

## Docker setup

1. For development mode:
    ```bash
    docker-compose up
    ```
2. For production mode:

    ```bash
    # build the image
    docker build -t news-aggregator . -f Dockerfile.prod

    # run the image
    docker run -it -p 5173:5173 news-aggregator
    ```

3. Application served at http://localhost:5173

## Tech stack

-   [React](https://react.dev/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Material UI](https://mui.com/material-ui/)
-   [Vite](https://vitejs.dev/)
-   [Vitest](https://vitest.dev/)
-   [Cypress](https://www.cypress.io/)
