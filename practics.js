// result = prompt('how old r u?', 100);
// alert(`u r ${result} y o!`);

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}
ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
);