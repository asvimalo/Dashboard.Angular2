export class Employee {
  employeeId: number;
  firstName:string;
  lastName:string;
  personNr:string;
  acquiredKnowledges: AcquiredKnowledge[];
  assignments: Assignment[];

}
export class Project {
  projectId: number;
  clientId:number;
  client:Client;
  projectName:string;
  startDate: Date;
  stopDate: Date;
  timeBudget: number;
  notes: string;
  assignments:Array<Assignment>;
  phases: Array<Phase>;

}

export class Knowledge {

  knowledgeId:number;
  description:string;
  knowledgeName:string;
  acquiredKnowledges:Array<AcquiredKnowledge>;


}
export class Phase {

  phaseId:number;
  projectId:number;
  project:Project;
  phaseName:string;
  comments: string;
  tasks:Array<Task>

}
export class Task {

  taskId:number;
  taskName:string;
  phaseId:number;
  phase:Phase;


}
export class Client {

  clientId:number;
  locationId:number;
  location:Location;
  clientName:string;
  description:string;
  projects: Array<Project>;

}
export class Location {

  locationId:number;
  city:string;
  address:string;
  clients:Array<Client>;

}
export class Commitment {

  commitmentId:number;
  assignmentId:number;
  assignment:Assignment;
  startDate:Date;
  stopDate:Date;
  hours:number;

}
export class AcquiredKnowledge {

  acquiredKnowledgeId:number;
  knowledgeId:number;
  knowledge:Knowledge;
  employeeId:number;
  employee: Employee;

}
export class Assignment {

  assignmentId:number;
  employeeId:number;
  employee:Employee;
  projectId:number;
  project: Project;
  startDate: Date;
  stopDate: Date;
  location: Location;
  commitments: Array<Commitment>
  jobTitles: Array<JobTitleAssignment>;

}
export class JobTitleAssignment {

  jobTitleAssignmentId:number;
  assignmentId:number;
  assignments:Array<Assignment>;
  jobTitleId:number;
  jobTitle: JobTitle;

}
export class JobTitle {

  jobTitleId:number;
  titleName:string;
  jobTitles:Array<JobTitle>;

}
