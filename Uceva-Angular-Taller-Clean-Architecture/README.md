# Clean Architecture en Angular

Frontend Angular del taller con los módulos `orders`, `categories` y `posts`.
Cada módulo separa modelos, contratos de repositorio, casos de uso,
implementaciones local/Node.js/Spring Boot y componentes de presentación.

## Ejecución

```bash
npm install
npm start
```

La aplicación queda disponible en `http://localhost:4200`.

## Providers

Los providers se configuran en `src/app/app.config.ts`. Por defecto se usan
datos locales. Para consumir un backend, se reemplazan los tres providers por
las implementaciones `OrderNodeRepositoryImpl`, `CategoryNodeRepositoryImpl`,
`PostNodeRepositoryImpl`, o por sus equivalentes `SpringBoot`.

Node.js:

- `http://localhost:3000/api/orders/{count}`
- `http://localhost:3000/api/categories/{count}`
- `http://localhost:3000/api/posts/{count}`

Spring Boot:

- `http://localhost:8080/api/orders/{count}`
- `http://localhost:8080/api/categories/{count}`
- `http://localhost:8080/api/posts/{count}`

## Pruebas y documentación

```bash
npm test
npm run build
npm run compodoc
```
