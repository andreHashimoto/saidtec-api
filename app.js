"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var http_1 = __importDefault(require("http"));
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var cliente_model_1 = require("./model/cliente.model");
exports.handleCors = function (router) {
    return router.use(cors_1.default({ credentials: true, origin: true }));
};
exports.handleBodyRequestParsing = function (router) {
    router.use(body_parser_1.default.urlencoded({ extended: true }));
    router.use(body_parser_1.default.json());
};
var router = express_1.default();
exports.handleCors(router);
exports.handleBodyRequestParsing(router);
var clienteDAO = new cliente_model_1.ClienteDAO();
router.get('/', function (req, res) {
    res.send(clienteDAO.getAll());
});
router.get('/:id', function (req, res) {
    var id = req.params.id;
    res.send(clienteDAO.getById(id));
});
router.post('/', function (req, res) {
    res.send(clienteDAO.insert(req.body));
});
router.put('/', function (req, res) {
    res.send(clienteDAO.update(req.body));
});
router.delete('/:id', function (req, res) {
    var id = req.params.id;
    res.send(clienteDAO.delete(id));
});
var _a = process.env.PORT, PORT = _a === void 0 ? 3000 : _a;
var server = http_1.default.createServer(router);
server.listen(PORT, function () {
    return console.log("Server is running in port " + PORT + "...");
});
