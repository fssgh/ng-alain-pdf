import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-testpdf',
  templateUrl: './testpdf.component.html',
})
export class TestpdfComponent implements OnInit {

  pdfUrl = 'assets/tmp/pdf-test.pdf'
  innerHeight = window.innerHeight - 90;
  constructor(private http: _HttpClient) { }

  ngOnInit(): void {
  }

}
