function openCity(evt, cityName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

const horizantalBtn = document.querySelector(".horizantalBtn");
const vertikalBtn = document.querySelector(".vertikalBtn");
const mainboxs = document.querySelector(".mainboxs");
const select = document.querySelector("#justify-content");
const refresh = document.querySelector(".refresh");
const addItem = document.querySelector(".add");

horizantalBtn.addEventListener("click", () => {
  mainboxs.classList.remove("vertikalStyle");

  mainboxs.classList.add("horizantalStyle");
});

vertikalBtn.addEventListener("click", () => {
  mainboxs.classList.remove("horizantalStyle");

  mainboxs.classList.add("vertikalStyle");
});

select.addEventListener("change", ({ target: { value } }) => {
  mainboxs.style.justifyContent = value;
});

refresh.addEventListener("click", function () {
  location.reload();
});

addItem.addEventListener("click", function () {
  const newDiv = document.createElement("div");
  mainboxs.appendChild(newDiv);
  const newContent = document.createTextNode("Box");
  newDiv.appendChild(newContent);
  newDiv.classList.add("mainBox1");
});
