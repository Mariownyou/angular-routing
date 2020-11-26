import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-work-detail',
  templateUrl: './work-detail.component.html',
  styleUrls: ['./work-detail.component.scss']
})
export class WorkDetailComponent implements OnInit {

  readonly ROOT_URL = 'https://9abc209e1be6.ngrok.io/api/works/'

  work: any

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  getWork(id: string) {
    console.log('worked', id)
    return this.http.get(this.ROOT_URL + id)
  }

  ngOnInit() {
    this.work = this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id')
        return this.getWork(id)
      })
    )
  }

}
