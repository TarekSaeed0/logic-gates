let greeting = document.querySelector("#greeting");

function setGreeting(name) {
  greeting.textContent = `Hello, ${name}! Hope you're excited as i am about logic gates.`;
}

function requestUsername() {
  const name = prompt("Please enter your name.");
  if (name) {
    localStorage.setItem("name", name);
    setGreeting(name);
  }
}

if (!localStorage.getItem("name")) {
  requestUsername();
} else {
  const name = localStorage.getItem("name");
  setGreeting(name);
}

let button = document.querySelector("button");

button.onclick = requestUsername;
