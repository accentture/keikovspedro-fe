import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidatesService {
  apiUrl = environment.apiUrl
  token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MGIwMTIyNjljNjkwOTFkNzRmMjM3ODciLCJpYXQiOjE2MjIxNTE3MzMsImV4cCI6MTYyMjc1NjUzM30.giLeaw4mggxIW7dxl2C4wMZbSIIN1w1Htfd2LRR_AeA'
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('keikovspedro-token', this.token);

  constructor(
    private http: HttpClient
  ) { }
  getCandidates() {
    return this.http.get(`${this.apiUrl}/keikovspedro/candidates/`, { headers: this.headers })
  }
  makeVote(candidateId: string) {
    return this.http.post(`${this.apiUrl}/keikovspedro/votes/${candidateId}`, '', { headers: this.headers })
  }
  updateVote(candidateId: string, thisChoosed:boolean) {
    console.log('update')
    return this.http.put(`${this.apiUrl}/keikovspedro/votes/${candidateId}/${thisChoosed}`, '', { headers: this.headers })
  }
}
