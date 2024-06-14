import {Component, Input} from '@angular/core';
import {ButtonProps} from "./types";

import { HtmlTransformPipe } from "@/app/core/pipes/html-transform.pipe"
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    HtmlTransformPipe,
    RouterLink
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() buttonProps!: ButtonProps;
  @Input() path!: string;
  @Input() onEvent!: any;

  constructor() {
  }

  triggerEvent() {
    if (this.onEvent) {
      this.onEvent()
    }
  }
}
