/**
 * Innova Camionetas — Product & Brand Data
 * =========================================
 * Catálogo completo de repuestos, marcas y modelos.
 * 
 * INSTRUCCIONES PARA AGREGAR IMÁGENES:
 * - Coloca las imágenes en /public/img/products/ y /public/img/brands/
 * - Reemplaza el campo `image` con la ruta relativa, ej: "/img/products/kit-distribucion.jpg"
 * - Formatos recomendados: .webp (mejor) o .jpg
 * - Tamaño recomendado: 600x600px para productos, 200x100px para logos de marcas
 */

/* ============================================================
   MARCAS Y MODELOS
   ============================================================ */
export const brands = [
  {
    "id": "maxus",
    "name": "Maxus",
    "featured": true,
    "logo": "/img/brands/maxus.svg",
    "description": "Distribuidor especializado en Maxus con todos sus modelos.",
    "models": [
      {
        "name": "T60",
        "years": "2017-2024",
        "image": "/img/models/maxus/t60.jpg",
        "type": "Pickup 4x4 / 4x2"
      },
      {
        "name": "T90",
        "years": "2023-2024",
        "image": "/img/models/maxus/t90-black.jpg",
        "type": "Pickup Bi-Turbo"
      },
      {
        "name": "V80",
        "years": "2015-2024",
        "image": "/img/models/maxus/v80.jpg",
        "type": "Furgón Cargo / Pasajeros"
      },
      {
        "name": "V90",
        "years": "2020-2024",
        "image": "/img/models/maxus/v80.jpg",
        "type": "Furgón Maxi Cargo"
      },
      {
        "name": "G10",
        "years": "2015-2024",
        "image": "/img/models/maxus/g10.jpg",
        "type": "Van Pasajeros / Cargo"
      },
      {
        "name": "D60",
        "years": "2021-2024",
        "image": "/img/models/maxus/d60.jpg",
        "type": "SUV Familiar"
      },
      {
        "name": "D90",
        "years": "2022-2024",
        "image": "/img/models/maxus/d90.jpg",
        "type": "SUV 4x4 Offroad"
      },
      {
        "name": "eDeliver 3",
        "years": "2022-2024",
        "image": "/img/models/maxus/edeliver3.jpg",
        "type": "100% Eléctrico"
      }
    ]
  },
  {
    "id": "toyota",
    "name": "Toyota",
    "logo": "/img/brands/toyota.svg",
    "models": [
      {
        "name": "Hilux",
        "years": "2005-2024",
        "image": "/img/models/toyota/hilux.jpg",
        "type": "Pickup 4x4 / 4x2"
      },
      {
        "name": "Hilux Revo",
        "years": "2016-2024",
        "image": "/img/models/toyota/hilux-revo.jpg",
        "type": "Pickup 4x4 / 4x2"
      },
      {
        "name": "Land Cruiser Prado",
        "years": "2010-2024",
        "image": "/img/models/toyota/prado.jpg",
        "type": "SUV 4x4 Offroad"
      },
      {
        "name": "Fortuner",
        "years": "2016-2024",
        "image": "/img/models/toyota/fortuner.jpg",
        "type": "SUV 4x4 Familiar"
      }
    ]
  },
  {
    "id": "nissan",
    "name": "Nissan",
    "logo": "/img/brands/nissan.svg",
    "models": [
      {
        "name": "NP300",
        "years": "2008-2024",
        "image": "/img/models/nissan/np300.jpg",
        "type": "Pickup 4x4 / 4x2"
      },
      {
        "name": "Frontier",
        "years": "2015-2024",
        "image": "/img/models/nissan/frontier.jpg",
        "type": "Pickup 4x4 / 4x2"
      },
      {
        "name": "Navara",
        "years": "2015-2024",
        "image": "/img/models/nissan/navara.jpg",
        "type": "Pickup 4x4"
      },
      {
        "name": "X-Trail",
        "years": "2014-2024",
        "image": "/img/models/nissan/xtrail.jpg",
        "type": "SUV Familiar"
      }
    ]
  },
  {
    "id": "mitsubishi",
    "name": "Mitsubishi",
    "logo": "/img/brands/mitsubishi.svg",
    "models": [
      {
        "name": "L200",
        "years": "2006-2024",
        "image": "/img/models/mitsubishi/l200.jpg",
        "type": "Pickup 4x4 / 4x2"
      },
      {
        "name": "L200 Triton",
        "years": "2015-2024",
        "image": "/img/models/mitsubishi/l200-triton.jpg",
        "type": "Pickup 4x4 Heavy Duty"
      },
      {
        "name": "Montero Sport",
        "years": "2016-2024",
        "image": "/img/models/mitsubishi/montero-sport.jpg",
        "type": "SUV 4x4 Offroad"
      }
    ]
  },
  {
    "id": "volkswagen",
    "name": "Volkswagen",
    "logo": "/img/brands/volkswagen.svg",
    "models": [
      {
        "name": "Amarok",
        "years": "2010-2024",
        "image": "/img/models/volkswagen/amarok.jpg",
        "type": "Pickup 4x4 / 4x2"
      },
      {
        "name": "Amarok V6",
        "years": "2018-2024",
        "image": "/img/models/volkswagen/amarok-v6.jpg",
        "type": "Pickup V6 4Motion"
      }
    ]
  },
  {
    "id": "greatwall",
    "name": "Great Wall",
    "logo": "/img/brands/greatwall.svg",
    "models": [
      {
        "name": "Poer",
        "years": "2021-2024",
        "image": "/img/models/greatwall/poer.jpg",
        "type": "Pickup 4x4 / 4x2"
      },
      {
        "name": "Wingle 6",
        "years": "2015-2022",
        "image": "/img/models/greatwall/wingle6.jpg",
        "type": "Pickup 4x4 / 4x2"
      },
      {
        "name": "Wingle 7",
        "years": "2018-2024",
        "image": "/img/models/greatwall/wingle7.jpg",
        "type": "Pickup 4x4 Turbo Diésel"
      }
    ]
  },
  {
    "id": "jac",
    "name": "JAC",
    "logo": "/img/brands/jac.svg",
    "models": [
      {
        "name": "T6",
        "years": "2016-2024",
        "image": "/img/models/jac/t6.jpg",
        "type": "Pickup 4x4 / 4x2"
      },
      {
        "name": "T8",
        "years": "2019-2024",
        "image": "/img/models/jac/t8.jpg",
        "type": "Pickup 4x4 / 4x2"
      },
      {
        "name": "T8 Pro",
        "years": "2021-2024",
        "image": "/img/models/jac/t8-pro.jpg",
        "type": "Pickup 4x4 Turbo"
      },
      {
        "name": "Sunray",
        "years": "2018-2024",
        "image": "/img/models/jac/sunray.jpg",
        "type": "Furgón Cargo / Minibús"
      }
    ]
  },
  {
    "id": "jmc",
    "name": "JMC",
    "logo": "/img/brands/jmc.svg",
    "models": [
      {
        "name": "Vigus",
        "years": "2015-2024",
        "image": "/img/models/jmc/vigus.jpg",
        "type": "Pickup 4x4 / 4x2"
      },
      {
        "name": "Vigus Pro",
        "years": "2021-2024",
        "image": "/img/models/jmc/vigus-pro.jpg",
        "type": "Pickup 4x4 Automática"
      },
      {
        "name": "Boarding",
        "years": "2016-2024",
        "image": "/img/models/jmc/boarding.jpg",
        "type": "Pickup 4x2 Trabajo"
      },
      {
        "name": "Carrying",
        "years": "2012-2024",
        "image": "/img/models/jmc/carrying.jpg",
        "type": "Camión Ligero Chasis"
      }
    ]
  },
  {
    "id": "dfsk",
    "name": "DFSK",
    "logo": "/img/brands/dfsk.svg",
    "models": [
      {
        "name": "Glory 580",
        "years": "2019-2024",
        "image": "/img/models/dfsk/glory580.jpg",
        "type": "SUV Familiar 7 Pasajeros"
      },
      {
        "name": "EC35",
        "years": "2020-2024",
        "image": "/img/models/dfsk/ec35.jpg",
        "type": "Furgón 100% Eléctrico"
      },
      {
        "name": "C31",
        "years": "2015-2024",
        "image": "/img/models/dfsk/c31.jpg",
        "type": "Minitruck Cabina Simple"
      },
      {
        "name": "K01",
        "years": "2016-2024",
        "image": "/img/models/dfsk/k01.jpg",
        "type": "Minitruck Utilitario"
      }
    ]
  },
  {
    "id": "ssangyong",
    "name": "SsangYong",
    "logo": "/img/brands/ssangyong.svg",
    "models": [
      {
        "name": "Actyon Sports",
        "years": "2012-2022",
        "image": "/img/models/ssangyong/actyon-sports.jpg",
        "type": "Pickup 4x4 / 4x2"
      },
      {
        "name": "Musso",
        "years": "2018-2024",
        "image": "/img/models/ssangyong/musso.jpg",
        "type": "Pickup 4x4 / 4x2"
      },
      {
        "name": "Musso Grand",
        "years": "2020-2024",
        "image": "/img/models/ssangyong/musso-grand.jpg",
        "type": "Pickup 4x4 Gran Capacidad"
      },
      {
        "name": "Rexton",
        "years": "2018-2024",
        "image": "/img/models/ssangyong/rexton.jpg",
        "type": "SUV 4x4 Familiar"
      }
    ]
  },
  {
    "id": "changan",
    "name": "Changan",
    "logo": "/img/brands/changan.svg",
    "models": [
      {
        "name": "Hunter",
        "years": "2021-2024",
        "image": "/img/models/changan/hunter.jpg",
        "type": "Pickup 4x4 / 4x2"
      },
      {
        "name": "Hunter Plus",
        "years": "2022-2024",
        "image": "/img/models/changan/hunter-plus.jpg",
        "type": "Pickup 4x4 Turbo Diésel"
      }
    ]
  }
];

