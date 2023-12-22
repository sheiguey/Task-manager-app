import { Component,OnInit } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [TaskComponent,RouterLink],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.scss'
})
export class TasksListComponent implements OnInit{
   ngOnInit(): void {
     
   }

}
