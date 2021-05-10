//Main selectors.
let textInput = document.querySelector(".addText");
let addBtn = document.querySelector(".addBtn");
let taskContainer = document.querySelector(".task-box");

//Main class for the app.
class Todo {
  //Add Method.
  addTask() {
    addBtn.addEventListener("click", function () {
      //Check if the input is empty.
      if (textInput.value === "") {
        alert("please insert A data");
      } else {
        //Creat Main span which contain the task,add the text content to it and give it a class name.
        let textTask = document.createElement("span");
        textTask.textContent = textInput.value;
        textTask.classList.add("task");

        //add delete button,and give it a class name.
        let deleteElment = document.createElement("span");
        deleteElment.textContent = "Delete";
        deleteElment.classList.add("delete");

        textTask.appendChild(deleteElment);
        taskContainer.appendChild(textTask);
        textInput.value = "";
        return taskContainer;
      }
    });
  }

  //Delete Method.
  deleteTask(delTask) {
    document.addEventListener("click", function (e) {
      if (e.target.className == delTask) {
        e.target.parentNode.remove();
      }
    });
  }

  //Finshed Method.
  finshedTask() {
    document.addEventListener("click", function (e) {
      if (e.target.classList.contains("task")) {
        e.target.classList.toggle("finshed");
      }
    });
  }
}

/*
Creat New Objects From The Main class
*/

let todo = new Todo();
todo.addTask();

let deleted = new Todo();
deleted.deleteTask("delete");

let finshed = new Todo();
finshed.finshedTask();
/*.......................................The End......................................*/
