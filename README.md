# Taller Clean Architecture

Implementación del taller de Arquitectura de Software con tres aplicaciones:

- `Uceva-Angular-Taller-Clean-Architecture`: frontend Angular.
- `Uceva-NodeJS-Taller-Clean-Architecture`: backend Node.js + Express.
- `Uceva-SpringBoot-Taller-Clean-Architecture`: backend Spring Boot.

Los tres proyectos implementan los módulos `orders`, `categories` y `posts`.
Los backends comparten los mismos nombres de campos y estructuras JSON.

## Showcase estático

- URL de Pages configurada: <https://felipe-marulanda.github.io/Taller-Clean-Architecture/>
- Repositorio: <https://github.com/Felipe-Marulanda/Taller-Clean-Architecture>

El cliente Angular usa por defecto repositorios locales con datos de ejemplo
generados en el navegador, así que el showcase no requiere ejecutar ninguno de
los backends. Para probar las integraciones, se pueden sustituir los providers
por las implementaciones Node.js o Spring Boot descritas abajo.

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
Las implementaciones Node.js y Spring Boot consumen los mismos contratos. Para
la aplicación estática de Pages se conservan los providers locales.

## Validación

```bash
# Angular
npm test
npm run build

# Node.js
npx tsc --noEmit

# Spring Boot
./gradlew clean test
```

## Contratos JSON

- `Order`: `id`, `customerName`, `total`, `status`.
- `Category`: `id`, `name`, `description`.
- `Post`: `id`, `title`, `content`, `author`.

## Estructura

```text
Uceva-Angular-Taller-Clean-Architecture/  Cliente Angular y showcase de Pages
Uceva-NodeJS-Taller-Clean-Architecture/   Backend opcional Node.js
Uceva-SpringBoot-Taller-Clean-Architecture/ Backend opcional Spring Boot
.github/workflows/                        CI/CD del cliente Angular
```

Los commits siguen Conventional Commits: `feat`, `fix`, `docs`, `test`,
`refactor`, `chore`, `ci`, `build` y `style`.
