import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { taskModel } from '../../models/task-model';
import { TaskServicesService } from '../../task-services.service';
import { ErrorComponent } from '../../error/error.component';
import { SuccessComponent } from '../../success/success.component';
import { LoaderComponent } from '../../loader/loader.component';
import { CommonModule } from '@angular/common';
import { TasksListComponent } from '../tasks-list.component';
import { DetailTaskComponent } from '../../detail-task/detail-task.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [RouterLink,CommonModule,ErrorComponent,SuccessComponent,LoaderComponent,DetailTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})

export class TaskComponent implements OnInit{
  @Input()task!:taskModel;
          loading!:boolean;
          success!:string;
          error!:string;
          displayActions!:boolean;

  constructor(private taskService:TaskServicesService,private taskList:TasksListComponent,private router:Router){}
  ngOnInit(): void {
    this.displayActions===false
  }
  
  clearMessage(){
    setTimeout(()=>{
      this.error='';
      this.success=''
    },5000)
  }

  onDeleteTask(id:number){
    if (window.confirm('Are you sure you wish to delete this task?'))
    this.loading===true;
    this.taskService.deleteTask(id)
    .then(Response=>{
      if(Response.status===200){
        this.success='task deleted successfully'; 
        this.router.navigate(['/', 'tasklist'])
      }
    }).catch(error=>{
      this.error=error
    }).finally(()=>{
      this.clearMessage()
    })
   }
  }

