# The EE cyber security ID checker & antivirus add-on

From breach alerts to instant protection. A brand new ID Checker journey for EE and Norton, built to build trust, cut support calls and drive antivirus sales.

## Role & scope

- **Client:** EE (in partnership with Norton)
- **Platform:** Web, iOS and Android
- **Role:** Senior Product Designer
- **Stack:** Figma, UserTesting, Norton API docx
- **Timeline:** 12 weeks
- **Squad:** Cross-functional
- **Year:** 2021

![EE Cyber Security ID Checker hero](/images/cs-hero-banner.jpg)

## Executive summary

I led the end-to-end design for EE's Cyber Security offering, which included an ID Checker tool powered by Norton's Dark Web Monitoring API and a Norton antivirus add-on. I transformed raw breach data into a clear, actionable user journey designed to drive plan purchases while keeping customer support calls to a minimum.

### Key metrics

- 5/5 users easily completed both the purchase and breach-check tasks during user testing.
- 6.6/7 satisfaction score for purchasing an antivirus plan.
- 6.8/7 satisfaction score for checking an email for data breaches.
- Built a content pattern library using structured API data to replace inconsistent provider-written descriptions with clear, standard and actionable advice for every breach result.
- Among qualified ID Checker users, we reached an 11.2% sales conversion rate to paid antivirus plans within 12 weeks, exceeding our target by 3.5%.

## Business challenge

EE and Norton needed to drive conversions for a paid antivirus add-on (£2/month for 2 devices or £5/month for 15). The core challenge was making an abstract, future cyber risk feel tangible enough to trigger a purchase today.

During a stakeholder demo of the live Norton API, breach details varied significantly between exposed companies. Small email providers returned sparse data (just dates), while larger companies returned rich information. The reason is that engineers manually write each company's breach description. There was no guarantee the language would remain consistent or easy to understand. Stakeholders flagged this inconsistency as a risk, as users need clear, understandable results and actionable next steps without needing to contact customer support.

## Customer type

The primary user is an EE mobile or broadband customer deciding to add paid protection for their personal devices, seeking proactive security without having to become a cyber security expert.

![EE Cyber Security customer profile](/images/cs-cutomer-profile.jpg)

## Discovery

Stakeholder demos and a live API walkthrough revealed that raw breached data was too inconsistent and technical for customers to trust or act on.

### Core insights

During the live demo, breach details varied widely depending on the provider. Niche email services returned almost no information beyond dates, whereas major breaches like LinkedIn provided complete records. To ensure effectiveness across all scenarios, our customer-facing copy had to deliver clear value even with the sparsest data, rather than relying solely on complete breach profiles.

It was made apparent that breach descriptions are written per provider and "not particularly formatted" for simple comprehension, meaning the design team, not the API, would own the job of translating results into plain language.

### What do customers really feel about a cyber attack?

The next step was to conduct a quantitative survey across 500 participants to measure anxieties around security breaches, evaluate device protection preferences, and identify language comprehension.

#### The results

- 65% would be concerned about a personal cyber attack
- 72% said the language used is too complex
- 62% would reset their password

![Cyber security survey insights: concerns](/images/cs-survey-insights-1.jpg)
![Cyber security survey insights: language](/images/cs-survey-insights-2.jpg)
![Cyber security survey insights: actions](/images/cs-survey-insights-3.jpg)

## Define

Discovery findings were synthesised into guided artefacts, allowing me to keep the design on track. They also enabled me to sell to stakeholders with conviction.

### How might we…

Research produced a set of How Might We statements that shaped the brief, HMW…

> "Help users find detailed EE Cyber Security information easily?"

> "Make the copy super-simple to comprehend?"

> "Encourage customers to use the ID Checker?"

> "Make the antivirus plans easily accessible for purchase?"

> "Allow customers to self-serve when needing support?"

### The pivot

We initially assumed a single warning template would work for all breaches. However, the Norton demo proved that breach data varies widely, ranging from rich details to vague dates. I pivoted to a structured copy framework designed to deliver a complete, clear result even against the sparse, worst-case API response.

## Ideation

Cross-functional workshops converted the breach-reassure-purchase challenge into a single, reusable service pattern that could expand across login states. Collaborating with Service Design, I helped map a repeatable pattern from initial ID Check through to Norton activation. We then adapted this core flow across three distinct states (logged-out web, logged-in web, and the mobile app), accounting for both breached and unbreached scenarios to ensure consistency across every entry point.

