import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { ContactComponent } from "../contact/contact.component";
import { DealsComponent } from "../deals/deals.component";
import { NotificationsComponent } from "../notifications/notifications.component";
import { CalenderComponent } from "../calender/calender.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent, children: [
            { path: '', component: ContactComponent },
            { path: 'deals', component: DealsComponent },
            { path: 'notifications', component: NotificationsComponent },
            { path: 'calender', component: CalenderComponent }
        ]
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class HomeRoutingModule { }