/* ============================================================
   CATEGORÍAS DE REPUESTOS
   ============================================================ */
export const categories = [
  {
    id: 'motor',
    name: 'Motor & Distribución',
    icon: 'engine',
    description: 'Kits de distribución, bombas de agua, empaquetaduras y correas para motores diésel y bencineros.',
  },
  {
    id: 'filtros',
    name: 'Filtros & Lubricantes',
    icon: 'filter',
    description: 'Filtros de aceite, aire, petróleo y aceites sintéticos de alta especificación.',
  },
  {
    id: 'suspension',
    name: 'Suspensión & Dirección',
    icon: 'suspension',
    description: 'Bandejas, rótulas, terminales, cremalleras y componentes de dirección hidráulica.',
  },
  {
    id: 'embrague',
    name: 'Embrague & Transmisión',
    icon: 'clutch',
    description: 'Kits de embrague, discos, prensas, rodamientos de empuje y crucetas de cardán.',
  },
  {
    id: 'frenos',
    name: 'Frenos',
    icon: 'brake',
    description: 'Pastillas, discos, tambores, cilindros y kits de reparación de frenos.',
  },
  {
    id: 'carroceria',
    name: 'Carrocería',
    icon: 'carroceria',
    description: 'Ópticos, focos, ampolletas, espejos y componentes de carrocería e iluminación.',
  },
];

