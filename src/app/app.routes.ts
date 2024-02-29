import { Routes } from '@angular/router';
import { AllTaskComponent } from './components/pages/all-task/all-task.component';
import { ImportantTasksComponent } from './components/pages/important-tasks/important-tasks.component';
import { CompletedTasksComponent } from './components/pages/completed-tasks/completed-tasks.component';
import { CreateclientComponent } from './components/pages/createclient/createclient.component';

export const routes: Routes = [
  {
    path: '',
    component: AllTaskComponent,
  },
  {
    path: 'importants',
    component: ImportantTasksComponent,
  },
  {
    path: 'completed',
    component: CompletedTasksComponent,
  },
  {
    path: 'createclient',
    component: CreateclientComponent,
  },
];
