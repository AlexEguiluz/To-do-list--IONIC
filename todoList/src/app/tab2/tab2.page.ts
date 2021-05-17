import { Component } from '@angular/core';

// We can add several properties...
class Question {
  title : string;
  color : string;
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  valueInput="";
  colorInput ="";

  //Built a tableau that will stock all our elements form the list
  inputList = [];

  //onADD
onAdd(){
  console.log('click button');
  //I put my valueInput in the tableau
  //I create an empty object as a type Question (title, color)
  let question = new Question();
  // Add our variable valueInput in our object
  question.title = this.valueInput;
  console.log(question);

  //I add the color in this object
  question.color= this.colorInput;
  //tableau.push(element);
  this.inputList.push(question);

  console.log(this.inputList);

}

onDelete(i){
  this.inputList.splice(i, 1);
}

}
