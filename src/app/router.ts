import {Routes} from '@angular/router';

import {ViewComponent} from './view/view.component';
import {InsertComponent} from './insert/insert.component';
import {UpdateComponent} from './update/update.component';


export const routes : Routes = [{
        path:'',
        component:ViewComponent
    },{
        path:'add',
        component:InsertComponent
    },{
        path:'edit/:id',
        component:UpdateComponent
}]

// export const routing = RouterModule.forRoot(routes);