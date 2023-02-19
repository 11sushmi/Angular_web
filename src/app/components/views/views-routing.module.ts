import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from '../counter/counter.component';
import { HooksComponent } from '../hooks/hooks.component';
import { HtmlbasicsComponent } from '../htmlbasics/htmlbasics.component';
import { InputComponent } from '../input/input.component';
import { LifecyclehooksComponent } from '../lifecyclehooks/lifecyclehooks.component';
import { NghooksComponent } from '../nghooks/nghooks.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ViewsComponent } from './views.component';

const routes: Routes = [
  {
    path: '',
    component: ViewsComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'demo/input', component: InputComponent },
      { path: 'demo/service', component: CounterComponent },
      { path: 'demo/lifecyclehooks', component: HooksComponent },
      { path: 'demo/nghooks', component: NghooksComponent },
      { path: 'demo/ngOnChanges', component: LifecyclehooksComponent },
      { path: 'demo/html', component: HtmlbasicsComponent },
      { path: '', redirectTo: '/views/dashboard', pathMatch: 'full' },
      {
        path: 'user',
        loadChildren: () =>
          import('./usermanagement/user.module').then((m) => m.UserModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewsRoutingModule {}
