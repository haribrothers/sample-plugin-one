import { Component, OnInit } from "@angular/core";
import {MyPlugin} from "nativescript-my-plugin"
@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor() {
        
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        let myPlugin = new MyPlugin();
        // console.log(myPlugin.getStatus());
    }
}
