<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container" id="navbar-container">

            <!---- TEAM NAME ---->
            <a class = "navbar-brand" href="./"><img id = "navbar-logo" src="https://static.igem.wiki/teams/4584/wiki/blue-logo-name-white-background-removebg-preview.png"></a>

            <!---- SMALL SCREEN MENU ICON ---->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto left-aligned">

                <!---- TEAM ---->
                <li class="nav-item dropdown">
                    <NuxtLink class = "nav-link dropdown-toggle" id="navbar-item" role="button" data-bs-toggle="dropdown" aria-expanded="false" to="./team">
                        Team
                    </NuxtLink>
                    <ul class="dropdown-menu" aria-labelledby="navbar item">
                        <li><NuxtLink class="dropdown-item" to="./team">Team</NuxtLink></li>
                        <li><NuxtLink class="dropdown-item" to="./attributions">Attributions</NuxtLink></li>
                    </ul>
                </li>

                <!---- PROJECT ---->
                <li class="nav-item dropdown">
                    <NuxtLink class = "nav-link dropdown-toggle" id="navbar-item" role="button" data-bs-toggle="dropdown" aria-expanded="false" to="">
                        Project
                    </NuxtLink>
                    <ul class="dropdown-menu" aria-labelledby="navbar-item">
                        <li><NuxtLink class="dropdown-item" to="./description">Description</NuxtLink></li>
                        <li><NuxtLink class="dropdown-item" to="./model">Model</NuxtLink></li>
                        <li><NuxtLink class="dropdown-item" to="./experiments">Experiments</NuxtLink></li>
                        <li><NuxtLink class="dropdown-item" to="./engineering">Engineering</NuxtLink></li>
                        <li><NuxtLink class="dropdown-item" to="./results">Results</NuxtLink></li>
                        <li><NuxtLink class="dropdown-item" to="./description">Proof of Concept</NuxtLink></li>
                        <li><NuxtLink class="dropdown-item" to="./notebook">Notebook</NuxtLink></li>
                    </ul>   
                </li>

                <!---- SAFETY ---->
                <li class="nav-item">
                <NuxtLink class="nav-link" id="navbar-item" to="./safety">Safety</NuxtLink>
                </li>

                <!---- HUMAN PRACTICES ---->
                <li class="nav-item">
                    <NuxtLink class="nav-link" id="navbar-item"  to="./human-practices">Human Practices</NuxtLink>
                </li>

                <!---- AWARDS ---->
                <li class="nav-item dropdown">
                    <NuxtLink class="nav-link dropdown-toggle" id="navbar-item" role="button" data-bs-toggle="dropdown" aria-expanded="false" to="./">Awards</NuxtLink>
                        <ul class="dropdown-menu" aria-labelledby="navbar-item">       
                            <li><NuxtLink class="dropdown-item" to="./education">Education</NuxtLink></li>
                            <li><NuxtLink class="dropdown-item" to="./entrepreneurship">Entrepreneurship</NuxtLink></li>
                            <li><NuxtLink class="dropdown-item" to="./hardware">Hardware</NuxtLink></li>
                            <li><NuxtLink class="dropdown-item" to="./inclusivity">Inclusivity</NuxtLink></li>
                            <li><NuxtLink class="dropdown-item" to="./measurement">Measurement</NuxtLink></li>
                            <li><NuxtLink class="dropdown-item" to="./model">Model</NuxtLink></li>
                            <li><NuxtLink class="dropdown-item" to="./plant">Plant</NuxtLink></li>
                            <li><NuxtLink class="dropdown-item" to="./software">Software</NuxtLink></li>
                            <li><NuxtLink class="dropdown-item" to="./sustainable">Sustainable</NuxtLink></li>
                        </ul>
                </li>
            </ul>
            </div>
        </div>
    </nav>
</template>  
<script>
export default {
mounted() {
      this.$nextTick(function(){
        window.addEventListener("scroll", function(){
          var navbar = document.getElementById("navbar-container");
          var nav_classes = navbar.classList;
          if(document.documentElement.scrollTop >= 150) {
            if (nav_classes.contains("shrink") === false) {
              nav_classes.toggle("shrink");
            }
          }
          else {
            if (nav_classes.contains("shrink") === true) {
              nav_classes.toggle("shrink");
            }
          }
        })
      })
    },
}
</script>