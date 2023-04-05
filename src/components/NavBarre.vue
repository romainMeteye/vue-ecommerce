<style>
	header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px;
	background-color: #ffffff;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 999;
	}

	nav ul {
	display: flex;
	list-style: none;
	margin-left: 600px;
	padding: 0;
	}

	nav li {
	margin-right: 20px;
	}

	nav li:last-child {
	margin-right: 0;
	}

	nav a {
	color: #333333;
	text-decoration: none;
	font-weight: bold;
	transition: all 0.3s ease-in-out;
	}

	nav a:hover {
	color: #ff4500;
	}

	.cart-toggle {
	position: relative;
	}

	.cart-toggle:before {
	content: "0";
	display: block;
	width: 16px;
	height: 16px;
	line-height: 16px;
	text-align: center;
	background-color: #ff4500;
	color: #ffffff;
	border-radius: 50%;
	position: absolute;
	top: -8px;
	right: -8px;
	font-size: 12px;
	}

	.cart-toggle:hover:before {
	transform: scale(1.1);
	}

</style>

<template>
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Site E-commerce</title>
	</head>
	<body>
		<header>
			<nav>
				<ul>
					<li><a href="#">Accueil</a></li>
					<li><a href="#">Produits</a></li>
					<li><a href="#">Contact</a></li>
					<li><a href="#" class="cart-toggle">Panier (0)</a></li>
				</ul>
			</nav>
		</header>
	</body>
</template>
