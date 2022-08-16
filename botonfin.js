CobrowseIO.client().then(function () {
  var button = document.createElement("div");
  button.className = "__cbio_ignored";
  button.textContent = "Finalizar";
  button.style.fontFamily = "sans-serif";
  button.style.padding = "10px 13px";
  button.style.fontSize = "13px";
  button.style.color = "white";
  button.style.boxShadow = "0px 2px 5px #33333344";
  button.style.cursor = "pointer";
  button.style.borderRadius = "30px";
  button.style.background = "blue";
  button.style.position = "fixed";
  button.style.zIndex = "2147483647";
  button.style.bottom = "10%";
  button.style.left = "50%";
  button.style.transform = "translateX(-50%)";
  button.style.opacity = "0.5";
  button.addEventListener("click", function () {
    if (CobrowseIO.currentSession) CobrowseIO.currentSession.end();
  });

  CobrowseIO.showSessionControls = function () {
    document.body.appendChild(button);
  };

  CobrowseIO.hideSessionControls = function () {
    if (button.parentNode) button.parentNode.removeChild(button);
  };
});
