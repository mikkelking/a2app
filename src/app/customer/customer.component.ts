import { Component, OnInit } from '@angular/core';
import { NamePipe} from '../name-pipe';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdButton} from '@angular2-material/button';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import {MdInput} from '@angular2-material/input';
import {MdCheckbox} from '@angular2-material/checkbox';
import {MdRadioButton, MdRadioGroup, MdRadioDispatcher} from '@angular2-material/radio';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';

@Component({
  moduleId: module.id,
  selector: 'app-customer',
  templateUrl: 'customer.component.html',
  styleUrls: ['customer.component.css'],
 directives: [
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MdToolbar,
    MdButton,
    MdInput,
    MdCheckbox,
    MdRadioGroup,
    MdRadioButton,
    MdIcon
  ],
  providers: [MdIconRegistry, MdRadioDispatcher],
  pipes: [NamePipe]
})
export class CustomerComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  regex = true;
  customer = {
  	contact: 'Mike'
  	,people: [
  		{name: 'Sean', age: 30, avatar: "Captain-America"}
	  	,{name: 'Yaw', age: 2, avatar: "Thor"}
	  	,{name: 'Lucy', age: 55, avatar: "Black-Widow"}
	  	,{name: 'Eric', age: 25, avatar: "Hulk"}
      ,{name: 'Rory', age: 75, avatar: "War-Machine"}
      ,{name: 'Hayley', age: 75, avatar: "Giant-Man"}
  	]
  };

  newName = "Mike";
  newAvatar = "Hulk";
// NB No error checking done here
  savePerson = function() {
/*    customer.people.push({name: newName, avatar: newAvatar});
    newName = '';
    newAvatar = '';
    formShowing = false;
    */
  };

  formShowing: boolean = false;
  views: Object[] = [
    {
      name: "My Account",
      description: "Edit my account information",
      icon: "assignment ind"
    },
    {
      name: "Orders",
      description: "Browse orders",
      icon: "orders"
    }
  ];
}

