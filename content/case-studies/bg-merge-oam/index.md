# The all-in-one dashboard

An improved online account for British Gas customers, built to cut churn, boost cross-selling and increase customer task completion.

## Role & scope

- **Client:** British Gas
- **Platform:** Web (Online Management Account)
- **Role:** Senior Product Designer
- **Stack:** Figma, CoPilot, Miro, Adobe Analytics, UserTesting
- **Timeline:** 12 weeks
- **Squad:** Cross-functional
- **Year:** 2026

![British Gas all-in-one dashboard hero](/images/merged-hero-banner.jpg)

## Executive summary

I led the design of a mobile-first dashboard that merges British Gas Energy and Services accounts into a unified experience. By eliminating the fragmented dashboard loop in which customers had to loop back from one dashboard to the other, the unified dashboard delivered an immediate 3% relative reduction in overall customer Joint Product Holding (JPH) churn in its first 30 days post-launch.

- **39 customer profiles defined**, mapping core jobs-to-be-done across Energy, Services, and JPH customer segments.
- **4.5% call volume deflection (~9,000 support calls saved in Month 1)** by embedding clear billing self-serve guidance and direct engineer booking access on the main view.
- **+1.8% relative conversion uplift for engineer bookings in the first month** (an increase from 67% to 68.2% toward our 70% target).
- **3% relative reduction in JPH churn** (~187 cancellations saved in Month 1) by removing the dashboard re-entry friction responsible for nearly half of segment drop-offs.

## Business challenge

### The goal

Merge the fragmented Energy and Services dashboards into a single, mobile-first experience to reduce churn, cut support call volumes, and boost cross-selling across 8.88 million accounts. With 70% of logins on mobile, legacy platform silos forced Joint Product Holding (JPH) customers into disjointed navigation loops, (exiting sessions to re-enter separate portals).

### The core friction

The forced portal re-entry loop accounted for 45% of churn among high-value JPH accounts, while general self-service friction caused 25% of Energy-only cancellations.

### The opportunity

Unifying these experiences eliminates entry loops, surfaces jobs-to-be-done easily, and integrates contextual cross-selling without disrupting primary billing and service tasks.

## Customer types

<ol class="custom-ordered-list">
    <li>
        <strong>Energy-Only Customers (6.00M | 67.57%)</strong>
        <p>High login frequency focused on routine bill checks.<br><strong>Goal:</strong> Convert routine billing tasks into contextual cross-sell touchpoints for home cover.</p>
        <ul>
            <li><strong>Fixed Direct Debit:</strong> 61% of OAM visits (3.66M).</li>
            <li><strong>Payment on Receipt:</strong> 22% of OAM visits (1.32M).</li>
            <li><strong>Prepayment:</strong> 16% of OAM visits (0.96M).</li>
            <li><strong>Regular Payment Scheme:</strong> 1% of OAM visits (0.06M).</li>
        </ul>
    </li>
    <li>
        <strong>Services-Only Customers (1.52M | 17.12%)</strong>
        <p>Task-driven, low engagement until an active fault occurs.<br><strong>Goal:</strong> Surface ongoing HomeCare value and service reminders before annual renewals.</p>
        <ul>
            <li><strong>HomeCare Complete:</strong> 48% of OAM visits (729.6k).</li>
            <li><strong>HomeCare Essential:</strong> 26% of OAM visits (395.2k).</li>
            <li><strong>Kitchen Appliance Cover (KAC):</strong> 12% of OAM visits (182.4k).</li>
            <li><strong>Annual Boiler Cover:</strong> 8% of OAM visits (121.6k).</li>
            <li><strong>HomeCare Complete + KAC:</strong> 6% of OAM visits (91.2k).</li>
        </ul>
    </li>
    <li>
        <strong>Joint Product Holding (JPH) Customers (1.36M | 15.32%)</strong>
        <p>Highest-value segment facing severe portal friction.<br><strong>Goal:</strong> Eliminate navigation loops to unify Energy and Services management.</p>
        <ul>
            <li><strong>Behaviour:</strong> 90% of visits focus on Energy tasks (bill checks, meter reads); only 10% navigate to Services due to portal friction.</li>
        </ul>
    </li>
