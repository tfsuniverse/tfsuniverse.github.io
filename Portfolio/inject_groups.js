const fs = require('fs');

let html = fs.readFileSync('portfolio.html', 'utf8');

const replacementHtml = `
    <!-- Group 3: Influencer Industry -->
    <div id="influencer" class="accordion">
        <div class="accordion-item" id="group-c-main">
            <div class="accordion-header" style="font-size: 1.5rem;">
                Influencer Industry <span class="icon">+</span>
            </div>
            <div class="accordion-content">
                <div class="tags-row" style="margin-top: 1.5rem;">
                    <span class="capsule primary-tag tag-link" data-target="#influencer" style="cursor: pointer;" title="Click to jump to this industry"">Primary: Influencer Industry</span>
                    <span class="capsule secondary-tag tag-link" data-target="#automotive" style="cursor: pointer;" title="Click to jump to this industry"">Secondary: Automotive Industry</span>
                </div>
                
                <p style="font-style: italic; color: var(--accent-1); margin-bottom: 2rem;">
                    "From getting influenced to Influencing Everyone. How Mr. Oza became an Influencer."
                </p>

                <!-- Niches (Moved up) -->
                <h4 class="section-title">Niches</h4>
                <ul class="feature-list">
                    <li>Script Writer</li>
                    <li>Dub Artist</li>
                    <li>Chief Video Editor</li>
                    <li>Director</li>
                    <li>Automotive Journalist</li>
                    <li>Youtuber</li>
                    <li>Influencer</li>
                    <li>Podcaster</li>
                </ul>

                <!-- Journey -->
                <h4 class="section-title">The Journey</h4>
                <div class="accordion nested-accordion">
                    <div class="accordion-item">
                        <div class="accordion-header nested">The journey from Engineer to Automotive Journalist (2020) <span class="icon">+</span></div>
                        <div class="accordion-content" style="padding-top: 1rem;">
                            <p>In 2020, Mr. Oza completed his engineering degree. After which he along with Mr. Heer Oza founded <strong><a href="https://www.youtube.com/@theflyingshirt" target="_blank" style="color:var(--accent-1); text-decoration:none; font-weight:600;" class="external-link">TFS (The Flying Shirt a Youtube Channel)</a></strong> with a motive to prevent any type of paid piracy or promotions & create <strong>highly informational & qualitative automotive content</strong> and so his journey as an professional <strong>Automotive Journalist, Content Creator, & Youtuber</strong> started.</p>
                            <p>Soon after <strong>Mr. Krish Bhrambhatt joined the channel</strong> and right after the <strong>discussion of all 3 of them the demand of a well drafted and structured script arose.</strong> And so Mr. Oza was now under pressure and needed to <strong>create a script</strong> which meant he did not only have to be on the screen but also had to function as a <strong>Script Writer</strong>.</p>
                            <p>Mr. Dhairya N. Oza & Mr. Heer N. Oza took the responsibility to create & elaborate a <strong>highly engaging review structure for superbikes.</strong> While Mr. Heer Oza focused on mastering <strong>Cinematography, Graphic designing, and Video editing</strong>, Mr. Dhairya N. Oza concentrated on refining the creative vision by developing review concepts, enhancing scripts, and introducing innovative storytelling elements. As the production quality evolved, he naturally expanded his role to become the <strong>Director and Senior Video Editor</strong>, playing a key role in shaping the visual identity and content style of <strong>TFS</strong>.</p>
                            <p>As <strong>TFS</strong> continued to evolve, Mr. Oza recognized the <strong>importance of delivering a premium audio experience.</strong> He introduced <strong>professional voice-overs and dialogue dubbing</strong>, significantly enhancing the overall quality of the content. To further elevate the production value, <strong>Mr. Dhairya N. Oza & Mr. Krish Bhrambhatt established an in-house music production and audio mixing & mastering workflow</strong>. Leveraging his prior experience as an <strong>underground lyricist & composer</strong>, along with his creative vision, <strong>Mr. Oza</strong> took on the role of <strong>Music Director</strong>, overseeing the <strong>musical direction and audio identity of TFS.</strong></p>
                            <p>With literally zero experience & starting completely from scratch this 3 took almost 9 months to create their very <a href="https://youtu.be/AUOrS1Byuxw?si=vwfI9GlCjj7KA7ME" target="_blank" style="color:var(--accent-1); text-decoration:none; font-weight:600;" class="external-link">1st Motorcycle review which was on SE1.</a> The review was praised by many but initially didn’t touch the hikes / No. of Views But obviously it satisfied their souls.</p>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <div class="accordion-header nested">Content Creation & Building an Audience <span class="icon">+</span></div>
                        <div class="accordion-content" style="padding-top: 1rem;">
                            <p>The special combination of dual roles of Mr. Oza, that of <strong>someone who understands the engineering physics of an engine</strong> very well as well as <strong>someone who is charismatic on screen was instrumental in TFS gaining popularity.</strong> He turned out to be an <strong>Influencer</strong> among the <strong>Indian bikers</strong>, one who could be relied upon to analyze the performance of major international brands.</p>
                            <p>He & Mr. Heer N. Oza Created <strong>in-depth reviews</strong> of various Motorcycles & collaborated with Multiple international brands such as <strong>BMW Motorrad, Triumph, Kawasaki, Jawa, & KTM.</strong> In 2023 he also made a Documentary on India’s biggest Motorcycle Event <strong>“The India Bike Week” & Collaborated with versatile companies who were either making Motorcycle Riding Gears or High Performance Accessories.</strong></p>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <div class="accordion-header nested">Transitioning to a Podcaster (Interviewer) <span class="icon">+</span></div>
                        <div class="accordion-content" style="padding-top: 1rem;">
                            <p>With <strong>TFS becoming more successful</strong>, Mr. Oza understood that there was much more that the brand could offer besides the short form <strong>Motorcycle reviews</strong>. Thus, he diversified his skills by becoming a <strong>Podcaster, developing his own show named as TFT (The Flying Talks).</strong></p>
                            <p>Rather than focusing solely on motorcycles, he began <strong>conducting interviews</strong> with <strong>seasoned industry experts</strong>. This shift required a significant evolution in his communication approach. He moved away from <strong>writing concise YouTube scripts</strong> and instead focused on formulating thoughtful questions and guiding conversations that uncovered deeper insights, facts, and <strong>personal stories—aimed at creating engaging, informative, and in-depth discussions.</strong></p>
                        </div>
                    </div>
                </div>

                <!-- Skills -->
                <div class="accordion nested-accordion">
                    <div class="accordion-item" id="group-c-skills">
                        <div class="accordion-header nested">Skills <span class="icon">+</span></div>
                        <div class="accordion-content" style="padding-top: 1rem;">
                            <p style="margin-bottom: 1rem; color: var(--accent-1); font-style: italic;">Mastering a diverse toolkit of fourteen specialized skills.</p>
                            <ul class="feature-list">
                                <li><strong>Creative Thinking</strong> – Generates original ideas and innovative concepts that enhance content quality and audience engagement. Continuously explores new perspectives to create impactful and memorable digital experiences.</li>
                                <li><strong>Visualization</strong> – Transforms ideas into compelling visual concepts that effectively communicate messages and strengthen storytelling. Demonstrates the ability to plan scenes, aesthetics, and creative direction before execution.</li>
                                <li><strong>Content Creation</strong> – Produces engaging, high-quality content across multiple digital platforms tailored to the target audience. Combines creativity, strategy, and consistency to maximize reach and audience engagement.</li>
                                <li><strong>Script Writing</strong> – Develops structured and engaging scripts that effectively communicate ideas while maintaining audience interest. Ensures clarity, creativity, and alignment with the intended message and platform.</li>
                                <li><strong>Scripting</strong> – Organizes content flow, dialogue, and scene sequencing to create compelling and well-structured digital productions. Ensures smooth storytelling through logical progression and audience-focused communication.</li>
                                <li><strong>Podcasting</strong> – Plans, records, and presents informative and engaging audio content on relevant topics. Demonstrates effective communication, audience engagement, and consistency in content delivery.</li>
                                <li><strong>Story Telling</strong> – Crafts meaningful narratives that emotionally connect with audiences while effectively communicating ideas and experiences. Uses creativity and structure to deliver memorable and impactful stories.</li>
                                <li><strong>Video Direction</strong> – Plans and directs video production by managing creative vision, scene composition, and overall execution. Ensures visual consistency while coordinating performances, camera work, and storytelling.</li>
                                <li><strong>Dialogue Delivery</strong> – Delivers dialogues naturally with confidence, clarity, and emotional expression to enhance audience engagement. Adapts tone, pace, and expression according to the context and intended impact.</li>
                                <li><strong>Dubbing</strong> – Performs voice dubbing with accurate pronunciation, timing, and emotional synchronization. Maintains consistency in voice delivery to effectively match visual performances and character requirements.</li>
                                <li><strong>Music Composition</strong> – Creates original musical compositions by combining melody, harmony, rhythm, and emotion. Produces music that enhances storytelling and connects effectively with the intended audience.</li>
                                <li><strong>Music Direction</strong> – Oversees the creative and technical aspects of music production to achieve the desired artistic vision. Coordinates composition, arrangement, recording, and performance for high-quality musical outcomes.</li>
                                <li><strong>Budget Management</strong> – Plans, allocates, and monitors financial resources to ensure content production remains within budget. Optimizes spending while maintaining production quality and project objectives.</li>
                                <li><strong>Data Management</strong> – Organizes, maintains, and analyzes digital information efficiently to support informed decision-making and content performance evaluation. Ensures data accuracy, accessibility, and effective utilization.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Achievements -->
                <div class="accordion nested-accordion">
                    <div class="accordion-item" id="group-c-achievements">
                        <div class="accordion-header nested">Achievements <span class="icon">+</span></div>
                        <div class="accordion-content" style="padding-top: 1rem;">
                            <p style="margin-bottom: 1rem; color: var(--accent-1); font-style: italic;">A proud collection of ten major milestones.</p>
                            <ul class="feature-list">
                                <li>Co-founded TFS (The Flying Shirt).</li>
                                <li>Built TFS into a recognized automotive influencer brand.</li>
                                <li>Created TFS's in-house music production workflow.</li>
                                <li>Became Script Writer, Director, Senior Video Editor, Dub Artist and Automotive Journalist.</li>
                                <li>Produced one of TFS's first motorcycle review podcasts.</li>
                                <li>Created TFT (The Flying Talks) podcast series.</li>
                                <li>Conducted podcasts with renowned personalities from the automotive industry.</li>
                                <li>Collaborated with 21+ national & international brands.</li>
                                <li>Produced the documentary on India Bike Week.</li>
                                <li>Achieved 2.52 Lakh+ social media views.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Certificates -->
                <div class="accordion nested-accordion">
                    <div class="accordion-item">
                        <div class="accordion-header nested">Certificates & Awards <span class="icon">+</span></div>
                        <div class="accordion-content" style="padding-top: 1rem;">
                            <ul class="feature-list">
                                <li>Certificate of Appreciation/Participation awarded to TFS Universe at the UIM Internship Fair 2026.</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <!-- Group 4: Content Creation Industry -->
    <div id="content" class="accordion">
        <div class="accordion-item" id="group-d-main">
            <div class="accordion-header" style="font-size: 1.5rem;">
                Content Creation Industry <span class="icon">+</span>
            </div>
            <div class="accordion-content">
                <div class="tags-row" style="margin-top: 1.5rem;">
                    <span class="capsule primary-tag tag-link" data-target="#content" style="cursor: pointer;" title="Click to jump to this industry"">Primary: Content Creation</span>
                    <span class="capsule secondary-tag tag-link" data-target="#influencer" style="cursor: pointer;" title="Click to jump to this industry"">Secondary: Influencer Industry</span>
                </div>
                
                <p style="font-style: italic; color: var(--accent-1); margin-bottom: 2rem;">
                    "The Creation of TFS Universe - The Journey of a Creator, Mentor & Business Leader. The journey of becoming a Sales trainer, Service Provider, HR, Mentor and Business Leader and finding TFS Universe."
                </p>

                <!-- Niches (Moved up) -->
                <h4 class="section-title">Niches</h4>
                <ul class="feature-list">
                    <li>Service Provider</li>
                    <li>HR</li>
                    <li>Mentor</li>
                </ul>

                <!-- Journey -->
                <h4 class="section-title">The Journey</h4>
                <div class="accordion nested-accordion">
                    <div class="accordion-item">
                        <div class="accordion-header nested">The Initial Years (2014 – 2020) <span class="icon">+</span></div>
                        <div class="accordion-content" style="padding-top: 1rem;">
                            <p>Before founding the <strong><a href="https://tfsuniverse.github.io/HTML/Home1.html" target="_blank" style="color:var(--accent-1); text-decoration:none; font-weight:600;" class="external-link">TFS Universe</a></strong>, Mr. Oza worked independently across <strong>multiple roles—broker, sales executive, entrepreneur, business owner, service provider, and scientist—</strong>within the luxury automotive industry. Balancing demanding engineering studies with <strong>high-level sales and research and development</strong>, he developed a solid understanding of core business operations, including <strong>B2C negotiations, insurance, asset appraisal, and finalizing transactions.</strong> His time as an independent automotive broker and dealer provided <strong>hands-on expertise in managing capital—practical knowledge</strong> that goes beyond what any academic book could offer.</p>
                            <p>At the same time, his creative talents began to take shape as he evolved from being an audience member and listener into a <strong>Content Creator, Influencer, YouTuber, and Podcaster.</strong> He took full responsibility for <strong>all stages of production: pre-production planning, filming during production, and post-production tasks like editing, color grading, and audio work.</strong> What began as a single initiative has expanded into <strong>five distinct sub-brands</strong>, marking the transformation of years of experience—<strong>from the original TFS, The —into the broader TFS Universe.</strong></p>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <div class="accordion-header nested">The Journey into Business Consulting & Brand Leadership <span class="icon">+</span></div>
                        <div class="accordion-content" style="padding-top: 1rem;">
                            <p>After establishing himself in both the <strong>independent premium superbike market and the corporate automotive sales industry</strong>, Mr. Oza was approached by the <strong>CEO of a regional dealership representing Jawa, BSA, and Yezdi.</strong> Recognizing his expertise, the CEO invited him to collaborate on marketing initiatives, brand execution, and sales training programs for the organization.</p>
                            <p>Upon Accepting the offer he moved beyond typical showroom retail and became a premium <strong>service provider</strong> for brands like <strong>Jawa, BSA, & Yezdi for Marketing, Brand execution & Sales training.</strong></p>
                            <p>What began as the journey of a <strong>teenage broker</strong> who couldn't ride a motorcycle evolved <strong>into</strong> that of a <strong>strategic business leader, entrusted with developing marketing strategies, executing brand initiatives, and training sales teams</strong> for <strong>premium motorcycle</strong> brands across regional markets.</p>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <div class="accordion-header nested">The Mentorship and HR Operations (2025) <span class="icon">+</span></div>
                        <div class="accordion-content" style="padding-top: 1rem;">
                            <p>After successfully <strong>delivering sales training and marketing services</strong>, Mr. Oza set his sights on a larger vision—building five distinct brands under a <strong>unified ecosystem</strong> known as the <strong>TFS Universe.</strong> To lay a strong foundation for this ambitious venture, he initiated a structured talent acquisition program in February 2025, <strong>recruiting interns from colleges, institutions, and universities across the region while personally conducting numerous interviews.</strong> This marked his transition into <strong>Human Resources and organizational leadership.</strong> By October 2025, he had <strong>established collaborations with more than 25 universities and received a substantial number of internship applications.</strong></p>
                            <p>As the organization expanded, the scale of recruitment grew significantly, and by <strong>May 2026</strong>, Mr. Oza had received hundreds of applications and personally <strong>interviewed over 400+ candidates.</strong> This rigorous selection process enabled him to build a <strong>highly capable team</strong> of creative and technical professionals, forming the foundation for the <strong>continued expansion of the TFS Universe.</strong></p>
                            <p>Today, Mr. Oza stands as a <strong>mentor, business leader, and ecosystem builder.</strong> Through TFS Universe, he <strong>provides corporate internships and mentorship opportunities to aspiring professionals</strong>, enabling them to learn the systems, processes, and work culture he has spent over a decade building. His objective is not only to train individuals, but to <strong>develop industry-ready professionals</strong> equipped with the technical expertise, creative mindset, and professional discipline required to excel in the modern business world.</p>
                            <p>By building this ecosystem, Mr. Oza aims to <strong>cultivate a long-term team aligned</strong> with his vision, working style, and values. His extensive experience in <strong>Human Resources</strong> and <strong>talent acquisition</strong> has provided him with a <strong>strong understanding of human psychology and behavioral dynamics</strong>, enabling him to assess talent effectively, anticipate professional challenges, and make strategic decisions that contribute to <strong>sustainable organizational growth.</strong></p>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <div class="accordion-header nested">Combining Content, Art & Logistics under TFS Universe <span class="icon">+</span></div>
                        <div class="accordion-content" style="padding-top: 1rem;">
                            <p>To ensure everything works better, Mr. Oza created TFS Universe, which will be the holding numerous Sub-brands:</p>
                            <ul class="feature-list">
                                <li><strong><a href="https://www.youtube.com/@theflyingshirt" target="_blank" style="color:var(--accent-1); text-decoration:none; font-weight:600;" class="external-link">TFS (The Flying Shirt)</a></strong> - The original flagship brand that continues to hold true to its promise of delivering reviews, podcasts, & event coverage for top-of-the-range motorcycles.</li>
                                <li><strong><a href="https://tfsuniverse.github.io/HTML/TFS-Film-Works.html" target="_blank" style="color:var(--accent-1); text-decoration:none; font-weight:600;" class="external-link">TFS Film Works</a></strong> - Managing & Handling the Pre-Production (planning), Production (filming), and Post-Production (editing, color correction, & sound), Web Development & Software Development.</li>
                                <li><strong><a href="https://tfsuniverse.github.io/HTML/TFS-media-works.html" target="_blank" style="color:var(--accent-1); text-decoration:none; font-weight:600;" class="external-link">TFS Media Works</a></strong> - Performance-driven digital marketing agency that offers performance marketing services and branding strategies for clients.</li>
                                <li><strong><a href="https://buyitonline.org/" target="_blank" style="color:var(--accent-1); text-decoration:none; font-weight:600;" class="external-link">BuyItOnline</a></strong> - A dropshipping & E-Commerce business that has 780+ Products under categories like B2C, B2B & Major Platforms like Flipkart, Meesho & Amazon.</li>
                                <li><strong><a href="https://tfsuniverse.github.io/HTML/Soochh.html" target="_blank" style="color:var(--accent-1); text-decoration:none; font-weight:600;" class="external-link">Soochh</a></strong> - An artistic name of Mr. Oza Under this name, he conceptualizes, writes, composes, directs, and performs his original songs, bringing together creativity, emotion, and artistic excellence.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Skills -->
                <div class="accordion nested-accordion">
                    <div class="accordion-item" id="group-d-skills">
                        <div class="accordion-header nested">Skills <span class="icon">+</span></div>
                        <div class="accordion-content" style="padding-top: 1rem;">
                            <p style="margin-bottom: 1rem; color: var(--accent-1); font-style: italic;">Mastering a diverse toolkit of eleven specialized skills.</p>
                            <ul class="feature-list">
                                <li><strong>Customer Support</strong> – Provides prompt and professional assistance by addressing customer inquiries, resolving concerns, and ensuring a positive user experience. Maintains strong relationships through responsive and solution-oriented communication.</li>
                                <li><strong>Lead Generation</strong> – Identifies and attracts potential customers through engaging content, digital campaigns, and strategic outreach. Supports business growth by converting audience interest into qualified opportunities.</li>
                                <li><strong>CRM Management</strong> – Manages customer interactions, inquiries, and engagement using Customer Relationship Management systems. Strengthens customer relationships by maintaining accurate records and personalized communication.</li>
                                <li><strong>Content Marketing</strong> – Develops and distributes valuable content to attract, engage, and retain the target audience. Aligns content strategies with business objectives to increase brand awareness and customer conversion.</li>
                                <li><strong>Inventory Management</strong> – Monitors and manages product inventory to ensure availability and efficient order fulfillment. Maintains accurate stock records while minimizing shortages and operational inefficiencies.</li>
                                <li><strong>Product Sourcing</strong> – Identifies and evaluates reliable suppliers to procure quality products that meet market demand and business requirements. Focuses on cost-effectiveness, quality assurance, and supplier reliability.</li>
                                <li><strong>Marketplace Management</strong> – Manages product listings, pricing, promotions, and performance across online marketplaces. Ensures smooth marketplace operations while maximizing visibility, sales, and customer satisfaction.</li>
                                <li><strong>Landing Page Creation</strong> – Designs and develops optimized landing pages that effectively communicate value propositions and encourage user conversions. Focuses on user experience, clear messaging, and conversion optimization.</li>
                                <li><strong>Payment Gateway Integration</strong> – Demonstrates knowledge of integrating secure payment gateway solutions to facilitate seamless online transactions. Ensures safe, reliable, and user-friendly payment experiences for customers.</li>
                                <li><strong>Shipping & Logistics</strong> – Coordinates shipping processes, order fulfillment, and logistics operations to ensure timely and efficient product delivery. Optimizes supply chain activities while maintaining customer satisfaction.</li>
                                <li><strong>Return & Refund Management</strong> – Handles return and refund requests professionally by ensuring compliance with business policies and customer expectations. Focuses on timely resolution while maintaining customer trust and satisfaction.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Achievements -->
                <div class="accordion nested-accordion">
                    <div class="accordion-item" id="group-d-achievements">
                        <div class="accordion-header nested">Achievements <span class="icon">+</span></div>
                        <div class="accordion-content" style="padding-top: 1rem;">
                            <p style="margin-bottom: 1rem; color: var(--accent-1); font-style: italic;">A proud collection of nine major milestones.</p>
                            <ul class="feature-list">
                                <li>Founded TFS Universe.</li>
                                <li>Established multiple brands under TFS Universe.</li>
                                <li>Expanded into filmmaking, digital marketing, software development and creative production.</li>
                                <li>Became HR Interviewer, Mentor and Business Leader.</li>
                                <li>Personally interviewed 400+ candidates.</li>
                                <li>Conducted 90+ interviews in a single day during the UIM Internship Fair.</li>
                                <li>Collaborated with 25+ universities.</li>
                                <li>Mentored students, interns, freelancers and professionals.</li>
                                <li>Received appreciation from Karnavati University for talent acquisition and mentorship.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Certificates -->
                <div class="accordion nested-accordion">
                    <div class="accordion-item">
                        <div class="accordion-header nested">Certificates & Awards <span class="icon">+</span></div>
                        <div class="accordion-content" style="padding-top: 1rem;">
                            <ul class="feature-list">
                                <li>Certificate of Appreciation/Participation awarded to TFS Universe at the UIM Internship Fair 2026.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Group 5: E-commerce & Dropshipping Industry -->
    <div id="ecommerce" class="accordion">
        <div class="accordion-item" id="group-e-main">
            <div class="accordion-header" style="font-size: 1.5rem;">
                E-commerce & Dropshipping Industry <span class="icon">+</span>
            </div>
            <div class="accordion-content">
                <div class="tags-row" style="margin-top: 1.5rem;">
                    <span class="capsule primary-tag tag-link" data-target="#ecommerce" style="cursor: pointer;" title="Click to jump to this industry"">Primary: E-commerce & Dropshipping Industry</span>
                    <span class="capsule secondary-tag tag-link" data-target="#sales" style="cursor: pointer;" title="Click to jump to this industry"">Secondary: Sales & Marketing Industry</span>
                </div>
                
                <p style="font-style: italic; color: var(--accent-1); margin-bottom: 2rem;">
                    "The Foundation of BuyItOnline. Mr. Oza started the E-commerce business called BuyItOnline."
                </p>

                <!-- Niches (Moved up) -->
                <h4 class="section-title">Niches</h4>
                <ul class="feature-list">
                    <li>Dropshipper</li>
                    <li>Ecommerce merchant (Online Retailer / Seller)</li>
                    <li>Businessman</li>
                </ul>

                <!-- Journey -->
                <h4 class="section-title">The Journey</h4>
                <div class="accordion nested-accordion">
                    <div class="accordion-item">
                        <div class="accordion-header nested">E-Commerce & Dropshipping Expertise - BuyItOnline <span class="icon">+</span></div>
                        <div class="accordion-content" style="padding-top: 1rem;">
                            <p>As digital commerce continued to reshape the global retail landscape, Mr. Oza decided to <strong>diversify his entrepreneurial portfolio</strong> beyond the automotive industry. He ventured into the world of <strong>E-Commerce & Dropshipping</strong> by launching and scaling his own digital venture, <strong><a href="https://buyitonline.org/" target="_blank" style="color:var(--accent-1); text-decoration:none; font-weight:600;" class="external-link">BuyItOnline</a>.</strong></p>
                            <p>Managing a rapidly growing product catalog of over <strong>780+ unique products</strong>, Mr. Oza oversaw the complete operational workflow required to build and scale a successful <strong>E-Commerce and Dropshipping business</strong>. Throughout this journey, he gained hands-on expertise in:</p>
                            <ul class="feature-list">
                                <li>Developing and managing a complete online shopping platform alongside his team.</li>
                                <li>Managing high-volume digital storefront operations.</li>
                                <li>Executing performance marketing campaigns to improve conversion rates.</li>
                                <li>Handling dropshipping logistics through both domestic and international suppliers.</li>
                            </ul>
                            <p>To further expand the business, <strong>Mr. Oza established BuyItOnline</strong> across India's leading e-commerce marketplaces, including <strong>Amazon, Flipkart, and Meesho</strong>, enabling the brand to reach a wider customer base while managing product listings, marketplace operations, order fulfillment, and <strong>online retail sales across multiple digital platforms.</strong></p>
                            <p>This venture marked his successful transition from <strong>offline sales to digital commerce</strong>, establishing his expertise in <strong>E-Commerce, Dropshipping, Marketplace Management, and Online Retail Operations.</strong></p>
                        </div>
                    </div>
                </div>

                <!-- Skills -->
                <div class="accordion nested-accordion">
                    <div class="accordion-item" id="group-e-skills">
                        <div class="accordion-header nested">Skills <span class="icon">+</span></div>
                        <div class="accordion-content" style="padding-top: 1rem;">
                            <p style="margin-bottom: 1rem; color: var(--accent-1); font-style: italic;">Mastering a diverse toolkit of five specialized skills.</p>
                            <ul class="feature-list">
                                <li><strong>Market Research</strong> – Conducts comprehensive research to identify market trends, customer preferences, competitor strategies, and emerging business opportunities. Uses data-driven insights to support informed business decisions and sustainable growth.</li>
                                <li><strong>Vendor Management</strong> – Builds and maintains strong relationships with suppliers by evaluating performance, negotiating terms, and ensuring consistent product quality. Coordinates effectively to achieve reliable procurement and operational efficiency.</li>
                                <li><strong>Risk Management</strong> – Identifies potential business risks, evaluates their impact, and develops proactive strategies to minimize disruptions. Ensures operational continuity through effective planning and informed decision-making.</li>
                                <li><strong>Conversion Rate Optimization</strong> – Analyzes customer behavior and website performance to improve user experience and increase conversion rates. Implements data-driven strategies that maximize sales and business profitability.</li>
                                <li><strong>Customer Behaviour and Psychology</strong> – Understands customer motivations, purchasing decisions, and behavioral patterns to enhance marketing effectiveness and customer satisfaction. Applies psychological insights to improve product positioning and overall user experience.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Achievements -->
                <div class="accordion nested-accordion">
                    <div class="accordion-item" id="group-e-achievements">
                        <div class="accordion-header nested">Achievements <span class="icon">+</span></div>
                        <div class="accordion-content" style="padding-top: 1rem;">
                            <p style="margin-bottom: 1rem; color: var(--accent-1); font-style: italic;">A proud collection of eight major milestones.</p>
                            <ul class="feature-list">
                                <li>Founded BuyItOnline.</li>
                                <li>Successfully transitioned from offline sales to digital commerce.</li>
                                <li>Built an e-commerce business managing 780+ products.</li>
                                <li>Established BuyItOnline across Amazon, Flipkart and Meesho.</li>
                                <li>Developed domestic and international supplier networks.</li>
                                <li>Expanded into Dropshipping, Marketplace Management and Online Retail.</li>
                                <li>Built expertise in Performance Marketing and Conversion Rate Optimization (CRO).</li>
                                <li>Successfully operated as an E-commerce Merchant, Supplier and Service Provider.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Certificates -->
                <div class="accordion nested-accordion">
                    <div class="accordion-item">
                        <div class="accordion-header nested">Certificates & Awards <span class="icon">+</span></div>
                        <div class="accordion-content" style="padding-top: 1rem;">
                            <ul class="feature-list">
                                <li>Participated in the Internal Smart India Hackathon 2020 at Indus University.</li>
                                <li>Completed the Intellectual Property Rights (IPR) online course by Gujarat Student Startup & Innovation Hub (i-Hub).</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Group 6: Music Industry -->
    <div id="music" class="accordion">
        <div class="accordion-item" id="group-f-main">
            <div class="accordion-header" style="font-size: 1.5rem;">
                Music Industry <span class="icon">+</span>
            </div>
            <div class="accordion-content">
                <div class="tags-row" style="margin-top: 1.5rem;">
                    <span class="capsule primary-tag tag-link" data-target="#music" style="cursor: pointer;" title="Click to jump to this industry"">Primary: Music Industry</span>
                    <span class="capsule secondary-tag tag-link" data-target="#content" style="cursor: pointer;" title="Click to jump to this industry"">Secondary: Content Creation & Influencer Industry</span>
                </div>
                
                <p style="font-style: italic; color: var(--accent-1); margin-bottom: 2rem;">
                    "From an Underground Artist to Mainstream - Soochh reached to its MANZIL just on his debut. A decade-long artistic journey that led Mr. Oza from underground music to the mainstream through the launch of his debut album, MANZIL."
                </p>

                <!-- Niches (Moved up) -->
                <h4 class="section-title">Niches</h4>
                <ul class="feature-list">
                    <li>Poet</li>
                    <li>Lyricist</li>
                    <li>Composer</li>
                    <li>Singer (Vocalist)</li>
                    <li>Music Director</li>
                    <li>Independent Artist</li>
                    <li>Actor</li>
                </ul>

                <!-- Journey -->
                <h4 class="section-title">The Journey</h4>
                <div class="accordion nested-accordion">
                    <div class="accordion-item">
                        <div class="accordion-header nested">The Underground Years & Literary Roots (2014 - 2024) <span class="icon">+</span></div>
                        <div class="accordion-content" style="padding-top: 1rem;">
                            <p>Mr. Oza’s creative journey began long before his <strong>music reached commercial airwaves.</strong> Starting in 2014, during his early high school years, he quietly laid the groundwork as a <strong>poet</strong> and an <strong>underground artist</strong>. For more than <strong>10 years</strong>, this space was deeply personal and introspective.</p>
                            <p>During this period, Mr. Oza refined his <strong>craft away from the mainstream spotlight, dedicating himself to mastering the fundamentals of songwriting,</strong> including meter, rhythm, melody, composition, and storytelling. His journey extended far beyond writing lyrics; he evolved into a true <strong>Singer-Songwriter</strong> by developing his abilities as a <strong>Lyricist, Composer & Singer</strong>. Beginning with <strong>analyzing existing songs</strong>, identifying creative shortcomings, and reinterpreting them through his own artistic perspective, he gradually <strong>progressed to composing original melodies</strong> and complete musical compositions. This decade-long creative journey enabled him to transform complex human emotions, experiences, and poetry into structured musical works. The years spent as an <strong>Underground Artist</strong> laid the artistic and technical foundation that ultimately prepared him to also take on the role of <strong>Music Director</strong> for his own projects.</p>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <div class="accordion-header nested">Global Distribution & Mainstream Success <span class="icon">+</span></div>
                        <div class="accordion-content" style="padding-top: 1rem;">
                            <p>Once the music was recorded, Mr. Oza applied his <strong>entrepreneurial spirit</strong> to his art. He launched <strong>Soochh</strong> as a dedicated <strong>Artistic platform within the structure of the TFS Universe.</strong> He aggressively scaled his distribution, moving his music <strong>from local audio files to a global platform.</strong></p>
                            <ul class="feature-list">
                                <li><strong>Digital Streaming Giants:</strong> He became an <strong>Official artist across major digital platforms such as</strong> <a href="https://open.spotify.com/artist/4H8LsuXmagHw982crg5CKj?si=6SSLOYAHQByH_2F3SpJjAw" target="_blank" style="color:var(--accent-1); text-decoration:none; font-weight:600;" class="external-link">Spotify</a>, <a href="https://youtube.com/playlist?list=OLAK5uy_l2Ppcv5CDqeBjZ6HZ6PxwTVrOLHGxAmPE" target="_blank" style="color:var(--accent-1); text-decoration:none; font-weight:600;" class="external-link">Youtube</a>, <a href="https://music.youtube.com/@dearsoochh?si=bEf-YxOsMkPTLoyk" target="_blank" style="color:var(--accent-1); text-decoration:none; font-weight:600;" class="external-link">YouTube Music</a> & <a href="https://music.apple.com/us/artist/soochh/1837695675" target="_blank" style="color:var(--accent-1); text-decoration:none; font-weight:600;" class="external-link">Apple Music.</a> Additionally his songs are streaming across <strong>150+ Platforms.</strong></li>
                                <li><strong>Commercial Outlets:</strong> Beyond digital streams, his tracks secured licensing deals for over <strong>1,250+ physical venues & outlets</strong>, including cafes, restaurants, shopping malls, railways & Much More.</li>
                                <li><strong>Media Partnerships:</strong> He formed an important media partnership with <strong>Okaa FM</strong>, ensuring regular radio airplays.</li>
                                <li><strong>Introduced an Exclusive Release of Physical Music CD collection</strong> featuring the <strong>MANZIL. The Music CD is now live for Sale under the category of TEA (The Exclusive Art) sold on <a href="https://buyitonline.org/" target="_blank" style="color:var(--accent-1); text-decoration:none; font-weight:600;" class="external-link">BuyItOnline</a>.</strong></li>
                                <li><strong>Introduced an Exclusive Release of Physical Music CD collection</strong> featuring the <strong>Barsaat – The Incomplete Version. The Music CD is now live for Sale under the category of</strong> <a href="https://buyitonline.org/collections/tea-the-exclusive-art" target="_blank" style="color:var(--accent-1); text-decoration:none; font-weight:600;" class="external-link">TEA (The Exclusive Art)</a> <strong>sold on BuyItOnline. Barsaat – The Incomplete Version.</strong></li>
                            </ul>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <div class="accordion-header nested">The Spark: From a Single Song to "MANZIL" (2024) <span class="icon">+</span></div>
                        <div class="accordion-content" style="padding-top: 1rem;">
                            <p>In 2024, after a decade of underground exploration, Mr. Oza’s was finally ready to go <strong>mainstream</strong>. It all started with the creation of a single soulful track titled <strong>"Har Shaam Ki Tarha"</strong>. The process of developing this song sparked a significant wave of inspiration, pushing him to turn the single concept into a full, cohesive story.</p>
                            <p>This inspiration led to his breakout multi-track album, <strong>"MANZIL"</strong>. Mr. Oza took on many roles as a <strong>Singer-Songwriter (Lyricist, Composer & A Singer) Music director, Producer & Chief Video Editor</strong> in the Tracks & Videos by himself. He also ventured into <strong>Visual Storytelling, Scripting, Directing & Acting</strong> to bring the emotional and narrative themes of his <strong>music videos to life.</strong> He is the <strong>true definition of how an Independent Artist</strong> should be.</p>
                            <p>MANZIL (The EP on which he has ever dreamed of & have been working for more than a Decade.) officially introduced <strong>three key musical pieces, forms a beautiful sentence:</strong></p>
                            <ul class="feature-list" style="list-style-type: decimal; padding-left: 2.5rem;">
                                <li><strong>Barson Seh</strong></li>
                                <li><strong>Har Shaam Ki Tarha</strong></li>
                                <li><strong>Tera Intezaar Rahaaa…</strong></li>
                            </ul>
                            <p><strong>“Barson Seh Har Shaam Ki Tarha Tera Intezar Rahaaa…”</strong></p>
                            <p>that tells the complete story of <strong>MANZIL</strong>, making it much more deeper when compared to what any other Conventional music resonates with.</p>
                            <p>His formal entry into the commercial scene was marked by <strong>"Barsaat - The Incomplete Version"</strong>, a track that defined his shift from an Underground Poet to a Mainstream Artist.</p>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <div class="accordion-header nested">Present Day: Television Broadcast & Integration (2026) <span class="icon">+</span></div>
                        <div class="accordion-content" style="padding-top: 1rem;">
                            <p>Today, <strong>Soochh has expanded to a massive multimedia scale. Mr. Oza’s album, MANZIL</strong>, got Featured as an <strong>World TV Premier</strong> & has now made its way to <strong>national broadcast media by streaming on Television networks.</strong> In fact it is being streamed multiple times and notably being featured on the <strong>Songdew TV Network.</strong></p>
                            <p>What started as a <strong>quiet poetry habit in 2014 has grown into a fully commercial, self-sustaining artistic institution</strong>. Through <strong>Soochh</strong>, Mr. Oza manages his <strong>entire creative line up as an lyricist, vocalist, actor, and music director</strong>, blending <strong>genuine artistic expression with Global distribution.</strong></p>
                        </div>
                    </div>
                </div>

                <!-- Skills -->
                <div class="accordion nested-accordion">
                    <div class="accordion-item" id="group-f-skills">
                        <div class="accordion-header nested">Skills <span class="icon">+</span></div>
                        <div class="accordion-content" style="padding-top: 1rem;">
                            <p style="margin-bottom: 1rem; color: var(--accent-1); font-style: italic;">Mastering a diverse toolkit of seven specialized skills.</p>
                            <ul class="feature-list">
                                <li><strong>Poetry</strong> – Creates expressive and meaningful poetic compositions that effectively convey emotions, ideas, and experiences. Demonstrates creativity through thoughtful word choice, rhythm, and literary expression.</li>
                                <li><strong>Poem Writing</strong> – Writes original poems with strong thematic depth, emotional impact, and creative storytelling. Utilizes literary techniques to engage readers while maintaining artistic authenticity.</li>
                                <li><strong>Lyrics Writing</strong> – Crafts meaningful song lyrics that combine emotion, storytelling, and rhythm to create memorable musical experiences. Ensures lyrical flow aligns naturally with melody, theme, and audience connection.</li>
                                <li><strong>Singing</strong> – Performs songs with controlled vocal techniques, accurate pitch, and expressive delivery to effectively communicate emotion. Demonstrates confidence, vocal consistency, and musical interpretation across various styles.</li>
                                <li><strong>Acting</strong> – Portrays characters and emotions authentically through effective expression, dialogue delivery, and body language. Adapts performances to suit different creative concepts and storytelling requirements.</li>
                                <li><strong>Directing</strong> – Leads the creative vision of music and visual productions by coordinating performances, production elements, and artistic execution. Ensures consistency, quality, and alignment with the intended concept.</li>
                                <li><strong>Conceptualising</strong> – Develops original creative concepts by transforming ideas into structured artistic visions for music, videos, and performances. Combines imagination with strategic planning to create impactful and engaging experiences.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Achievements -->
                <div class="accordion nested-accordion">
                    <div class="accordion-item" id="group-f-achievements">
                        <div class="accordion-header nested">Achievements <span class="icon">+</span></div>
                        <div class="accordion-content" style="padding-top: 1rem;">
                            <p style="margin-bottom: 1rem; color: var(--accent-1); font-style: italic;">A proud collection of ten major milestones.</p>
                            <ul class="feature-list">
                                <li>Launched Soochh as the dedicated music identity under TFS Universe.</li>
                                <li>Made official debut with Barsaat – The Incomplete Version.</li>
                                <li>Released the debut album MANZIL.</li>
                                <li>Became an Official Artist on Spotify, Apple Music, YouTube Music and other major streaming platforms.</li>
                                <li>Distributed music across 150+ digital streaming platforms.</li>
                                <li>Licensed music across 1,250+ commercial venues.</li>
                                <li>Featured on National Television (Songdew Network).</li>
                                <li>Collaborated with Okaa FM Radio.</li>
                                <li>Registered Government Copyrights for Barsaat and MANZIL.</li>
                                <li>Released Exclusive Collector's Edition Music CDs for MANZIL and Barsaat – The Incomplete Version through TEA (The Exclusive Art).</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Certificates -->
                <div class="accordion nested-accordion">
                    <div class="accordion-item">
                        <div class="accordion-header nested">Certificates & Awards <span class="icon">+</span></div>
                        <div class="accordion-content" style="padding-top: 1rem;">
                            <ul class="feature-list">
                                <li>Government of India Copyright Certificate for the Hindi rock song "Barsaat".</li>
                                <li>Government of India Copyright Certificate for the music application "MANZIL" containing three original Hindi songs.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

const emptySectionsRegex = /<!-- Empty sections for pending groups to prevent anchor links from breaking -->[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;

if (html.match(emptySectionsRegex)) {
    html = html.replace(emptySectionsRegex, replacementHtml);
} else {
    // Failsafe: Just inject right before the closing </div> of container if the regex fails
    const lastDivIdx = html.lastIndexOf('</div> <!-- /container -->');
    if (lastDivIdx !== -1) {
        html = html.slice(0, lastDivIdx) + replacementHtml + html.slice(lastDivIdx);
    }
}

fs.writeFileSync('portfolio.html', html);
console.log('Successfully injected groups C, D, E, F');
