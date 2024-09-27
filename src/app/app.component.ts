import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports:[HeaderComponent]
})
export class AppComponent {
  title = 'task-management';
}
