function showMessage(message){ alert(message + " — demo interaction"); }
document.querySelectorAll("nav a").forEach(link => link.addEventListener("click", event => {
  event.preventDefault();
  document.querySelectorAll("nav a").forEach(item => item.classList.remove("active"));
  link.classList.add("active");
}));
