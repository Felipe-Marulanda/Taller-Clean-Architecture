# Backend Clean Architecture en Spring Boot

Backend Spring Boot del taller con separación entre dominio, casos de uso,
repositorios, datasources, configuración y controladores. Los módulos
disponibles son `orders`, `categories` y `posts`.

## Ejecución

Requiere Java 21.

```bash
./gradlew bootRun
```

La API queda disponible bajo el contexto `http://localhost:8080/api`.

## Endpoints

- `GET /orders/{countOrders}`: órdenes con `id`, `customerName`, `total` y `status`.
- `GET /categories/{countCategories}`: categorías con `id`, `name` y `description`.
- `GET /posts/{countPosts}`: publicaciones con `id`, `title`, `content` y `author`.

Swagger UI: `http://localhost:8080/api/swagger-ui/index.html`.

## Validación

```bash
./gradlew clean test
```
