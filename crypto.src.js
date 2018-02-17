/**
 * CryptoButton, an easy to use widget to create donation buttons for crypto
 * currencies
 */
function cryptoButton() {
	
var nodeList = document.getElementsByClassName("crypto-button");

nodes = Array.prototype.slice.call(nodeList, 0);

nodes
		.forEach(function(node) {
			node.style = "background-color: #e2e2e2; width: 100px; font-family: \"Courier New\"; font-size: 30px; border-radius: 5px; margin: 5px";
			node.innerHTML = "<img src=\"https://raw.githubusercontent.com/cjdowner/cryptocurrency-icons/master/32/color/"
					+ node.dataset.money.toLowerCase()
					+ ".png\">"
					+ node.dataset.money.toUpperCase();
			node.onclick = function() {
				alert(node.dataset.money.toUpperCase() + ": "
						+ node.dataset.address);
			}
		});
}
