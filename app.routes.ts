import {Routes} from '@angular/router';

import {HomePage} from './pages/home/home.page';
import {TagsPage} from './pages/tags/tags.page';

export var routableComponents = [];

export const routes: Routes = [
    routeEntry({ path: '', component: HomePage}),
    routeEntry({ path: 'tags', component: TagsPage}),
];

function routeEntry(data) {
    routableComponents.push(data.component);
    return data;
}
