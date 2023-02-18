import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ViewsComponent } from './components/views/views.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CounterComponent } from './components/counter/counter.component';
import { LifecyclehooksComponent } from './components/lifecyclehooks/lifecyclehooks.component';
import { NghooksComponent } from './components/nghooks/nghooks.component';
import { NgOnInitOnDestroyComponent } from './components/ng-on-init-on-destroy/ng-on-init-on-destroy.component';
import { FilterPipe } from './pipes/filter.pipe';
import { DemoPipe } from './pipes/demo.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { CounterService } from './services/counter.service';
import { HtmlbasicsComponent } from './components/htmlbasics/htmlbasics.component';
import { HooksComponent } from './components/hooks/hooks.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    NotFoundComponent,
    ViewsComponent,
    HeaderComponent,
    FooterComponent,
    CounterComponent,
    LifecyclehooksComponent,
    NghooksComponent,
    NgOnInitOnDestroyComponent,
    FilterPipe,
    DemoPipe,
    HighlightDirective,
    HtmlbasicsComponent,
    HooksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [HttpClientModule, CounterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
