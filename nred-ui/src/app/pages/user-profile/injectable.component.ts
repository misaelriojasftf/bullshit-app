import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { RedData } from './data';

@Injectable()
export class DataService {

    private dataSource = new BehaviorSubject<RedData>(null);
    data = this.dataSource.asObservable();

    constructor() { }

    updatedDataSelection(data: RedData) {
        this.dataSource.next(data);
    }

}
