/**
 * @apiDefine ParamUsuario
 * @apiParam {Number} id(Obrigatório) Chave primária
 * @apiParam {String{..70}} nome(Obrigatório)
 * @apiParam {String{..150}} email(Obrigatório)
 * @apiParam {String{..255}} password_hash(Obrigatório)
 * @apiParam {String{..0}} createdat(Obrigatório)
 * @apiParam {String{..0}} updatedat(Obrigatório)
 */

/**
 * @apiDefine ObjUsuario
 * @apiSuccess {Number} id Chave primária
 * @apiSuccess {String} nome
 * @apiSuccess {String} email
 * @apiSuccess {String} password_hash
 * @apiSuccess {String} createdat
 * @apiSuccess {String} updatedat
 */

/**
 * @api {get} http://localhost:3100/v1/usuario/ 1º Listar - Usuario
 * @apiVersion 1.0.0
 * @apiName   Usuario_LISTAR
 * @apiGroup  Usuario
 * @apiUse ObjUsuario
 *
 * @apiSuccessExample {json} (200)
 *     HTTP/1.1 200 OK
 *
 *       {
 *         "status": true,
 *         "data": [
 *           {
 *              "id": 1
 *              "nome": "Eric Pereira"
 *              "email": "admin@example.com"
 *              "password_hash": "$2a$08$TL1ApN3/TjpikMjWNEmWROlZS3TP4KvFWxezBcl8X7oAaJ1m9iLfK"
 *              "createdat": "04/07/2021 23:11:19"
 *              "updatedat": "04/07/2021 23:11:19"
 *           }
 *         ]
 *       }
 *
 * @apiErrorExample {json} 500 Internal
 *     HTTP/1.1 500 Internal Server Error
 *
 *       {
 *         "status": false,
 *         "message": "Falha ao processar a requisição",
 *         "error": "Mensagem de erro.."
 *       }
 *
 */

/**
/**
* @api {post} http://localhost:3100/v1/signup/ 2º Incluir Registro - Usuario
* @apiVersion 1.0.0
* @apiName   Usuario_ADD 
* @apiGroup  Usuario
* @apiUse ParamUsuario
* @apiUse ObjUsuario
*
* @apiSuccessExample {json} 201 OK
*     HTTP/1.1 201 OK
*     {              
*       "status": true,
*       "message": "Registro adicionado com sucesso!"
*       "data": [
*           {
*              "id": 1
*              "nome": "Eric Pereira"
*              "email": "admin@example.com"
*              "password_hash": "$2a$08$TL1ApN3/TjpikMjWNEmWROlZS3TP4KvFWxezBcl8X7oAaJ1m9iLfK"
*              "createdat": "04/07/2021 23:11:19"
*              "updatedat": "04/07/2021 23:11:19"
*           }
*         ]
*     }
*
* @apiErrorExample {json} 422 Unprocessable Entity
*     HTTP/1.1 422 Unprocessable Entity
*     
*       {
*         "field": "[Fields invalidos]..",
*         "message": "exemplo: Campo não preenchido..." 
*       }
*     
*
* @apiErrorExample {json} 500 Internal
*     HTTP/1.1 500 Internal Server Error
*     
*       {
*         "status": false,
*         "message": "Falha ao processar a requisição", 
*         "error": "Mensagem de erro..."
*       }
*     
*/

/**
* @api {put} http://localhost:3100/v1/usuario/ 3º Atualizar Registro - Usuario
* @apiVersion 1.0.0
* @apiName   Usuario_Update 
* @apiGroup  Usuario
* @apiUse ParamUsuario
*
* @apiSuccessExample {json} 200 OK
*     HTTP/1.1 200 OK
*     {              
*       "status": true,
*       "message": "Atualizado com Sucesso"
*     }
*
@apiError id Parâmetro não informado!
@apiError Body Corpo da requisição não informado!
*
* @apiErrorExample {json} 400 Bad Request
*     HTTP/1.1 400 Bad Request
*     
*       {
*         "status": false,
*         "message": "Falha ao processar a requisição" 
*       }
*     
*
* @apiErrorExample {json} 422 Unprocessable Entity
*     HTTP/1.1 422 Unprocessable Entity
*     
*       {
*         "field": "[Fields invalidos]..",
*         "message": "exemplo: Campo não preenchido..." 
*       }
*     
*
* @apiErrorExample {json} 500 Internal
*     HTTP/1.1 500 Internal Server Error
*     
*       {
*         "status": false,
*         "message": "Falha ao processar a requisição", 
*         "error": "Mensagem de erro..."
*       }
*     
*/

/**
 * @api {post} http://161.35.227.175:6900/v1/usuario/delete 4º Remover Registro - Usuario
 * @apiVersion 1.0.0
 * @apiName   Usuario_Delete
 * @apiGroup  Usuario
 * @apiParam {Number} id Chave primária
 *
 *
 * @apiParamExample {json} where Body
 * {
 *   "where": {"id": 1}
 * }
 *
 * @apiExample {curl} Exemplo de uso
 *     curl -X DELETE http://161.35.227.175:6900/v1/usuario/
 *
 * @apiSuccessExample {json} 201 OK
 *     HTTP/1.1 201 OK
 *     {
 *       "status": true,
 *       "message": "Registro removido com sucesso!"
 *     }
 *
 * @apiSuccessExample {json} 204 Nenhuma Alteração
 *     HTTP/1.1 204 OK
 *     {
 *       "status": false,
 *       "message": "Nenhum registro para deleta"
 *     }
 *
 * @apiErrorExample {json} 500 Internal
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "message": "Falha ao processar Requisição",
 *       "error": "Mensagem de erro..."
 *     }
 */
