import { Component, OnInit, OnDestroy } from '@angular/core';
import { GeoService } from '../services/geo.service';
import { ElementRef, NgZone, NgModule, ViewChild } from '@angular/core';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'] 
})
export class DashboardComponent implements OnInit {

  
    longitude: number;
    latitude: number;
    lat: number;
    lng: number;
    zoom: number;
    address: string;
    name: string;
    searchControl: FormControl;
  
    @ViewChild("search")
    searchElementRef: ElementRef;
  
    markers$;
    subscription: any;
  
    constructor(
      private geo: GeoService, 
      private mapsAPILoader: MapsAPILoader, 
      private ngZone: NgZone
    ) {}
  
    ngOnInit() {
      
      //set google maps defaults
      this.lat = -36.8523902;
      this.lng = 174.6359334;
      this.zoom = 12;
  
      //FormControl creation
      this.searchControl = new FormControl();
  
      //set current position
      this.setCurrentPosition();
  
       //setting current position
       this.markers$ = this.geo.getLocations();
  
      //Autocomplete when typing the place of the technician
      this.mapsAPILoader.load().then(() => {
        let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
          types: ["address"]
        });
        
        autocomplete.addListener("place_changed", () => {
          this.ngZone.run(() => {
  
            //getting the result
            let place: google.maps.places.PlaceResult = autocomplete.getPlace();
  
            //to verify result
            if (place.geometry === undefined || place.geometry === null) {
              return;
            }
  
             //set latitude, longitude and zoom
             this.lat = place.geometry.location.lat();
             this.lng = place.geometry.location.lng();
             this.zoom = 18;
            }); 
          });  
        });
      }
  
        private setCurrentPosition() {
          if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
              this.latitude = position.coords.latitude;
              this.longitude = position.coords.longitude;
              this.zoom = 8;
            });
          }         
    }
    
  }