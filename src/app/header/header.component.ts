<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component, OnInit, Output,EventEmitter, ElementRef } from '@angular/core';
import { OpenDropdownDirective } from '../open-dropdown.directive';

>>>>>>> origin/ShopAndCookFinal

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }
=======
  @Output() featureSelected = new EventEmitter<String>();

  constructor() {
   
   }
>>>>>>> origin/ShopAndCookFinal

  ngOnInit(): void {
  }

<<<<<<< HEAD
=======
  onSelect(feature:string){
    this.featureSelected.emit(feature);
  }

>>>>>>> origin/ShopAndCookFinal
}
