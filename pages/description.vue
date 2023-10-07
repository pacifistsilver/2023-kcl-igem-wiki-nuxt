<template>
  <div class="content">
    <div class="index_p-contentsHeader row">
      <div class="index_p-contentsHeader_inner col-8">
        <ol class="index_p-card">
          <li class="index_p-card__inner">
            <span class="index_p-cardItem__label">Learn</span>
          </li>
          <li class="index_p-card__inner">
            <span class="index_p-cardItem__label">Design</span>
          </li>
          <li class="index_p-card__inner">
            <span class="index_p-cardItem__label">Build</span>
          </li>
          <li class="index_p-card__inner">
            <span class="index_p-cardItem__label">Test</span>
          </li>
        </ol>
      </div>
      <div class="col-4">
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="..." alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
    <div>

      <header class="header-content custom-shape" id="header">
        <div class="bg">
          <h1 id="title" style="text-align: center; font-weight: bold;" class="header-text">Ultrasound diagnostic tool for
            colorectal cancer</h1>
          <h1 id="subtitle" style="text-align: center; font-weight: bold;" class="header-text">More info coming along
            soon.</h1>
        </div>
      </header>

      <main>
        <div class="container">
          <div class="row">
            <div class="col lg-3">
              <nav class="section-nav">
                <h3>contents</h3>

                <ul class="section-nav-list">
                  <li><a href="#project-description">Introduction</a></li>
                  <li><a href="#colorectal-cancer">Colorectal Cancer</a></li>
                  <li><a href="#solution">The Solution</a></li>
                  <li><a href="#project-goals">Project Goals</a></li>
                  <li><a href="#references">References</a></li>
                </ul>

              </nav>
            </div>


            <div id="description-content" class="col-lg-9">

              <section id="project-description" data-aos="fade-up">
                <h2 id="1" class="bold-italic adjusted-section" style="text-align: center; margin-top: 30px;">Introduction
                </h2>
                <p>
                  The origins of ColoEcho stem from our fascination with the distinct acoustic properties of gas-filled
                  molecules,
                  which can be contrasted to that of normal tissues and detected by ultrasound imaging.
                  Our journey officially began after conversing with one of our team member’s head of department,
                  who extensively researches the therapeutic application of such molecules.
                  This discussion expanded our perspective on the vast potential for widening the clinical application of
                  ultrasound.
                  Upon further research, we discovered a biological alternative to microbubbles known as gas vesicles.
                  These structures are formed by certain proteins that are expressed in select aquatic bacteria species.
                  The ability to condition its expression and, thus, the signal, makes gas vesicles a well-suited
                  component
                  for an ultrasound-detectable biosensor.
                </p>
                <hr>
              </section>

              <section id="colorectal-cancer" data-aos="fade-up">
                <h3 id="2" class="bold-italic adjusted-section" style="text-align: center;">Colorectal Cancer: Defining
                  the problem</h3>
                <p>Colorectal cancer (CRC) ranks amongst the most prevalent oncological diseases, placing fourth in the
                  United Kingdom and third globally according to 2022 NHS data, with approximately two million new
                  diagnoses in 2020 alone. When CRC is diagnosed early during the localised phase,
                  the primary tumour can be removed through surgical intervention, resulting in a patient survival
                  rate exceeding 90% (Chakrabarti, 2020). However, the prognosis significantly deteriorates as
                  the disease advances and metastasises to nearby regional lymph nodes and blood vessels. Unfortunately,
                  a significant portion of patients receives their diagnosis in the later stages, contributing to CRC
                  being
                  the second leading cause of cancer-related mortality in the United Kingdom between 2017 and 2019
                  (Cancer Research UK). These data emphasise the critical necessity of early detection strategies for CRC.
                </p>

                <p>The high incidence of late colorectal cancer (CRC) diagnosis can be attributed, in part, to the lengthy
                  procedures
                  involved in disease detection. In the United Kingdom, biennial remote screening for CRC targets
                  individuals aged
                  60 to 74 using the faecal immunochemical test (FIT), which detects the presence of blood in the stool—a
                  common symptom of polyps or CRC (NHS, 2021). While positive FIT results indicate the need for
                  colonoscopy as a
                  confirmatory diagnostic test, it is important to note that the stool may not always show the presence of
                  blood,
                  particularly in early-stage CRC cases. Currently, biopsy via colonoscopy serves as the gold standard for
                  CRC
                  diagnosis, involving the insertion of a scope through the anus into the colorectal area to extract
                  tissue for
                  malignancy confirmation. However, this procedure is invasive and carries risks such as bleeding, which
                  may
                  necessitate more intensive medical interventions. Alternatively, a combination of imaging modalities
                  such as
                  X-ray and CT-scan can be utilised in virtual colonoscopy to screen for neoplastic tissue in the colon
                  lining.
                  While less invasive than conventional colonoscopy, virtual colonoscopy is associated with risks related
                  to
                  ionising radiation exposure.
                </p>

                <p>Moreover, the imaging requires the patient's colon to be inflated by a tube inserted through the anal
                  canal
                  which can lead to bloating and overall patient discomfort. The invasive nature of current diagnostic
                  methods a
                  lso often discourages individuals from seeking these procedures unless they exhibit symptoms of CRC.
                  Unfortunately, early-stage CRC is typically asymptomatic, and significant symptoms such as polyps,
                  colon disfiguration, substantial tumour size, and abdominal pain generally manifest after stage 2
                  (Duke's B-D) (Ann, 2006). These challenges, combined with the lack of inclusivity of the younger age
                  group in existing screening programs, contribute to the underdiagnosis of early-stage CRC cases
                  in the United Kingdom.
                </p>
                <hr>
              </section>
              <section id="solution" data-aos="fade-up">
                <h3 id="3" class="bold-italic adjusted-section" style="text-align: center;">Our solution: Synthetic
                  Biology</h3>
                <p>Recognising the challenges associated with the diagnosis of CRC,
                  ColoEcho is committed to devise a non-invasive and patient-friendly screening method that can be
                  integrated into the healthcare system adressing the limitations of current detection methods.
                  Our team has devised a CRC screening procedure in the form of a probiotic pill, designed to emit an
                  enhanced ultrasound contrast upon detection of a CRC biomarker, utilising ultrasonography to observe
                  this.
                  Ultrasound imaging is the chosen modality for its safe, cost-efficient, and easily accessible nature.
                </p>

                <p>To construct the ultrasound-biosensor system, we plan to induce the production of gas vesicles in
                  engineered
                  probiotic E.coli Nissel strain when the biomarker-specific synthetic receptor binds to CRC antigen.
                  Gas vesicles (GVs) is air-filled aquatic bacterial proteins which oscillates non-linearly with
                  ultrasound wave,
                  this unique acoustic property results in enhanced ultrasound signal contrast detection, as demonstrated
                  by the
                  Shapiro lab. Thus, the expression of the gene encoding for GVs, ARG1 can be used as a reporting gene
                  (Shapiro, 2014).
                </p>
                <hr>
                <h3 id="4" class="bold-italic adjusted-section" style="text-align: center;">Our motivation to tackle
                  Colorectal Cancer</h3>
                <p>Colorectal cancer holds a deep personal significance to us. As a diverse team, many of our members come
                  from
                  regions where late-stage diagnoses are common due to insufficient screening programs and poor disease
                  awareness.
                  These late-stage diagnoses significantly reduce effective treatments, resulting in poorer prognoses and
                  culminating in high mortality rates. We understand the profound implications of this disease, which
                  can impact any individual, directly or indirectly, as those dear to us, or even ourselves,
                  could be at risk. This prompted us to contribute to the fight against colorectal cancer with the
                  aim of enhancing early diagnosis and, consequently, improving patient survival outcomes.
                </p>
                <hr>
              </section>

              <section id="project-goals" data-aos="fade-up">
                <h3 id="5" class="bold-italic adjusted-section" style="text-align: center;">Project Goals</h3>
                <ul style="font-size: 20px; margin-top: 30px;">
                  <li>Design a plasmid containing ligand-inducible gene expression system for the CRC biomarker(s) and
                    transform it to a competent E.coli Nissl strain.</li>
                  <li>Validate the sensitivity of the system in detecting biosensor.</li>
                  <li>Modify the plasmid containing ARG1 gene to be biosensor system-compatible.</li>
                  <li>Transform modified plasmid containing ARG1 into competent E.Coli Nissl strain.</li>
                  <li>Verify the GVs expression when signal is detected with ultrasound.</li>
                </ul>
                <hr>
              </section>

              <button id="backToTop" title="Go to top" v-show="showBackToTop" @click="scrollToTop">Back to Top</button>

              <section id="references" data-aos="fade-up" class="box4">
                <h3 id="6" class="bold-italic adjusted-section box-reference hovering" @click="toggleReferences" style="text-align: center;">References</h3>

                <div v-show="showReferences">
                  <ul style="font-size: 15px; margin-top: 30px;">
                    <li>
                      <a href="https://doi.org/10.1016/j.amsu.2022.104453" target="_blank">
                        AlZaabi, A., AlHarrasi, A., AlMusalami, A., AlMahyijari, N., Al Hinai, K., ALAdawi, H., & Al-Shamsi,
                        H. O.
                        (2022). Early onset colorectal cancer: Challenges across the cancer care continuum. Annals of
                        Medicine and Surgery, 82, 104453. https://doi.org/10.1016/j.amsu.2022.104453
                      </a>
                    </li>
                    <li>
                      <a href="https://pubmed.ncbi.nlm.nih.gov/30207593/" target="_blank">
                        Bray, F., Ferlay, J., Soerjomataram, I., Siegel, R. L., Torre, L. A., & Jemal, A. (2018).
                        Global Cancer Statistics 2018: GLOBOCAN Estimates of Incidence and Mortality Worldwide for 36
                        Cancers in
                        185 Countries. CA: A Cancer Journal for Clinicians, 68(6), 394–424.
                        https://pubmed.ncbi.nlm.nih.gov/30207593/
                      </a>
                    </li>
                    <li>
                      <a href="https://doi.org/10.1200/jgo.18.00214" target="_blank">
                        Costas-Chavarri, A., Nandakumar, G., Temin, S., Lopes, G., Cervantes, A., Cruz Correa, M., Engineer,
                        R.,
                        Hamashima, C., Ho, G. F., Huitzil, F. D., Malekzadeh Moghani, M., Sharara, A. I., Stern, M. C., Teh,
                        C.,
                        Vázquez Manjarrez, S. E., Verjee, A., Yantiss, R., & Shah, M. A. (2019). Treatment of Patients With
                        Early-Stage Colorectal Cancer: ASCO Resource-Stratified Guideline. Journal of Global Oncology, 5(5),
                        1–19.
                        https://doi.org/10.1200/jgo.18.00214
                      </a>
                    </li>
                    <li>
                      <a href="https://doi.org/10.1200/go.21.00111" target="_blank">
                        Deo, S. V. S., Kumar, S., Bhoriwal, S., Shukla, N. K., Sharma, A., Thulkar, S., Das, P., Bhagat, P.,
                        Dhall, K., Pathy, S., & Mohanti, B. K. (2021). Colorectal Cancers in Low- and Middle-Income
                        Countries—
                        Demographic Pattern and Clinical Profile of 970 Patients Treated at a Tertiary Care Cancer Center in
                        India.
                        JCO Global Oncology,7, 1110-1115. https://doi.org/10.1200/go.21.00111
                      </a>
                    </li>
                    <li>
                      <a href="https://doi.org/10.1016/s0140-6736(02)11121-4" target="_blank">
                        Gollub, M. J. (2002). Virtual colonoscopy. The Lancet, 360(9338), 964.
                        https://doi.org/10.1016/s0140-6736(02)11121-4
                      </a>
                    </li>
                    <li>
                      <a href="https://doi.org/10.3748/wjg.v23.i28.5086" target="_blank">
                        Issa, I. A., & Noureddine, M. (2017). Colorectal cancer screening:
                        An updated review of the available options. World Journal of Gastroenterology, 23(28), 5086.
                        https://doi.org/10.3748/wjg.v23.i28.5086
                      </a>
                    </li>
                    <li>
                      <a href="https://www.nhs.uk/conditions/bowel-cancer-screening/" target="_blank">
                        NHS. (2019). Overview - Bowel Cancer Screening. NHS.
                        https://www.nhs.uk/conditions/bowel-cancer-screening/
                      </a>
                    </li>
                    <li>
                      <a href="https://doi.org/10.1038/nnano.2014.32" target="_blank">
                        Shapiro, M. G., Goodwill, P. W., Neogy, A., Yin, M., Foster, F. S., Schaffer, D. V., & Conolly, S.
                        M.
                        (2014). Biogenic gas nanostructures as ultrasonic molecular reporters.
                        Nature Nanotechnology, 9(4), 311-316. https://doi.org/10.1038/nnano.2014.32
                      </a>
                    </li>
                    <li>
                      <a href="https://doi.org/10.3322/caac.21772" target="_blank">
                        Siegel, R. L., Wagle, N. S., Cercek, A., Smith, R. A., & Jemal, A. (2023).
                        Colorectal cancer statistics, 2023. CA: A Cancer Journal for Clinicians.
                        https://doi.org/10.3322/caac.21772
                      </a>
                    </li>
                  </ul>
                </div>
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
      },
      showReferences: false,
      showBackToTop: false // New data property for the button
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

    // Add the scroll event listener for the "Back to Top" button
    window.addEventListener("scroll", this.checkScrollPosition);
  },
  beforeDestroy() {
    this.observer.disconnect();

    // Remove the scroll event listener
    window.removeEventListener("scroll", this.checkScrollPosition);
  },
  methods: {
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
    toggleReferences() {
      this.showReferences = !this.showReferences;
    },
    // Method to show/hide the "Back to Top" button
    checkScrollPosition() {
      if (document.body.scrollTop > window.innerHeight / 2 || document.documentElement.scrollTop > window.innerHeight / 2) {
        this.showBackToTop = true;
      } else {
        this.showBackToTop = false;
      }
    },
    // Method to scroll to the top of the page
    scrollToTop() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    }
  }
}
</script>


