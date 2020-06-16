import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ComponentA } from './component-A/component-a.component';
import { ComponentB } from './component-B/component-b.component';
import { BridgeService } from './services/bridge-service.service';
import { RouteComponentA } from './route-component-a/route-component-a.component';
import { RouteComponentB } from './route-component-b/route-component-b.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ComponentA,
    ComponentB,
    RouteComponentA,
    RouteComponentB
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [BridgeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
