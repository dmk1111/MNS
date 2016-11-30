import { spinnerHtml } from './spinner.html';
import { Input, Component } from '@angular/core';

@Component({
  selector: 'my-spinner',
  template: spinnerHtml
})
export class SpinnerComponent {
  @Input() public delay: number = 300;
  @Input() public set isRunning(value: boolean) {
    if (!value) {
      this.cancelTimeout();
      this.isDelayedRunning = false;
      return;
    }

    if (this.currentTimeout) {
      return;
    }

    this.currentTimeout = setTimeout(() => {
      this.isDelayedRunning = value;
      this.cancelTimeout();
    }, this.delay);
  }
  private currentTimeout: number;
  private isDelayedRunning: boolean = false;

  ngOnDestroy(): any {
    this.cancelTimeout();
  }
  private cancelTimeout(): void {
    clearTimeout(this.currentTimeout);
    this.currentTimeout = undefined;
  }
}
