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
<html>
<head>
<meta charset="UTF-8">
<title>CryptoButton</title>
<script type="text/javascript" src="https://cdn.rawgit.com/Electro-Light/CryptoButton/55be4e60/crypto.src.js"></script>
</head>
<body>


	<div class="crypto-button" data-money="L4H"
		data-address="HFWpQU9VbEFMvEnNgdXjH6xC5zdUvKEadr"></div>

	<div class="crypto-button" data-money="HTHW"
		data-address="HF5rjaXU7s3QCKuSb6uYJvAeVa3qWC3MKm"></div>

	<div class="crypto-button" data-money="TSA"
		data-address="HQvnLwk1wvzY8jPjVtDdx8JVBnD3i6G5zk"></div>

	<div class="crypto-button" data-money="MSM"
		data-address="HEDnfLS2Mwa3vXQvbmPfQ9x1kCvingyHRe"></div>
<script>window.onload = cryptoButton;</script>


</body>
</html>
