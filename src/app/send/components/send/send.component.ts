import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'seed-send',
    templateUrl: './send.component.html',
    styleUrls: ['./send.component.scss']
})
export class SendComponent implements OnInit {
    totDivi: number;
    constructor() { }

    ngOnInit() {
        this.totDivi = 0;
    }
}