/* ============================================================
   PRODUCTOS
   ============================================================ */
export const products = [
  /* ---- MOTOR ---- */
  {
    id: 'kit-distribucion',
    name: 'Kit de Distribución Completo',
    category: 'motor',
    image: '/img/products/kit-distribucion.jpg',
    description: 'Kit completo con correa o cadena dentada de alta resistencia, tensores automáticos y poleas de guía. Calidad OEM.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'Volkswagen', 'Great Wall', 'JAC', 'JMC', 'DFSK', 'SsangYong', 'Changan'],
    featured: true,
    badge: 'Top Venta',
  },
  {
    id: 'bomba-agua',
    name: 'Bomba de Agua Refrigeración',
    category: 'motor',
    image: '/img/products/bomba-agua.jpg',
    description: 'Bomba de agua con rodamiento sellado y sellos cerámicos de alta eficiencia para óptima refrigeración del motor.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'Volkswagen', 'Great Wall', 'JAC', 'JMC', 'DFSK', 'SsangYong', 'Changan'],
  },
  {
    id: 'empaquetaduras',
    name: 'Empaquetaduras de Motor',
    category: 'motor',
    image: '/img/products/empaquetaduras.jpg',
    description: 'Juegos de empaquetaduras de culata multilámina, múltiple de admisión/escape y tapa de válvulas reforzadas para turbo diésel.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'Volkswagen', 'Great Wall', 'JAC', 'JMC', 'DFSK', 'SsangYong', 'Changan'],
  },
  {
    id: 'correa-accesorios',
    name: 'Correa de Accesorios Poly-V',
    category: 'motor',
    image: '/img/products/correa-accesorios.jpg',
    description: 'Correas Poly-V estriadas de alta durabilidad para alternador, bomba de dirección y compresor de aire acondicionado.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'Volkswagen', 'Great Wall', 'JAC', 'JMC', 'DFSK', 'SsangYong', 'Changan'],
  },
  {
    id: 'tensor-correa',
    name: 'Tensor de Correa Automático',
    category: 'motor',
    image: '/img/products/tensor-correa.jpg',
    description: 'Tensor automático de correa de accesorios con amortiguación interna y polea termoplástica de alta resistencia térmica.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'Volkswagen', 'Great Wall', 'JAC', 'JMC', 'DFSK', 'SsangYong', 'Changan'],
  },
  {
    id: 'polea-guia',
    name: 'Polea de Guía y Desvío',
    category: 'motor',
    image: '/img/products/polea-guia.jpg',
    description: 'Poleas locas y de desvío con rodamientos japoneses sellados de doble hilera de bolas para mínima vibración.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'Volkswagen', 'Great Wall', 'JAC', 'JMC', 'DFSK', 'SsangYong', 'Changan'],
  },
  /* ---- FILTROS ---- */
  {
    id: 'filtro-aceite',
    name: 'Filtro de Aceite Blindado',
    category: 'filtros',
    image: '/img/products/filtro-aceite.jpg',
    description: 'Filtro blindado con válvula antidrenaje y papel filtrante de microfibra sintética para máxima retención de impurezas.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'Volkswagen', 'Great Wall', 'JAC', 'JMC', 'DFSK', 'SsangYong', 'Changan'],
    featured: true,
    badge: 'Esencial',
  },
  {
    id: 'filtro-aire',
    name: 'Filtro de Aire Motor',
    category: 'filtros',
    image: '/img/products/filtro-aire.jpg',
    description: 'Plisado de alta densidad con sello de poliuretano flexible que garantiza sellado hermético en condiciones polvorientas.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'Volkswagen', 'Great Wall', 'JAC', 'JMC', 'DFSK', 'SsangYong', 'Changan'],
  },
  {
    id: 'filtro-petroleo',
    name: 'Filtro de Petróleo / Diésel',
    category: 'filtros',
    image: '/img/products/filtro-petroleo.jpg',
    description: 'Separador de agua y sedimentos de alta eficiencia (2 a 5 micras) para proteger sistemas de inyección common rail.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'Volkswagen', 'Great Wall', 'JAC', 'JMC', 'DFSK', 'SsangYong', 'Changan'],
    featured: true,
    badge: 'Protección',
  },
  {
    id: 'filtro-habitaculo',
    name: 'Filtro de Polen / Habitáculo',
    category: 'filtros',
    image: '/img/products/filtro-habitaculo.jpg',
    description: 'Filtro con capa de carbón activado que atrapa polen, polvo fino, hollín y neutraliza olores del exterior.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'Volkswagen', 'Great Wall', 'JAC', 'JMC', 'DFSK', 'SsangYong', 'Changan'],
  },
  {
    id: 'aceite-5w30',
    name: 'Aceites de Motor 5W-30 / 5W-40',
    category: 'filtros',
    image: '/img/products/aceite-5w30.jpg',
    description: 'Aceite de motor 100% sintético de última generación con especificación ACEA C2/C3 para motores diésel con filtro DPF.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'Volkswagen', 'Great Wall', 'JAC', 'JMC', 'DFSK', 'SsangYong', 'Changan'],
    featured: true,
    badge: 'Recomendado',
  },
  {
    id: 'refrigerantes',
    name: 'Refrigerantes 50/50 OAT',
    category: 'filtros',
    image: '/img/products/refrigerantes.jpg',
    description: 'Líquido refrigerante / anticongelante de larga duración orgánico (OAT) premezclado al 50/50, protección de -37°C a +129°C.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'Volkswagen', 'Great Wall', 'JAC', 'JMC', 'DFSK', 'SsangYong', 'Changan'],
  },
  {
    id: 'aditivos',
    name: 'Aditivos para Diésel y Motor',
    category: 'filtros',
    image: '/img/products/aditivos.jpg',
    description: 'Tratamientos avanzados para sistema de inyección diésel common rail, limpiadores de inyectores, regeneradores DPF y mejoradores de cetano.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'Volkswagen', 'Great Wall', 'JAC', 'JMC', 'DFSK', 'SsangYong', 'Changan'],
  },
  {
    id: 'aceite-transmision',
    name: 'Aceite de Transmisión 75W-90 GL-5',
    category: 'filtros',
    image: '/img/products/aceite-transmision.jpg',
    description: 'Lubricante sintético de extrema presión para diferenciales, cajas de cambio manuales y cajas de transferencia 4x4.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'Volkswagen', 'Great Wall', 'JAC', 'JMC', 'DFSK', 'SsangYong', 'Changan'],
  },
  {
    id: 'desengrasante',
    name: 'Desengrasantes Mecánicos',
    category: 'filtros',
    image: '/img/products/desengrasante.jpg',
    description: 'Desengrasante industrial de alta potencia para limpieza profunda de motores, frenos, transmisiones y componentes grasosos.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'Volkswagen', 'Great Wall', 'JAC', 'JMC', 'DFSK', 'SsangYong', 'Changan'],
  },
  /* ---- SUSPENSION ---- */
  {
    id: 'bandeja-suspension',
    name: 'Bandeja de Suspensión Delantera',
    category: 'suspension',
    image: '/img/products/bandeja-suspension.jpg',
    description: 'Bandejas superiores e inferiores de fundición de acero con bujes vulcanizados de alta durabilidad y rótula prensada.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'Volkswagen', 'Great Wall', 'JAC', 'JMC', 'DFSK', 'SsangYong', 'Changan'],
    featured: true,
    badge: 'Reforzada',
  },
  {
    id: 'rotula',
    name: 'Rótulas de Suspensión Reforzadas',
    category: 'suspension',
    image: '/img/products/rotula.jpg',
    description: 'Rótulas con perno esférico de acero forjado cromado y guardapolvo de poliuretano resistente a grasas y barro.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'Volkswagen', 'Great Wall', 'JAC', 'JMC', 'DFSK', 'SsangYong', 'Changan'],
  },
  {
    id: 'terminal-direccion',
    name: 'Terminales y Axiales de Dirección',
    category: 'suspension',
    image: '/img/products/terminal-direccion.jpg',
    description: 'Terminales exteriores e interiores (axiales) con rosca mecanizada de precisión para ajuste exacto de alineación.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'Volkswagen', 'Great Wall', 'JAC', 'JMC', 'DFSK', 'SsangYong', 'Changan'],
  },
  {
    id: 'cremallera',
    name: 'Cremallera de Dirección Hidráulica',
    category: 'suspension',
    image: '/img/products/cremallera.jpg',
    description: 'Cremalleras completas con sellos de alta presión y barra dentada tratada térmicamente para camionetas de trabajo pesado.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'Volkswagen', 'Great Wall', 'JAC', 'JMC', 'DFSK', 'SsangYong', 'Changan'],
  },
  {
    id: 'amortiguador',
    name: 'Amortiguadores Delanteros y Traseros',
    category: 'suspension',
    image: '/img/products/amortiguador.jpg',
    description: 'Amortiguadores a gas nitrógeno bitubo con valvulado progresivo para óptimo control de carga y confort en faena y carretera.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'Volkswagen', 'Great Wall', 'JAC', 'JMC', 'DFSK', 'SsangYong', 'Changan'],
    featured: true,
    badge: 'Heavy Duty',
  },
  /* ---- EMBRAGUE ---- */
  {
    id: 'kit-embrague',
    name: 'Kit de Embrague Reforzado',
    category: 'embrague',
    image: '/img/products/kit-embrague.jpg',
    description: 'Kit completo que incluye prensa de diafragma templado, disco orgánico de alta fricción con resortes dobles y rodamiento.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'Volkswagen', 'Great Wall', 'JAC', 'JMC', 'DFSK', 'SsangYong', 'Changan'],
    featured: true,
    badge: 'Top Venta',
  },
  {
    id: 'disco-embrague',
    name: 'Disco de Embrague de Repuesto',
    category: 'embrague',
    image: '/img/products/disco-embrague.jpg',
    description: 'Disco de embrague con forro de alta resistencia al calor y mazas con resortes de torsión de doble paso para acople suave.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'Volkswagen', 'Great Wall', 'JAC', 'JMC', 'DFSK', 'SsangYong', 'Changan'],
  },
  {
    id: 'rodamiento-empuje',
    name: 'Rodamiento de Empuje / Collarín Hidráulico',
    category: 'embrague',
    image: '/img/products/rodamiento-empuje.jpg',
    description: 'Rodamiento mecánico blindado y collarines concéntricos hidráulicos (CSC) con sellos resistentes a líquido de freno DOT 4.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'Volkswagen', 'Great Wall', 'JAC', 'JMC', 'DFSK', 'SsangYong', 'Changan'],
  },
  {
    id: 'cruceta-cardan',
    name: 'Cruceta de Cardán y Transmisión',
    category: 'embrague',
    image: '/img/products/cruceta-cardan.jpg',
    description: 'Crucetas de cardán con rodamientos de agujas templados y grasera de lubricación para aplicaciones 4x4 y carga severa.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'Volkswagen', 'Great Wall', 'JAC', 'JMC', 'DFSK', 'SsangYong', 'Changan'],
  },
  /* ---- FRENOS ---- */
  {
    id: 'pastillas-freno',
    name: 'Pastillas de Freno Cerámicas Delanteras',
    category: 'frenos',
    image: '/img/products/pastillas-freno.jpg',
    description: 'Pastillas formuladas con compuesto cerámico semimetálico de bajo polvo, sin ruidos molestos y excelente frenada en frío y caliente.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'Volkswagen', 'Great Wall', 'JAC', 'JMC', 'DFSK', 'SsangYong', 'Changan'],
    featured: true,
    badge: 'Cerámica',
  },
  {
    id: 'discos-freno',
    name: 'Discos de Freno Ventilados',
    category: 'frenos',
    image: '/img/products/discos-freno.jpg',
    description: 'Discos ventilados delanteros de fundición gris con aleación de alto carbono que previene deformaciones por sobrecalentamiento.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'Volkswagen', 'Great Wall', 'JAC', 'JMC', 'DFSK', 'SsangYong', 'Changan'],
    featured: true,
    badge: 'Seguridad',
  },
  {
    id: 'bomba-freno',
    name: 'Bombas de Freno',
    category: 'frenos',
    image: '/img/products/bomba-freno.jpg',
    description: 'Cilindro maestro de freno de doble circuito hidráulico con depósito integrado y pistones de aluminio anodizado.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'Volkswagen', 'Great Wall', 'JAC', 'JMC', 'DFSK', 'SsangYong', 'Changan'],
  },
  {
    id: 'balatas-freno',
    name: 'Balatas de Freno',
    category: 'frenos',
    image: '/img/products/balatas-freno.jpg',
    description: 'Juegos de zapatas / balatas de freno traseras vulcanizadas con coeficiente de fricción estable y alta resistencia al fading térmico.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'Volkswagen', 'Great Wall', 'JAC', 'JMC', 'DFSK', 'SsangYong', 'Changan'],
  },
  {
    id: 'tambor-freno',
    name: 'Tambores de Freno',
    category: 'frenos',
    image: '/img/products/tambor-freno.jpg',
    description: 'Tambores traseros de fundición gris balanceados dinámicamente con aletas de refrigeración perimetral.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'Volkswagen', 'Great Wall', 'JAC', 'JMC', 'DFSK', 'SsangYong', 'Changan'],
  },
  {
    id: 'cilindro-freno',
    name: 'Cilindro de Rueda / Freno Trasero',
    category: 'frenos',
    image: '/img/products/cilindro-freno.jpg',
    description: 'Cilindros de rueda traseros con pistones pulidos y copelas de goma EPDM resistentes a altas presiones y líquido DOT 4.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'Volkswagen', 'Great Wall', 'JAC', 'JMC', 'DFSK', 'SsangYong', 'Changan'],
  },
  /* ---- CARROCERIA ---- */
  {
    id: 'opticos-focos',
    name: 'Ópticos y Focos',
    category: 'carroceria',
    image: '/img/products/opticos-focos.jpg',
    description: 'Faros delanteros principales con lente de policarbonato con tratamiento anti-rayaduras y filtro UV, focos traseros LED y neblineros.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'Volkswagen', 'Great Wall', 'JAC', 'JMC', 'DFSK', 'SsangYong', 'Changan'],
    badge: 'Iluminación',
  },
  {
    id: 'ampolletas',
    name: 'Kit de Ampolletas Halógenas / LED',
    category: 'carroceria',
    image: '/img/products/ampolletas.jpg',
    description: 'Kits de ampolletas H4, H7, H11 en tecnología halógena de visión nocturna mejorada y bombillos LED Canbus de alta luminosidad.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'Volkswagen', 'Great Wall', 'JAC', 'JMC', 'DFSK', 'SsangYong', 'Changan'],
  },
  {
    id: 'alternador',
    name: 'Alternador de Alto Amperaje',
    category: 'carroceria',
    image: '/img/products/alternador.jpg',
    description: 'Alternadores de 110A a 150A con regulador electrónico incorporado y diodos reforzados para soportar accesorios y winches.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'Volkswagen', 'Great Wall', 'JAC', 'JMC', 'DFSK', 'SsangYong', 'Changan'],
  },
  {
    id: 'motor-partida',
    name: 'Motor de Partida / Arranque Reforzado',
    category: 'carroceria',
    image: '/img/products/motor-partida.jpg',
    description: 'Motores de arranque con sistema de reducción planetaria de alto torque para arranques rápidos en frío extremo del sur de Chile.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'Volkswagen', 'Great Wall', 'JAC', 'JMC', 'DFSK', 'SsangYong', 'Changan'],
  },
  {
    id: 'sensor-abs',
    name: 'Sensor de Velocidad ABS',
    category: 'carroceria',
    image: '/img/products/sensor-abs.jpg',
    description: 'Sensores inductivos y de efecto Hall para rueda delantera y trasera con conector sellado resistente al agua y barro.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'Volkswagen', 'Great Wall', 'JAC', 'JMC', 'DFSK', 'SsangYong', 'Changan'],
  }
];

