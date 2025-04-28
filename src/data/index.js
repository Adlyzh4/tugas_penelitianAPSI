import MenuImage1 from "../assets/img/menu/menu-1.jpeg";
import MenuImage2 from "../assets/img/menu/menu-2.jpeg";
import MenuImage3 from "../assets/img/menu/menu-3.jpeg";
import MenuImage4 from "../assets/img/menu/menu-4.jpeg";
import MenuImage5 from "../assets/img/menu/menu-5.jpeg";
import MenuImage6 from "../assets/img/menu/menu-6.jpeg";
import MenuImage7 from "../assets/img/menu/spaghetti.jpg";
import MenuImage8 from "../assets/img/menu/soto-ayam.jpg";
import MenuImage9 from "../assets/img/menu/soto-ceker.jpg";
import MenuImage10 from "../assets/img/menu/nasi.jpg";
import MenuImage11 from "../assets/img/menu/telur.jpg";
import MenuImage12 from "../assets/img/menu/brown-sauce.jpg";
import MenuImage13 from "../assets/img/menu/red-sauce.jpg";
import MenuImage14 from "../assets/img/menu/black-sauce.jpg";
import MenuImage15 from "../assets/img/menu/chicken-pop.jpeg";
import MenuImage16 from "../assets/img/menu/french-fries.jpg";
import MenuImage17 from "../assets/img/menu/dimsum.jpg";
import MenuImage18 from "../assets/img/menu/cireng.jpg";
import MenuImage19 from "../assets/img/menu/teh-manis.jpeg";
import MenuImage20 from "../assets/img/menu/teh-tawar.jpg";
import MenuImage21 from "../assets/img/menu/air-mineral.jpg";

import People1 from "../assets/img/testi/people-1.jpg";
import People2 from "../assets/img/testi/people-2.jpg";
import People3 from "../assets/img/testi/people-3.jpg";

import Member from "../assets/img/logomember.png";
import bantet from "../assets/img/bantet.jpg";
import promoLogo from "../assets/img/logopromo3.png";

export const navLinks = [
  {
    id: 1,
    path: "/",
    text: "Home",
  },
  {
    id: 2,
    path: "menu",
    text: "Menu",
  },
  {
    id: 3,
    path: "testi",
    text: "Testi",
  },
  {
    id: 4,
    path: "faq",
    text: "FAQ",
  },

  {
    id: 5,
    path: 'about',
    text: 'About Us'
  },

  {
    id: 6,
    path: 'contact',
    text: 'Contact Us'
  }
];


