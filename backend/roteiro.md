/**
 * MÉTODOS HTTP:
 *
 * GET: Buscar uma informação no backend
 * POST: Criar uma informação no backend
 * PUT: Alterar uma informação no backend
 * DELETE: Deletar uma informação no backend
 */

/**
 * Tipos de Parâmetro:
 *
 * Query params: parâmetros enviados na rota (noemados) após o símbolo "?", geralmente usado para filtros, paginação. Ex: http://localhost:3333/users?name=Guilherme ou http://localhost:333/users?page=2&nome=Guilherme&idade=22
 *
 * Route params: parâmetros utilizados para identificar recursos. http://localhost:3333/users/1 => http://localhost:3333/users/:id
 *
 * Request body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/* Using query params */
// app.get("/users", (req, res) => {
//   const params = req.query;
//   const name = params.name;

//   res.json({
//     message: "Hello world",
//     name: "Guilherme Marques",
//   });
// });

/* Using route params */
// app.get('/users/:id', (req, res) => {
//   const params = req.params;

//   console.log(params);

//   return res.json({
//     message: "hello World",
//     name: "Guilherme"
//   })
// });

// app.post('/users', (req, res) => {
//   const body = req.body;

//   console.log(body);

//   return res.json({
//     message: "hello World",
//     name: "Guilherme Marques"
//   })
// });