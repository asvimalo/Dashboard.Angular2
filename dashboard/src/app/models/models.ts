import {Employee,Knowledge} from '../entities/entities'

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
