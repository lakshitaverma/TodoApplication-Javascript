var myNodelist = document.getElementsByClassName("theList");

$('.add_input').hide();

var checkboxText = ['Hit the gym', 'Pay bills', 'Meet George'];

for (var i = 0; i < myNodelist.length; i++) {
  var checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.name = "languages";
  checkbox.className = "languages";
  checkbox.value = checkboxText[i];
  checkbox.id = "id_"+i;    
  checkbox.setAttribute("onclick", "checkedCheckbox("+i+")");

  myNodelist[i].prepend(checkbox);

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");

for (var i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

function addTodo() {
  var div = document.createElement("div");
  div.className = "theList";
  var taskText = document.getElementById("task_text").value;
  var t = document.createTextNode(taskText);
  if (taskText === '') {
    alert("You must write something!");
  } else {
    document.getElementById('todoList').appendChild(div);
  }

  var checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.name = "languages";
  checkbox.className = "languages";
  checkbox.value = taskText;
  checkbox.id = "id_"+i;
  checkbox.setAttribute("onclick", "checkedCheckbox("+i+")");

  var label = document.createElement('label');
  label.className = "choice";
  label.htmlFor = "id_"+i;
  label.appendChild(t);
  div.prepend(label);
  div.prepend(checkbox);

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  div.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

  reloadActiveCompleted();

}

function reloadActiveCompleted() {
  var checked = [], notChecked = [];
  var checkboxes = document.getElementsByName('languages');

  for (var i=0; i<checkboxes.length; i++) {
     if (checkboxes[i].checked) {
        checked.push(checkboxes[i].value);
     } else {
        notChecked.push(checkboxes[i].value);
     }
  }

  $("#todoListCompleted").empty();
  $("#todoListActive").empty();

  for (var i=0; i<checked.length; i++) {
    addActiveCompleted(checked[i],'todoListCompleted',true);
  }

  for (var i=0; i<notChecked.length; i++) {
    addActiveCompleted(notChecked[i],'todoListActive',false);
  }
}

function addActiveCompleted(text, container, checked) {
  var div = document.createElement("div");
  div.className = "theList";
  var taskText = text;
  var t = document.createTextNode(taskText);
  if (taskText === '') {
    alert("You must write something!");
  } else {
    document.getElementById(container).appendChild(div);
  }

  var checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.name = "languages_checkbox";
  checkbox.className = "languages";
  checkbox.value = checkboxText[i];
  checkbox.id = "id_"+i;

  if(checked) {
    checkbox.setAttribute("checked",true);
    checkbox.setAttribute("disabled",true);
  } else {
    checkbox.removeAttribute("checked",true);
    checkbox.setAttribute("disabled",true);
  }

  var label = document.createElement('label');
  label.className = "choice";
  label.htmlFor = "id_"+i;
  label.appendChild(t);
  div.prepend(label);
  div.prepend(checkbox);

}

function changeInput() {
  $(".fa-plus").hide();
  $(".add_input").show(); 
}

function checkedCheckbox(id) {
  reloadActiveCompleted();

  if($("#todoList").find("#id_"+id).attr("checked") == "checked"){

    $("#todoList").find("#id_"+id).removeAttr("checked");

  } else {

    $("#todoList").find("#id_"+id).attr("checked","true");

  }
}
