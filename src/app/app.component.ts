import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  listTask: Array<string> = ["Nauka", "Studia", "Praca"];
  doneListTask: Array<string> = []

  addTask(task: string) {
    this.listTask.push(task);
    console.log(this.listTask);
  }
  remove(task: string) {
    this.listTask = this.listTask.filter(e => e !== task);
  }
  done(task: string) {
    this.doneListTask.push(task);
    this.remove(task);
    console.log(this.doneListTask);
  }
}