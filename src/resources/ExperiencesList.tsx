export interface ExpItem {
    id: number;
    title: string;
    image?: string;
    start_periode: Date;
    end_periode: Date;
    type: string;
    organization: string,
    summary: string;
    evidenceImage?: string;
    evidenceCaption?: string;
    documentationUrl?: string;
    skill: string[],
    slidesEvidence: object,
    desc: string
}

export interface Segment {
    line: string;
    border: string;
    text: string;
}

export interface slide {
    image: string,
    title: string,
    desc: string
}
// One color per segment of the path — cycles if there are more items than colors.
export const SEGMENTS: Segment[] = [
    { line: "from-orange-400 to-rose-500", border: "border-orange-400", text: "text-orange-400" },
    { line: "from-rose-500 to-sky-500", border: "border-rose-500", text: "text-rose-500" },
    { line: "from-sky-500 to-slate-400", border: "border-sky-500", text: "text-sky-500" },
    { line: "from-slate-400 to-violet-500", border: "border-slate-400", text: "text-slate-400" },
    { line: "from-violet-500 to-amber-400", border: "border-violet-500", text: "text-violet-500" },
];

export const expList: ExpItem[] = [
    {
        id: 1,
        title: "Staff Divisi Publikasi Dekorasi dan Dokumentasi",
        image: "my-profile.png",
        start_periode: new Date("2024-05-01"),
        end_periode: new Date("2024-08-01"),
        type: "Organizations",
        organization: "Telkom University Surabaya",
        summary: "Menjadi Staff Publikasi, Dekorasi dan Dokumentasi Dewan Perwakilan Mahasiswa Telkom University Surabaya 2024",
        evidenceCaption: "Dokumentasi kegiatan X",
        skill: ['Figma', 'Canva', 'Coreldraw', 'Leadership', 'Integrity', 'Problem Solving', 'Critical Thinking'],
        slidesEvidence: [
            {
                image: 'images/Experiences/DPM/1.jpeg',
                title: 'Gotong Royong',
                desc: 'Membangun lingkungan yang bersih dan nyaman bersama.'
            },
            {
                image: 'images/Experiences/DPM/2.jpeg',
                title: 'Kegiatan Warga',
                desc: 'Transparansi dana RT untuk kesejahteraan kita semua.'
            },
            {
                image: 'images/Experiences/DPM/3.jpeg',
                title: 'Musyawarah Digital',
                desc: 'Sistem Informasi Bank Sampah & Keuangan Terpadu.'
            }
        ],
        desc: `
            ✨ Key Contributions:



👥 Successfully built new organizational insights, contributing to the addition of 40+ active members through engaging communication strategies.

📈 Boosted Instagram engagement by increasing followers by 200+, enhancing the organization’s digital presence and outreach.

🧑‍🎨 Designed all creative assets including posters, PowerPoint templates, logos, and PDH (official attire) to strengthen DPM's visual identity.

📅 Acted as a Content Planner, curating and scheduling social media design content that aligned with the organization’s core messaging and events.

📸 Took part in shaping DPM Telkom University Surabaya's public image both visually and strategically, ensuring consistent and meaningful communication across platforms.
            `

    },
    {
        id: 2,
        title: "Staff Of Public Relations",
        image: "my-profile.png",
        start_periode: new Date("2023-10-01"),
        end_periode: new Date("2024-06-01"),
        type: "Organizations",
        organization: "Google Developer Students Clubs",

        summary:
            "Menjadi Tim Inti dalam divisi Public Relations GDSC Telkom University 2023/2024",
        skill: ['Sponsorship', 'Content Planner', 'Teamwork', 'Team Management', 'Team Leadership', 'Team Building', 'Critical Thinking', 'Design'],
        slidesEvidence: [
            {
                image: 'images/Experiences/GDSC/1.jpeg',
                title: 'Gotong Royongs',
                desc: 'Membangun lingkungan yang bersih dan nyaman bersama.'
            },
            {
                image: 'images/Experiences/GDSC/2.jpeg',
                title: 'Kegiatan Warga',
                desc: 'Transparansi dana RT untuk kesejahteraan kita semua.'
            },
            {
                image: 'images/Experiences/GDSC/3.jpeg',
                title: 'Musyawarah Digital',
                desc: 'Sistem Informasi Bank Sampah & Keuangan Terpadu.'
            },
            {
                image: 'images/Experiences/GDSC/4.jpeg',
                title: 'Musyawarah Digital',
                desc: 'Sistem Informasi Bank Sampah & Keuangan Terpadu.'
            },
            {
                image: 'images/Experiences/GDSC/5.jpeg',
                title: 'Musyawarah Digital',
                desc: 'Sistem Informasi Bank Sampah & Keuangan Terpadu.'
            }
        ],
        desc: `
            ✨ Key Contributions:

👥 Successfully contributed to growing the GDSC community by adding 400+ members from both within and outside the university.

🎤 Served as a Core Team member in the Public Relations division, playing a central role in outreach, partnerships, and branding.

🌐 Participated in national and international tech events, gaining exposure to global trends and networking with industry professionals.

🤝 Organized collaborative tech events with top universities across the country and internationally.

🚀 Partnered with leading tech startups focused on career planning, enabling members to gain practical career insights.

📅 Acted as Content Planner for GDSC's social media, ensuring engaging and informative content across platforms.

📄 Created professional sponsorship documents for each event, including successful partnership acquisition (e.g., LeMinerale sponsorship) 💼🥤

`
    },
    {
        id: 3,
        title: "Staff Internship Flutter Developer",
        image: "my-profile.png",
        start_periode: new Date("2023-10-01"),
        end_periode: new Date("2023-12-01"),
        type: "Training",
        organization: "PT Sinergi Inovasi Tekno",

        summary:
            "Menjadi Staff Magang pada Divisi Flutter Developer dengan rentang waktu 3 bulan (Oktober – Desember).",
        skill: ['Flutter', 'Postman API', 'Teamwork', 'Responsible', 'Problem Solving', 'Critical Thinking', 'Leadership', 'Integrity'],
        slidesEvidence: [
            {
                image: 'images/Experiences/Flutter/1.jpeg',
                title: 'Gotong Royong',
                desc: 'Membangun lingkungan yang bersih dan nyaman bersama.'
            },
            {
                image: 'images/Experiences/Flutter/2.jpeg',
                title: 'Kegiatan Warga',
                desc: 'Transparansi dana RT untuk kesejahteraan kita semua.'
            },
            {
                image: 'images/Experiences/Flutter/3.jpeg',
                title: 'Musyawarah Digital',
                desc: 'Sistem Informasi Bank Sampah & Keuangan Terpadu.'
            },
            {
                image: 'images/Experiences/Flutter/4.jpeg',
                title: 'Musyawarah Digital',
                desc: 'Sistem Informasi Bank Sampah & Keuangan Terpadu.'
            }
        ],
        desc: `
           ✨ Key Contributions:



💻 Successfully developed 3 functional applications as part of multiple Capstone Projects, delivering new insights and business process efficiencies for partnering companies.

👥 Led the development of an HRIS (Human Resource Information System) application to support end-to-end HR workflows.

🔗 Worked on the Pertamina Application Project, focusing on API Integration to enhance system connectivity and performance.

🏢 Contributed to the development of a custom HRIS platform for PT Sinergi Inovasi Tekno, aligning digital solutions with business needs.



🚀 These projects allowed me to strengthen skills in full-stack development, system integration, and business-oriented problem-solving, with direct impact on operational streamlining.`
    },
    {
        id: 4,
        title: "Data Analyst",
        image: "my-profile.png",
        start_periode: new Date("2025-02-01"),
        end_periode: new Date("2025-07-01"),
        type: "Training",
        organization: "PT. Semen Indonesia (Persero) Tbk.",
        summary:
            "Menjadi Staff Magang MAGENTA SIG 2025 di Divisi Data Analyst dengan rentang waktu 6 bulan (Februari – Juli).",
        skill: ['Microsoft Power BI', 'SQL Server Management Studio', 'Microsoft Fabric', 'Microsoft Power Platform', 'Microsoft Power Automate', 'Leadership', 'Critical Thinking', 'Problem Solving'],
        slidesEvidence: [
            {
                image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070',
                title: 'Gotong Royong',
                desc: 'Membangun lingkungan yang bersih dan nyaman bersama.'
            },
            {
                image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1974',
                title: 'Kegiatan Warga',
                desc: 'Transparansi dana RT untuk kesejahteraan kita semua.'
            },
            {
                image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070',
                title: 'Musyawarah Digital',
                desc: 'Sistem Informasi Bank Sampah & Keuangan Terpadu.'
            }
        ],
        desc: `
            ✨ Key Contributions:



👥 Successfully built new organizational insights, contributing to the addition of 40+ active members through engaging communication strategies.

📈 Boosted Instagram engagement by increasing followers by 200+, enhancing the organization’s digital presence and outreach.

🧑‍🎨 Designed all creative assets including posters, PowerPoint templates, logos, and PDH (official attire) to strengthen DPM's visual identity.

📅 Acted as a Content Planner, curating and scheduling social media design content that aligned with the organization’s core messaging and events.

📸 Took part in shaping DPM Telkom University Surabaya's public image both visually and strategically, ensuring consistent and meaningful communication across platforms.
            `
    },
    {
        id: 5,
        title: "Frontend Developer",
        image: "my-profile.png",
        start_periode: new Date("2025-1-01"),
        end_periode: new Date("2025-6-01"),
        type: "Training",
        organization: "PT Bima Digital Indonesia",

        summary:
            "Menjadi Staff Magang pada Divisi Frontend Developer dengan rentang waktu 6 bulan (Januari – Juni).",
        skill: ['Next.js', 'HTML', 'CSS', 'Javascript', 'Git', 'Teamwork', 'Team Leadership', 'Integrity', 'Problem Solving', 'Critical Thinking', 'Modular Programming'],
        slidesEvidence: [
            {
                image: 'images/Experiences/Frontend/1.jpeg',
                title: 'Gotong Royong',
                desc: 'Membangun lingkungan yang bersih dan nyaman bersama.'
            },
            {
                image: 'images/Experiences/Frontend/2.jpeg',
                title: 'Kegiatan Warga',
                desc: 'Transparansi dana RT untuk kesejahteraan kita semua.'
            },
            {
                image: 'images/Experiences/Frontend/3.jpeg',
                title: 'Musyawarah Digital',
                desc: 'Sistem Informasi Bank Sampah & Keuangan Terpadu.'
            }
        ],
        desc: `
            ✨ Key Contributions:

1. Build a website for starting Journey Test which is create with basic front end development (HTML, CSS, Javascript)💻

2. Build a website for Middle Test which is create with Intermediate front end development (HTML, Tailwind, and Plugin) and also my job description is Login Screen, Registrations Screen, and Ads Section👾

3. Build a website for Final Test which is create with Advance front end development (Next JS, Tailwind, and Plugin) and also my job description is Login Screen, Registrations Screen, Ads Section, Kamus KOL Screen (With Search Bar), and Team Screen👾 `
    },
];
