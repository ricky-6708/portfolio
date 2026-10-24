# Never lose a conversion with EE wallet pay

An improved payment experience for EE, built to increase checkout conversion, reduce churn, and cut card-related customer support calls.

## Role & scope

- **Client:** EE Telco
- **Platform:** iOS App
- **Role:** Senior Product Designer
- **Stack:** Figma, Mural, UserTesting.com
- **Timeline:** 3 weeks
- **Squad:** Cross-functional
- **Year:** 2022

![EE Wallet Pay saved cards hero](/images/saved-cards-hero-banner.jpg)

## Executive summary

EE customers had no option to save payment cards and had no reliable way to manage them. I led design during a three-week MVP launch that let customers view, add, update and remove cards across the Purchase and Manage Wallet journeys. This also included working within the constraints of a third-party iframe.

### Key metrics

- 4.2% to 4.62% checkout conversion (10% increase, 3 months post-launch)
- 2-week design-to-production sprint
- 20% reduction in inbound customer support calls per month

![Final EE saved cards screens](/images/saved-cards-final-screens.jpg)
*Final designs showing both the Purchase and Manage screens.*

## Business challenge

Existing EE customers with a mobile, device or broadband plan needed to manage saved payment cards without leaving the MyEE app. EE's business goal was to drive digital revenue, lower transaction failures and maintain steady Monthly Recurring Revenue (MRR) by reducing a single manual card upkeep.

Before this project, customers could not store or switch between multiple cards. A default card that had expired meant an abandoned checkout, and an expired card ahead of a billing cycle meant involuntary churn, or a broken subscription. Consequently, leading to a support call EE didn't need to take.

![Saved cards problem statements](/images/saved-cards-problem-statements.jpg)

## Discovery

### Day 1-2

Fifteen days of iframe constraints stood between the team and a saved-cards feature that actually reduced drop-offs rather than adding to it. A lean, highly collaborative design workflow was deployed within this compressed timeline. This bypassed lengthy discovery in favour of immediate, evidence-based technical and usability validation.

#### iframe walkthrough 

I opened the task with technical deep-dives alongside the frontend and backend developers to understand the Buynet iframe plugin, the third-party module driving both the Purchase and Manage journeys. This surfaced exactly which CSS overrides and layout changes were possible, and which backend logic boundaries could not move.

![Buynet iFrame end-to-end walkthrough](/images/saved-cards-walkthrough-demo-1.jpg)
*End-to-end walkthrough of the Buynet iframe.*

Reviewing the developer walkthroughs alongside our internal Buynet stakeholder, who confirmed several strong limits. Most significantly, the iframe had no built-in way to add a new card from the Manage Wallet screen. Cards can only be added at the point of payment, which reshaped how the Manage journey needed to be designed for customers.

![Saved cards walkthrough: adding a card](/images/saved-cards-walkthrough-demo-2.jpg)

#### iframe findings

- Removing a card is possible
- Inside the Manage journey, adding a card is not feasible
- The wallet can carry a maximum of 5 saved entries per customer account

As the Product Designer, I knew **I needed to advocate for a better user experience, so I escalated the missing "add-card" feature** directly to the engineering and product architecture team. I framed the problem not just as a design preference, but as a critical business risk that would increase inbound customer support calls. I posed a question:
> “Was this a hard technical limit of the Buynet system, or was it a legacy scope decision that EE could actively influence?”

#### How we solved it

1. **EE User Interface:** User taps "Add Card"
2. **EE Backend Integration:** Asks Buynet for a safe £0 session
3. **Secure Buynet Embedded iFrame:** Opens a secure "glass window". User enters card details safely
4. **Digital Token Saved:** Buynet swaps card for a secure ticket. EE saves the ticket for future bills

