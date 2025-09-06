import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Nx Angular + React Email Builder</h1>
    <button (click)="showBuilder = !showBuilder">
      {{ showBuilder ? 'Hide' : 'Open' }} Email Builder
    </button>
    <div *ngIf="showBuilder" style="margin-top:20px;">
      <email-builder></email-builder>
    </div>
  `
})
export class AppComponent {
  showBuilder = false;
}
