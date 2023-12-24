import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskServicesService } from '../task-services.service';
import { LoaderComponent } from '../loader/loader.component';
import { ErrorComponent } from '../error/error.component';

@Component({
  selector: 'app-edit-task',
  standalone: true,
  imports: [CommonModule,FormsModule,LoaderComponent,ErrorComponent],
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.scss'
})
export class EditTaskComponent implements OnInit {
   id!:string|null;
   title!:string;
   description!:string;

   loading!:boolean;
   error!:string

  constructor(private route:ActivatedRoute,private taskService:TaskServicesService,private router:Router){}

   ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id')
    this.onGetOneTaskById();
   }

   onGetOneTaskById(){
    this.loading=true
    this.taskService.getTaskById(this.id)
      .then(Response => {
        this.title=Response.data.title;
        this.description= Response.data.description
      })
      .catch(err => this.error=err)
      .finally(()=>this.loading=false)
   }

   onUpdateTask(form:NgForm){
    this.loading=true;
    console.log(form.value);
    this.taskService.updateTask(form.value)
    .then(Response=>{
      if(Response.status===201){
        this.router.navigate(['/', 'tasklist'])
      }
    }).catch(error=>{
      this.error=error
    }).finally(()=>{
      this.loading=false
    })
   }
}
