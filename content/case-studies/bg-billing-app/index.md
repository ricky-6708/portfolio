# Bills you understand without calling

An improved billing experience for British Gas, built to cut avoidable calls, build trust, and drive app self-service.

## Role & scope

- **Client:** British Gas
- **Platform:** App (Android / iOS)
- **Role:** Senior Product Designer
- **Stack:** Figma, Claude, Codex, Magic Patterns, Miro, Content Square, UserTesting
- **Timeline:** 16 weeks
- **Squad:** Cross-functional
- **Year:** 2026

![British Gas billing experience hero](/images/billing-hero-banner.jpg)

## Executive summary

As lead designer, I delivered a proactive in-app billing experience that drove self-service and cut paperless billing contact volumes by 20% in the first three months.

### Project highlights

- **Design foundation:** Six core design principles for all future billing projects.
- **System collaboration:** Evolved dark mode with the Nucleus design system team, including fonts, colours, tokens and components.
- **AI acceleration:** Built prototypes and micro-journeys with AI, saving four days.
- **Technical mapping:** Mapped event triggers and rules with engineers to build a dynamic UX.
- **Testing results:** 38/40 for clarity, 39/40 for discoverability, 38/40 for ease of use.
- **3-month post-launch impact:** 20% reduction in paperless billing calls.

### Financial & operational impact
- **55,000 calls prevented** in the first 90 days, **saving £220,000.**
- A sustained **20% reduction saves £800,000 per year.**

## Business challenge

### The goal

Turn the highest-volume billing call drivers into digital self-service, cutting customer support call costs.

**73% of customers prefer to engage with their bills in the app.** Yet the legacy app has no bill explanations and no meter submission, so 1.1M paperless customers still call support every year. That costs **£4M per year in avoidable call support.**

## Customer types

82% of the base sits in Fixed Direct Debit (FDD) or Pay on Receipt (PoR), split by Traditional or Smart meter.

- **The Budgeter** (PoR / Traditional, 10.1% of base): Misses reading windows. Needs read alerts and photo submission.
- **The Estimator** (FDD / Traditional, 19.9%): Winter estimates build unseen debt. Needs a clear balance.
- **The Digital Native** (FDD / Smart, 34.0%): Expects banking-grade automation. Needs seasonal comparisons.
- **The Analyser** (PoR / Smart, 17.3%): Wants clarity before paying. Needs confirmed reads.

## Discovery

The app explained nothing about estimated bills, so customers phoned instead, driving 1.1m billing contacts.

In collaboration with my Service Designer colleague, I was strictly instructed not to create new data or UX research insights. Instead, we worked with the vast array of existing data. These instructions set the goal, the constraints, and what was in and out of scope.

### Diving into the deep end

With that guidance, I jotted down as many ideas as possible, removing all shackles. I filtered them against high-level scenarios that energy customers need during their billing cycle:
- “Auto-generated bill comparison, what changed.”
- “Instant plain-language translation of entire bill.”
- “Real-time prediction of next payment amount.”

![Rapid billing concepts](/images/billing-ideas-1.jpg)
*30 rapid concepts were ideated with no constraints.*

### Digging into the data and research

We filtered the data into the highest-value opportunities. To prevent dependencies and scope creep, my goal was one end-to-end in-app experience for a key scenario, so we asked targeted questions:
- Who is our majority customer base, and what do they call about?
- What are the meter, payment and frequency splits?
- What does the current in-app experience look like?

### Current app billing walkthrough

I walked through the live app screen by screen. Customers could only view statements, see payment history and download a PDF with no summary or next step.

#### Current app billing findings:

- **No bill clarity:** No plain-English breakdown of charges, standing charges or usage spikes.
- **No historical comparison:** No side-by-side view against previous statements.
- **No proactive support:** No callouts or AskBill AI to answer small queries early.
- **No in-app meter reads:** 70% of statements are estimated, driving disputes, especially for Fixed Direct Debit and Payment on Receipt.
- **No forward view:** No projected statement to avoid bill shock.

70% Statements Estimated | 90%+ Traditional Meter Estimates | 82% FDD and PoR Base

### The biggest contact drivers

