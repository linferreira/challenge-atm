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
  let amount = valueInitial;

  const notesAvailable = [100, 50, 20, 10];
  let currentTotal = 0;
  let noteNow = 0;
  let returnNotes = [];

  while (currentTotal < amount) {
    currentNote = notesAvailable[noteNow];
    noteCount = Math.floor((amount - currentTotal) / currentNote);
    currentTotal += noteCount * currentNote;
    if (noteCount) {
      returnNotes = returnNotes.concat((new Array(noteCount)).fill(` R$ ${currentNote}`));
    }
    noteNow++;
  }

  output.innerText = returnNotes

  return;
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
