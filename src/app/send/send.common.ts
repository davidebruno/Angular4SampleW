// vendor dependencies
import { TranslateModule } from '@ngx-translate/core';
// app
import { SharedModule } from '../shared';
import { RouterModule } from '../common';
import { SendRoutes } from './send.routes';
import { SendComponent } from './components/send/send.component';

export const SHARED_MODULES: any[] = [
    SharedModule,
    RouterModule.forChild(<any>SendRoutes),
    TranslateModule.forChild(),
];

export const COMPONENT_DECLARATIONS: any[] = [
    SendComponent
];
