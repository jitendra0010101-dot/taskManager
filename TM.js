document.querySelector("#input").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addNote();
    }
});
let counter = localStorage.getItem("counter") ? parseInt(localStorage.getItem("counter")) : 0;
function addNote() {
    counter++;
    localStorage.setItem("counter", counter);
    const note = counter+"} "+document.getElementById("input").value;
    localStorage.setItem(`note${counter}`, note);
    const noteElement = document.createElement("div");
    const notediv = document.createElement("div");
    const completeButton = document.createElement("button");
    const removeButton = document.createElement("button");
    noteElement.textContent = localStorage.getItem(`note${counter}`);
    completeButton.textContent = "Complete";
    removeButton.textContent = "Remove";
    notediv.appendChild(noteElement);
    notediv.appendChild(completeButton);
    notediv.appendChild(removeButton);
    document.getElementById("notes").appendChild(notediv);
    removeButton.addEventListener("click", function () {
        notediv.remove();
        localStorage.removeItem(`note${counter}`);
    });
    completeButton.addEventListener("click", function () {
        document.getElementById("completed").appendChild(notediv);
        completeButton.remove();
        localStorage.removeItem(`note${counter}`);
    });
    document.getElementById("input").value = "";
}
function loadNotes() {
    for (let i = 1; i <= counter; i++) {
        const note = localStorage.getItem(`note${i}`);
        if (note) {
            const noteElement = document.createElement("div");
            noteElement.textContent = note;
            document.getElementById("notes").appendChild(noteElement);
            const completeButton = document.createElement("button");
            completeButton.textContent = "Complete";
            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            const notediv = document.createElement("div");
            notediv.appendChild(noteElement);
            notediv.appendChild(completeButton);
            notediv.appendChild(removeButton);
            document.getElementById("notes").appendChild(notediv);
            removeButton.addEventListener("click", function () {
                notediv.remove();
                localStorage.removeItem(`note${i}`);
            });
            completeButton.addEventListener("click", function () {
                document.getElementById("completed").appendChild(notediv);
                completeButton.remove();
                localStorage.removeItem(`note${i}`);
            });
        }

    }
}
