<template>
  <div>
    <div>

      <header class="header-content custom-shape" id="header">
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
                      <li><a  href="#Design">Introduction</a></li>
                      <li><a  href="#Idea">Our Engineering Cycle</a></li>                  
                      <li><a  href="#Test">Our events</a></li>                 
                      <li><a  href="#Learn">Conclusion and Reflection</a></li>                       
                    </ul>   

                </nav>
              </div>


            <div id = "content-main" class="col-lg-9">
              <div class="box-container">
                <div class="box" @click="showEducationContent">General Public</div>
                <div class="box" @click="showEducationContent2">Higher Education</div>
                <div class="box" @click="showEducationContent3">Further education</div>
                <div class="box" @click="showEducationContent4">Primary education</div>
              </div>
                        <!-- Content -->
              <div class="content-wrapper" id="human-practices-wrapper">
                <section id="intro">
                <h1 class="p-sectionHeader__label"> Introduction </h1>
                <p>
                  This year, ColoEcho dedicated immense effort to designing, tailoring, and implementing educational
                  events
                  for a multitude of age groups. We identified five principles essential to a successful education:
                  engagement,
                  transparency, replicability, tailoring, and impact.
                  <br>
                <ul>
                  <li> <b>Engagement</b>: For a non-scientific or younger community, engagement is crucial to instantly
                    grabbing
                    and maintaining attention. It inherently grants more autonomy to the audience and enhances mutual
                    communication.</li>
                  <li><b>Engagement</b>: For a non-scientific or younger community, engagement is crucial to instantly
                    grabbing
                    and maintaining attention. It inherently grants more autonomy to the audience and enhances mutual
                    communication.</li>
                  <li> <b>Replicability</b>: With the spirit of inclusivity and accessibility in mind, we are constantly
                    mindful of how
                    replicable our event is in terms of resources and labour. </li>
                  <li> <b>Tailoring</b>: Given that our audience is of drastically different ages, cultures, and
                    educational backgrounds,
                    each event is tailored from the content to the method of delivery and style.</li>
                  <li> <b>Impact</b>: With different populations, we may want to impact them to (1) be curious, (2) be
                    invested, or (3) be proactive.</li>
                </ul>
                </p>
              </section>
              <div class="content-section" id="human-practices">
                  <section id = "introduction">
                    <h2 id="list-item-1" class="bold-italic adjusted-section" style="text-align: center;">Design</h2>
                    <p >
                      As a multicultural team, one of our main priority within our outreach and education was reaching a
                      diverse audience, ensuring efficient and effective communication with as many individuals as possible.
                      This was particularly important for our educational outreach, given the the multicultural composition
                  of
                      schools in London with pupils from all across the world. Therefore, we recognised the importance of
                      developing cultural competency skills in order to interact effectively with people from various
                  cultural
                      backgrounds. Accordingly, to enhance our understanding of cultural competency, we read Erin Meyer’s
                  ‘The
                      Cultural Map’ book which provided valuable insights on how to navigate and interact effectively across
                      diverse cultures.
                      <br>
                      Furthermore, before launching any educational programs, we consulted Professor Thompson and our
                  primary
                      investigator Dr.Anatoliy, for guidance on approaching different age groups and determining suitable
                      activities. After receiving general advice on how to structure our educational initiatives, we reached
                      out to local schools. We organised meetings with teachers to gain a deeper understanding of their
                      students' needs and tailored our educational approaches accordingly.
                    </p>
                  </section>  
                  <section id = "build">
                    <h2 id="list-item-2" class="bold-italic adjusted-section" style="text-align: center;">Build</h2>
                    <p >
                      Taking into consideration the advice we received, we began crafting the lecture slides for our
                  Biologix
                      lecture series and TOK classes. While developing these lectures, we ensured to incorporate the
                      underlying science in synthetic biology and opportunities in the sector. This is to provide the public
                      with the necessary information to access the . Moreover, we structured these sessions to be
                      discussion-based, with the goal of maintaining student engagement and fostering interest in synthetic
                      biology.
                      <br>

                      Simultaneously, we explored strategies for upscaling our educational outreach. To achieve this, we
                      reached out to all UK iGEM teams and 5 out of 9 teams agreed to participate in our Biologix lecture
                      series and collaborate on our synthetic biology guidebook.
                      <br>
                      Additionally, when it came to presenting and interacting with people we took in consideration the
                      principles learned from Erin’s Mayer book. This included emphasising the significance of using an
                      explicit speaking style to ensure clear interpretation for both low-context and high-context cultures,
                      minimising the risk of misinterpretation.
                    </p>
                    
                  </section>  
                  <section id = "test">
                    <h2 id="list-item-3" class="bold-italic adjusted-section" style="text-align: center;">Test</h2>
                    <p >
                      To evaluate the impact of our educational initiatives on students, we took advice from our primary
                      investigator and Dr. Thompson. Following their guidance, we developed surveys enabling students to
                      provide feedback on our educational outreach programs. The surveys inquired about their pre-existing
                      knowledge of synthetic biology for both TOK and Biologix classes. After the classes, students were asked
                      to rate their understanding of synthetic biology, allowing us to measure the impact of our workshops had
                      on their education. Furthermore, to see how we could improve future Biologix lectures and TOK classes,
                      we solicited additional feedback from students.

                      Additionally, we also asked teachers for feedback to evaluate what professionals thought about our
                      outreach programs.
                    </p>
                  </section>  
                  <section id = "learn">
                    <h2 id="list-item-4" class="bold-italic adjusted-section" style="text-align: center;">Learn</h2>
                    <p>
                      The feedback forms highlighted the positive reception of incorporating Q&A sessions into our educational
                      programs by both the public and students:
                    <blockquote class="blockquote">
                      <p class="mb-0"> ‘It was very informative, and the question times between lectures were a good idea.’
                      </p>
                    </blockquote>

                    In addition, our Biologix lecture series was conducted at two different schools, allowing us to learn
                    and adapt based on feedback. The initial series revealed that diagrams on our slides were too small,
                    leading us to enlarge them for subsequent sessions. Furthermore, despite our efforts to make the lecture
                    interactive, some students desired even more engagement:

                    <blockquote class="blockquote">
                      <p class="mb-0"> "Very informative! Maybe make it a little bit more interactive but very enjoyable and
                        helpful!"

                      </p>
                    </blockquote>

                    Addressing this issue, we incorporated additional questions into the second Biologix lecture series.
                    Fortunately, this adjustment resulted in heightened student engagement, with some expressing newfound
                    passion for synthetic biology in their feedback:
                    <br>
                    <blockquote class="blockquote">
                      <p class="mb-0"> "The lecture was very interesting and informative about a subject I had no knowledge
                        of."
                      </p>
                    </blockquote>

                    <blockquote class="blockquote">
                      <p class="mb-0"> “Keep up the good work!! Really interested in this field!”
                      </p>
                    </blockquote>

                    <blockquote class="blockquote">
                      <p class="mb-0"> "It was very educational and I definitely learnt a lot and the students are very
                        inspirational and
                        passionate about what they do which I thought was really nice and enticed me to watch them present
                        even
                        more."
                      </p>
                    </blockquote>


                    Overall, the feedback indicated that students gained significant knowledge about synthetic biology
                    through our educational outreach programs.
                    </p>
                    
                  </section>  
                </div>
              </div> 
                <!-- Content -->
              <div class="content-wrapper" id="integrated-human-practices-wrapper">
                <div class="content-section" id="integrated-human-practices">
                    <p>This is the content...</p>
                    <p>More details about the content...</p>
                </div>
              </div>
              <!-- Content2 -->
              <div class="content-wrapper" id="integrated-human-practices-wrapper2">
                <div class="content-section" id="integrated-human-practices">
                    <p>This is the content2...</p>
                    <p>More details about the content2...</p>
                </div>
              </div>
              <!-- Content -->
              <div class="content-wrapper" id="integrated-human-practices-wrapper3">
                <div class="content-section" id="integrated-human-practices">
                    <p>This is the content3...</p>
                    <p>More details about the content3...</p>
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

    showEducationContent() {
            console.log("Human Practices button clicked!");
            this.hideAllContents();
            const humanPracticesWrapper = this.$el.querySelector('#human-practices-wrapper');
            if (humanPracticesWrapper) {
                humanPracticesWrapper.style.display = 'block';
            }
        },

    showEducationContent2() {
            console.log("Integrated Human Practices button clicked!");
            this.hideAllContents();
            const integratedHumanPracticesWrapper = this.$el.querySelector('#integrated-human-practices-wrapper');
            if (integratedHumanPracticesWrapper) {
                integratedHumanPracticesWrapper.style.display = 'block';
            }
        },
    showEducationContent3() {
            console.log("Integrated Human Practices button clicked!");
            this.hideAllContents();
            const integratedHumanPracticesWrapper = this.$el.querySelector('#integrated-human-practices-wrapper2');
            if (integratedHumanPracticesWrapper) {
                integratedHumanPracticesWrapper.style.display = 'block';
            }
        },
    showEducationContent4() {
            console.log("Integrated Human Practices button clicked!");
            this.hideAllContents();
            const integratedHumanPracticesWrapper = this.$el.querySelector('#integrated-human-practices-wrapper3');
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


