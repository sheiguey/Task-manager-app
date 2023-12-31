import { Component,OnInit } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { RouterLink } from '@angular/router';
import { TaskServicesService } from '../task-services.service';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '../loader/loader.component';
import { ErrorComponent } from '../error/error.component';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [TaskComponent,RouterLink,CommonModule,LoaderComponent,ErrorComponent],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.scss'
})

export class TasksListComponent implements OnInit{
   tasks!:[]
   error!:string
   loading!:boolean
   ngOnInit(): void {
     this.loading=false
     this.onGetTasks();
   }

  constructor(private taskService:TaskServicesService){}

  onGetTasks(){
    this.loading=true
    this.taskService.getTask()
      .then(Response => {
        this.tasks=Response.data;
      })
      .catch(err => this.error=err)
      .finally(()=>this.loading=false)
   }
}
