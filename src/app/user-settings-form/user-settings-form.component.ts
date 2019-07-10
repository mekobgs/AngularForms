import { userSettings } from '../data/user-settings';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSettings: userSettings = {
    name: 'Elmer',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    notes: 'here are some notes....'
  }

  ///Copying original data
  userSettings: userSettings = { ...this.originalUserSettings  }
  constructor() { }

  ngOnInit() {
  }

}
