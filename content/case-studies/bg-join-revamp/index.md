# A faster and easier way to switch tariffs

An improved energy tariff quote journey for British Gas, built to lift sales conversion, cut drop-off and rebuild customer trust.

## Role & scope

- **Client:** British Gas
- **Platform:** Web
- **Role:** Senior Product Designer
- **Stack:** Figma, Claude, Content Square, UserZoom
- **Timeline:** 12 months
- **Squad:** Cross-functional
- **Year:** 2024-2025

![British Gas quote journey hero](/images/join-hero-banner.jpg)

## Executive summary

I led the redesign of British Gas's new customer quote journey for switching suppliers. I transformed a 16-step online journey into a research driven experience that built trust and improved the sales conversion rate.

### Key metrics

- Shifted the product team from assumption-led shipping to **an evidence-based, research-grounded approach.**
- Increased **overall sales conversion from 6% to 8%** over a 12-month period, a 33% customer acquisition uplift on the same traffic volume.
- Reduced a **16-step quote journey to 7 intuitive steps.**
- Cut average time to quote from 3m 26s to 1m 10s.
- Increased the **quote page conversion from 36% to 44%.**

## Business challenge

### The goal 

Increase sales conversion for the New to Brand (NTB) quote journey from 6% to an 8% target over 12 months.

Our New Energy Platform (NEP) hosted a bloated 16-step flow that assigned one question per page, driving a **94% customer drop-off before order completion.** To hit our sales conversion target, we needed to compress the journey, cut time-on-task, and match competitor efficiency without sacrificing accuracy.

## Customer type

**New to Brand (NTB) customers looking to switch energy tariffs** because their current contract is ending or has expired. Research shows this group is highly comparison-driven. 79% shop around rather than auto-renewing, and 63% rank price as their top decision factor.

## Discovery

A 16-step, one-question-per-page form was driving a 94% abandonment rate.

### Persuading stakeholders to think differently

Stakeholders wanted the quote journey shortened to increase conversion, which was a logical request. However, the friction, from a UX standpoint, was a **"just get it done"** and **"competitors do it, so should we"** mindset across the product team, with **features shipped on assumptions and speed rather than evidence.** My challenge was to shift this mindset towards a design process grounded in data and user needs. I ran cross-functional show-and-tells to build my case, positioning research as a foundational evolution rather than a challenge to the team's way of working.

### Hypothesis: 

> "We believe that by reducing the number of pages in the quote journey for NTB customers, we will decrease the drop-off rate (94%) and improve the likelihood of order completion. This will result in higher conversion rates from the start of the journey to the final purchase stage."

From my perspective, we needed to go beyond this hypothesis to truly understand customer needs and expectations. This would also enable us to unearth additional key findings that may have been causing the dropped conversion rate.

### Current journey

I walked myself through the current tariff quote journey, and the first thing that I noticed was that one question was assigned to an individual page. Resulting in 16 individual steps. Additionally, the tone of voice was functional, with no visible nudges to keep customers moving towards a switch.

![Legacy quote journey screens](/images/join-old-screens.jpg)
*One question per page and a functional, process-driven UX.*

### End-to-end audit

Next, I ran an end-to-end funnel analysis in Content Square across mobile and desktop to pinpoint exactly where customers dropped off, spent too long, or bounced between pages within a single session.

![Quote journey funnel audit](/images/join-audit-analysis.jpg)

#### Key insights

- Original **time to quote was 3m 20s, against competitor averages of approximately 1 minute.**
- **24% drop-off on the postcode page** (first step). Seemed evident there was no clear prior entry point for NTB, existing or Home Move customers.
- **62% bypassed the Supply Start Date** (SSD) page without changing it, simply to reach the quote faster.
- 48% of existing customers were misrouted to the Home Move journey, a major drop-off driver.
- **Consumption entry alone added ~25 seconds** to this complex micro journey.

### Splitting the journey in half

I conducted a Journey Analysis, dividing the Quote journey into two halves, postcode-to-quote and quote-to-buy, to isolate whether the end-to-end journey was the problem or specific pages were the real culprits.

The Journey analysis allowed me to investigate the user navigation paths from any entry point to 7 steps deep. I could see where customers were stepping to or where they were exiting the journey from.

![Journey analysis of quote and purchase stages](/images/join-doughnut-data.jpg)

#### Postcode to Quote

Only 1% clicked "choose a new date" on the Supply Start Date page; the rest kept the default. On the tariff quote page, 57% of potential customers do not proceed to the next step. Complex tariffs and pricing are the biggest reasons for abandonment.

