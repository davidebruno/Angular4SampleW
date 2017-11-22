import { Component, Input } from '@angular/core';
// app
import { MenuItem } from '../../interfaces/MenuItem';

@Component({
    moduleId: module.id,
    selector: 'seed-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent {

    @Input() items: MenuItem[];

}