</ol>

## Discovery

To make sense of an ambiguous Online Account Management (OAM) setup, I interviewed stakeholders across Product, Engineering, and Commercial leads.

### Shared insights & common findings

Synthesising perspectives across all four stakeholders revealed core operational challenges alongside key strategic targets:
<ul>
    <li>
        <strong>Disjointed user journeys drive churn:</strong> Legacy platform silos forced Joint Product Holding (JPH) customers into separate portals. Clicking headers refreshed pages instead of providing logical navigation.
        <ul style="margin-bottom: 0;">
            <li><strong>Resolution:</strong> We committed to a single, mobile-first entry point that unifies Energy and Services into a cohesive architecture.</li>
        </ul>
    </li>
    <li>
        <strong>Task completion over promotional clutter:</strong> Commercial leads sought cross-selling opportunities, while Product Managers flagged static layouts and cognitive overload.
        <ul style="margin-bottom: 0;">
            <li><strong>Resolution:</strong> We prioritised critical jobs-to-be-done like bill checks and engineer bookings, placing cross-sell touchpoints strictly below operational task completion.</li>
        </ul>
    </li>
    <li>
        <strong>Technical and operational consistency:</strong> Engineering highlighted fragmented APIs and inconsistent UI component states across web properties.
        <ul style="margin-bottom: 0;">
            <li><strong>Resolution:</strong> The team agreed on unified error handling, skeleton loading states, and shared design tokens for navigation ease.</li>
        </ul>
    </li>
    <li><strong>Performance and satisfaction benchmarks:</strong> The current engineer booking conversion rate stands at ~67% against a ~70% target, with stakeholders setting an overall NPS target of +8 within 12 months post-launch.</li>
</ul>

### Energy Product Manager R.I.C.E. evaluation

The priority centred on resolving disjointed account access, cross-selling, and a simple unified dashboard.

<div class="overflow-x-auto my-8">
<table class="w-full border-collapse text-left text-sm text-zinc-900">
<thead>
<tr class="border-b border-zinc-200">
<th class="py-3 px-4 font-semibold">Top Opportunities</th>
<th class="py-3 px-4 font-semibold">Reach</th>
<th class="py-3 px-4 font-semibold">Impact</th>
<th class="py-3 px-4 font-semibold">Confidence</th>
<th class="py-3 px-4 font-semibold">Effort</th>
<th class="py-3 px-4 font-semibold">R.I.C.E. Score</th>
</tr>
</thead>
<tbody>
<tr class="border-b border-zinc-100">
<td class="py-3 px-4 font-medium">Unified Account View</td>
<td class="py-3 px-4">3</td>
<td class="py-3 px-4">3</td>
<td class="py-3 px-4">3</td>
<td class="py-3 px-4">2</td>
<td class="py-3 px-4 font-semibold">13.5</td>
</tr>
<tr class="border-b border-zinc-100">
<td class="py-3 px-4 font-medium">Cross-sell Integration</td>
<td class="py-3 px-4">3</td>
<td class="py-3 px-4">2</td>
<td class="py-3 px-4">3</td>
<td class="py-3 px-4">2</td>
<td class="py-3 px-4 font-semibold">9.0</td>
</tr>
<tr class="border-b border-zinc-100">
<td class="py-3 px-4 font-medium">Consistent Booking Exp.</td>
<td class="py-3 px-4">2</td>
<td class="py-3 px-4">2</td>
<td class="py-3 px-4">3</td>
<td class="py-3 px-4">2</td>
<td class="py-3 px-4 font-semibold">6.0</td>
</tr>
</tbody>
</table>
</div>

