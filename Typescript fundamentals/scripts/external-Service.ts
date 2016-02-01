

export interface IDataService {
    msg: string;
    getMessage(): string;
}

export class DataService implements IDataService {
    msg = "welcome to the show";
    getMessage() {
        return this.msg;
    }
}