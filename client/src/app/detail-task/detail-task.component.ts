import { Component, OnInit } from '@angular/core';
import { TaskServicesService } from '../task-services.service';
import { ActivatedRoute } from '@angular/router';
import { LoaderComponent } from '../loader/loader.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-task',
  standalone: true,
  imports: [LoaderComponent,CommonModule],
  templateUrl: './detail-task.component.html',
  styleUrl: './detail-task.component.scss'
})
export class DetailTaskComponent implements OnInit {
  id!:string|null;
  title!:string;
  description!:string;
  createdDate!:Date;
  updatedDate!:Date;
  loading!:boolean;
  error!:string;

  constructor(private taskService:TaskServicesService,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id')
    this.onGetOneTaskById();
     
  }

  onGetOneTaskById(){
    this.loading=true;
    this.taskService.getTaskById(this.id)
      .then(Response => {
         this.title=Response.data.title;
         this.description=Response.data.description;
         this.createdDate=Response.data.created_at;
         this.updatedDate=Response.data.updated_at;
      })
      .catch(err => this.error=err)
      .finally(()=>this.loading=false)
   }
}
