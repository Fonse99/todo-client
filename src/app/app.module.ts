import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { InputComponent } from './components/controls/input/input.component';
import { PictureComponent } from './components/picture/picture.component';
import { HomeComponent } from './pages/home/home.component';
import { ItemComponent } from './components/item/item.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContainerComponent } from './components/container/container.component';
import { NavigationComponent } from './components/controls/navigation/navigation.component';
import { TitlesComponent } from './components/info/titles/titles.component';
import { ListItemsComponent } from './components/info/list-items/list-items.component';
import { ModalComponent } from './components/modal/modal.component';
import { StoreModule } from '@ngrx/store';
import { modalReducer } from './reducers/modal.reducer';
import { logingReducer } from './reducers/login.reducer';
import { CreationReducer } from './reducers/creation.reducer';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InputComponent,
    PictureComponent,
    HomeComponent,
    ItemComponent,
    SidebarComponent,
    ContainerComponent,
    NavigationComponent,
    TitlesComponent,
    ListItemsComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(
      { modal: modalReducer, login: logingReducer, creation: CreationReducer },
      {}
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
