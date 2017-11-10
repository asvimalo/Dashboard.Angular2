import {Employee,Knowledge,Client,Project} from '../entities/entities'

export class EmployeePost {

  firstName:string;
  lastName:string;
  personNr:string;
  newKnowledge:string;
  knowledges: Array<Knowledge>;

}
export class ProjectPost {

  projectName:string;
  startDate: Date;
  stopDate:Date;
  timeBudget:number;
  clientId:number;
  employees: Array<Employee>;

}
export class ClientLocation {

  clientName:string;
  city: string;
  address:string;

}
export class ClientsEmployeesListNames {

  clients:Array<Client>;
  employees: Array<Employee>;

}
export class ProjectsEmployeesListNames {


  employees: Array<Employee>;
  projects:Array<Project>;

}