![Cyber security service design pattern](/images/cs-design-pattern.jpg)

### Behavioural science

During ideation, I applied the concept of loss aversion, structuring the copy to trigger people's natural instinct to avoid potential losses (such as a data breach) rather than gain benefits. I framed the main headline as a direct question to instantly prompt a risk-focused mindset.

![Loss aversion headline explorations](/images/cs-loss-aversion-headlines.jpg)

I also addressed present bias to tackle a major adoption challenge. **Cyber security can be a hard sell because people often view cyberattacks as vague, distant threats.** By surfacing live breach results immediately, we transformed an abstract risk into an urgent problem, making a paid antivirus plan feel necessary in the moment.

### Competitor analysis

I analysed competitors and brands outside of the cyber security and telco world. The task was to simply investigate how they nudge the user to take action after a result:
- Where was the product or CTA located on the page?
- Do they use any timely, contextual pop-ups?
- Was it a simple but salient call to action the customer couldn't miss?

![Cyber security competitor analysis](/images/cs-competitor-analysis.jpg)

### Content made for a 9-year-old

Next, I started drafting rough designs by leveraging the SLICE framework: Saliency, Layout, Imagery, Colour, and End-goal:
- **Saliency:** I wanted to ensure there was sufficient colour contrast against the background so that customers were drawn to the ID Checker and the antivirus plans, as opposed to any surrounding noise.
- **Layout:** I began by focusing on the primary task we wanted the customer to complete, which was purchasing an antivirus plan, and explored placement, component sizing, and natural reading patterns.
- **Imagery:** I considered how iconography could reassure customers while preventing text overload, which can drastically reduce engagement.
- **Colour:** What colours would make the plans pop? Would red work best if a customer’s device were breached? What about using warm colours for the ID Checker to encourage interaction with the tool?
- **End-goal:** I established clear guidelines to ensure the antivirus plan cards were prominent, the calls to action were explicit, and the surrounding layout remained clutter-free.

![SLICE framework design explorations](/images/cs-slice-designs.jpg)

## Design

High-fidelity screens combined the SLICE framework (Saliency, Layout, Imagery, Colour, End-goal) with a strict adherence to the design pattern mapped out in the Ideation phase.

*Note: The following designs are for the iOS EE native app only.*

I designed the breached results UI around structured API data types instead of inconsistent, provider-written text descriptions. I built a content pattern library that automatically mapped each data type to plain English and standard next steps (e.g., "Password" always prompts "change this password everywhere"). This ensured every breach result felt complete, clear, and actionable, even when the source data was minimal.

### My step-by-step framework to build the content library

**1. Create the System Rules**  
I started by building a single source of truth spreadsheet that mapped every API value.

![Cyber security content library mapping table](/images/cs-content-library-table.jpg)

**2. Standardise the Copy Guidelines**  
I defined strict tone of voice rules to ensure future additions stay consistent.
- **Structure:** Write every remedy step using a `[Direct Action Verb] + [Specific Context]` format (e.g., "Update your security questions..." or "Enable two-factor authentication...").
- **Readability:** Set clear rules: 9-year-old reading level, active voice, no technical jargon.

**3. Design Component Templates in Figma**  
I then applied these rules to create visual, modular Figma components using Auto Layout and Variants.
- **Base Card Layout:** Created a flexible container card with fixed regions for the Date Label and Remedy Text.
- **Fallback States:** Designed how the card behaves when data is missing or incomplete (e.g., if only dates and data types are returned, the card should still render cleanly without empty white space).

![Cyber security content library card components](/images/cs-library-cards.jpg)

**4. Engineer Handoff & Collaborative Implementation**  
To meet the short timeline restrictions and avoid complex Figma variant setups, the handoff process was simplified into a direct, collaborative workflow with engineering:
- **Shared Pattern Handoff:** I provided the content library rules (plain-English labels and remedy copy) directly to the development team as a single source of truth.
- **Collaborative JSON Mapping:** I worked directly alongside engineers to construct and validate the breach-patterns.json file, ensuring backend data types mapped perfectly to frontend assets.
- **Fallback Logic Agreement:** We aligned on simple edge-case rules without needing bespoke design specs.

### Keeping the customer locked in