// data menu
export const semuaMenu = {
  makanan: [
    {
      id: 1,
      image: MenuImage1,
      star1: "fa-solid fa-star",
      rating: "4.5",
      title: "Chicken Steak",
      price: "Rp.25.000",
      promoPrice: "Rp. 20.000",
      buy: "Pesan Sekarang",
      promoLogo,
      delay: "1300",
      isPromo: true,
    },
    {
      id: 2,
      image: MenuImage2,
      star1: "fa-solid fa-star",
      rating: "4.5",
      title: "Rice Bowl",
      price: "Rp.22.000",
      buy: "Pesan Sekarang",
      delay: "1600",
    },
    {
      id: 3,
      image: MenuImage3,
      star1: "fa-solid fa-star",
      rating: "4.5",
      title: "Chicken Katsu",
      price: "Rp.20.000",
      buy: "Pesan Sekarang",
      delay: "1900",
    },
    {
      id: 4,
      image: MenuImage4,
      star1: "fa-solid fa-star",
      rating: "4.5",
      title: "Chicken Grill",
      price: "Rp. 25.000",
      buy: "Pesan Sekarang",
      delay: "",
    },
    {
      id: 5,
      image: MenuImage7,
      star1: "fa-solid fa-star",
      rating: "4.5",
      title: "Spaghetti",
      price: "Rp. 15.000",
      buy: "Pesan Sekarang",
      delay: "",
    },
    {
      id: 6,
      image: MenuImage8,
      star1: "fa-solid fa-star",
      rating: "4.5",
      title: "Soto Ayam",
      price: "Rp. 15.000",
      buy: "Pesan Sekarang",
      delay: "",
    },
    {
      id: 7,
      image: MenuImage9,
      star1: "fa-solid fa-star",
      rating: "4.5",
      title: "Soto Ceker",
      price: "Rp. 15.000",
      buy: "Pesan Sekarang",
      delay: "",
    },
  ],
  addon: [
    {
      id: 8,
      image: MenuImage10,
      star1: "fa-solid fa-star",
      rating: "4.5",
      title: "Nasi Putih",
      price: "Rp. 5.000",
      buy: "Pesan Sekarang",
      delay: "",
    },
    {
      id: 9,
      image: MenuImage11,
      star1: "fa-solid fa-star",
      rating: "4.5",
      title: "Telur",
      price: "Rp.5.000",
      buy: "Pesan Sekarang",
      delay: "300",
    },
    {
      id: 10,
      image: MenuImage12,
      star1: "fa-solid fa-star",
      rating: "4.5",
      title: "Brown Sauce",
      price: "Rp.5.000",
      buy: "Pesan Sekarang",
      delay: "300",
    },
    {
      id: 11,
      image: MenuImage13,
      star1: "fa-solid fa-star",
      rating: "4.5",
      title: "Red Sauce",
      price: "Rp.5.000",
      buy: "Pesan Sekarang",
      delay: "300",
    },
    {
      id: 12,
      image: MenuImage14,
      star1: "fa-solid fa-star",
      rating: "4.5",
      title: "Black Sauce",
      price: "Rp.5.000",
      buy: "Pesan Sekarang",
      delay: "300",
    },
  ],
  cemilan: [
    {
      id: 13,
      image: MenuImage6,
      star1: "fa-solid fa-star",
      rating: "4.5",
      title: "Mix Box",
      price: "Rp.20.000",
      buy: "Pesan Sekarang",
      delay: "600",
    },
    {
      id: 14,
      image: MenuImage15,
      star1: "fa-solid fa-star",
      rating: "4.5",
      title: "Chicken Pop",
      price: "Rp.15.000",
      buy: "Pesan Sekarang",
      delay: "600",
    },
    {
      id: 15,
      image: MenuImage16,
      star1: "fa-solid fa-star",
      rating: "4.5",
      title: "French Fries",
      price: "Rp.12.000",
      buy: "Pesan Sekarang",
      delay: "600",
    },
    {
      id: 16,
      image: MenuImage17,
      star1: "fa-solid fa-star",
      rating: "4.5",
      title: "Dimsum",
      price: "Rp.10.000",
      buy: "Pesan Sekarang",
      delay: "600",
    },
    {
      id: 17,
      image: MenuImage18,
      star1: "fa-solid fa-star",
      rating: "4.5",
      title: "Cireng",
      price: "Rp.10.000",
      buy: "Pesan Sekarang",
      delay: "600",
    },
  ],
  minuman: [
    {
      id: 18,
      image: MenuImage19,
      star1: "fa-solid fa-star",
      star5: "fa-solid fa-star-half-stroke",
      rating: "4.5",
      title: "Teh Manis",
      price: "Rp.5.000",
      buy: "Pesan Sekarang",
      delay: "",
    },
    {
      id: 19,
      image: MenuImage20,
      star1: "fa-solid fa-star",
      star5: "fa-solid fa-star-half-stroke",
      rating: "4.5",
      title: "Teh Tawar",
      price: "Rp.3.000",
      buy: "Pesan Sekarang",
      delay: "300",
    },
    {
      id: 20,
      image: MenuImage21,
      star1: "fa-solid fa-star",
      star5: "fa-solid fa-star-half-stroke",
      rating: "4.5",
      title: "Air Mineral",
      price: "Rp.5.000",
      buy: "Pesan Sekarang",
      delay: "600",
    },
  ],
};


// data menucomponent
export const menuTerbaru = [
  {
    id: 1,
    image: MenuImage1,
    star1: "fa-solid fa-star",
    rating: "4.5",
    title: "Chicken Steak",
    price: "Rp.25.000",
    promoPrice: "Rp. 20.000",
    buy: "Pesan Sekarang",
    promoLogo,
    delay: "1300",
    isPromo: true,
  },
  {
    id: 2,
    image: MenuImage2,
    star1: "fa-solid fa-star",
    rating: "4.5",
    title: "Rice Bowl",
    price: "Rp.22.000",
    buy: "Pesan Sekarang",
    delay: "1600",
  },
  {
    id: 3,
    image: MenuImage3,
    star1: "fa-solid fa-star",
    rating: "4.5",
    title: "Chicken Katsu",
    price: "Rp.20.000",
    buy: "Pesan Sekarang",
    delay: "1900",
  },
  {
    id: 13,
    image: MenuImage6,
    star1: "fa-solid fa-star",
    rating: "4.5",
    title: "Mix Box",
    price: "Rp.20.000",
    buy: "Pesan Sekarang",
    delay: "600",
  },
  {
    id: 14,
    image: MenuImage15,
    star1: "fa-solid fa-star",
    rating: "4.5",
    title: "Chicken Pop",
    price: "Rp.15.000",
    buy: "Pesan Sekarang",
    delay: "600",
  },
  {
    id: 18,
    image: MenuImage19,
    star1: "fa-solid fa-star",
    star5: "fa-solid fa-star-half-stroke",
    rating: "4.5",
    title: "Teh Manis",
    price: "Rp.5.000",
    buy: "Pesan Sekarang",
    delay: "",
  },
];

