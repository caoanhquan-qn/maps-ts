export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  makerContent(): string;
}
export class Map {
  private googleMap: google.maps.Map;
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 2,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }
  addMaker(mappable: Mappable): void {
    const maker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
    maker.addListener("click", () => {
      const contentString = `${mappable.makerContent()}, lat: ${maker
        .getPosition()
        .lat()}, lng: ${maker.getPosition().lng()}`;

      const infowindow = new google.maps.InfoWindow({
        content: contentString,
      });
      infowindow.open({
        anchor: maker,
        map: this.googleMap,
        shouldFocus: false,
      });
    });
  }
}
