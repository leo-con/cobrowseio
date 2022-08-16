(function (w, t, c, p, s, e) {
  p = new Promise(function (r) {
    w[c] = {
      client: function () {
        if (!s) {
          s = document.createElement(t);
          s.src = "https://js.cobrowse.io/CobrowseIO.js";
          s.async = 1;
          e = document.getElementsByTagName(t)[0];
          e.parentNode.insertBefore(s, e);
          s.onload = function () {
            r(w[c]);
          };
        }
        return p;
      },
    };
  });
})(window, "script", "CobrowseIO");

CobrowseIO.customData = {
  //user_id: "<your_user_id>",
  //user_name: "<your_user_name>",
  //user_email: "<your_user_email>",
  //device_id: device.name,
  device_name: "PaginaWeb2",
  CustomAttrute: "ValorZ",
};
CobrowseIO.license = "Ff15cMkwxJyCcg";

CobrowseIO.client().then(function () {
  CobrowseIO.on("session.loaded", (session) => {
    console.log("A session was loaded", session);
  });

  //CobrowseIO.on('session.updated', session => {
  //    console.log('A session was updated', session)
  //})

  CobrowseIO.on("session.ended", (session) => {
    console.log("A session was ended", session);
  });

  CobrowseIO.start();
});
