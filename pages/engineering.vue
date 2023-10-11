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
        <div class="container">

          <div class="row">
            <div class="col lg-3">
              <nav class="section-nav">
                <h3>contents</h3>

                <ul class="section-nav-list">
                  <li><a href="#introduction">1. Introduction</a></li>
                  <li><a href="#cycle1">2. Cycle One - Llldr Comparison</a>
                    <ul class="section-nav-sublist">
                      <li><a href="#design1">i. Design</a></li>
                      <li><a href="#build1">ii. Build & Test</a></li>
                      <li><a href="#learn1">iii. Learn</a></li>
                    </ul>
                  </li>
                  <li><a href="#cycle2">3. Cycle Two - Promoter Library</a>
                    <ul class="section-nav-sublist">
                      <li><a href="#design2">i. Design</a></li>
                      <li><a href="#build2">ii. Build & Test</a></li>
                      <li><a href="#learn2">iii. Learn</a></li>
                    </ul>
                  </li>
                  <li><a href="#cycle3">4. Cycle Three - Molecular Docking</a>
                    <ul class="section-nav-sublist">
                      <li><a href="#design3">i. Design</a></li>
                      <li><a href="#build3">ii. Build & Test</a></li>
                      <li><a href="#learn3">iii. Learn</a></li>
                    </ul>
                  </li>
                  <li><a href="#cycle4">5. Cycle Four - Plasmid Construction</a>
                    <ul class="section-nav-sublist">
                      <li><a href="#design4">i. Design</a></li>
                      <li><a href="#build4">ii. Build & Test</a></li>
                      <li><a href="#learn4">iii. Learn</a></li>
                    </ul>
                  </li>
                </ul>

              </nav>
            </div>

            <div id="content-main" class="col-lg-9">
              <div class="content-wrapper">
                <div class="content-section">
                  <section id="introduction">
                    <h2 id="list-item-1" class="bold-italic box-shape" style="text-align: center;">1. Introduction
                    </h2>
                    <p>
                      Our journey began with Caltech student Sophie Dalfonzo's vision, leading to a poster highlighting
                      gas vesicles' (GV) potential. This curiosity steered us towards nanostructures, eventually bringing
                      us to Dr. Mikhail Shapiro's pivotal paper on GVs for deep-tissue research in vivo. These structures
                      offered the unique ability to be located within an organism with minimal impact on the host. We then
                      asked the question ‘how could these nano-structures be applied?’, and our attention turned towards
                      diagnostics, focusing on colorectal cancers (CRC), recognising the limited options available for
                      sufferers in terms of non-invasive diagnostics, like colonoscopy.

                    </p>
                    <p>
                      To address this, we explored lactate promoters and as referenced by Zúñiga and colleagues, they
                      developed a promoter capable of functioning under anoxic and glucose-rich conditions—a perfect match
                      for our vision of targeting colorectal cancer, which often presents these challenging environmental
                      conditions. This innovative methodology had yet to be applied comprehensively to cancers as a whole.
                      Our innovation, a diagnostic tool that harnesses gas vesicle expression within a bacterial vector
                      that can be imaged by leveraging ultrasound technology.
                    </p>
                  </section>
                  <section id="cycle1">
                    <h2 id="list-item-2" class="bold-italic box-shape" style="text-align: center;">2. Cycle One -
                      Lldr Sequence Comparison
                    </h2>
                    <p>
                      The origins of ColoEcho stem from our fascination with the distinct acoustic properties of
                      gas-filled molecules,
                      which can be contrasted to that of normal tissues and detected by ultrasound imaging.
                      Our journey officially began after conversing with one of our team member’s head of department,
                      who extensively researches the therapeutic application of such molecules, specifically microbubbles.
                      This discussion expanded our perspective on the vast potential for widening the clinical application
                      of ultrasound.
                      Upon further research, we discovered a biological alternative to microbubbles known as gas vesicles.
                      These structures are formed by certain proteins that are expressed in select aquatic bacteria
                      species.
                      The ability to condition its expression and, thus, the signal, makes gas vesicles a well-suited
                      component
                      for an ultrasound-detectable biosensor.
                    </p>
                    <div id="design1">
                      <h3 class="bold-italic box-shape">i.
                        Design</h3>
                      <p>
                        By utilising the supplementary material from the ALPaGA paper (Zúñiga et al, 2021), we obtained
                        the sequence of LldR. This sequence was then processed through BLAST, a bioinformatics tool that
                        uses a heuristic algorithm and BLOSUM matrix to perform efficient sequence similarity (Altschul et
                        al, 1997). This resulted in us obtaining the FASTA sequence of the LldR 2DI3 (Gao et al, 2006)
                        from the RCSB Protein Data Bank, which we then processed through BLAST to identify homologous LldR
                        sequences. From this, were were able to obtain the sequences of LldR from 108 different organisms.
                      </p>
                    </div>
                    <div id="build1">
                      <h3 class="bold-italic box-shape">ii.
                        Build & Test</h3>
                      <p>
                        We used the Clustal Omega web server for sequence alignment of the LldR sequences of various
                        organisms. This tool employs seeded guide trees and HMM profile-profile algorithms to perform
                        multiple sequence alignments, therefore providing the speed, scalability, and accuracy needed to
                        handle our large data set. (Sieves et al, 2011; Goujon et al, 2010).</p>
                    </div>
                    <div id="learn1">
                      <h3 class="bold-italic box-shape">iii.
                        Learn</h3>
                      <p>
                        - lys4, arg32, arg42, ard46, gly63, gly65
                        - not conserveed, not but important
                        - what was highly conserved? by what percentages?
                        - → make it modular: change N and C terminals → switch depending in whatever operator u want
                        - Lys4, Glu31, Arg32, Arg42, Arg46, Glu47, Gly63, Gly65 and Arg67 in LldR are important for DNA
                        binding. With the exception of Arg67, all of these residues are conserved or show conservative
                        changes in LldR and its homologues.</p>
                    </div>
                  </section>
                  <section id="cycle2">
                    <h2 id="list-item-5" class="bold-italic box-shape" style="text-align: center;">3. Cycle Two -
                      Promoter Library</h2>
                    <p>
                      Colorectal cancer (CRC) ranks amongst the most prevalent oncological diseases, placing fourth in the
                      United Kingdom and third globally according to 2022 NHS data, with approximately two million new
                      diagnoses in 2020 alone. When CRC is diagnosed early during the localised phase,
                      the primary tumour can be removed through surgical intervention, resulting in a patient survival
                      rate exceeding 90% (Chakrabarti, 2020). However, the prognosis significantly deteriorates as
                      the disease advances and metastasises to nearby regional lymph nodes and blood vessels.
                      Unfortunately,
                      a significant portion of patients receives their diagnosis in the later stages, contributing to CRC
                      being
                      the second leading cause of cancer-related mortality in the United Kingdom between 2017 and 2019
                      (Cancer Research UK). These data emphasise the critical necessity of early detection strategies for
                      CRC.
                      The origins of ColoEcho stem from our fascination with the distinct acoustic properties of
                      gas-filled molecules,
                      which can be contrasted to that of normal tissues and detected by ultrasound imaging.
                      Our journey officially began after conversing with one of our team member’s head of department,
                      who extensively researches the therapeutic application of such molecules, specifically microbubbles.
                      This discussion expanded our perspective on the vast potential for widening the clinical application
                      of ultrasound.
                      Upon further research, we discovered a biological alternative to microbubbles known as gas vesicles.
                      These structures are formed by certain proteins that are expressed in select aquatic bacteria
                      species.
                      The ability to condition its expression and, thus, the signal, makes gas vesicles a well-suited
                      component
                      for an ultrasound-detectable biosensor.
                    </p>
                    <div id="design2">
                      <h3 class="bold-italic box-shape">i.
                        Design</h3>
                      <p>
                        Zúñiga et al adapted their initial ALPaGA system to combat its extreme leakiness - they achieved
                        this directed evolution. By altering the biomolecules for regulation and gene output expression,
                        they were able to generate diverse combinations and increase the likelihood of developing a
                        non-leaky promoter system. We decided to adapt the double promoter and RBS library used by Zúñiga
                        et al to aid in the construction of our plasmids.
                      </p>
                    </div>
                    <div id="build2">
                      <h3 class="bold-italic box-shape">ii.
                        Build & Test</h3>
                      <p>
                        Utilising the directed evolution approach used for the ALPaGA promoter (Zúñiga et al, 2021), we
                        built a double promoter and RBS library. All three promoters and three RBS sequences were selected
                        from the BIOFAB registry. To maximise the diversity of our library, we selected a strong, medium,
                        and weak strength sequence for each set of promoters and RBS. </p>
                    </div>
                    <div id="learn2">
                      <h3 class="bold-italic box-shape">iii.
                        Learn</h3>

                      <p>
                        Our double promoter and RBS library produced nine different promoter-RBS combinations. With this,
                        we can systematically explore the influence of these two genetic elements and explore how they
                        influence gene expression.</p>
                    </div>
                    <div class="p-table__container">
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">Combination</th>
                            <th scope="col">Promoter</th>
                            <th scope="col">RBS</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Strong promoter + strong RBS</td>
                            <td>ttgacaattaatcatccggctcgtaatatgtgtgga</td>
                            <td>aaagaggagaaa</td>
                          </tr>
                          <tr>
                            <td>Strong promoter + medium RBS</td>
                            <td>ttgacaattaatcatccggctcgtaatatgtgtgga</td>
                            <td>tcacacaggaaag</td>
                          </tr>
                          <tr>
                            <td>Strong promoter + weak RBS</td>
                            <td>ttgacaattaatcatccggctcgtaatatgtgtgga</td>
                            <td>attaaagaggagaaa</td>
                          </tr>
                          <tr>
                            <td>Medium promoter + strong RBS</td>
                            <td>ttgtctattaatcatcggctcgtataatgtgtgga</td>
                            <td>aaagaggagaaa</td>
                          </tr>
                          <tr>
                            <td>Medium promoter + medium RBS</td>
                            <td>ttgtctattaatcatcggctcgtataatgtgtgga</td>
                            <td>tcacacaggaaag</td>
                          </tr>
                          <tr>
                            <td>Medium promoter + weak RBS</td>
                            <td>ttgtctattaatcatcggctcgtataatgtgtgga</td>
                            <td>attaaagaggagaaa</td>
                          </tr>
                          <tr>
                            <td>Weak promoter + strong RBS</td>
                            <td>ttgacaattaatcatccggctcttagcgtgtgtgga</td>
                            <td>aaagaggagaaa</td>
                          </tr>
                          <tr>
                            <td>Weak promoter + medium RBS</td>
                            <td>ttgacaattaatcatccggctcttagcgtgtgtgga</td>
                            <td>tcacacaggaaag</td>
                          </tr>
                          <tr>
                            <td>Weak promoter + weak RBS</td>
                            <td>ttgacaattaatcatccggctcttagcgtgtgtgga</td>
                            <td>attaaagaggagaaa</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>
                  <section id="cycle3">
                    <h2 id="list-item-5" class="bold-italic box-shape" style="text-align: center;">4. Cycle Three -
                      Molecular Docking</h2>
                    <div id="design3">
                      <h3 class="bold-italic box-shape">i.
                        Design</h3>
                      <p>
                        Our first step was to identify the correct binding sites for our promoters and RNA polymerase. The
                        -35 and -10 hexamers are characterised by the highly conserved base pairs: -35T, -34T, -33G, -12T,
                        -11A, and -7T (Campbell et al, 2002). Pinpointing these base pairs within our promoter sequences
                        allowed us to fully define the -35 and -10 hexamers. Within the RNA polymerase σ70 holoenzyme, the
                        4.2 and 2.4 regions of the σ70 factor bind to the -35 and -10 hexamers, respectively (Paget and
                        Helmann 2003). We were able to define the 4.2 and 2.4 regions as residues 572-599 and 435-452,
                        respectively (Campbell et al, 2002).
                      </p>
                    </div>
                    <div id="build3">
                      <h3 class="bold-italic box-shape">ii.
                        Build & Test</h3>
                      <p>
                        Once the binding sites were determined, our next aim was to prepare the 3D structures of our
                        promoters and RNA polymerase. The structures of the three promoters were generated from their
                        sequences via the ‘DNA Sequence To Structure’ online tool (SCFBIO, n.b.). The σ70 factor RpoD
                        chain was isolated from the x-ray crystal structure of RNA polymerase σ70 holoenzyme (Murakami,
                        2013) with PyMOL. We utilised the HADDOCK 2.4 web server to run our docking simulations, as it can
                        grasp the protein-DNA binding dynamics through the use of ambiguous interaction restraints,
                        distance restraints, and flexible docking (Honorato et al, 2021; van Zundert et al, 2016).</p>
                    </div>
                    <div id="learn3">
                      <h3 class="bold-italic box-shape">iii.
                        Learn</h3>
                      <p>
                        HADDOCK 2.4 calculated van der Waals energy, electrostatic energy, desolvation energy, and
                        restraint violation energy for each promoter tested. By equating the sum of these individual
                        energies to the total binding energy of the interaction, we were able to rank the promoters.
                        Promoter apFAB276 (BBa_K3702031) had the most stable interaction with the σ70 factor RpoD chain,
                        as it had the most negative total binding energy of all the promoters tested. Therefore, apFAB276
                        (BBa_K3702031) should have the tightest transcription and the least leakiness.
                      </p>
                      <p>With our docking simulations, we are able to hypothesise what combination of promoter and RBS is
                        the most optimal for our plasmid construct. HADDOCK 2.4 showed us that the promoter apFAB276
                        (BBa_K3702031) has the most stable binding with RNA polymerase σ70 holoenzyme. For the RBS, we can
                        predict that BBa_B0034 will have the most stable interaction with rRNA since it has the greatest
                        similarity to the Shine-Dalgarno sequence AGGAGG (Gobey 2022). However, our use of molecular
                        docking is a simplification of leakiness, as it lacks the biological context and complexity of
                        transcription regulation. Therefore, it is necessary for us to validate our results and
                        predictions experimentally by building our promoter construct combinations, transforming them into
                        E. coli, and expressing GFPs.</p>
                    </div>

                  </section>
                  <section id="ref">
                    <h2 id="list-item-5" class="bold-italic box-shape" style="text-align: center;">4. Cycle Four -
                      Plasmid Docking</h2>
                    <div id="design4">
                      <h3 class="bold-italic box-shape">i.
                        Design</h3>
                      <p>
                        Our initial plan was to use the RFC assembly to make our promoter constructs but the method was
                        too time-consuming, so we explored other assembly methods. We decided to implement the Joint
                        Universal Modular Plasmids (JUMP) method (Valenzuela-Ortega and French, 2021) since it was
                        modular, efficient and sustainable for our timescale. However, due to the numerous illegal sites
                        in JUMP, we had to redesign the restriction enzymes to ensure our system was compatible.
                      </p>
                    </div>
                    <div id="build4">
                      <h3 class="bold-italic box-shape">ii.
                        Build & Test</h3>
                      <p>
                        Once the binding sites were determined, our next aim was to prepare the 3D structures of our
                        promoters and RNA polymerase. The structures of the three promoters were generated from their
                        sequences via the ‘DNA Sequence To Structure’ online tool (SCFBIO, n.b.). The σ70 factor RpoD
                        chain was isolated from the x-ray crystal structure of RNA polymerase σ70 holoenzyme (Murakami,
                        2013) with PyMOL. We utilised the HADDOCK 2.4 web server to run our docking simulations, as it can
                        grasp the protein-DNA binding dynamics through the use of ambiguous interaction restraints,
                        distance restraints, and flexible docking (Honorato et al, 2021; van Zundert et al, 2016).</p>
                    </div>
                    <div id="learn4">
                      <h3 class="bold-italic box-shape">iii.
                        Learn</h3>
                      <p>
                        HADDOCK 2.4 calculated van der Waals energy, electrostatic energy, desolvation energy, and
                        restraint violation energy for each promoter tested. By equating the sum of these individual
                        energies to the total binding energy of the interaction, we were able to rank the promoters.
                        Promoter apFAB276 (BBa_K3702031) had the most stable interaction with the σ70 factor RpoD chain,
                        as it had the most negative total binding energy of all the promoters tested. Therefore, apFAB276
                        (BBa_K3702031) should have the tightest transcription and the least leakiness.
                      </p>
                      <p>With our docking simulations, we are able to hypothesise what combination of promoter and RBS is
                        the most optimal for our plasmid construct. HADDOCK 2.4 showed us that the promoter apFAB276
                        (BBa_K3702031) has the most stable binding with RNA polymerase σ70 holoenzyme. For the RBS, we can
                        predict that BBa_B0034 will have the most stable interaction with rRNA since it has the greatest
                        similarity to the Shine-Dalgarno sequence AGGAGG (Gobey 2022). However, our use of molecular
                        docking is a simplification of leakiness, as it lacks the biological context and complexity of
                        transcription regulation. Therefore, it is necessary for us to validate our results and
                        predictions experimentally by building our promoter construct combinations, transforming them into
                        E. coli, and expressing GFPs.</p>
                    </div>
                  </section>
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


