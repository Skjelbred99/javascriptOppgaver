// Oppgave 1
document.getElementById("remove-btn").onclick = removeText = () => {
    document.getElementById("remove").innerHTML = " ";
};


// Oppgave 2
document.getElementById("change-btn").onclick = alterText = () => {
    document.getElementById("change").innerHTML = "Endret tekst"
}

// Oppgave 3
document.getElementById("input").onkeyup = changeInputText = () => {
    document.getElementById("input-text").innerHTML = document.getElementById("input").value;
}

// Oppgave 4
const myList = ['item one', 'item two', 'item three'];

document.getElementById("write-list").onclick = printList = () => {
    document.getElementById("ul").innerHTML = null;

    myList.forEach(word => {
        let newElement = document.createElement("li")
        newElement.innerHTML = word;
        document.getElementById("ul").appendChild(newElement); 
    });
    
}

// Oppgave 5
document.getElementById("create").onclick = addTextToElement = () => {
    let differentOptions = document.getElementById("select");
    var selectedOption = differentOptions.options[differentOptions.selectedIndex].value

    switch(selectedOption) {
        case "h2":
            let h2 = document.createElement("h2")
            document.getElementById("placeholder").appendChild(h2);
            h2.innerHTML = document.getElementById("text").value;
        break;

        case "h3": 
            let h3 = document.createElement("h3")
            document.getElementById("placeholder").appendChild(h3);
            h3.innerHTML = document.getElementById("text").value;
        break;

        case "span": 
            let span = document.createElement("span")
            document.getElementById("placeholder").appendChild(span);
            span.innerHTML = document.getElementById("text").value;
        break;

        case "p": 
            let p = document.createElement("p")
            document.getElementById("placeholder").appendChild(p);
            p.innerHTML = document.getElementById("text").value;
        break;
    }
}

// Oppgave 6
    document.getElementById("remove-li").onclick = removeList = () => {

    let list = document.getElementById("list");
    let items = list.getElementsByTagName("li");

    try {
    list.removeChild(items[items.length-1]);
    } catch (e) {
    return;
    }
}

// Oppgave 7
document.getElementById("name").onkeyup = checkNameLength = () => {
    let lettersAdded = document.getElementById("name").value.length;
    console.log(lettersAdded);
    if(lettersAdded > 4) {
        document.getElementById("order").disabled = true;
        document.getElementById("order").style = "border-color: red"
    } else {
        document.getElementById("order").disabled = false;
        document.getElementById("order").style = "border-color: green"
    }
    
}

// Oppgave 8
document.getElementById("color").onclick = colorChange = () => {
    const list = document.querySelector(".children");
    const items = list.querySelectorAll("li");
    
    Array.from(items).forEach((li, index) => {
        console.log(li);
        if((index + 1) % 2 === 0) {
            li.style = "border: 2px solid pink";
        } else {
            li.style = "border: 2px solid green";
        }
    }); 
}

