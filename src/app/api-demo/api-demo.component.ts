import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api-demo',
  templateUrl: './api-demo.component.html',
  styleUrls: ['./api-demo.component.css']
})
export class ApiDemoComponent implements OnInit {
  // Array to store the retrieved data from the mock api
  mockAPI: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Make an HTTP GET request to the specified API URL
      this.http.get<any[]>('https://mocki.io/v1/ff6c51fb-193e-4aba-bbc9-c6795f69e376')
          .subscribe(data => {
            this.mockAPI = data;  // Assign the received data to the array
          })
  }
}
