import { Injectable } from "@angular/core"

interface NewData{
    title: string
    summary:string
    date:string
  } 

@Injectable({providedIn : "root"})
export class TasksService{
    
private dummyTasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basics.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe Project',
      dueDate: '2024-06-15',
    },
  ]

GetTaskById(UserId: string){
  return this.dummyTasks.filter((tsk) => tsk.userId === UserId)

}

AddNewTask(data: NewData , UserId:string){
    this.dummyTasks.push({
        id : new Date().getTime().toString(),
        userId : UserId,
        title :data.title,
        summary : data.summary,
        dueDate : data.date 
      })
}

RemoveTask(id:string){
this.dummyTasks = this.dummyTasks.filter((tsks) => tsks.id !== id);

}
}