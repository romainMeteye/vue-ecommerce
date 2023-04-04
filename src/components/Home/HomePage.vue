<style>


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

		<main>
			<h1>Nos produits</h1>
			<div id="app">
				<div class="product" v-for="(product, index) in products" :key="index">
					<h2>{{ product.name }}</h2>
					<p>{{ product.price }}€</p>
					<button @click="addToCart(product)">Ajouter au panier</button>
				</div>
			</div>
		</main>

		<div class="cart">
			<h2>Panier</h2>
			<ul>
				<li v-for="(product, index) in cart" :key="index">
					<span>{{ product.name }}</span>
					<span>{{ product.price }}€</span>
				</li>
			</ul>
			<button>Commander</button>
		</div>
	</body>
</template>
