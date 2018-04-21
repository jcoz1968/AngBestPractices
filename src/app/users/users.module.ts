import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './../shared/shared.module';
import { RegisterComponent } from './register.component';
import { SignInComponent } from './sign-in.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'register', component: RegisterComponent, },
      { path: 'sign-in', component: SignInComponent, }
    ])
  ],
  exports: [ SharedModule ],
  declarations: [
    RegisterComponent,
    SignInComponent
  ],
  providers: [ ],
  bootstrap: []
})
export class UsersModule { }
