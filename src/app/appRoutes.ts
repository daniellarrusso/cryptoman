import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoinsComponent } from './coins/coins.component';

const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '', component: CoinsComponent },
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
