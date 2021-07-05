/**
 * @api {post} http://localhost:3100/v1/auth
 * @apiVersion 1.0.0
 * @apiName   AUTH
 * @apiGroup  Autenticação
 * @apiParam {String} email (Obrigatório)
 * @apiParam {String} password (Obrigatório)
 *
 * @apiParamExample {json} Body
 * {
 *   "login": "admin@example.com",
 *   "senha": "123"
 * }
 *
 * @apiSuccessExample {json} (200) Resposta
 *     HTTP/1.1 200 OK
 *
 * {
 *   "user": {
 *    "id": "1",
 *    "nome": "Eric Pereira",
 *    "email": "admin@example.com",
 *    "password_hash": "$2a$08$TL1ApN3/TjpikMjWNEmWROlZS3TP4KvFWxezBcl8X7oAaJ1m9iLfK",
 *    "createdAt": "2021-07-04T06:38:39.270Z",
 *    "updatedAt": "2021-07-04T06:38:39.270Z"
 *  },
 *  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJpYXQiOjE2MjUzODA5MDV9.DHyVzReYnz3EklP86XhBHYa9WtdxTr_s58wEaHWBlDA"
 *}
 *
 * @apiErrorExample {json} 404 Unauthorized
 * HTTP/1.1 401 Unauthorized
 * {
 *   "message": "Senha incorreta"
 * }
 *
 *
 * @apiErrorExample {json} 500 Internal
 * HTTP/1.1 500 Internal Server Error
 * {
 *   "status": false,
 *   "message": "Falha ao autenticar!"
 * }
 *
 */
