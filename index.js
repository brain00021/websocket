let ws = new WebSocket("ws://localhost:3000");

ws.onopen = () => {
  console.log("open connection");
};

ws.onclose = () => {
  console.log("close connection");
};

//接收 Server 發送的訊息
ws.onmessage = (event) => {
  if (event.data instanceof Blob) {
    reader = new FileReader();

    reader.onload = () => {
      console.log("Result: " + reader.result);
      if (reader.result) {
        var node = document.createElement("LI"); // Create a <li> node
        var textnode = document.createTextNode(reader.result); // Create a text node
        node.appendChild(textnode); // Append the text to <li>
        document.getElementById("message").appendChild(node); // Append <li> to <ul> with id="myList"
      }
    };

    reader.readAsText(event.data);
  } else {
    console.log("Result:2 " + event.data);
  }
};
function sendserver() {
  let msg = document.getElementById("name").value;
  ws.send(msg);
}
