/*
*  the images are token from https://www.pexels.com/royalty-free-images/
*  licensed under the CC0 Creative Commons
*
*  The shuffle function is implemented with help of custom pipe in custom-shuffle element (Fisher-Yates shuffle algorithm)
*  Card meatching mechanism is suitable for large datasets, because there will be build a array once at the initializing step
*  In this array there will be the objects, and index of object in array will match the ID of object (with -1 step)
*  the ID will be stored as id of img in template and by clicking on the element the id will be passed to the function and after that
*  the searched card will be accessed on the position ID-1 -> no looping through an array!!!
*  Using the shuffle not as function, but as pipe ( the data will be not mutated, but only its view (represantation in the view)
*  helps to preserve the order of objects in the array
*/

import { Component, OnInit, AfterContentInit, ChangeDetectionStrategy} from '@angular/core';

@Component({

  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit, AfterContentInit {

  public matchingPairs = [];
  public newTmp = {};
  public arrayOfObject = [];
  public coverImg = 'assets/img/cover.jpg';


  ngOnInit() {
    // By initialization the method will be called twice (every card has a pair)
    //for purpose to have a different IDs and pick the right images the method will be called with different params
    //the method builds array of objects for using it in template

  this.retrieveImg(1,8,0);
  this.retrieveImg(this.arrayOfObject.length+1,this.arrayOfObject.length*2,this.arrayOfObject.length);
  }
  // make an Object with properties to display and identify the images
  public retrieveImg(index, length, helper) {
  let tmp = {};
    for (let i = index; i <= length; i++) {
      tmp = {
        'url': 'assets/img/' + (i-helper) + '.jpg',
        'opened': false,
        'id': i
      };
      this.arrayOfObject.push(tmp);
    }
  }


  revealCard(event) {

    //check if the card wasn't opened
    if(!(this.arrayOfObject[(event.target.id-1)].opened)) {
      //allow to open cards and store the IDs before the amount exceed 2

      if (this.matchingPairs.length < 2) {
        this.matchingPairs.push(event.target.id);

        // if revealed - change "opened" property to true
        this.arrayOfObject[(event.target.id-1)].opened = true;

        // if 2 cards are picked
        if (this.matchingPairs.length == 2) {

          //check the url's
          //if the cards are the same - clean up matchingArray
          if (this.arrayOfObject[(this.matchingPairs[0]-1)].url == this.arrayOfObject[(this.matchingPairs[1]-1)].url ) {
            console.log("found", this.matchingPairs);
            this.matchingPairs = [];

            //if the pair doesn't match - set property "opened" of each of 2 cards card back to false
            //clean up matchingArray
            //do this after 2 seconds
          } else {
            setTimeout(()=>{
              for (let i = 0; i < this.matchingPairs.length; i ++ ) {
                  this.arrayOfObject[(this.matchingPairs[i]-1)].opened = false;
              }
              this.matchingPairs = [];

            }, 2000);
          }
        }
      }
    }
  }
}
