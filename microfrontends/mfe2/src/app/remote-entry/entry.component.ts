import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'app-mfe2-entry',
  template: `
    <div>
      <h2>MFE2 работает!</h2>
      <p>Добро пожаловать в микрофронтенд 2</p>
    </div>  
`,
})
export class RemoteEntryComponent {}
