import { ApplicationRef, CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule, TranslateService, TranslateStore } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateCustomLoaderClass } from './translate-custom-loader.class';
import { ContentComponent } from './components/content/content.component';


interface componentsList {
  tag: string;
  component: any;
}
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateCustomLoaderClass(http);
}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    TranslateService
  ],
})
export class AppModule implements DoBootstrap{
  /**
   * install angular element :  npm i @angular/elements --save
   */
  componentsList: componentsList[] = [
    { tag: 'app-header', component: HeaderComponent}
  ]

  constructor(private injector: Injector){}

  ngDoBootstrap(appRef: ApplicationRef){
    appRef.bootstrap(AppComponent);
    // this.componentsList.forEach(item => {
    //   this.declarateFactoryComponent(item, appRef)
    // })
  }

  // declarateFactoryComponent(componentData: any, appRef: ApplicationRef) {
  //   appRef.bootstrap(componentData.component)
  //   const item = createCustomElement(componentData.component, {injector: this.injector})
  //   customElements.define(componentData.tag, item)
  // }
}
