import { LightningElement } from 'lwc';

export default class Todocomponent extends LightningElement {
    task;
    tasklist = [];
    taskitem = {
      id:'',
      isdelete:false,
      isDone:false,
      title:''
    };
    textChangeHandler(event){
      this.task=event.target.value;
      console.log(this.task);
     
    }
    addTasktoList(){
      let rid = (Math.random() + 1).toString(36).substring(2);
      console.log("random id", rid);
      this.taskitem = {
        id:rid,
        isdelete:false,
        isDone:false,
        title:this.task
      };
      this.tasklist=[
        ...this.tasklist,
        this.taskitem  
      ]
    }
    keycheck(component, event, helper){
      console.log(component);
      if (component.which == 10 && component.ctrlKey==true ){
          // call the js method i.e. this.handlerfilter();
          
          console.log('ctrl key + enter ');
          // this.todoList.splice(0,this.todoList.length);
      } else if (component.which == 13 && component.shiftKey==true){
          // call the js method i.e. this.handlerfilter();
          console.log('shift key + enter ');
          // this.item='';
      } else if(component.which == 13 ){
        this.addTasktoList();
        this.task='';
      }
    }
    }