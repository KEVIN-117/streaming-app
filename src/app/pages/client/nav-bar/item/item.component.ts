import {Component, Input} from '@angular/core';
import {NavItemDto} from "@/types";
import {RouterLink} from "@angular/router";
import {HtmlTransformPipe} from "@app/core/pipes/html-transform.pipe";

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [
    RouterLink,
    HtmlTransformPipe
  ],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  @Input() props!: NavItemDto;
}
