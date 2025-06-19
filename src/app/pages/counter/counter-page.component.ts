import { /* ChangeDetectionStrategy,  */ Component, signal } from "@angular/core";

@Component({
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css',
  //changeDetection: ChangeDetectionStrategy.OnPush, // se puede establecer de manera global - indica que se trabaja zoneless
})

export class CounterPageComponent {
  counter = 0;
  counterSignal = signal(0);
  increaseBy(value: number) {
    this.counter += value;
    this.counterSignal.update((currentValue) => currentValue + value);
  }
  resetCounter() {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}