#### Quote to Buy

Once customers choose a tariff, they are 72% likely to complete the second half of the journey and place their order. 68% of customers skip the Priority Services Register steps and move to the next step.

### Surveying 540 tariff shoppers' attitudes

Now that we could see the major drop-off at particular steps, I conducted an online survey of 540 customers currently shopping for an energy tariff. The cohort was mixed by age, gender and tech confidence to understand attitudes.

![Tariff shopper survey findings](/images/join-survey.jpg)

#### Key insights

- 70% use Price Comparison Websites (PCWs) and only 15% go direct to a supplier.
- 59% complete their order on a comparison site versus 32% on a supplier's own site.
- 40% would abandon a quote that takes too long.
- 32% would call customer support purely out of confusion about tariff details.
- 92% of 18-25 year olds shop around.
- 78% of 55+ year olds, shop around.

### Observing behaviours

After gathering customer attitudes, I wanted to observe actual behaviour firsthand. **I drafted and refined the discussion guide using Claude to speed up the process.** Then ran a two-day, moderated study with six participants at the British Gas Leicester office, observing their unscripted quote journeys in real time.

![Moderated quote journey observation study](/images/join-observation.jpg)

#### Key insights

- **5 of 6 participants started their quote journey on a PCW**, not on a supplier site.
- **Uswitch was the most popular PCW**, chosen by 4 of 6 participants unprompted.
- All participants stated **monthly cost was the most important figure on a quote**, over unit rate or standing charge.
- Expected **time to quote was around 1.5 minutes.**
- Given the choice between speed and accuracy, most participants reconsidered and **preferred accuracy over speed.**
- Participants **wrote down or photographed quotes to compare** across browser tabs before committing.
- Trustpilot ratings and peer **reviews were "vital to their decision-making".**
- Incentives such as **cashback or vouchers could persuade a switch** even to a less familiar brand.

### Step-by-step vs PCW layout usability testing

Following on from the survey and observational findings, I ran a preference test with 28 participants (14 desktop, 14 mobile), contrasting a progressive Step-by-Step prototype against a Single-Page Scrollable prototype modelled on PCW layouts.

![Step-by-step and scrollable prototype testing](/images/join-user-testing.jpg)

#### Key insights

- **86% preferred Actual consumption input over an estimate**, and of those, 57% wanted it pre-filled.
- Desktop leaned Scrollable for postcode-to-quote (50% vs 43%) but split evenly for quote-to-order.
- Mobile leaned Step-by-Step for postcode-to-quote (50% vs 40%), reversing for quote-to-order.
- **A progress bar was flagged as non-negotiable** by nearly every participant.
- Most participants did not notice Trustpilot reassurance on the postcode and consumption pages, showing it needed a more prominent position.
- **Pre-filled fields (like date of birth) removed duplicated effort** and were consistently welcomed.
- Participants wanted a clear edit option on the order summary page.
- Meter reading labels had a "persuasive charm", nudging customers toward Half-Hourly readings.

### How do our competitors do it?

I benchmarked OVO, Scottish Power, EDF and Octopus against Design heuristics and behavioural science principles, scoring each on loss aversion, commitment bias, social norms, recognition rather than recall and the remaining heuristics.

![Competitor quote journey analysis](/images/join-competitor-analysis.jpg)

#### Key insights

- **Competitor quote times averaged as low as 15 seconds (Octopus)**, 24 seconds (Eon) and 38 seconds (OVO).
- Every competitor showed a visible progress bar; British Gas's legacy journey did not.
- **Competitors surfaced 2 to 5 tariffs**, led by monthly price, versus a longer, harder-to-scan list on the legacy journey.
- Only **3 competitors let customers save a quote** to return to later.
- Most competitors gave customers the ability to edit and go back a step; the legacy BG journey did not.
- **Most competitors still lacked peer reassurance** (Trustpilot-style proof) at the point of decision, a gap British Gas could own.
- Help was consistently on hand via FAQs and contact links across competitor journeys.

## Define

A Root Cause Analysis condenses raw quantitative metrics and user observations into five core themes, directly guiding the subsequent redesign and feature prioritisation.

