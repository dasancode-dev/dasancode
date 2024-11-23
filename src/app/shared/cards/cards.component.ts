import { Component, Input } from '@angular/core';
import { CardElement } from './card.model';
@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  @Input() typeCard = "";
  @Input() idSecctionCard = "";
  cardList: CardElement[]=[
    {
      title:"Title",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, dolores? Nesciunt et nisi voluptas similique, inventore voluptate dignissimos quo debitis iure provident. Nostrum consectetur dolor ut dignissimos laborum consequatur nisi.",
      altDescription:"title.png",
      imgPath:"https://static.vecteezy.com/system/resources/thumbnails/004/865/921/small/programmer-people-concept-use-laptop-and-programming-code-program-icon-spreading-with-modern-flat-style-free-vector.jpg"
    },
    {
      title:"Title 2",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, dolores? Nesciunt et nisi voluptas similique, inventore voluptate dignissimos quo debitis iure provident. Nostrum consectetur dolor ut dignissimos laborum consequatur nisi.",
      altDescription:"title2.png",
      imgPath:"https://static.vecteezy.com/system/resources/thumbnails/004/865/921/small/programmer-people-concept-use-laptop-and-programming-code-program-icon-spreading-with-modern-flat-style-free-vector.jpg"
    },
    {
      title:"Title 3",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, dolores? Nesciunt et nisi voluptas similique, inventore voluptate dignissimos quo debitis iure provident. Nostrum consectetur dolor ut dignissimos laborum consequatur nisi.",
      altDescription:"title3.png",
      imgPath:"https://static.vecteezy.com/system/resources/thumbnails/004/865/921/small/programmer-people-concept-use-laptop-and-programming-code-program-icon-spreading-with-modern-flat-style-free-vector.jpg"
    },
    
  ];
}
