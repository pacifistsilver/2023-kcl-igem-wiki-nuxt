<template>
  <div class = "content">
    <div>

      <header class="header-content">
        <div class="bg">
          <h1 style="text-align: center; font-weight: bold;" class="header-text">Description</h1>
        </div>
      </header>

      <main>
        <div class = "container">
          <div class = "row">
            <div class = "col lg-3">
              <nav class="section-nav">

                  <ul class = "list-unstyled">  
                    <li class ="section-nav-header">CONTENTS</li>
                    <li><a  href="#project-description">Introduction</a></li>
                    <li><a  href="#colorectal-cancer">Colorectal Cancer</a></li>                  
                    <li><a  href="#solution">The Solution</a></li>                 
                    <li><a  href="#project-goals">Project Goals</a></li>             
                    <li><a href="#references">References</a></li>            
                  </ul>   

              </nav>
            </div>


            <div id = "description-content" class="col-lg-9">

              <section id = "project-description">
                <h2 id="1" class="bold-italic adjusted-section" style="text-align: center;">Introduction</h2>
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
                <hr>
              </section>  

              <section id = "colorectal-cancer">
                <h3 id="2" class="bold-italic adjusted-section" style="text-align: center;">Colorectal Cancer: Defining the problem</h3>
                <p >Colorectal cancer (CRC) ranks amongst the most prevalent oncological diseases, placing fourth in the 
                  United Kingdom and third globally according to 2022 NHS data, with approximately two million new 
                  diagnoses in 2020 alone. When CRC is diagnosed early during the localised phase, 
                  the primary tumour can be removed through surgical intervention, resulting in a patient survival 
                  rate exceeding 90% (Chakrabarti, 2020). However, the prognosis significantly deteriorates as 
                  the disease advances and metastasises to nearby regional lymph nodes and blood vessels. Unfortunately, 
                  a significant portion of patients receives their diagnosis in the later stages, contributing to CRC being 
                  the second leading cause of cancer-related mortality in the United Kingdom between 2017 and 2019 
                  (Cancer Research UK). These data emphasise the critical necessity of early detection strategies for CRC.
                </p>

                <p >The high incidence of late colorectal cancer (CRC) diagnosis can be attributed, in part, to the lengthy procedures 
                  involved in disease detection. In the United Kingdom, biennial remote screening for CRC targets individuals aged 
                  60 to 74 using the faecal immunochemical test (FIT), which detects the presence of blood in the stool—a 
                  common symptom of polyps or CRC (NHS, 2021). While positive FIT results indicate the need for colonoscopy as a 
                  confirmatory diagnostic test, it is important to note that the stool may not always show the presence of blood, 
                  particularly in early-stage CRC cases. Currently, biopsy via colonoscopy serves as the gold standard for CRC 
                  diagnosis, involving the insertion of a scope through the anus into the colorectal area to extract tissue for 
                  malignancy confirmation. However, this procedure is invasive and carries risks such as bleeding, which may 
                  necessitate more intensive medical interventions. Alternatively, a combination of imaging modalities such as 
                  X-ray and CT-scan can be utilised in virtual colonoscopy to screen for neoplastic tissue in the colon lining. 
                  While less invasive than conventional colonoscopy, virtual colonoscopy is associated with risks related to 
                  ionising radiation exposure.
                </p>

                <p >Moreover, the imaging requires the patient's colon to be inflated by a tube inserted through the anal canal 
                  which can lead to bloating and overall patient discomfort. The invasive nature of current diagnostic methods a
                  lso often discourages individuals from seeking these procedures unless they exhibit symptoms of CRC. 
                  Unfortunately, early-stage CRC is typically asymptomatic, and significant symptoms such as polyps, 
                  colon disfiguration, substantial tumour size, and abdominal pain generally manifest after stage 2 
                  (Duke's B-D) (Ann, 2006). These challenges, combined with the lack of inclusivity of the younger age 
                  group in existing screening programs, contribute to the underdiagnosis of early-stage CRC cases 
                  in the United Kingdom.
                </p>
                <hr>
              </section>
              <section id = "solution">
                <h3 id="3" class="bold-italic adjusted-section" style="text-align: center;">Our solution: Synthetic Biology</h3>
                <p >Recognising the challenges associated with the diagnosis of CRC, 
                  ColoEcho is committed to devise a non-invasive and patient-friendly screening method that can be 
                  integrated into the healthcare system adressing the limitations of current detection methods. 
                  Our team has devised a CRC screening procedure in the form of a probiotic pill, designed to emit an 
                  enhanced ultrasound contrast upon detection of a CRC biomarker, utilising ultrasonography to observe this. 
                  Ultrasound imaging is the chosen modality for its safe, cost-efficient, and easily accessible nature.
                </p> 

                <p >To construct the ultrasound-biosensor system, we plan to induce the production of gas vesicles in engineered 
                  probiotic E.coli Nissl strain when the biomarker-specific synthetic receptor binds to CRC antigen. 
                  Gas vesicles (GVs) is air-filled aquatic bacterial proteins which oscillates non-linearly with ultrasound wave, 
                  this unique acoustic property results in enhanced ultrasound signal contrast detection, as demonstrated by the 
                  Shapiro lab. Thus, the expression of the gene encoding for GVs, ARG1 can be used as a reporting gene (Shapiro, ..).
                </p>
                <hr>
                <h3 id="4" class="bold-italic adjusted-section" style="text-align: center;">Our motivation to tackle Colorectal Cancer</h3>
                <p >Colorectal cancer holds a deep personal significance to us. As a diverse team, many of our members come from 
                  regions where late-stage diagnoses are common due to insufficient screening programs and poor disease awareness. 
                  These late-stage diagnoses significantly reduce effective treatments, resulting in poorer prognoses and 
                  culminating in high mortality rates. We understand the profound implications of this disease, which 
                  can impact any individual, directly or indirectly, as those dear to us, or even ourselves, 
                  could be at risk. This prompted us to contribute to the fight against colorectal cancer with the 
                  aim of enhancing early diagnosis and, consequently, improving patient survival outcomes.
                </p>
                <hr>
              </section>

              <section id = "project-goals">
                <h3 id="5" class="bold-italic adjusted-section" style="text-align: center;">Project Goals</h3>
                <ul style="font-size: 20px; margin-top: 30px;">
                  <li>Validate the expression of chosen biomarker in the CRC cell line.</li>
                  <li>Design a plasmid containing ligand-inducible gene expression system for the CRC biomarker(s) and transform it to a competent E.coli Nissl strain.</li>
                  <li>Validate the sensitivity of the system in detecting biosensor.</li>
                  <li>Modify the plasmid containing ARG1 gene to be biosensor system-compatible.</li>
                  <li>Transform modified plasmid containing ARG1 into competent E.Coli Nissl strain.</li>
                  <li>Verify the GVs expression when signal is detected with ultrasound.</li>
                </ul>
                <hr>
              </section>

              <section id = "references">
                <h3 id="6" class="bold-italic adjusted-section" style="text-align: center;">References</h3>
                <ul style="font-size: 20px; margin-top: 30px;">
                  <li>
                    <a href="https://www.cancerresearchuk.org/health-professional/cancer-statistics/statistics-by-cancer-type/bowel-cancer#heading-One">
                      Bowel cancer statistics. Cancer Research UK.</a>
                  </li> 
                  <li>
                    <a href="https://symposium.foragerone.com/sfp-surf-fall-seminar-day/presentations/49200">
                      Dalfonzo, S. (n.d.). Symposium by ForagerOne.</a>
                  </li> 
                </ul>
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
            observer: null,
        }
    },
    created() {
        this.observer = new IntersectionObserver(this.onElementObserved, {
            root: this.$el,
            threshold: 0.22,
        })
    },
    mounted() {
        this.$el.querySelectorAll('section[id]').forEach((section) => {
            this.observer.observe(section)
            console.log("observing")
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