export const PORTFOLIO_TAXONOMY = {
  navigation: ["Work", "About", "Contact"],
  
  aboutPage: {
    path: "content/about/index.md",
    layout: "Editorial single-column flow with generous negative space",
    heroSection: {
      headline: "I’m Ricky, a Senior Product Designer who loves solving complex problems.",
      bio: "I’m a Senior Product Designer based in London with over 15 years of experience across telecoms, energy, automotive, fintech, subscription services, ecommerce and smart TV. Moving between sectors allows me to bring a different lens to every brief. My last role was at British Gas, where I led the design for some of its most-used products and services. I integrate AI deeply into my workflow to accelerate research, prototyping, and synthesis, treating AI as a drafting engine while retaining rigorous oversight as quality controller.",
      columnFormat: "2 column grid (1:2 ratio)",
      imagePosition: "Right column",
      bioPosition: "Left column",
      imageFile: "about-ricky.jpg",
      imageConstraint: "Must not be too small",
    },
    sections: [
      "Bio & Background summary",
      "Core Expertise / Skills list",
      "Experience timeline / Work history",
      "Education & Professional Development",
    ],
    skillsSection: {
      layout: "2 column grid with width split evenly (50/50 distribution)",
      categories: [
        "Design methods",
        "Leadership",
        "Team collaboration",
        "Tool stack",
        "Soft skills",
        "Hard skills",
      ],
    },
    achievements: [
      "British Gas, quote journey: cut a 16-step journey to 7, raised sales conversion from 6% to 8% (33% more customers acquired on the same traffic), and cut time to quote from 3m 26s to 1m 10s.",
      "British Gas, app billing: cut paperless billing calls by 20% in three months, preventing 55,000 calls and saving £220,000.",
      "EE, Cyber Security: reached an 11.2% sales conversion to paid antivirus plans among qualified ID Checker users, 3.5% above target. Users rated the purchase journey 6.6/7 and the breach check 6.8/7.",
      "EE, Saved Cards: shipped an MVP in three weeks, lifted checkout conversion from 4.2% to 4.62% and cut inbound support calls by 20%.",
      "Orange, Recycle: raised the collection of used phones from 15% to 28%.",
    ],
    trustedByLogos: [
      "about-bg-logo.png",
      "about-ee-logo.png",
      "about-orange-logo.png",
      "about-emirates-logo.png",
      "about-axa-logo.png",
      "about-nissan-logo.png",
      "about-hsbc-logo.png",
      "about-adidas-logo.png",
    ],
    testimonialCards: {
      layout: "Exact match to https://www.joemalloryskinner.design/about: Clean flat containers with thin neutral borders and soft rounded corners, fixed height and width dimensions",
      interaction: "Each card expands vertically when the 'Read more' text link is clicked",
      horizontalScrollerControls: ["Left scroll button", "Right scroll button"],
      components: [
        "Client logo image",
        "Quote body text (Satoshi font, leading-relaxed)",
        "Recommender name & role attribution",
        "Company name metadata (uppercase caption style)",
        "Author avatar image",
        "Collapsible 'Read more' text toggle support",
      ],
      items: [
        {
          id: "card-1",
          author: "Ian Patrick",
          role: "Design Director",
          company: "AMV BBDO",
          logo: "about-amv-logo.png",
          avatar: "about-ian.png",
          quote: "Ricky was the perfect all round senior design professional on a project for James Wellbeloved, part of the Mars brand. From taking the design brief Ricky was able to build on it from day one and look after all the aspects liaising with producers, accounts teams, the client as well as the Creative Directors and myself. He was very efficient on the day to day tasks, always clear as to what he was doing and very ordered when the project was at its most demanding. Always communicative, easy to debate ideas with and finding solutions quickly with no fuss.",
        },
        {
          id: "card-2",
          author: "Tatiana Kijak",
          role: "Product Owner",
          company: "Orange Telecoms",
          logo: "about-orange-logo.png",
          avatar: "about-tatiana.png",
          quote: "I worked with Ricky during 2 years on the Orange Branded Devices range - ‘Android smartphones distributed across Europe and specific emerging markets’. We were both part of a large team where our primary focus was to design and develop the software for all Orange Branded Devices. Ricky’s focus is always user centred design and chooses simplicity over complexity and keeps the design engaging, appealing and accessible.",
        },
        {
          id: "card-3",
          author: "Rebecca Comer",
          role: "Senior Producer",
          company: "AMV BBDO",
          logo: "about-amv-logo.png",
          avatar: "about-rebecca.png",
          quote: "Ricky joined our team as a freelance designer to work on a website for Mars, one of our most high-profile clients. He is an exceptional designer with a great eye for detail and an instinctive feel for usability and interaction. During the project, his interpretation of the wireframes was excellent. He created a beautiful, clean, fun user interface, and he worked quickly and efficiently to deliver everything on time.",
        },
        {
          id: "card-4",
          author: "George Bell",
          role: "Creative Director",
          company: "TMW",
          logo: "about-tmw-logo.png",
          avatar: "about-george.png",
          quote: "Ricky is one of those hard working designers that takes great pride in everything he does no matter how big or small the project, he will still craft the living daylights out of a project to create award-winning design. He's a conceptual designer and will always bring something new to the team as he has great knowledge of everything design and is very much up to speed with what is going on.",
        },
        {
          id: "card-5",
          author: "Joel Fernandes",
          role: "Senior Front-end Developer",
          company: "AMV BBDO",
          logo: "about-amv-logo.png",
          avatar: "about-joel.png",
          quote: "I worked with Ricky on a project for which? client which was a set of dynamic templates banners. Ricky involvement was designing / wireframing and he was always very consistent from start to finish. Ricky is also a very nice chap, it was a great working with him and hopefully will work together again.",
        },
        {
          id: "card-6",
          author: "Darren Jackson",
          role: "Director of Procurement",
          company: "AMV BBDO",
          logo: "about-tmw-logo.png",
          avatar: "about-darren.png",
          quote: "Ricky is a great creative designer, who pushes briefs to their limits, whilst considering tight deadlines and budgets. Fills with ideas and a good problem solver. Ricky is a confident communicator with colleagues and clients alike, he works well independently or as part of a team.",
        },
      ],
    },
  },

  contactPage: {
    path: "content/contact/index.md",
    layout: "Minimalist layout with generous vertical negative space",
    headline: "Let's talk",
    intro: "Whether you have a complex product challenge, need a Senior Product Designer to lead an end-to-end journey, or want to explore an AI-driven workflow transformation, I'm always open to discussing new opportunities.",
    cardLayout: "Equal width 2-column grid seating both cards side-by-side",
    cards: [
      {
        id: "card-1",
        type: "email",
        label: "Email",
        value: "rickympatel5@gmail.com",
        icon: "contact-email-icon.png",
      },
      {
        id: "card-2",
        type: "linkedin",
        label: "LinkedIn",
        value: "Connect on LinkedIn",
        icon: "contact-linkedin-icon.png",
      },
    ],
  },

  workLandingPage: {
    heroSection: {
      headline: "A closer look at the work I’ve helped shape",
      paragraph: "Explore my featured projects and career work, built by balancing user needs and business goals within technical constraints. By integrating AI into my workflow, I have drastically accelerated design operations and delivery."
    },
    heroTagline: "Featured projects",
    featuredCaseStudies: {
      count: 5,
      layout: "2-column entry point grid (Left: Client caption #1, H3 Heading #2, Outcomes blurb #3; Right: Thumbnail #4)",
      components: [
        "1. Client name (Caption style)",
        "2. Heading H3",
        "3. Blurb of copy",
        "4. Thumbnail media frame",
      ],
      projects: [
        {
          id: "bg-billing-app",
          clientName: "British Gas",
          heading: "Cutting 55,000 inbound calls with streamlined app billing",
          blurb: "Cut paperless billing calls by 20% in three months, preventing 55,000 inbound enquiries and saving £220,000.",
          thumbnail: "content/case-studies/bg-billing-app/images/billing-thumbnail.jpg",
          tags: ["Fintech", "Android / iOS", "Mobile app", "Data", "Research", "AI ideation", "Prototyping", "Testing", "BeSci", "Energy"]
        },
        {
          id: "bg-join-revamp",
          clientName: "British Gas",
          heading: "Streamlining a 16-step acquisition flow into 7 steps",
          blurb: "Cut a 16-step quote journey down to 7, raising sales conversion from 6% to 8% (33% more customers acquired on the same traffic) and reducing quote time from 3m 26s to 1m 10s.",
          thumbnail: "content/case-studies/bg-join-revamp/images/join-thumbnail.jpg",
          tags: ["Web", "Responsive", "Energy", "AI workflow", "BeSci", "Data", "Research", "Testing"]
        },
        {
          id: "ee_saved-payment-cards",
          clientName: "EE",
          heading: "Shipping an MVP in three weeks to lift checkout conversion",
          blurb: "Shipped a payment card UX in three weeks, lifting checkout conversion from 4.2% to 4.62% and reducing inbound support calls by 20%.",
          thumbnail: "content/case-studies/ee_saved-payment-cards/images/saved-cards-thumbnail.jpg",
          tags: ["Fintech", "iOS", "Mobile app", "Research", "Prototyping", "Testing", "Telco"]
        },
        {
          id: "ee_cyber-security",
          clientName: "EE Cyber Security",
          heading: "Reaching 11.2% sales conversion on paid antivirus plans",
          blurb: "Reached an 11.2% sales conversion to paid antivirus plans among qualified ID Checker users, outperforming targets by 3.5% with user satisfaction scores of 6.8/7.",
          thumbnail: "content/case-studies/ee_cyber-security/images/cs-thumbnail.jpg",
          tags: ["Cyber Security", "iOS", "Mobile app", "Norton", "Prototyping", "Testing", "Telco", "Research"]
        },
        {
          id: "bg-merge-oam",
          clientName: "British Gas",
          heading: "Unifying customer's products and services in one place",
          blurb: "Streamlined multi-product account handling to eliminate friction points, successfully reducing customer churn drivers and simplifying self-service meter submissions.",
          thumbnail: "content/case-studies/bg-merge-oam/images/merged-thumbnail.jpg",
          tags: ["Dashboard", "Web", "Responsive", "Data", "Research", "AI ideation", "Prototyping", "Testing", "BeSci", "Energy"]
        },
      ],
    },
    pastProjects: {
      count: 6,
      sectionTitle: "Past projects",
      layout: "Horizontal scroll scroller",
      controls: ["Left scroll button", "Right scroll button"],
      components: [
        "Thumbnail media frame",
        "Case study title & short description",
      ],
      projects: [
        { id: "orange-tv", title: "Orange TV", thumbnail: "content/case-studies/orange-tv/images/otv-thumbnail.jpg" },
        { id: "jw-website", title: "James Wellbeloved", thumbnail: "content/case-studies/jw-website/images/jw-thumbnail.jpg" },
        { id: "orange-recycling", title: "Orange phone recycling", thumbnail: "content/case-studies/orange-recycling/images/recycle-thumbnail.jpg" },
        { id: "orange-livescreen", title: "Orange Livescreen",  thumbnail: "content/case-studies/orange-livescreen/images/ls-thumbnail.jpg" },
        { id: "orange-app-tv", title: "Orange TV app store", thumbnail: "content/case-studies/orange-app-tv/images/actv-thumbnail.jpg" },
        { id: "orange-on-demand-care", thumbnail: "content/case-studies/orange-on-demand-care/images/ocs-thumbnail.jpg" },
      ],
    },
  },

  caseStudyPage: {
    pageLayout: "2 column grid (1:3 ratio)",
    
    stickyLeftMenu: {
      position: "Sticky left column",
      heading: "CONTENTS",
      fontSize: "16px",
      lineHeight: "24px",
      interactionBehavior: "Each text link item features standard interactive text link styling at 16px size: default state (Satoshi Regular, #6B7280, no underline), hover state (Satoshi Regular, #6B7280, underlined), and selected state (Satoshi Medium, #000000, no underline). Free of any diagonal arrows.",
      sections: [
        { id: "01", label: "Discovery", action: "Scroll to Discovery section" },
        { id: "02", label: "Define", action: "Scroll to Define section" },
        { id: "03", label: "Iteration", action: "Scroll to Ideation section" },
        { id: "04", label: "Design", action: "Scroll to Design section" },
        { id: "05", label: "Testing", action: "Scroll to Testing section" },
        { id: "06", label: "Outcomes", action: "Scroll to Outcomes section" },
      ],
      divider: "Subtle horizontal divider line",
      navigationLink: {
        label: "Back to homepage",
        fontSize: "14px",
        lineHeight: "22px",
        letterSpacing: "+0.4px",
        hexColor: "#6B7280",
        fontWeight: "Regular (400)",
        action: "Navigate back to Work landing page",
        states: {
          defaultState: { fontWeight: "Regular (400)", hexColor: "#6B7280", underline: false },
          hoverState: { fontWeight: "Regular (400)", hexColor: "#6B7280", underline: true },
          selectedState: { fontWeight: "Medium (500)", hexColor: "#000000", underline: false }
        }
      },
    },

    header: [
      "Heading",
      "Intro",
      "Role & Scope (Client, Platform, Role, Stack, Timeline, Squad, Year)",
      "Hero banner image (full width)",
      "Executive summary",
      "Business challenge",
    ],
    
    optionalHeader: [
      "Customer type", // Optional section depending on case study scope
    ],
    
    mandatoryLifecycle: [
      "Discovery",
      "Define",
      "Ideation",
      "Design",
      "Testing",
      "Outcomes",
    ],

    globalControls: {
      floatingBackButton: {
        label: "Back to top",
        position: "Floating bottom right corner",
        behavior: "Smooth scroll to top of page",
      },
    },
    
    linkStyleRules: {
      prohibitedElements: ["45-degree angled arrows", "diagonal external link icons (↗)"],
      rule: "Clean text links only; no decorative angled arrows on inline links or buttons."
    }
  },

  globalFooter: {
    layout: "Full-width editorial footer with subtle top border (border-t border-zinc-200) and generous vertical padding (py-12 to py-16)",
    components: [
      { type: "Brand Label", value: "Ricky Patel" },
      { type: "Footer Navigation", links: ["Work", "About", "Contact"] },
      { type: "Social Links", links: [] },
      { type: "Copyright & Timestamp", value: "© 2026 Ricky Patel. All rights reserved." },
    ],
  },

  designSystemLinkStates: {
    mainNavLinks: {
      fontSize: "20px",
      lineHeight: "30px",
      states: {
        defaultState: { fontWeight: "Regular (400)", hexColor: "#6B7280", underline: false },
        hoverState: { fontWeight: "Regular (400)", hexColor: "#6B7280", underline: true },
        selectedState: { fontWeight: "Medium (500)", hexColor: "#000000", underline: false }
      }
    },
    stickyMenuLinks: {
      fontSize: "16px",
      lineHeight: "24px",
      states: {
        defaultState: { fontWeight: "Regular (400)", hexColor: "#6B7280", underline: false },
        hoverState: { fontWeight: "Regular (400)", hexColor: "#6B7280", underline: true },
        selectedState: { fontWeight: "Medium (500)", hexColor: "#000000", underline: false }
      }
    },
    backToHomepageLink: {
      fontSize: "14px",
      lineHeight: "22px",
      letterSpacing: "+0.4px",
      states: {
        defaultState: { fontWeight: "Regular (400)", hexColor: "#6B7280", underline: false },
        hoverState: { fontWeight: "Regular (400)", hexColor: "#6B7280", underline: true },
        selectedState: { fontWeight: "Medium (500)", hexColor: "#000000", underline: false }
      }
    },
    proseHyperlink: {
      fontWeight: "Bold (700)",
      fontSize: "18px",
      lineHeight: "28px",
      hexColor: "#000000",
      underline: true,
      rule: "Inline text links in prose/body are always bold and underlined regardless of state."
    }
  }
};
