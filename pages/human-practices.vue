<template>
  <div>
    <div>

      <header class="header-content">

        <div class="bg" style="
        background-image:url(https://static.igem.wiki/teams/4584/wiki/human-practices-1.jpg);
        background-position: center;
         filter: grayscale(60%); ">
          <h1 style="text-align: center; font-weight: bold;" class="header-text">Human Practices</h1>
        </div>
      </header>

      <main>
        <div class = "container">

            <div class = "row">
              <div class = "col lg-3">
                <nav class="section-nav">
                  <h3>contents</h3>

                    <ul class = "section-nav-list">  
                      <li><a  href="#introduction">Understanding the Problem</a></li>
                      <li><a  href="#define">Defining a Good Solution</a></li>                  
                      <li><a  href="#design">Designing a Good Solution</a></li>                 
                      <li><a  href="#implement">Our Implementation and Evaluation</a></li>             
                      <li><a href="#ref">References</a></li>            
                    </ul>   

                </nav>
              </div>
              <button id="backToTop" title="Go to top" v-show="showBackToTop" @click="scrollToTop">Back to Top</button>


            <div id = "content-main" class="col-lg-9">
              <div class="box-container">
                <div class="box" @click="showHumanPracticesContent">Human Practices</div>
                <div class="box" @click="showIntegratedHumanPracticesContent">Integrated Human Practices</div>
              </div>
                        <!-- Human Practices Content -->
              <div class="content-wrapper" id="human-practices-wrapper">
                <div class="content-section" id="human-practices">
                  <section id = "introduction" class="box-shape">
                    <h2 id="list-item-1" class="bold-italic adjusted-section" style="text-align: center;">1. The Problem</h2>
                    <p >
                      The origins of ColoEcho stem from our fascination with the distinct acoustic properties of gas-filled molecules, 
                      which can be contrasted to that of normal tissues and detected by ultrasound imaging. 
                      Our journey officially began after conversing with one of our team member’s head of department, 
                      who extensively researches the therapeutic application of such molecules, specifically microbubbles. 
                      This discussion expanded our perspective on the vast potential for widening the clinical application of ultrasound. 
                      Upon further research, we discovered a biological alternative to microbubbles known as gas vesicles. 
                      These structures are formed by certain proteins that are expressed in select aquatic bacteria species. 
                      The ability to condition its expression and, thus, the signal, makes gas vesicles a well-suited component 
                      for an ultrasound-detectable biosensor.
                      The origins of ColoEcho stem from our fascination with the distinct acoustic properties of gas-filled molecules, 
                      which can be contrasted to that of normal tissues and detected by ultrasound imaging. 
                      Our journey officially began after conversing with one of our team member’s head of department, 
                      who extensively researches the therapeutic application of such molecules, specifically microbubbles. 
                      This discussion expanded our perspective on the vast potential for widening the clinical application of ultrasound. 
                      Upon further research, we discovered a biological alternative to microbubbles known as gas vesicles. 
                      These structures are formed by certain proteins that are expressed in select aquatic bacteria species. 
                      The ability to condition its expression and, thus, the signal, makes gas vesicles a well-suited component 
                      for an ultrasound-detectable biosensor.
                      The origins of ColoEcho stem from our fascination with the distinct acoustic properties of gas-filled molecules, 
                      which can be contrasted to that of normal tissues and detected by ultrasound imaging. 
                      Our journey officially began after conversing with one of our team member’s head of department, 
                      who extensively researches the therapeutic application of such molecules, specifically microbubbles. 
                      This discussion expanded our perspective on the vast potential for widening the clinical application of ultrasound. 
                      Upon further research, we discovered a biological alternative to microbubbles known as gas vesicles. 
                      These structures are formed by certain proteins that are expressed in select aquatic bacteria species. 
                      The ability to condition its expression and, thus, the signal, makes gas vesicles a well-suited component 
                      for an ultrasound-detectable biosensor.
                      The origins of ColoEcho stem from our fascination with the distinct acoustic properties of gas-filled molecules, 
                      which can be contrasted to that of normal tissues and detected by ultrasound imaging. 
                      Our journey officially began after conversing with one of our team member’s head of department, 
                      who extensively researches the therapeutic application of such molecules, specifically microbubbles. 
                      This discussion expanded our perspective on the vast potential for widening the clinical application of ultrasound. 
                      Upon further research, we discovered a biological alternative to microbubbles known as gas vesicles. 
                      These structures are formed by certain proteins that are expressed in select aquatic bacteria species. 
                      The ability to condition its expression and, thus, the signal, makes gas vesicles a well-suited component 
                      for an ultrasound-detectable biosensor.
                    </p>
                  </section>  
                  <section id = "define">
                    <h2 id="list-item-2" class="bold-italic adjusted-section" style="text-align: center;">2. Defining a Solution</h2>
                    <p >
                      The origins of ColoEcho stem from our fascination with the distinct acoustic properties of gas-filled molecules, 
                      which can be contrasted to that of normal tissues and detected by ultrasound imaging. 
                      Our journey officially began after conversing with one of our team member’s head of department, 
                      who extensively researches the therapeutic application of such molecules, specifically microbubbles. 
                      This discussion expanded our perspective on the vast potential for widening the clinical application of ultrasound. 
                      Upon further research, we discovered a biological alternative to microbubbles known as gas vesicles. 
                      These structures are formed by certain proteins that are expressed in select aquatic bacteria species. 
                      The ability to condition its expression and, thus, the signal, makes gas vesicles a well-suited component 
                      for an ultrasound-detectable biosensor.
                    </p>
                    
                  </section>  
                  <section id = "design">
                    <h2 id="list-item-3" class="bold-italic adjusted-section" style="text-align: center;">3. Designing a Solution</h2>
                    <p >
                      The origins of ColoEcho stem from our fascination with the distinct acoustic properties of gas-filled molecules, 
                      which can be contrasted to that of normal tissues and detected by ultrasound imaging. 
                      Our journey officially began after conversing with one of our team member’s head of department, 
                      who extensively researches the therapeutic application of such molecules, specifically microbubbles. 
                      This discussion expanded our perspective on the vast potential for widening the clinical application of ultrasound. 
                      Upon further research, we discovered a biological alternative to microbubbles known as gas vesicles. 
                      These structures are formed by certain proteins that are expressed in select aquatic bacteria species. 
                      The ability to condition its expression and, thus, the signal, makes gas vesicles a well-suited component 
                      for an ultrasound-detectable biosensor.
                    </p>
                    
                  </section>  
                  <section id = "implement">
                    <h2 id="list-item-4" class="bold-italic adjusted-section" style="text-align: center;">4. Our Implementation</h2>
                    <p >
                      The origins of ColoEcho stem from our fascination with the distinct acoustic properties of gas-filled molecules, 
                      which can be contrasted to that of normal tissues and detected by ultrasound imaging. 
                      Our journey officially began after conversing with one of our team member’s head of department, 
                      who extensively researches the therapeutic application of such molecules, specifically microbubbles. 
                      This discussion expanded our perspective on the vast potential for widening the clinical application of ultrasound. 
                      Upon further research, we discovered a biological alternative to microbubbles known as gas vesicles. 
                      These structures are formed by certain proteins that are expressed in select aquatic bacteria species. 
                      The ability to condition its expression and, thus, the signal, makes gas vesicles a well-suited component 
                      for an ultrasound-detectable biosensor.
                    </p>
                    
                  </section>  
                  <section id = "ref">
                    <h2 id="list-item-5" class="bold-italic adjusted-section" style="text-align: center;">References</h2>
                    <p >
                      Colorectal cancer (CRC) ranks amongst the most prevalent oncological diseases, placing fourth in the 
                      United Kingdom and third globally according to 2022 NHS data, with approximately two million new 
                      diagnoses in 2020 alone. When CRC is diagnosed early during the localised phase, 
                      the primary tumour can be removed through surgical intervention, resulting in a patient survival 
                      rate exceeding 90% (Chakrabarti, 2020). However, the prognosis significantly deteriorates as 
                      the disease advances and metastasises to nearby regional lymph nodes and blood vessels. Unfortunately, 
                      a significant portion of patients receives their diagnosis in the later stages, contributing to CRC being 
                      the second leading cause of cancer-related mortality in the United Kingdom between 2017 and 2019 
                      (Cancer Research UK). These data emphasise the critical necessity of early detection strategies for CRC.
                      The origins of ColoEcho stem from our fascination with the distinct acoustic properties of gas-filled molecules, 
                      which can be contrasted to that of normal tissues and detected by ultrasound imaging. 
                      Our journey officially began after conversing with one of our team member’s head of department, 
                      who extensively researches the therapeutic application of such molecules, specifically microbubbles. 
                      This discussion expanded our perspective on the vast potential for widening the clinical application of ultrasound. 
                      Upon further research, we discovered a biological alternative to microbubbles known as gas vesicles. 
                      These structures are formed by certain proteins that are expressed in select aquatic bacteria species. 
                      The ability to condition its expression and, thus, the signal, makes gas vesicles a well-suited component 
                      for an ultrasound-detectable biosensor.
                    </p>  
                  </section>
                </div>
              </div> 
                <!-- Integrated Human Practices Content -->
              <div class="content-wrapper" id="integrated-human-practices-wrapper">
                <div class="content-section" id="integrated-human-practices">
                    <p>This is the Integrated Human Practices content...</p>
                    <p>More details about Integrated Human Practices...</p>
                  <div class="timeline">
                      <div class="entry">
                          <div class="name" onclick="toggleDetails(this)">Mikhail Shapiro</div>
                          <div class="details">Details about Person 1...</div>
                      </div>
                      <div class="entry">
                          <div class="name" onclick="toggleDetails(this)">Antonios Poulioponus</div>
                          <div class="details">Details about Person 2...</div>
                      </div>
                      <div class="entry">
                          <div class="name" onclick="toggleDetails(this)">Weitsman</div>
                          <div class="details">Details about Person 1...</div>
                      </div>
                      <div class="entry">
                          <div class="name" onclick="toggleDetails(this)">Alya Masoud</div>
                          <div class="details">Details about Person 2...</div>
                      </div>
                      <div class="entry">
                          <div class="name" onclick="toggleDetails(this)">SynbiotechSociety President Samuel</div>
                          <div class="details">Details about Person 1...</div>
                      </div>
                      <div class="entry">
                          <div class="name" onclick="toggleDetails(this)">Sam</div>
                          <div class="details">Details about Person 2...</div>
                      </div> 
                  </div>
                </div>
              </div>
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
      showReferences: false,
      currentPage: "Human Practices",
      observer: null,
      options: {
        easing: [0.25, 0.1, 0.25, 1.0],
        force: true,
        cancelable: false,
        x: false,
        y: true,
        offset: -80,
      },
      currentSection: 'human-practices', // default section
    };
  },

  created() {
    this.observer = new IntersectionObserver(this.onElementObserved, {
      root: this.$el,
      threshold: 0.5,
    });
  },

  mounted() {
    this.$el.querySelectorAll('section[id]').forEach((section) => {
      this.observer.observe(section);
    });
  },

  beforeDestroy() {
    this.observer.disconnect();
  },

  methods: {
    toggleDetails(element) {
      const details = element.nextElementSibling;
      if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
      } else {
        details.style.display = 'none';
      }
    },

    onElementObserved(entries) {
      entries.forEach(({ target, isIntersecting }) => {
        const id = target.getAttribute('id');
        if (isIntersecting) {
          this.$el
            .querySelector(`div li a[href="#${id}"]`)
            .parentElement.classList.add('active');
        } else {
          this.$el
            .querySelector(`div li a[href="#${id}"]`)
            .parentElement.classList.remove('active');
        }
      });
    },

    showHumanPracticesContent() {
            console.log("Human Practices button clicked!");
            this.hideAllContents();
            const humanPracticesWrapper = this.$el.querySelector('#human-practices-wrapper');
            if (humanPracticesWrapper) {
                humanPracticesWrapper.style.display = 'block';
            }
        },

    showIntegratedHumanPracticesContent() {
            console.log("Integrated Human Practices button clicked!");
            this.hideAllContents();
            const integratedHumanPracticesWrapper = this.$el.querySelector('#integrated-human-practices-wrapper');
            if (integratedHumanPracticesWrapper) {
                integratedHumanPracticesWrapper.style.display = 'block';
            }
        },

        hideAllContents() {
            const contentWrappers = this.$el.querySelectorAll('.content-wrapper');
            contentWrappers.forEach(wrapper => {
                wrapper.style.display = 'none';
            });
        }
  }
}
</script>


