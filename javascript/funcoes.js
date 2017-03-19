	// mudar imagens do menu
	function mudaImg(foto) {
		document.getElementById("icone").src = foto;
	}
	
	// Calcular preço de compra do formulário
	function calcTotal() {
		var qtdd = parseInt(document.getElementById("cQtdd").value);
		var total = qtdd * 1500;
		document.getElementById("cTot").value = "R$" + total;
	}


