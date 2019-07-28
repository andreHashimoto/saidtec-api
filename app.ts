import express from 'express';
import http from 'http';
import { Router } from 'express';
import cors from 'cors';
import parser from 'body-parser';
import { ClienteDAO } from './model/cliente.model'

export const handleCors = (router: Router) =>
  router.use(cors({ credentials: true, origin: true }));

export const handleBodyRequestParsing = (router: Router) => {
  router.use(parser.urlencoded({ extended: true }));
  router.use(parser.json());
};

const router = express();
handleCors(router)
handleBodyRequestParsing(router)

const clienteDAO = new ClienteDAO();

router.get('/', function (req, res) {
   res.send(clienteDAO.getAll());
});

router.get('/:id', function (req, res) {
   const { id } = req.params
   res.send(clienteDAO.getById(id));
});

router.post('/', function (req, res) {
   res.send(clienteDAO.insert(req.body));
});

router.put('/', function (req, res) {
   res.send(clienteDAO.update(req.body));
});

router.delete('/:id', function (req, res) {
   const { id } = req.params
   res.send(clienteDAO.delete(id));
});


const { PORT = 3000 } = process.env;
const server = http.createServer(router);

server.listen(PORT, () =>
  console.log(`Server is running in port ${PORT}...`)
);