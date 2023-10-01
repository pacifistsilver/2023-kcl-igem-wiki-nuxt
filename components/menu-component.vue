<template>
    <div class="p-menuButton">
        <button class="hamburger hamburger--collapse" type="button" aria-label="Toggle navigation">
            <span class="hamburger-box">
                <span class="hamburger-inner"></span>
            </span>
        </button>
    </div>

    <div class="p-menu" id="menu" data-is-menu-opened="false" tabindex="-1">
        <div class="p-menu__inner" style="height: 394px;">
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
    <nav class="p-header" id="navbar">
        <a class="p-headerLogo" href="/kcl-uk/">
            <img src="https://static.igem.wiki/teams/4584/wiki/blue-logo-name-white-background-removebg-preview.png">
        </a>

        <div class="p-header__inner">
            <div class="p-headerNav">
                <div class="p-headerNavListWrapper">
                    <ul class="navbar-nav p-headerNavList">
                        <!---- PROJECT ---->
                        <li class="nav-item dropdown p-headerNavListItem">
                            <NuxtLink class="nav-link dropdown-toggle p-headerNavListItem__inner " id="navbar-item"
                                role="button" data-bs-toggle="dropdown" aria-expanded="false" to="">
                                <span class="p-headerNavListItem__label">Project</span>

                            </NuxtLink>
                            <ul class="dropdown-menu " aria-labelledby="navbar-item">
                                <li class="p-headerNavListItem">
                                    <NuxtLink class="dropdown-item p-headerNavListItem__inner" to="./description">
                                        <span class="p-headerNavListItem__label">Description</span>
                                    </NuxtLink>
                                </li>
                                <li class="p-headerNavListItem">
                                    <NuxtLink class="dropdown-item p-headerNavListItem__inner" to="./model">
                                        <span class="p-headerNavListItem__label">Model</span>

                                    </NuxtLink>
                                </li>
                                <li class="p-headerNavListItem">
                                    <NuxtLink class="dropdown-item p-headerNavListItem__inner" to="./experiments">
                                        <span class="p-headerNavListItem__label">Experiments</span>


                                    </NuxtLink>
                                </li>
                                <li class="p-headerNavListItem">
                                    <NuxtLink class="dropdown-item p-headerNavListItem__inner" to="./engineering">
                                        <span class="p-headerNavListItem__label">Engineering</span>


                                    </NuxtLink>
                                </li>
                                <li class="p-headerNavListItem">
                                    <NuxtLink class="dropdown-item p-headerNavListItem__inner" to="./results">
                                        <span class="p-headerNavListItem__label">Results</span>


                                    </NuxtLink>
                                </li>
                                <li class="p-headerNavListItem">
                                    <NuxtLink class="dropdown-item p-headerNavListItem__inner" to="./notebook">
                                        <span class="p-headerNavListItem__label">Notebook</span>
                                    </NuxtLink>
                                </li>
                            </ul>
                        </li>

                        <!---- SAFETY ---->
                        <li class="nav-item p-headerNavListItem">
                            <NuxtLink class="nav-link p-headerNavListItem__inner" id="navbar-item" to="./safety">
                                <span class="p-headerNavListItem__label">Safety</span>
                            </NuxtLink>
                        </li>

                        <!---- HUMAN PRACTICES ---->
                        <li class="nav-item p-headerNavListItem">
                            <NuxtLink class="nav-link p-headerNavListItem__inner" id="navbar-item" to="./human-practices">
                                <span class="p-headerNavListItem__label">Human Practices</span>
                            </NuxtLink>
                        </li>

                        <!---- AWARDS ---->
                        <li class="nav-item dropdown p-headerNavListItem">
                            <NuxtLink class="nav-link dropdown-toggle p-headerNavListItem__inner" id="navbar-item"
                                role="button" data-bs-toggle="dropdown" aria-expanded="false" to="./">
                                <span class="p-headerNavListItem__label">Awards</span>
                            </NuxtLink>
                            <ul class="dropdown-menu" aria-labelledby="navbar-item">
                                <li class="p-headerNavListItem">
                                    <NuxtLink class="dropdown-item p-headerNavListItem__inner" to="./parts"><span
                                            class="p-headerNavListItem__label">
                                            New Basic Part
                                        </span></NuxtLink>
                                </li>
                                <li class="p-headerNavListItem">
                                    <NuxtLink class="dropdown-item p-headerNavListItem__inner" to="./ihp"><span
                                            class="p-headerNavListItem__label">
                                            Integrated Human Practices
                                        </span></NuxtLink>
                                </li>
                                <li class="p-headerNavListItem">
                                    <NuxtLink class="dropdown-item p-headerNavListItem__inner" to="./education"><span
                                            class="p-headerNavListItem__label">
                                            Education
                                        </span></NuxtLink>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item p-headerNavListItem">
                            <NuxtLink class="nav-link p-headerNavListItem__inner" id="navbar-item" to="./results">
                                <span class="p-headerNavListItem__label">Results</span>
                            </NuxtLink>
                        </li>

                        <li class="nav-item dropdown p-headerNavListItem">
                            <NuxtLink class="nav-link dropdown-toggle p-headerNavListItem__inner" id="navbar-item"
                                role="button" data-bs-toggle="dropdown" aria-expanded="false" to="./team">
                                <span class="p-headerNavListItem__label">Team</span>
                            </NuxtLink>
                            <ul class="dropdown-menu" aria-labelledby="navbar item">
                                <li class="p-headerNavListItem">
                                    <NuxtLink class="dropdown-item p-headerNavListItem__inner" to="./members">Members
                                    </NuxtLink>
                                </li>
                                <li class="p-headerNavListItem">
                                    <NuxtLink class="dropdown-item p-headerNavListItem__inner" to="./attributions">
                                        Attributions</NuxtLink>
                                </li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>  
