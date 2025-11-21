// data.jsx
import {
  FaStar,
  FaRegStar,
  FaHeart,
  FaShoppingCart,
  FaTag,
} from "react-icons/fa";

export const categories = [
  { id: "hats", name: "Hats" },
  { id: "bags", name: "Bags" },
  { id: "toys", name: "Amigurumi Toys" },
  { id: "home", name: "Home Decor" },
  { id: "accessories", name: "Accessories" },
  { id: "clothing", name: "Clothing" },
];

export const crochetProducts = [
  {
    id: 1,
    name: "Crochet Bucket Hat",
    price: 1200,
    stock: 14,
    category: "hats",
    image: "/assets/bucket-hat.jpg",
    images: [
      "/assets/bucket-hat.jpg",
      "/assets/bucket-hat-side.jpg",
      "/assets/bucket-hat-detail.jpg",
    ],
    description:
      "Handmade crochet bucket hat made with soft cotton yarn. Lightweight, breathable and stylish for any season.",
    rating: 4,
    tags: ["fashion", "hat", "trendy", "summer"],
    favorite: false,
  },

  {
    id: 2,
    name: "Amigurumi Teddy Bear",
    price: 1500,
    stock: 8,
    category: "toys",
    image: "/assets/teddy-bear.jpg",
    images: [
      "/assets/teddy-bear.jpg",
      "/assets/teddy-bear-back.jpg",
      "/assets/teddy-bear-cute.jpg",
    ],
    description:
      "Cute amigurumi teddy bear stuffed toy, crocheted with premium yarn. Perfect for kids and gifts.",
    rating: 5,
    tags: ["teddy", "gift", "kids", "amigurumi"],
    favorite: true,
  },

  {
    id: 3,
    name: "Crochet Tote Bag",
    price: 1800,
    stock: 5,
    category: "bags",
    image: "/assets/tote-bag.jpg",
    images: [
      "/assets/tote-bag.jpg",
      "/assets/tote-bag-inside.jpg",
      "/assets/tote-bag-handle.jpg",
    ],
    description:
      "Strong and stylish crochet tote bag, spacious and durable for everyday use.",
    rating: 4,
    tags: ["bag", "handbag", "shopping"],
    favorite: false,
  },

  {
    id: 4,
    name: "Crochet Coasters (Set of 4)",
    price: 600,
    stock: 20,
    category: "home",
    image: "/assets/coasters.jpg",
    images: [
      "/assets/coasters.jpg",
      "/assets/coasters-set.jpg",
      "/assets/coasters-detail.jpg",
    ],
    description:
      "Beautiful handmade coasters for your dining or living room. Heat resistant and washable.",
    rating: 3,
    tags: ["home", "coasters", "decor"],
    favorite: false,
  },

  {
    id: 5,
    name: "Crochet Headband",
    price: 350,
    stock: 30,
    category: "accessories",
    image: "/assets/headband.jpg",
    images: [
      "/assets/headband.jpg",
      "/assets/headband-side.jpg",
      "/assets/headband-detail.jpg",
    ],
    description:
      "Soft crochet headband available in multiple colors. Perfect for casual outfits.",
    rating: 4,
    tags: ["accessory", "headband", "fashion"],
    favorite: true,
  },

  {
    id: 6,
    name: "Crochet Crop Top",
    price: 2000,
    stock: 10,
    category: "clothing",
    image: "/assets/crop-top.jpg",
    images: [
      "/assets/crop-top.jpg",
      "/assets/crop-top-back.jpg",
      "/assets/crop-top-detail.jpg",
    ],
    description:
      "Handmade crochet crop top perfect for festivals, events, and summer outfits.",
    rating: 5,
    tags: ["top", "fashion", "clothing"],
    favorite: false,
  },

  {
    id: 7,
    name: "Crochet Keychain Flower",
    price: 200,
    stock: 50,
    category: "accessories",
    image: "/assets/keychain-flower.jpg",
    images: [
      "/assets/keychain-flower.jpg",
      "/assets/keychain-flower-close.jpg",
      "/assets/keychain-flower-colorful.jpg",
    ],
    description:
      "Cute crochet flower keychain available in multiple colors. Great for gifts.",
    rating: 4,
    tags: ["keychain", "flower", "gift"],
    favorite: true,
  },

  {
    id: 8,
    name: "Crochet Pillow Cover",
    price: 1400,
    stock: 12,
    category: "home",
    image: "/assets/pillow-cover.jpg",
    images: [
      "/assets/pillow-cover.jpg",
      "/assets/pillow-cover-back.jpg",
      "/assets/pillow-cover-detail.jpg",
    ],
    description:
      "Elegant handmade crochet pillow cover to elevate your living space.",
    rating: 5,
    tags: ["home", "decor", "pillow"],
    favorite: false,
  },
];

export const icons = {
  star: <FaStar />,
  emptyStar: <FaRegStar />,
  heart: <FaHeart />,
  cart: <FaShoppingCart />,
  tag: <FaTag />,
};
