import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService, TranslateStore } from '@ngx-translate/core';
import { Communication } from 'portail/communication';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'appli';
  constructor(
    private translateService: TranslateService
    ){
      translateService.setDefaultLang('en')
      translateService.use('en')
  }
  ngOnInit() {
    localStorage.setItem('monChat', 'Tom');
  }
}