<div class="overflow-x-auto my-8">
<table class="w-full border-collapse text-left text-sm text-zinc-900">
<thead>
<tr class="border-b border-zinc-200">
<th class="py-3 px-4 font-semibold">Top Risks PDF+ 1</th>
<th class="py-3 px-4 font-semibold">Reach</th>
<th class="py-3 px-4 font-semibold">Impact</th>
<th class="py-3 px-4 font-semibold">Confidence</th>
<th class="py-3 px-4 font-semibold">Risk Level</th>
</tr>
</thead>
<tbody>
<tr class="border-b border-zinc-100">
<td class="py-3 px-4 font-medium">Address Mismatch</td>
<td class="py-3 px-4">3</td>
<td class="py-3 px-4">3</td>
<td class="py-3 px-4">2</td>
<td class="py-3 px-4 font-semibold">Critical</td>
</tr>
<tr class="border-b border-zinc-100">
<td class="py-3 px-4 font-medium">Dashboard Clutter</td>
<td class="py-3 px-4">2</td>
<td class="py-3 px-4">3</td>
<td class="py-3 px-4">2</td>
<td class="py-3 px-4 font-semibold">High</td>
</tr>
<tr class="border-b border-zinc-100">
<td class="py-3 px-4 font-medium">Cross-sell Clash with Tasks</td>
<td class="py-3 px-4">2</td>
<td class="py-3 px-4">3</td>
<td class="py-3 px-4">3</td>
<td class="py-3 px-4 font-semibold">High</td>
</tr>
</tbody>
</table>
</div>
<p><em>Scoring template was used across Product, Engineering and Commercial stakeholders.</em></p>

### OAM dashboard audit

Next, I audited the OAM test environment as a JPH customer. Two separate entry points greeted me, Energy and Services. Once I clicked Energy, I felt locked into a single experience, with no way to view or compare any Services information.

- **Disregarding Hick's Law:** Tiles filled the Energy dashboard, which supports quick scanning. However, there were too many, and the volume of complex tasks overwhelmed me. Squads worked independently, resulting in who gets the biggest space on the dashboard.
- **Little proximity and chunking:** The Services dashboard had a completely different UX and UI, again because the teams worked separately. The core information was present, but scanning was difficult. Sections appeared in bulleted format with no symmetry.

![Legacy Energy and Services dashboard entry points](/images/merged-old-entry.jpg)

### Card sorting: terminology & grouping architecture

#### Open card sort (talk out loud | 15 respondents)
- **Step 1:** Participants received all 43 feature, product, and service cards.
- **Step 2:** Participants grouped cards into logical clusters based on personal mental models.
- **Step 3:** Participants generated category labels for each group, agreeing on 7 primary headers:

> Tariff | Payments | Meters | Offers | Services | Help | Accounts

#### Closed card sort (sample survey | 208 respondents)
- **Step 1:** Participants received the same 43 card inventory.
- **Step 2:** Participants sorted every card under the 7 established category labels.

#### Final grouping taxonomy

