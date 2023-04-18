import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/smartmirror.jpg';
import porfolioImage2 from '../images/portfolio/Ahmed pitch.jpg';
import porfolioImage3 from '../images/portfolio/NSBEDCCS.jpg';
import porfolioImage4 from '../images/portfolio/bold.jpg';
import porfolioImage5 from '../images/portfolio/eyrecruiting.jpg';
import porfolioImage6 from '../images/portfolio/LIGroup.jpg';
import porfolioImage7 from '../images/portfolio/bahpresentation.jpg';
import porfolioImage8 from '../images/portfolio/Volunteering.jpg';
import porfolioImage9 from '../images/portfolio/tmcfresume.jpg';
import porfolioImage10 from '../images/portfolio/NAAHP Ambient.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';


import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';
import React from 'react';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Ahmed Ashkar ',
  description: "Ahmed Ashkar's Personal Website",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Ahmed Ashkar.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Technology Professional</strong> with a passion for making an impact through a variety of <strong className="text-stone-100">technical solutions</strong> revolving around data based out of Maryland.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me honing my <strong className="text-stone-100">skills</strong>, playing <strong className="text-stone-100">basketball</strong>, or getting in my element as an avid{' '}
        <strong className="text-stone-100">Boston Celtics and Baltimore Ravens</strong> fan.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/1GYb1MYH4YpskBzt2kRl4T8ESIQiAOnmC/view?usp=sharing',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I graduated from Bowie State University in 2021 with a Bachelors in Computer Science and am actively pursuing a Masters Degree in Data Science. Since graduating, I have been a Technology Consultant implementing data analytics solutions on various engagements with Fortune 500 companies. I am an avid learner and technology enthusiast with a passion for personal growth.`,
  aboutItems: [
    {label: 'Location', text: 'Greenbelt, MD', Icon: MapIcon},
    {label: 'Age', text: '24', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Palestinian/American', Icon: FlagIcon},
    {label: 'Interests', text: 'Exercise, Religion, Technology', Icon: SparklesIcon},
    {label: 'Study', text: 'Bowie State University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Ernst & Young', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Arabic',
        level: 6,
      },
      {
        name: 'Spanish',
        level: 3,
      },
    ],
  },
  {
    name: 'Data Analysis',
    skills: [
      {
        name: 'Microsoft Excel',
        level: 9,
      },
      {
        name: 'Python',
        level: 5,
      },
      {
        name: 'MySQL',
        level: 5,
      },
    ],
  },
  {
    name: 'Data Visualization',
    skills: [
      {
        name: 'Power BI',
        level: 8,
      },
      {
        name: 'Tableau',
        level: 7,
      },
      {
        name: 'Excel Pivot Tables and Graphs',
        level: 10,
      },
    ],
  },
  {
    name: 'Business Skills',
    skills: [
      {
        name: 'PowerPoint',
        level: 9,
      },
      {
        name: 'Visio',
        level: 7,
      },
      {
        name: 'Jira',
        level: 8,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Smart Mirror',
    description: 'Customized a smart mirror based on constant feedback as a gift for newly wed couple. Utilized a Raspberry Pi and JavaScript',
    url: 'https://www.linkedin.com/in/ahmed-ashkar-a8409662/',
    image: porfolioImage1,
  },
  {
    title: 'TMCF The Pitch',
    description: 'Developed an iOS application for tracking grocery purchases and pitched the solution to a panel of judges at the TMCF The Pitch hackathon',
    url: 'https://www.linkedin.com/in/ahmed-ashkar-a8409662/',
    image: porfolioImage2,
  },
  {
    title: 'Career Fair Alexa Project',
    description: 'As president of my unversity NSBE chapter, I co-led a project in developing an Amazon Alexa solution that helped students locate company booths that alinged to their major at the Bowie State University Career Fair.',
    url: 'https://www.linkedin.com/in/ahmed-ashkar-a8409662/',
    image: porfolioImage3,
  },
  {
    title: 'Bowie BOLD',
    description: 'Spearheaded a new marketing campaign for the rebranding of Bowie State University. #BowieBOLD',
    url: 'https://www.linkedin.com/in/ahmed-ashkar-a8409662/',
    image: porfolioImage4,
  },
  {
    title: 'DE&I Recruiting',
    description: 'Represented EY Technology Consulting at the NSBE conference and recruited talented students with a passion for engineering',
    url: 'https://www.linkedin.com/in/ahmed-ashkar-a8409662/',
    image: porfolioImage5,
  },
  {
    title: 'TMCF Leadership Institute',
    description: 'As a TMCF Student Ambassador, I led a group of ten BSU students in matriculating through an intensive 4 day conference that consisted of on-site interviewing, presentations, and networking',
    url: 'https://www.linkedin.com/in/ahmed-ashkar-a8409662/',
    image: porfolioImage6,
  },
  {
    title: 'Internship Final Presentation',
    description: 'Developed and presented solution for runway damage monitoring to panel of judges at Booz Allen Hamilton internship',
    url: 'https://www.linkedin.com/in/ahmed-ashkar-a8409662/',
    image: porfolioImage7,
  },
  {
    title: 'PTTC Volunteering',
    description: 'Volunteered to help facilitate and host a variety of events with the Patriots Technology Training Center that were aimed at promoting careers in STEM for minority youth',
    url: 'https://www.linkedin.com/in/ahmed-ashkar-a8409662/',
    image: porfolioImage8,
  },
  {
    title: 'Resume Workshops',
    description: 'Hosted a series of resume and interview prep workshops to help my classmates and underclassmen obtain internships and full-time roles',
    url: 'https://www.linkedin.com/in/ahmed-ashkar-a8409662/',
    image: porfolioImage9,
  },
  {
    title: 'NAAAHP Conference',
    description: 'Developed and presented a solution for a smart home system that tracks and logs water outlet usage for elderly and handicapped individuals',
    url: 'https://www.linkedin.com/in/ahmed-ashkar-a8409662/',
    image: porfolioImage10,
  },
  /*{
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://www.linkedin.com/in/ahmed-ashkar-a8409662/',
    image: porfolioImage11,
  },*/
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'August 2017 - May 2021',
    location: 'Bowie State University',
    title: 'Bachelors of Science in Computer Science, Minor in Business Administration',
    content: <p>Graduated with a cumulative GPA of 3.7. Gained introductory experience into Software Development using C++, and gained additonal experience at various internships. Led multiple on-campus organizaitons to drive growth and professional development.</p>,
  }
];

