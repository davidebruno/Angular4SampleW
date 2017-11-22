import { Component, Input } from '@angular/core';
// app
import { MenuItem } from '../../interfaces/MenuItem';

@Component({
    moduleId: module.id,
    selector: 'seed-menu-item',
    templateUrl: './menu-item.component.html',
    styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent {

    @Input() item: MenuItem;

}