<div class="overflow-x-auto my-8">
<table class="w-full border-collapse text-left text-sm text-zinc-900">
<thead>
<tr class="border-b border-zinc-200">
<th class="py-3 px-4 font-semibold">Tariff</th>
<th class="py-3 px-4 font-semibold">Payments</th>
<th class="py-3 px-4 font-semibold">Meters</th>
<th class="py-3 px-4 font-semibold">Offers</th>
<th class="py-3 px-4 font-semibold">Services</th>
<th class="py-3 px-4 font-semibold">Help</th>
<th class="py-3 px-4 font-semibold">Account</th>
</tr>
</thead>
<tbody>
<tr class="border-b border-zinc-100">
<td class="py-3 px-4">EV Tariff</td>
<td class="py-3 px-4">Make a payment</td>
<td class="py-3 px-4">Smart meter settings</td>
<td class="py-3 px-4">£300 off new boiler</td>
<td class="py-3 px-4">Book engineer service</td>
<td class="py-3 px-4">Help and Support</td>
<td class="py-3 px-4">Account details</td>
</tr>
<tr class="border-b border-zinc-100">
<td class="py-3 px-4">Switch tariff</td>
<td class="py-3 px-4">Payment history</td>
<td class="py-3 px-4">Meter reading history</td>
<td class="py-3 px-4">15% off boiler cover</td>
<td class="py-3 px-4">Book engineer repairs</td>
<td class="py-3 px-4">Boiler self-fix help</td>
<td class="py-3 px-4">Documents</td>
</tr>
<tr class="border-b border-zinc-100">
<td class="py-3 px-4">Renew tariff</td>
<td class="py-3 px-4">Repayment plan</td>
<td class="py-3 px-4">Submit meter reading</td>
<td class="py-3 px-4">PeakSave</td>
<td class="py-3 px-4">Book engineer install</td>
<td class="py-3 px-4">Energy saving tips</td>
<td class="py-3 px-4">Cover Summary</td>
</tr>
<tr class="border-b border-zinc-100">
<td class="py-3 px-4">View tariff details</td>
<td class="py-3 px-4">Set up Direct Debit</td>
<td class="py-3 px-4">Upgrade to smart meter</td>
<td class="py-3 px-4">Boiler service £79</td>
<td class="py-3 px-4">Solar panels</td>
<td class="py-3 px-4">Emergency call-out</td>
<td class="py-3 px-4">Marketing Preferences</td>
</tr>
<tr class="border-b border-zinc-100">
<td class="py-3 px-4"></td>
<td class="py-3 px-4">Direct Debit Review</td>
<td class="py-3 px-4">Energy usage</td>
<td class="py-3 px-4">Refer a Friend</td>
<td class="py-3 px-4">Boiler details/specs</td>
<td class="py-3 px-4"></td>
<td class="py-3 px-4">Tell us you're moving</td>
</tr>
<tr class="border-b border-zinc-100">
<td class="py-3 px-4"></td>
<td class="py-3 px-4">Manage Direct Debit</td>
<td class="py-3 px-4">Smart Export Guarantee</td>
<td class="py-3 px-4">Air Source Heat Pump</td>
<td class="py-3 px-4">Change cover</td>
<td class="py-3 px-4"></td>
<td class="py-3 px-4">Cover renewal</td>
</tr>
<tr class="border-b border-zinc-100">
<td class="py-3 px-4"></td>
<td class="py-3 px-4">Invoices</td>
<td class="py-3 px-4"></td>
<td class="py-3 px-4">Join membership</td>
<td class="py-3 px-4">Cover renewal</td>
<td class="py-3 px-4"></td>
<td class="py-3 px-4"></td>
</tr>
<tr class="border-b border-zinc-100">
<td class="py-3 px-4"></td>
<td class="py-3 px-4">Top-up prepay meter</td>
<td class="py-3 px-4"></td>
<td class="py-3 px-4"></td>
<td class="py-3 px-4">Cover summary</td>
<td class="py-3 px-4"></td>
<td class="py-3 px-4"></td>
</tr>
<tr class="border-b border-zinc-100">
<td class="py-3 px-4"></td>
<td class="py-3 px-4">View/Download Bill</td>
<td class="py-3 px-4"></td>
<td class="py-3 px-4"></td>
<td class="py-3 px-4"></td>
<td class="py-3 px-4"></td>
<td class="py-3 px-4"></td>
</tr>
<tr class="border-b border-zinc-100">
<td class="py-3 px-4"></td>
<td class="py-3 px-4">Balance Tracker</td>
<td class="py-3 px-4"></td>
<td class="py-3 px-4"></td>
<td class="py-3 px-4"></td>
<td class="py-3 px-4"></td>
<td class="py-3 px-4"></td>
</tr>
</tbody>
</table>
</div>

### What would users call the dashboard page? 

The energy dashboard used ‘Home’ as its label, and Services used ‘Overview’. When asked what to name the dashboard page, participants overwhelmingly selected "Overview", defining it as a clear snapshot of energy usage, costs, active cover, and account status in one place.

![Dashboard name preference vote](/images/merged-overview-name-vote.jpg)
*User Testing survey with 208 participants.*

