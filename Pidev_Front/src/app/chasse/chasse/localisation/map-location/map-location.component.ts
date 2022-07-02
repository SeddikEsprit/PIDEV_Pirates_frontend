import { Component, OnInit } from '@angular/core';
import {Loader} from "@googlemaps/js-api-loader";
import {ViewChild,ElementRef} from "@angular/core";
import {ServiceLocalisationService} from "../service/service-localisation.service";

import {map} from "rxjs";

@Component({
  selector: 'app-map-location',
  templateUrl: './map-location.component.html',
  styleUrls: ['./map-location.component.css']
})
export class MapLocationComponent implements OnInit {
title="google-maps"
 lat:any
  lng:any
markers:any=[]
private map!: google.maps.Map
// document!:any
  constructor(private serviceLocation:ServiceLocalisationService) { }

  ngOnInit(): void {

  let loader=new Loader({
    apiKey:'AIzaSyCfCuqJE-1P0s6TNVmj7NvFOkoyksvLMVM'
  })
    loader.load().then(()=>{
      const location={
        lat:35.167965,
        lng:9.167965
      }
      // @ts-ignore
      map=new google.maps.Map(document.getElementById("map"), {
        center: location,
        zoom: 6
      })
      var marker=new google.maps.Marker({
        position:location,
        map: this.map,
        icon:"https://img.icons8.com/nolan/2x/marker.png"
      })
  })
  }



}
