import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule here
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AccountListComponent } from './account-list/account-list.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { DepositComponent } from './deposit/deposit.component'; // Ensure this component is declared
import { WithdrawComponent } from './withdraw/withdraw.component'; // Ensure this component is declared

import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common'; // Import CommonModule

@NgModule({
  declarations: [
    AppComponent,
    AccountListComponent,
    CreateAccountComponent,
    DepositComponent,
    WithdrawComponent
    // CommonModule should not be listed here
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule // Include CommonModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