/* ============================================================
   TIPS / CONSEJOS
   ============================================================ */
export const maintenanceTips = [
  {
    title: 'Filtro de aceite',
    interval: 'Cada 10.000 km o 6 meses',
    description: 'El filtro de aceite retiene partículas metálicas y residuos de combustión. Cambiarlo a tiempo protege los componentes internos del motor.',
    icon: 'oil',
  },
  {
    title: 'Kit de distribución',
    interval: 'Cada 80.000 - 120.000 km',
    description: 'Una correa de distribución desgastada puede cortarse y dañar el motor severamente. No esperes al límite.',
    icon: 'timing',
  },
  {
    title: 'Pastillas de freno',
    interval: 'Cada 40.000 - 60.000 km',
    description: 'Si escuchas un chirrido al frenar o el pedal se siente más largo, es momento de revisarlas.',
    icon: 'brake',
  },
  {
    title: 'Filtro de aire',
    interval: 'Cada 15.000 - 20.000 km',
    description: 'Un filtro obstruido reduce la potencia del motor y aumenta el consumo de combustible hasta un 10%.',
    icon: 'air',
  },
  {
    title: 'Embrague',
    interval: 'Cada 100.000 - 150.000 km',
    description: 'Si el embrague patina, vibra o el pedal está muy alto/bajo, revisa el kit completo antes de dañar el volante motor.',
    icon: 'clutch',
  },
  {
    title: 'Amortiguadores',
    interval: 'Cada 60.000 - 80.000 km',
    description: 'Amortiguadores en mal estado aumentan la distancia de frenado y reducen la estabilidad del vehículo.',
    icon: 'shock',
  },
];

