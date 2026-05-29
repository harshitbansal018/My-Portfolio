import {
  FaGithub,
  FaJava,
  FaLinkedinIn,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa';
import {
  SiExpress,
  SiGit,
  SiJira,
  SiLeetcode,
  SiMongodb,
  SiMysql,
} from 'react-icons/si';
import { FiCode, FiDatabase, FiGitBranch, FiUsers } from 'react-icons/fi';
import { TbApi, TbCpu } from 'react-icons/tb';

export const profile = {
  name: 'Harshit Bansal',
  role: 'Full Stack Developer | React.js Developer | IoT Enthusiast',
  email: 'bansalharshitpc.091@outlook.com',
  phone: '+91-8591707091',
  location: 'India',
  linkedIn: 'https://linkedin.com/in/harshit-bansal-5a8bbb24a',
  leetCode: 'https://leetcode.com/u/harshitbansal018',
  gitHub: 'https://github.com/harshitbansal018',
};

export const navLinks = [
  { label: 'Home', href: 'home' },
  { label: 'About', href: 'about' },
  { label: 'Skills', href: 'skills' },
  { label: 'Projects', href: 'projects' },
  { label: 'Experience', href: 'experience' },
  { label: 'Certs', href: 'certifications' },
  { label: 'Contact', href: 'contact' },
];

export const socials = [
  { label: 'GitHub', href: profile.gitHub, icon: FaGithub },
  { label: 'LinkedIn', href: profile.linkedIn, icon: FaLinkedinIn },
  { label: 'LeetCode', href: profile.leetCode, icon: SiLeetcode },
];

export const stats = [
  { label: 'Highlighted Projects', value: 3, suffix: '+' },
  { label: 'Current CGPA', value: 7.33, suffix: '/10' },
  { label: 'Certifications', value: 5, suffix: '' },
  { label: 'Hackathon Activities', value: 2, suffix: '+' },
];

export const education = {
  institute: 'Chandigarh University',
  degree: 'Bachelor of Computer Science Engineering',
  period: '2022 - 2026',
  score: 'CGPA: 7.33/10',
};

export const interpersonalSkills = [
  { name: 'Team Collaboration', icon: FiUsers },
  { name: 'Problem Solving', icon: FiCode },
  { name: 'Adaptability', icon: FiGitBranch },
  { name: 'Self-Learning Mindset', icon: FiDatabase },
];

export const skillGroups = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React.js', level: 92, icon: FaReact },
      { name: 'REST API Integration', level: 86, icon: TbApi },
      { name: 'GitHub Workflow', level: 84, icon: FaGithub },
    ],
  },
  {
    title: 'Backend & Databases',
    skills: [
      { name: 'Node.js', level: 86, icon: FaNodeJs },
      { name: 'Express.js', level: 84, icon: SiExpress },
      { name: 'SQL', level: 82, icon: SiMysql },
      { name: 'MongoDB', level: 84, icon: SiMongodb },
    ],
  },
  {
    title: 'Core & Tools',
    skills: [
      { name: 'Java', level: 90, icon: FaJava },
      { name: 'OOPS', level: 88, icon: FiCode },
      { name: 'Git', level: 86, icon: SiGit },
      { name: 'JIRA', level: 78, icon: SiJira },
      { name: 'IoT Systems', level: 82, icon: TbCpu },
    ],
  },
];

export const projects = [
  {
    title: 'LocalWala',
    category: 'SaaS Platform',
    description:
      'A SaaS platform that helps shopkeepers create online stores in 5-10 minutes with a simple setup flow and user-friendly dashboard.',
    tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Cloudinary'],
    imageClass: 'project-traffic',
  },
  {
    title: 'Eco-Friendly Tourism Tracker',
    category: 'MERN App',
    description:
      'A sustainability-focused platform that promotes eco-friendly activities and encourages green travel practices through incentives.',
    tech: ['React.js', 'MongoDB', 'Node.js', 'Express', 'Cloudinary'],
    imageClass: 'project-tourism',
  },
  {
    title: 'IoT-Based Delivery Robot',
    category: 'IoT Prototype',
    description:
      'An autonomous delivery robot prototype built with ESP32 and sensors, featuring an auto-opening and auto-closing delivery box.',
    tech: ['ESP32', 'Sensors', 'IoT', 'Robotics'],
    imageClass: 'project-locker',
  },
];

export const experiences = [
  {
    role: 'Web Developer Intern',
    company: 'Cognifyz Technologies',
    period: 'Sep 2024 - Oct 2024',
    detail:
      'Worked on interactive UI development while improving website optimization, functionality, responsiveness, and frontend implementation quality.',
  },
];

export const certifications = [
  'NPTEL IoT Certification',
  'AWS Cloud Technical Essentials',
  'Java Programming Course',
  'React.js Workshop Certification',
  'Tata Crucible Campus Quiz',
];

export const achievements = [
  'React.js Workshop at Chandigarh University',
  'Code Wizard Hackathon Participant',
  'DSA Summer Training at Chandigarh University',
  'Organizer at Hack With Tricity National Hackathon',
];

export const techMarquee = [
  'React.js',
  'Node.js',
  'Express',
  'MongoDB',
  'Cloudinary',
  'SQL',
  'Java',
  'OOPS',
  'REST API',
  'Git',
  'GitHub',
  'JIRA',
  'IoT',
  'ESP32',
  'Robotics',
  'Problem Solving',
  'React.js',
  'Node.js',
  'MongoDB',
];

export const contactLinks = {
  email: `mailto:${profile.email}`,
  phone: 'tel:+918591707091',
};