97% of respondents voted in favour of Overview as the preferred name for the dashboard landing page.

### Tree testing: navigation hierarchy validation

Card sorting helped me discover how users grouped content initially, and now I wanted to run a tree test to ask 200 participants to follow text links and reach the targeted destinations.

#### The stimulus

![Tree testing hierarchy stimulus](/images/merged-tree-test-stimulus.jpg) 

#### Key insights

**The Problem:** While 72% of respondents reached their destination successfully, 28% failed by clicking top-level category labels instead of sub-links (e.g., clicking "Tariff" directly when looking for new tariff deals).  
**Recommendation:** Category labels lacked visual distinction from sub-navigation items, causing false clicks. They needed to explicitly differentiate from the sub-navigation items. Naming convention, sub-menu categories and typography styling came to mind.

> Overview | Payments | Tariffs | Services | Meters | Offers | Help

*The agreed recommended dashboard navigation. ‘Accounts’ was a siloed entry point.*

### Finding our vanilla Energy customers

Now that I had a view of the information architecture, I wanted to focus on the priority jobs our core energy customers carry out. With help from the data insights team, I identified our vanilla energy customers and the top 15 most-visited pages when logged into their OAM.

#### Pages most visited

The data showed that regardless of fuel type, payment type, or meter type, the most visited pages energy customers visited were focused on bills, payments and energy usage.