Knowing the contact volumes from highest to lowest let me prioritise the prototype scenario. The data team grouped **contact reasons as 'Bill Disputes' and 'Bill Queries'.** Three of the top five drivers were estimate-to-actual issues, **totalling 221,863 contacts.**

- 94,584 Estimated Bill Corrected Queries
- 83,907 Estimated vs Actual Disputes
- 43,372 Estimate corrected to actual

### Core customer base

I then asked the data team for the core customer base, so I could combine the highest contact driver and the vanilla customer type. From the data, I created four profiles.

![Core billing customer base](/images/billing-customer-base.jpg)

## Define

Six design principles and one focused scenario gave the squad a shared view of customer anxieties and key touchpoints.

I turned the discovery data into themes, from **Bill Understanding** to **Proactive Engagement**, with estimated bill disputes accounting for the majority of call drivers.

### The estimate to accurate bill scenario

I agreed with stakeholders to design a fresh end-to-end UX/UI around the estimate-to-accurate bill scenario. I intended to test it with our majority customer type.

![Estimate-to-accurate-bill scenario](/images/est-to-acc-bill.jpg)

### Our vanilla customers

We refined our four customer types into two buckets as they made up 80% of our base. Although Smart meter customers made up 63% of this base, **we focused on traditional meter customers, for the estimated-to-accurate bill dispute scenario.**

- **The Estimator:** Payment type: Fixed Direct Debit, Bill frequency: Monthly, Meter type: Traditional
- **The Budgeter:** Payment type: Payment on Receipt (PoR), Bill frequency: Quarterly, Meter type: Traditional

### The design principles

By sewing together the insights and research, I mapped out 5 core billing principles to apply across the whole billing CX. They steered every design decision:

<ol class="custom-ordered-list">
    <li>
        <strong>Enable customers to feel in control:</strong>
        <ul>
            <li>Give customers clear information and easy-to-follow steps.</li>
            <li>Provide timely, contextual self-serve support, right where questions arise.</li>
        </ul>
    </li>
    <li>
        <strong>Simplify complexity for everyone:</strong>
        <ul>
            <li>Make it simple and accessible to all, whatever the customer's technical literacy.</li>
            <li>Remove complexity and jargon: "Debit" means opposite things in banking and energy billing, so use plain-English outcomes.</li>
        </ul>
    </li>
    <li>
        <strong>Remove surprises through proactive communication:</strong>
        <ul>
            <li>Provide timely, relevant updates before the bill lands.</li>
            <li>Avoid being reactive: Use system triggers for in-app guidance (e.g. "Hey John, your last two statements show you're using more energy than your current payments cover. To help you avoid building up debt, we suggest adjusting your monthly payments now.").</li>
        </ul>
    </li>
    <li>
        <strong>Be transparent in every interaction:</strong>
        <ul>
            <li>Show what drives the bill, and whether a statement uses actual readings or estimates.</li>
            <li>Provide historical context so users can verify year-on-year changes.</li>
        </ul>
    </li>
    <li>
        <strong>Trust through every touchpoint:</strong>
        <ul>
            <li>Ensure accuracy, clarity and consistency, using the informal terms from call listening. Customers used terms like "Leave in", "Take out", "Owe you", "Owe me", etc.</li>
            <li>Speak to me like I'm 11: Replace clinical corporate statements with human explanations.</li>
        </ul>
    </li>
</ol>

### Cross-industry analysis

I then analysed finance and competitors to see how they convey these principles. Monzo forecasts upcoming payments, and E.ON Next's Billie cut billing calls by 5.5%.

![Cross-industry analysis](/images/billing-industry-analysis.jpg)

## Ideation

Filtering original concepts to find high-impact wins. 

The Service Designer and I sifted through the original draft concepts to define a solid **'How Might We'** and hypothesis. We prioritised ideas into Quick Wins and North Star concepts based on technical feasibility, estimated delivery time, and contact volume removed. 

### How might we

How might British Gas redesign in-app billing into a dynamic self-service experience that helps customers understand their usage, correct estimated bills through easy meter submission, and project future costs, cutting avoidable contact?

### Hypothesis

