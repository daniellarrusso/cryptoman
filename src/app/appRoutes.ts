import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoinsComponent } from './coins/coins.component';

const routes: Routes = [
    { path: '', redirectTo: '/coins', pathMatch: 'full' },
    { path: 'coins', component: CoinsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

export const routedComponents = [
    CoinsComponent
];
