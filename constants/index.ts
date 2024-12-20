import home from "@/assets/icons/tabs/home.png";
import homc from "@/assets/icons/tabs/homc.png";
import search from "@/assets/icons/tabs/search.png";
import cart from "@/assets/icons/tabs/cart.png";
import profile from "@/assets/icons/tabs/profile.png";
import logo from "@/assets/images/logo.png";
import onb1 from "@/assets/images/onb1.png";
import onb2 from "@/assets/images/onb2.png";
import onb3 from "@/assets/images/onb3.png";
import searchHome from "@/assets/icons/search.png";
import menu from '@/assets/icons/menu.png'
import userImage from '@/assets/images/user.png'
import search2 from "@/assets/icons/search2.png"
import productOne from '@/assets/images/product.png'
import { Slide } from "./types";

export const ICONS = {
    home,
    homc,
    search,
    cart,
  profile,
  searchHome,
  menu,
    search2
  };
  
  export const IMAGES = {
    logo,
    onb1,
    onb2,
    onb3,
    userImage,
    productOne
  };

export const categories = [
  {
    id: 1,
  title:"חלבון"
  },
  {
    id: 2,
    title: "קריאטין",
  },
  {
    id: 3,
    title:'ויטמינים',
  },
  {
    id: 4,
    title:"עוגיות וברים"
  },
]
  

export const productsDiscounted = [
  {
    id: 1,
    image: IMAGES.productOne,
    title: "ויטמין D-3 1000",
    price: 215,
    feedbacks: [1, 2, 3, 4, 5, 5, 6],
    rating: 4.5,
    isFav: false,
    discount:15,
  },
  {
    id: 2,
    image: IMAGES.productOne,
    title: "ויטמין D-3 1000",
    price: 215,
    feedbacks: [1, 2, 3, 4, 5, 5, 6],
    rating: 4.5,
    isFav: false,
     discount:15,
  },
  {
    id: 3,
    image: IMAGES.productOne,
    title: "ויטמין D-3 1000",
    price: 215,
    feedbacks: [1, 2, 3, 4, 5, 5, 6],
    rating: 4.5,
    isFav: false,
     discount:15,
  },
]
export const products = [
  {
    id: 1,
    image: IMAGES.productOne,
    title: "ויטמין D-3 1000",
    price: 215,
    feedbacks: [1, 2, 3, 4, 5, 5, 6],
    rating: 4.5,
    isFav: false,
    discount:0,
  },
  {
    id: 2,
    image: IMAGES.productOne,
    title: "ויטמין D-3 1000",
    price: 215,
    feedbacks: [1, 2, 3, 4, 5, 5, 6],
    rating: 4.5,
    isFav: false,
     discount:0,
  },
  {
    id: 3,
    image: IMAGES.productOne,
    title: "ויטמין D-3 1000",
    price: 215,
    feedbacks: [1, 2, 3, 4, 5, 5, 6],
    rating: 4.5,
    isFav: false,
     discount:0,
  },
  {
    id: 4,
    image: IMAGES.productOne,
    title: "ויטמין D-3 1000",
    price: 215,
    feedbacks: [1, 2, 3, 4, 5, 5, 6],
    rating: 4.5,
    isFav: false,
     discount:0,
  },
  {
    id: 5,
    image: IMAGES.productOne,
    title: "ויטמין D-3 1000",
    price: 215,
    feedbacks: [1, 2, 3, 4, 5, 5, 6],
    rating: 4.5,
    isFav: false,
     discount:0,
  },
  {
    id: 6,
    image: IMAGES.productOne,
    title: "ויטמין D-3 1000",
    price: 215,
    feedbacks: [1, 2, 3, 4, 5, 5, 6],
    rating: 4.5,
    isFav: false,
     discount:0,
  },
  {
    id: 7,
    image: IMAGES.productOne,
    title: "ויטמין D-3 1000",
    price: 215,
    feedbacks: [1, 2, 3, 4, 5, 5, 6],
    rating: 4.5,
    isFav: false,
     discount:0,
  },
  {
    id: 8,
    image: IMAGES.productOne,
    title: "ויטמין D-3 1000",
    price: 215,
    feedbacks: [1, 2, 3, 4, 5, 5, 6],
    rating: 4.5,
    isFav: false,
     discount:0,
  },
  {
    id: 9,
    image: IMAGES.productOne,
    title: "ויטמין D-3 1000",
    price: 215,
    feedbacks: [1, 2, 3, 4, 5, 5, 6],
    rating: 4.5,
    isFav: false,
    discount:0,
  },
]


export const slides:Slide[] = [
  {
    title: "ברוכים הבאים לגיינז!",
    description: "את/ה במרחק של כמה קליקים מכניסה לעולם תוספי התזונה לחדר כושר",
    image: IMAGES.onb1,
  },
  {
    title: "עיין במגוון רחב של תוספי מזון",
    description: "חקור מבחר מגוון של תוספי חדר כושר באיכות גבוהה עם גיינז",
    image: IMAGES.onb2,
  },
  {
    title: "משלוח מהיר ואמין",
    description:
      "תיהנו ממשלוח מהיר ואמין עם גיינז. השירות המסור שלנו מבטיח שתוספי התזונה שלך יגיעו במהירות לדלתך",
    image: IMAGES.onb3,
  },
];