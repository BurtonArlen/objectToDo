function toDoList(firstToDo,secondToDo,thirdToDo) {
  this.firstToDo = firstToDo;
  this.secondToDo = secondToDo;
  this.thirdToDo = thirdToDo;
}


//user logic

$(document).ready(function(){
  $('form#toDoDo').submit(function(event){
    even.preventDefault();

    var newToDo1 = $('input#new-first-task').val();
    var newToDo2 = $('input#new-second-task').val();
    var newToDo3 = $('input#new-third-task').val();
    var totalToDo = new toDoList(newToDo1,newToDo2,newToDo3);

    $("#toDoResult").append("<li class='toDoUl'>" newToDo1 + newToDo2 + newTodo3 "</li>");
  });
});
