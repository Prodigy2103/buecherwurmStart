import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'section[home]',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  isMenuVisible = false;

  toggleMenu(): void {
    this.isMenuVisible = !this.isMenuVisible;
  }
}
