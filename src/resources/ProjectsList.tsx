
export interface CardProps {
    item: {
        id: number,
        title: string,
        start_periode: string,
        end_periode: string,
        type: string,
        summary: string,
        slidesProject: object,
        linkDoc: object
    }
}

export const ProjectsList = [
    {
        id: 0,
        title: "SiBanksa",
        description:
            "Melalukan Pengabdian masyarakat bersama 3 dosen Sistem informasi dengan 2 rekan anggota tim selama 3 bulan dengan judul 'Sistem lnformasi Berbasis Website sebagai Media Edukasi dan Pelatihan Pembuatan Media Tanam pada CV Netafarm Indo Lestari Sidoarjo'",
        image: "/assets/portfolio.png",
        link: "/projects/portfolio-website",
        start_periode: "2025-09-01",
        end_periode: "2026-07-01",
        summary: "SiBanksa (Sistem Informasi Bank Sampah) adalah aplikasi web yang dirancang untuk mendigitalisasi pengelolaan bank sampah di lingkungan perumahan — mencakup pencatatan setoran, transaksi tabungan sampah, penjadwalan pengambilan, hingga verifikasi keanggotaan warga, yang mencakup 8 RT di Perumahan Sidorukun Indah, Gresik.",
        type: "Research",
        slidesProject: [
            {
                image: 'images/Projek/Sibanksa/dashboard.png',
                title: 'Gotong Royong',
                desc: 'Membangun lingkungan yang bersih dan nyaman bersama.'
            },
            {
                image: 'images/Projek/Sibanksa/login.png',
                title: 'Kegiatan Warga',
                desc: 'Transparansi dana RT untuk kesejahteraan kita semua.'
            },
            {
                image: 'images/Projek/Sibanksa/chat.png',
                title: 'Musyawarah Digital',
                desc: 'Sistem Informasi Bank Sampah & Keuangan Terpadu.'
            }
        ],
        linkDoc: [
            {
                icon: 'fa-github',
                title: 'Github',
                link: 'https://github.com/dzulfiqar03/Tugas-Akhir_SiBanksa.git'
            },
            {
                icon: 'fa-envelope',
                title: 'email',
                link: `mailto:muhammaddzulfiqar03@email.com?subject=${encodeURIComponent(
                    "Halo Dzul, saya ingin diskusi proyek sibanksa"
                )}&body=${encodeURIComponent(
                    "Halo Dzul,\n\nSaya ingin bertanya lebih lanjut mengenai kerja sama atau projek sibanksa ini?\n\nTerima kasih."
                )}`,
            },
            {
                icon: 'fa-whatsapp',
                title: 'Whatsapp',
                link: `https://wa.me/6283832020245?text=${encodeURIComponent("Halo, saya ingin bertanya tentang kerja sama atau projek sibanksa ini?")}`
            }
        ]
    },
    {
        id: 1,
        title: "SeeU UMKM Website",
        description:
            "Projek SeeU merupakan Projek Tim yang dikerjakan dengab metode Capstone yang mana berguna untuk memberikan solusi kepada UMKM khususnya Surabaya untuk mengumpulkan seluruh UMKM dalam 1 website guna memperluas pasar UMKM",
        image: "/assets/ecommerce.png",
        link: "/projects/ecommerce-platform",
        start_periode: "2024-04-01",
        end_periode: "2024-06-01",
        summary: "Projek SeeU merupakan Projek Tim yang dikerjakan dengab metode Capstone yang mana berguna untuk memberikan solusi kepada UMKM khususnya Surabaya untuk mengumpulkan seluruh UMKM dalam 1 website guna memperluas pasar UMKM",
        type: "Project",
        slidesProject: [
            {
                image: 'images/Projek/SeeU/home.png',
                title: 'Gotong Royong',
                desc: 'Membangun lingkungan yang bersih dan nyaman bersama.'
            },
            {
                image: 'images/Projek/SeeU/login.png',
                title: 'Kegiatan Warga',
                desc: 'Transparansi dana RT untuk kesejahteraan kita semua.'
            },
            {
                image: 'images/Projek/SeeU/advertise.png',
                title: 'Musyawarah Digital',
                desc: 'Sistem Informasi Bank Sampah & Keuangan Terpadu.'
            }
        ],
        linkDoc: [
            {
                icon: 'fa-github',
                title: 'Github',
                link: 'https://github.com/dzulfiqar03/tubes_komputasiawan_seeU.git'
            },
            {
                icon: 'fa-envelope',
                title: 'email',
                link: `mailto:muhammaddzulfiqar03@email.com?subject=${encodeURIComponent(
                    "Halo Dzul, saya ingin diskusi proyek SeeU"
                )}&body=${encodeURIComponent(
                    "Halo Dzul,\n\nSaya ingin bertanya lebih lanjut mengenai kerja sama atau projek SeeU ini?\n\nTerima kasih."
                )}`,
            },
            {
                icon: 'fa-whatsapp',
                title: 'Whatsapp',
                link: `https://wa.me/6283832020245?text=${encodeURIComponent("Halo, saya ingin bertanya tentang kerja sama atau projek SeeU ini?")}`
            }
        ]
    },
    {
        id: 2,
        title: "Givent - Gift and Event",
        description:
            "A blog website built with Astro, allowing users to read and write articles on various topics.",
        image: "/assets/blog.png",
        link: "/projects/blog-website",
        start_periode: "2023-07-01",
        end_periode: "2023-09-01",
        summary: "Givent merupakan website E-Commerce dibidang jasa dan penjualan produk mengenai event/acara yang berkepentingan.",
        type: "Project",
        slidesProject: [
            {
                image: 'images/Projek/Givent/home.png',
                title: 'Gotong Royong',
                desc: 'Membangun lingkungan yang bersih dan nyaman bersama.'
            },
            {
                image: 'images/Projek/Givent/product.png',
                title: 'Kegiatan Warga',
                desc: 'Transparansi dana RT untuk kesejahteraan kita semua.'
            },

        ],
        linkDoc: [
            {
                icon: 'fa-github',
                title: 'Github',
                link: '#'
            },
            {
                icon: 'fa-envelope',
                title: 'email',
                link: `mailto:muhammaddzulfiqar03@email.com?subject=${encodeURIComponent(
                    "Halo Dzul, saya ingin diskusi proyek Givent"
                )}&body=${encodeURIComponent(
                    "Halo Dzul,\n\nSaya ingin bertanya lebih lanjut mengenai kerja sama atau projek Givent ini?\n\nTerima kasih."
                )}`,
            },
            {
                icon: 'fa-whatsapp',
                title: 'Whatsapp',
                link: `https://wa.me/6283832020245?text=${encodeURIComponent("Halo, saya ingin bertanya tentang kerja sama atau projek Givent ini?")}`
            }
        ]
    },
    {
        id: 3,
        title: "PT. Agung Jaya Mandiri Website",
        description:
            "A blog website built with Astro, allowing users to read and write articles on various topics.",
        image: "/assets/blog.png",
        link: "/projects/blog-website",
        start_periode: "2023-07-01",
        end_periode: "2023-09-01",
        summary: "PT. Agung Jaya Mandiri Web Company merupakan web yang berkolaborasi dengan company bernama PT. AJM Global Mandiri yang menggunakan wordpress dengan hosting berbayar dengan tujuan untuk memperluas pasar PT. AJM Global Mandiri.",
        type: "Project",
        slidesProject: [
            {
                image: 'images/Projek/AJM/1.png',
                title: 'Gotong Royong',
                desc: 'Membangun lingkungan yang bersih dan nyaman bersama.'
            },
            {
                image: 'images/Projek/AJM/2.png',
                title: 'Kegiatan Warga',
                desc: 'Transparansi dana RT untuk kesejahteraan kita semua.'
            },
            {
                image: 'images/Projek/AJM/3.png',
                title: 'Musyawarah Digital',
                desc: 'Sistem Informasi Bank Sampah & Keuangan Terpadu.'
            }
        ],
        linkDoc: [
            {
                icon: 'fa-desktop',
                title: 'Link Website',
                link: 'https://www.agungjayamandiri.com'
            },
            {
                icon: 'fa-envelope',
                title: 'email',
                link: `mailto:muhammaddzulfiqar03@email.com?subject=${encodeURIComponent(
                    "Halo Dzul, saya ingin diskusi proyek AJM Website"
                )}&body=${encodeURIComponent(
                    "Halo Dzul,\n\nSaya ingin bertanya lebih lanjut mengenai kerja sama atau projek AJM Website ini?\n\nTerima kasih."
                )}`,
            },
            {
                icon: 'fa-whatsapp',
                title: 'Whatsapp',
                link: `https://wa.me/6283832020245?text=${encodeURIComponent("Halo, saya ingin bertanya tentang kerja sama atau projek AJM Website ini?")}`
            }
        ]
    },
    {
        id: 4,
        title: "Whats'Want?",
        description:
            "A blog website built with Astro, allowing users to read and write articles on various topics.",
        image: "/assets/blog.png",
        link: "/projects/blog-website",
        start_periode: "2023-07-01",
        end_periode: "2023-09-01",
        summary: "Aplikasi What'sWant? Merupakan aplikasi dengan bahasa pemrograman flutter yang merupakan scheduling activity dan notes berguna untuk memudahkan masyarakat dalam memanage waktunya",
        type: "Project",
        slidesProject: [
            {
                image: 'images/Projek/Whatswant/1.jpg',
                title: 'Gotong Royong',
                desc: 'Membangun lingkungan yang bersih dan nyaman bersama.'
            },
            {
                image: 'images/Projek/Whatswant/2.jpg',
                title: 'Kegiatan Warga',
                desc: 'Transparansi dana RT untuk kesejahteraan kita semua.'
            },

        ],
        linkDoc: [
            {
                icon: 'fa-desktop',
                title: 'Link Website',
                link: '#'
            },
            {
                icon: 'fa-envelope',
                title: 'email',
                link: `mailto:muhammaddzulfiqar03@email.com?subject=${encodeURIComponent(
                    "Halo Dzul, saya ingin diskusi proyek WhatsWant"
                )}&body=${encodeURIComponent(
                    "Halo Dzul,\n\nSaya ingin bertanya lebih lanjut mengenai kerja sama atau projek WhatsWant ini?\n\nTerima kasih."
                )}`,
            },
            {
                icon: 'fa-whatsapp',
                title: 'Whatsapp',
                link: `https://wa.me/6283832020245?text=${encodeURIComponent("Halo, saya ingin bertanya tentang kerja sama atau projek WhatsWant ini?")}`
            }
        ]
    },
    {
        id: 5,
        title: "RAG AI Chatbot TA dan Yudisium",
        description:
            "A blog website built with Astro, allowing users to read and write articles on various topics.",
        image: "/assets/blog.png",
        link: "/projects/blog-website",
        start_periode: "2026-02-01",
        end_periode: "2026-07-01",
        summary: "Chatbot web RAG berbahasa Indonesia untuk membantu mahasiswa bertanya seputar Tugas Akhir, sidang TA, pembimbing, yudisium, kelulusan, dan administrasi akademik terkait. Bot tertanam di homepage web (login mahasiswa), memakai Gemini sebagai model utama, dan Groq sebagai fallback jika Gemini terkena quota/rate limit.",
        type: "Project",
        slidesProject: [
            {
                image: 'images/Projek/Sruhh/login.png',
                title: 'Gotong Royong',
                desc: 'Membangun lingkungan yang bersih dan nyaman bersama.'
            },
            {
                image: 'images/Projek/Sruhh/chat.png',
                title: 'Kegiatan Warga',
                desc: 'Transparansi dana RT untuk kesejahteraan kita semua.'
            },
            {
                image: 'images/Projek/Sruhh/knowledge.png',
                title: 'Musyawarah Digital',
                desc: 'Sistem Informasi Bank Sampah & Keuangan Terpadu.'
            }
        ],
        linkDoc: [
            {
                icon: 'fa-github',
                title: 'Github',
                link: 'https://github.com/dzulfiqar03/SHRUHH_SSC-Bot-TA-dan-Yudisium.git'
            },
            {
                icon: 'fa-envelope',
                title: 'email',
                link: `mailto:muhammaddzulfiqar03@email.com?subject=${encodeURIComponent(
                    "Halo Dzul, saya ingin diskusi proyek RAG Bot TA Yudisium"
                )}&body=${encodeURIComponent(
                    "Halo Dzul,\n\nSaya ingin bertanya lebih lanjut mengenai kerja sama atau projek RAG Bot TA Yudisium ini?\n\nTerima kasih."
                )}`,
            },
            {
                icon: 'fa-whatsapp',
                title: 'Whatsapp',
                link: `https://wa.me/6283832020245?text=${encodeURIComponent("Halo, saya ingin bertanya tentang kerja sama atau projek RAG Bot TA Yudisium ini?")}`
            }
        ]
    },

];