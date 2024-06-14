import {Component, Input} from '@angular/core';
import {CastProps} from "@pages/client/hero/types";

@Component({
  selector: 'app-cast',
  standalone: true,
  imports: [],
  templateUrl: './cast.component.html',
  styleUrl: './cast.component.scss'
})
export class CastComponent {
  @Input() cast!: CastProps
}
