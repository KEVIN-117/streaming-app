import {Component} from '@angular/core';
import { HeroComponent } from '@/app/pages/client/hero/hero.component'
import {NavBarComponent} from "@app/pages/client/nav-bar/nav-bar.component";
import {ButtonComponent} from "@components/button/button.component";
import {RouterOutlet} from "@angular/router";
@Component({
  selector: 'app-client',
  standalone: true,
  imports: [
    NavBarComponent,
    ButtonComponent,
    HeroComponent,
    RouterOutlet
  ],
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss'
})
export class ClientComponent {



}