/* ============================================================
   DATOS DE CONTACTO
   ============================================================ */
export const contactInfo = {
  whatsapp1: {
    number: '56963890325',
    display: '+56 9 6389 0325',
    label: '1° Contacto • Brahyan Padilla',
    name: 'Brahyan Padilla',
  },
  whatsapp2: {
    number: '56968163883',
    display: '+56 9 6816 3883',
    label: '2° Contacto • Cristian Yáñez',
    name: 'Cristian Yáñez',
  },
  team: [
    {
      name: 'Brahyan Padilla',
      role: '1° Contacto',
      phone: '+56 9 6389 0325',
      number: '56963890325',
      initials: 'BP',
    },
    {
      name: 'Cristian Yáñez',
      role: '2° Contacto',
      phone: '+56 9 6816 3883',
      number: '56968163883',
      initials: 'CY',
    },
  ],
  email: 'innovacamionetasspa@gmail.com',
  location: 'Valdivia, Chile',
  companyName: 'Innova Camionetas SpA',
  /* 
   * DATOS DE TRANSFERENCIA — Reemplaza con los datos reales
   * Estos se muestran en la sección de contacto
   */
  bankTransfer: {
    bank: 'Banco Estado',
    banco: 'Banco Estado',
    accountType: 'Cuenta Corriente',
    tipo: 'Cuenta Corriente',
    accountNumber: 'XXXX-XXXX-XXXX',
    numero: 'XXXX-XXXX-XXXX',
    rut: 'XX.XXX.XXX-X',
    holder: 'Innova Camionetas SpA',
    titular: 'Innova Camionetas SpA',
    email: 'innovacamionetasspa@gmail.com',
  },
  social: {
    instagram: 'https://www.instagram.com/innovacamionetas/',
    facebook: 'https://www.facebook.com/innovacamionetas/',
  },
};

