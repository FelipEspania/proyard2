var config = {
	apiKey: "AIzaSyC2hvKvo5h_BprS7VsbhMlbkSxFgh8-L60",
	authDomain: "proyard2.firebaseapp.com",
	databaseURL: "https://proyard2.firebaseio.com",
	storageBucket: "",
};

firebase.initializeApp(config);

var f = new Date();
    var month = f.getMonth()+1;
    if (month<10) {month="0"+month}
    var fecha = f.getFullYear() + "-" + month + "-" + f.getDate();

    var db = firebase.database();

    db.ref("humedad/" + fecha).on("value", function(snapshot){
        var resultado = snapshot.val();
        console.log(resultado);

        jresultado = JSON.stringify([resultado]);

        document.getElementById('resultados').innerHTML =jresultado;
    });