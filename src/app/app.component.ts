import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { FormComponent } from './shared/form/form.component';
import { WelcomeComponent } from './shared/welcome/welcome.component';
import { CardsComponent } from "./shared/cards/cards.component";
import { DescriptionComponent } from "./shared/description/description.component"; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, WelcomeComponent, FormComponent, FooterComponent, CardsComponent, DescriptionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dasan-page';
}
