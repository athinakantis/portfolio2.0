import faceitHomePng from "@/assets/faceit-home.png"
import faceitHome from "@/assets/faceit-home.webp"
import faceitHomePhonePng from "@/assets/faceit-home-phone.png"
import faceitHomePhone from "@/assets/faceit-home-phone.webp"

import faceitPreview from "@/assets/faceit-logo-small.svg"

const caseStudies = [
  {
    id: "FACEIT",
    title: "FACEIT Navigation & Usability Study",
    content: (
      <>
        <section>
          <p className="mt-2">Faceit is a matchmaking platform for some of the most popular video games - including League of Legends, CS2 and Dota2. Users can compete, earn rewards, follow their favorite professional players, earn their spot on the leaderboard and more. Faceit was established in 2012 and has more than <a href="https://corporate.faceit.com/#:~:text=FACEIT%20is%20the%20leading%20independent,more%20than%20twenty%20million%20users" target="_blank">20 million users.</a>
          </p>

          <picture>
            <source srcSet={faceitHomePhone} media="(width < 600px)" className="mx-auto" type="image/webp" />
            <source srcSet={faceitHomePhonePng} media="(width < 600px)" className="mx-auto" type="image/png" />
            <source srcSet={faceitHome} media="(width >= 600px)" className="mx-auto" type="image/webp" />
            <img src={faceitHomePng} className="mx-auto mb-4" />
          </picture>

          <h3>Disclaimer</h3>
          <p>Faceit is not a product of mine. This study is an independent, conceptual redesign for learning purposes only. I have no affiliation with the company. The outcomes of this study are purely recommendations.</p>
        </section>

        <section>
          <h2>About the study</h2>
          <p>This study focuses on the navigation of the site; such as accessing game features, legal content and support. It was completed using a survey answered by fourteen participants.</p>
        </section>

        <section>
          <h2>The Survey</h2>
          <p>The survey had a total of 5 different tasks for the users to complete. After each task, they were asked to rate how easy the task was to complete from a scale of 1-5 (1 being very difficult, and 5 being very easy). In addition to this, they were also given the opportunity to express why they may have found the task difficult.</p>

          <p>The tasks looked like the following:</p>

          <ol className="dark:*:text-muted-foreground *:ml-8">
            <li>1. Switching games.</li>
            <li>2. Locate cookie settings or privacy policy</li>
            <li>3. Locate the support page</li>
            <li>4. Locate the support ticket form</li>
            <li>5. Locate where to enter a tournament</li>
          </ol>

          <p>After the tasks the participants were asked about their overall confidence in Faceits navigation as well as if they had to use a search engine (other than Faceit’s own) or AI to complete any of the tasks. Finally, they were given the opportunity to express any other thoughts they had about the tasks or their experience.</p>
        </section>

        <section>
          <h2>Findings</h2>

          <ol className="*:mb-8 [&_h3,h4]:text-xl [&_h4]:mb-2">

            {/* Finding 1 */}
            <li className="dark:[&_li]:text-muted-foreground [&_div]:mb-6 [&_p,ol,ul]:mb-2 [&_ul,ol]:ml-4">
              <h3>
                Finding #1: Support and ticket submission are difficult to locate
              </h3>

              <div>
                <p>Many participants found it difficult and frustrating to locate the support page and ticket submission form.</p>
                <p>Some user comments included:</p>

                <ul>
                  <li>“Not easy to navigate to in the support page. Should be easier to make a ticket”</li>
                  <li>“Support is pretty easy to find but it is IMPOSSIBLE to find where to make a ticket”
                  </li>
                  <li>“It is a bit too difficult to reach where you can actually make a ticket.”
                  </li>
                  <li>“Took some time [to find the support ticket form] because most links send you to a general QaA”</li>
                </ul>

                <p>Users often navigated through multiple sections before finding the correct location, and some were unsure where to look entirely.</p>
                <p>This creates unnecessary friction, especially when users are seeking help, and may negatively impact their overall experience and lower their confidence in the company.</p>
              </div>

              <div>
                <h4>Analysis</h4>
                <p>The difficulty users experienced appears to stem from how support is structured within the app. Instead of providing a clear and direct path to creating a ticket, users are first directed through multiple FAQ pages, which can make it unclear where to go next.</p>
                <p>This suggests that the current structure prioritizes self-service content but does not provide a clear fallback for users who need direct assistance.
                </p>
              </div>

              <div>
                <h4>Suggested Improvements</h4>
                <ul>
                  <li>Add a clear and direct “Create a ticket” option within each FAQ category, so users can easily escalate if they cannot find an answer.</li>
                  <li>Reorganize FAQ categories into more cohesive and clearly labeled sections to reduce cognitive load and improve navigation.
                  </li>
                  <li>Introduce filtering (e.g., by game) to reduce irrelevant content and help users find relevant information faster.
                  </li>
                </ul>

                <p>These changes would reduce friction in the support flow, improve user confidence, and ensure users can access help when needed without unnecessary effort.</p>
              </div>
            </li>

            {/* Finding 2 */}
            <li className="dark:[&_li]:text-muted-foreground [&_div]:mb-6 [&_p,ol,ul]:mb-2 [&_ul,ol]:ml-4">
              <h3>Finding #2: Cookie settings and privacy policy are not intuitive to locate</h3>

              <div>
                <p>Locating the cookie settings and privacy policy produced mixed results. Around one third of participants reported some or significant difficulty completing this task.</p>
                <p>Some users reported:</p>
                <ul>
                  <li>“took me a good 5 minutes to find that, it is very concealed”</li>
                  <li> “It's under privacy... Maybe it seems obvious but tbh I started clicking through every page under settings”</li>
                  <li> “Easy if you have done it before.”</li>
                </ul>

                <p>These responses suggest that while the content is accessible, it is not easily discoverable—particularly for users who are unfamiliar with its location.</p>
              </div>


              <div>
                <h4>Analysis</h4>
                <p>Users generally expect privacy policies and cookie settings to be located in predictable areas, such as a footer or clearly labeled global navigation.</p>
                <p>In this case, the content is placed within the profile or settings area, which does not align with these expectations. As a result, users often resort to exploring multiple sections before finding the correct location.</p>
                <p>The comment “Easy if you have done it before” also suggests that success depends on prior knowledge rather than intuitive navigation. This indicates that the current structure does not effectively guide new or infrequent users.</p>
              </div>

              <div>
                <h4>Suggested Improvements</h4>
                <p>Adding a footer for secondary content such as the privacy policy and support pages would align with common user expectations and improve discoverability.</p>
                <p>This would provide users with a consistent and easily accessible location for important information, reducing the need to search through unrelated sections.</p>
                <p>Improving access to privacy-related content is particularly important, as it contributes to user trust and transparency.</p>
              </div>
            </li>

            {/* Finding 3 */}
            <li className="dark:[&_li]:text-muted-foreground [&_div]:mb-6 [&_p,ol,ul]:mb-2 [&_ul,ol]:ml-4">
              <h3>Finding #3: Users report lower confidence in navigation</h3>

              <div>
                <p>42.9% of participants reported medium to low confidence in Faceit’s navigation.</p>
                <p>This suggests that even when users are able to complete tasks, they may not feel certain about where to find features or how the system is structured.</p>
                <p>One user reported “there are buttons everywhere like ants and I don't know exactly what they do or where they take me” which suggests that the UI is cluttered.</p>
                <p>Lower confidence can lead to slower interactions, increased reliance on trial and error, and reduced overall satisfaction.</p>
              </div>

              <div>
                <h4>Analysis</h4>
                <p>The lower confidence in navigation appears to be driven by a combination of factors. Users described the interface as cluttered, with many elements competing for attention, which makes it difficult to quickly understand where to focus.</p>
                <p>In addition, important content is not always clearly visible or located where users expect it to be, which reinforces a sense that information is “hidden” within the interface.</p>
                <p>Together, this creates an experience where users rely on trial and error rather than clear navigation cues. Even when tasks can be completed, the lack of clarity reduces confidence and makes the experience feel less predictable.</p>
              </div>

              <div>
                <h4>Suggested Improvements</h4>
                <h5>Decrease UI Clutter</h5>
                <p>The current interface contains many competing elements, which can make it difficult to focus on key actions.</p>
                <p>This could be improved by:</p>

                <ul>
                  <li>Prioritizing essential content</li>
                  <li>Reducing non-critical elements</li>
                  <li>Improving visual hierarchy and spacing</li>
                  <li>Allowing users to customize content</li>
                </ul>

                <h5>Expand search indexing</h5>
                <p>Extending search to include all site pages (not just game-related content) would allow users to find information more efficiently, especially when navigation fails.</p>
              </div>
            </li>
          </ol>
        </section>

        <section>
          <h2>Limitations</h2>
          <p>This study focuses on specific tasks and does not represent the overall product experience.</p>
          <p>Another limitation is the relatively small sample size, which means the findings are directional rather than broadly generalizable.</p>
        </section>

        <section>
          <h2>Conclusion</h2>
          <p>In summary, users reported medium to low confidence in the site’s navigation, with many experiencing difficulty when completing tasks such as locating the support page, support ticket form, cookie settings, and privacy policy.</p>
          <p>These findings suggest that key information and features are not always easy to discover, particularly for users who are unfamiliar with the platform.</p>
          <p>Improving navigation clarity would help reduce friction, while also strengthening user trust and transparency.</p>
          <p>Further testing would help validate these findings and assess the impact of proposed improvements.
          </p>
        </section>
      </>
    ),
    previewImg: (
      <figure className="min-w-30 flex bg-[#141616]">
        <img src={faceitPreview} className="w-15 m-auto" />
      </figure>
    ),
    description: "This study examines navigation and discoverability in competitive esports matchmaking platform FACEIT, identifying areas where users experience friction when locating important features and information."
  },
]

export default caseStudies;