"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
var Database = /** @class */ (function () {
    function Database(collection) {
        this.collection = collection;
    }
    Database.prototype.getFileJson = function () {
        var dataString = fs.readFileSync('database.json', 'utf-8');
        return JSON.parse(dataString);
    };
    Database.prototype.writeJsonToFile = function (json) {
        fs.writeFileSync('database.json', JSON.stringify(json), 'utf-8');
    };
    Database.prototype.nextId = function () {
        var data = this.getFileJson();
        var sequence = +data['sequence'];
        var nextSequence = sequence + 1;
        data['sequence'] = nextSequence;
        this.writeJsonToFile(data);
        return nextSequence;
    };
    Database.prototype.getAll = function () {
        var data = this.getFileJson();
        return data[this.collection];
    };
    Database.prototype.getById = function (id) {
        var data = this.getAll();
        return data.find(function (d) { return d.id == id; });
    };
    Database.prototype.insert = function (object) {
        object['id'] = this.nextId();
        var data = this.getFileJson();
        data[this.collection].push(object);
        this.writeJsonToFile(data);
        return object;
    };
    Database.prototype.update = function (object, id) {
        if (id === void 0) { id = 0; }
        var data = this.getFileJson();
        var index = data[this.collection].findIndex(function (d) { return d.id == id ? id : object.id; });
        if (index >= 0) {
            data[this.collection][index] = object;
            this.writeJsonToFile(data);
            return object;
        }
        return null;
    };
    Database.prototype.delete = function (id) {
        var data = this.getFileJson();
        var index = data[this.collection].findIndex(function (d) { return d.id == id; });
        if (index >= 0) {
            data[this.collection].splice(index, 1);
            this.writeJsonToFile(data);
            return true;
        }
        return false;
    };
    return Database;
}());
exports.Database = Database;