> "If we present customer billing data using a progressive disclosure approach (starting with a simple plain-English summary and allowing drill-downs into usage breakdowns, side-by-side historical comparisons, and flexible meter reading options), then customers will better understand their energy charges, resulting in reduced inbound contact centre queries, higher digital self-service adoption, and improved brand trust."

### Evolving the new design system

The design system was still exploratory, so my Design Director told me to "Make it better" and "Push the billing UX/UI." I liaised with the design system team on tokens and usage rules, and studied dashboards, dark mode, light mode, and help/guidance patterns.

![Billing interface and design system analysis](/images/billing-ui-analysis.jpg)

<div style="font-size: 28px; line-height: 36px; letter-spacing: .4px; font-weight: 900; margin-top: 78px; margin-bottom: 14px; color: #000;">Design exploration</div>

I leveraged my design analysis and took the existing components and pushed the design ideas, **combining progressive disclosure, the design principles and the new dark mode look and feel.** I intended to build two high-fidelity prototypes ready for usability testing.

![Billing design](/images/billing-ideation-exploration.jpg)

### Using AI to speed up

While building two end-to-end prototypes, I used Magic Patterns to speed up production. I conceptualised micro journeys, such as the Daily Spend tool and Submit Meter Reading, from a thorough prompt. Although the AI prototypes were imperfect, I managed to save a total of four days of design time by taking inspiration from the AI tool’s recommendations.

![AI-assisted billing concepts](/images/billing-magic-pattern.jpg)

## Design

I then began to design a stepped flow that answered what customers owe, the why, and what to do next.

### Baking the UX on top of what already exists

The app only offered 'View Statements' and 'View Payment History'. The UX seemed primitive, yet customers still needed both, so I baked an end-to-end billing UX on top of the existing features.

### Drip-feeding the user

Rather than throwing the customer in the deep end, I created a progressive disclosure UX. It showed a minimal summary first, then revealed the detailed breakdown behind a click. This gave the customer CONTROL and TRANSPARENCY, in small, digestible chunks.

- **Step 1:** Quick bill summary.
- **Step 2:** A breakdown of charges (including contextual guidance and help tips).
- **Step 3:** Option to seek guidance from AskBill (AI Agent) to explain the breakdown.
- **Step 4:** View bill: Detailed view of the actual bill and option to download.

### Askbill the AI agent

For Step 3, past testing revealed customer scepticism toward AskBill. I explored entry point copy that clearly demonstrated its capabilities as an autonomous agent rather than a basic chatbot, then refined the copy to communicate value, build trust, and address AI concerns.

![AskBill entry-point copy exploration](/images/billing-askbill-exploration.jpg)

### Dynamic content that reduces contact volumes

When a bill anomaly appears, practical solutions, guidance or explanations surface at the right moment, so customers understand the bill without calling. To make this work, **I set the MVP event triggers and business rules with back-end engineers.**

**MVP Event Triggers:** The billing engine continuously evaluates incoming billing data against historic baseline metrics:
- **Consumption Variance:** Comparing current statement usage (kWh) against a rolling 3-month average or the identical quarter from the prior year.
- **Read Type Indicators:** Flags tracking whether the current bill is based on actual reads or estimated calculations.
- **External Signals:** Weather API data (e.g. average seasonal temperature drops) and tariff or price cap schedule changes.

**If this then that rules:** When a statement is generated, an API middleware evaluates the account against business rules:
- **Rule 1 (Bill Spike Anomaly):** IF current_bill_amount IS (3_month_avg x 1.35) THEN trigger anomaly_banner_high_usage.
- **Rule 2 (Estimated Bill / Missing Read):** IF bill_type = 'ESTIMATED' THEN trigger prompt_submit_meter_read.
- **Rule 3 (Payment Discrepancy):** IF customer_type = 'FDD' AND projected_balance IS <0 THEN trigger prompt_adjust_direct_debit.

### Modular design rules

I built a design structure that required little disruption for all of the many billing scenarios:
- 90% applies the design principles (Control, Simple, Proactive, Transparent and Trust).
- 10% of the design structure can be edited, removed, or added for tailored scenarios.

This structure keeps design and build moving fast due to its adaptable nature.

