import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

  readonly ROOT_URL = 'https://9abc209e1be6.ngrok.io/api/works/'

  works: any

  constructor(private http: HttpClient) { }

  getWorks() {
    this.works = this.http.get(this.ROOT_URL)
  }

  ngOnInit() {
    this.getWorks()
  }

}