/* ============================================================
   STATS / NÚMEROS DESTACADOS
   ============================================================ */
export const companyStats = [
  { value: 11, label: 'Marcas', suffix: '' },
  { value: 50, label: 'Modelos', suffix: '+' },
  { value: 500, label: 'Repuestos', suffix: '+' },
  { value: 100, label: 'Envíos Mensuales', suffix: '+' },
];

/* ============================================================
   RAZONES PARA COMPRAR
   ============================================================ */
export const whyBuyReasons = [
  {
    icon: 'shield',
    title: 'Stock Garantizado',
    description: 'Mantenemos stock permanente de los repuestos más demandados. Sin tiempos de espera innecesarios.',
  },
  {
    icon: 'truck',
    title: 'Envíos a Todo Chile',
    description: 'Despachos rápidos desde Valdivia a cualquier punto del país. Embalaje seguro para cada pieza.',
  },
  {
    icon: 'tag',
    title: 'Precios Competitivos',
    description: 'Trabajamos directo con importadores para ofrecer los mejores precios del mercado sin sacrificar calidad.',
  },
  {
    icon: 'headset',
    title: 'Asesoría Técnica',
    description: 'Nuestro equipo te orienta para encontrar el repuesto exacto para tu camioneta. Consulta sin compromiso.',
  },
];
