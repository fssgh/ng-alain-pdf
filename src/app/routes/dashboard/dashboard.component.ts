import { TestpdfComponent } from './../testpdf/testpdfcomponent';
import { Component, OnInit } from '@angular/core';
import { ModalHelper, _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  constructor(private http: _HttpClient, private modal: ModalHelper) { }

  ngOnInit(): void {
  }
  openPdfView() {
    this.modal.createStatic(TestpdfComponent, {}, { size: 1920, modalOptions: { nzStyle: { top: '20px' } } }).subscribe((params) => {
      console.log(params)
    });
  }
}
