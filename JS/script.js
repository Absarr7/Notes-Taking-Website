// If user adds a note, add it to local storage

showNotes()

let addBtn = document.getElementById('addBtn');

addBtn.addEventListener("click", function(e) {
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = ""
    console.log(notesObj)

    // showing notes
    showNotes();
})

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    let html = "";
    notesObj.forEach(function(element, index) {
        html += `
        <div class="card">
                    <div class="card-info">
                        <div class="card-title">
                            <h5>Note ${index + 1}</h5>
                        </div>
                        <hr />
                        <p id="main-text">  ${element}</p>
                    </div>
                    <button onclick="deleteNote(this.id)" id="${index}" class="deleteBtn" id="dltBtn">Delete Note</button>
                    <button class="copy-btn" id="copyBtn">
                        <i class="fa-solid fa-copy"></i>
                    </button>
                </div>`;
    });

    let notesElm = document.getElementById('saveNotes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `nothing to show! Use " Add notes by writing at the right side.`
    }


}

function deleteNote(index) {
    console.log('I am deleting....', index)
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}