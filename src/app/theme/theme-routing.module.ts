import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemeModule } from './theme.module';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { MainComponent } from '../main/main.component';
import { CurrentThemeComponent } from './current-theme/current-theme.component';

const routes: Routes = [
  {
    path: 'themes',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: MainComponent,
      },
      {
        path: ':themeId',
        component: CurrentThemeComponent,
      },
    ],
  },
  { path: 'add-theme', component: NewThemeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemeRoutingModule {}
