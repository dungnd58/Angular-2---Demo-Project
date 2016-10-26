"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("angular2/core");
var fruits_service_1 = require("../services/fruits.service");
var MyListComponent = (function () {
    function MyListComponent(_fruitService) {
        this._fruitService = _fruitService;
    }
    MyListComponent.prototype.getContacts = function () {
        var _this = this;
        (this._fruitService.getContacts().then(function (fruits) { return _this.fruits = fruits; }));
    };
    MyListComponent.prototype.ngOnInit = function () {
        this.getContacts();
    };
    MyListComponent = __decorate([
        core_1.Component({
            selector: "my-list",
            template: "List of Fruits<br>\n    <ul>\n        <li *ngFor=\"#list of fruits\">\n            {{list.id}} - {{ list.name }}\n        </li>\n    </ul> ",
            providers: [fruits_service_1.FruitService]
        }), 
        __metadata('design:paramtypes', [fruits_service_1.FruitService])
    ], MyListComponent);
    return MyListComponent;
}());
exports.MyListComponent = MyListComponent;
//# sourceMappingURL=play-component.js.map