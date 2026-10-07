# Taller Clean Architecture

Implementación del taller de Arquitectura de Software con tres aplicaciones:

- `Uceva-Angular-Taller-Clean-Architecture`: frontend Angular.
- `Uceva-NodeJS-Taller-Clean-Architecture`: backend Node.js + Express.
- `Uceva-SpringBoot-Taller-Clean-Architecture`: backend Spring Boot.

Los tres proyectos implementan los módulos `orders`, `categories` y `posts`.
Los backends comparten los mismos nombres de campos y estructuras JSON.

## Ejecución

### Backend Node.js

```bash
cd Uceva-NodeJS-Taller-Clean-Architecture
npm install
npm start
```

API: `http://localhost:3000/api`

- `GET /orders/{countOrders}`
- `GET /categories/{countCategories}`
- `GET /posts/{countPosts}`
- Swagger: `http://localhost:3000/api/docs`

### Backend Spring Boot

Requiere Java 21.

```bash
cd Uceva-SpringBoot-Taller-Clean-Architecture
./gradlew bootRun
```

API: `http://localhost:8080/api`

- `GET /orders/{countOrders}`
- `GET /categories/{countCategories}`
- `GET /posts/{countPosts}`
- Swagger: `http://localhost:8080/api/swagger-ui/index.html`

### Frontend Angular

```bash
cd Uceva-Angular-Taller-Clean-Architecture
npm install
npm start
```

Frontend: `http://localhost:4200`

El backend se selecciona mediante providers en `src/app/app.config.ts`.
Las implementaciones Node.js y Spring Boot consumen los mismos contratos.

## Validación

```bash
# Angular
npm test
npm run build
npm run compodoc

# Node.js
npx tsc --noEmit

# Spring Boot
./gradlew clean test
```

## Contratos JSON

- `Order`: `id`, `customerName`, `total`, `status`.
- `Category`: `id`, `name`, `description`.
- `Post`: `id`, `title`, `content`, `author`.
