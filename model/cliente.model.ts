import { Database } from './database.model'
import { ICliente } from '../interface/cliente.interface'

export class ClienteDAO extends Database {

    constructor() {
        super('cliente');
    }

    getAll(): ICliente[] {
        return super.getAll();
    }
  
    getById(id: number): ICliente {
        return super.getById(id);
    }
  
    insert(cliente: ICliente): ICliente {
        return super.insert(cliente);
    }
  
    update(cliente: any, id = 0): ICliente {
        return super.update(cliente, id)
    }
  
    delete(id: number): boolean {
        return super.delete(id);
    }
}