// data testimonial
export const testimonial = [
  {
    id: 1,
    desc: "Menunya enak2 & murmer 😋 tempatnya mungil tp cukup nyaman",
    image: People1,
    name: "People 1",
    skill: "Food Reviewer",
  },
  {
    id: 2,
    desc: "Enak chicken grill dan chicken steak nya, sausnya banyak, udah include salad, kentang dan harga murah banget",
    image: People2,
    name: "People 2",
    skill: "Food Reviewer",
  },
  {
    id: 3,
    desc: "Pelayanan cepat, harga kaki lima rasa bintang lima, pasti ngak nyesal makan disini 👍👍👍👍👍👍👍👍👍",
    image: People3,
    name: "People 3",
    skill: "Food Reviewer",
  },
  {
    id: 4,
    desc: "Tempatnya sangat nyaman",
    image: People1,
    name: "People 4",
    skill: "Food Reviewer",
  },
  {
    id: 5,
    desc: "Steak Rasa Bintang 5, harga kaki 5, cocok buat anak kampus banget",
    image: People2,
    name: "People 5",
    skill: "Food Reviewer",
  },
  {
    id: 6,
    desc: "Rekomendasi ini tempat buat kumpul dan kluarga",
    image: People3,
    name: "People 6",
    skill: "Food Reviewer",
  },
];


// data faq
export const faq = [
  {
    id: 1,
    eventKey: 0,
    title: "Di mana lokasi Chicken Sizzle?",
    desc: "Chicken Sizzle berlokasi di pusat kota, tepatnya di Jl. Palakali No. 56, Kota Depok. Kami hadir di lokasi strategis agar mudah diakses, dengan suasana nyaman dan interior elegan yang dirancang khusus untuk pengalaman bersantap yang tak terlupakan.",
  },
  {
    id: 2,
    eventKey: 1,
    title: "Apakah bisa reservasi meja sebelumnya?",
    desc: "Tentu, kami sangat menyarankan untuk melakukan reservasi terlebih dahulu, terutama di akhir pekan atau hari libur. Anda dapat melakukan reservasi melalui website resmi kami atau menghubungi langsung tim layanan pelanggan kami yang siap membantu dengan ramah.",
  },
  {
    id: 3,
    eventKey: 2,
    title: "Apakah tersedia layanan pesan antar?",
    desc: "Ya, kami menyediakan layanan pesan antar eksklusif yang menjamin kualitas rasa tetap premium meski dinikmati di rumah. Kami bekerja sama dengan beberapa platform terpercaya serta memiliki layanan pengantaran pribadi untuk area tertentu.",
  },
  {
    id: 4,
    eventKey: 3,
    title: "Apa menu andalan di Chicken Sizzle?",
    desc: "Menu andalan kami adalah **Signature Grilled Chicken Sizzle** — ayam panggang lembut dengan bumbu rahasia khas kami, disajikan panas di atas hotplate dengan saus spesial. Perpaduan rasa gurih, smoky, dan elegan yang memanjakan lidah.",
  },
  {
    id: 5,
    eventKey: 4,
    title: "Apakah restoran menyediakan menu untuk vegetarian?",
    desc: "Kami menghargai semua preferensi dan kebutuhan pelanggan. Oleh karena itu, kami juga menyediakan beberapa pilihan menu vegetarian yang dirancang dengan rasa yang tetap mewah dan menggugah selera, tanpa mengurangi kualitas penyajian kami.",
  },
  {
    id: 6,
    eventKey: 5,
    title: "Apakah Chicken Sizzle menerima kerja sama acara?",
    desc: "Dengan senang hati! Kami melayani berbagai jenis acara seperti ulang tahun, gathering, hingga private dining. Tim kami akan membantu menyesuaikan konsep dan menu agar setiap momen Anda terasa istimewa dan berkelas.",
  },
];

// data about
export const Group = [
  {
    id: 1,
    image: Member,
    name: "Ahmad Diaz",
    role: "Project Manager",
  },
  {
    id: 2,
    image: Member,
    name: "Retno Triyas",
    role: "UI/UX Designer",
  },
  {
    id: 3,
    image: Member,
    name: "Fikri Ramadhan",
    role: "Frontend Developer",
  },
  {
    id: 4,
    image: Member,
    name: "Ahmad Ferdi",
    role: "Backend Developer",
  },
  {
    id: 5,
    image: bantet,
    name: "Naufal Rafi",
    role: "Partnership Coordinator",
  },
];

