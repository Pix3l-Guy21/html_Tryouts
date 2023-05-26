const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btn_popup');
const iconClose = document.querySelector('.icon-close');

registerlink.addEventListener('click', ()=>{
  wrapper.classList.add('active');
});
loginlink.addEventListener('click', ()=>{
  wrapper.classList.remove('active');
});
btnPopup.addEventListener('click', ()=>{
  wrapper.classList.add('active-popup');
});
iconClose.addEventListener('click', ()=>{
  wrapper.classList.remove('active-popup');
});
let saveFile = () => {
  const name = document.getElementById("Name");
  const idNo = document.getElementById("Id");
  const password = document.getElementById("password");
  const dep = document.getElementById("department");
  const sec = document.getElementById("section");

  // This variable stores all the data.
  let data = "\r Name: " + name.value + " \r\n " + "Id: " + idNo.value + " \r\n " + "Password: " + password.value + " \r\n " + "Department: " + dep.value + " \r\n " + "Section: " + sec.value;
  console.log(data); //printing form data into the console
  // Convert the text to BLOB.
  const textToBLOB = new Blob([data], { type: "text/plain" });
  var filename = new Date();
  var month =new Date(); //months from 1-12
  month = month.getMonth();

  var day = new Date();
  var day = day.getUTCDate();

  var year = new Date();
  var year = year.getUTCFullYear();

  newdate = year + "/" + month + "/" + day;
  const sFileName = filename; // The file to save the data.

  let newLink = document.createElement("a");
  newLink.download = new Date();

  if (window.webkitURL != null) {
      newLink.href = window.webkitURL.createObjectURL(textToBLOB);
  } else {
      newLink.href = window.URL.createObjectURL(textToBLOB);
      newLink.style.display = "none";
      document.body.appendChild(newLink);
  }

  newLink.click();
};