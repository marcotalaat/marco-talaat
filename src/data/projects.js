import antioch from "@/assets/images/projects/antioch.webp";
import chicks from "@/assets/images/projects/chicks.webp";
import coptic from "@/assets/images/projects/coptic.webp";
import earthfolk from "@/assets/images/projects/earthfolk.webp";
import jets from "@/assets/images/projects/jets.webp";
import lacosta from "@/assets/images/projects/lacosta.webp";
import universityFinder from "@/assets/images/projects/university-finder.webp";
import waterFirst from "@/assets/images/projects/water-first.webp";
import yachts from "@/assets/images/projects/yachts.webp";

import TusLogo from "/src/assets/images/Company Logo/TUs.png";
import ilampLogo from "/src/assets/images/Company Logo/ilamp.svg";
import personalLogo from "@/assets/images/Company Logo/marco-logo-black.svg";

const projects = [
  {
    id: 1,
    title: "Water First Management System",
    slug: "water-first",
    subtitle: "Dealer, Warranty & Service Management Platform",
    category: "Enterprise System",
    type: "WordPress",
    image: waterFirst,
    liveUrl: "https://water-first.net/",
    powered: personalLogo,
    poweredAlt: "Marco Talaat",
    featured: true,

    overview:
      "A fully custom-built management platform for a water filter business, streamlining inventory, dealer operations, warranty tracking, and after-sales service through automated workflows. The system replaces manual processes with a centralized digital hub covering the full product lifecycle, barcode-based activation, and real-time customer communication.",

    technologies: [
      "WordPress",
      "WooCommerce",
      "PHP",
      "AJAX",
      "JavaScript",
      "Custom Post Types",
      "WhatsApp API",
    ],

    features: [
      "Barcode Generation & Tracking",
      "Dealer Management Dashboard",
      "Warranty Automation",
      "WhatsApp Notifications",
      "Service Visits & Invoicing",
      "Contract Management",
      "Admin Control Panel",
      "Real-Time Activation Logging",
    ],
  },
  {
    id: 2,
    title: "Antioch Global",
    slug: "antioch-global",
    subtitle: "Conference, Sermon & Ministry Content Platform",
    category: "Organization Website",
    type: "WordPress",
    image: antioch,
    liveUrl: "https://antiochglobal.org/",
    powered: TusLogo,
    poweredAlt: "The University of Success",
    featured: true,

    overview:
      "A content-driven platform developed for Antioch Global to serve as the organization's official digital hub. The website organizes conferences, sermons, news, and ministry resources into structured categories, making content easy to discover while providing a centralized source for updates and media. It also features an integrated YouTube live streaming system that allows administrators to display live broadcasts automatically by simply adding the stream URL.",

    technologies: [
      "WordPress",
      "PHP",
      "JavaScript",
      "Custom Post Types",
      "ACF Pro",
      "YouTube Live Integration",
    ],

    features: [
      "Conference Archive",
      "Sermons & Media Library",
      "News & Announcements",
      "Category-Based Content Organization",
      "YouTube Live Stream Integration",
      "Dynamic Live Broadcast Display",
      "Custom Admin Content Management",
      "Responsive Design",
    ],
  },
  {
    id: 3,
    title: "Chicks 4 Kids",
    slug: "chicks-4-kids",
    subtitle: "Pediatric Healthcare & Pharmaceutical Website",
    category: "Corporate Website",
    type: "WordPress",
    image: chicks,
    liveUrl: "http://chicks4kids.com/",
    powered: ilampLogo,
    poweredAlt: "The University of Success",
    featured: false,

    overview:
      "A modern corporate website developed for a pediatric pharmaceutical company, showcasing children's healthcare products through a playful, Disney-inspired design. Products are organized into intuitive categories, making it easy for parents and healthcare professionals to explore medications while maintaining a friendly and engaging user experience.",

    technologies: [
      "WordPress",
      "PHP",
      "JavaScript",
      "ACF Pro",
      "Custom Post Types",
    ],

    features: [
      "Product Catalog",
      "Category-Based Product Organization",
      "Disney-Inspired UI Design",
      "Responsive Layout",
      "Custom Admin Management",
      "Optimized Product Pages",
    ],
  },
  {
    id: 4,
    title: "Coptic Heritage Platform",
    slug: "coptic-heritage",
    subtitle: "Historical Archive & Online Bookstore",
    category: "Educational Platform",
    type: "WordPress",
    image: coptic,
    liveUrl: "https://transformus.work/coptic/",
    powered: TusLogo,
    poweredAlt: "The University of Success",
    featured: true,

    overview:
      "A comprehensive digital platform designed to preserve and showcase the rich heritage of the Coptic Church. The website combines an extensive historical archive with a fully integrated online bookstore, providing researchers, students, and visitors with access to monasteries, conferences, educational resources, and religious publications in one centralized platform.",

    technologies: [
      "WordPress",
      "WooCommerce",
      "PHP",
      "JavaScript",
      "ACF Pro",
      "Custom Post Types",
    ],

    features: [
      "Online Bookstore",
      "Monastery Directory",
      "Historical Archive",
      "Conference Library",
      "Rich Media Galleries",
      "Advanced Content Organization",
      "Custom Content Management",
      "Responsive Design",
    ],
  },
  {
    id: 5,
    title: "Earthfolk",
    slug: "earthfolk",
    subtitle: "Content Publishing Platform with Social Integration",
    category: "Blog Platform",
    type: "WordPress",
    image: earthfolk,
    liveUrl: "https://earthfolk.com/",
    powered: ilampLogo,
    poweredAlt: "The University of Success",
    featured: true,

    overview:
      "A custom WordPress theme built with the Gutenberg Block Editor for a modern content-focused publishing platform. The website delivers a smooth reading experience through infinite scrolling, integrates Instagram content automatically via API, and includes newsletter functionality to keep readers engaged with the latest updates.",

    technologies: [
      "WordPress",
      "Custom Theme",
      "Gutenberg",
      "PHP",
      "JavaScript",
      "Instagram API",
      "REST API",
    ],

    features: [
      "Custom Gutenberg Theme",
      "Infinite Scroll Articles",
      "Instagram Feed Integration",
      "Automatic Social Content Sync",
      "Newsletter Subscription",
      "Responsive Design",
      "SEO-Friendly Blog Structure",
      "Custom Content Management",
    ],
  },
  {
    id: 6,
    title: "JETS Student Management System",
    slug: "jets-student-management-system",
    subtitle: "Admissions, Student Portal & Academic Management Platform",
    category: "Education Management System",
    type: "WordPress",
    image: jets,
    liveUrl: "https://jets.edu/",
    powered: TusLogo,
    poweredAlt: "The University of Success",
    featured: true,

    overview:
      "A comprehensive educational management platform developed for JETS to digitize the entire student lifecycle—from admissions to graduation. The system includes a multi-step application process with draft saving, role-based admission workflows, student and faculty portals, academic scheduling, grading, transcript generation, and automated notifications, replacing manual administrative processes with a centralized digital solution.",

    technologies: [
      "WordPress",
      "PHP",
      "JavaScript",
      "AJAX",
      "MySQL",
      "ACF Pro",
      "Custom Post Types",
      "Custom User Roles",
      "SMTP Email",
    ],

    features: [
      "Multi-Step Admission Application",
      "Draft Save & Resume",
      "Application Validation by Step",
      "Role-Based Admission Workflow",
      "Document Review & Re-upload Requests",
      "Student Dashboard",
      "Application Status Tracking",
      "Automated Email Notifications",
      "Course Registration",
      "Class Schedule Management",
      "Faculty Portal",
      "Grade Management",
      "Student Academic Records",
      "Automatic Certificate Generation",
      "Administrative Control Panel",
    ],
  },
  {
    id: 7,
    title: "University Finder",
    slug: "university-finder",
    subtitle: "University Information & Student Resources Platform",
    category: "Educational Website",
    type: "WordPress",
    image: universityFinder,
    liveUrl: "https://universityfinder.net/",
    powered: TusLogo,
    poweredAlt: "The University of Success",
    featured: false,

    overview:
      "A content-driven university website designed to provide prospective students with comprehensive information about academic programs, university services, departments, and the institution's team. The platform serves as the university's central information hub with an organized blog and easy-to-navigate content structure.",

    technologies: [
      "WordPress",
      "PHP",
      "JavaScript",
      "ACF Pro",
      "Custom Post Types",
    ],

    features: [
      "University Blog",
      "Academic Programs",
      "University Services",
      "Faculty & Team Pages",
      "Category-Based Content",
      "Responsive Design",
      "Custom Admin Management",
    ],
  },
  {
    id: 8,
    title: "La Costa Real Estate",
    slug: "la-costa-real-estate",
    subtitle: "Property Search & Real Estate Listing Platform",
    category: "Real Estate Platform",
    type: "WordPress",
    image: lacosta,
    liveUrl: "https://lacosta-realestate.com/",
    powered: ilampLogo,
    poweredAlt: "The University of Success",
    featured: true,

    overview:
      "A real estate platform built to help users discover properties through an advanced filtering experience. Visitors can search by property type, number of bedrooms, price range, developer, and project, while dynamic field relationships provide a seamless browsing experience. Each listing includes comprehensive information about the property, developer, project, pricing, and media gallery.",

    technologies: [
      "WordPress",
      "PHP",
      "JavaScript",
      "AJAX",
      "ACF Pro",
      "Custom Post Types",
    ],

    features: [
      "Advanced Property Search",
      "Dynamic Search Filters",
      "Price Range Filtering",
      "Property Type Selection",
      "Developer & Project Dependency",
      "Property Details Pages",
      "Image Galleries",
      "Responsive Design",
    ],
  },
  {
    id: 9,
    title: "RSY Institute",
    slug: "rsy-institute",
    subtitle: "Maritime Academy Admission & Scholarship Platform",
    category: "Education Management System",
    type: "WordPress",
    image: yachts,
    liveUrl: "https://rsyinstitute.com/",
    powered: TusLogo,
    poweredAlt: "The University of Success",
    featured: true,

    overview:
      "A custom admission platform developed for a maritime academy, enabling administrators to build and manage application forms without developer assistance. The system includes a dynamic form builder with configurable validation rules, scholarship application tracking, an eCommerce module, and a student portal where applicants can monitor the status of their submissions.",

    technologies: [
      "WordPress",
      "PHP",
      "JavaScript",
      "AJAX",
      "WooCommerce",
      "ACF Pro",
      "Custom Form Builder",
      "Custom User Roles",
    ],

    features: [
      "Dynamic Form Builder",
      "Custom Validation Rules",
      "Scholarship Applications",
      "Student Dashboard",
      "Application Tracking",
      "Online Store",
      "Role-Based Management",
      "Responsive Design",
      "Custom Admin Panel",
    ],
  },
];

export default projects;
