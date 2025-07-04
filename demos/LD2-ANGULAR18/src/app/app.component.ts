import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  // standalone: true,
  // The CommonModule is imported to use common directives like ngIf, ngFor, etc.
  // imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
// The export keyword is used to make the class available for import in other files.
export class AppComponent  {
  title = 'LD2-ANGULAR18';
  
  constructor() {
    
  }
  isLoggedIn(): boolean {
    // Check if the user is logged in by checking the session storage.
    // If the 'loginid' key exists, it means the user is logged in.
    return window.sessionStorage.getItem('loggedIn') === 'yes';
  }
  // Try : Logout.... and navigate to Login page.
}
