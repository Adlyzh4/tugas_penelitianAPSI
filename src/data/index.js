import MenuImage1 from "../assets/img/menu/menu-1.jpeg";
import MenuImage2 from "../assets/img/menu/menu-2.jpeg";
import MenuImage3 from "../assets/img/menu/menu-3.jpeg";
import MenuImage4 from "../assets/img/menu/menu-4.jpeg";
import MenuImage5 from "../assets/img/menu/menu-5.jpeg";
import MenuImage6 from "../assets/img/menu/menu-6.jpeg";
import MenuImage7 from "../assets/img/menu/menu-7.jpg";
import MenuImage8 from "../assets/img/menu/menu-8.jpg";
import MenuImage9 from "../assets/img/menu/menu-9.jpg";

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

export const semuaMenu = {
  makanan: [
    {
      id: 1,
      image: MenuImage1,
      star1: "fa-solid fa-star",
      rating: "4.5",
      title: "Steak Ayam Barbeque",
      price: "Rp.300.000",
      promoPrice: "Rp. 250.000",
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
      title: "Steak Saus Spesial",
      price: "Rp.340.000",
      buy: "Pesan Sekarang",
      delay: "1600",
    },
    {
      id: 3,
      image: MenuImage3,
      star1: "fa-solid fa-star",
      rating: "4.5",
      title: "Steak Saus Madu",
      price: "Rp.280.000",
      buy: "Pesan Sekarang",
      delay: "1900",
    },
  ],
  addon: [
    {
      id: 4,
      image: MenuImage4,
      star1: "fa-solid fa-star",
      rating: "4.5",
      title: "Kentang Goreng",
      price: "Rp. 420.000",
      buy: "Pesan Sekarang",
      delay: "",
    },
    {
      id: 5,
      image: MenuImage5,
      star1: "fa-solid fa-star",
      rating: "4.5",
      title: "Nasi Putih",
      price: "Rp.380.000",
      buy: "Pesan Sekarang",
      delay: "300",
    },
  ],
  cemilan: [
    {
      id: 6,
      image: MenuImage6,
      star1: "fa-solid fa-star",
      rating: "4.5",
      title: "Sosis Goreng",
      price: "Rp.300.000",
      buy: "Pesan Sekarang",
      delay: "600",
    },
  ],
  minuman: [
    {
      id: 7,
      image: MenuImage1,
      star1: "fa-solid fa-star",
      star5: "fa-solid fa-star-half-stroke",
      rating: "4.5",
      title: "Es Teh Manis",
      price: "Rp.340.000",
      buy: "Pesan Sekarang",
      delay: "",
    },
    {
      id: 8,
      image: MenuImage2,
      star1: "fa-solid fa-star",
      star5: "fa-solid fa-star-half-stroke",
      rating: "4.5",
      title: "Lemon Tea",
      price: "Rp.400.000",
      buy: "Pesan Sekarang",
      delay: "300",
    },
    {
      id: 9,
      image: MenuImage3,
      star1: "fa-solid fa-star",
      star5: "fa-solid fa-star-half-stroke",
      rating: "4.5",
      title: "Milkshake",
      price: "Rp.320.000",
      buy: "Pesan Sekarang",
      delay: "600",
    },
  ],
};

export const menuTerbaru = [
  {
    id: 1,
    image: MenuImage1,
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star-half-stroke",
    title: "Steak Ayam Barbeque",
    price: "Rp.300.000",
    buy: "Pesan Sekarang",
    delay: "",
  },
  {
    id: 2,
    image: MenuImage2,
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star",
    title: "Steak Ayam Barbeque",
    price: "Rp.340.000",
    buy: "Pesan Sekarang",
    delay: "200",
  },
  {
    id: 3,
    image: MenuImage3,
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star",
    title: "Steak Ayam Barbeque",
    price: "Rp.280.000",
    buy: "Pesan Sekarang",
    delay: "400",
  },
  {
    id: 4,
    image: MenuImage4,
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star",
    title: "Steak Ayam Barbeque",
    price: "Rp.420.000",
    buy: "Pesan Sekarang",
    delay: "",
  },
  {
    id: 5,
    image: MenuImage5,
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star",
    title: "Steak Ayam Barbeque",
    price: "Rp.380.000",
    buy: "Pesan Sekarang",
    delay: "200",
  },
  {
    id: 6,
    image: MenuImage6,
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star",
    title: "Steak Ayam Barbeque",
    price: "Rp.300.000",
    buy: "Pesan Sekarang",
    delay: "400",
  },
];

export const testimonial = [
  {
    id: 1,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
    image: People1,
    name: "People 1",
    skill: "Food Reviewer",
  },
  {
    id: 2,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
    image: People2,
    name: "People 2",
    skill: "Food Reviewer",
  },
  {
    id: 3,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
    image: People3,
    name: "People 3",
    skill: "Food Reviewer",
  },
  {
    id: 4,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
    image: People1,
    name: "People 4",
    skill: "Food Reviewer",
  },
  {
    id: 5,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
    image: People2,
    name: "People 5",
    skill: "Food Reviewer",
  },
  {
    id: 6,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
    image: People3,
    name: "People 6",
    skill: "Food Reviewer",
  },
];


export const dataSwiper = [
  {
    id: 1,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
    image: People1,
    name: "People 1",
    skill: "Food Reviewer",
  },
  {
    id: 2,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
    image: People2,
    name: "People 2",
    skill: "Food Reviewer",
  },
  {
    id: 3,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
    image: People3,
    name: "People 3",
    skill: "Food Reviewer",
  },
  {
    id: 4,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
    image: People1,
    name: "People 4",
    skill: "Food Reviewer",
  },
  {
    id: 5,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
    image: People2,
    name: "People 5",
    skill: "Food Reviewer",
  },
  {
    id: 6,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
    image: People3,
    name: "People 6",
    skill: "Food Reviewer",
  },
];

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

