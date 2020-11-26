import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-date-detail',
  templateUrl: './date-detail.component.html',
  styleUrls: ['./date-detail.component.scss']
})
export class DateDetailComponent implements OnInit {

  readonly ROOT_URL = 'https://9abc209e1be6.ngrok.io/api/years/'

  date: any

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  getDate(id: string) {
    console.log('worked', id)
    return this.http.get(this.ROOT_URL + id)
  }

  ngOnInit() {
    this.date = this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('year')
        return this.getDate(id)
      })
    )
  }

}
