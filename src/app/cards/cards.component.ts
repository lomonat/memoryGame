/*
*  the images are token from https://www.pexels.com/royalty-free-images/
*  licensed under the CC0 Creative Commons
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
 public imgArr = [];
 public matchingPairs = [];
 public flag = false;
  public newTmp = {};


  ngOnInit() {
  this.retrieveImg();
  }
  // make an OBject with properties to display and identify the images
  public retrieveImg() {
  let tmp = {};
  let tmp2 = {};


    for (let i = 1; i < 9; i++) {
      tmp = {
        'url': 'assets/img/' + i + '.jpg',
        'opened': false,
        'id': i
      };

      this.newTmp[i] = tmp;
      //cloning object and push 2 times - we need pairs.

      this.imgArr.push(tmp);
      tmp2 = JSON.parse(JSON.stringify(tmp));
      this.imgArr.push(tmp2);


    }
    console.log(this.newTmp);
    this.shuffle(this.imgArr);


    return this.imgArr;
  }

  revealCard(event, imgFlag) {
    console.log(event.target.id, imgFlag);
   // image.opened = !image.opened
    if(!imgFlag) {
      if (this.matchingPairs.length < 2) {
        this.matchingPairs.push(event.target.id);
        console.log("push more", this.matchingPairs);
        if (this.matchingPairs.length == 2) {
          if (this.matchingPairs[0] == this.matchingPairs[1]) {
            console.log("found", this.matchingPairs);
          }
          this.matchingPairs = [];
        }
      }
    }
  }
  //Fisher-Yates (aka Knuth) O(n) Shuffle https://bost.ocks.org/mike/shuffle/
   shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

}
