import { userSettings } from '../data/user-settings';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSettings: userSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null
  }

  ///Copying original data
  userSettings: userSettings = { ...this.originalUserSettings  }
  constructor() { }

  ngOnInit() {
  }

}
