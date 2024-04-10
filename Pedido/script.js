function iniciarPedido() {
  var nomeCliente = document.getElementById("nomeInput").value.trim();
  if (nomeCliente) {
    document.getElementById("nomeCliente").textContent = nomeCliente;
    document.getElementById("pedidoForm").classList.add("show");
  } else {
    alert("Por favor, insira seu nome para começar o pedido.");
  }
}

function calcularTotal() {
  var sorvete1 = document.getElementById("sorvete1");
  var sorvete2 = document.getElementById("sorvete2");
  var totalPrice = document.getElementById("totalPrice");
  var sorvetePrice = document.getElementById("sorvetePrice");

  var sorvete1Value = parseFloat(sorvete1.value);
  var sorvete2Value = parseFloat(sorvete2.value);

  if (sorvete1Value === 0 && sorvete2Value === 0) {
    alert("Por favor, selecione pelo menos um sabor de sorvete.");
    return;
  }

  var total = sorvete1Value + sorvete2Value;
  totalPrice.textContent = "R$ " + total.toFixed(2);

  var sorvete1Text = sorvete1.options[sorvete1.selectedIndex].text;
  var sorvete2Text = sorvete2.options[sorvete2.selectedIndex].text;

  sorvetePrice.innerHTML = "";
  if (sorvete1Value !== 0) {
    var sorvete1PriceElement = document.createElement("p");
    sorvete1PriceElement.textContent = sorvete1Text + ": R$ " + sorvete1Value.toFixed(2);
    sorvetePrice.appendChild(sorvete1PriceElement);
  }

  if (sorvete2Value !== 0) {
    var sorvete2PriceElement = document.createElement("p");
    sorvete2PriceElement.textContent = sorvete2Text + ": R$ " + sorvete2Value.toFixed(2);
    sorvetePrice.appendChild(sorvete2PriceElement);
  }

  document.getElementById("totalPedido").classList.add("show");
}

