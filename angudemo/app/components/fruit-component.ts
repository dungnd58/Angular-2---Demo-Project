import {Component} from 'angular2/core';
import {MyListComponent}  from './play-component';

@Component({
    selector: 'my-app',
    template: '<my-list></my-list>',
    directives: [MyListComponent]
})

export class AppComponent {}