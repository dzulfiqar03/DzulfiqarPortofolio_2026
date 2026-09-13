export interface Skill {
  name: string;
  pct: number;
  iconTitle: string

}

export interface Category {
  id: string;
  title: string;
  tagline: string;
  accent: string;
  overall: number;
  icon: string;
  skills: Skill[];
}

export const categories: Category[] = [
  {
    id: "programming",
    title: "Programming",
    tagline: "Front-end & back-end",
    accent: "var(--steel)",
    overall: 82,
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
    skills: [
      { name: "HTML & CSS", pct: 90, iconTitle: 'html5' },
      { name: "JavaScript", pct: 80, iconTitle: 'javascript' },
      { name: "Tailwind CSS", pct: 88, iconTitle: 'tailwindcss' },
      { name: "Bootstrap", pct: 85, iconTitle: 'bootstrap' },
      { name: "PHP", pct: 65, iconTitle: 'php' },
      { name: "MySQL", pct: 70, iconTitle: 'mysql' },
      { name: "Laravel", pct: 90, iconTitle: 'laravel' },
      { name: "Flutter", pct: 90, iconTitle: 'flutter' },
    ],
  },
  {
    id: "design",
    title: "Desain",
    tagline: "UI, brand & ilustrasi",
    accent: "var(--amber)",
    overall: 87,
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>',
    skills: [
      { name: "Figma", pct: 90, iconTitle: 'figma' },
      { name: "Canva", pct: 95, iconTitle: 'canva' },
      { name: "Adobe Illustrator", pct: 75, iconTitle: 'adobeillustrator' },
    ],
  },
  {
    id: "office",
    title: "Office",
    tagline: "Dokumen & presentasi",
    accent: "var(--sage)",
    overall: 78,
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="13" x2="15" y2="13"></line><line x1="9" y1="17" x2="15" y2="17"></line></svg>',
    skills: [
      { name: "Microsoft Word", pct: 95, iconTitle: 'microsoftword' },
      { name: "Microsoft Excel", pct: 85, iconTitle: 'microsoftexcel' },
      { name: "Microsoft PowerPoint", pct: 80, iconTitle: 'microsoftpowerpoint' },
      { name: "GitHub", pct: 82, iconTitle: 'github' },
    ],
  },
];