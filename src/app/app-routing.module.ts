import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*ImportComponents*/
import { RegistrationComponent } from './components/registration/registration.component';

/* Router*/
const appRoutes: Routes = [
    { path: '', redirectTo: 'Registration', pathMatch: 'full' },
    { path: 'Registration', component: RegistrationComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
