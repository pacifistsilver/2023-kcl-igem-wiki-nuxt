<template>
    <nav class="navbar navbar-expand-xl navbar-light bg-light fixed-top" id="navbar">
        <div class="container" id="navbar-container">
            <!---- TEAM NAME ---->
            <a class = "navbar-brand" href="./">
                <img id = "navbar-brand img" src="https://static.igem.wiki/teams/4584/wiki/blue-logo-name-white-background-removebg-preview.png">
            </a>

            <!---- SMALL SCREEN MENU ICON ---->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="bg-light collapse navbar-collapse" id="navbarSupportedContent" >
                <ul class="navbar-nav ml-auto left-aligned">

                    <!---- TEAM ---->
                    <li class="nav-item dropdown">
                        <NuxtLink class = "nav-link dropdown-toggle" id="navbar-item" role="button" data-bs-toggle="dropdown" aria-expanded="false" to="./team">
                            Team
                        </NuxtLink>
                        <ul class="dropdown-menu" aria-labelledby="navbar item">
                            <li><NuxtLink class="dropdown-item" to="./members">Members</NuxtLink></li>
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
                                <li><NuxtLink class="dropdown-item" to="./education">Best New Basic Part</NuxtLink></li>
                                <li><NuxtLink class="dropdown-item" to="./measurement">Integrated Human Practices</NuxtLink></li>
                                <li><NuxtLink class="dropdown-item" to="./education">Education</NuxtLink></li>
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
          var navbar = document.getElementById("navbar")
          var nav_classes = navbar.classList
          if(document.documentElement.scrollTop >= 150) {
            if (nav_classes.contains("navbar-scrolled") === false) {
              nav_classes.toggle("navbar-scrolled");
            }
          }
          else {
            if (nav_classes.contains("navbar-scrolled") === true) {
              nav_classes.toggle("navbar-scrolled");
            }
          }
        })
      })
    },
}
</script>