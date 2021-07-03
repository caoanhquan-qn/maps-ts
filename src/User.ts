import faker from "faker";
import { Mappable } from "./Map";
export class User implements Mappable {
  userName: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.userName = faker.name.firstName();
    this.location = {
      lat: Number(faker.address.latitude()),
      lng: Number(faker.address.longitude()),
    };
  }
  makerContent(): string {
    return `Username: ${this.userName}`;
  }
}
