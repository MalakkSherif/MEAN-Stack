import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-options',
  imports: [CommonModule],
  templateUrl: './options.component.html',
  styleUrl: './options.component.css'
})
export class OptionsComponent {
  properties = [
    { name: 'Luxury Rentals', count: 45, icon: 'bi bi-house' },
    { name: 'City Townhouse', count: 25, icon: 'bi bi-currency-dollar' },
    { name: 'Apartments', count: 90, icon: 'bi bi-shop' },
    { name: 'Villa', count: 57, icon: 'bi bi-gift' },
    { name: 'Penthouse', count: 86, icon: 'bi bi-building' },
  ];
}
