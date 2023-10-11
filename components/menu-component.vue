<template>
    <div class="p-menuButton">
        <button class="hamburger hamburger--collapse" type="button" aria-label="Toggle navigation">
            <span class="hamburger-box">
                <span class="hamburger-inner"></span>
            </span>
        </button>
    </div>

    <div class="p-menu" id="menu" data-is-menu-opened="false" tabindex="-1">
        <div class="p-menu__inner" style="height: 24.938rem;">
            <div class="p-menu__contents">
                <nav class="p-menuNav" aria-label="ナビゲーションメニュー" itemscope="" itemprop="hasPart"
                    itemtype="http://schema.org/SiteNavigationElement">
                    <ul class="p-menuNavList">
                        <li class="p-menuNavListItem" itemprop="hasPart" itemscope="" itemtype="http://schema.org/WebPage">
                            <NuxtLink class="p-menuNavListItem__inner" to="./">
                                <span class="p-menuNavListItem__label">Home</span>

                            </NuxtLink>
                        </li>
                        <li id="submenu-button1" class="p-menuNavListItem submenu1" itemprop="hasPart" itemscope=""
                            itemtype="http://schema.org/WebPage">
                            <div class="p-menuNavListItem__inner " to="">
                                <span class="p-menuNavListItem__label">Project</span>
                            </div>
                        </li>
                        <li class="p-menuNavListItem" itemprop="hasPart" itemscope="" itemtype="http://schema.org/WebPage">
                            <NuxtLink class="p-menuNavListItem__inner" to="./safety">
                                <span class="p-menuNavListItem__label">Safety</span>

                            </NuxtLink>

                        </li>
                        <li class="p-menuNavListItem" itemprop="hasPart" itemscope="" itemtype="http://schema.org/WebPage">
                            <NuxtLink class="p-menuNavListItem__inner" to="./ihp">
                                <span class="p-menuNavListItem__label">Human Practices</span>

                            </NuxtLink>
                        </li>
                        <li id="submenu-button2" class="p-menuNavListItem" itemprop="hasPart" itemscope=""
                            itemtype="http://schema.org/WebPage">
                            <NuxtLink class="p-menuNavListItem__inner" to="">
                                <span class="p-menuNavListItem__label">Awards</span>

                            </NuxtLink>
                        </li>
                        <li class="p-menuNavListItem" itemprop="hasPart" itemscope="" itemtype="http://schema.org/WebPage">
                            <NuxtLink class="p-menuNavListItem__inner" to="./results">
                                <span class="p-menuNavListItem__label">Results</span>

                            </NuxtLink>

                        </li>
                        <li id="submenu-button3" class="p-menuNavListItem" itemprop="hasPart" itemscope=""
                            itemtype="http://schema.org/WebPage">
                            <NuxtLink class="p-menuNavListItem__inner" to="">
                                <span class="p-menuNavListItem__label">Team</span>

                            </NuxtLink>
                        </li>
                    </ul>
                    <div class="c-roundedButton p-menuContactLink" itemprop="hasPart" itemscope=""
                        itemtype="http://schema.org/WebPage">
                        <a class="c-roundedButton__inner p-menuContactLink__inner js-menuNavItem" itemprop="url"
                            href="/contact/" data-path-id="contact" aria-current="false"><span
                                class="c-roundedButton__label p-menuContactLink__label" itemprop="name">Contact</span></a>
                    </div>
                </nav>
            </div>
        </div>
    </div>


    <div class="p-submenu" id="submenu1" data-is-submenu-opened="false" tabindex="-1">
        <div class="p-menu__inner" style="height: 24.938rem;">
            <div class="p-menu__contents">
                <nav class="p-menuNav" aria-label="ナビゲーションメニュー" itemscope="" itemprop="hasPart">

                    <ul class="p-menuNavList" aria-labelledby="navbar-item">
                        <li class="p-menuNavListItem" id="p-menuNavListItem__back">
                            <div class="p-menuNavListItem__inner" to="/">
                                <span class="p-menuNavListItem__label">Back</span>
                            </div>
                        </li>

                        <li class="p-menuNavListItem">
                            <NuxtLink class="p-menuNavListItem__inner" to="./description">
                                <span class="p-menuNavListItem__label">Description</span>
                            </NuxtLink>
                        </li>
                        <li class="p-menuNavListItem">
                            <NuxtLink class="p-menuNavListItem__inner" to="./model">
                                <span class="p-menuNavListItem__label">Model</span>
                            </NuxtLink>
                        </li>
                        <li class="p-menuNavListItem">
                            <NuxtLink class="p-menuNavListItem__inner" to="./experiments">
                                <span class="p-menuNavListItem__label">Experiments</span>
                            </NuxtLink>
                        </li>
                        <li class="p-menuNavListItem">
                            <NuxtLink class="p-menuNavListItem__inner" to="./engineering">
                                <span class="p-menuNavListItem__label">Engineering</span>
                            </NuxtLink>
                        </li>
                        <li class="p-menuNavListItem">
                            <NuxtLink class="p-menuNavListItem__inner" to="./results">
                                <span class="p-menuNavListItem__label">Results</span>
                            </NuxtLink>
                        </li>
                        <li class="p-menuNavListItem">
                            <NuxtLink class="p-menuNavListItem__inner" to="./notebook">
                                <span class="p-menuNavListItem__label">Notebook</span>
                            </NuxtLink>
                        </li>
                        <li class="p-menuNavListItem">
                            <NuxtLink class="p-menuNavListItem__inner" to="./contribution">
                                <span class="p-menuNavListItem__label">Contributions</span>
                            </NuxtLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>

    <div class="p-submenu" id="submenu2" data-is-submenu-opened="false" tabindex="-1">
        <div class="p-menu__inner" style="height: 24.938rem;">
            <div class="p-menu__contents">
                <nav class="p-menuNav" aria-label="ナビゲーションメニュー" itemscope="" itemprop="hasPart">

                    <ul class="p-menuNavList" aria-labelledby="navbar-item">
                        <li class="p-menuNavListItem" id="p-menuNavListItem__back">
                            <div class="p-menuNavListItem__inner" to="/">
                                <span class="p-menuNavListItem__label">Back</span>
                            </div>
                        </li>

                        <li class="p-menuNavListItem">
                            <NuxtLink class="p-menuNavListItem__inner" to="./parts">
                                <span class="p-menuNavListItem__label">New Basic Part</span>
                            </NuxtLink>
                        </li>
                        <li class="p-menuNavListItem">
                            <NuxtLink class="p-menuNavListItem__inner" to="./ihp">
                                <span class="p-menuNavListItem__label">IHP</span>
                            </NuxtLink>
                        </li>
                        <li class="p-menuNavListItem">
                            <NuxtLink class="p-menuNavListItem__inner" to="./education">
                                <span class="p-menuNavListItem__label">Education</span>
                            </NuxtLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>

    <div class="p-submenu" id="submenu3" data-is-submenu-opened="false" tabindex="-1">
        <div class="p-menu__inner" style="height: 24.938rem;">
            <div class="p-menu__contents">
                <nav class="p-menuNav" aria-label="ナビゲーションメニュー" itemscope="" itemprop="hasPart">

                    <ul class="p-menuNavList" aria-labelledby="navbar-item">
                        <li class="p-menuNavListItem" id="p-menuNavListItem__back">
                            <div class="p-menuNavListItem__inner" to="/">
                                <span class="p-menuNavListItem__label">Back</span>
                            </div>
                        </li>

                        <li class="p-menuNavListItem">
                            <NuxtLink class="p-menuNavListItem__inner" to="./members">
                                <span class="p-menuNavListItem__label">Members</span>
                            </NuxtLink>
                        </li>
                        <li class="p-menuNavListItem">
                            <NuxtLink class="p-menuNavListItem__inner" to="./attributions">
                                <span class="p-menuNavListItem__label">Attributions</span>
                            </NuxtLink>
                        </li>

                    </ul>
                </nav>
            </div>
        </div>
    </div>

    <nav class="p-header" id="navbar" :class="{ 'solid-blue-background': isIndexPage }">
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
                                <li class="">
                                    <NuxtLink class="dropdown-item p-headerNavListItem__inner" to="./description">
                                        <span class="">Description</span>
                                    </NuxtLink>
                                </li>
                                <li class="">
                                    <NuxtLink class="dropdown-item p-headerNavListItem__inner" to="./model">
                                        <span class="">Model</span>

                                    </NuxtLink>
                                </li>
                                <li class="">
                                    <NuxtLink class="dropdown-item p-headerNavListItem__inner" to="./experiments">
                                        <span class="">Experiments</span>
                                    </NuxtLink>
                                </li>
                                <li class="">
                                    <NuxtLink class="dropdown-item p-headerNavListItem__inner" to="./engineering">
                                        <span class="">Engineering</span>


                                    </NuxtLink>
                                </li>
                                <li class="">
                                    <NuxtLink class="dropdown-item p-headerNavListItem__inner" to="./results">
                                        <span class="">Results</span>


                                    </NuxtLink>
                                </li>
                                <li class="">
                                    <NuxtLink class="dropdown-item p-headerNavListItem__inner" to="./notebook">
                                        <span class="">Notebook</span>
                                    </NuxtLink>
                                </li>
                                <li class="">
                                    <NuxtLink class="dropdown-item p-headerNavListItem__inner" to="./contribution">
                                        <span class="">Contributions</span>
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
                            <NuxtLink class="nav-link dropdown-toggle p-headerNavListItem__inner " id="navbar-item"
                                role="button" data-bs-toggle="dropdown" aria-expanded="false" to="">
                                <span class="p-headerNavListItem__label">Awards</span>

                            </NuxtLink>

                            <ul class="dropdown-menu" aria-labelledby="navbar-item">
                                <li class="">
                                    <NuxtLink class="dropdown-item p-headerNavListItem__inner" to="./parts"><span class="">
                                            New Basic Part
                                        </span></NuxtLink>
                                </li>
                                <li class="">
                                    <NuxtLink class="dropdown-item p-headerNavListItem__inner" to="./ihp"><span class="">
                                            Integrated Human Practices
                                        </span></NuxtLink>
                                </li>
                                <li class="">
                                    <NuxtLink class="dropdown-item p-headerNavListItem__inner" to="./education"><span
                                            class="">
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
                                <li class="">
                                    <NuxtLink class="dropdown-item p-headerNavListItem__inner" to="./members">Members
                                    </NuxtLink>
                                </li>
                                <li class="">
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
    computed: {
        isIndexPage() {
            return this.$route.path === '/';
        }
    },

    created() {
        const windowWidth = window.innerWidth;
        const rootFontSize = windowWidth >= 1440 ? (windowWidth / 1440) * 100 + "%" : "100%";
        document.documentElement.style.fontSize = rootFontSize;
        this.$nextTick(() => {
            document.documentElement.style.fontSize = rootFontSize;
        })
    },
    mounted() {
        const appLayoutElement = document.getElementById("app-layout");
        const hamburger = document.querySelector(".hamburger");
        const viewportSizeThreshold = 1024;
        const menuElement = document.getElementById("menu");
        const submenuElements = document.querySelectorAll(".p-submenu");
        const submenuElementButton1 = document.getElementById("submenu-button1");
        const submenuElementButton2 = document.getElementById("submenu-button2");
        const submenuElementButton3 = document.getElementById("submenu-button3");
        const submenuBackButton = document.querySelectorAll("#p-menuNavListItem__back");


        function changeRootFontSize() {
            const windowWidth = window.innerWidth;
            const rootFontSize = windowWidth >= 1440 ? (windowWidth / 1440) * 100 + "%" : "100%";
            document.documentElement.style.fontSize = rootFontSize;
        };

        function handleScroll() {
            const scrollTop = document.documentElement.scrollTop;

            if (scrollTop >= 150) {
                if (appLayoutElement.getAttribute("data-is-scrolled") === "false") {
                    appLayoutElement.setAttribute("data-is-scrolled", "true");
                }
            } else {
                appLayoutElement.setAttribute("data-is-scrolled", "false");
                menuElement.setAttribute("data-is-menu-opened", "false");
                submenuElements.forEach((submenuElements, i) => {
                    submenuElements.setAttribute("data-is-submenu-opened", "false");
                });

                hamburger.classList.remove("is-active");
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

        function handleHamburgerClick() {
            hamburger.classList.toggle("is-active")
            const submenuElementsClosed = true;

            if (menuElement.getAttribute("data-is-menu-opened") === "false") {
                menuElement.setAttribute("data-is-menu-opened", "true");
            } else {
                menuElement.setAttribute("data-is-menu-opened", "false");
                submenuElements.forEach((submenuElements, i) => {
                    submenuElements.setAttribute("data-is-submenu-opened", "false");
                });
            }
        };
        function handleSubMenuClick(element) {
            submenuElements.forEach((submenuElements, i) => {
                var current_submenuID = submenuElements.id
                var current_elementID = element.id
                if (current_elementID.slice(-1) === current_submenuID.slice(-1)) {
                    submenuElements.setAttribute("data-is-submenu-opened", "true");
                    menuElement.setAttribute("data-is-menu-opened", "false");
                } else {
                    submenuElements.setAttribute("data-is-submenu-opened", "false");
                }
            });
        };

        function handleMenuBackClick() {
            if (menuElement.getAttribute("data-is-menu-opened") === "false") {
                menuElement.setAttribute("data-is-menu-opened", "true");
                submenuElements.forEach((submenuElements, i) => {
                    submenuElements.setAttribute("data-is-submenu-opened", "false");
                });
            } else {
                menuElement.setAttribute("data-is-menu-opened", "false");
            }
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleViewportResize);
        window.addEventListener("resize", changeRootFontSize);
        document.onreadystatechange = () => { changeRootFontSize };
        hamburger.addEventListener("click", handleHamburgerClick);
        submenuElementButton1.addEventListener("click", function () {
            handleSubMenuClick(submenuElementButton1);
        });

        submenuElementButton2.addEventListener("click", function () {
            handleSubMenuClick(submenuElementButton2);
        });

        submenuElementButton3.addEventListener("click", function () {
            handleSubMenuClick(submenuElementButton3);
        });
        submenuBackButton.forEach(function (item, index) {
            item.addEventListener("click", handleMenuBackClick);
            console.log(item)
        });
        // this is quite possibly the worst code I have ever written
    },
};
</script>