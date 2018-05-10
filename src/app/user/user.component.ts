import { Component, OnInit } from '@angular/core';
import { Gift } from '../gift/gift.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  loginSuccessMsg = 'Congrats! You have logged in successfully!'
  userRating = 5;
  userGiftStatus: boolean = false;
  userGiftClaimed: boolean = false;
  userGiftMsg = 'Gift not claimed yet!';
  userComment = 'Sample Message';
  userGiftName = '';

  gifts: Gift[] = [
    // { giftName: 'Mr. Nice' },
    // { giftName: 'Narco' }
  ];  
  
  constructor() {
    this.updateUserGiftStatus();
  }

  ngOnInit() {
  }

  getUserRating() {
    return this.userRating;
  }

  updateUserGiftStatus() {
    if (this.userRating == 5) {
      this.userGiftStatus = true;
    }
  }

  onClaimGift() {
    if (this.userGiftStatus) {
      this.userGiftMsg = "Gift claimed. Thanks!";
      this.userGiftClaimed = true;
    }
  }

  getStatusTextColor() {
    return this.userGiftClaimed ? 'green' : 'red'; 
  }

  onComment(event:Event) {
    console.log(event);
    this.userComment = (<HTMLInputElement>event.target).value;
  }

  onAddGift() {
    if (this.userGiftName == '') {
      this.userGiftMsg='Gift name cannot be blank';
      return;
    }
    var gift = new Gift();
    gift.giftName = 'test';
    this.gifts.push(gift);
  }
  
}