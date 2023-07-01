import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api-demo',
  templateUrl: './api-demo.component.html',
  styleUrls: ['./api-demo.component.css']
})
export class ApiDemoComponent implements OnInit {
  mockAPI: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
      this.http.get<any[]>('https://mocki.io/v1/ff6c51fb-193e-4aba-bbc9-c6795f69e376')
          .subscribe(data => {
            console.log(data)
            this.mockAPI = data;
          })
  }
}
