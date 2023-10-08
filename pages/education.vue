<template>
  <div class="content">
    <div>

      <header class="header-content custom-shape" id="header">
        <div class="bg">
          <h1 id="title" style="text-align: center; font-weight: bold;" class="header-text">Education Award</h1>
          <h1 id="subtitle" style="text-align: center; font-weight: bold;" class="header-text">Kazakhstan Collaboration
          </h1>
        </div>
      </header>

      <main>
        <div class="container">
          <div class="row">
            <div class="col lg-3">
              <nav class="section-nav">
                <h3>contents</h3>

                <ul class="section-nav-list">
                  <li><a href="#design">Design</a></li>
                  <li><a href="#idea">Build</a></li>
                  <li><a href="#test">Test</a></li>
                  <li><a href="#learn">Learn</a></li>

                </ul>

              </nav>
            </div>

            <div id="content-main" class="col-lg-9" data-aos="fade-up">
              <section id="design">
                <h2 id="list-item-1" class="bold-italic adjusted-section" style="text-align: center;">Design</h2>
                <p>
                  As a multicultural team, one of our main priority within our outreach and education was reaching a
                  diverse audience, ensuring efficient and effective communication with as many individuals as possible.
                  This was particularly important for our educational outreach, given the the multicultural composition of
                  schools in London with pupils from all across the world. Therefore, we recognised the importance of
                  developing cultural competency skills in order to interact effectively with people from various cultural
                  backgrounds. Accordingly, to enhance our understanding of cultural competency, we read Erin Meyer’s ‘The
                  Cultural Map’ book which provided valuable insights on how to navigate and interact effectively across
                  diverse cultures.
                  <br>
                  Furthermore, before launching any educational programs, we consulted Professor Thompson and our primary
                  investigator Dr.Anatoliy, for guidance on approaching different age groups and determining suitable
                  activities. After receiving general advice on how to structure our educational initiatives, we reached
                  out to local schools. We organised meetings with teachers to gain a deeper understanding of their
                  students' needs and tailored our educational approaches accordingly.
                </p>
                <hr>
              </section>
              <section id="build" data-aos="fade-up">
                <h2 id="list-item-2" class="bold-italic adjusted-section" style="text-align: center;">Build</h2>
                <p>
                  Taking into consideration the advice we received, we began crafting the lecture slides for our Biologix
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
                <hr>
              </section>
              <section id="test" data-aos="fade-up">
                <h2 id="list-item-3" class="bold-italic adjusted-section" style="text-align: center;">Test</h2>
                <p>
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
                <hr>
              </section>
              <section id="learn" data-aos="fade-up">
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