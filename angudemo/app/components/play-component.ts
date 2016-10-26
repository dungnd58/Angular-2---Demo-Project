import {Component} from "angular2/core";
import {OnInit} from "angular2/core";
import {FruitService} from "../services/fruits.service";
import {Fruits} from "../ts/fruits";

@Component({
    selector: "my-list",
    template: `List of Fruits<br>
    <ul>
        <li *ngFor="#list of fruits">
            {{list.id}} - {{ list.name }}
        </li>
    </ul> `,
    providers: [FruitService]
})

export class MyListComponent implements OnInit {
    public fruits : Fruits[];

    constructor(private _fruitService: FruitService) {}

    getContacts(){(
        this._fruitService.getContacts().then((fruits: Fruits[]) => this.fruits = fruits)
    )}

    ngOnInit() : any {
        this.getContacts();
    }
}