Additionally, the "See all breaches" tile intentionally opens a modal instead of a new page. This keeps the user on the results screen where the plan cards remain above the fold. Otherwise, a full list of 10 to 40 breaches would push the plans completely off-screen.

### Resurfacing the plans

The antivirus plans were also resurfaced at multiple, deliberately timed points, once on the Cyber Hub page above the ID Checker, and again immediately after either a breached or "safe for now" results page, the moment loss aversion was judged to be strongest.

![Cyber security content library mapping table](/images/cs-design-1.jpg)

### Prototype walkthrough

<div style="margin-top: -20px; margin-bottom: 48px;">
  <a href="https://www.figma.com/proto/3HVrqoxcHq3CYEPjCIp1uS/EE-Cyber-Security-Case-Study?node-id=583-12141&p=f&t=taDvxn4PT4T81wMM-8&scaling=scale-down&content-scaling=fixed&page-id=583%3A10546&starting-point-node-id=583%3A12141&hide-ui=1" target="_blank" rel="noopener noreferrer" style="display: block; position: relative; text-decoration: none; border: none; padding: 0; background: transparent;" class="group">
    <img src="/images/cs-prototype.png" alt="EE Cyber Security - Interactive Prototype Walkthrough" style="width: 100%; height: auto; display: block; border-radius: 16px; border: none; margin: 0; padding: 0;" />
    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.1); border-radius: 16px; transition: background-color 0.2s;" class="group-hover:bg-black/20">
      <div style="width: 72px; height: 72px; background: rgba(255,255,255,0.9); border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); transition: transform 0.2s;" class="group-hover:scale-110">
        <svg style="width: 28px; height: 28px; fill: #111; transform: translateX(2px);" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z"/>
        </svg>
      </div>
    </div>
  </a>
</div>

## Testing

Moderated remote usability sessions with five EE customers, run on smartphones, stress-tested the purchase and breach-check journeys ahead of launch.

### The testing setup

- **Method:** Moderated usability testing, remote sessions across the MyEE app
- **Participants:** 5 active EE customers (2 "concerned", 3 "cautious")
- **Scenario:** Participants were asked to find ways to protect their online data using the prototype, then to check whether their own email had been breached.

![EE Cyber Security usability testing](/images/cs-user-testing.jpg)

### Key usability findings

- 5/5 participants moved through the purchase flow with ease, commenting positively on the 3-step checkout.
- 5/5 participants showed visible concern about whether the result was breached or "safe for now," which supported the loss-aversion rationale behind the design.
- Several participants skimmed past the "How it works" link entirely unless prompted, with one describing the breakdown as unnecessary and repetitive once they already felt confident in their next step.

**Common pain points:**
- 2/5 users wanted clearer information on which devices each plan actually covered.
- 2/5 users wanted more flexible device counts, citing a large gap between the 2-device and 15-device plans.
- 3/5 users wanted to know how many times a year they could rerun the checker.
- 4/5 users found the bold red breach background hard to read, one citing visual strain.
- 3/5 users wanted to see the ID Checker near the top of the Cyber Security Hub page.

**Common positive feedback:**
- 5/5 users completed the purchase task with ease.
- 5/5 users completed the breach-check task intuitively.
- Users called the checkout "really concise and clear" and valued having only three steps.
- Existing familiarity with the Norton brand gave users confidence in the partnership.
- Users understood their next step was to follow the activation email.
- Users said they'd consider purchasing regardless of a breached or safe result, confirming demand held even without a scare.
- The "you're safe for now" message was described as reassuring by everyone who saw it.
- Once prompted, users engaged fully with the EE Cyber Security app content and found it exceeded expectations.

### Design iterations

- Informed users with the number of checks they can have.
- Removed the bold red background.
- Moved the ID Checker to the top of the cyber security hub page.

![EE Cyber Security usability test iterations](/images/cs-user-test-iterations.jpg)

## Outcomes

EE Cyber Security and the free ID Checker went live, despite a major incident in a data centre the night before launch.

- 100% ease of use score
- 94% satisfaction score
- 11.2% sales conversion rate

### Retrospective

Working closely with engineers while building the content library was a valuable learning experience that helped me understand backend infrastructure and technical guardrails. Real-world design isn't about creating pie-in-the-sky UI, it's about balancing stakeholder goals, user needs, and technical constraints while pushing the UX to its limits.