By bringing the engineering teams together, we successfully overturned the initial limitation. We collaborated on a clever workaround that allowed the secure input fields to load right inside the Manage screen:
- **The £0 Auth:** Clicking "Add Card" triggers a behind-the-scenes call to Buynet, asking for a zero-value (£0) authorisation.
- **The Security:** This £0 request tricks the system into thinking a purchase is happening. It opens a secure, embedded window (the iframe) right inside the EE account screen. The user types their card details into this window, meaning EE never actually sees or touches the raw card numbers.
- **The Digital Ticket:** Once Buynet confirms the card is valid, it swaps the sensitive card details for a secure digital token. Buynet sends this hacker-proof token back to EE, which is saved to the user’s profile for all future payments.

> “Users can now update their details at their own convenience.”

#### The outcome

By challenging the initial technical constraint, I bridged the gap between our design vision and the technical constraints of our payment gateway. Instead of an incomplete Manage feature, we delivered a seamless, proactive payment experience. Users can now update their details at their own convenience. In turn, this protects recurring revenue and removes friction before it ever goes live.

#### Competitor analysis

I benchmarked Amazon, Nike, eBay, Argos and Currys against five factors: Visual hierarchy, card management location, CVV re-verification pattern, default card selection, and Express Payment consistencies. Here’s what I found:

<div class="overflow-x-auto my-8">
<table class="w-full border-collapse text-left text-sm text-zinc-900">
<thead>
<tr class="border-b border-zinc-200">
<th class="py-3 px-4 font-semibold">Feature / UX Factor</th>
<th class="py-3 px-4 font-semibold">Amazon</th>
<th class="py-3 px-4 font-semibold">Nike</th>
<th class="py-3 px-4 font-semibold">eBay</th>
<th class="py-3 px-4 font-semibold">Argos</th>
<th class="py-3 px-4 font-semibold">Currys</th>
</tr>
</thead>
<tbody>
<tr class="border-b border-zinc-100">
<td class="py-3 px-4 font-medium">Visual Hierarchy</td>
<td class="py-3 px-4">Functional, high-density list layout emphasising primary card + "Buy Now" defaults.</td>
<td class="py-3 px-4">Clean, minimalist card chips with brand badges (Visa/Mastercard).</td>
<td class="py-3 px-4">Modular list view prioritising PayPal integration alongside saved cards.</td>
<td class="py-3 px-4">Compact form factor integrated with Sainsbury’s digital ecosystem.</td>
<td class="py-3 px-4">Functional, step-based form inputs with list selectors.</td>
</tr>
<tr class="border-b border-zinc-100">
<td class="py-3 px-4 font-medium">Card Management Location</td>
<td class="py-3 px-4">Deeply embedded in Account Settings ("Your Payments") + inline modal during checkout.</td>
<td class="py-3 px-4">Account Profile + Dynamic Inline Checkout edit options.</td>
<td class="py-3 px-4">Dedicated "Payments" tab under Account Settings + inline overlay at Checkout.</td>
<td class="py-3 px-4">In-account settings & checkout step-by-step accordion.</td>
<td class="py-3 px-4">Account settings tab + Checkout inline selection.</td>
</tr>
<tr class="border-b border-zinc-100">
<td class="py-3 px-4 font-medium">CVV Re-verification</td>
<td class="py-3 px-4">Adaptive Risk Assessment: Frequently bypasses CVV for trusted devices; prompts on new addresses.</td>
<td class="py-3 px-4">Biometrics First: Uses FaceID/TouchID before requiring manual CVV input.</td>
<td class="py-3 px-4">Prompts for CVV on card changes; saves authorisation tokens across guest/registered flows.</td>
<td class="py-3 px-4">Standard CVV field prompt before finalising order.</td>
<td class="py-3 px-4">Sequential CVV input field within the step 3 checkout container.</td>
</tr>
<tr class="border-b border-zinc-100">
<td class="py-3 px-4 font-medium">Default Card Selection</td>
<td class="py-3 px-4">1-Click Default: Persists global default across account; quick toggle radio buttons.</td>
<td class="py-3 px-4">Sets last used card automatically; tap triggers bottom-sheet modal.</td>
<td class="py-3 px-4">Toggle for "Preferred payment method" stored per buyer account.</td>
<td class="py-3 px-4">Remembers preferred card; linked with Nectar loyalty setup.</td>
<td class="py-3 px-4">Radio button list selection during checkout step.</td>
</tr>
<tr class="border-b border-zinc-100">
<td class="py-3 px-4 font-medium">Express Payment consistency</td>
<td class="py-3 px-4">Prioritises 1-Click Checkout and Amazon Pay / Gift Card balance above exterior wallets.</td>
<td class="py-3 px-4">Apple Pay / Google Pay prioritised above saved credit cards.</td>
<td class="py-3 px-4">Deep native integration with PayPal / PayPal Pay in 3, Apple Pay, and Google Pay.</td>
<td class="py-3 px-4">Apple Pay integrated into quick checkout options.</td>
<td class="py-3 px-4">Apple Pay supported alongside traditional card lists.</td>
</tr>
</tbody>
</table>
</div>

