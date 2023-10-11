<template>
  <div>
    <div>

      <header class="header-content custom-shape" id="header">
        <div class="bg">
          <div class="box-container">
                <div class="box" @click="showEducationContent">Design</div>
                <div class="box" @click="showEducationContent2">Build</div>
                <div class="box" @click="showEducationContent3">Test</div>
                <div class="box" @click="showEducationContent4">Learn</div>
              </div>
        </div>
      </header>

      <main>
        <div class="container">

          <div class="row">
            <div class="col lg-3">
              <nav class="section-nav">
                <h3>contents</h3>

                <ul class="section-nav-list">
                  <li><a href="#intro">1. Introduction</a></li>
                  <li>
                    <a href="#design">2. Our Engineering Cycle</a>
                    <ul class="section-nav-sublist">
                      <li><a href="#design">i. Design</a></li>
                      <li><a href="#build">ii. Build</a></li>
                      <li><a href="#test">iii. Test</a></li>
                      <li><a href="#learn">iv. Learn</a>
                      </li>
                    </ul>
                  </li>
                  <li><a href="#test">4. Our Events</a></li>
                  <li><a href="#learn">5. Conclusion and Reflection</a></li>
                </ul>

              </nav>
            </div>


            <div id="content-main" class="col-lg-9">
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
                  <br>
              </div>
                    <!-- toggle boxes -->
                  <div style="margin-bottom: 50px;"></div>
                  <section id="references" data-aos="fade-up" class="box5">
                    <h3 id="6" class="bold-italic box-reference hovering" @click="toggleGeneralPublic" style="text-align: center;">
                      <div class="reference-header">
                        General Public
                      </div>
                      <span class="close-btn" @click.stop="toggleGeneralPublic">×</span>
                    </h3>
                    <div class="references-content" v-show="showGeneralPublic">
                      <h1><b>Social media education</b></h1>
                      <h2>Intention</h2>
                      <p>Our Instagram posts promote awareness about colorectal cancer and disseminate crucial information 
                        about its pathophysiology, diagnosis, and general awareness.
                      </p>
                      <h2>Summary</h2>
                      <p>
                        Through eye-catching visuals, informative infographics, and engaging captions, we've successfully 
                        transformed complex medical concepts into accessible and digestible content. Our posts have 
                        simplified the intricacies of CRC pathophysiology, making it easier for our followers to understand 
                        the disease's mechanisms and risk factors. We've also shared insights into the latest diagnostic 
                        methods, empowering individuals to make informed decisions about their health. Furthermore, our 
                        Instagram page has become a hub for general CRC awareness, helping to reduce stigma and encouraging 
                        open conversations about prevention and early detection. The interactive nature of Instagram has 
                        allowed us to connect directly with our audience, answering questions, and fostering a sense of 
                        community. It's evident that our social media efforts have been instrumental in raising awareness and
                        making a positive impact in the fight against CRC.
                      </p>
                      <h2>Reflection and Feedback:</h2>
                      <p>
                        This is seen from a comment left on our page: “I have learned a lot from your page. 
                        I never knew that colorectal cancer is the third most common cancer in the world, but 
                        I feel like our generation hasn't really talked about it. Not to mention by 2030 colon 
                        cancer could pose a serious threat to our generations which is why this ColoEcho project 
                        could be a game-changer to increase awareness and early detection.”
                      </p>
                      <h1><b>Podcast series: ScienceMind</b></h1>
                      <h2>Intention</h2>
                      <p>In order to reach a wider audience, we recognised that podcasts hosted on digital platforms offer an 
                        accessible method for a wider range of audiences, transcending cultural boundaries and preferences. With 
                        this in mind, our podcast series was carefully crafted to provide an accessible and engaging experience for 
                        all. In the Science Mind, our three-part podcast series aspired to promote synthetic biology and introduce the 
                        public, prospective students, professors, and all those curious, to its potential. We aimed to create a podcast 
                        that was easy to listen to and not only informs, but encourages listeners to shape and challenge their perspectives on synthetic biology. Through this podcast, our goal was to spark curiosity, ignite discussions, and inspire positive change, one episode at a time.
                      </p>
                      <h2>Summary</h2>
                      <p>
                        In Episode 1, "Unveiling iGEM and KCL's Journey into Synthetic Biology," we took a look into the rich history and inner workings of the iGEM competition. We started by delving into the history of iGEM, tracing its origins back to 2003 at MIT, where students sought to expand their exploration of synthetic biology beyond the classroom. Fast forwarding to the present day, where iGEM has evolved into a global phenomenon, drawing teams from all corners of the world. The episode also delved into the co/mpetition layout, explaining the various stages, from problem identification and project planning to the rigorous wet lab work and culminating in presentations at the Giant Jamboree. Throughout Episode 1, our aim was to provide a comprehensive overview of iGEM, its history, objectives, and the dynamic competition format, setting the stage for a deeper exploration of synthetic biology and King's College London's role in this exciting journey.
                      </p>
                      <p>
                        In Episode 2, titled "Unmasking the Hidden Environmental Impact of Healthcare and Synbio," we set out on an interesting journey to investigate the frequently disregarded environmental consequences of modern healthcare systems. The episode began by emphasising the undeniable importance of healthcare systems, like the NHS, on a global scale. However, it prompted us to question the substantial environmental footprint that healthcare practices can leave behind.
                      </p>
                      <p>
                        We delved into an examination of common healthcare scenarios. For instance, a simple doctor's visit involves the use of disposable paper and gloves, and patients may be advised to undergo procedures such as MRIs, which contribute to CO2 emissions. Our discussion extended to consider the cumulative environmental impact of routine healthcare practices, including patient transportation, ambulance emissions, prescription paper, and medicine packaging. These insights emphasised the urgency of addressing the environmental impact of healthcare, a topic that had previously remained largely underappreciated. Examples like these were then backed up by data, which confirmed the notion that healthcare systems place a heavy burden on the environment.
                      </p>
                      <p>
                        Recognizing our background in synthetic biology, we explored the potential of synthetic biology tools to mitigate the environmental impact of healthcare. We acknowledged that resistance to change within the healthcare system can be substantial, especially when it involves genetically modified organisms (GMOs). Despite this resistance, we highlighted the significant potential of synthetic biology in healthcare and its capacity to introduce innovative solutions to environmental challenges. Furthermore, we discussed ongoing efforts within the healthcare industry to embrace environmentally friendly practices, including the NHS's commitment to achieving carbon neutrality by 2040 (!).
                      </p>
                      <p>
                        In our concluding Episode 3, "ColoEcho vs. the Current Markets and Awareness of CRC," we raised awareness about colorectal cancer, sharing critical statistics and prevalence data. We explored the limitations of current detection methods, highlighting ColoEcho as a superior alternative. We also emphasised the importance of continued testing, even in the presence of invasive methods, and discussed the risk factors associated with CRC. Additionally, we bring attention to the evolving landscape of CRC diagnostics, discussing the Mayo Clinic's efforts in developing AI-enhanced colonoscopies (!). This showcases the continuous advancements in technology and medical research aimed at improving the accuracy and accessibility of CRC detection methods. Throughout this episode, we highlight the importance of raising awareness about CRC and early detection, ultimately aiming to contribute to a reduction in CRC-related mortality rates and enhance the prospects of those affected by this disease.
                      </p>
                      <h2>Feedback and Reflection:</h2>
                      <p>
                        Overall, the podcast aimed to shed light on the idea that synthetic biology can play a pivotal role in reducing a deleterious impact on multiple stakeholders in the healthcare industry. It encouraged listeners to consider the environmental consequences of healthcare practices and the potential for innovative solutions offered by synthetic biology. By unpacking these topics, we aimed to demystify synthetic biology and underscore the significance of early diagnostics. Our podcast series serves as an educational and enlightening resource for all, inspiring the next generation of scientists and fostering a deeper understanding of the groundbreaking potential of synthetic biology. Scripts transparent for other teams to reference.
                      </p>
                      <h1>Hope in NanoStrides, Livestream</h1>
                      <h2>Intention</h2>
                      <p>
                        In order to promote awareness of cancer research and education, we collaborated with the American Association for Cancer Research (AACR) and Professor Mark Green at King’s College London to host a livestream talk on our Instagram and Youtube, garnering nearly 1000 views.
                      </p>
                      <h2>Summary</h2>
                      <p>
                        Professor Green’s research focuses on the use of fluorescent nanoparticles to improve surgical and diagnostic precision. Through this discussion, we were able to showcase the intersection between the intricacies of cancer research and the significance of how charities like the AACR can educate the general public about complex science. During the talk, Professor Green also emphasized the importance of collaboration between clinicians and researchers to move beyond the ‘if it’s not broken don’t fix it’ mentality and put novel diagnostic tools into action. Similarly, Michael Gilbert of the AACR highlighted the importance of collaboration between charities and researchers in facilitating widespread education among diverse demographics. By utilizing educational livestream talks like this one, leveraging social media, and engaging with schools, experts and clinicians, we here at ColoEcho aim to bridge the gap between researchers, clinicians, and the general public.
                      </p>
                      <h2>Feedback and Reflection:</h2>
                      <p>
                        The livestream platform also allowed us to reach a global audience through Youtube and Instagram. Since this was a free virtual talk, we were able to enhance accessibility and expand our educational outreach. Additionally, the two different viewpoints we featured were from two different countries (US and UK), demonstrating how researchers and charities can interact and collaborate on a global scale.
                      </p>
                    </div>
                  </section>
                  <div style="margin-bottom: 50px;"></div>
                  <section id="references" data-aos="fade-up" class="box5">
                    <h3 id="6" class="bold-italic box-reference hovering" @click="toggleGeneralPublic2" style="text-align: center; color:">
                      <div class="reference-header">
                        Higher Education
                      </div>
                      <span class="close-btn" @click.stop="toggleGeneralPublic2">×</span>
                    </h3>
                    <div class="references-content" v-show="showGeneralPublic2">
                      <h1><b>Intro to SynBioTech</b></h1>
                      <h2>Intention</h2>
                      <p>
                        After realising that synthetic biology is a novel concept for many, even within the life science department at our university, we partnered with the KCL Biotechnology and Synthetic Biology Society to organise an Intro to SynBio event. The event aimed to educate university students and the general public about the concept and applications of synthetic biology, as well as the prospects within the field. We invited various stakeholders from academia and industry to share their perspectives on synthetic biology.
                      </p>
                      <h2>Summary</h2>
                      <p>
                        Over 40 in-person attendees ranging from students (undergraduate to PhD), academia (post-doctoral researchers), and the general public joined us at the Science Gallery London on the evening of the 28th of September 2023, all eager to explore the field of synthetic biology. The event began with a keynote speech delivered by <b> Dr. Darren N. Nesbeth, an associate professor of synthetic biology from University College London (UCL).</b> Dr. Nesbeth discussed the definition, history, and applications of synthetic biology. This aimed to establish our audience's fundamental understanding of the concept of synthetic biology and how rapidly it has been developing.
                      </p>
                      <p>
                        Following the keynote, we hosted a panel discussion featuring a selection of panellists whom we believed to be relevant in shaping the UK synthetic biology field including:
                        <ul>
                          <li>
                            Sara Holland, an IP attorney partner at Potter Clarkson specialising in the patenting of synthetic biology technology (Entrepreneurship and Human Practices)
                          </li>
                          <li>
                            Marc Davies, Vice President of Research and Development at Leucid Bio and a Chimeric Antigen Receptor expert (Wet Lab)
                          </li>
                          <li>
                            Leonard Wossnig, Chief Technology Officer at Lab Genius and a researcher in machine learning for drug discovery (Dry Lab)
                          </li>
                          <li>
                          Hugo Villanueva, VC Investor at Octopus Ventures specialising in the bio sector (Entrepreneurship)
                          </li>
                        </ul>
                      </p>
                      <p>
                        During the discussion, the panellists engaged in a conversation about how synthetic biology led them to their current career paths and highlighted the diverse aspects of synthetic biology, particularly the intersection between academia and industry.
                      </p>
                      <h2>Feedback and Reflection</h2>
                      <p>
                        We concluded the event with a networking session, providing us with an opportunity to engage directly with the audience and obtain feedback regarding their reception of the event and synthetic biology. From our conversations, a significant proportion of attendees expressed interest in delving deeper into synthetic biology. This was also reflected in the feedback from our post-event survey and the surge in interest in the KCL Biotechnology and Synthetic Biology Society following the event.
                      </p>
                      <h1><b>Colorectal Cancer Awareness Infographic Posters</b></h1>
                      <h2>Intention</h2>
                      <p> Informed individuals aware of risk factors, prevalence, and early-onset symptoms are more likely to obtain an early diagnosis. Our team has focused on bridging the knowledge gap, especially among the younger population.
                      </p>
                      <h2>Summary</h2>
                      <p>
                        Our infographic poster offers a comprehensive insight into the survival rates, risk factors, warning signs, global prevalence, current detection methods, and a brief description of our innovative diagnostic approach. The chosen colour scheme aligns with the colour of colorectal cancer awareness and also incorporates a colour-blind friendly palette, ensuring maximum accessibility and inclusivity. Despite the rising cases of colorectal cancer among the younger population, this demographic remains poorly informed about the disease. By displaying this resource across two of our university’s campuses, we are able to raise awareness, stimulate well-informed conversations, and ultimately increase the chances of earlier diagnosis among the younger population.
                      </p>
                      <h1><b>The Biologix Project</b></h1>
                      <h2>Intention</h2>
                      <p>Expanding upon the Biologix Competition carried out by the KCL 2021 Team, Renervate Therapeutics, ColoEcho brings back the spirit of accessible synthetic biology knowledge and establishes a cross-UK collegiate collaboration. This year, under the Biologix Project, King’s invited five other UK iGEM teams (University of Warwick, University of Cambridge, University of Oxford, University of Edinburgh, and University of Exeter) to each create a three-part lecture series and a chapter of a textbook.
                      </p>
                      <p>The role distribution is as follows: 
                      </p>
                      <ul>
                        <li>
                          (1) KCL - The Synthetic Biology Landscape 
                        </li>
                        <li>
                          (2) Warwick - Basic Principles of Synthetic Biology 
                        </li>
                        <li>
                          (3) Cambridge - Application of Synthetic Biology
                        </li>
                        <li>
                          (4) Oxford - Biosecurity and Ethics in Synthetic Biology
                        </li>
                        <li>
                          (5) Edinburgh - Recent Advances and the Future
                        </li>
                        <li>
                          (6) Exeter - iGEM and the World
                        </li>
                      </ul>
                      <p>
                        The collaborative effort of six UK iGEM teams culminated in a freely accessible repository tailored in a “written by the UK for the UK” manner. In particular, teams strived to create connections with the target audience of UK secondary school students. The Biologix textbook includes intriguing pop-up information boxes, interactive quizzes with guided answers, UK-specific statistics and stories, a further readings page after every chapter, and more. This textbook avoids overwhelming biology facts that may be redundant with A-level Biology textbooks. Instead, we aim to expand the horizons of synthetic biology beyond science and explore topics like ethics, careers, and its multidisciplinary nature. With the target readers in mind, we provide students with greater autonomy and provoke their curiosity while still delivering in-depth scientific knowledge.
                      </p>
                      <h2>Summary</h2>
                      <p>
                        Our infographic poster offers a comprehensive insight into the survival rates, risk factors, warning signs, global prevalence, current detection methods, and a brief description of our innovative diagnostic approach. The chosen colour scheme aligns with the colour of colorectal cancer awareness and also incorporates a colour-blind friendly palette, ensuring maximum accessibility and inclusivity. Despite the rising cases of colorectal cancer among the younger population, this demographic remains poorly informed about the disease. By displaying this resource across two of our university’s campuses, we are able to raise awareness, stimulate well-informed conversations, and ultimately increase the chances of earlier diagnosis among the younger population.
                      </p>
                      <h1><b>Sir George Monoux Sixth Form College</b></h1>
                      <h2>Intention</h2>
                      <p>
                        To provide a diverse group of students with insights into synthetic biology and opportunities within the field.
                      </p>
                      <h2>Summary</h2>
                      <p>
                        The target audience at Sir George Monoux School was students taking A-levels and BTEC courses (aged 16-18). We structured our lecture series to include an introduction to iGEM and synthetic biology, as well as three presentations on the multi-disciplinary aspects of synthetic biology, its history, and careers in the field. In order to facilitate engagement, we made sure to implement multiple Q&A sessions, held guided case study discussions, and created small discussion groups to interact with the students on a more personal level.
                      </p>
                      <p>
                        Additionally, 40-65% of Monoux students do not have English as their first language compared to 17% nationally. Therefore, we had to take into consideration that many students would have different learning styles, such as visual, discussion-based, reading/writing, etc. In response to this, we incorporated videos, pictures, discussion sessions, and case studies for them to read. Overall, catering to various learning styles allowed for heightened engagement and participation.
                      </p>
                      <h2>Feedback and Reflection</h2>
                      <p>
                        When we curated the discussion sessions, we were mindful that not everyone is comfortable with asking questions or giving opinions in a public setting. In response, our team members personally spoke with smaller discussion groups. This greatly increased the students’ enthusiasm, and they were much more willing to offer their own insights, even opening up and talking about future aspirations and career goals. In short, we observed a sharp shift in the student’s attitude, highlighting how being mindful of individualist and collectivist cultures is crucial to enhancing engagement.
                      </p>
                      <h1><b>Bexley Grammar School</b></h1>
                      <h2>Intention</h2>
                      <p>
                        The Bexley Grammar School is a grammar school in Welling, England. The audience for this event was sixth-form students in their first or second year of the International Baccalaureate (IB) programme. Most of the attendees study biology and chemistry at a higher level. With this demographic, we expected knowledge in biology and steered the emphasis of the presentation to less scientifically-heavy topics.
                      </p>
                      <h2>Summary</h2>
                      <p>
                        ColoEcho delivered a three-part lecture on (1) the basic principles of synthetic biology, (2) the interdisciplinary nature of synthetic biology, and (3) careers in the synthetic biology sector (slides attached below). Through this lecture series we aimed to introduce the students to ideas like entrepreneurship, science consulting, and current pioneer companies in the field, as these insights are absent in the IB curriculum. To ensure engagement with the students, we scheduled four Q&A sessions after each short lecture, where lots of students had discussions with our speakers on topics like regenerative medicine and stem cell therapy. Moreover, three of the four team members were previously IB students, so we were able to connect with students on a more personal level and provide tailored advice.
                      </p>
                      <h1><b>Theory Of Knowledge (TOK)</b></h1>
                      <h2>Intention</h2>
                      <p>
                        As synthetic biology is predominantly discussed in university, there is limited discussion in secondary school and sixth-form education. Recognising this, our team aimed to provide an inclusive platform for students to engage in discussions about synthetic biology, regardless of their chosen areas of study— even those that are not specialising in biology. To achieve this, we explored the integration of the ethics of synthetic biology with the International Baccalaureate Diploma Programme’s (IBDP) Theory of Knowledge (TOK) course. By delivering a TOK lesson, this offers all IBDP students an opportunity to gain an understanding of the science of synthetic biology and engage in a conversation about bioethics. We carried out our TOK lesson to the year 13 (IB year 2) students in the Hockerill Anglo-European College.
                      </p>
                      <h2>Summary</h2>
                      <p>
                        In crafting our lesson, we adopted a comprehensive approach. This involved formulating a <b> detailed lesson plan </b> (shown below), including questions <b>inspired by IB TOK inquiry questions </b> and assembling a <b>curated selection of articles </b> (case studies handout document) that would serve as the foundation for our lesson. To help students gain an understanding of synthetic biology, we provided students with a brief introduction into synthetic biology and utilised articles that discuss the real-world applications of synthetic biology. Throughout the lesson, we guided students with our prepared questions. These questions were thoughtfully designed to<b>mirror common public concerns </b>, allowing students to discuss the ethical concerns that are normally raised in relation to synthetic biology. The <b>open-ended approach</b> of the lesson<b> allowed for a two-way dialogue </b>between the team members and students.
                        
                      </p>
                      <h2>Feedback and Reflection</h2>
                      <p>
                        To ensure the effectiveness of our lesson, we conducted a pre- and post-lesson survey to assess the students' comprehension of synthetic biology before and after our lesson. Additionally, we have made our presentation accessible for future teams. This resource serves as a valuable reference, allowing subsequent groups to build upon our work. Furthermore, IB teachers have the option to integrate our presentation into their curriculum, offering a useful tool for future projects and educational endeavours related to synthetic biology.
                      </p>
                      <h1><b>Online Summer University Camp, Nazarbayev University.</b></h1>
                      <h2>Intention</h2> 
                      <p>
                        Nazarbayev University (Kazakhstan)’s iGEM team reached out to us in collaboration with an <b>online summer camp </b> for high school students (aged 14-18). We thought <b> recorded lectures </b>would be an amazing method of scientific communication because their digital nature allows <b>easy public access </b>, repeated watches, and future reference. Our aim with this presentation was not only to inform, but to inspire action and critical thinking among our audience.
                      </p>
                      <h2>Summary</h2>
                      <p>
                        We curated an interactive presentation on colorectal cancer diagnostics, including its definition, risk factors, symptoms, current diagnostics, as well as introducing our product. We specifically hoped to enhance our audience’s understanding of colorectal cancer prevention by discussing the modifiable and non-modifiable risk factors and possible symptoms. Our presentation also explored the pros and cons of current colorectal cancer diagnostics options, such as colonoscopy and the FIT test. We then introduced our diagnostic tool as a comparison. We also incorporated interactive elements such as videos and pop-up quizzes with guided answers. This supplemented a simple recorded lecture with much more interactiveness and active critical thinking. In order to promote engagement, we also encouraged our audience to design an infographic that raises awareness about colorectal cancer.
                      </p>
                      <h2>Feedback and Reflection</h2>
                      <p>
                        By collaborating with the iGEM team at Nazarbayev University, we expanded our educational outreach to a more global audience. Moreover, by asking for input from the students, we aimed to show how we value the insights of individuals from diverse backgrounds.
                      </p>
                    </div>
                  </section>
                  <div style="margin-bottom: 50px;"></div>
                  <section id="references" data-aos="fade-up" class="box5">
                    <h3 id="6" class="bold-italic box-reference hovering" @click="toggleGeneralPublic3" style="text-align: center;">
                      <div class="reference-header">
                        Further Education
                      </div>
                      <span class="close-btn" @click.stop="toggleGeneralPublic3">×</span>
                    </h3>
                    <div class="references-content" v-show="showGeneralPublic3">
                      <!-- Further Education -->
                      <p>This is the content2...</p>
                      <p>More details about the content2...</p>
                      <div data-aos="fade-right">
                        <a type="button" class="btn btn-outline-dark" href="./education">Back</a>
                      </div>
                    </div>
                  </section>
                  <div style="margin-bottom: 50px;"></div>
                  <section id="references" data-aos="fade-up" class="box5">
                    <h3 id="6" class="bold-italic box-reference hovering" @click="toggleGeneralPublic4" style="text-align: center;">
                      <div class="reference-header">
                        Primary Education
                      </div>
                      <span class="close-btn" @click.stop="toggleGeneralPublic4">×</span>
                    </h3>
                    <div class="references-content" v-show="showGeneralPublic4">
                      <h1><b>Ultrasound Workshop</b></h1>
                      <h2>Intention</h2>
                      <p>Three team members joined Dr. Poulipoulos to help deliver interactive ultrasound workshops for primary students at Trinity St Mary’s CE Primary School. The students were in years 2 - 4 (aged 6 - 8). This workshop aims to provoke curiosity in kids and to get them interested in science and engineering.The event was designed to be highly accessible for the young audience.
                      </p>
                      <h2>Summary</h2>
                      <p> We started the workshop by explaining the concept of ultrasound imaging in a straightforward and figurative manner.
                      </p>
                      <p>
                        The first activity asked students to visualise bubbles ‘dancing’ to the sound wave caused by the music from the speaker. The second activity demonstrated waves through the motion of a slinky on a table when moved.
                      </p>
                      <p>
                        The highlight of the workshop was the third activity, by which students used the ultrasound butterfly probes themselves. We set up five mini stations, each with a different coloured bucket containing a uniquely shaped sponge, as shown below. The students would come up in small groups and use the ultrasound butterfly probes to scan and determine the shape by observing the imaging (shown in demonstration video). There is an accompanying worksheet that asks students to match each bucket (A-E) with the shapes (star, heart, etc). This provided young students with first-hand experience into the technology.
                      </p>
                      <h2>Feedback and Reflection</h2>
                      <p>
                        We had very positive feedback from the students (shown below). Upon reflection, we fully believe that the workshop was extremely successful amongst the age group and encouraged the students to get more involved in science.
                      </p>
                    </div>
                  </section>
                  <div style="margin-bottom: 50px;"></div>
              
              <!-- content for design box -->
              <div class="content-wrapper" id="integrated-human-practices-wrapper5">
                <div class="content-section" id="integrated-human-practices">
                  <h2 id="list-item-1" class="bold-italic adjusted-section" style="text-align: center;">Design</h2>
                  <p>
                      As a multicultural team, one of our main priority within our outreach and education was reaching a
                      diverse audience, ensuring efficient and effective communication with as many individuals as
                      possible.
                      This was particularly important for our educational outreach, given the the <b> multicultural
                      composition of schools in London</b> with pupils from all across the world. Therefore, we recognised the importance of
                      developing <b>cultural competency skills </b>in order to interact effectively with people from various
                      cultural backgrounds. Accordingly, to enhance our understanding of cultural competency, we read Erin Meyer’s
                      ‘The Cultural Map’ book which provided valuable insights on how to navigate and interact effectively
                      across diverse cultures.
                      <br>
                      Furthermore, before launching any educational programs, we consulted Professor Thompson and our
                      primary
                      investigator Dr. Anatoliy, for guidance on approaching different age groups and determining suitable
                      activities. After receiving general advice on how to structure our educational initiatives, we
                      reached out to local schools. We organised meetings with teachers to gain a deeper understanding of their
                      students' needs and tailored our educational approaches accordingly.
                    </p>
                </div>
                <div data-aos="fade-right">
                  <a type="button" class="btn btn-outline-dark" href="./education">Back</a>
                </div>
              </div>
              <!-- Content for Build -->
              <div class="content-wrapper" id="integrated-human-practices-wrapper4">
                <div class="content-section" id="integrated-human-practices">
                  <h2 id="list-item-2" class="bold-italic adjusted-section" style="text-align: center;">Build</h2>
                    <p>
                      Taking into consideration the advice we received, we began crafting the lecture slides for our
                      Biologix
                      lecture series and TOK classes. While developing these lectures, we ensured to incorporate the
                      underlying science in synthetic biology and opportunities in the sector. This is to provide the
                      public
                      with the necessary information to access the . Moreover, we structured these sessions to be
                      discussion-based, with the goal of maintaining student engagement and fostering interest in
                      synthetic
                      biology.
                      <br>

                      Simultaneously, we explored strategies for upscaling our educational outreach. To achieve this, we
                      reached out to all UK iGEM teams and 5 out of 9 teams agreed to participate in our Biologix lecture
                      series and collaborate on our synthetic biology guidebook.
                      <br>
                      Additionally, when it came to presenting and interacting with people we took in consideration the
                      principles learned from Erin’s Mayer book. This included emphasising the significance of using an
                      explicit speaking style to ensure clear interpretation for both low-context and high-context
                      cultures,
                      minimising the risk of misinterpretation.
                    </p>
                </div>
                <div data-aos="fade-right">
                  <a type="button" class="btn btn-outline-dark" href="./education">Back</a>
                </div>
              </div>
              
              <!-- Learn content -->
              <div class="content-wrapper" id="integrated-human-practices-wrapper3">
                <div class="content-section" id="integrated-human-practices">
                  <h2 id="list-item-4" class="bold-italic adjusted-section" style="text-align: center;">Learn</h2>
                    <p>
                      The feedback forms highlighted the positive reception of incorporating Q&A sessions into our
                      educational
                      programs by both the public and students:
                    <blockquote class="blockquote">
                      <p class="mb-0"> ‘It was very informative, and the question times between lectures were a good
                        idea.’
                      </p>
                    </blockquote>

                    In addition, our Biologix lecture series was conducted at two different schools, allowing us to learn
                    and adapt based on feedback. The initial series revealed that diagrams on our slides were too small,
                    leading us to enlarge them for subsequent sessions. Furthermore, despite our efforts to make the
                    lecture
                    interactive, some students desired even more engagement:

                    <blockquote class="blockquote">
                      <p class="mb-0"> "Very informative! Maybe make it a little bit more interactive but very enjoyable
                        and
                        helpful!"

                      </p>
                    </blockquote>

                    Addressing this issue, we incorporated additional questions into the second Biologix lecture series.
                    Fortunately, this adjustment resulted in heightened student engagement, with some expressing newfound
                    passion for synthetic biology in their feedback:
                    <br>
                    <blockquote class="blockquote">
                      <p class="mb-0"> "The lecture was very interesting and informative about a subject I had no
                        knowledge
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
                </div>
                <div data-aos="fade-right">
                  <a type="button" class="btn btn-outline-dark" href="./education">Back</a>
                </div>
              </div>
              <!-- Test -->
              <div class="content-wrapper" id="integrated-human-practices-wrapper2">
                <div class="content-section" id="integrated-human-practices">
                  <h2 id="list-item-3" class="bold-italic adjusted-section" style="text-align: center;">Test</h2>
                    <p>
                      To evaluate the impact of our educational initiatives on students, we took advice from our primary
                      investigator and Dr. Thompson. Following their guidance, we developed surveys enabling students to
                      provide feedback on our educational outreach programs. The surveys inquired about their pre-existing
                      knowledge of synthetic biology for both TOK and Biologix classes. After the classes, students were
                      asked
                      to rate their understanding of synthetic biology, allowing us to measure the impact of our workshops
                      had
                      on their education. Furthermore, to see how we could improve future Biologix lectures and TOK
                      classes,
                      we solicited additional feedback from students.

                      Additionally, we also asked teachers for feedback to evaluate what professionals thought about our
                      outreach programs.
                    </p>
                </div>
                <div data-aos="fade-right">
                  <a type="button" class="btn btn-outline-dark" href="./education">Back</a>
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
      showGeneralPublic: false,
      showGeneralPublic2: false,
      showGeneralPublic3: false,
      showGeneralPublic4: false,
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
    toggleGeneralPublic() {
      this.showGeneralPublic = !this.showGeneralPublic;
    },
    toggleGeneralPublic2() {
      this.showGeneralPublic2 = !this.showGeneralPublic2;
    },
    toggleGeneralPublic3() {
      this.showGeneralPublic3 = !this.showGeneralPublic3;
    },
    toggleGeneralPublic4() {
      this.showGeneralPublic4 = !this.showGeneralPublic4;
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
      const humanPracticesWrapper = this.$el.querySelector('#integrated-human-practices-wrapper5');
      if (humanPracticesWrapper) {
        humanPracticesWrapper.style.display = 'block';
      }
    },

    showEducationContent2() {
      console.log("Integrated Human Practices button clicked!");
      this.hideAllContents();
      const integratedHumanPracticesWrapper = this.$el.querySelector('#integrated-human-practices-wrapper4');
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


