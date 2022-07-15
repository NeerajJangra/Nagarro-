document.querySelector("#addBtn").onclick = function () {
  if (document.querySelector("#newtask #taskbar").value.length == 0) {
    alert("Please Enter a Task");
  } else {
    document.querySelector("#tasks").innerHTML += `
          <div class="task">
              <li id="taskname">
                  ${document.querySelector("#newtask input").value}
              
              <button class="delBtn">
                  delete
              </button></li>
          </div>
      `;

    var current_tasks = document.querySelectorAll(".delBtn");
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }
  }
};
