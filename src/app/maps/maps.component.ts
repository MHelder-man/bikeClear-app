import {Component, Input, OnInit} from '@angular/core';
import {map, Observable} from "rxjs";
import {MapDirectionsService} from "@angular/google-maps";

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']


})
export class MapsComponent implements OnInit {

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })

  }
  zoom = 16
  // @ts-ignore
  center: google.maps.LatLngLiteral = this.ngOnInit();
  options: google.maps.MapOptions = {
    zoomControl: false,
    clickableIcons: true,
    disableDefaultUI: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  }



  readonly directionsResults$: Observable<google.maps.DirectionsResult|undefined>;


  constructor(mapDirectionsService: MapDirectionsService) {
    const request: google.maps.DirectionsRequest = {
      destination: {lat: 12, lng: 4},
      origin: this.center,
      travelMode: google.maps.TravelMode.BICYCLING
    };
    this.directionsResults$ = mapDirectionsService.route(request).pipe(map(response => response.result));
  }

}

