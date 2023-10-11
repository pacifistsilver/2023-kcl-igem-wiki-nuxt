<template>
  <div class="content">
    <header class="header-content">
      <div class="bg">
        <h1 style="text-align: center; font-weight: bold;" class="header-text">Description</h1>
      </div>
    </header>
    <main>
      <main>
        <div class="container">
          <div class="row">
            <div class="col lg-3">
              <nav class="section-nav">
                <h3>contents</h3>

                  <ul class="section-nav-list">  
                    <li><a  href="#project-description">Introduction</a></li>
                    <li><a  href="#colorectal-cancer">Colorectal Cancer</a></li>                  
                    <li><a  href="#solution">The Solution</a></li>                 
                    <li><a  href="#project-goals">Project Goals</a></li>             
                    <li><a href="#references">References</a></li>            
                  </ul>   

            </nav>
          </div>


          <div id="content-main" class="col-lg-9">

              <section id = "project-description" data-aos = "fade-up">
                <h2 id="1" class="bold-italic adjusted-section" style="text-align: center; margin-top: 30px;">Introduction</h2>
                <p >
                  The origins of ColoEcho stem from our fascination with the distinct acoustic properties of gas-filled molecules, 
                  which can be contrasted to that of normal tissues and detected by ultrasound imaging. 
                  Our journey officially began after conversing with one of our team member’s head of department, 
                  who extensively researches the therapeutic application of such molecules. 
                  This discussion expanded our perspective on the vast potential for widening the clinical application of ultrasound. 
                  Upon further research, we discovered a biological alternative to microbubbles known as gas vesicles. 
                  These structures are formed by certain proteins that are expressed in select aquatic bacteria species. 
                  The ability to condition its expression and, thus, the signal, makes gas vesicles a well-suited component 
                  for an ultrasound-detectable biosensor.
                </p>
                <div class="line-container">
                  <div class="line line-left" data-aos="fade-right"></div>
                  <div class="line line-right" data-aos="fade-left"></div>
                </div>
              </section>  

              <p>Another alternative to the colonoscopy is the virtual colonoscopy that utilises CT-scan technology to
                screen for malignant tissue in the colon lining without the insertion of a scope. While less invasive
                than conventional colonoscopy, virtual colonoscopies are associated with risks related to ionising
                radiation exposure and should also not be used repeatedly.
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
              <p>In the UK, the current routine screening method for colorectal cancer is the faecal immunochemical test
                (FIT). The FIT is an at-home stool sample test given to individuals aged 50-74 every 2 years. The test
                works by detecting the presence of blood in the stool—a symptom often implicated in colorectal cancer.
                However, it is important to note that blood may not always be present in the stool of those with
                colorectal cancer, particularly in the early stages. The FIT requires a colonoscopy to confirm
                malignancy, but because the test is oversensitive it can lead to unnecessary colonoscopies. The FIT is
                the only currently available test that can be utilised as a routine screening method, but it alienates
                the younger age group that is also becoming increasingly more susceptible to colorectal cancer. </p>
              <p>Overall, the invasive nature, potential risks/complications, and lack of accessibility of current
                detection methods promotes negative stigma, discouraging individuals from getting tested, prolonging
                diagnosis, and delaying treatment.</p>
              <hr>
            </section>
            <section id="solution" data-aos="fade-up">
              <h3 id="3" class="bold-italic adjusted-section box-shape" style="text-align: center;">4. Our solution:
                ColoEcho </h3>
              <p>Recognising the challenges associated with the diagnosis of colorectal cancer, ColoEcho is committed to
                devising a non-invasive and patient-friendly screening method that can be seamlessly integrated into the
                healthcare system. ColoEcho is an ultra-sound based diagnostic tool aimed for the early detection of
                colorectal cancer. The use of ultrasound technology makes ColoEcho non-invasive, cost-efficient, and
                easily accessible. This allows for ColoEcho to be implemented as a routine screening method for those at
                higher risk (e.g., age and genetic predisposition).
              </p>

              <p>The development of ColoEcho begins with the engineering of E. coli Nissel to induce production of gas
                vesicles. Gas vesicles are proteins produced by aquatic bacteria to aid in flotation, but we are able to
                utilise them as a contrast agent in ultrasound due to their acoustic properties. The acoustic properties
                of gas vesicles comes from their non-linear oscillation that differs from the linear oscillation of
                tissue and bone.
              </p>
              <p>
                The diagnostic process will work by prescribing the patient a pill containing the engineered E. coli and
                instructing them to take it 7 hours before their ultrasound appointment. In the presence of a solid
                tumor, L-lactate, a prominent metabolite, is present in elevated concentrations in the colon. When the
                engineered E. coli come into contact with this elevated levels of L-lactate, the LldR transcription
                regulator protein will bind to the lactate. This binding event triggers the activation of our promoter
                system and subsequently, downstream expression of the bacterial acoustic reporter gene derived
                from Serratia (bARGSer). This particular gene cluster holds the blueprint for the synthesis of gas
                vesicles. These gas vesicles can then be detected through an ultrasound scan. If the gas vesicles are
                present on the scan, it is likely that the patient has colorectal cancer and will then be sent for a
                colonoscopy for a biopsy to confirm the presence of colorectal cancer. However, in the absence of a
                solid tumor, L-lactate levels remain unchanged. Without this key metabolite, the cascade leading to the
                production of gas vesicles is not triggered, ensuring that no gas vesicles are synthesised and no
                contrast will be seen on the ultrasound scan.
              </p>
              <figure class="figure">
                <img src="https://static.igem.wiki/teams/4584/wiki/gv-figure-description.png"
                  class="figure-img img-fluid rounded"
                  alt="A generic square placeholder image with rounded corners in a figure.">
                <figcaption class="figure-caption text-right">A caption for the above image.</figcaption>
              </figure>
              <p>
                This figure provides a vivid depiction of the gas vesicle (GV) structure. Characterized by its unique
                cylindrical form, the GV is optimized for buoyancy. The diagram underscores its intricate architecture
                and offers a scale reference, highlighting its nanoscale dimensions. This compact size, coupled with its
                distinctive structure, underscores the vesicle's ability to resonate effectively with ultrasound waves.ƒ
              </p>
              <p>The current lactate inducible promoter system we identified through literature review was determined to
                be leaky, in that, when there was no lactate present, gene expression would still occur. In order to
                tackle this problem, we designed a promoter construct system consisting of three BIOFAB promoters and
                three ribosomal binding sites all of varying strengths (weak, medium, strong). We used this construct
                system to determine which combination of promoter and ribosomal binding site would be ideal to combat
                the leakiness of the system and create a precise diagnostic tool. This promoter construct system is
                available for other iGEM teams and researchers to mix and match promoters and ribosomal binding sites
                depending on their desired outcome.
              </p>
              <hr>
              <section id="motivation" data-aos="fade-up">
                <h3 id="4" class="bold-italic adjusted-section box-shape" style="text-align: center;">5. Our motivation
                  to tackle
                  Colorectal Cancer</h3>
                <p>As a diverse team, many of our members come from regions where late-stage colorectal diagnoses are
                  common due to insufficient screening programs and poor disease awareness. These late-stage diagnoses
                  significantly reduce effective treatments, resulting in poorer prognoses and high mortality rates. We
                  understand the profound implications of this disease, which can impact any individual, regardless of
                  age or gender. This prompted us to contribute to the fight against colorectal cancer with the aim of
                  enhancing early diagnosis and, consequently, improving patient survival outcomes.
                </p>
                <div class="line-container">
                  <div class="line line-left" data-aos="fade-right"></div>
                  <div class="line line-right" data-aos="fade-left"></div>
                </div>
              </section>
              <section id = "solution" data-aos = "fade-up">
                <h3 id="3" class="bold-italic adjusted-section" style="text-align: center;">Our solution: Synthetic Biology</h3>
                <p >Recognising the challenges associated with the diagnosis of CRC, 
                  ColoEcho is committed to devise a non-invasive and patient-friendly screening method that can be 
                  integrated into the healthcare system adressing the limitations of current detection methods. 
                  Our team has devised a CRC screening procedure in the form of a probiotic pill, designed to emit an 
                  enhanced ultrasound contrast upon detection of a CRC biomarker, utilising ultrasonography to observe this. 
                  Ultrasound imaging is the chosen modality for its safe, cost-efficient, and easily accessible nature.
                </p> 
                <div class="wiki-image-container">
                    <img src="https://static.igem.wiki/teams/4584/wiki/biorender-figures/biorender-figures/newbiorender.png" alt="biorender">
                </div>
                <p >To construct the ultrasound-biosensor system, we plan to induce the production of gas vesicles in engineered 
                  probiotic E.coli Nissel strain when the biomarker-specific synthetic receptor binds to CRC antigen. 
                  Gas vesicles (GVs) is air-filled aquatic bacterial proteins which oscillates non-linearly with ultrasound wave, 
                  this unique acoustic property results in enhanced ultrasound signal contrast detection, as demonstrated by the 
                  Shapiro lab. Thus, the expression of the gene encoding for GVs, ARG1 can be used as a reporting gene (Shapiro, 2014).
                </p>
                <div class="wiki-image-container">
                    <img src="https://static.igem.wiki/teams/4584/wiki/biorender-figures/biorender-figures/newbiorender2.png" alt="biorender2">
                </div>
                <p>
                  Focusing on the initial steps of the ultrasound-biosensor system, we delve into the solid tumor environment 
                  where this intricate mechanism begins. Within this tumor milieu, L-lactate, a prominent metabolite, is 
                  present in elevated concentrations. Our engineered probiotic E. coli Nissle strain is equipped with a 
                  lactate permease, a protein transporter specifically tailored to facilitate the uptake of L-lactate. As 
                  L-lactate is transported into the cell, it interacts with the Lldr regulatory protein. This binding event 
                  triggers the activation of the P_Hyper spank promoter. Sequentially, this activation sets off a cascade: 
                  firstly, the P_AlPaGA +1 promoter is induced, and subsequently, the ARG2 Serratia gene cluster is expressed. 
                  This particular gene cluster holds the blueprint for the synthesis of gas vesicles, buoyant, 
                  air-filled protein structures that exhibit unique acoustic properties.
                </p>
                <hr>
                <div class="wiki-image-container">
                    <img src="https://static.igem.wiki/teams/4584/wiki/biorender-figures/biorender-figures/newbiorender3.png" alt="biorender3">
                </div>
                <p>
                  In the absence of a solid tumor, L-lactate levels remain unchanged. Without this key metabolite, 
                  the engineered E. coli Nissle strain remains inactive. As a result, the cascade leading to the production 
                  of gas vesicles is not triggered, ensuring that no gas vesicles are synthesized in the absence of the tumor 
                  signature.
                </p>
                <div class="wiki-image-container">
                    <img src="https://static.igem.wiki/teams/4584/wiki/biorender-figures/biorender-figures/newrnap-in-plasmid-system-blocked-close-up-1.png" alt="biorender4">
                </div>
                <p>
                  Diving deeper into the molecular intricacies of our engineered system, the fourth figure provides a 
                  detailed visualization of the role of RNA polymerase (RNAP) within the plasmid context. 
                  Under specific conditions, RNAP becomes dissociated, preventing its binding to the promoter regions in 
                  the plasmid. This dissociation acts as a molecular switch, halting the transcriptional machinery. 
                  Without RNAP's active involvement, the ARG2 gene remains transcriptionally silent. This finely-tuned 
                  regulation ensures that the ARG2 gene, pivotal for gas vesicle production, is not transcribed, 
                  thereby negating the synthesis of gas vesicles in the system.
                </p>
                <div class="wiki-image-container">
                    <img src="https://static.igem.wiki/teams/4584/wiki/biorender-figures/biorender-figures/biorender5.png" alt="biorender5">
                </div>
                <p>
                  This figure provides a vivid depiction of the gas vesicle (GV) structure. 
                  Characterized by its unique cylindrical form, the GV is a marvel of nature, optimized for buoyancy. 
                  The diagram underscores its intricate architecture and offers a scale reference, 
                  highlighting its nanoscale dimensions. This compact size, coupled with its distinctive structure, 
                  underscores the vesicle's ability to resonate effectively with ultrasound waves.
                </p>
                <div class="line-container">
                  <div class="line line-left" data-aos="fade-right"></div>
                  <div class="line line-right" data-aos="fade-left"></div>
                </div>
                <h3 id="4" class="bold-italic adjusted-section" style="text-align: center;">Our motivation to tackle Colorectal Cancer</h3>
                <p >Colorectal cancer holds a deep personal significance to us. As a diverse team, many of our members come from 
                  regions where late-stage diagnoses are common due to insufficient screening programs and poor disease awareness. 
                  These late-stage diagnoses significantly reduce effective treatments, resulting in poorer prognoses and 
                  culminating in high mortality rates. We understand the profound implications of this disease, which 
                  can impact any individual, directly or indirectly, as those dear to us, or even ourselves, 
                  could be at risk. This prompted us to contribute to the fight against colorectal cancer with the 
                  aim of enhancing early diagnosis and, consequently, improving patient survival outcomes.
                </p>
                <div class="line-container">
                  <div class="line line-left" data-aos="fade-right"></div>
                  <div class="line line-right" data-aos="fade-left"></div>
                </div>
              </section>

              <section id = "project-goals" data-aos = "fade-up">
                <h3 id="5" class="bold-italic adjusted-section" style="text-align: center;">Project Goals</h3>
                <ul style="font-size: 20px; margin-top: 30px;">
                  <li>Design a plasmid containing ligand-inducible gene expression system for the CRC biomarker(s) and transform it to a competent E.coli Nissl strain.</li>
                  <li>Validate the sensitivity of the system in detecting biosensor.</li>
                  <li>Modify the plasmid containing ARG1 gene to be biosensor system-compatible.</li>
                  <li>Transform modified plasmid containing ARG1 into competent E.Coli Nissl strain.</li>
                  <li>Verify the GVs expression when signal is detected with ultrasound.</li>
                </ul>
                <div class="line-container">
                  <div class="line line-left" data-aos="fade-right"></div>
                  <div class="line line-right" data-aos="fade-left"></div>
                </div>
              </section>

              <section id="references" data-aos="fade-up">
                <h3 id="6" class="bold-italic adjusted-section" style="text-align: center;">References</h3>
                <ul style="font-size: 15px; margin-top: 30px;">
                  <li>
                    <a href="https://doi.org/10.1016/j.amsu.2022.104453" target="_blank">
                      AlZaabi, A., AlHarrasi, A., AlMusalami, A., AlMahyijari, N., Al Hinai, K., ALAdawi, H., &
                      Al-Shamsi,
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
                      Costas-Chavarri, A., Nandakumar, G., Temin, S., Lopes, G., Cervantes, A., Cruz Correa, M.,
                      Engineer,
                      R.,
                      Hamashima, C., Ho, G. F., Huitzil, F. D., Malekzadeh Moghani, M., Sharara, A. I., Stern, M. C.,
                      Teh,
                      C.,
                      Vázquez Manjarrez, S. E., Verjee, A., Yantiss, R., & Shah, M. A. (2019). Treatment of Patients
                      With
                      Early-Stage Colorectal Cancer: ASCO Resource-Stratified Guideline. Journal of Global
                      Oncology, 5(5),
                      1–19.
                      https://doi.org/10.1200/jgo.18.00214
                    </a>
                  </li>
                  <li>
                    <a href="https://doi.org/10.1200/go.21.00111" target="_blank">
                      Deo, S. V. S., Kumar, S., Bhoriwal, S., Shukla, N. K., Sharma, A., Thulkar, S., Das, P., Bhagat,
                      P.,
                      Dhall, K., Pathy, S., & Mohanti, B. K. (2021). Colorectal Cancers in Low- and Middle-Income
                      Countries—
                      Demographic Pattern and Clinical Profile of 970 Patients Treated at a Tertiary Care Cancer Center
                      in
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
                <div class="line-container">
                  <div class="line line-left" data-aos="fade-right"></div>
                  <div class="line line-right" data-aos="fade-left"></div>
                </div>
              </section>
            </div>  
          </div> 
        </div> 
      </main>

  </div>
</template>
<script>
export default {
  data() {
      return {
          showReferences: false, // Add this line
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
  },
}
</script>
