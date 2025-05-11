function bloomFlower() {
  if (document.body.classList.contains('not-loaded')) {

      document.body.classList.remove("not-loaded");
      document.querySelector('.reloadBtn').style.opacity = 0;
  } 
}
      
      
let checker = document.getElementById("checker");
checker.addEventListener('change', function(e) {
  checker.disabled = true;
  document.getElementById("label-checker").style.opacity = 0;
})