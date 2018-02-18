# CryptoButton
CryptoButton is a simple script to create quick crypto-currency donation buttons.

## How to use
First, include the script in the head element:

```html
<script type="text/javascript" src="https://cdn.rawgit.com/Electro-Light/CryptoButton/55be4e60/crypto.src.js"></script>
```
Then, add the buttons:

```html
<div class="crypto-button" data-money="moneySymbol" data-address="yourAddress"></div>
```
Of course, replace *moneySymbol* with the symbol of the crypto-currency you want to use, and *yourAddress* with your receiver address.

Finaly, load the script:

```html
<script>window.onload = cryptoButton;</script>
```
## Example
```html
<html>
<head>
	<script type="text/javascript" src="https://cdn.rawgit.com/Electro-Light/CryptoButton/master/crypto.src.js"></script>
</head>
<body>


	<div class="crypto-button" data-money="ETH"
		data-address="0x94a5faec615b9db2160798cecef713cefb5fb979"></div>

	<div class="crypto-button" data-money="bTc"
		data-address="3R1Uk5RQJEqA2GdPM2CCzPCA7VSeaQSmEH"></div>

	<div class="crypto-button" data-money="XmR"
		data-address="47K59GiSjEkLeMJLnd65sAPvZwPPAgjXC8knB9mg1MHQU3qrSkcs4iZWbwaVe4vUMveKAzAiA4j8xgUi29TpKXpm3ycsQYU"></div>

	<div class="crypto-button" data-money="dash"
		data-address="Xfto77keuUNUFbySqf4fbAUeE6SGodvDVP"></div>
	<script>window.onload = cryptoButton;</script>


</body>
</html>
```

## Credits
Thanks to cjdowner for all of the crypto-currencies icons.
