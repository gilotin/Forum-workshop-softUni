import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemeModule } from './theme.module';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { MainComponent } from '../main/main.component';

const routes: Routes = [
  { path: 'themes', component: MainComponent },
  { path: 'add-theme', component: NewThemeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemeRoutingModule {}
