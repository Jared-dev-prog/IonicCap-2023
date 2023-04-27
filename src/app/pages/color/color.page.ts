import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Color } from 'src/app/models/colors.model.';
import { ColorsService } from 'src/app/services/colors.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.page.html',
  styleUrls: ['./color.page.scss'],
})
export class ColorPage implements OnInit {
  color: Color;

  constructor(
    private route: ActivatedRoute,
    private colorsService: ColorsService
  ) {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.colorsService.getSingleColor(params['id']).subscribe({
          next: (res) => {
            this.color = res.data;
            console.log(res);
          },
        });
      }
    });
  }

  ngOnInit() {}
}
