import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})

export class TaskServicesService {
  API_URL = 'http://localhost:8000/v1/tasks';
  constructor() { }

   async getTask(){
    const tasks = axios.get(this.API_URL);
    return tasks;
  }
}
