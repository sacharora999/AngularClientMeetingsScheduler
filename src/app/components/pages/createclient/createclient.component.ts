import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../../../services/http.service';
import { PageTitleComponent } from '../../page-title/page-title.component';
import { TaskListComponent } from '../../task-list/task-list.component';
import { StateService } from '../../../services/state.service';

@Component({
  selector: 'app-createclient',
  standalone: true,
  imports: [PageTitleComponent, FormsModule, TaskListComponent],
  templateUrl: './createclient.component.html',
  styleUrl: './createclient.component.scss'
})

export class CreateclientComponent {
  name = '';
  email='';
  address='';
  password='';
  rpassword='';
  intialTaskList: any[] = [];
  taskList: any[] = [];
  intialClientList: any[] = [];
  clientList: any[] = [];
  httpService = inject(HttpService);
  stateService = inject(StateService);
  ngOnInit() {
    this.stateService.searchSubject.subscribe((value) => {
      console.log("search",value)
      if (value) {
        this.clientList = this.intialClientList.filter((x) =>
          x.title.toLowerCase().includes(value.toLowerCase())
        );
      }else{
        this.clientList=this.intialClientList;
      }
    });
    this.getAllClients();
  }
  addClient() {
    console.log('addClient', this.name);
    this.httpService.addClient("Name: " + this.name + " <====>  Email : " + this.email + "<====> Address : " + this.address).subscribe(() => {
      this.name = '';
      this.email = '';
      this.address = '';
      this.password = '';
      this.rpassword = '';
      this.getAllClients();
    });
  }
  // getAllTasks() {
  //   this.httpService.getAllTasks().subscribe((result: any) => {
  //     this.intialTaskList = this.taskList = result;
  //   });
  // }

  getAllClients() {
    this.httpService.getAllClients().subscribe((result: any) => {
      this.intialClientList = this.clientList = result;
    });
  }
  // onComplete(task: any) {
  //   task.completed = true;
  //   console.log('complete', task);
  //   this.httpService.updateTask(task).subscribe(() => {
  //     this.getAllTasks();
  //   });
  // }
  // onImportant(task: any) {
  //   task.important = true;
  //   this.httpService.updateTask(task).subscribe(() => {
  //     this.getAllTasks();
  //   });
  // }
}
