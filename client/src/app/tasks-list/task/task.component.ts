import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { taskModel } from '../../models/task-model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent implements OnInit{
 @Input()task!:taskModel
  
  ngOnInit(): void {}
  
}