Amazon and Nike stood out for minimising friction through 1-click defaults and bottom-sheet card switching, while Currys' step-based accordion felt dated by comparison. This shaped my direction toward visual, card-shaped selectors over generic radio-button lists.

![Saved cards competitor analysis](/images/saved-cards-competitor-analysis.jpg)

## Define

### Day 3

Technical constraints and stakeholder priorities were mapped into two distinct user flow journeys, giving the team a clear view of all the features marked as "must" for the MVP.

#### Purchase journey
- View Saved Card List
- Pay with Stored Card (CV2 Verification)
- Add & Pay with New Card

#### Manage journey
- View Saved Card List
- Remove a Saved Card
- Remove an Expired Card
- Update an Expired Card (Expiry/Details)
- Update a Saved Card (Expiry/Details)
- Set a card as the Default Card

#### The Pivot 

Stakeholders initially wanted customers to be able to update or remove a card mid-purchase. **I challenged this by stating that, “Adding that flexibility to the checkout step would risk conversion rate.”** I therefore proposed a compromise where the Purchase journey would only let customers add a new card and pay with it. Any editing, removal, and expired-card recovery moved into the Manage journey. I also combined "edit" and "update" into a single feature, since they were seen as the same action.

> “Adding that flexibility to the checkout step would risk the sales conversion rate.”

## Ideation

### Days 4 and 5

Mapping every card permutation, such as subscription, non-subscription linked cards, and expired cards, converted the technical boundaries into flows the engineering team could build.

#### The Explorations 

Whilst mapping the full user flows across both journeys, I covered edge cases including declined payments, reassigning a card tied to multiple subscriptions, and handling an expired card at checkout without failing the transaction. User stories from the epic and acceptance-criteria documents anchored each flow to a specific "as a customer, I want, so that" statement, which kept scope focused against what the iframe could actually support.

![Saved cards user stories](/images/saved-cards-user-stories.jpg)

#### No expired cards in the Purchase Journey 

Within the iframe's boundaries, I persuaded stakeholders not to surface an expired card during the purchase phase, moving that responsibility entirely into Manage. A customer with one saved card sees it, expired or not, but customers with multiple cards are steered toward whichever is valid, keeping the checkout funnel clean. Cards tied to an active subscription can't be deleted outright, so a modal intercepts the request and asks the customer to nominate a replacement card first, protecting the linked subscription(s) from an accidental removal.

![Manage saved cards user flow](/images/saved-cards-manage-saved-cards-user-flow-1.jpg)
![Purchase and manage saved cards user flow](/images/saved-cards-pay-manage-saved-cards-user-flow-2.jpg)
*Only core flows shown to keep ths case study short. I created flows for all permutations.*

## Design

### Day 7

High-fidelity MyEE app prototypes ready for user testing.

#### The build