<ol class="custom-ordered-list">
    <li>
        <strong>Speed & Frictionless Progress</strong>
        <ul>
            <li>The root cause: A 16-step flow creates heavy fatigue, averaging over 3 minutes versus competitor benchmarks of 15 to 40 seconds.</li>
            <li>Design considerations: Compress the journey to 7 steps and add a progress bar.</li>
        </ul>
    </li>
    <li>
        <strong>Structural Ease & Frictionless Inputs</strong>
        <ul>
            <li>The root cause: Poor triage misroutes 48% of users, while mandatory manual consumption entries add 25 seconds of unnecessary input effort.</li>
            <li>Design considerations: Introduce early postcode triage to qualify intent and default to estimated usage to cut manual form filling.</li>
        </ul>
    </li>
    <li>
        <strong>Price Transparency & Savings Clarity</strong>
        <ul>
            <li>The root cause: Complex rate breakdowns hide monthly totals, driving high drop-off on tariff pages.</li>
            <li>Design considerations: Prominently feature monthly costs and simplify tariff comparisons.</li>
        </ul>
    </li>
    <li>
        <strong>Multi-Tab Tariff Comparability</strong>
        <ul>
            <li>The root cause: 70% of shoppers compare across sites, but the flow assumes a single session.</li>
            <li>Design considerations: Build "Save Quote" and email tools so users can compare and return easily.</li>
        </ul>
    </li>
    <li>
        <strong>Decision Reassurance & Trust</strong>
        <ul>
            <li>The root cause: A lack of social proof and clear guidance creates hesitation at decision points.</li>
            <li>Design considerations: Position Trustpilot ratings, awards, and contextual FAQs alongside key CTA buttons.</li>
        </ul>
    </li>
</ol>

### Problem statement

> "The NTB quote journey fails to balance business conversion goals with customer expectations. While British Gas requires higher completion rates, customers face a slow, 16-step flow troubled by structural misrouting, excessive input friction, and unclear tariff pricing. Without early triage, multi-tab comparison tools, or visible trust signals, the experience creates severe cognitive fatigue and hesitation. Resulting in driving high abandonment to our competitors."

### User needs statements

> "Sarah, a Marketing Manager needs a simplified quote form in order to see the necessary information quickly and accurately."

> "David, a father of 4 children needs to see his actual consumption pre-filled in order to prevent bill-shock."

> "Jesse, a mother of two children needs to easily compare the tariff quotes in order to make a confident purchase decision."

> "John, a single parent needs to easily compare his exiting tariff rates with the new tariff in order to easily work out the cheapest tariff."

> "Pawel, a retired engineer needs to save his tariff quote in order to compare on PCWs or competitor quote sites."

### The pivot and mindset shift

#### The original stakeholder brief was direct:  

> "Make the journey shorter and let's launch fast. This will increase the sales conversion rate."

Presenting the research and root causes to key stakeholders shifted their focus beyond pure journey length to addressing the true drivers of drop-off. It moved the mindset from "ship fast on assumption" to "test, measure, then scale", a cultural shift that shaped every phase after this point.

> "Build the right thing (for the customer) and build the thing right (adaptable solution)"

## Ideation

Cross-functional workshops converted these validated user needs into a shortlist of feasible, prioritised design features for the new journey.

### Unearthing a web of APIs

I mapped the journey without the lead engineer and confirmed the quote flow is not a simple linear path. It runs on a list of API calls and conditional logic, for example, a supply check that must determine whether an address is already supplied by British Gas before deciding whether to route a customer to login. Every proposed step reduction had to be checked against this routing logic before it touched UI design.

![Quote journey API flow chart](/images/join-api-flow-chart.jpg)

### MoSCoW mapping 

After cross-referencing the API, I ran a prioritisation workshop with Engineers, the Product Owner, a Business Analyst, a Solutions Architect and QA Testers, voting research-backed features into Must, Should, Could and Won't categories. Grouping ideas this way stopped scope creep and gave engineering early visibility of what was actually coming, shortening later build conversations.

![MoSCoW feature mapping and votes](/images/join-moscow-map-votes.jpg)

#### The ‘Must have’ votes
- Removing the reconfirm-address step scored as a clear Must have.
- Making Actual consumption the default input scored as a Must have.
- Moving Supply Start Date selection after tariff choice, not before, scored highly to reduce premature commitment.
- A dedicated order summary page was voted a Must have for confidence at the final step.
- Speed to quote was a must have priority, or we will continue to fall behind our competitors.
- Save-quote and email-quote functionality scored as a Should have.
- Trustpilot and industry award placement scored as a Must have, directly addressing the reassurance gap.

### Mapping the 12-month roadmap

I worked with the Lead Product Owner to plot a 12-month roadmap across three levels:  
- MVP  
- MVP/North Star  
- Full North Star  

At this point, I decided to bring engineers into the UX and build stage early. This shortened development cycles considerably, letting the team fast-track the MVP and begin live A/B testing against the legacy 16-step journey sooner than originally planned.