For a full breakdown of the Energy user profiles and top pages visited, [click here](https://docs.google.com/spreadsheets/d/1OyZT7UedSvIYsLaD3qyfUhfrT-2c3-STctfdq7qgJvM/edit?usp=sharing).

### Finding vanilla Services customers

I then analysed 12 months of Adobe Analytics data to map product holdings, CTRs, and engagement across 1.7M JPH and 2.5M Services-only login sessions.

![Services Adobe Analytics overview](/images/merged-services-adobe-analytics.jpg)

#### Top tasks & funnel friction:
- **Book an engineer:** Primary action driving 24% of annual visits (18.5% CTR). Holds a 71% completion rate (29% fallout).
- **View cover details:** Secondary action accounting for 12.3% of visits (9.6% CTR).

#### Key user behaviours:
- **Services only:** Task-driven with high intent to resolve specific home issues.
- **Joint Product Holding (JPH):** Exhibit mixed behaviour, frequently switching between Energy billing and Services journeys.
- **Shared actions:** Both segments primarily book engineers, fix faults, check cover details, and manage routine tasks like viewing invoices and account documents.

### Jobs-to-be-done priority ranking survey

To align quantitative analytics with qualitative user expectations, I ran ranking surveys across 516 British Gas customers. Participants ranked OAM tasks into fixed priority buckets (Top, Medium, Low).

<div class="overflow-x-auto my-8">
<table class="w-full border-collapse text-left text-sm text-zinc-900">
<thead>
<tr class="border-b border-zinc-200">
<th class="py-3 px-4 font-semibold">Segment</th>
<th class="py-3 px-4 font-semibold">Survey variant</th>
<th class="py-3 px-4 font-semibold">Type variant</th>
</tr>
</thead>
<tbody>
<tr class="border-b border-zinc-100">
<td class="py-3 px-4 font-medium">Energy-Only</td>
<td class="py-3 px-4">3 ranking surveys</td>
<td class="py-3 px-4">Fixed Direct Debit 2. PoR 3. PAYG</td>
</tr>
<tr class="border-b border-zinc-100">
<td class="py-3 px-4 font-medium">Services-Only</td>
<td class="py-3 px-4">1 ranking survey</td>
<td class="py-3 px-4">Single profile, tasks are identical across all cover types</td>
</tr>
</tbody>
</table>
</div>

#### Energy customer segment (3 distinct surveys)

Because billing dictates user needs, I deployed 3 separate surveys based on payment method:
- **Fixed Direct Debit (FDD, n=200):** Dual-fuel smart meter users dominated this group (74% smart meters, 66% monthly OAM logins). Primary jobs centred on checking tariff renewal dates, tariff renewals, viewing bill history, and verifying balance status to ensure Direct Debits covered energy usage.
- **Payment on Receipt (PoR, n=167):** Quarterly-billed customers prioritised immediate transactional tasks. The top 3 ranked jobs were submitting meter readings, making payments, and checking tariff renewal dates. Marketing offers ranked near the bottom.
- **Prepayment (PAYG, n=149):** Customers with smart or traditional prepayment meters prioritised affordability control. Top jobs were checking latest bill charges, viewing energy usage, reviewing meter history, and logging in to top up.

#### Data vs survey ranking insights

Comparing Adobe Analytics (actual behaviour) against survey rankings (expected behaviour) revealed some alignment with critical nuances:
- **High correlation on core tasks:** Both data and user rankings confirmed that billing, usage tracking, and engineer bookings form the primary OAM entry drivers across all segments.
- **Balance & tariff visibility gap:** Users ranked checking account balances and reviewing tariff renewal dates higher in expectations than what data showed. This proved that legacy navigation obscured these items rather than users lacking intent.
- **Promotional mismatch:** Marketing promotions and cross-sell banners consistently ranked in the bottom 5 across all survey cohorts, proving that top-heavy sales cards actively create friction during task completions.
- **JPH profile resolution:** Due to insufficient historical data for JPH cohorts, I gained data team sign-off to synthesise the top-ranked Energy and Services profiles. This established 40 comprehensive profiles to drive the unified dashboard taxonomy.

## Define

I synthesised the research into a single mission, **“link priority jobs-to-be-done to specific customer profiles to determine exact dashboard content hierarchies.”**

Without hesitation, I began mapping every vanilla customer, their priority jobs-to-be-done and their product holdings. Each vanilla customer considered both the quantitative and qualitative findings.

### Structure of the core customer profiles

**Profile:** Fuel type + Meter type + Payment type + Tariff type<br>
**Jobs-to-be-done:** Priority list of core jobs<br>
**In-life jobs-to-be-done:** Priority list of in-life jobs 

I mapped 39 customer profiles in total across all possible product combinations:
- **7 Energy profiles:** 15 top-ranked jobs-to-be-done. Led by, meter readings, balance checks, billing and payments, tariff renewal tracking, and energy usage.
- **14 Services profile:** As tasks were identical across cover types, I focused on a single profile encompassing 19 core jobs-to-be-done. This was dominated by emergency repair bookings, engineer tracking, and excess fee clarity.
- **18 JPH profile:** To design for JPH customers without historical data, I combined the vanilla Energy profile (15 jobs-to-be-done) and the Services profile (19 jobs-to-be-done). This hybrid model served as the primary benchmark for the unified dashboard layout.

Designing for the following JPH profile:

**Energy product holdings:** Dual fuel, Smart meter, Fixed Direct Debit, Tariff type.<br> 
**Services product holdings:** HomeCare Complete and Kitchen Appliance Cover.

For a full breakdown of user profile segments and top jobs completed, [click here](https://docs.google.com/spreadsheets/d/1qGbvSKaon7Ka9UlP1Xu41fACL2YSc-kPHIZQ8dpzbTU/edit?usp=sharing).

## Ideation

Kicking off the exploration with the new dark mode design system.

I collaborated with the design system team to align on tokens, component usage, and pattern consistency for the emerging system. We agreed that any new journeys, interactions, or components developed during this project would feed directly into the system's evolution.

### Applying psychological UX laws

Once I had familiarised myself with the dark mode system, I began structuring the complex JPH dashboard without overwhelming users. I anchored layout decisions in four UX principles and ten design principles: 
- **Law of Proximity:** Grouped related Energy and Services cards into logical visual chunks to speed up scanning.
- **Choice Overload:** Restricted top-tier dashboard cards strictly to high-priority JTBDs.
- **Fitts's Law:** Balanced primary button placements against text links to ensure effortless mobile tapping.
- **Hick's Law:** Prominently featured Next Best Action recommendations so users could act without hesitation.

### Core relationship design principles
1. **Start with reassurance:** Show status health before details.
2. **Highlight what matters:** Prioritise urgent risks and actions.
3. **Explain, don't display:** Translate raw figures into plain meaning.
4. **Act as one company:** Unify Energy, Payments, and HomeCare.
5. **Make action simple:** Provide clear, immediate next steps.
6. **Be proactive and timely:** Flag renewals before friction occurs.
7. **Make protection visible:** Highlight ongoing cover value.
8. **Use plain language:** Communicate calmly about finances.
9. **Give customers control:** Streamline self-service management.
10. **Build trust through transparency:** Be clear on charges and updates.

![Merged exploration dashboard designs](/images/merged-exploration-designs.jpg)

### Using Copilot as a stepping stone

Using Copilot to rapidly ideate dense layout concepts with British Gas dark mode tokens highlighted an initial overload of primary buttons and a lack of negative space. Analysing these trade-offs validated our hierarchy rules and significantly accelerated my iteration cycle.

![Copilot-generated dashboard explorations](/images/merged-copilot-designs.jpg)
*Copilot dashboard page designs. Good use of chunking, but too many primary buttons and no use of negative space.*

## Design

Three designs, "Simple", "Detailed" and "Themed", were built for a preference moderated test.

All three shared a vertical left-hand navigation, integrated AI support, and a British Gas app download nudge. 

### 1. Simple design
- **Layout plan:** Reduced choice overload by using a strict vertical hierarchy led by a hero banner for Next Best Actions.
- **Content hierarchy:** Below the hero banner, single consolidated cards housed core Energy and Services tasks. Then the business cross-sell items sat in a horizontal carousel at the bottom.

![Simple dashboard design concept](/images/merged-simple-design.jpg)

### 2. Detailed design
- **Layout plan:** Focused on visual data to build customer trust.
- **Content hierarchy:** Led directly with Energy billing status, usage graphs, and balance tracking. In-life action cards, such as tariff renewals and upcoming engineer visits, followed in logical, high-contrast chunks.

![Detailed dashboard design concept](/images/merged-detailed-design.jpg)

### 3. Themed design
- **Layout plan:** Grouped related products under themes (e.g., Bills & Payments, Your Products).
- **Content hierarchy:** Led with urgent in-life actions, followed by thematic cards. Generous spacing between theme blocks aimed to ease cognitive load during decision-making.

![Themed dashboard design concept](/images/merged-themed-design.jpg)

## Testing

Moderated usability testing across all three concepts to evaluate scannability, task completion speed, and visual clarity.

![Usability testing sessions overview](/images/merged-user-testing.jpg)

### Moderated usability testing overview
**Participant sample:** Tested 12 British Gas customers (mix of Joint Product Holding and single-product users). <br>

**Prototype feedback and ranking:**
  - **Detailed design (Ranked #1):** Elicited the highest participant preference. Users praised immediate visibility of billing data, usage trends, and clear status cards, noting it felt "transparent and reassuring."
  - **Themed design (Ranked #2):** Valued for its clean visual separation of Bills & Payments versus Your Cover. However, participants felt there was a lot to absorb.
  - **Simple design (Ranked #3):** Although easy to understand, it was criticised for serving business priorities over customer needs. Financial information lacked clarity.

### Iterative designs

Based on the test insights, I rapidly evolved the Themed design by creating the following customer intent hierarchical structure:

<div class="overflow-x-auto my-8">
<table class="w-full border-collapse text-left text-sm text-zinc-900">
<thead>
<tr class="border-b border-zinc-200">
<th class="py-3 px-4 font-semibold">Level 1</th>
<th class="py-3 px-4 font-semibold">Level 2</th>
<th class="py-3 px-4 font-semibold">Level 3</th>
<th class="py-3 px-4 font-semibold">User Intent Context</th>
</tr>
</thead>
<tbody>
<tr class="border-b border-zinc-100">
<td class="py-3 px-4 font-medium">DASHBOARD</td>
<td class="py-3 px-4">Understand</td>
<td class="py-3 px-4">Status</td>
<td class="py-3 px-4">"Is everything okay?"</td>
</tr>
<tr class="border-b border-zinc-100">
<td class="py-3 px-4 font-medium">DASHBOARD</td>
<td class="py-3 px-4">Act</td>
<td class="py-3 px-4">Things To Do</td>
<td class="py-3 px-4">"What needs action?"</td>
</tr>
<tr class="border-b border-zinc-100">
<td class="py-3 px-4 font-medium">DASHBOARD</td>
<td class="py-3 px-4">Do</td>
<td class="py-3 px-4">My Shortcuts</td>
<td class="py-3 px-4">"Let me quickly complete a task."</td>
</tr>
<tr class="border-b border-zinc-100">
<td class="py-3 px-4 font-medium">DASHBOARD</td>
<td class="py-3 px-4">Manage</td>
<td class="py-3 px-4">Energy</td>
<td class="py-3 px-4">"Let me access my jobs-to-be-done."</td>
</tr>
<tr class="border-b border-zinc-100">
<td class="py-3 px-4 font-medium">DASHBOARD</td>
<td class="py-3 px-4">Manage</td>
<td class="py-3 px-4">HomeCare</td>
<td class="py-3 px-4">"Let me access my jobs-to-be-done."</td>
</tr>
<tr class="border-b border-zinc-100">
<td class="py-3 px-4 font-medium">DASHBOARD</td>
<td class="py-3 px-4">Get Help</td>
<td class="py-3 px-4">Help & Support</td>
<td class="py-3 px-4">"I need help now."</td>
</tr>
</tbody>
</table>
</div>

![Iterated dashboard design hierarchy](/images/merged-iterative-design.jpg)
*Iterations show a clean visual design with a same-level taxonomy: Understand | Act | Do | Manage | Get Help.*

## Outcomes

Testing gave a clear direction: customers chose the design that put information first, and the iterated structure now follows that order.

### The impact metrics (30 days post-launch)

While long-term retention will be tracked over 12 months toward an NPS target of 8, initial analysis across the 8.88 million customer base demonstrates clear early gains: 

<ul>
    <li>
        <strong>Churn reduction & friction removal</strong>
        <ul style="margin-bottom: 0;">
            <li><strong>Total JPH churn rate:</strong> Baseline JPH churn stands at 5.5% annually across 1.36M customers (74,800 cancellations/year).</li>
            <li><strong>Cause of churn:</strong> Usability audits revealed that 45% of those cancellations were caused directly by portal navigation loops (forcing users to log out, return to the main landing page, and re-enter a new portal).</li>
            <li><strong>Result:</strong> Eliminating this loop yielded a 3% relative reduction in overall JPH churn in Month 1. Saving roughly 187 account cancellations in the first 30 days by reducing friction within the portal-loop segment.</li>
        </ul>
    </li>
    <li><strong>Contact reduction:</strong> Surfacing proactive balance breakdowns and emergency repair entry points on the main view delivered a 4.5% reduction in support call volume (~9,000 calls saved) across primary billing (126k/mo baseline) and breakdown (76k/mo baseline) drivers in Month 1.</li>
    <li><strong>Engineer booking conversion:</strong> Single-click appointment access boosted engineer booking completion by +1.8% in Month 1 (moving baseline completion from 67.0% to 68.2% toward the ~70% business target).</li>
    <li><strong>Commercial cross-selling:</strong> Moving secondary promotional cards below core operational tasks protected task completion while maintaining engagement without triggering user frustration.</li>
</ul>

### Retrospective

With additional time, I would run direct testing with JPH cohort surveys and establish an initial JPH NPS baseline. Further research is also needed on meter reading discoverability and AI feature trust. The next immediate steps are validating the updated navigation taxonomy with broader user groups and expanding the unified card layout to single-product customer accounts.

### Engineering handoff strategy

The Lead Engineer asked for unified error messages, a pre-loading skeleton page and consistent loading states, so I would specify each in the handoff.