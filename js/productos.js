// filepath: c:\Users\lasal\Documents\Pino_IT\Menu_Digital\js\productos.js
const productos = [
    {
        name: "Bruschetta",
        img: [
            "https://lovefoodfeed.com/wp-content/uploads/2023/09/Pesto-ciabatta-bruschetta-1200-07.jpg",
            "https://thf.bing.com/th/id/OIP.ZiTUUoIkmdHKcF-devMK6AHaHa?w=198&h=198&c=7&r=0&o=7&cb=thfc1&dpr=1.3&pid=1.7&rm=3",
            "https://thf.bing.com/th/id/OIP.K1RlwTAUB7mpK5W42qWZpQHaHa?w=198&h=198&c=7&r=0&o=7&cb=thfc1&dpr=1.3&pid=1.7&rm=3"
        ],
        price: "$3200",
        desc: "Deliciosa Bruschetta italiana con pan rústico, tomate fresco, ajo y albahaca.",
        ingredients: ["Pan rústico", "Tomate fresco", "Ajo", "Albahaca", "Aceite de oliva"],
        calories: "210 kcal",
        section: ["sugerencias"],
        tags: {
            veggie: true,
            sinAzucar: true,
            sinTacc: false // El pan tiene TACC
        }
    },
    {
        name: "Tostados de JyQ",
        img: ["https://images.pexels.com/photos/15110223/pexels-photo-15110223.jpeg"],
        price: "$3500",
        desc: "Deliciosos tostados de jamón y queso con pan crujiente.",
        ingredients: ["Pan de molde", "Jamón cocido", "Queso", "Manteca"],
        calories: "320 kcal",
        section: ["sugerencias", "salados"],
        tags: {
            veggie: false,
            sinAzucar: true,
            sinTacc: false // El pan tiene TACC
        }
    },
    {
        name: "Baguette",
        img: ["https://images.pexels.com/photos/31023834/pexels-photo-31023834.jpeg"],
        price: "$4000",
        desc: "Deliciosa Baguette con jamón, queso y vegetales frescos.",
        ingredients: ["Pan rústico", "Jamón crudo", "Queso", "Vegetales frescos", "Aceite de oliva"],
        calories: "250 kcal",
        section: ["sugerencias"],
        tags: {
            veggie: false,
            sinAzucar: true,
            sinTacc: false // El pan tiene TACC
        }
    },
    {
        name: "Pancakes Frutales",
        img: ["https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg"],
        price: "$3800",
        desc: "Deliciosos pancakes con frutas frescas y sirope de arce.",
        ingredients: ["Harina", "Huevos", "Leche", "Frutas frescas", "Sirope de arce"],
        calories: "320 kcal",
        section: ["sugerencias"],
        tags: {
            veggie: true,
            sinAzucar: false,
            sinTacc: false // Harina común
        }
    },
    {
        name: "Ensalada Cesar",
        img: ["https://images.pexels.com/photos/33674357/pexels-photo-33674357.jpeg"],
        price: "$4000",
        desc: "Deliciosa Ensalada Cesar con pollo, lechuga y aderezo cremoso.",
        ingredients: ["Pollo", "Lechuga", "Croutons", "Queso parmesano", "Aderezo Cesar"],
        calories: "320 kcal",
        section: ["sugerencias"],
        tags: {
            veggie: false,
            sinAzucar: true,
            sinTacc: false // Croutons tienen TACC
        }
    },
    {
        name: "Tarta de Frutas",
        img: ["https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg"],
        price: "$4500",
        desc: "Deliciosa tarta de frutas frescas con base de galleta.",
        ingredients: ["Galletas", "Mantequilla", "Frutas frescas", "Crema"],
        calories: "320 kcal",
        section: ["cafeteria"],
        tags: {
            veggie: true,
            sinAzucar: false,
            sinTacc: false // Galletas tienen TACC
        }
    },
    {
        name: "Café con Leche",
        img: ["https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg"],
        price: "$2500",
        desc: "Clásico café con leche caliente.",
        ingredients: ["Café", "Leche"],
        calories: "120 kcal",
        section: ["cafeteria"],
        tags: {
            veggie: true,
            sinAzucar: false,
            sinTacc: true
        }
    },
    {
        name: "Sandwich de Jamón y Queso",
        img: ["https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg"],
        price: "$3800",
        desc: "Sandwich de jamón y queso en pan fresco.",
        ingredients: ["Pan", "Jamón", "Queso"],
        calories: "280 kcal",
        section: ["cafeteria"],
        tags: {
            veggie: false,
            sinAzucar: true,
            sinTacc: false // El pan tiene TACC
        }
    },
    {
        name: "Jugo de Naranja",
        img: ["https://images.pexels.com/photos/158053/fresh-orange-juice-squeezed-refreshing-citrus-158053.jpeg"],
        price: "$2000",
        desc: "Jugo de naranja natural recién exprimido.",
        ingredients: ["Naranja"],
        calories: "100 kcal",
        section: ["cafeteria"],
        tags: {
            veggie: true,
            sinAzucar: true,
            sinTacc: true
        }
    },
    {
        name: "Medialunas",
        img: ["https://images.pexels.com/photos/30478772/pexels-photo-30478772.jpeg"],
        price: "$1500",
        desc: "Medialunas recién horneadas, perfectas para acompañar tu café.",
        ingredients: ["Harina", "Grasa", "Azúcar"],
        calories: "150 kcal",
        section: ["cafeteria"],
        tags: {
            veggie: true,
            sinAzucar: false,
            sinTacc: false // Harina común
        }
    },
    {
        name: "Brownie",
        img: ["https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg"],
        price: "$2800",
        desc: "Delicioso brownie de chocolate con nueces.",
        ingredients: ["Chocolate", "Nueces", "Harina", "Azúcar"],
        calories: "350 kcal",
        section: ["dulces"],
        tags: {
            veggie: true,
            sinAzucar: false,
            sinTacc: false // Harina común
        }
    },
    {
        name: "Cupcake",
        img: ["https://images.pexels.com/photos/1635985/pexels-photo-1635985.jpeg"],
        price: "$2500",
        desc: "Cupcake de vainilla con frosting de colores.",
        ingredients: ["Harina", "Azúcar", "Huevos", "Vainilla", "Frosting"],
        calories: "250 kcal",
        section: ["dulces"],
        tags: {
            veggie: true,
            sinAzucar: false,
            sinTacc: false // Harina común
        }
    },
    {
        name: "Galletas de Avena",
        img: ["https://media.istockphoto.com/id/1321469570/es/foto/las-galletas-de-avena-se-ven-de-cerca-pila-de-deliciosas-galletas-de-avena-enrolladas-caseras.jpg?b=1&s=612x612&w=0&k=20&c=-rv0Jh4wUtnFBLPcq2hb88-mSCKRfARJKoC3CEHdSIQ="],
        price: "$1800",
        desc: "Galletas de avena caseras con pasas.",
        ingredients: ["Avena", "Harina", "Pasas", "Azúcar"],
        calories: "180 kcal",
        section: ["dulces"],
        tags: {
            veggie: true,
            sinAzucar: false,
            sinTacc: false // Harina común
        }
    },
    {
        name: "Muffin de Arándanos",
        img: ["https://images.pexels.com/photos/90609/pexels-photo-90609.png"],
        price: "$2200",
        desc: "Muffin esponjoso con arándanos frescos.",
        ingredients: ["Harina", "Arándanos", "Azúcar", "Huevos"],
        calories: "220 kcal",
        section: ["dulces"],
        tags: {
            veggie: true,
            sinAzucar: false,
            sinTacc: false // Harina común
        }
    },
    {
        name: "Cheesecake",
        img: ["https://images.pexels.com/photos/3185509/pexels-photo-3185509.png"],
        price: "$4000",
        desc: "Cheesecake cremoso con salsa de frutos rojos.",
        ingredients: ["Queso crema", "Galletas", "Frutos rojos", "Azúcar"],
        calories: "400 kcal",
        section: ["dulces"],
        tags: {
            veggie: true,
            sinAzucar: false,
            sinTacc: false // Galletas tienen TACC
        }
    },
    {
        name: "Agua Tónica",
        img: ["https://images.pexels.com/photos/33642286/pexels-photo-33642286.jpeg"],
        price: "$1500",
        desc: "Refrescante agua tónica con gas.",
        ingredients: ["Agua", "Quinina", "Gas"],
        calories: "0 kcal",
        section: ["bebidas"],
        tags: {
            veggie: true,
            sinAzucar: true,
            sinTacc: true
        }
    },
    {
        name: "Limonada",
        img: ["https://images.pexels.com/photos/2109099/pexels-photo-2109099.jpeg"],
        price: "$2000",
        desc: "Limonada casera con limones frescos.",
        ingredients: ["Limón", "Agua", "Azúcar"],
        calories: "80 kcal",
        section: ["bebidas"],
        tags: {
            veggie: true,
            sinAzucar: false,
            sinTacc: true
        }
    },
    {
        name: "Té Helado",
        img: ["https://images.pexels.com/photos/32713606/pexels-photo-32713606.jpeg"],
        price: "$1800",
        desc: "Té helado refrescante con limón.",
        ingredients: ["Té", "Limón", "Azúcar"],
        calories: "60 kcal",
        section: ["bebidas"],
        tags: {
            veggie: true,
            sinAzucar: false,
            sinTacc: true
        }
    },
    {
        name: "Gaseosa",
        img: ["https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg"],
        price: "$2200",
        desc: "Gaseosa de varios sabores.",
        ingredients: ["Agua carbonatada", "Azúcar", "Saborizante"],
        calories: "100 kcal",
        section: ["bebidas"],
        tags: {
            veggie: true,
            sinAzucar: false,
            sinTacc: true
        }
    },
    {
        name: "Agua saborizada",
        img: ["https://elnenearg.vtexassets.com/arquivos/ids/159921/AGUA-SABORIZADA-CEPITA-AQUARIUS-UVA-S-G-X1-5LT-1-6093.jpg?v=637968657966970000"],
        price: "$1500",
        desc: "Agua con rodajas de pepino y menta.",
        ingredients: ["Agua", "Pepino", "Menta"],
        calories: "0 kcal",
        section: ["bebidas"],
        tags: {
            veggie: true,
            sinAzucar: true,
            sinTacc: true
        }
    },
    {
        name: "Empanadas de Carne",
        img: ["https://assets.unileversolutions.com/recipes-v2/239857.jpg"],
        price: "$2500",
        desc: "Empanadas de carne jugosas y sabrosas.",
        ingredients: ["Harina", "Carne", "Cebolla", "Especias"],
        calories: "250 kcal",
        section: ["salados"],
        tags: {
            veggie: false,
            sinAzucar: true,
            sinTacc: false // Harina común
        }
    },
    {
        name: "Papas Fritas",
        img: ["https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg"],
        price: "$3000",
        desc: "Papas fritas crujientes y doradas.",
        ingredients: ["Papas", "Aceite", "Sal"],
        calories: "300 kcal",
        section: ["salados"],
        tags: {
            veggie: true,
            sinAzucar: true,
            sinTacc: true
        }
    },
    {
        name: "Nachos con Queso",
        img: ["https://images.pexels.com/photos/15801063/pexels-photo-15801063.jpeg"],
        price: "$4000",
        desc: "Nachos con queso fundido y jalapeños.",
        ingredients: ["Nachos", "Queso", "Jalapeños"],
        calories: "400 kcal",
        section: ["salados"],
        tags: {
            veggie: true,
            sinAzucar: true,
            sinTacc: false // Nachos suelen tener TACC
        }
    },
    {
        name: "Mini Pizzas",
        img: ["https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg"],
        price: "$3500",
        desc: "Mini pizzas con tomate, queso y pepperoni.",
        ingredients: ["Harina", "Tomate", "Queso", "Pepperoni"],
        calories: "350 kcal",
        section: ["salados"],
        tags: {
            veggie: false,
            sinAzucar: true,
            sinTacc: false // Harina común
        }
    },
    {
        name: "Sándwich de Pollo",
        img: ["https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg"],
        price: "$4200",
        desc: "Sándwich de pollo con lechuga y mayonesa.",
        ingredients: ["Pan", "Pollo", "Lechuga", "Mayonesa"],
        calories: "320 kcal",
        section: ["salados"],
        tags: {
            veggie: false,
            sinAzucar: true,
            sinTacc: false // El pan tiene TACC
        }
    },
    {
        name: "Cerveza Artesanal",
        img: ["https://images.pexels.com/photos/1267684/pexels-photo-1267684.jpeg"],
        price: "$4500",
        desc: "Cerveza artesanal rubia, IPA o negra.",
        ingredients: ["Agua", "Malta", "Lúpulo", "Levadura"],
        calories: "150 kcal",
        section: ["alcohol"],
        tags: {
            veggie: true,
            sinAzucar: true,
            sinTacc: true
        }
    },
    {
        name: "Vino Tinto",
        img: ["https://images.pexels.com/photos/2702805/pexels-photo-2702805.jpeg"],
        price: "$5000",
        desc: "Copa de vino tinto Malbec o Cabernet Sauvignon.",
        ingredients: ["Uvas"],
        calories: "120 kcal",
        section: ["alcohol"],
        tags: {
            veggie: true,
            sinAzucar: true,
            sinTacc: true
        }
    },
    {
        name: "Fernet con Coca",
        img: ["https://tequilaraiders.com/wp-content/uploads/2022/12/shutterstock_2140552827-scaled.jpg"],
        price: "$4000",
        desc: "Trago de Fernet con Coca Cola.",
        ingredients: ["Fernet", "Coca Cola"],
        calories: "180 kcal",
        section: ["alcohol"],
        tags: {
            veggie: true,
            sinAzucar: false,
            sinTacc: true
        }
    },
    {
        name: "Campari",
        img: ["https://images.pexels.com/photos/16845289/pexels-photo-16845289.jpeg"],
        price: "$4200",
        desc: "Trago de Campari con naranja.",
        ingredients: ["Campari", "Naranja"],
        calories: "180 kcal",
        section: ["alcohol"],
        tags: {
            veggie: true,
            sinAzucar: true,
            sinTacc: true
        }
    },
    {
        name: "Gancia",
        img: ["https://i1.wp.com/www.sitemarca.com/wp-content/uploads/2019/10/C%C3%B3cteles-Gancia-2-e1571755171384.jpg?fit=600%2C400&ssl=1"],
        price: "$4200",
        desc: "Trago de Gancia con limón.",
        ingredients: ["Gancia", "Limon"],
        calories: "180 kcal",
        section: ["alcohol"],
        tags: {
            veggie: true,
            sinAzucar: true,
            sinTacc: true
        }
    }
];