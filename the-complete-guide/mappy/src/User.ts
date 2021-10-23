import faker from "faker";
import { Mappable } from "./Map";

export class User implements Mappable {
    firstName: string;
    lastName: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.location = {
            lat: +faker.address.latitude(),
            lng: +faker.address.longitude(),
        };
    }

    showContent(): string {
        return `
            <h1>User: ${this.firstName} ${this.lastName}</h1>
        `;
    }
}
