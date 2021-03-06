import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UniHeaderComponent } from './uni-header/uni-header.component';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BookComponent } from './book/book.component';
import { RoomsComponent } from './rooms/rooms.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DateTimePickerComponent } from './date-time-picker/date-time-picker.component';
import { RoomInfoTableComponent } from './room-info-table/room-info-table.component';
import { MapComponent } from './map/map.component';
import { GuestRoomPickerComponent } from './guest-room-picker/guest-room-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    UniHeaderComponent,
    FooterComponent,
    CarouselComponent,
    BookComponent,
    RoomsComponent,
    HomeComponent,
    AboutUsComponent,
    DateTimePickerComponent,
    RoomInfoTableComponent,
    MapComponent,
    GuestRoomPickerComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
