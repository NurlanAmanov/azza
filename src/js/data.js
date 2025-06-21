const products = [
  // Tortlar (6 ədəd - sənin verdiyin 4 tort + 2 yeni)
  [
    {
      id: 1,
      title: "Noisette tortu",
      category: "Tort",
      price: 20.0,
      image: "https://azza.az/wp-content/uploads/2025/03/vertical-selective-focus-cake-stand-with-tasty-cake-pieces44-1536x1275.jpg"
    },
    {
      id: 2,
      title: "Truffel tortu",
      category: "Tort",
      price: 15.0,
      image: "https://azza.az/wp-content/uploads/2020/07/lv5a6386-kopiya.jpg"
    },
    {
      id: 3,
      title: "Blinçik tortu (Summer pankeyk)",
      category: "Tort",
      price: 23.0,
      image: "https://azza.az/wp-content/uploads/2020/07/20230907_094009-768x615.jpg"
    },
    {
      id: 4,
      title: "Napoleon",
      category: "Tort",
      price: 14.5,
      image: "https://azza.az/wp-content/uploads/2020/07/MG_8606-1-1536x1168.jpg"
    },
    {
      id: 54,
      title: "Şokoladlı Meyvə Tortu",
      category: "Tort",
      price: 18.0,
      image: "https://azza.az/wp-content/uploads/2020/07/lv5a6267-kopiya.jpg"
    },
    {
      id: 55,
      title: "Karamel Tortu",
      category: "Tort",
      price: 16.5,
      image: "https://azza.az/wp-content/uploads/2020/07/freshly-baked-plain-eclairs-with-cinnamon-sticks-768x545.jpg"
    }
  ],
  // Piroqlar (6 ədəd - sənin datadan 3 piroq + 3 yeni)
  [
    {
      id: 56,
      title: "Alma Piroqu",
      category: "Piroq",
      price: 8.5,
      image: "https://azza.az/wp-content/uploads/2020/07/lv5a5895-kopiya-768x484.jpg"
    },
    {
      id: 57,
      title: "Ananas Piroqu",
      category: "Piroq",
      price: 9.0,
      image: "https://azza.az/wp-content/uploads/2020/07/lv5a5933-kopiya-768x508.jpg"
    },
    {
      id: 58,
      title: "Armud Piroqu",
      category: "Piroq",
      price: 10.0,
      image: "https://azza.az/wp-content/uploads/2020/07/mg_7770-72-768x512.jpg"
    },
    {
      id: 59,
      title: "Albalı Piroqu",
      category: "Piroq",
      price: 9.5,
      image: "https://azza.az/wp-content/uploads/2020/07/lv5a5969-kopiya-768x506.jpg"
    },
    {
      id: 60,
      title: "Şokoladlı Piroq",
      category: "Piroq",
      price: 11.0,
      image: "https://azza.az/wp-content/uploads/2023/01/MG_9321-768x509.jpg"
    },
    {
      id: 61,
      title: "Qozlu Piroq",
      category: "Piroq",
      price: 10.5,
      image: "https://azza.az/wp-content/uploads/2020/07/lv5a5287-2-kopiya.jpg"
    }
  ],
  // Milli Şirniyyatlar (6 ədəd - sənin datadan 5 məhsul + 1 yeni)
  [
    {
      id: 62,
      title: "Paxlava Bakı",
      category: "Milli Şirniyyat",
      price: 8.0,
      image: "https://azza.az/wp-content/uploads/2020/07/lv5a5577-2-kopiya-768x520.jpg"
    },
    {
      id: 63,
      title: "Şəkərbura xırda",
      category: "Milli Şirniyyat",
      price: 8.0,
      image: "https://azza.az/wp-content/uploads/2020/07/lv5a8533-768x542.jpg"
    },
    {
      id: 64,
      title: "Qoğal səpmə",
      category: "Milli Şirniyy aroundat",
      price: 0.9,
      image: "https://azza.az/wp-content/uploads/2020/07/lv5a6837-kopiya-768x507.jpg"
    },
    {
      id: 65,
      title: "Kətə Badamlı",
      category: "Milli Şirniyyat",
      price: 5.9,
      image: "https://azza.az/wp-content/uploads/2020/07/lv5a7964-768x513.jpg"
    },
    {
      id: 66,
      title: "Mutaki qoz ilə – small",
      category: "Milli Şirniyyat",
      price: 4.0,
      image: "https://azza.az/wp-content/uploads/2025/06/untitled-design1-768x1025.jpg"
    },
    {
      id: 67,
      title: "Badamlı Paxlava",
      category: "Milli Şirniyyat",
      price: 8.5,
      image: "https://azza.az/wp-content/uploads/2020/07/lv5a5644-kopiya.jpg"
    }
  ],
  // Çörəklər (6 ədəd - yeni kateqoriya)
  [
    {
      id: 68,
      title: "Təndir Çörəyi",
      category: "Çörək",
      price: 1.0,
      image: "https://azza.az/wp-content/uploads/2020/07/lv5a6837-kopiya-768x507.jpg"
    },
    {
      id: 69,
      title: "Kəpəkli Çörək",
      category: "Çörək",
      price: 1.5,
      image: "https://azza.az/wp-content/uploads/2020/07/lv5a7996-768x495.jpg"
    },
    {
      id: 70,
      title: "Zeytunlu Çörək",
      category: "Çörək",
      price: 2.0,
      image: "https://azza.az/wp-content/uploads/2025/06/3223fd60-3f84-46c5-afac-e7dbcdba822b-768x1024.jpg"
    },
    {
      id: 71,
      title: "Qarabağ Çörəyi",
      category: "Çörək",
      price: 1.2,
      image: "https://azza.az/wp-content/uploads/2021/05/lv5a5825-kopiya-768x521.jpg"
    },
    {
      id: 72,
      title: "Sarımsaqlı Çörək",
      category: "Çörək",
      price: 1.8,
      image: "https://azza.az/wp-content/uploads/2020/07/lv5a7964-768x513.jpg"
    },
    {
      id: 73,
      title: "Küncütlü Çörək",
      category: "Çörək",
      price: 1.3,
      image: "https://azza.az/wp-content/uploads/2020/07/lv5a7996-768x495.jpg"
    }
  ],
  // Ruletlər (6 ədəd - sənin datadan 1 rulet + 5 yeni)
  [
   
    {
      id: 75,
      title: "Şokoladlı Rulet",
      category: "Rulet",
      price: 12.0,
      image: "https://azza.az/wp-content/uploads/2023/01/MG_9321-768x509.jpg"
    },
    {
      id: 76,
      title: "Kremli Rulet",
      category: "Rulet",
      price: 10.5,
      image: "https://azza.az/wp-content/uploads/2020/07/mg_7840-kicik-768x533.jpg"
    },
    {
      id: 77,
      title: "Fındıqlı Rulet",
      category: "Rulet",
      price: 13.0,
      image: "https://azza.az/wp-content/uploads/2020/07/lv5a5287-2-kopiya.jpg"
    },
    {
      id: 78,
      title: "Çiyələkli Rulet",
      category: "Rulet",
      price: 11.5,
      image: "https://azza.az/wp-content/uploads/2020/07/mg_8154-768x512.jpg"
    },
    {
      id: 79,
      title: "Karamelli Rulet",
      category: "Rulet",
      price: 12.5,
      image: "https://azza.az/wp-content/uploads/2020/07/freshly-baked-plain-eclairs-with-cinnamon-sticks-768x545.jpg"
    }
  ],
  // Eklərlər (6 ədəd - sənin datadan 5 ekler + 1 yeni)
  [
    {
      id: 17,
      title: "Ekler Şokolad",
      category: "Ekler",
      price: 1.5,
      image: "https://azza.az/wp-content/uploads/2020/07/traditional-french-eclairs-with-chocolate-glass-cup-tea11-768x679.jpg"
    },
    {
      id: 18,
      title: "Ekler Tiramisu",
      category: "Ekler",
      price: 1.5,
      image: "https://azza.az/wp-content/uploads/2020/07/mg_7840-kicik-768x533.jpg"
    },
    {
      id: 19,
      title: "Ekler Karamel",
      category: "Ekler",
      price: 1.4,
      image: "https://azza.az/wp-content/uploads/2020/07/freshly-baked-plain-eclairs-with-cinnamon-sticks-768x545.jpg"
    },
    {
      id: 20,
      title: "Ekler Şu",
      category: "Ekler",
      price: 2.0,
      image: "https://azza.az/wp-content/uploads/2020/07/lv5a6627-kopiya-768x509.jpg"
    },
    {
      id: 21,
      title: "Ekler Mini Mix",
      category: "Ekler",
      price: 5.0,
      image: "https://azza.az/wp-content/uploads/2020/07/mg_8179-1-768x512.jpg"
    },
    {
      id: 80,
      title: "Ekler Vanil",
      category: "Ekler",
      price: 1.3,
      image: "https://azza.az/wp-content/uploads/2020/07/mg_8154-768x512.jpg"
    }
  ],
  // Peçenyelər (6 ədəd - sənin datadan 4 peçenye + 2 yeni)
  [
    {
      id: 9,
      title: "Macaroons",
      category: "Peçenye",
      price: 7.0,
      image: "https://azza.az/wp-content/uploads/2020/07/lv5a5347-kopiya.jpg"
    },
    {
      id: 10,
      title: "Kuki butter",
      category: "Peçenye",
      price: 4.0,
      image: "https://azza.az/wp-content/uploads/2022/10/MG_93751-1536x1024.jpg"
    },
    {
      id: 12,
      title: "Kuki badam və kakao ilə",
      category: "Peçenye",
      price: 4.0,
      image: "https://azza.az/wp-content/uploads/2020/07/lv5a5339-kopiya.jpg"
    },
    {
      id: 13,
      title: "Kuki Badamlı",
      category: "Peçenye",
      price: 4.5,
      image: "https://azza.az/wp-content/uploads/2020/07/lv5a5818-kopiya.jpg"
    },
    {
      id: 81,
      title: "Kuki Şokoladlı",
      category: "Peçenye",
      price: 4.2,
      image: "https://azza.az/wp-content/uploads/2023/01/MG_9321-768x509.jpg"
    },
    {
      id: 82,
      title: "Kuki Kokoslu",
      category: "Peçenye",
      price: 4.3,
      image: "https://azza.az/wp-content/uploads/2020/07/lv5a5347-kopiya.jpg"
    }
  ],
  // Şirniyyatlar - Qrup 1 (sənin datadan saxlanılır)
  [
    {
      id: 5,
      title: "Tiramisu",
      category: "Şirniyyat",
      price: 10.0,
      image: "https://azza.az/wp-content/uploads/2020/07/20231212_130512-768x592.jpg"
    },
    {
      id: 6,
      title: "Mix berry",
      category: "Şirniyyat",
      price: 22.0,
      image: "https://azza.az/wp-content/uploads/2020/07/lv5a6267-kopiya.jpg"
    },
    {
      id: 7,
      title: "Profiterole",
      category: "Şirniyyat",
      price: 25.0,
      image: "https://azza.az/wp-content/uploads/2020/07/lv5a6139-kopiya.jpg"
    },
    {
      id: 8,
      title: "Skazka",
      category: "Şirniyyat",
      price: 14.0,
      image: "https://azza.az/wp-content/uploads/2020/07/img_7384.jpg"
    }
  ],
  // Şirniyyatlar - Qrup 2 (sənin datadan saxlanılır)
  [
    {
      id: 11,
      title: "Qoz qatılaşdırılmış süd ilə",
      category: "Şirniyyat",
      price: 6.0,
      image: "https://azza.az/wp-content/uploads/2020/07/lv5a5287-2-kopiya.jpg"
    },
    {
      id: 14,
      title: "Mutaki qoz ilə",
      category: "Şirniyyat",
      price: 4.7,
      image: "https://azza.az/wp-content/uploads/2020/07/lv5a5629-kopiya-4.jpg"
    },
    {
      id: 15,
      title: "Mutaki badam ilə",
      category: "Şirniyyat",
      price: 5.0,
      image: "https://azza.az/wp-content/uploads/2020/07/lv5a5644-kopiya.jpg"
    },
    {
      id: 16,
      title: "Kuki badam və qoz ilə",
      category: "Şirniyyat",
      price: 5.5,
      image: "https://azza.az/wp-content/uploads/2020/07/lv5a5748-kopiya.jpg"
    }
  ],
  // Şirniyyatlar - Qrup 3 (sənin datadan saxlanılır)
  [
    {
      id: 22,
      title: "Ekler Çiyələk ilə",
      category: "Şirniyyat",
      price: 1.5,
      image: "https://azza.az/wp-content/uploads/2020/07/mg_8154-768x512.jpg"
    },
    {
      id: 23,
      title: "Dubay desert",
      category: "Şirniyyat",
      price: 3.5,
      image: "https://azza.az/wp-content/uploads/2025/04/rrr-01-768x768.jpg"
    },
    {
      id: 24,
      title: "Mascotte desert",
      category: "Şirniyyat",
      price: 2.5,
      image: "https://azza.az/wp-content/uploads/2024/07/20240530_080559-768x638.jpg"
    },
    {
      id: 25,
      title: "Capitol desert",
      category: "Şirniyyat",
      price: 2.5,
      image: "https://azza.az/wp-content/uploads/2023/06/IMG_0488-1-768x538.jpg"
    }
  ],
  // Şirniyyatlar - Qrup 4 (sənin datadan saxlanılır)
  [
    {
      id: 26,
      title: "Trufel desert",
      category: "Şirniyyat",
      price: 2.6,
      image: "https://azza.az/wp-content/uploads/2023/04/1.1-768x512.jpg"
    },
    {
      id: 27,
      title: "Brauni Desert",
      category: "Şirniyyat",
      price: 2.5,
      image: "https://azza.az/wp-content/uploads/2022/12/photo_2025-04-24_15-34-39-1-768x868.jpg"
    },
    {
      id: 28,
      title: "Piroq Alma və Kəsmik ilə",
      category: "Şirniyyat",
      price: 8.9,
      image: "https://azza.az/wp-content/uploads/2020/07/lv5a5895-kopiya-768x484.jpg"
    },
    {
      id: 31,
      title: "Apple Crumble",
      category: "Şirniyyat",
      price: 9.0,
      image: "https://azza.az/wp-content/uploads/2020/07/lv5a8127-1-768x524.jpg"
    }
  ],
  // Şirniyyatlar - Qrup 5 (sənin datadan saxlanılır)
  [
    {
      id: 33,
      title: "Dubay üsulu şokolad",
      category: "Şirniyyat",
      price: 6.4,
      image: "https://azza.az/wp-content/uploads/2025/01/photo_2025-01-24_16-56-25-768x1024.jpg"
    },
    {
      id: 34,
      title: "Brauni",
      category: "Şirniyyat",
      price: 5.9,
      image: "https://azza.az/wp-content/uploads/2023/01/MG_9321-768x509.jpg"
    },
    {
      id: 35,
      title: "Südlü draje badam və şəkər pudrası ilə",
      category: "Şirniyyat",
      price: 10.0,
      image: "https://azza.az/wp-content/uploads/2024/05/photo_2024-04-24_08-47-42-768x806.jpg"
    },
    {
      id: 36,
      title: "Südlü draje badam və kakao ilə",
      category: "Şirniyyat",
      price: 6.0,
      image: "https://azza.az/wp-content/uploads/2024/05/photo_2024-04-24_08-48-02-768x731.jpg"
    }
  ],
  // Şirniyyatlar - Qrup 6 (sənin datadan saxlanılır)
  [
    {
      id: 37,
      title: "Südlü şokolad fındıq ilə",
      category: "Şirniyyat",
      price: 7.5,
      image: "https://azza.az/wp-content/uploads/2023/01/milk-findiq-ile.jpg"
    },
    {
      id: 38,
      title: "Tviks",
      category: "Şirniyyat",
      price: 12.0,
      image: "https://azza.az/wp-content/uploads/2023/01/MG_9100.72-768x630.png"
    },
    {
      id: 39,
      title: "Südlü Azza şokoladı badam, fındıq və kişmiş ilə",
      category: "Şirniyyat",
      price: 7.0,
      image: "https://azza.az/wp-content/uploads/2022/12/almonds-hazelnut-raisin011-768x512.jpg"
    },
    {
      id: 40,
      title: "Mutaki qoz ilə – small",
      category: "Şirniyyat",
      price: 4.0,
      image: "https://azza.az/wp-content/uploads/2025/06/untitled-design1-768x1025.jpg"
    }
  ],
  // Şirniyyatlar - Qrup 7 (sənin datadan saxlanılır)
  [
    {
      id: 41,
      title: "Mutaki badam ilə – small",
      category: "Şirniyyat",
      price: 3.8,
      image: "https://azza.az/wp-content/uploads/2025/06/83c252ed-c66f-4326-a48e-3fc13dec8cca-768x1024.jpg"
    },
    {
      id: 42,
      title: "Kətə Badamlı – small",
      category: "Şirniyyat",
      price: 4.3,
      image: "https://azza.az/wp-content/uploads/2020/07/3952677d-e906-4dbb-8c05-da4927486a85-768x1024.jpg"
    },
    {
      id: 43,
      title: "Kətə Qarabağ",
      category: "Şirniyyat",
      price: 3.5,
      image: "https://azza.az/wp-content/uploads/2021/05/lv5a5825-kopiya-768x521.jpg"
    },
    {
      id: 48,
      title: "Grissini – small",
      category: "Şirniyyat",
      price: 1.4,
      image: "https://azza.az/wp-content/uploads/2025/06/3223fd60-3f84-46c5-afac-e7dbcdba822b-768x1024.jpg"
    }
  ],
  // İçkilər (sənin datadan saxlanılır, 4 ədəd)
  [
    {
      id: 50,
      title: "Şərab",
      category: "İçki",
      price: 38.0,
      image: "https://azza.az/wp-content/uploads/2020/08/386646-1.jpg"
    },
    {
      id: 51,
      title: "Konyak",
      category: "İçki",
      price: 28.0,
      image: "https://azza.az/wp-content/uploads/2020/06/alcohol3-min.png"
    },
    {
      id: 52,
      title: "Viski",
      category: "İçki",
      price: 29.0,
      image: "https://azza.az/wp-content/uploads/2020/07/alcohol4-min.png"
    },
    {
      id: 53,
      title: "Tekila",
      category: "İçki",
      price: 60.0,
      image: "https://azza.az/wp-content/uploads/2020/07/alcohol5-min.png"
    }
  ]
];

export default products;