export const experience: TimelineItem[] = [
  {
    date: 'July 2021 - Present',
    location: 'Ernst & Young',
    title: 'Technology Consultant',
    content: (
      <p>
        Led multiple data analytics workstreams to derive insights that influenced business decisions for clients. Utilized technologies like Python, Excel, Power BI, Tableau, and others to analyze client-provided data sets and provide dashboards to visualize the key findings.
      </p>
    ),
  },
  {
    date: 'June 2020 - August 2020',
    location: 'KPMG',
    title: 'Digital Lighthouse Advisory Intern',
    content: (
      <p>
        Intended as an Application Development Internship but COVID had other plans :). Spent this internship studying data management best practices.
      </p>
    ),
  },
  {
    date: 'June 2019 - August 2019',
    location: 'Booz Allen Hamilton',
    title: 'Strategic Innovations Group Solutions Intern',
    content: (
      <p>
        Utilized dronekit python API, NVIDIA Jetson TX2, and Raspberry Pi to develop an innovative method where drones facilitate automated communication to streamline the process of airfield 
damage detection and repairment. Also designed and developed a front end website using HTML, CSS, and JavaScript that was used as a part of the final presentation.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Dr. Monika Gross',
      text: 'I have witnessed firsthand his exceptional leadership and problem-solving skills. He has consistently demonstrated a keen eye for detail and a commitment to constantly improving himself, which is what made him an invaluable asset to our Honors Program team',
      //image: bsupic,
    },
    {
      name: 'Mark Hauser',
      text: "He is technical but also understands the business context of what he's doing and why. Ahmed has excellent data analysis skills and his presentation abilities exceed the expectations at his level.",
     // image: '../images/ahmed.jpg',
    },
    {
      name: 'Andrei Carillo',
      text: "Ahmed has been a great asset to every team/project we have worked on together and demonstrates great proficiency in his business and technical skillset. Throughout all my experiences with Ahmed, he has made an impact to deliver excellent results. He works well in teams and is able to receive constructive criticism/feedback. Overall, Ahmed would be an amazing addition to any team with his extensive skillset and insight.",
     // image: '../images/ahmed.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Thank you for viewing my website. Want to reach out? The best way to reach me is through my email below and I will get back to you ASAP!',
  items: [
    {
      type: ContactType.Email,
      text: 'ashkarahmed533@gmail.com',
      href: 'mailto:ashkarahmed533@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Greenbelt, MD',
      //href: 'https://www.google.ca/maps/place/Greenbelt,+MD/@38.9931769,-76.9306402,13z/data=!3m1!4b1!4m6!3m5!1s0x89b7c3d894c1509b:0xa50738adf244f411!8m2!3d39.0045544!4d-76.8755282!16zL20vMHR3cV8',
    },
    {
      type: ContactType.LinkedIn,
      text: "Ahmed Ashkar",
      href: 'https://www.linkedin.com/in/ahmed-ashkar-a8409662/',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/ahmed-ashkar-a8409662/'},
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/ashkara0219'},
];
