# Backend Clean Architecture en Node.js

Backend Express del taller con separación entre dominio, casos de uso,
repositorios, datasources y capa web. Los módulos disponibles son:
`orders`, `categories` y `posts`.

## Ejecución

```bash
npm install
npm start
```

La API queda disponible en `http://localhost:3000/api`.

## Endpoints

- `GET /orders/{countOrders}`: órdenes con `id`, `customerName`, `total` y `status`.
- `GET /categories/{countCategories}`: categorías con `id`, `name` y `description`.
- `GET /posts/{countPosts}`: publicaciones con `id`, `title`, `content` y `author`.

Swagger UI: `http://localhost:3000/api/docs`.

## Validación

```bash
npx tsc --noEmit
```