<script>
export default {
    created() {
        const windowWidth = window.innerWidth;
        const rootFontSize = windowWidth >= 1440 ? (windowWidth / 1440) * 100 + "%" : "100%";
        document.documentElement.style.fontSize = rootFontSize;
        console.log("fuck")
        this.$nextTick(() => {
            document.documentElement.style.fontSize = rootFontSize;

        });
    },
    mounted() {
        const menuElement = document.getElementById("menu");
        const appLayoutElement = document.getElementById("app-layout");
        const hamburger = document.querySelector(".hamburger");
        const viewportSizeThreshold = 1024;

        function handleScroll() {
            const scrollTop = document.documentElement.scrollTop;

            if (scrollTop >= 150) {
                if (appLayoutElement.getAttribute("data-is-scrolled") === "false") {
                    appLayoutElement.setAttribute("data-is-scrolled", "true");
                }
            } else {
                appLayoutElement.setAttribute("data-is-scrolled", "false");
                menuElement.setAttribute("data-is-menu-opened", "false");
                hamburger.classList.remove("is-active");
            }
        };

        function handleHamburgerClick() {
            hamburger.classList.toggle("is-active");

            if (menuElement.getAttribute("data-is-menu-opened") === "false") {
                menuElement.setAttribute("data-is-menu-opened", "true");
            } else {
                menuElement.setAttribute("data-is-menu-opened", "false");
            }
        };

        function handleViewportResize() {
            const windowWidth = window.innerWidth;

            // Close the menu if the viewport width is less than or equal to the threshold.
            if (windowWidth <= viewportSizeThreshold) {
                menuElement.setAttribute("data-is-menu-opened", "false");
                hamburger.classList.remove("is-active");
            }
        };
        this.$nextTick(() => {
            window.addEventListener("scroll", handleScroll);
            window.addEventListener("resize", handleViewportResize);
            hamburger.addEventListener("click", handleHamburgerClick);
            
        });
    },

};
</script>