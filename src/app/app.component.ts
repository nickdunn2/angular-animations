import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courseGoals = [
    { title: 'Master Angular Styling', isActive: true },
    { title: 'Understand Angular Animations', isActive: false },
    { title: 'Master Angular Animations', isActive: false },
  ]
}
