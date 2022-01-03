function addList() {
  const list = document.getElementById('list');

  list.innerHTML += `\n<li><a href="#">Item ${list.children.length + 1}</a></li>`;
}
