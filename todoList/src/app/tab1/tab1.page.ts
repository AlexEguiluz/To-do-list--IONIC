import { Component } from '@angular/core';
// Create a todo class
// We can add several properties...
class Todo {
  title : string;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor() {}

  //Recover the value of the input
  //Built the property valorInput
  valueInput = "";

  //Built a tableau
  todoList = [];

  //Detect the click
  onAdd() {
    console.log('button click');

    // Create and empty object
    let todoItem = new Todo();

    // Add our variable valueInput in our object
    todoItem.title = this.valueInput;
    //console.log(todoItem);

    //Send our variable to the todoList
    // tableau.push(elementToPush);
    this.todoList.push(todoItem);
    //console.log(this.todoList);
  }

  //Add our information

  onDelete(i){
    console.log('supprime');

    //tableau.splice(i,1);
    this.todoList.splice(i,1);

  }
}
