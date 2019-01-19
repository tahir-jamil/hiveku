import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { RouterExtensions } from 'nativescript-angular/router';
import * as platformModule from 'tns-core-modules/platform';
import { Scroll } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  moduleId: module.id
})
export class SigninComponent implements OnInit {

  constructor(private _page: Page, private routerExtensions: RouterExtensions) { }

  ngOnInit() {
    this._page.actionBarHidden = true;
  }

}




