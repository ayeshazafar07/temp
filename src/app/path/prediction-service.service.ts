import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PredictionServiceService {

  constructor(private http: HttpClient) { }

  predictionResults(ctFolder: File, petFolder: File) {
    if (ctFolder != null && petFolder != null) {
      console.log("reached prediction service fine");
    }
  }
}
