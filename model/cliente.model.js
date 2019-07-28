"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var database_model_1 = require("./database.model");
var ClienteDAO = /** @class */ (function (_super) {
    __extends(ClienteDAO, _super);
    function ClienteDAO() {
        return _super.call(this, 'cliente') || this;
    }
    ClienteDAO.prototype.getAll = function () {
        return _super.prototype.getAll.call(this);
    };
    ClienteDAO.prototype.getById = function (id) {
        return _super.prototype.getById.call(this, id);
    };
    ClienteDAO.prototype.insert = function (cliente) {
        return _super.prototype.insert.call(this, cliente);
    };
    ClienteDAO.prototype.update = function (cliente, id) {
        if (id === void 0) { id = 0; }
        return _super.prototype.update.call(this, cliente, id);
    };
    ClienteDAO.prototype.delete = function (id) {
        return _super.prototype.delete.call(this, id);
    };
    return ClienteDAO;
}(database_model_1.Database));
exports.ClienteDAO = ClienteDAO;
