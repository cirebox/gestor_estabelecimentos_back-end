/**
 * @apiDefine ParamEstabelecimento
 * @apiParam {Number} id(Obrigatório) Chave primária
 * @apiParam {String{..70}} nome(Obrigatório)
 * @apiParam {String{..14}} cnpj(Obrigatório)
 * @apiParam {String{..16}} telefone
 * @apiParam {String{..150}} email
 * @apiParam {String{..10}} cep
 * @apiParam {String{..2}} uf
 * @apiParam {String{..30}} cidade
 * @apiParam {String{..30}} bairro
 * @apiParam {String{..70}} logradouro
 * @apiParam {String{..20}} numero
 * @apiParam {String{..30}} complemento
 * @apiParam {String{..0}} createdat(Obrigatório)
 * @apiParam {String{..0}} updatedat(Obrigatório)
 */

/**
 * @apiDefine ObjEstabelecimento
 * @apiSuccess {Number} id Chave primária
 * @apiSuccess {String} nome
 * @apiSuccess {String} cnpj
 * @apiSuccess {String} telefone
 * @apiSuccess {String} email
 * @apiSuccess {String} cep
 * @apiSuccess {String} uf
 * @apiSuccess {String} cidade
 * @apiSuccess {String} bairro
 * @apiSuccess {String} logradouro
 * @apiSuccess {String} numero
 * @apiSuccess {String} complemento
 * @apiSuccess {String} createdat
 * @apiSuccess {String} updatedat
 */

/**
 * @api {get} http://localhost:3100/v1/estabelecimento/ 1º Listar - Estabelecimento
 * @apiVersion 1.0.0
 * @apiName   Estabelecimento_LISTAR
 * @apiGroup  Estabelecimento
 * @apiUse ObjEstabelecimento
 *
 * @apiSuccessExample {json} (200)
 *     HTTP/1.1 200 OK
 *
 *       {
 *         "status": true,
 *         "data": [
 *           {
 *              "id": 3
 *              "nome": "MERCADO DO VALE"
 *              "cnpj": "12345000132189"
 *              "telefone": "(24) 6548-3212"
 *              "email": "teste@vale.com"
 *              "cep": "25850-000"
 *              "uf": "RJ"
 *              "cidade": "PARAÍBA DO SUL"
 *              "bairro": "BARÃO DE ANGRA"
 *              "logradouro": "ESTR. SOUTELO SILVA"
 *              "numero": "456"
 *              "complemento": null
 *              "createdat": "04/07/2021 23:11:20"
 *              "updatedat": "04/07/2021 23:11:20"
 *           }
 *         ]
 *       }
 *
 * @apiErrorExample {json} 500 Internal
 *  HTTP/1.1 500 Internal Server Error
 *  {
 *    "status": false,
 *    "message": "Falha ao processar a requisição",
 *    "error": "Mensagem de erro.."
 *  }
 *
 */

/**
/**
* @api {post} http://localhost:3100/v1/estabelecimento/ 2º Incluir Registro - Estabelecimento
* @apiVersion 1.0.0
* @apiName   Estabelecimento_ADD 
* @apiGroup  Estabelecimento
* @apiUse ParamEstabelecimento
* @apiUse ObjEstabelecimento
*
* @apiSuccessExample {json} 201 OK
*     HTTP/1.1 201 OK
*     {              
*       "status": true,
*       "message": "Registro adicionado com sucesso!"
*       "data": [
*           {
*              "id": 3
*              "nome": "MERCADO DO VALE"
*              "cnpj": "12345000132189"
*              "telefone": "(24) 6548-3212"
*              "email": "teste@vale.com"
*              "cep": "25850-000"
*              "uf": "RJ"
*              "cidade": "PARAÍBA DO SUL"
*              "bairro": "BARÃO DE ANGRA"
*              "logradouro": "ESTR. SOUTELO SILVA"
*              "numero": "456"
*              "complemento": null
*              "createdat": "04/07/2021 23:11:20"
*              "updatedat": "04/07/2021 23:11:20"
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
* @api {put} http://localhost:3100/v1/estabelecimento/ 3º Atualizar Registro - Estabelecimento
* @apiVersion 1.0.0
* @apiName   Estabelecimento_Update 
* @apiGroup  Estabelecimento
* @apiUse ParamEstabelecimento
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
 * @api {delete} http://localhost:3100/v1/estabelecimento/:id 4º Remover Registro - Estabelecimento
 * @apiVersion 1.0.0
 * @apiName   Estabelecimento_Delete
 * @apiGroup  Estabelecimento
 * @apiParam {Number} id Chave primária
 *
 *
 * @apiExample {curl} Exemplo de uso
 *     curl -X DELETE http://localhost:3100/v1/estabelecimento/:id
 *
 * @apiSuccessExample {json} 200 OK
 *     HTTP/1.1 200 OK
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
 *       "message": "Falha ao processar a requisição",
 *       "error": "Mensagem de erro..."
 *     }
 */
