document.getElementById("leadForm").addEventListener("submit", function (e) {
  e.preventDefault();


  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const company=document.getElementById("company").value.trim();

  if (name === "" || email === "") {
    alert("Name and Email are required!");
    return;
  }


  const li = document.createElement("li");
  li.innerHTML = `
  <div>
  <strong>${name}</strong> <br/> ${email} <br/> ${phone} <br/> ${company}
  </div>
  <button class="delete-btn">Delete</button>
  `;


  document.getElementById("leads").appendChild(li);

  document.getElementById("leadForm").reset();
});

document.getElementById("leads").addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove(); 
  }
});