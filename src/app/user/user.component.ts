import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  loginSuccessMsg = 'Congrats! You have logged in successfully!'
  userRating = 5;
  userGiftStatus: boolean = false;
  userGiftMsg = 'Gift not claimed yet!';
  userComment = 'Sample Message';
  
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
    }
  }

  onComment(event:Event) {
    console.log(event);
    this.userComment = (<HTMLInputElement>event.target).value;
  }
  
}