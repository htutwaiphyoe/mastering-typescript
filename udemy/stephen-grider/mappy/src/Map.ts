import {} from "@types/google.maps";

export interface Mappable {
    location: {
        lat: number;
        lng: number;
    };

    showContent(): string;
}

export class Map {
    private googleMap: google.maps.Map;

    constructor(id: string) {
        this.googleMap = new google.maps.Map(document.getElementById(id), {
            center: {
                lat: 0,
                lng: 0,
            },
            zoom: 2,
        });
    }

    addMarker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng,
            },
        });

        marker.addListener("click", () => this.showInfoWindow(marker, mappable));
    }

    showInfoWindow(marker: google.maps.Marker, mappable: Mappable): void {
        const infoWindow = new google.maps.InfoWindow({
            content: mappable.showContent(),
        });

        infoWindow.open(this.googleMap, marker);
    }
}
