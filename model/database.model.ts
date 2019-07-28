import * as fs from 'fs'

export class Database {

    protected readonly collection: string

    constructor(collection: string) {
        this.collection = collection;
    }

    private getFileJson(): { [key: string]: any} {
        let dataString = fs.readFileSync('database.json', 'utf-8');
        return JSON.parse(dataString);
    }

    private writeJsonToFile(json: any): void {
        fs.writeFileSync('database.json', JSON.stringify(json), 'utf-8');
    }

    private nextId(): number {
        let data = this.getFileJson();
        let sequence = +data['sequence']
        let nextSequence = sequence + 1;
        data['sequence'] = nextSequence;
        this.writeJsonToFile(data);
        return nextSequence;
    }

    protected getAll(): any[] {
        let data = this.getFileJson();
        return data[this.collection];
    }
  
    protected getById(id: number): any {
        let data = this.getAll();
        return data.find( d => d.id == id);
    }
  
    protected insert(object: any): any {
        object['id'] = this.nextId();
        let data = this.getFileJson();
        data[this.collection].push(object);
        this.writeJsonToFile(data);
        return object;
    }
  
    protected update(object: any, id = 0): any {
        let data = this.getFileJson();
        let index = data[this.collection].findIndex((d: any) => d.id == id ? id : object.id);
        if (index >= 0) {
            data[this.collection][index] = object;
            this.writeJsonToFile(data);
            return object;
        }
        return null;
    }
  
    protected delete(id: number): boolean {
        let data = this.getFileJson();
        let index = data[this.collection].findIndex((d: any) => d.id == id);
        if (index >= 0) {
            data[this.collection].splice(index, 1);
            this.writeJsonToFile(data);
            return true;
        }
        return false;
    }
}