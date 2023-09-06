<template>
    <nav class="navbar navbar-expand-xl" id="navbar">
        <div class="container" id="navbar-container">
            <!---- TEAM NAME ---->
            <a class = "navbar-brand" href="/kcl-uk/">
                <img id = "navbar-brand img" src="https://static.igem.wiki/teams/4584/wiki/blue-logo-name-white-background-removebg-preview.png">
            </a>

            <!---- SMALL SCREEN MENU ICON ---->


            <button class="hamburger hamburger--spin" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent" >
                <ul class="navbar-nav ml-auto left-aligned">
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
                                <li><NuxtLink class="dropdown-item" to="./parts">New Basic Part</NuxtLink></li>
                                <li><NuxtLink class="dropdown-item" to="./ihp">Integrated Human Practices</NuxtLink></li>
                                <li><NuxtLink class="dropdown-item" to="./education">Education</NuxtLink></li>
                            </ul>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link" id="navbar-item"  to="./results">Results</NuxtLink>
                    </li>

                    <li class="nav-item dropdown">
                        <NuxtLink class = "nav-link dropdown-toggle" id="navbar-item" role="button" data-bs-toggle="dropdown" aria-expanded="false" to="./team">
                            Team
                        </NuxtLink>
                        <ul class="dropdown-menu" aria-labelledby="navbar item">
                            <li><NuxtLink class="dropdown-item" to="./members">Members</NuxtLink></li>
                            <li><NuxtLink class="dropdown-item" to="./attributions">Attributions</NuxtLink></li>
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
        window.addEventListener('click', function() {
            // Toggle class "is-active"
            var hamburger = document.querySelector(".hamburger");
            hamburger.classList.toggle("is-active");
            
            // Do something else, like open/close menu
    })
})
}}
</script>