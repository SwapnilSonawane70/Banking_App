import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountListComponent } from './account-list/account-list.component';
//import { CreateAccountComponent } from './create-account/crate-account.component';
import { CreateAccountComponent } from './create-account/create-account.component'; 
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { AcconutDetailsComponent } from './acconut-details/acconut-details.component';


const routes: Routes = [
  { path: 'accounts', component: AccountListComponent },
  { path: 'create-account', component: CreateAccountComponent }, 
  { path: 'deposit/:id',component:DepositComponent},
  { path:  '',redirectTo:'accounts',pathMatch:'full'},
  { path: 'withdraw/:id',component:WithdrawComponent},
  { path: 'acconut-details/:id',component:AcconutDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
