import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {LandingPageComponent} from "./landing-page/landing-page.component";
import {PostSnapListComponent} from "./post-snap-list/post-snap-list.component";
import {SinglePostSnapComponent} from "./single-post-snap/single-post-snap.component";

const routes: Routes = [
  {path:'', component: LandingPageComponent},
  { path: 'posts', component: PostSnapListComponent},
  {path:'posts/:id', component: SinglePostSnapComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule{}
