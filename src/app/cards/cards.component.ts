/*
*  the images are token from https://www.pexels.com/royalty-free-images/
*  licensed under the CC0 Creative Commons
*/

import { Component, OnInit, AfterContentInit, ChangeDetectionStrategy} from '@angular/core';

@Component({
  // https://angular-2-training-book.rangle.io/handout/change-detection/change_detection_strategy_onpush.html
  // cgeck new raference to data
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
  this.retrieveImg(1,8,0);
  this.retrieveImg(this.arrayOfObject.length+1,this.arrayOfObject.length*2,this.arrayOfObject.length);
  }
  // make an OBject with properties to display and identify the images
  public retrieveImg(index, length, helper) {
  let tmp = {};

    for (let i = index; i <= length; i++) {
      tmp = {
        'url': 'assets/img/' + (i-helper) + '.jpg',
        'opened': false,
        'id': i
      };

      this.newTmp[i] = tmp;
      this.arrayOfObject.push(tmp);
    }
  }


  revealCard(event) {
    if(!(this.newTmp[event.target.id].opened)) {
      if (this.matchingPairs.length < 2) {
        this.matchingPairs.push(event.target.id);
        console.log("push more", this.matchingPairs);
        this.arrayOfObject[(event.target.id-1)].opened = true;
        console.log(this.arrayOfObject);
        console.log(this.newTmp);
        if (this.matchingPairs.length == 2) {
          if (this.newTmp[this.matchingPairs[0]].url == this.newTmp[this.matchingPairs[1]].url ) {
            console.log("found", this.matchingPairs);
            this.matchingPairs = [];
          } else {
            setTimeout(()=>{
              console.log(this.arrayOfObject);
              for (let i = 0; i < this.matchingPairs.length; i ++ ) {
                  this.arrayOfObject[(this.matchingPairs[i]-1)].opened = false;
              }
              console.log(this.arrayOfObject);
              this.matchingPairs = [];

            }, 2000);
          }
        }
      }
    }
    return this.newTmp
  }
}
