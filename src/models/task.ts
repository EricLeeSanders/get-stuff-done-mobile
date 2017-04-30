import { UUID } from 'angular2-uuid';

export class Task {
    public id: string;
    constructor(public title: string, public minutes: number, public description: string){
        this.id = UUID.UUID();
        console.log("created: " + title + " id: " + this.id);
    }
}