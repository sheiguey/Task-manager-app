import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent implements OnInit{
    title!:string;
    description!:string;

    ngOnInit(): void {}

    onSubmitTask(form:NgForm):void{
      console.log(form.value)
      this.title=''
      this.description=''
    }

}
