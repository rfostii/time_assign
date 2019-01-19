
/*
Integration for Google Maps in the django admin.

How it works:

You have an address field on the page.
Enter an address and an on change event will update the map
with the address. A marker will be placed at the address.
If the user needs to move the marker, they can and the geolocation
field will be updated.

Only one marker will remain present on the map at a time.

This script expects:

<input type="text" name="address" id="id_address" />
<input type="text" name="geolocation" id="id_geolocation" />

<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>

*/

function googleMapAdmin() {

    var autocomplete;
    var geocoder = new google.maps.Geocoder();
    var map;
    var marker;    
    var lonId = 'id_longitude';
    var latId = 'id_latitude';
    var addressId = 'id_address';
    var houseId = 'id_house_number';
    var streetId = 'id_street';
    var cityId = 'id_city';
    var regionId = 'id_region';
    var countryId = 'id_country';

    var self = {
        initialize: function() {
            var lat = 0;
            var lng = 0;
            var zoom = 2;
            // set up initial map to be world view. also, add change
            // event so changing address will update the map
            var existinglocation = self.getExistingLocation();

            if (existinglocation) {
                lat = existinglocation[0];
                lng = existinglocation[1];
                zoom = 18;
            }

            var latlng = new google.maps.LatLng(lat,lng);
            var myOptions = {
              zoom: zoom,
              center: latlng,
              mapTypeId: self.getMapType()
            };
            map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
            if (existinglocation) {
                self.setMarker(latlng);
            }

            autocomplete = new google.maps.places.Autocomplete(
                /** @type {!HTMLInputElement} */(document.getElementById(addressId)),
                {types: ['geocode']});

            // this only triggers on enter, or if a suggested location is chosen
            // todo: if a user doesn't choose a suggestion and presses tab, the map doesn't update
            autocomplete.addListener("place_changed", self.codeAddress);

            // don't make enter submit the form, let it just trigger the place_changed event
            // which triggers the map update & geocode
            $("#" + addressId).keydown(function (e) {
                if (e.keyCode == 13) {  // enter key
                    e.preventDefault();
                    return false;
                }
            });
        },

        getMapType : function() {
            // https://developers.google.com/maps/documentation/javascript/maptypes
            var geolocation = document.getElementById(addressId);
            var allowedType = ['roadmap', 'satellite', 'hybrid', 'terrain'];
            var mapType = geolocation.getAttribute('data-map-type');

            if (mapType && -1 !== allowedType.indexOf(mapType)) {
                return mapType;
            }

            return google.maps.MapTypeId.HYBRID;
        },

        getExistingLocation: function() {
            var lat = document.getElementById(latId).value;
            var lon = document.getElementById(lonId).value;
            if (lat && lon) {
                return [lat, lon];
            }
        },

        codeAddress: function() {
            var place = autocomplete.getPlace();

            if(place.geometry !== undefined) {
                self.updateWithCoordinates(place.geometry.location);
                self.updateAddressFields(place.address_components);
            }
            else {
                geocoder.geocode({'address': place.name}, function(results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        var latlng = results[0].geometry.location;
                        self.updateWithCoordinates(latlng);
                    } else {
                        alert("Geocode was not successful for the following reason: " + status);
                    }
                });
            }
        },

        updateWithCoordinates: function(latlng) {
            map.setCenter(latlng);
            map.setZoom(18);
            self.setMarker(latlng);
            self.updateGeolocation(latlng);
        },

        setMarker: function(latlng) {
            if (marker) {
                self.updateMarker(latlng);
            } else {
                self.addMarker({'latlng': latlng, 'draggable': true});
            }
        },

        addMarker: function(Options) {
            marker = new google.maps.Marker({
                map: map,
                position: Options.latlng
            });

            var draggable = Options.draggable || false;
            if (draggable) {
                self.addMarkerDrag(marker);
            }
        },

        addMarkerDrag: function() {
            marker.setDraggable(true);
            google.maps.event.addListener(marker, 'dragend', function(new_location) {
                self.updateGeolocation(new_location.latLng);
            });
        },

        updateMarker: function(latlng) {
            marker.setPosition(latlng);
        },

        updateGeolocation: function(latlng) {            
            $("#" + latId).val(latlng.lat()).trigger('change');
            $("#" + lonId).val(latlng.lng()).trigger('change');
        },

        updateAddressFields: function(results) {
            var storableLocation = {};

            for (var i = 0; i < results.length; i++) {
                var component = results[i];

                if(component.types.includes('street_number')) {
                    storableLocation.house = component.long_name;
                }
                else if(component.types.includes('route')) {
                    storableLocation.street = component.long_name;
                }
                else if(component.types.includes('sublocality') || component.types.includes('locality')) {
                    storableLocation.city = component.long_name;
                }
                else if (component.types.includes('administrative_area_level_1')) {
                    storableLocation.region = component.short_name;
                }
                else if (component.types.includes('country')) {
                    storableLocation.country = component.long_name;                    
                }
            }

            $("#" + houseId).val(storableLocation.house).trigger('change');
            $("#" + streetId).val(storableLocation.street).trigger('change');
            $("#" + cityId).val(storableLocation.city).trigger('change');
            $("#" + regionId).val(storableLocation.region).trigger('change');
            $("#" + countryId).val(storableLocation.country).trigger('change');
        }
    };

    return self;
}

$(document).ready(function() {
    var googlemap = googleMapAdmin();
    googlemap.initialize();
});
