// vendor dependencies
import { TranslateModule } from '@ngx-translate/core';
// app
import { SharedModule } from '../shared';
import { RouterModule } from '../common';
import { ReceiveRoutes } from './receive.routes';
import { ReceiveComponent } from './components/receive/receive.component';

export const SHARED_MODULES: any[] = [
    SharedModule,
    RouterModule.forChild(<any>ReceiveRoutes),
    TranslateModule.forChild(),
];

export const COMPONENT_DECLARATIONS: any[] = [
    ReceiveComponent
];
