import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html',
  styleUrls: ['./gift.component.css']
})

export class Gift {
  @Input('giftElement') element: {giftName: string};
}
