import { Component } from '@angular/core';
import { ColorsService } from '../services/colors.service';
import { Color } from '../models/colors.model.';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  colors: Color[] = [];

  constructor(private colorsService: ColorsService, private router: Router) {
    this.colorsService.getColors().subscribe({
      next: (res) => {
        this.colors = res.data;
      },
    });
  }

  itemClick(id: number) {
    this.router.navigate(['color', id]);
  }
}
