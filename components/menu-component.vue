<template>
    <div class="menuButton">
        <button class="hamburger hamburger--spin" type="button" aria-label="Toggle navigation">
            <span class="hamburger-box">
                <span class="hamburger-inner"></span>
            </span>
        </button>
    </div>

    <div class="p-menu" id="menu" data-is-menu-opened="false" tabindex="-1">
        <div class="p-menu__inner" style="height: 526px;">
            <div class="p-menu__contents">
                <nav class="p-menuNav" aria-label="ナビゲーションメニュー" itemscope="" itemprop="hasPart"
                    itemtype="http://schema.org/SiteNavigationElement">
                    <ul class="p-menuNavList">
                        <li class="p-menuNavListItem" itemprop="hasPart" itemscope="" itemtype="http://schema.org/WebPage">
                            <a class="p-menuNavListItem__inner" itemprop="url" href="/" data-path-id="index"
                                aria-current="false"><span class="p-menuNavListItem__label" itemprop="name">Home</span></a>
                        </li>
                        <li class="p-menuNavListItem" itemprop="hasPart" itemscope="" itemtype="http://schema.org/WebPage">
                            <a class="p-menuNavListItem__inner " itemprop="url" href="/project/" data-path-id="wedo"
                                aria-current="false"><span class="p-menuNavListItem__label"
                                    itemprop="name">Project</span></a>
                        </li>
                        <li class="p-menuNavListItem" itemprop="hasPart" itemscope="" itemtype="http://schema.org/WebPage">
                            <a class="p-menuNavListItem__inner " itemprop="url" href="/safety/" data-path-id="result"
                                aria-current="false"><span class="p-menuNavListItem__label"
                                    itemprop="name">Safety</span></a>
                        </li>
                        <li class="p-menuNavListItem" itemprop="hasPart" itemscope="" itemtype="http://schema.org/WebPage">
                            <a class="p-menuNavListItem__inner " itemprop="url" href="/humanprac/" data-path-id="career"
                                aria-current="page"><span class="p-menuNavListItem__label" itemprop="name">Human
                                    Practices</span></a>
                        </li>
                        <li class="p-menuNavListItem" itemprop="hasPart" itemscope="" itemtype="http://schema.org/WebPage">
                            <a class="p-menuNavListItem__inner " itemprop="url" href="/awards/" data-path-id="news"
                                aria-current="false"><span class="p-menuNavListItem__label"
                                    itemprop="name">Awards</span></a>
                        </li>
                        <li class="p-menuNavListItem" itemprop="hasPart" itemscope="" itemtype="http://schema.org/WebPage">
                            <a class="p-menuNavListItem__inner " itemprop="url" href="/results/" target="_blank"
                                data-path-id="blog" aria-current="false"><span class="p-menuNavListItem__label"
                                    itemprop="name">Results</span></a>
                        </li>
                        <li class="p-menuNavListItem" itemprop="hasPart" itemscope="" itemtype="http://schema.org/WebPage">
                            <a class="p-menuNavListItem__inner " itemprop="url" href="/team/" data-path-id="company"
                                aria-current="false"><span class="p-menuNavListItem__label" itemprop="name">Team</span></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
    <nav class="navbar p-header" id="navbar">
        <a class="p-headerLogo" href="/kcl-uk/">
            <img src="https://static.igem.wiki/teams/4584/wiki/blue-logo-name-white-background-removebg-preview.png">
        </a>

        <div class="p-header__inner">
            <ul class="navbar-nav p-headerNav">
                <!---- PROJECT ---->
                <li class="nav-item dropdown p-headerNavListItem">
                    <NuxtLink class="nav-link dropdown-toggle" id="navbar-item" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false" to="">
                        <span class="menuNavItem__label">Project</span>

                    </NuxtLink>
                    <ul class="dropdown-menu" aria-labelledby="navbar-item">
                        <li class = "p-headerNavListItem">
                            <NuxtLink class="dropdown-item" to="./description">
                                <span>Description</span>
                            </NuxtLink>
                        </li>
                        <li class = "p-headerNavListItem">
                            <NuxtLink class="dropdown-item" to="./model">
                                <span>Model</span>

                            </NuxtLink>
                        </li>
                        <li class = "p-headerNavListItem">
                            <NuxtLink class="dropdown-item" to="./experiments">
                                <span>Experiments</span>


                            </NuxtLink>
                        </li>
                        <li class = "p-headerNavListItem">
                            <NuxtLink class="dropdown-item" to="./engineering">
                                <span>Engineering</span>


                            </NuxtLink>
                        </li>
                        <li class = "p-headerNavListItem">
                            <NuxtLink class="dropdown-item" to="./results">
                                <span>Results</span>


                            </NuxtLink>
                        </li>
                        <li class = "p-headerNavListItem">
                            <NuxtLink class="dropdown-item" to="./notebook">
                                <span>Notebook</span>
                            </NuxtLink>
                        </li>
                    </ul>
                </li>

                <!---- SAFETY ---->
                <li class="nav-item p-headerNavListItem">
                    <NuxtLink class="nav-link" id="navbar-item" to="./safety">
                        <span class="menuNavItem__label">Safety</span>
                    </NuxtLink>
                </li>

                <!---- HUMAN PRACTICES ---->
                <li class="nav-item p-headerNavListItem">
                    <NuxtLink class="nav-link" id="navbar-item" to="./human-practices">
                        <span class="menuNavItem__label">Human Practices</span>
                    </NuxtLink>
                </li>

                <!---- AWARDS ---->
                <li class="nav-item dropdown p-headerNavListItem">
                    <NuxtLink class="nav-link dropdown-toggle" id="navbar-item" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false" to="./">
                        <span class="menuNavItem__label">Awards</span>
                    </NuxtLink>
                    <ul class="dropdown-menu" aria-labelledby="navbar-item">
                        <li class = "p-headerNavListItem">
                            <NuxtLink class="dropdown-item" to="./parts">New Basic Part</NuxtLink>
                        </li>
                        <li class = "p-headerNavListItem">
                            <NuxtLink class="dropdown-item" to="./ihp">Integrated Human Practices</NuxtLink>
                        </li>
                        <li class = "p-headerNavListItem">
                            <NuxtLink class="dropdown-item" to="./education">Education</NuxtLink>
                        </li>
                    </ul>
                </li>
                <li class="nav-item p-headerNavListItem">
                    <NuxtLink class="nav-link" id="navbar-item" to="./results">
                        <span class="menuNavItem__label">Results</span>
                    </NuxtLink>
                </li>

                <li class="nav-item dropdown p-headerNavListItem">
                    <NuxtLink class="nav-link dropdown-toggle" id="navbar-item" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false" to="./team">
                        <span class="menuNavItem__label">Team</span>
                    </NuxtLink>
                    <ul class="dropdown-menu" aria-labelledby="navbar item">
                        <li class = "p-headerNavListItem">
                            <NuxtLink class="dropdown-item" to="./members">Members</NuxtLink>
                        </li>
                        <li class = "p-headerNavListItem">
                            <NuxtLink class="dropdown-item" to="./attributions">Attributions</NuxtLink>
                        </li>
                    </ul>
                </li>

            </ul>
        </div>
    </nav>
</template>  
<script>
export default {
    mounted() {
        var menu_opened_status = document.getElementById("menu")

        this.$nextTick(function () {
            var hamburger = document.querySelector(".hamburger");
            window.addEventListener("scroll", function () {
                var is_scrolled = document.getElementById("app-layout")
                if (document.documentElement.scrollTop >= 150) {
                    if (is_scrolled.getAttribute("data-is-scrolled") === "false") {
                        is_scrolled.setAttribute("data-is-scrolled", "true");

                    }
                }
                else {
                    is_scrolled.setAttribute("data-is-scrolled", "false")
                    menu_opened_status.setAttribute("data-is-menu-opened", "false");
                    hamburger.classList.remove("is-active");


                }

            })
            hamburger.addEventListener('click', function () {
                // Toggle class "is-active"
                hamburger.classList.toggle("is-active");
                if (menu_opened_status.getAttribute("data-is-menu-opened") === "false") {
                    menu_opened_status.setAttribute("data-is-menu-opened", "true");

                }
                else {
                    menu_opened_status.setAttribute("data-is-menu-opened", "false")
                }

            })

        }
        )
    }
}
</script>