import faker from "faker";
import { Mappable } from "./Map";
export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: Number(faker.address.latitude()),
      lng: Number(faker.address.longitude()),
    };
  }
  makerContent(): string {
    return `Company name: ${this.companyName}, Catchphrase: ${this.catchPhrase}`;
  }
}
