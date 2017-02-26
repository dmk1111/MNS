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
  private load;
  constructor(private regionService: UserApiService,
              private toast: ToastsManager) {
  }
  ngOnInit() {
   this.getRegions();
  }
  getRegions() {
    this.load = this.regionService.getRegions()
      .subscribe(res => {
        this.regions = res;
      }, err => {
        this.toast.error(err);
      });
  }
  addRegion(region) {
    this.regionService.setRegion({name: region})
      .subscribe(res => {
        if (res.success) {
          this.toast.success('Додано');
          this.getRegions();
          region = '';
          this.region = '';
        }
      });
  }
  deleteRegion(r) {
    this.regionService.deleteRegion(r.id)
      .subscribe(res => {
        this.toast.success('Додано');
        this.regions.filter(reg => reg.id !== r.id);
      });
  }
}
