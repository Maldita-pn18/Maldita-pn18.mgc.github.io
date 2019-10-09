var clickConnect = document.getElementById('Btnconnect');
var clickDisconnect = document.getElementById("Btndisconnect");
var address = "wss://test.mosquitto.org:8081/mqtt";   //BROKER address
var Status = document.getElementById("status");

client = mqtt.connect(address) // CONNECT to BROKER ADDRESS --check

clickConnect.addEventListener('click', function () {
  var topic = 'marygrace/device/status';
  var payload = 'Turned On: ' + new Date();
  client.publish(topic, payload);
  Status.innerHTML = "<i>The device is currently turned on</i>";
  Status.style.color = 'green';

});

client.on("connect", function () { //On CONNECT to BROKER
  Status.innerHTML = "<i>The device is currently turned off!</i>";
});



clickDisconnect.addEventListener("click", function () { // off the switch
  var topic = 'marygrace/device/status';
  var payload = 'Turned Off: ' + new Date();
  client.publish(topic, payload);
  Status.innerHTML = "<i>The device is currently turned off</i>";
  Status.style.color = 'red';
});