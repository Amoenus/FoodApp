import { Component, OnInit } from '@angular/core';
import { LunchService } from 'app/services/lunch/lunch.service';
import { UserLunch } from 'app/models/userLunch/userLunch';
import { DateModel } from 'ng2-datepicker';
import * as moment from 'moment';
import { Moment } from "moment";
import * as _ from "lodash";


const vmDateFormat: string = "DD.MM.YYYY";
const vsDateFormat: string = "YYYY-MM-DD";

@Component({
  selector: 'app-edit-lunch',
  templateUrl: './edit-lunch.component.html',
  styleUrls: ['./edit-lunch.component.css'],
  providers: [LunchService]
})
export class EditLunchComponent implements OnInit {

  constructor(private userLunchService:LunchService) { }
  
  lunch:UserLunch;

  ngOnInit() {
    let observer = this.userLunchService.get();   
    observer.subscribe(value =>this.map(value));
  }

  map(value:UserLunch){
      this.lunch = value;
      this.lunch.lunchDate = moment(value.lunchDate,vsDateFormat).format(vmDateFormat);
  }

  save(){

  }

  itemChecked(val, selectedItem, section){
     console.log(selectedItem, section);
     _.each(section.items, function(item, idx){
      if (item.menuItemId!=selectedItem.menuItemId){
        item.checked = false;
      }
    });
  }

}