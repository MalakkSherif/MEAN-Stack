import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-recent-sales',
  imports: [CommonModule,NgbModule,NgbCarouselModule],
  templateUrl: './recent-sales.component.html',
  styleUrl: './recent-sales.component.css'
})
export class RecentSalesComponent {
  properties = [
    {
      image: 'download.jpg',
      price: 'Pkr 30 lac',
      title: 'Mid Century Gem in Sunrise Park.',
      subtitle: 'Sold Rs 29.5 lac'
    },
    {
      image: 'LIVING ROOM - Mohamed Hassan.jpg',
      price: 'Pkr 30 lac',
      title: 'Mid Century Gem in Sunrise Park.',
      subtitle: 'Sold Rs 29.5 lac'
    },
    {
      image: 'download (1).jpg',
      price: 'Pkr 30 lac',
      title: 'Mid Century Gem in Sunrise Park.',
      subtitle: 'Sold Rs 29.5 lac'
    },
    {
      image: 'assets/img/house4.jpg',
      price: 'Pkr 35 lac',
      title: 'Modern Villa in DHA.',
      subtitle: 'Sold Rs 34 lac'
    }
  ];

  // Group into chunks of 3 for carousel
  get propertyGroups() {
    const size = 3;
    return Array.from({ length: Math.ceil(this.properties.length / size) }, (_, i) =>
      this.properties.slice(i * size, i * size + size)
    );
  }

}
