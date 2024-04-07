import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bubble',
  standalone: true,
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.scss'],
})
export class BubbleComponent {
  @Input() count = 0;
}
