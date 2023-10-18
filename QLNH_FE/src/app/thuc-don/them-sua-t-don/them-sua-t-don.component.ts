import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-them-sua-t-don',
  templateUrl: './them-sua-t-don.component.html',
  styleUrls: ['./them-sua-t-don.component.css'],
})
export class ThemSuaTDonComponent {
  tenThucDon: string = 'mặc định';

  constructor(private service: SharedService) {}

  themThucDon() {
    var tenThucDon = this.tenThucDon;
    this.service.themThucDon(tenThucDon).subscribe((res) => alert(res.toString()));
  }
}
