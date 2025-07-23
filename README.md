# Swagger Basic Express API

This project is a minimal Express API that integrates **Swagger (OpenAPI)** documentation using the [`swagger-ui-express`](https://www.npmjs.com/package/swagger-ui-express) and [`yamljs`](https://www.npmjs.com/package/yamljs) packages.

---

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Running the Server](#running-the-server)
4. [Viewing the Swagger Docs](#viewing-the-swagger-docs)
5. [Editing the OpenAPI Spec](#editing-the-openapi-spec)
6. [Adding New Routes](#adding-new-routes)
7. [Project Structure](#project-structure)

---

## Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** (v14 or later recommended)
- **npm** (comes with Node.js)

Verify installation:

```bash
node -v   # should print a version >= 14
npm -v    # should print a version number
```

---

## Installation

1. **Clone the repo** (or download the source code):
   ```bash
git clone <repository-url>
cd swagger_basic
```
2. **Install dependencies:**
   ```bash
npm install
```

---

## Running the Server

Start the development server with:

```bash
node app.js
```

You should see output similar to:

```
Server running on http://localhost:3000
Swagger docs available at http://localhost:3000/api-docs
```

---

## Viewing the Swagger Docs

1. Open your browser and navigate to: <http://localhost:3000/api-docs>
2. You will see an interactive UI generated from the `docs/openapi.yaml` file.
3. You can test endpoints directly from the UI, inspect request/response schemas, and share the documentation link with others.

![Swagger UI Screenshot](https://user-images.githubusercontent.com/placeholder/screenshot.png)

> **Tip:** The Swagger UI automatically reloads when you restart the server after editing the spec file.

---

## Editing the OpenAPI Spec

The API specification lives in [`docs/openapi.yaml`](docs/openapi.yaml). This file is written in the **OpenAPI v3** format.

1. Open `docs/openapi.yaml` in your preferred editor.
2. Make your changes (e.g., add new paths, update schemas).
3. **Restart** the server so that the updated spec is loaded.
4. Refresh <http://localhost:3000/api-docs> to see your changes reflected.

If you prefer **JSON** format, you can rename the file to `openapi.json` and update the path in `app.js` accordingly:
```js
// app.js
const swaggerDocument = require('./docs/openapi.json');
```

---

## Adding New Routes

1. Create a new route file inside the `routes/` directory or extend an existing one (e.g., `routes/users.js`).
2. Register the route in `app.js` or export it from `routes/index.js` (depending on your structure).
3. Document the new endpoint in `docs/openapi.yaml`, mirroring the path and HTTP method.

Example:

```yaml
paths:
  /api/users:
    get:
      summary: Get all users
      responses:
        '200':
          description: A list of users
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/User'
```

---

## Project Structure

```
swagger_basic/
├── app.js              # Main Express application
├── data.js             # In-memory data store (sample data)
├── routes/
│   └── users.js        # Example user routes
├── docs/
│   └── openapi.yaml    # OpenAPI 3 specification
├── package.json        # Project metadata & dependencies
└── README.md           # You are here
```

---

## Helpful Links

- OpenAPI Specification: <https://swagger.io/specification/>
- swagger-ui-express package: <https://www.npmjs.com/package/swagger-ui-express>
- yamljs package: <https://www.npmjs.com/package/yamljs>

Happy documenting! 🎉 