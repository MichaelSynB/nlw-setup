const form = document.querySelector("#form-habits");
const nlwSetup = new NLWSetup(form);
const button = document.querySelector("header button");

button.addEventListener("click", add);
form.addEventListener("change", save);


function add() {
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5);

  const dayExists = nlwSetup.nlwSetupdayExists(today); // verificando se o today(dia) existe dentro da biblioteca nlwSetup.dayExists

  if(dayExists) { // se o valor for false, esse código não será executado
    alert("Dia já incluso");
    return // parar a função e não executar as próximas linhas
  }

  nlwSetup.addDay(today); // adicionando o dia no formulário

}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data));
}

// Format MM-DD
// const data = {
//   run: ["01-01", "01-02", "01-06", "01-07", "01-08"],
//   takePills: ["01-03"],
//   journal: ["01-02"],
// }

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {};
nlwSetup.setData(data);
nlwSetup.load();