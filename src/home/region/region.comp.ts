import { Component } from '@angular/core';
import { regionHtml } from './region.html';
import { UserApiService } from '../../services/user.service';
import { ToastsManager } from 'ng2-toastr';
@Component({
  selector: 'region',
  template: regionHtml
})
export class RegionComponent {
  private regions = [];
  private region;
  constructor(private regionService: UserApiService,
              private toast: ToastsManager) {
  }
  ngOnInit() {
    this.regionService.getRegions()
      .subscribe(res => {
        this.regions = res;
      });
  }
  addRegion(region) {
    this.regionService.setRegion(region)
      .subscribe(res => {
        if(res.success)
          this.toast.success('Додано');
      });
  }
}
