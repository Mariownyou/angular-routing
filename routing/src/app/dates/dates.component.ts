import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.scss']
})
export class DatesComponent implements OnInit {

  readonly ROOT_URL = 'https://9abc209e1be6.ngrok.io/api/years/'

  dates: any

  constructor(private http: HttpClient) { }

  getDates() {
    this.dates = this.http.get(this.ROOT_URL)
  }

  ngOnInit() {
    this.getDates()
  }

}
