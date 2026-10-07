/**
 * @openapi
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       required: [id, customerName, total, status]
 *       properties:
 *         id: { type: integer, example: 1 }
 *         customerName: { type: string, example: "Ana Gómez" }
 *         total: { type: number, example: 450.5 }
 *         status: { type: string, enum: [Pending, Paid, Shipped, Delivered] }
 *     Category:
 *       type: object
 *       required: [id, name, description]
 *       properties:
 *         id: { type: integer, example: 1 }
 *         name: { type: string, example: "Games" }
 *         description: { type: string, example: "Video games and accessories" }
 *     Post:
 *       type: object
 *       required: [id, title, content, author]
 *       properties:
 *         id: { type: integer, example: 1 }
 *         title: { type: string, example: "Clean Architecture" }
 *         content: { type: string, example: "A practical introduction." }
 *         author: { type: string, example: "Ana Gómez" }
 */
export {};
