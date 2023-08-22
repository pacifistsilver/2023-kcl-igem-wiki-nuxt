<template>
  <div class="content">
    <div>

      <header class="header-content custom-shape" id ="header">
        <div class="bg">
          <h1 id="title" style="text-align: center; font-weight: bold;" class="header-text">Education Award</h1>
          <h1 id="subtitle" style="text-align: center; font-weight: bold;" class="header-text">Kazakhstan Collaboration</h1>
        </div>
      </header>

      <main>
        <div class = "container">
            <div class = "row">
              <div class = "col lg-3">
                <nav class="section-nav">
                  <h3>contents</h3>

                    <ul class = "section-nav-list">  
                      <li><a  href="#introduction">Introduction</a></li>
                      <li><a  href="#idea">Ideation</a></li>                  
                      <li><a  href="#conclude">Conclusion</a></li>                             
                    </ul>   

                </nav>
              </div>

            <div id = "content-main" class="col-lg-9" data-aos = "fade-up">
              <section id = "introduction">
                <h2 id="list-item-1" class="bold-italic adjusted-section" style="text-align: center;">Introduction</h2>
                <p >
                  When the iGEM team from Kazakhstan approached us with a proposal to collaborate on an educational initiative, 
                  we were immediately intrigued. The proposal aligned with our core values of making education accessible and 
                  promoting science. We saw this as an opportunity to share our knowledge and passion for synthetic biology and 
                  inspire a new generation of scientists in a region where these opportunities are often hardly available.
                </p>
                <hr>
              </section>  
              <section id = "idea" data-aos = "fade-up">
                <h2 id="list-item-2" class="bold-italic adjusted-section" style="text-align: center;">Ideation</h2>
                <p >
                  Initially, we had a great idea of what we wanted to convey. 
                  We aimed to cover a broad spectrum of synthetic biology concepts, 
                  from the basics of DNA and gene expression to the complexities of 
                  genetic engineering and biotechnology. However, we soon realized that our 
                  initial plan might be too complex for high school students new to the field.
                </p>
                <p>
                  When searching for a more practical approach, we contacted other iGEM teams who had undertaken 
                  similar initiatives. We compared our own style to how they had structured their lectures, what 
                  topics they had covered, and how they had engaged their students. This collaborative process was 
                  enlightening and helped us refine our own approach.
                </p>
                <hr>
              </section>  
              <section id = "conclude" data-aos = "fade-up">
                <h2 id="list-item-3" class="bold-italic adjusted-section" style="text-align: center;">Conclusion</h2>
                <p >
                  Ultimately, we focused our lectures on colorectal cancer (CRC) and how synthetic biology can be 
                  leveraged to diagnose and treat this disease. CRC is a significant health concern worldwide, and 
                  early diagnosis is crucial since the mortality rate increases exponentially as the cancer progresses. 
                  By focusing on a real-world problem, we wanted to show the students the practical applications of 
                  synthetic biology and inspire them to think about how to use these tools to address health challenges 
                  in their own communities.
                </p>
                <p>
                  By gathering some of the posters made by the students, this will showcase how our efforts have 
                  had a meaningful impact. We believe that by making education accessible and relevant, we can inspire 
                  a new generation of scientists and innovators. Regardless of the outcome, we are proud to have had 
                  the opportunity to share our passion for synthetic biology with the students in Kazakhstan.
                </p>
                <hr>
              </section>   

            </div>
          </div> 
        </div> 
      </main>

    </div>
  </div>
</template>
<script>
export default {
  data() {
        return {
            currentPage: "Description",
            observer: null,
            options: {
              easing: [0.25, 0.1, 0.25, 1.0],
              force: true,
              cancelable: false,
              x: false,
              y: true,
              offset: -80,
            }
          }
    },
    created() {
        this.observer = new IntersectionObserver(this.onElementObserved, {
            root: this.$el,
            threshold: 0.5,
        })
    },
    mounted() {
        this.$el.querySelectorAll('section[id]').forEach((section) => {
            this.observer.observe(section)
        })
    },
    beforeDestroy() {
        this.observer.disconnect()
    },
    methods: {  
      onElementObserved(entries) {
          entries.forEach(({ target, isIntersecting }) => {
              const id = target.getAttribute('id')
              if (isIntersecting) {
                  this.$el
                      .querySelector(`div li a[href="#${id}"]`)
                      .parentElement.classList.add('active')
              } else {
                  this.$el
                      .querySelector(`div li a[href="#${id}"]`)
                      .parentElement.classList.remove('active')
              }
          })
      },
  },
}
</script>