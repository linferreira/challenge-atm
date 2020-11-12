let keyboard = document.getElementById('keyboard-options');
let confirm = document.getElementById('confirm-value');
let output = document.getElementById('output-displayer');
let clear = document.getElementById('clear-values');

function clearKeyboardValue() {
  keyboard.value = "";
}

function clearValues() {
  keyboard.value = "";
  output.innerText = "";
}

function openAlert(message) {
  swal('Oops..', message, 'error')
}

document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener('click', () => {
    keyboard.value += btn.innerHTML;
  })
})

clear.addEventListener('click', () => {
  clearValues()
})

function withdrawMoney(valueInitial) {
  let money = valueInitial;
  output.innerText = "";

  while (money > 0) {
    if (money >= 100) {
      money = money - 100;
      output.innerText = output.innerText + ' R$ 100.00';
    } else if (money >= 50) {
      money = money - 50;
      output.innerText = output.innerText + ' R$ 50.00';
    } else if (money >= 20) {
      money = money - 20;
      output.innerText = output.innerText + ' R$ 20.00';
    } else if (money >= 10) {
      money = money - 10;
      output.innerText = output.innerText + ' R$ 10.00';
    }
  }
}

confirm.addEventListener('click', () => {
  if (keyboard.value > 0) {
    if (keyboard.value % 10 === 0 && !keyboard.value == "") {
      withdrawMoney(keyboard.value);
      clearKeyboardValue();

    } else {
      openAlert('Não há notas disponíveis!')
      clearValues();
    }

  } else if (keyboard.value === "") {
    openAlert("Você deve inserir um valor!")
    clearValues();

  } else {
    openAlert("Você deve inserir um valor maior que 0!")
    clearValues();
  }
});