I built the "Manage Wallet Journey" and "Payment Journey" prototypes using EE's existing design components wherever the iframe's constraints would allow for custom styling. The goal was to keep the saved card UI visually consistent with the rest of MyEE rather than looking like a bolted-on plugin. 

Saved cards are presented as recognisable digital cards, brand logo, nickname, masked number, rather than a generic form list. The default card always sits at the top of the vertical stack with a clear label in the Manage Wallet Journey. The payment journey features intuitive radio buttons that allow users to select their preferred card instantly. This quick-select process minimises friction and ensures a fast, uninterrupted checkout.

#### The CV2 security loop

PCI regulations mean only the issuing bank can store CV2 data, so EE's checkout asks only for the 3-digit code at the point of payment rather than re-collecting full card details. This kept the security requirement visible to the customer without adding steps.

#### Expired card handling

An expired card in the Manage Wallet gets an inline message and a red UI treatment prompting the customer to edit or remove it. This warning deliberately never appears during Purchase, protecting the compromise reached with stakeholders to remove friction at all costs.

### Prototype walkthrough

<div style="margin-top: -20px; margin-bottom: 48px;">
  <a href="https://www.figma.com/proto/BMGX1JYkKAdMlEEqctE0kw/BT-EE-Buynet-Case-Study?node-id=4709-24769&p=f&t=jTqSQrhn85tEu54v-8&scaling=scale-down&content-scaling=fixed&page-id=4709%3A17789&starting-point-node-id=4709%3A24769&show-proto-sidebar=1&hide-ui=1" target="_blank" rel="noopener noreferrer" style="display: block; position: relative; text-decoration: none; border: none; padding: 0; background: transparent;" class="group">
    <img src="/images/saved-cards-prototype.png" alt="EE Saved Payment Cards - Interactive Prototype Walkthrough" style="width: 100%; height: auto; display: block; border-radius: 16px; border: none; margin: 0; padding: 0;" />
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

### Day 8 to 10

#### The testing setup

- **Method:** Moderated usability testing, remote sessions across the MyEE app 
- **Participants:** 12 active EE customers with an existing saved card on their account 
- **Focus areas:** Interaction cost of switching between saved cards, whether users noticed multi-subscription card ties, and whether the CV2-only verification step caused validation anxiety or not. 

![Saved cards usability testing](/images/saved-cards-user-testing.jpg)

#### Key usability findings

Usability testing with 12 participants confirmed the CV2-only step didn't slow users down. Instead, it functioned as a trust signal rather than friction.

- Card descriptors lacked visual consistency on the 'Make a payment' screen. Cards were shown as a plain selector list rather than recognisable card visuals, making it harder for users to distinguish one saved card from another at a glance.
- Participants expected a way to set a new card as default at the point of adding it, rather than adding the card first and setting it as default in a separate step afterwards.

#### Iterative changes

- Replaced the plain card selector list with visual, card-shaped components (colour, brand logo, nickname, masked number) on the 'Make a payment' screen, bringing saliency between the cards. The radio buttons were maintained.
- Added a 'Set to default' checkbox to the add-new-card flow, letting users nominate a default without a separate follow-up step.

![Saved cards user testing iterations](/images/saved-cards-user-test-iterations.jpg)

## Outcomes

The new saved-cards experience shipped on time and measurably improved checkout completion within three months.

- **10% Conversion rate increase** (3 months post-launch)
- **10 days Delivery** (Design-to-production sprint)
- **20% Call reduction** (Fewer monthly inbound support calls)

#### Retrospective

With more time, I would’ve liked to understand customers’ mental models when using wallet-type apps, allowing me to better gauge what their expectations are and so design a solid UX grounded in behavioural science and a sound layout whilst considering the iframe.

#### Engineering handoff

Final designs, including every edge case and error state, reached the development squad five days before launch. However, it was imperative that the engineers collaborated with me from the very beginning, otherwise, we would not have met the tight deadline. Daily squad catch-ups and weekly alignment reviews also kept the build on track for an MVP release five days after handoff.