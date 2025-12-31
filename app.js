let userInput = document.getElementById("date");

userInput.max = new Date().toISOString().split("T")[0];

let agecalculator = document.getElementById("agecalculator");

let Btn = document.querySelector("#btn");
Btn.addEventListener("click", () => {
  let brithDate = new Date(userInput.value);//1

  let d1 = brithDate.getDate();
  let m1 = brithDate.getMonth() + 1;
  let y1 = brithDate.getFullYear();

  let today = new Date();

  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();

  let d3, m3, y3;
  y3 = y2 - y1;

  if (m2 >= m1) {
    m3 = m2 - m1;
  }
  else if(m1 >= m2){
    m3 = m1 - m2;
  }

  if(d2 >= d1){
    d3 = d2 - d1;
  }
  else if(d1 >= d2){
    d3 = d1 - d2;
  }
  if (y3) {
    agecalculator.innerHTML = `👉 You are <span>${y3}</span> years, <span>${m3}</span> months, <span>${d3}</span> days old`;
  }
});