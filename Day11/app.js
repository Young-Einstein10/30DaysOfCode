const section = document.querySelector('section.userData');

section.innerHTML = 'Loading....'

const fetchData = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
    section.innerHTML = ''
    populateUIWithUserData(data)
  } catch (error) {
    console.log(error);
  }
}

const populateUIWithUserData = (userData) => {
  userData.forEach(item => {
    const { id, name, email, phone, username, website } = item;

    // Access Container
    const section = document.querySelector('.userData')
    // Create Placeholder Elements
    const div = document.createElement('div');
    const elemName = document.createElement('p');
    const elemEmail = document.createElement('p');
    const elemUsername = document.createElement('p');
    const elemPhone = document.createElement('p');
    const elemWebsite = document.createElement('p');
    const img = document.createElement('img');

    img.src = "./male.svg";
    img.alt = "User Avatar";

    div.className = 'userProfile';
    div.id = id;

    elemName.innerHTML = name;
    elemEmail.innerHTML = email;
    elemUsername.innerHTML = username;
    elemPhone.innerHTML = phone;
    elemWebsite.innerHTML = website;

    div.appendChild(img);
    div.appendChild(elemName);
    div.appendChild(elemEmail)
    div.appendChild(elemUsername)
    div.appendChild(elemPhone)
    div.appendChild(elemWebsite)

    section.appendChild(div)
  });
}

window.addEventListener('DOMContentLoaded', fetchData);