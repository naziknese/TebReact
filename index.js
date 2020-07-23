function handleChangeName(input, name) {
  input.addEventListener("change", (event) => {
    const todoText = event.target.value;

    name.value = todoText;
    input.value = "";
  });
}

window.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("text");
  const name = document.getElementById("github_name");

  if (!name || !input) return;

  handleChangeName(input, name);
});
