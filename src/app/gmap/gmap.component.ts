import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.component.html',
  styleUrls: ['./gmap.component.css']
})
export class GmapComponent implements OnInit, AfterViewInit {

    private map: any;

    constructor() { }

    alb = { lat: 35.104743, lng: -106.629181 };
    ngOnInit() {

    }
    // this.map = new google.maps.Map(document.getElementById('map'), {
    //     zoom: 4,
    //     center: this.alb
    // });
    mapReady() {
        this.map = new google.maps.Map(document.getElementById('mappp'), {
            zoom: 7,
            center: this.alb
        });
    }
    ngAfterViewInit() {
        (<any>window).googleMapsReady=this.mapReady.bind(this);
        var script = document.createElement("script");
        script.type = "text/javascript";
        document.getElementsByTagName("head")[0].appendChild(script);
        script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyB-NMWUNyZMe8i-1Twvn8UVXByuaZuGqFw&callback=googleMapsReady";
    }
}
