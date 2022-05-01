const entries = document.querySelector('.container');


function display(doc){
    let li = document.createElement('body');
    let name = document.createElement('body');
    let email = document.createElement('body');
    let number = document.createElement('body');

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    contact.textContent = doc.data().number;
    email.textContent = doc.data().email;

    li.appendChild(name);
    li.appendChild(nnumber);
    li.appendChild(email);

    display.appendChild(li);
}

// display data
db.collection('HOSTEL-EXHANGE-ENTRIES').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        displayData(doc);
    });
});


//Taking in entries

entry.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('HOSTEL-EXHANGE-ENTRIES').add({
        name : entry.name.value,
        email : entry.email.value,
        number : entry.contact.value
    });
});