import {Component, Input} from '@angular/core';
import { HtmlTransformPipe } from '@/core/pipes/html-transform.pipe'
interface ButtonProps {
  text: string;
  type: 'primary' | 'secondary';
  icon: string;
}

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [HtmlTransformPipe],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() buttonProps!: ButtonProps;

}
