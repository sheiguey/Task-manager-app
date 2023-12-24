import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TaskServicesService } from '../task-services.service';
import { ErrorComponent } from '../error/error.component';
import { LoaderComponent } from '../loader/loader.component';
import { SuccessComponent } from '../success/success.component';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule,FormsModule,ErrorComponent,LoaderComponent,SuccessComponent],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent implements OnInit{
    title!:string;
    description!:string;
    loading!:boolean;
    success!:string;
    error!:string

    constructor(private taskService:TaskServicesService){}

    ngOnInit(): void {
      this.loading=false
    }

    clearMessage(){
      setTimeout(()=>{
        this.error='';
        this.success=''
      },5000)
    }

    clearInput(){
      this.title='';
      this.description=''
    }

   onSubmitTask(form:NgForm){
    this.loading=true;
    this.taskService.addTask(form.value)
    .then(Response=>{
      console.log(Response)
      if(Response.status===201){
        this.success='task added successfully';
        this.clearInput()
      }
    }).catch(error=>{
      this.error=error
    }).finally(()=>{
      this.loading=false
      this.clearMessage()
    })
   }
}

