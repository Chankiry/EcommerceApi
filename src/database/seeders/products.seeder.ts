
// ================================================================>> Third Party Library

import ProductSize from "../../models/product/product_sizes.model";
import Product from "../../models/product/product.model";
import ProductType from "../../models/product/products_type.model";
import ProductColor from "../../models/product/product_colors.model";

// ================================================================>> Costom Library


export class ProductsSeeder {

    seed = async () => {
        try {
            console.log('\x1b[32m\n=========== Car ==========')
            await ProductType.bulkCreate(ProductSeeder.types);
            console.log('1. Products type insert successfully.');
            await Product.bulkCreate(ProductSeeder.products);
            console.log('2. Products insert successfully.');
            await ProductSize.bulkCreate(ProductSeeder.productSizes);
            console.log('2. Product sizes insert successfully.');
            await ProductColor.bulkCreate(ProductSeeder.productColors);
            console.log('2. Product colors insert successfully.');
        } catch (error) {
            console.error('Error seeding orders:', error);
        }
    }
}

// Mock-data
const ProductSeeder = {
    types: [
        {
            name: 'Shoes',
        },
        {
            name: 'HandBags',
        },
        {
            name: 'Wallets',
        },
        {
            name: 'Clothes',
        }
    ],
    productSizes: [
      // Sizes for Shoes (type_id = 1)
      {
        type_id: 1,
        name: "39",
      },
      {
        type_id: 1,
        name: "40",
      },
      {
        type_id: 1,
        name: "42",
      },
      {
        type_id: 1,
        name: "43",
      },
      {
        type_id: 1,
        name: "44",
      },
      {
        type_id: 1,
        name: "45",
      },
      {
        type_id: 1,
        name: "46",
      },
      {
        type_id: 1,
        name: "48",
      },
      {
        type_id: 1,
        name: "48",
      },
    
      // Sizes for Handbags (type_id = 2)
      {
        type_id: 2,
        name: "Small",
      },
      {
        type_id: 2,
        name: "Medium",
      },
      {
        type_id: 2,
        name: "Large",
      },
      {
        type_id: 2,
        name: "Extra Large",
      },
    
      // Sizes for Wallets (type_id = 3)
      {
        type_id: 3,
        name: "Compact",
      },
      {
        type_id: 3,
        name: "Standard",
      },
      {
        type_id: 3,
        name: "Large",
      },
      {
        type_id: 3,
        name: "Extra Large",
      },
    
      // Sizes for Clothes (type_id = 4)
      {
        type_id: 4,
        name: "S",
      },
      {
        type_id: 4,
        name: "M",
      },
      {
        type_id: 4,
        name: "L",
      },
      {
        type_id: 4,
        name: "XL",
      },
    ],
    
    productColors: [
      // Colors for Shoes (type_id = 1)
      {
        type_id: 1,
        name: "Black",
        color: "#000000",
      },
      {
        type_id: 1,
        name: "White",
        color: "#FFFFFF",
      },
      {
        type_id: 1,
        name: "Red",
        color: "#FF0000",
      },
      {
        type_id: 1,
        name: "Blue",
        color: "#0000FF",
      },
    
      // Colors for Handbags (type_id = 2)
      {
        type_id: 2,
        name: "Brown",
        color: "#A52A2A",
      },
      {
        type_id: 2,
        name: "Beige",
        color: "#F5F5DC",
      },
      {
        type_id: 2,
        name: "Black",
        color: "#000000",
      },
      {
        type_id: 2,
        name: "Pink",
        color: "#FFC0CB",
      },
    
      // Colors for Wallets (type_id = 3)
      {
        type_id: 3,
        name: "Black",
        color: "#000000",
      },
      {
        type_id: 3,
        name: "Brown",
        color: "#A52A2A",
      },
      {
        type_id: 3,
        name: "Gray",
        color: "#808080",
      },
      {
        type_id: 3,
        name: "Blue",
        color: "#0000FF",
      },
    
      // Colors for Clothes (type_id = 4)
      {
        type_id: 4,
        name: "Black",
        color: "#000000",
      },
      {
        type_id: 4,
        name: "White",
        color: "#FFFFFF",
      },
      {
        type_id: 4,
        name: "Green",
        color: "#008000",
      },
      {
        type_id: 4,
        name: "Yellow",
        color: "#FFFF00",
      },
    ],
    
    products: [
        {
            type_id: 1,
            name: "Jordan Stay Loyal 3",
            image: "static/ecommerce/products/shoes/shoes01.png",
            price: 115.00,
            discount: 0,
            description: "The Jordan Stay Loyal 3 offers a perfect blend of style and comfort for everyday wear."
          },
          {
            type_id: 1,
            name: "Jordan Flight Club '91",
            image: "static/ecommerce/products/shoes/shoes02.png",
            price: 145.00,
            discount: 0,
            description: "A retro-inspired design with modern comfort, the Jordan Flight Club '91 is a must-have."
          },
          {
            type_id: 1,
            name: "Air Jordan 12 Retro 'Phantom'",
            image: "static/ecommerce/products/shoes/shoes03.png",
            price: 200.00,
            discount: 0,
            description: "The Air Jordan 12 Retro 'Phantom' combines classic design with premium materials."
          },
          {
            type_id: 1,
            name: "Air Jordan 1 Mid",
            image: "static/ecommerce/products/shoes/shoes04.png",
            price: 87.97,
            discount: 30,
            description: "The Air Jordan 1 Mid offers a timeless design with a modern twist, perfect for any outfit."
          },
          {
            type_id: 1,
            name: "Jumpman MVP",
            image: "static/ecommerce/products/shoes/shoes05.png",
            price: 123.97,
            discount: 0,
            description: "The Jumpman MVP is designed for performance and style, inspired by the greatest athletes."
          },
          {
            type_id: 1,
            name: "Jordan True Flight",
            image: "static/ecommerce/products/shoes/shoes06.png",
            price: 90.97,
            discount: 0,
            description: "The Jordan True Flight offers a sleek design and superior comfort for basketball enthusiasts."
          },
          {
            type_id: 1,
            name: "Air Jordan 1 Mid SE",
            image: "static/ecommerce/products/shoes/shoes07.png",
            price: 87.97,
            discount: 30,
            description: "The Air Jordan 1 Mid SE features premium materials and a classic design with modern updates."
          },
          {
            type_id: 1,
            name: "Air Jordan Legacy 312 Low",
            image: "static/ecommerce/products/shoes/shoes08.png",
            price: 87.97,
            discount: 30,
            description: "The Air Jordan Legacy 312 Low combines iconic Jordan designs into one stylish shoe."
          },
          {
            type_id: 1,
            name: "Air Jordan 1 Zoom CMFT 2",
            image: "static/ecommerce/products/shoes/shoes09.png",
            price: 97.97,
            discount: 30,
            description: "The Air Jordan 1 Zoom CMFT 2 offers enhanced comfort and a modern take on a classic design."
          },
          {
            type_id: 1,
            name: "Zion 3 'Z-3D'",
            image: "static/ecommerce/products/shoes/shoes010.png",
            price: 82.97,
            discount: 0,
            description: "The Zion 3 'Z-3D' is designed for explosive performance and bold style on the court."
          },
          {
            type_id: 1,
            name: "Tatum 3 LNY",
            image: "static/ecommerce/products/shoes/shoes011.png",
            price: 90.00,
            discount: 30,
            description: "The Tatum 3 LNY celebrates Lunar New Year with unique designs and premium comfort."
          },
          {
            type_id: 1,
            name: "Air Jordan 3 Retro Black Cat",
            image: "static/ecommerce/products/shoes/shoes012.png",
            price: 200.00,
            discount: 30,
            description: "The Air Jordan 3 Retro Black Cat features a sleek all-black design with iconic Jordan details."
          },
          {
            type_id: 1,
            name: "Air Jordan 5 Retro White and Black",
            image: "static/ecommerce/products/shoes/shoes013.png",
            price: 200.00,
            discount: 30,
            description: "The Air Jordan 5 Retro White and Black combines classic design with modern comfort."
          },
          {
            type_id: 1,
            name: "Air Jordan 1 Mid",
            image: "static/ecommerce/products/shoes/shoes014.png",
            price: 125.00,
            discount: 30,
            description: "The Air Jordan 1 Mid offers a timeless design with premium materials and modern comfort."
          },
          {
            type_id: 1,
            name: "Air Jordan 1 Zoom CMFT 2",
            image: "static/ecommerce/products/shoes/shoes015.png",
            price: 97.97,
            discount: 30,
            description: "The Air Jordan 1 Zoom CMFT 2 combines classic style with enhanced comfort for everyday wear."
          }
        ,
        {
            type_id: 2,
            name: "Jordan Alpha Camera Bag",
            image: "static/ecommerce/products/handbags/handbag01.png",
            price: 30.97,
            discount: 0,
            description: "The Jordan Alpha Camera Bag combines style and functionality, perfect for carrying your essentials."
          },
          {
            type_id: 2,
            name: "Nike Sportswear Futura Women's Crossbody Bag",
            image: "static/ecommerce/products/handbags/handbag02.png",
            price: 25.97,
            discount: 0,
            description: "A sleek and modern crossbody bag designed for women, offering both style and convenience."
          },
          {
            type_id: 2,
            name: "Nike Sportswear Puffle Tote Bag",
            image: "static/ecommerce/products/handbags/handbag03.png",
            price: 90.00,
            discount: 30,
            description: "The Nike Sportswear Puffle Tote Bag is spacious and stylish, perfect for everyday use."
          },
          {
            type_id: 2,
            name: "Jordan Monogram Pouch",
            image: "static/ecommerce/products/handbags/handbag04.png",
            price: 50.00,
            discount: 30,
            description: "A compact and stylish pouch featuring the iconic Jordan monogram design."
          },
          {
            type_id: 2,
            name: "Nike Sportswear RPM Tote",
            image: "static/ecommerce/products/handbags/handbag05.png",
            price: 90.00,
            discount: 30,
            description: "The Nike Sportswear RPM Tote offers ample space and a sleek design for your daily needs."
          },
          {
            type_id: 2,
            name: "Jordan Rise Crossbody Bag",
            image: "static/ecommerce/products/handbags/handbag06.png",
            price: 30.00,
            discount: 0,
            description: "The Jordan Rise Crossbody Bag is perfect for those who want a stylish and practical accessory."
          },
          {
            type_id: 2,
            name: "Jordan Stadium Bag",
            image: "static/ecommerce/products/handbags/handbag07.png",
            price: 35.00,
            discount: 30,
            description: "A versatile and durable bag inspired by the Jordan Stadium collection."
          },
          {
            type_id: 2,
            name: "Nike Locker Iridescent Swim Bag",
            image: "static/ecommerce/products/handbags/handbag08.png",
            price: 48.00,
            discount: 0,
            description: "The Nike Locker Iridescent Swim Bag is perfect for carrying your swim gear in style."
          },
          {
            type_id: 2,
            name: "Nike Sportswear Essentials",
            image: "static/ecommerce/products/handbags/handbag09.png",
            price: 76.97,
            discount: 30,
            description: "The Nike Sportswear Essentials bag offers timeless design and functionality."
          },
          {
            type_id: 2,
            name: "Nike Sportswear Faux Fur Tote",
            image: "static/ecommerce/products/handbags/handbag010.png",
            price: 82.00,
            discount: 30,
            description: "Add a touch of luxury to your outfit with the Nike Sportswear Faux Fur Tote."
          },
          {
            type_id: 2,
            name: "Nike",
            image: "static/ecommerce/products/handbags/handbag011.png",
            price: 32.00,
            discount: 0,
            description: "A versatile and stylish bag from Nike, perfect for everyday use."
          },
          {
            type_id: 2,
            name: "Jordan Icon",
            image: "static/ecommerce/products/handbags/handbag012.png",
            price: 93.97,
            discount: 30,
            description: "The Jordan Icon bag features a bold design inspired by the iconic Jordan brand."
          },
          {
            type_id: 2,
            name: "Jordan Stadium",
            image: "static/ecommerce/products/handbags/handbag013.png",
            price: 35.00,
            discount: 0,
            description: "A durable and stylish bag from the Jordan Stadium collection."
          },
          {
            type_id: 2,
            name: "Jordan Monogram",
            image: "static/ecommerce/products/handbags/handbag014.png",
            price: 100.00,
            discount: 30,
            description: "The Jordan Monogram bag features a sleek design with the iconic Jordan logo."
          },
          {
            type_id: 2,
            name: "Jordan",
            image: "static/ecommerce/products/handbags/handbag015.png",
            price: 55.97,
            discount: 30,
            description: "A stylish and functional bag from the Jordan collection, perfect for any occasion."
          }
        ,

        {
            type_id: 3,
            name: "Jordan Men's Flight Zip Wallet",
            image: "static/ecommerce/products/wallets/wallet01.png",
            price: 40.00,
            discount: 0,
            description: "The Jordan Men's Flight Zip Wallet offers a sleek design with secure zippered compartments."
          },
          {
            type_id: 3,
            name: "Nike Icon Blazer Wristlet",
            image: "static/ecommerce/products/wallets/wallet02.png",
            price: 23.97,
            discount: 0,
            description: "A compact and stylish wristlet inspired by the Nike Blazer, perfect for carrying essentials."
          },
          {
            type_id: 3,
            name: "Jordan Men's Flight Card Case",
            image: "static/ecommerce/products/wallets/wallet03.png",
            price: 25.00,
            discount: 30,
            description: "A minimalist card case from the Jordan Flight collection, ideal for carrying cards and cash."
          },
          {
            type_id: 3,
            name: "Nike Icon Air Max 90 Card Wallet",
            image: "static/ecommerce/products/wallets/wallet04.png",
            price: 30.00,
            discount: 30,
            description: "The Nike Icon Air Max 90 Card Wallet combines iconic design with practical functionality."
          },
          {
            type_id: 3,
            name: "Jordan Men's Flight Trifold Wallet",
            image: "static/ecommerce/products/wallets/wallet05.png",
            price: 35.00,
            discount: 30,
            description: "The Jordan Men's Flight Trifold Wallet offers ample storage with a classic trifold design."
          },
          {
            type_id: 3,
            name: "Nike Icon Air Max 1 '84 Card Wallet",
            image: "static/ecommerce/products/wallets/wallet06.png",
            price: 35.00,
            discount: 0,
            description: "A compact card wallet inspired by the iconic Nike Air Max 1 '84, perfect for minimalists."
          },
          {
            type_id: 3,
            name: "Jordan Men's Flight Zip Wallet",
            image: "static/ecommerce/products/wallets/wallet07.png",
            price: 40.00,
            discount: 30,
            description: "The Jordan Men's Flight Zip Wallet combines style and functionality with secure zippered compartments."
          },
          {
            type_id: 3,
            name: "Jordan Men's Flight Trifold Wallet",
            image: "static/ecommerce/products/wallets/wallet08.png",
            price: 35.00,
            discount: 0,
            description: "A classic trifold wallet from the Jordan Flight collection, offering ample storage space."
          },
          {
            type_id: 3,
            name: "Nike Icon Cortez Wristlet",
            image: "static/ecommerce/products/wallets/wallet09.png",
            price: 26.97,
            discount: 30,
            description: "The Nike Icon Cortez Wristlet is a stylish and compact accessory inspired by the Cortez design."
          },
          {
            type_id: 3,
            name: "Nike Icon Air Force 1 Card Wallet",
            image: "static/ecommerce/products/wallets/wallet010.png",
            price: 20.97,
            discount: 30,
            description: "A sleek card wallet inspired by the iconic Nike Air Force 1, perfect for everyday use."
          },
          {
            type_id: 3,
            name: "Nike Icon Blazer",
            image: "static/ecommerce/products/wallets/wallet011.png",
            price: 40.00,
            discount: 0,
            description: "A stylish and functional wallet inspired by the Nike Blazer, designed for everyday use."
          },
          {
            type_id: 3,
            name: "Jordan Airborne",
            image: "static/ecommerce/products/wallets/wallet012.png",
            price: 32.00,
            discount: 30,
            description: "The Jordan Airborne wallet combines bold design with practical functionality."
          },
          {
            type_id: 3,
            name: "Jordan",
            image: "static/ecommerce/products/wallets/wallet013.png",
            price: 20.97,
            discount: 30,
            description: "A sleek and stylish wallet from the Jordan collection, perfect for everyday use."
          },
          {
            type_id: 3,
            name: "Nike",
            image: "static/ecommerce/products/wallets/wallet014.png",
            price: 24.00,
            discount: 30,
            description: "A minimalist and functional wallet from Nike, designed for everyday convenience."
          },

        {
            type_id: 4,
            name: "Jordan X Travis Scott",
            image: "static/ecommerce/products/clothes/cloth01.png",
            price: 175.00,
            discount: 0,
            description: "A collaboration between Jordan and Travis Scott, featuring unique designs and premium materials."
        },
        {
            type_id: 4,
            name: "Jodan X Travis Scott",
            image: "static/ecommerce/products/clothes/cloth02.png",
            price: 65.00,
            discount: 0,
            description: "A stylish collaboration between Jordan and Travis Scott, offering a modern twist on classic designs."
        },
        {
            type_id: 4,
            name: "Nike ACG Lungs",
            image: "static/ecommerce/products/clothes/cloth03.png",
            price: 115.00,
            discount: 0,
            description: "Designed for outdoor adventures, the Nike ACG Lungs provide durability and comfort in rugged conditions."
        },
        {
            type_id: 4,
            name: "Texas Longhorns",
            image: "static/ecommerce/products/clothes/cloth04.png",
            price: 130.00,
            discount: 0,
            description: "Show your team spirit with the Texas Longhorns collection, featuring bold designs and high-quality materials."
        },
        {
            type_id: 4,
            name: "Duke blue devils Staement workmark Lockup Heavyweight",
            image: "static/ecommerce/products/clothes/cloth05.png",
            price: 123.97,
            discount: 0,
            description: "Represent the Duke Blue Devils with this heavyweight statement piece, perfect for game day."
        },
        {
            type_id: 4,
            name: "Nike Smiley Swoosh Printed Tricot Set",
            image: "static/ecommerce/products/clothes/cloth06.png",
            price: 37.97,
            discount: 30,
            description: "Add a touch of fun to your wardrobe with the Nike Smiley Swoosh Printed Tricot Set, featuring playful designs."
        },
        {
            type_id: 4,
            name: "Nike Sportwear Everything Wovens",
            image: "static/ecommerce/products/clothes/cloth07.png",
            price: 76.97,
            discount: 30,
            description: "Stay comfortable and stylish with the Nike Sportswear Everything Wovens collection, designed for everyday wear."
        },
        {
            type_id: 4,
            name: "Nike Sportswear Essentials",
            image: "static/ecommerce/products/clothes/cloth08.png",
            price: 62.97,
            discount: 0,
            description: "The Nike Sportswear Essentials line offers timeless designs and versatile pieces for any occasion."
        },
        {
            type_id: 4,
            name: "Nike Windrunner",
            image: "static/ecommerce/products/clothes/cloth09.png",
            price: 76.97,
            discount: 30,
            description: "The iconic Nike Windrunner jacket combines style and functionality, perfect for any weather."
        },
        {
            type_id: 4,
            name: "Nike Tech Reimagined",
            image: "static/ecommerce/products/clothes/cloth010.png",
            price: 122.97,
            discount: 0,
            description: "Experience the future of sportswear with Nike Tech Reimagined, featuring innovative materials and designs."
        },
        {
            type_id: 4,
            name: "Nike Sportswear Phoenix Fleece",
            image: "static/ecommerce/products/clothes/clothes011.png",
            price: 37.97,
            discount: 30,
            description: "Stay cozy and stylish with the Nike Sportswear Phoenix Fleece collection, perfect for casual outings."
        },
        {
            type_id: 4,
            name: "Nike Solo Swoosh",
            image: "static/ecommerce/products/clothes/clothes012.png",
            price: 22.97,
            discount: 30,
            description: "The Nike Solo Swoosh collection offers minimalist designs with a bold statement, ideal for everyday wear."
        },
        {
            type_id: 4,
            name: "Nike Sportswear",
            image: "static/ecommerce/products/clothes/clothes013.png",
            price: 42.97,
            discount: 30,
            description: "The Nike Sportswear line combines comfort and style, making it perfect for any activity."
        },
        {
            type_id: 4,
            name: "Nike ACG",
            image: "static/ecommerce/products/clothes/clothes014.png",
            price: 37.97,
            discount: 30,
            description: "Designed for outdoor enthusiasts, the Nike ACG collection offers durability and performance in every piece."
        },
        {
            type_id: 4,
            name: "Nike Sportswear Phoenix Plush",
            image: "static/ecommerce/products/clothes/clothes015.png",
            price: 72.97,
            discount: 40,
            description: "Experience ultimate comfort with the Nike Sportswear Phoenix Plush collection, perfect for lounging or casual wear."
        },
    ]
}