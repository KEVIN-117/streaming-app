import {Component, Input} from '@angular/core';
import {NavItemDto} from "@/types";
import {RouterLink} from "@angular/router";
import {HtmlTransformPipe} from "@app/core/pipes/html-transform.pipe";

@Component({
  selector: 'app-nav-items',
  standalone: true,
  imports: [
    RouterLink,
    HtmlTransformPipe
  ],
  templateUrl: './nav-items.component.html',
})
export class NavItemsComponent {
  @Input() props!: NavItemDto;
}
