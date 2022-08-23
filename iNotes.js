let addnote = document.getElementById('addnote');
addnote.addEventListener("click", function (e) {
    let addtext = document.getElementById('addtext');
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addtext.value);

    localStorage.setItem("notes", JSON.stringify(notesObj));
    addtext = "";
    // console.log(notesObj);
    showNotes();

})

const showNotes = () => {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += ` <div class="my-2 mx-2 card notecard" style="width: 18rem;" data-aos="zoom-in-up">

    <div class="card-body">
        <h5 class="card-title"Note ${index + 1}</h5>
        <p class="card-text">${element}</p>
        <button href="#" id="${index}" onclick="deletenote(this.id)" class="btn btn-primary">Remove</button>
    </div>
</div>`;

    });
    let notesEle = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesEle.innerHTML = html;
    }
    else {
        notesEle.innerHTML = `Nothing..`
    }



}

deletenote = (index) => {
    // console.log("I am Deleting...", index);
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];

    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);

    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();


}