### Establishing the refreshed look and feel

I worked with the Nucleus design system team to overhaul typography, colour, imagery, usage rules, page variants and core components, moving away from a purely functional user experience. Alongside the brand team, I introduced "The Things", the brand's fluffy blue characters, and layered in the behavioural science nudges. This collaboration set the direction for the organisation’s refreshed look and feel across all digital services and products.

![New quote design: customer entry point](/images/join-new-designs-1.jpg)
*A clear entry point for NTB, existing customers and Home Movers.*

![New quote design: progress and reassurance](/images/join-new-designs-2.jpg)
*Introducing a progress bar to orientate the user. A colloquial tone builds reassurance.*

![New quote design: tariff comparison](/images/join-new-designs-3.jpg)
*The table view enables quick tariff comparison, while custom filters help new customers narrow options to match their needs.*

## Design

Senior stakeholders abruptly paused the rollout of the new design system mid-project.

### Diverting back to the old look and feel

Midway through design, product and marketing leadership delayed the new Brand ID, forcing every acquisition flow back to legacy Nucleus components. Despite this constraint, **I negotiated to keep every behavioural science principle, heuristic fix, and structural UX improvement intact** by rebuilding the 7-step journey within the older system.

### The design component boundaries

Parent components in Nucleus strictly limited which child components could sit inside, forcing every pattern into rigid, preset blocks. While this enforced consistency across the product team, it prevented UX patterns from evolving.

### The trade-off win

Working within these constraints, the core win was reducing cognitive load. I compressed the journey from 16 disjointed steps down to 7 intuitive steps by grouping naturally related questions, such as postcode with address and consumption with property size. This allowed customers to make fewer, more meaningful decisions while ensuring key behavioural science principles like commitment bias, anchoring, priming, and social norms, alongside robust UX heuristics, remained baked into the experience. 

![Final quote design: entry and anchoring](/images/join-final-designs-1.jpg)
*Header utilises Anchoring bias to set the NTB customer’s expectations from the start.*

![Final quote design: grouped questions](/images/join-final-designs-2.jpg)
*Combined themed questions onto one page with default options pre-filled for quicker tariff quote results.*

![Final quote design: saved quote](/images/join-final-designs-3.jpg)
*NTB customers can now save a quote and easily retrieve it later to compare prices on other websites.*

## Testing

A live, split-traffic A/B test validated the redesigned journey against the legacy flow using real production traffic rather than a lab environment.

### 5-day post-launch live a/b test results

The data insights team ran a live split-traffic test where 25% of incoming traffic saw the new, optimised journey and 75% remained on the legacy 16-step flow.

![Live A/B test results](/images/join-ab-test.jpg)

### Observations

Daily tracking showed **the new design consistently beat the original.** While daily conversion rates bounced between 1% and 7% for both versions, the new design held a clear lead 5 days after going live.

### Key insights (first 3-month period)

- **Higher Quote Reach:** 44% of customers reached the quote page, up from the 36% baseline.
- **Faster time to quote:** Average time to quote dropped from 3m 26s down to 1m 10s (saving over two minutes of friction).
- **Increased sales conversion:** Start-to-sale conversion rose from 6% to 8%, achieving our target 33% uplift in customer acquisition.
- **Eliminated SSD friction:** Moving Supply Start Date selection after the quote page eliminated early drop-off and streamlined the entry flow.
- **Resolved triage misrouting:** Triage fixes successfully prevented the 48% misrouting of existing and Home Move customers away from the NTB flow.
- **Smoother entry step:** Merging postcode and address into a single step significantly narrowed initial step drop-off.
- **Default consumption value:** Manual consumption entry dropped by 24% as more users accepted the pre-filled estimate value (Medium), significantly cutting time-on-task.

## Outcomes

The MVP delivered a sustained conversion lift within the constraints of the legacy design system.

### The impact

Our target was to raise sales conversion from 6% to 8% over 12 months. The MVP running on current Nucleus components exceeded this, **pushing conversion from 6% to 9% between months 6 and 12.** That’s a 50% uplift in customer acquisition based on the same traffic volume.

### My biggest win was cultural

Shifting the team from shipping on assumptions to relying on user research. Overcoming the frustration of a delayed design system release was worth it, as I ensured every behavioural science and UX gain remained intact. That design system is now being rebuilt, with a dark-mode-first experience launching soon.

### Engineering handoff

I handed Developers annotated Figma specifications, working prototypes and many edge cases (meter exceptions, mixed-meter scenarios, Home Move routing, etc). I continued collaboration to make sure the build matched the business goal and customer needs.