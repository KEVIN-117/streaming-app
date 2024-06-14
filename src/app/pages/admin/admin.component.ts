import { Component } from '@angular/core';
import {SideNavComponent} from "@pages/admin/components/side-nav/side-nav.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    SideNavComponent,
    RouterOutlet
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export default class AdminComponent {

}
