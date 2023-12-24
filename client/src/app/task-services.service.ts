import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})

export class TaskServicesService {
  API_URL = 'http://localhost:8000/v1/tasks';
  constructor() { }

    getTask(){
    const tasks = axios.get(this.API_URL);
    return tasks;
    }

    addTask(task:{}){
      return axios.post(`${this.API_URL}/new`,task);
    }
    
    deleteTask(id:number){
      return axios.delete(`${this.API_URL}/delete/${id}`);
    }

    getTaskById(id:string|null){
      const task=axios.get(`${this.API_URL}/${id}`);
      return task;
    }

    updateTask(task:{}){
      return axios.post(`${this.API_URL}/update`,task);
    }
  
}
