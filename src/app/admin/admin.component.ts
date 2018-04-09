import { Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';
declare var $: any
declare var google: any
declare var Popup: any
let getMapValue = function (target) { }
interface Building {
  price: number
  name: string
  address: string
  city: string
  state: string
  beds: number
  baths: number
  dog: string
  cat: string
  acreage: number
  contact: string
  description: string
  balcony: boolean
  fitness: boolean
  outDourSpace: boolean
  residents: boolean
  swimingPool: boolean
}
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements OnInit {
  constructor(
    private router: Router,
    private ref: ChangeDetectorRef
  ) { }
  locations: any
  _view_mode: string
  building: Building = {
    price: 0,
    name: '',
    address: '',
    city: '',
    state: '',
    beds: 0,
    baths: 0,
    dog: '',
    cat: '',
    acreage: 0,
    contact: '',
    description: '',
    balcony: false,
    fitness: false,
    outDourSpace: false,
    residents: false,
    swimingPool: false
  }
  ngOnInit() {
    let $this = this
    this._view_mode = "list"
    this.locations = [
      {
        "id": 11111,
        "features": [10],
        "max_bedrooms": 3,
        "lat": 40.7631927,
        "lng": -73.9916957,
        "city": "New York",
        "max_bathrooms": 1,
        "image_ids": [218498938, 218498939, 218498940, 218498941, 218498942, 218498943, 218498944, 218498945],
        "state": "NY",
        "min_price": 1100,
        "short_description": "Eat in Kitchen and spacious living room!! Big City! From the Theater District to Times Square Clinton (Hell's Kitchen) has it ALL.",
        "min_bedrooms": 2,
        "min_bathrooms": 2,
        "phone": "(844) 335-5536 ext. 8195",
        "address": "443 W 48th St #1EE",
        "max_price": 3100,
        "dog": true,
        "cat": true,
        "acreage": "300m",
        "balcony": true,
        "fitness": true,
        "outDourSpace": true,
        "residents": true,
        "swimingPool": true,
        "isFocus": false,
        "isVisited": false

      }, {
        "id": 11112,
        "features": null,
        "max_bedrooms": 3,
        "lat": 40.717139,
        "lng": -73.993163,
        "city": "New York",
        "max_bathrooms": 1,
        "image_ids": [218498938, 218498939, 218498940, 218498941, 218498942, 218498943, 218498944, 218498945],
        "state": "NY",
        "min_price": 4100,
        "short_description": "Eat in Kitchen and spacious living room!! Big City! From the Theater District to Times Square Clinton (Hell's Kitchen) has it ALL.",
        "min_bedrooms": 4,
        "min_bathrooms": 3,
        "phone": "(844) 335-5536 ext. 8195",
        "address": "443 W 48th St #1EE",
        "max_price": 9100,
        "dog": false,
        "cat": false,
        "acreage": "600m",
        "balcony": true,
        "fitness": false,
        "outDourSpace": true,
        "residents": true,
        "swimingPool": true,
        "isFocus": false,
        "isVisited": false
      }, {
        "id": 11113,
        "features": [10],
        "max_bedrooms": 3,
        "lat": 40.709236,
        "lng": -74.0064122,
        "city": "New York",
        "max_bathrooms": 1,
        "image_ids": [218498938, 218498939, 218498940, 218498941, 218498942, 218498943, 218498944, 218498945],
        "state": "NY",
        "min_price": 100,
        "short_description": "Eat in Kitchen and spacious living room!! Big City! From the Theater District to Times Square Clinton (Hell's Kitchen) has it ALL.",
        "min_bedrooms": 4,
        "min_bathrooms": 2,
        "phone": "(844) 335-5536 ext. 8195",
        "address": "443 W 48th St #1EE",
        "max_price": 9100,
        "dog": true,
        "cat": false,
        "acreage": "400m",
        "balcony": true,
        "fitness": true,
        "outDourSpace": true,
        "residents": true,
        "swimingPool": true,
        "isFocus": false,
        "isVisited": false
      }, {
        "id": 11114,
        "features": [10],
        "max_bedrooms": 3,
        "lat": 40.7185829,
        "lng": -73.9833967,
        "city": "New York",
        "max_bathrooms": 1,
        "image_ids": [218498938, 218498939, 218498940, 218498941, 218498942, 218498943, 218498944, 218498945],
        "state": "NY",
        "min_price": 2100,
        "short_description": "Eat in Kitchen and spacious living room!! Big City! From the Theater District to Times Square Clinton (Hell's Kitchen) has it ALL.",
        "min_bedrooms": 3,
        "min_bathrooms": 1,
        "phone": "(844) 335-5536 ext. 8195",
        "address": "443 W 48th St #1EE",
        "max_price": 6100,
        "dog": true,
        "cat": true,
        "acreage": "100m",
        "balcony": false,
        "fitness": true,
        "outDourSpace": false,
        "residents": false,
        "swimingPool": true,
        "isFocus": false,
        "isVisited": false
      }, {
        "id": 11117,
        "features": null,
        "max_bedrooms": 3,
        "lat": 40.8038535,
        "lng": -73.9573467,
        "city": "New York",
        "max_bathrooms": 1,
        "image_ids": [218498938, 218498939, 218498940, 218498941, 218498942, 218498943, 218498944, 218498945],
        "state": "NY",
        "min_price": 2100,
        "short_description": "Eat in Kitchen and spacious living room!! Big City! From the Theater District to Times Square Clinton (Hell's Kitchen) has it ALL.",
        "min_bedrooms": 3,
        "min_bathrooms": 1,
        "phone": "(844) 335-5536 ext. 8195",
        "address": "443 W 48th St #1EE",
        "max_price": 3100,
        "dog": true,
        "cat": false,
        "acreage": "300m",
        "balcony": true,
        "fitness": true,
        "outDourSpace": true,
        "residents": true,
        "swimingPool": true,
        "isFocus": false,
        "isVisited": false
      }, {
        "id": 11118,
        "features": [10],
        "max_bedrooms": 3,
        "lat": 40.7992414,
        "lng": -73.9603026,
        "city": "New York",
        "max_bathrooms": 1,
        "image_ids": [218498938, 218498939, 218498940, 218498941, 218498942, 218498943, 218498944, 218498945],
        "state": "NY",
        "min_price": 6100,
        "short_description": "Eat in Kitchen and spacious living room!! Big City! From the Theater District to Times Square Clinton (Hell's Kitchen) has it ALL.",
        "min_bedrooms": 3,
        "min_bathrooms": 1,
        "phone": "(844) 335-5536 ext. 8195",
        "address": "443 W 48th St #1EE",
        "max_price": 8100,
        "dog": false,
        "cat": true,
        "acreage": "200m",
        "balcony": true,
        "fitness": true,
        "outDourSpace": true,
        "residents": true,
        "swimingPool": true,
        "isFocus": false,
        "isVisited": false
      }, {
        "id": 11119,
        "features": [10],
        "max_bedrooms": 3,
        "lat": 40.7666689,
        "lng": -73.9561599,
        "city": "New York",
        "max_bathrooms": 1,
        "image_ids": [218498938, 218498939, 218498940, 218498941, 218498942, 218498943, 218498944, 218498945],
        "state": "NY",
        "min_price": 1100,
        "short_description": "Eat in Kitchen and spacious living room!! Big City! From the Theater District to Times Square Clinton (Hell's Kitchen) has it ALL.",
        "min_bedrooms": 3,
        "min_bathrooms": 1,
        "phone": "(844) 335-5536 ext. 8195",
        "address": "443 W 48th St #1EE",
        "max_price": 8100,
        "dog": true,
        "cat": false,
        "acreage": "300m",
        "balcony": true,
        "fitness": true,
        "outDourSpace": false,
        "residents": true,
        "swimingPool": false,
        "isFocus": false,
        "isVisited": false
      }, {
        "id": 11121,
        "features": null,
        "max_bedrooms": 3,
        "lat": 40.7666689,
        "lng": -73.9561599,
        "city": "New York",
        "max_bathrooms": 1,
        "image_ids": [218498938, 218498939, 218498940, 218498941, 218498942, 218498943, 218498944, 218498945],
        "state": "NY",
        "min_price": 4100,
        "short_description": "Eat in Kitchen and spacious living room!! Big City! From the Theater District to Times Square Clinton (Hell's Kitchen) has it ALL.",
        "min_bedrooms": 3,
        "min_bathrooms": 1,
        "phone": "(844) 335-5536 ext. 8195",
        "address": "443 W 48th St #1EE",
        "max_price": 4100,
        "dog": true,
        "cat": false,
        "acreage": "300m",
        "balcony": true,
        "fitness": true,
        "outDourSpace": true,
        "residents": true,
        "swimingPool": true,
        "isFocus": false,
        "isVisited": false
      }, {
        "id": 11122,
        "features": [10],
        "max_bedrooms": 3,
        "lat": 40.7472435,
        "lng": -73.9732491,
        "city": "New York",
        "max_bathrooms": 1,
        "image_ids": [218498938, 218498939, 218498940, 218498941, 218498942, 218498943, 218498944, 218498945],
        "state": "NY",
        "min_price": 4100,
        "short_description": "Eat in Kitchen and spacious living room!! Big City! From the Theater District to Times Square Clinton (Hell's Kitchen) has it ALL.",
        "min_bedrooms": 3,
        "min_bathrooms": 1,
        "phone": "(844) 335-5536 ext. 8195",
        "address": "443 W 48th St #1EE",
        "max_price": 4100,
        "dog": true,
        "cat": false,
        "acreage": "300m",
        "balcony": true,
        "fitness": true,
        "outDourSpace": true,
        "residents": true,
        "swimingPool": true,
        "isFocus": false,
        "isVisited": false
      },
    ];
    this.initMap()
  }
  initMap() {
    let $this = this
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: new google.maps.LatLng(40.741325940022705, -73.76791967555312),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    var infowindow = new google.maps.InfoWindow();
    var marker, i;
    var iconURL = './assets/images/';
    var icons = {
      normal: {
        url: iconURL + 'marker_.svg', // url
        scaledSize: new google.maps.Size(40, 40), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
      },
      hover: {
        url: iconURL + 'marker_.svg', // url
        scaledSize: new google.maps.Size(40, 60), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 15) // anchor
      },
      focus: {
        url: iconURL + 'marker_focus.svg', // url
        scaledSize: new google.maps.Size(40, 60), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 15) // anchor
      },
      visited: {
        url: iconURL + 'marker_active.svg', // url
        scaledSize: new google.maps.Size(40, 40), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
      },
    };
    //---style popup----
    for (i = 0; i < this.locations.length; i++) {
      // marker = new google.maps.Marker({
      //   position: new google.maps.LatLng(this.locations[i].lat, this.locations[i].lng),
      //   label: this.locations[i].min_price.toString(),
      //   icon: icons['normal'],
      //   map: map
      // });
      var contentString = '<div class="marker-content"><div class="inform-click" data-index="' + i + '" id="' + this.locations[i].id + '"></div>' + '<p>' + this.locations[i].min_price.toString() + '</p>' + '</div>';

      var infowindow = new google.maps.InfoWindow({
        content: contentString,
        position: new google.maps.LatLng(this.locations[i].lat, this.locations[i].lng),
      });
      infowindow.open(map, marker);
      google.maps.event.addListener(infowindow, 'domready', function (e) {
        $('.gm-style-iw').parent().addClass('marker-pop')
        setTimeout(() => {
          $('.marker-pop:not(.done)').each(function () {
            $(this).find('>div:first-child').remove()
            $(this).find('>div:last-child').remove()
            let bHeight = $(this).find('.gm-style-iw').width()
            $(this).find('.gm-style-iw >div').height(bHeight - 3)
            $(this).find('.gm-style-iw >div:last-child').remove()
            $(this).find('.gm-style-iw >div').width(bHeight)
            $(this).addClass('done')         
          })
          $('.inform-click').off('click').on('click', function () {
            $('.done').removeClass('active')
            console.log($(this))
            $(this).parents('.done:first').addClass('visited active')
            var id = $(this).attr('id'),
              index = $(this).attr('data-index');
            $this.getMapDetail(id)
            $this.setMapDetail()
            $this.locations[index].isFocus = true
            $this.locations[index].isVisited = true
          })
        }, 400);

      });

      google.maps.event.addListener(infowindow, 'click', (function (infowindow, i) {
        return function () {
          //set item focus
          console.log('click')
          $this.getMapDetail($this.locations[i].id)
          $this.locations[i].isFocus = true
          $this.locations[i].isVisited = true
          // marker.setIcon(icons['visited']);
          $this.setMapDetail()
        }
      })(infowindow, i));
      // google.maps.event.addListener(marker, 'click', (function (marker, i) {
      //   return function () {
      //     //set item focus
      //     $this.getMapDetail($this.locations[i].id)
      //     $this.locations[i].isFocus = true
      //     $this.locations[i].isVisited = true
      //     marker.setIcon(icons['visited']);
      //     $this.setMapDetail()
      //   }
      // })(marker, i));
      // google.maps.event.addListener(marker, 'mouseover', (function (marker, i) {
      //   return function () {
      //     if (!$this.locations[i].isFocus) {
      //       marker.setIcon(icons['hover']);
      //       console.log('hover')
      //     }
      //   }
      // })(marker, i));
      // google.maps.event.addListener(marker, 'mouseout', (function (marker, i) {
      //   return function () {
      //     if (!$this.locations[i].isFocus) {
      //       marker.setIcon(icons['normal']);
      //       console.log('hover out')
      //     }
      //   }
      // })(marker, i));
    }
    // setTimeout(() => {
    //   console.log('love')
    //   $('.gm-style-iw').parent().addClass('marker-pop')
    // }, 1000);
  }
  backToList() {
    this._view_mode = "list"
    this.ref.detectChanges();
  }
  setMapDetail() {
    this._view_mode = "detail"
    this.ref.detectChanges();
  }
  getMapDetail(id) {
    var resultConvert = this.locations.filter(function (obj) {
      return obj.id == id;
    });
    var result = resultConvert[0]
    //set data
    this.building.price = result.min_price
    this.building.name = result.agent_name
    this.building.address = result.address
    this.building.city = result.city
    this.building.state = result.state
    this.building.beds = result.max_bedrooms
    this.building.baths = result.max_bathrooms
    this.building.dog = (result.dog) ? 'YES' : 'NO';
    this.building.cat = (result.cat) ? 'YES' : 'NO';
    this.building.acreage = result.acreage
    this.building.contact = result.phone
    this.building.description = result.short_description
    this.building.balcony = result.balcony
    this.building.fitness = result.fitness
    this.building.outDourSpace = result.outDourSpace
    this.building.residents = result.residents
    this.building.swimingPool = result.swimingPool
    console.log(this.building)
  }
}
