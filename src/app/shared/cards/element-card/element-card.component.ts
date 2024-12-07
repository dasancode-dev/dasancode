import { Component, Input } from '@angular/core';
import { CardElement } from './card.model';
@Component({
  selector: 'app-element-card',
  standalone: true,
  imports: [],
  templateUrl: './element-card.component.html',
  styleUrl: './element-card.component.css'
})
export class ElementCardComponent {
  @Input() element: CardElement={
    'title': '',
    'description':'',
    'altDescription':'',
    'imgPath':''
  }
}
