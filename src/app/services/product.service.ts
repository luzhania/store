import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productList: Product[] = [
    {
      id: 1,
      title: "Apple - AirPods with Charging Case (2nd generation) - White",
      price: 109.95,
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "Technology article",
      image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6084/6084400_sd.jpg;maxHeight=640;maxWidth=550",
      rating: {
        "rate": 3.9,
        "count": 120
      }
    },
    {
      id: 2,
      title: "MacBook Air 13.6'' Laptop - Apple M2 chip - 8GB Memory - 256GB SSD - Midnight",
      price: 999,
      description: "Supercharged by the next-generation M2 chip, the redesigned MacBook Air combines incredible performance and up to 18 hours of battery life into its strikingly thin aluminum enclosure.¹ ",
      category: "men's clothing",
      image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6509/6509650_sd.jpg;maxHeight=640;maxWidth=550",
      rating: {
        "rate": 4.1,
        "count": 259
      }
    },
    {
      id: 3,
      title: "Apple Watch Series 9 GPS 41mm Aluminum Case with Starlight Sport Band (Small/Medium) - Starlight",
      price: 299.00,
      description: "Apple Watch Series 9 helps you stay connected, active, healthy, and safe. Featuring double tap, a magical way to interact with Apple Watch, an even-brighter display, faster on-device Siri, and Precision Finding for iPhone. ",
      category: "Technology article",
      image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6574/6574321_sd.jpg;maxHeight=640;maxWidth=550",
      rating: {
        "rate": 4.7,
        "count": 500
      }
    },
    {
      id: 4,
      title: "Samsung - Galaxy Z Fold5 256GB - Phantom Black (Verizon)",
      price: 1300,
      description: "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      category: "men's clothing",
      image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6548/6548853_sd.jpg;maxHeight=640;maxWidth=550",
      rating: {
        "rate": 2.1,
        "count": 430
      }
    },
    {
      id: 5,
      title: "Samsung - 65” Class CU7000 Crystal UHD 4K Smart Tizen TV",
      price: 399,
      description: "True-to-life color. Effortless connectivity. Dazzling 4K value. Samsung Crystal UHD is worth a look (and more). Effortlessly access TV shows, movies and ambient content using the Samsung Smart Hub, or find a range of great games on the Samsung Gaming Hub.* Enjoy content even more clear than it was created as its upgraded to 4K resolution ",
      category: "jewelery",
      image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6537/6537363_sd.jpg;maxHeight=640;maxWidth=550",
      rating: {
        "rate": 4.6,
        "count": 400
      }
    },
    {
      id: 6,
      title: "Samsung - 6'' Class TU690T Crystal UHD 4K Smart Tizen TV",
      price: 399,
      description: "See how Crystal UHD with Smart TV elevates what you watch—at a value you’ll love. Go beyond HDTV to enjoy your content in 4K resolution, and in PurColor. With Smart TV powered by Tizen built in, it’s easy to find and stream the latest shows and movies in just a few clicks. ",
      category: "TV & Home Theater",
      image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6538/6538957_sd.jpg;maxHeight=640;maxWidth=550",
      rating: {
        "rate": 3.9,
        "count": 70
      }
    },
    {
      id: 7,
      title: "Apple - 10.2-Inch iPad (9th Generation) with Wi-Fi - 64GB - Space Gray",
      price: 249.99,
      description: "Powerful. Easy to use. Versatile. The new iPad has a beautiful 10.2-inch Retina display, powerful A13 Bionic chip, an Ultra Wide front camera with Center Stage, and works with Apple Pencil and the Smart Keyboard.¹ iPad lets you do more, more easily. All for an incredible value. ",
      category: "Computers & Tablets",
      image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4901/4901809_sd.jpg;maxHeight=640;maxWidth=550",
      rating: {
        "rate": 3,
        "count": 400
      }
    },
    {
      id: 8,
      title: "Apple - Pencil (1st Generation) with USB-C to Pencil Adapter - White",
      price: 79.99,
      description: "Pairing and charging via Lightning Pixel-perfect precision Tilt and pressure sensitivity  Imperceptible lag",
      category: "jewelery",
      image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6340/6340401_sd.jpg;maxHeight=640;maxWidth=550",
      rating: {
        "rate": 1.9,
        "count": 100
      }
    },
    {
      id: 9,
      title: "Lenovo - Ideapad 1 15.6'' Full HD Touchscreen Laptop - Ryzen 7 5700U with 16GB Memory - AMD Radeon Graphics - 512GB SSD - Cloud Gray",
      price: 479.99,
      description: "Browse, explore and connect with confidence on the Lenovo IdeaPad 1 powered by ultra-fast AMD Ryzen 5000 Series Mobile Processors. The IdeaPad 1 packs responsive performance in a thin and compact 17.9 mm chassis, making multitasking on-the-go a breeze. Get the most out of your device with a frameless display for more screen and Dolby Audio speakers, along with 10 hours of battery life and rapid charge. Great for video calls, the 1MP camera comes with a privacy shutter to keep out spying eyes, as well as Smart Noise Cancelling to eliminate background noise. ",
      category: "Computers & Tablets",
      image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6555/6555683_sd.jpg;maxHeight=640;maxWidth=550",
      rating: {
        "rate": 3.3,
        "count": 203
      }
    }
  ];
  getAllProducts(){
    return this.productList;
  }
}