![Final billing designs: overview](/images/billing-final-designs-1.jpg)
![Final billing designs: detail](/images/billing-final-designs-2.jpg)
*The above designs show the features built on top of the current 'View Statements and Payments History' app features.*

## Testing

Testing checked whether the design let customers self-serve without calling.

### The cohort

I tested the end-to-end prototype on our biggest call driver, 'Estimated bill to Accurate bill.' It targeted **16 participants matching our two primary vanilla profiles (The Estimator and The Budgeter).**

### The goal of this usability test

- Assess whether users can accurately interpret their latest statement and whether the progressive disclosure UX is effective.
- Determine if the end-to-end journey meets statement expectations and provides the confidence needed to self-serve independently.
- Capture perceptions of clarity, desire, and trust regarding how information and tools are presented.
- Pinpoint specific pain points and frustrations encountered during the experience to refine the next iteration.

*The following insights focus only on The Estimator customer type to keep this case study succinct.*

### The scenario

> "You are going to look at a prototype of an energy billing section within a mobile app. Imagine you have just opened the British Gas app and want to find out about your latest energy bill. You pay your bill by Fixed Direct Debit each month. Please explore the prototype as you naturally would if this were your own account. Think out loud as you go.."

### Prototype walkthrough

<div style="margin-top: -20px; margin-bottom: 48px;">
  <a href="https://www.figma.com/proto/sgx3kaCMiO1sVscqaB1Yl9/CST-Billing?node-id=1311-27275&p=f&t=3NmOQx0J4bGhMOpT-8&scaling=scale-down&content-scaling=fixed&page-id=1311%3A10288&starting-point-node-id=1311%3A27275&show-proto-sidebar=1&hide-ui=1" target="_blank" rel="noopener noreferrer" style="display: block; position: relative; text-decoration: none; border: none; padding: 0; background: transparent;" class="group">
    <img src="/images/billing-prototype.png" alt="British Gas Billing - Interactive Prototype Walkthrough" style="width: 100%; height: auto; display: block; border-radius: 16px; border: none; margin: 0; padding: 0;" />
    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.1); border-radius: 16px; transition: background-color 0.2s;" class="group-hover:bg-black/20">
      <div style="width: 72px; height: 72px; background: rgba(255,255,255,0.9); border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); transition: transform 0.2s;" class="group-hover:scale-110">
        <svg style="width: 28px; height: 28px; fill: #111; transform: translateX(2px);" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z"/>
        </svg>
      </div>
    </div>
  </a>
</div>

### Key testing insights

The prototype exceeded expectations and scored almost perfectly amongst our cohort: **38/40 for statement clarity, 39/40 for discoverability** and **38/40 for ease of use.**

#### What worked

- **Overview:** 8 of 8 understood their balance and its reason from the summary alone.
- **Statement comparison:** The standout feature, **7 of 8 gave the maximum score.**
- **Meter reads:** Photo or manual entry split evenly.
- **AskBill:** 5 of 8 turned positive after reading a conversation between the AI Agent and The Estimator customer.

#### What needs improving
- Although reassurance was applied, at the entry point, some distrusted AskBill for complex issues.
- One wanted the next Direct Debit amount and due date on the summary.
- One participant missed the "View Statement" CTA, so it needs stronger salience.
- Half saw the projected statement as a nice-to-have, so I recommended testing it with a larger cohort.

## Outcomes

The MVP cut paperless billing calls by 20% within three months of launch.

### Achievements

Against 1.1M paperless customers calling yearly at a cost of £4M, the MVP delivered:
- 20% reduction in paperless billing calls in three months.
- 55,000 calls prevented in the first 90 days.
- £220,000 saved in direct operational costs.

- £800,000 per year if the 20% reduction holds for 12 months.

### Retrospective

Working with board-level stakeholders, it’s easy to get lost in their complex needs. This emphasised to me that endless debate rarely resolves competing opinions. I realised that the fastest way to untangle complex, conflicting requirements is to move immediately from conversation to tangible, interactive prototypes. Seeing a concrete design gave leadership a clear vision, helping us find common ground faster, align on key decisions, and maintain momentum under tight deadlines.

### Next steps

The new design system is being updated to launch a dark-mode-default experience within the next 12 months. Next, the App and Web In-Life teams will align and cover edge cases and error states.