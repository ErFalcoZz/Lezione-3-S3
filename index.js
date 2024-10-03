function onButton (){

    const button = document.getElementById("myButton");

    button.addEventListener("click", function (){

       const inputText = document.getElementById("myTask").value;
       if (inputText === "") {
        alert("Il campo non può essere vuoto!");
        return;  
    }

       const taskDiv = document.createElement("div");

       const displayText = document.getElementById("myText");
       displayText.textContent = inputText;

       const deleteButton = document.createElement("button");
       deleteButton.textContent = "Elimina";

       deleteButton.addEventListener("click", function(){
        taskDiv.remove();
       });

       taskDiv.appendChild(displayText);
       taskDiv.appendChild(deleteButton);

       const taskContainer = document.getElementById("taskContainer")
       taskContainer.appendChild(taskDiv);

    })
}

onButton()

