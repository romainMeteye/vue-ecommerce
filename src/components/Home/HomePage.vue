<template>
<body>
  <!-- Section principale -->
  <section class="main">
    
    <!-- Toutes les cartes -->
    
    <div class="cards">
      
      <div class="card">
        <img src="https://static.nike.com/a/images/f_auto/q_auto:eco/t_PDP_864_v1/0697fd03-09fd-4b3b-be0b-11b009c671d9/short-en-molleton-sportswear-pour-z5Kgjx.jpg">
        <div class="card-header">
          <h4 class="title">Short Nike</h4>
          <h4 class="price">199€</h4>
        </div>
        <div class="card-body">
          <p>Short moulant pour homme</p>
        </div>
      </div>
      
      <div class="card">
        <img src="https://static.nike.com/a/images/f_auto/q_auto:eco/t_PDP_864_v1/eric5lwitzffpoisq0rj/chaussure-blazer-mid-77-vintage-pour-pMfjs8.jpg">
        <div class="card-header">
          <h4 class="title">Paire de chaussures stylées</h4>
          <h4 class="price">69€</h4>
        </div>
        <div class="card-body">
          <p>Des paires de chaussures stylées pour femme</p>
        </div>
      </div>
      
      <div class="card">
        <img src="https://static.nike.com/a/images/f_auto/q_auto:eco/t_PDP_864_v1/abb537eb-0e70-4e1f-903e-ec46b8657c0d/short-de-training-en-tissu-fleece-dri-fit-pour-n97b2F.jpg">
        <div class="card-header">
          <h4 class="title">Short pour courir</h4>
          <h4 class="price">39€</h4>
        </div>
        <div class="card-body">
          <p>Sport pour courir en plain air pour homme</p>
        </div>
      </div>
      
     </div>
    <!-- Fin de toutes les cartes -->
    
    <!-- Video de presentation -->
    <div class="video">
      <iframe src="https://www.youtube.com/embed/2COSkxxOtXY" allowfullscreen></iframe>
    </div>
    <!-- Fin de la video de presentation -->
  </section>
  <!-- Fin de la section principale -->
  
  <!-- Pied de page -->
  <footer>
    <div class="social-media">
      <p><i class="../../assets/facebook.png"></i></p>
      <p><i class="../../assets/telegram.png"></i></p>
      <p><i class="../../assets/instagram.png"></i></p>
      <p><i class="../../assets/linkedin.png"></i></p>
    </div>
  </footer>
  <!-- Fin du pied de page -->
</body>
</template>

<script>

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
body{
  margin:0px;
  padding: 0px;
  font-family: 'Open Sans', sans-serif;
}

/* Header */
header{
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
}
header h1{
  font-size: 50px;
  max-width: 500px;
  text-align:center;
}
header button{
  padding: 15px 20px;
  font-size: 20px;
  border:none;
  border-radius: 5px;
  outline:none;
  cursor:pointer;
}
/* Fin du header */

/* Section principale */

.main{
  margin: 20px;
  margin-top: 80px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
}
/* Toutes les cartes */
.cards{
  display:flex;
  flex-wrap:wrap;
}
.cards .card{
  margin-right: 20px;
  cursor:pointer;
}
.cards .card img{
  width: 350px;
}
.cards .card .card-header{
  display: flex;
  flex-wrap:wrap;
  justify-content: space-between;
}
.cards .card .card-body p{
  margin-top: -10px;
}
/* Fin de toutes les cartes */

/* Video de présentation */
.main .video{
  margin-top: 80px;
  width: 90%;
}
.main .video iframe{
  border:none;
  border-radius: 10px;
  width: 100%;
  height: 400px;
}
/* Fin de la vidéo de présentation */
/* Fin de la section principale */

/* Pied de page */
footer {
  margin-top: 100px;
  background-color: #000;
  padding: 30px;
  color: #fff;
  display: flex;
  flex-wrap:wrap;
  justify-content: space-between;
}
footer .social-media{
  display: flex;
}
footer .social-media p{
  margin-right: 15px;
  border: 1px solid #fff;
  border-radius: 100%;
  padding: 5px;
  text-align:center;
  width: 20px;
  cursor:pointer;
}
/* Fin du pied de page */

@media screen and (max-width: 640px){
  nav .onglets .link, nav h1{
    display:none;
  }
  .cards .card img{
    width: 300px;
  }
}
</style>
