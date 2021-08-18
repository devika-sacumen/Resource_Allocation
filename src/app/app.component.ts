import { Component } from '@angular/core';

export interface PeriodicElement {
  project: string;
  customer: string;
  role: string;
  team_member: string;
  project_lead : string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {customer: 'Sacumen', project: 'Project-Allocation', role: 'Developer', team_member: 'Devika', project_lead:'Subhashish'},
  {customer: 'AT & T', project: 'Meta-UI', role: 'Developer', team_member: 'Vidya', project_lead:'Pritish'},
  {customer: 'AT & T', project: 'Meta-UI', role: 'Developer', team_member: 'Geetha', project_lead:'Pritish'},
  {customer: 'AT & T', project: 'Meta-UI', role: 'Developer', team_member: 'Sumit', project_lead:'Pritish'},
  {customer: 'AT & T', project: 'Meta-UI', role: 'Developer', team_member: 'Raghu', project_lead:'Pritish'},
  {customer: 'AT & T', project: 'Meta-UI', role: 'Developer', team_member: 'Kiran', project_lead:'Pritish'},
  {customer: 'AT & T', project: 'Alien-App', role: 'Developer', team_member: 'Suthan', project_lead:'Pritish'},
  {customer: 'AT & T', project: 'Alien-App', role: 'Developer', team_member: 'Savitha', project_lead:'Pritish'},
  {customer: 'AT & T', project: 'Alien-App', role: 'Tester', team_member: 'Manohar', project_lead:'Pritish'}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-allocation';
  displayedColumns: string[] = ['customer', 'project', 'role', 'team_member', 'project_lead'];
  dataSource = ELEMENT_DATA;
}
