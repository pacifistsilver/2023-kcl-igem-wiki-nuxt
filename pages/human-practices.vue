<template>
  <div>
    <div>

      <div class="index_p-contentsHeader row">
        <div class="index_p-contentsHeader_inner col-8">
          <ol class="index_p-card" style="--m: 4; --tan: 0.41">
            <li style="--i: 1" class="index_p-card__inner">
              <span class="index_p-cardItem__label">Learn</span>
            </li>
            <li style="--i: 2" class="index_p-card__inner">
              <span class="index_p-cardItem__label">Design</span>
            </li>
            <li style="--i: 3" class="index_p-card__inner">
              <span class="index_p-cardItem__label">Build</span>
            </li>
            <li style="--i: 4" class="index_p-card__inner">
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
                  <div class="humanpracticespic">
                    <img src="https://static.igem.wiki/teams/4584/wiki/human-practice/hp-intro-to-diversity.png" alt="intro pic diversity">
                  </div>
                  <section id = "introduction">
                    <h2 id="list-item-1" class="bold-italic box-shape" style="text-align: center;">1. The Problem</h2>
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
                    <h2 id="list-item-2" class="bold-italic adjusted-section box-shape" style="text-align: center;">2. Defining a Solution</h2>
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
                    <h2 id="list-item-3" class="bold-italic adjusted-section box-shape" style="text-align: center;">3. Designing a Solution</h2>
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
                    <h2 id="list-item-4" class="bold-italic adjusted-section box-shape" style="text-align: center;">4. Our Implementation</h2>
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
                    <h2 id="list-item-5" class="bold-italic adjusted-section box-shape" style="text-align: center;">References</h2>
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
                    <p>This is the Integrated Human Practices content... Lorem Ipsum is simply dummy text of the printing 
                      and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                       when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has 
                       survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                       It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more 
                       recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <p>More details about Integrated Human Practices...This is the Integrated Human Practices content... Lorem Ipsum is simply dummy text of the printing 
                      and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                       when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has 
                       survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                       It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more 
                       recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
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
                  <section id="references" data-aos="fade-up" class="box3">
                      <h3 id="6" class="bold-italic box-reference hovering" @click="togglePage" style="text-align: center; color: white;">
                        <div class="reference-header">
                          content1
                        </div>
                        <span class="close-btn" @click.stop="togglePage">×</span>
                      </h3>
                      <div class="references-content" v-show="showPage">
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
                      </div>
                  </section>
                  <div style="margin-bottom: 30px;"></div>
                  <section id="references" data-aos="fade-up" class="box3">
                      <h3 id="6" class="bold-italic box-reference hovering" @click="togglePage1" style="text-align: center; color: white;">
                        <div class="reference-header">
                          content2
                        </div>
                        <span class="close-btn" @click.stop="togglePage1">×</span>
                      </h3>
                      <div class="references-content" v-show="showPage1">
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
                      </div>
                  </section>
                  <div style="margin-bottom: 30px;"></div>
                  <section id="references" data-aos="fade-up" class="box3">
                      <h3 id="6" class="bold-italic box-reference hovering" @click="togglePage2" style="text-align: center; color: white;">
                        <div class="reference-header">
                          content2
                        </div>
                        <span class="close-btn" @click.stop="togglePage2">×</span>
                      </h3>
                      <div class="references-content" v-show="showPage2">
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
                      </div>
                  </section>
                  <div style="margin-bottom: 30px;"></div>
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
      showPage: false,
      showPage1: false,
      showPage2: false,
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
    // toggle for ceontent1 //
    togglePage() {
      this.showPage = !this.showPage;
    },
    // toggle for content2 //
    togglePage1() {
      this.showPage1 = !this.showPage1;
    },
    // toggle for content3 //
    togglePage2() {
      this.showPage2 = !this.showPage2;
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


