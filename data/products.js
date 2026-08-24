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
    id: 'maxus',
    name: 'Maxus',
    featured: true,
    logo: '/img/brands/maxus.svg',
    description: 'Distribuidor especializado en toda la línea Maxus. Repuestos genuinos y alternativos de alta durabilidad.',
    models: [
      { name: 'T60', years: '2017-2024', image: '/img/models/maxus/t60.jpg', type: 'Pickup 4x4 / 4x2' },
      { name: 'T90', years: '2023-2024', image: '/img/models/maxus/t90.jpg', type: 'Pickup Bi-Turbo' },
      { name: 'V80', years: '2015-2024', image: '/img/models/maxus/v80.jpg', type: 'Furgón Cargo / Pasajeros' },
      { name: 'V90', years: '2020-2024', image: '/img/models/maxus/v80.jpg', type: 'Furgón Maxi Cargo' },
      { name: 'G10', years: '2015-2024', image: '/img/models/maxus/g10.jpg', type: 'Van Pasajeros / Cargo' },
      { name: 'D60', years: '2021-2024', image: '/img/models/maxus/d60.jpg', type: 'SUV Familiar' },
      { name: 'D90', years: '2022-2024', image: '/img/models/maxus/d90.jpg', type: 'SUV 4x4 Offroad' },
      { name: 'eDeliver 3', years: '2022-2024', image: '/img/models/maxus/edeliver3.jpg', type: '100% Eléctrico' },
    ],
  },
  {
    id: 'toyota',
    name: 'Toyota',
    logo: '/img/brands/toyota.svg',
    models: [
      { name: 'Hilux', years: '2005-2024' },
      { name: 'Hilux Revo', years: '2016-2024' },
      { name: 'Land Cruiser Prado', years: '2010-2024' },
      { name: 'Fortuner', years: '2016-2024' },
    ],
  },
  {
    id: 'nissan',
    name: 'Nissan',
    logo: '/img/brands/nissan.svg',
    models: [
      { name: 'NP300', years: '2008-2024' },
      { name: 'Frontier', years: '2015-2024' },
      { name: 'Navara', years: '2015-2024' },
      { name: 'X-Trail', years: '2014-2024' },
    ],
  },
  {
    id: 'mitsubishi',
    name: 'Mitsubishi',
    logo: '/img/brands/mitsubishi.svg',
    models: [
      { name: 'L200', years: '2006-2024' },
      { name: 'L200 Triton', years: '2015-2024' },
      { name: 'Montero Sport', years: '2016-2024' },
    ],
  },
  {
    id: 'volkswagen',
    name: 'Volkswagen',
    logo: '/img/brands/volkswagen.svg',
    models: [
      { name: 'Amarok', years: '2010-2024' },
      { name: 'Amarok V6', years: '2018-2024' },
    ],
  },
  {
    id: 'greatwall',
    name: 'Great Wall',
    logo: '/img/brands/greatwall.svg',
    models: [
      { name: 'Poer', years: '2021-2024' },
      { name: 'Wingle 6', years: '2015-2022' },
      { name: 'Wingle 7', years: '2018-2024' },
    ],
  },
  {
    id: 'jac',
    name: 'JAC',
    logo: '/img/brands/jac.svg',
    models: [
      { name: 'T6', years: '2016-2024' },
      { name: 'T8', years: '2019-2024' },
      { name: 'T8 Pro', years: '2021-2024' },
      { name: 'Sunray', years: '2018-2024' },
    ],
  },
  {
    id: 'jmc',
    name: 'JMC',
    logo: '/img/brands/jmc.svg',
    models: [
      { name: 'Vigus', years: '2015-2024' },
      { name: 'Vigus Pro', years: '2021-2024' },
      { name: 'Boarding', years: '2016-2024' },
      { name: 'Carrying', years: '2012-2024' },
    ],
  },
  {
    id: 'dfsk',
    name: 'DFSK',
    logo: '/img/brands/dfsk.svg',
    models: [
      { name: 'Glory 580', years: '2019-2024' },
      { name: 'EC35', years: '2020-2024' },
      { name: 'C31', years: '2015-2024' },
      { name: 'K01', years: '2016-2024' },
    ],
  },
  {
    id: 'ssangyong',
    name: 'SsangYong',
    logo: '/img/brands/ssangyong.svg',
    models: [
      { name: 'Actyon Sports', years: '2012-2022' },
      { name: 'Musso', years: '2018-2024' },
      { name: 'Musso Grand', years: '2020-2024' },
      { name: 'Rexton', years: '2018-2024' },
    ],
  },
  {
    id: 'changan',
    name: 'Changan',
    logo: '/img/brands/changan.svg',
    models: [
      { name: 'Hunter', years: '2021-2024' },
      { name: 'Hunter Plus', years: '2022-2024' },
    ],
  },
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
    id: 'electrico',
    name: 'Eléctrico & Iluminación',
    icon: 'electric',
    description: 'Ampolletas, alternadores, motores de partida, sensores y componentes eléctricos.',
  },
];

/* ============================================================
   PRODUCTOS
   ============================================================ */
export const products = [
  /* ---- Motor & Distribución ---- */
  {
    id: 'kit-distribucion',
    name: 'Kit de Distribución Completo',
    category: 'motor',
    image: '/img/products/kit-distribucion.jpg',
    description: 'Kit completo con correa o cadena dentada de alta resistencia, tensores automáticos y poleas de guía. Calidad OEM.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'JAC', 'JMC', 'Mitsubishi', 'Volkswagen', 'Great Wall'],
    compatibleModels: {
      'Maxus': ['T60', 'T90', 'V80', 'V90', 'G10', 'D60', 'D90'],
      'Toyota': ['Hilux', 'Hilux Revo', 'Fortuner', 'Land Cruiser Prado'],
      'Nissan': ['NP300', 'Frontier', 'Navara'],
      'Mitsubishi': ['L200', 'L200 Triton', 'Montero Sport'],
      'Volkswagen': ['Amarok', 'Amarok V6'],
      'Great Wall': ['Poer', 'Wingle 6', 'Wingle 7'],
      'JAC': ['T6', 'T8', 'T8 Pro'],
      'JMC': ['Vigus', 'Vigus Pro', 'Boarding']
    },
    featured: true,
    badge: 'Top Venta',
  },
  {
    id: 'bomba-agua',
    name: 'Bomba de Agua Refrigeración',
    category: 'motor',
    image: '/img/products/bomba-agua.jpg',
    description: 'Bomba de agua con rodamiento sellado y sellos cerámicos de alta eficiencia para óptima refrigeración del motor.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'JAC', 'Volkswagen'],
    compatibleModels: {
      'Maxus': ['T60', 'T90', 'V80', 'V90', 'G10'],
      'Toyota': ['Hilux', 'Hilux Revo', 'Fortuner'],
      'Nissan': ['NP300', 'Frontier', 'Navara'],
      'Mitsubishi': ['L200', 'L200 Triton'],
      'Volkswagen': ['Amarok'],
      'JAC': ['T6', 'T8']
    },
  },
  {
    id: 'empaquetaduras',
    name: 'Juego de Empaquetaduras Motor',
    category: 'motor',
    image: '/img/products/kit-distribucion.jpg',
    description: 'Juegos de empaquetaduras de culata multilámina, múltiple de admisión/escape y tapa de válvulas reforzadas para turbo diésel.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'JMC', 'Great Wall'],
    compatibleModels: {
      'Maxus': ['T60', 'T90', 'V80', 'G10'],
      'Toyota': ['Hilux', 'Hilux Revo'],
      'Nissan': ['NP300', 'Navara'],
      'Mitsubishi': ['L200'],
      'Great Wall': ['Poer', 'Wingle 7'],
      'JMC': ['Vigus', 'Boarding']
    },
  },
  {
    id: 'correa-accesorios',
    name: 'Correa de Accesorios Poly-V',
    category: 'motor',
    image: '/img/products/kit-distribucion.jpg',
    description: 'Correas Poly-V estriadas de alta durabilidad para alternador, bomba de dirección y compresor de aire acondicionado.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Great Wall', 'JAC', 'SsangYong', 'Changan'],
    compatibleModels: {
      'Maxus': ['T60', 'T90', 'V80', 'G10', 'D60'],
      'Toyota': ['Hilux', 'Fortuner'],
      'Nissan': ['NP300', 'Frontier'],
      'Great Wall': ['Poer', 'Wingle 7'],
      'JAC': ['T6', 'T8', 'T8 Pro'],
      'SsangYong': ['Actyon Sports', 'Musso'],
      'Changan': ['Hunter']
    },
  },
  {
    id: 'tensor-correa',
    name: 'Tensor de Correa Automático',
    category: 'motor',
    image: '/img/products/kit-distribucion.jpg',
    description: 'Tensor automático con rodamiento sellado y mecanismo de resorte para mantener tensión constante en la correa de distribución.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'JAC', 'Mitsubishi'],
    compatibleModels: {
      'Maxus': ['T60', 'T90', 'V80', 'V90'],
      'Toyota': ['Hilux', 'Land Cruiser Prado'],
      'Nissan': ['NP300', 'Navara'],
      'Mitsubishi': ['L200 Triton'],
      'JAC': ['T6', 'T8']
    },
  },
  {
    id: 'polea-guia',
    name: 'Polea de Guía y Desvío',
    category: 'motor',
    image: '/img/products/kit-distribucion.jpg',
    description: 'Polea guía lisa con rodamiento blindado de alta durabilidad para correa de distribución y accesorios.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Volkswagen'],
    compatibleModels: {
      'Maxus': ['T60', 'T90', 'V80'],
      'Toyota': ['Hilux'],
      'Nissan': ['NP300', 'Frontier'],
      'Volkswagen': ['Amarok']
    },
  },

  /* ---- Filtros & Lubricantes ---- */
  {
    id: 'filtro-aceite',
    name: 'Filtro de Aceite Blindado',
    category: 'filtros',
    image: '/img/products/filtro-aceite.jpg',
    description: 'Filtro de aceite blindado giratorio con elemento filtrante sintético y válvula anti-retorno para protección del motor.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'JAC', 'JMC', 'Great Wall', 'SsangYong', 'DFSK', 'Changan'],
    compatibleModels: {
      'Maxus': ['T60', 'T90', 'V80', 'V90', 'G10', 'D60', 'D90'],
      'Toyota': ['Hilux', 'Hilux Revo', 'Fortuner', 'Land Cruiser Prado'],
      'Nissan': ['NP300', 'Frontier', 'Navara', 'X-Trail'],
      'Mitsubishi': ['L200', 'L200 Triton', 'Montero Sport'],
      'Volkswagen': ['Amarok', 'Amarok V6'],
      'Great Wall': ['Poer', 'Wingle 6', 'Wingle 7'],
      'JAC': ['T6', 'T8', 'T8 Pro', 'Sunray'],
      'JMC': ['Vigus', 'Vigus Pro', 'Boarding', 'Carrying'],
      'DFSK': ['Glory 580', 'EC35', 'C31', 'K01'],
      'SsangYong': ['Actyon Sports', 'Musso', 'Musso Grand', 'Rexton'],
      'Changan': ['Hunter', 'Hunter Plus']
    },
    featured: true,
    badge: 'Esencial',
  },
  {
    id: 'filtro-aire',
    name: 'Filtro de Aire Motor',
    category: 'filtros',
    image: '/img/products/filtro-aire.jpg',
    description: 'Filtro de aire celulósico plisado de alta retención para caminos polvorientos y trabajo pesado.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'JAC', 'JMC', 'Great Wall', 'Volkswagen'],
    compatibleModels: {
      'Maxus': ['T60', 'T90', 'V80', 'V90', 'G10', 'D60', 'D90'],
      'Toyota': ['Hilux', 'Hilux Revo', 'Fortuner'],
      'Nissan': ['NP300', 'Frontier', 'Navara'],
      'Mitsubishi': ['L200', 'L200 Triton', 'Montero Sport'],
      'Volkswagen': ['Amarok', 'Amarok V6'],
      'Great Wall': ['Poer', 'Wingle 7'],
      'JAC': ['T6', 'T8', 'T8 Pro'],
      'JMC': ['Vigus', 'Vigus Pro']
    },
    featured: true,
  },
  {
    id: 'filtro-petroleo',
    name: 'Filtro de Petróleo / Diésel',
    category: 'filtros',
    image: '/img/products/filtro-petroleo.jpg',
    description: 'Filtro de combustible diésel con trampa separadora de agua de alta micrometría para protección de inyectores Common Rail.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'JAC', 'JMC', 'Great Wall', 'SsangYong'],
    compatibleModels: {
      'Maxus': ['T60', 'T90', 'V80', 'V90', 'G10'],
      'Toyota': ['Hilux', 'Hilux Revo', 'Fortuner'],
      'Nissan': ['NP300', 'Frontier', 'Navara'],
      'Mitsubishi': ['L200', 'L200 Triton'],
      'Great Wall': ['Poer', 'Wingle 7'],
      'JAC': ['T6', 'T8'],
      'JMC': ['Vigus', 'Boarding'],
      'SsangYong': ['Actyon Sports', 'Musso']
    },
  },
  {
    id: 'filtro-habitaculo',
    name: 'Filtro de Polen / Habitáculo',
    category: 'filtros',
    image: '/img/products/filtro-aire.jpg',
    description: 'Filtro anti-polen con capa de carbón activado para aire limpio en la cabina. Retención de partículas PM2.5 y olores.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'Volkswagen', 'Great Wall', 'Changan'],
    compatibleModels: {
      'Maxus': ['T60', 'T90', 'V80', 'G10', 'D60', 'D90', 'eDeliver 3'],
      'Toyota': ['Hilux', 'Hilux Revo', 'Fortuner'],
      'Nissan': ['NP300', 'Frontier', 'Navara'],
      'Mitsubishi': ['L200', 'Montero Sport'],
      'Volkswagen': ['Amarok', 'Amarok V6'],
      'Great Wall': ['Poer', 'Wingle 7'],
      'Changan': ['Hunter']
    },
  },
  {
    id: 'aceite-5w30',
    name: 'Aceite Wolver 5W-30 Sintético 4L',
    category: 'filtros',
    image: '/img/products/filtro-aceite.jpg',
    description: 'Aceite 100% sintético Wolver especificación ACEA C3 / API SN. 4 litros. Máxima protección del motor, ideal para filtros DPF diésel.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'Volkswagen', 'JAC', 'Great Wall', 'DFSK', 'SsangYong', 'Changan'],
    compatibleModels: {
      'Maxus': ['T60', 'T90', 'V80', 'V90', 'G10', 'D60', 'D90'],
      'Toyota': ['Hilux', 'Hilux Revo', 'Fortuner'],
      'Nissan': ['NP300', 'Frontier', 'Navara'],
      'Mitsubishi': ['L200', 'L200 Triton', 'Montero Sport'],
      'Volkswagen': ['Amarok', 'Amarok V6'],
      'Great Wall': ['Poer', 'Wingle 6', 'Wingle 7'],
      'JAC': ['T6', 'T8', 'T8 Pro'],
      'JMC': ['Vigus', 'Vigus Pro'],
      'SsangYong': ['Actyon Sports', 'Musso'],
      'Changan': ['Hunter', 'Hunter Plus']
    },
    badge: 'Premium',
  },
  {
    id: 'aceite-transmision',
    name: 'Aceite de Transmisión 75W-90 GL-5',
    category: 'filtros',
    image: '/img/products/filtro-aceite.jpg',
    description: 'Aceite de transmisión manual, diferencial y caja de transferencia 75W-90 sintético de alto rendimiento bajo cargas extremas.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'Volkswagen', 'Great Wall'],
    compatibleModels: {
      'Maxus': ['T60', 'T90', 'V80'],
      'Toyota': ['Hilux', 'Land Cruiser Prado', 'Fortuner'],
      'Nissan': ['NP300', 'Frontier', 'Navara'],
      'Mitsubishi': ['L200', 'Montero Sport'],
      'Volkswagen': ['Amarok'],
      'Great Wall': ['Poer', 'Wingle 7']
    },
  },

  /* ---- Suspensión & Dirección ---- */
  {
    id: 'bandeja-suspension',
    name: 'Bandeja de Suspensión Delantera',
    category: 'suspension',
    image: '/img/products/bandeja-suspension.jpg',
    description: 'Bandejas de suspensión delantera completas con rótula prensada y bujes vulcanizados de alta durabilidad.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'Great Wall', 'JAC', 'Volkswagen'],
    compatibleModels: {
      'Maxus': ['T60', 'T90', 'V80', 'G10'],
      'Toyota': ['Hilux', 'Hilux Revo', 'Fortuner'],
      'Nissan': ['NP300', 'Frontier', 'Navara'],
      'Mitsubishi': ['L200', 'L200 Triton'],
      'Volkswagen': ['Amarok'],
      'Great Wall': ['Poer', 'Wingle 7'],
      'JAC': ['T6', 'T8']
    },
  },
  {
    id: 'rotula',
    name: 'Rótulas de Suspensión Reforzadas',
    category: 'suspension',
    image: '/img/products/rotula.jpg',
    description: 'Rótulas de suspensión superior e inferior de alta carga para terrenos exigentes. Con guardapolvo de nitrilo incluido.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'JAC', 'JMC', 'Great Wall'],
    compatibleModels: {
      'Maxus': ['T60', 'T90', 'V80', 'G10'],
      'Toyota': ['Hilux', 'Hilux Revo', 'Land Cruiser Prado'],
      'Nissan': ['NP300', 'Frontier', 'Navara'],
      'Mitsubishi': ['L200', 'L200 Triton', 'Montero Sport'],
      'Great Wall': ['Poer', 'Wingle 6', 'Wingle 7'],
      'JAC': ['T6', 'T8'],
      'JMC': ['Vigus', 'Boarding']
    },
    featured: true,
  },
  {
    id: 'terminal-direccion',
    name: 'Terminales y Axiales de Dirección',
    category: 'suspension',
    image: '/img/products/rotula.jpg',
    description: 'Terminal de dirección interior y exterior con bota de caucho reforzada y pasador cónico de acero templado.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'JMC', 'JAC', 'Mitsubishi', 'Great Wall'],
    compatibleModels: {
      'Maxus': ['T60', 'T90', 'V80', 'V90', 'G10', 'D60'],
      'Toyota': ['Hilux', 'Hilux Revo', 'Fortuner'],
      'Nissan': ['NP300', 'Frontier', 'Navara'],
      'Mitsubishi': ['L200', 'L200 Triton'],
      'Great Wall': ['Poer', 'Wingle 7'],
      'JAC': ['T6', 'T8'],
      'JMC': ['Vigus', 'Vigus Pro']
    },
  },
  {
    id: 'cremallera',
    name: 'Cremallera de Dirección Hidráulica',
    category: 'suspension',
    image: '/img/products/bandeja-suspension.jpg',
    description: 'Cremallera de dirección hidráulica y asistida electrónicamente con retenes de alta presión y fuelles nuevos.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'Volkswagen'],
    compatibleModels: {
      'Maxus': ['T60', 'T90', 'V80'],
      'Toyota': ['Hilux', 'Hilux Revo'],
      'Nissan': ['NP300', 'Navara'],
      'Mitsubishi': ['L200'],
      'Volkswagen': ['Amarok']
    },
  },
  {
    id: 'amortiguador',
    name: 'Amortiguadores Delanteros y Traseros',
    category: 'suspension',
    image: '/img/products/amortiguador.jpg',
    description: 'Amortiguadores de gas nitrógeno presurizado para suspensión delantera y trasera. Máxima estabilidad en caminos de ripio y carga.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'Great Wall', 'Volkswagen', 'JAC', 'Changan'],
    compatibleModels: {
      'Maxus': ['T60', 'T90', 'V80', 'V90', 'G10', 'D60', 'D90'],
      'Toyota': ['Hilux', 'Hilux Revo', 'Fortuner', 'Land Cruiser Prado'],
      'Nissan': ['NP300', 'Frontier', 'Navara'],
      'Mitsubishi': ['L200', 'L200 Triton', 'Montero Sport'],
      'Volkswagen': ['Amarok', 'Amarok V6'],
      'Great Wall': ['Poer', 'Wingle 6', 'Wingle 7'],
      'JAC': ['T6', 'T8', 'T8 Pro'],
      'Changan': ['Hunter']
    },
  },

  /* ---- Embrague & Transmisión ---- */
  {
    id: 'kit-embrague',
    name: 'Kit de Embrague Reforzado',
    category: 'embrague',
    image: '/img/products/kit-embrague.jpg',
    description: 'Kit de embrague que incluye disco de alta fricción, prensa con diafragma reforzado y rodamiento de empuje. Calidad OEM.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'JAC', 'JMC', 'Great Wall', 'SsangYong', 'Changan'],
    compatibleModels: {
      'Maxus': ['T60', 'T90', 'V80', 'V90', 'G10'],
      'Toyota': ['Hilux', 'Hilux Revo', 'Fortuner'],
      'Nissan': ['NP300', 'Frontier', 'Navara'],
      'Mitsubishi': ['L200', 'L200 Triton'],
      'Great Wall': ['Poer', 'Wingle 6', 'Wingle 7'],
      'JAC': ['T6', 'T8', 'T8 Pro'],
      'JMC': ['Vigus', 'Vigus Pro', 'Boarding'],
      'SsangYong': ['Actyon Sports', 'Musso'],
      'Changan': ['Hunter']
    },
    featured: true,
    badge: 'Kit Completo',
  },
  {
    id: 'disco-embrague',
    name: 'Disco de Embrague de Repuesto',
    category: 'embrague',
    image: '/img/products/kit-embrague.jpg',
    description: 'Disco de embrague orgánico con muelles amortiguadores progresivos para acople suave y prolongada vida útil.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'JAC'],
    compatibleModels: {
      'Maxus': ['T60', 'V80', 'G10'],
      'Toyota': ['Hilux'],
      'Nissan': ['NP300'],
      'Mitsubishi': ['L200'],
      'JAC': ['T6']
    },
  },
  {
    id: 'rodamiento-empuje',
    name: 'Rodamiento de Empuje / Collarín Hidráulico',
    category: 'embrague',
    image: '/img/products/kit-embrague.jpg',
    description: 'Rodamiento de empuje y actuador concéntrico hidráulico (CSC) con cuerpo reforzado para embragues diésel.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'JAC', 'Great Wall', 'Volkswagen'],
    compatibleModels: {
      'Maxus': ['T60', 'T90', 'V80', 'V90'],
      'Toyota': ['Hilux', 'Hilux Revo'],
      'Nissan': ['NP300', 'Navara'],
      'Volkswagen': ['Amarok'],
      'Great Wall': ['Poer'],
      'JAC': ['T8', 'T8 Pro']
    },
  },
  {
    id: 'cruceta-cardan',
    name: 'Cruceta de Cardán y Transmisión',
    category: 'embrague',
    image: '/img/products/kit-embrague.jpg',
    description: 'Cruceta de cardán con rodamientos de aguja sellados y grasera central. Elimina vibraciones a alta velocidad.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'Great Wall', 'JAC', 'JMC'],
    compatibleModels: {
      'Maxus': ['T60', 'T90', 'V80'],
      'Toyota': ['Hilux', 'Land Cruiser Prado'],
      'Nissan': ['NP300', 'Frontier'],
      'Mitsubishi': ['L200', 'Montero Sport'],
      'Great Wall': ['Poer', 'Wingle 7'],
      'JAC': ['T6', 'T8'],
      'JMC': ['Vigus', 'Boarding']
    },
  },

  /* ---- Frenos ---- */
  {
    id: 'pastillas-freno',
    name: 'Pastillas de Freno Cerámicas Delanteras',
    category: 'frenos',
    image: '/img/products/pastillas-freno.jpg',
    description: 'Pastillas de freno cerámicas de compuesto bajo polvo y silenciosas. Excelente frenado en frío y en pendientes prolongadas.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'JAC', 'JMC', 'Great Wall', 'Volkswagen', 'SsangYong', 'Changan'],
    compatibleModels: {
      'Maxus': ['T60', 'T90', 'V80', 'V90', 'G10', 'D60', 'D90', 'eDeliver 3'],
      'Toyota': ['Hilux', 'Hilux Revo', 'Fortuner', 'Land Cruiser Prado'],
      'Nissan': ['NP300', 'Frontier', 'Navara', 'X-Trail'],
      'Mitsubishi': ['L200', 'L200 Triton', 'Montero Sport'],
      'Volkswagen': ['Amarok', 'Amarok V6'],
      'Great Wall': ['Poer', 'Wingle 6', 'Wingle 7'],
      'JAC': ['T6', 'T8', 'T8 Pro', 'Sunray'],
      'JMC': ['Vigus', 'Vigus Pro'],
      'SsangYong': ['Actyon Sports', 'Musso', 'Musso Grand', 'Rexton'],
      'Changan': ['Hunter', 'Hunter Plus']
    },
    featured: true,
    badge: 'Seguridad',
  },
  {
    id: 'discos-freno',
    name: 'Discos de Freno Ventilados',
    category: 'frenos',
    image: '/img/products/discos-freno.jpg',
    description: 'Discos de freno ventilados de fundición gris de alta disipación térmica. Balanceados de fábrica para evitar vibración al frenar.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'Volkswagen', 'Great Wall', 'JAC', 'Changan'],
    compatibleModels: {
      'Maxus': ['T60', 'T90', 'V80', 'V90', 'G10', 'D60', 'D90'],
      'Toyota': ['Hilux', 'Hilux Revo', 'Fortuner'],
      'Nissan': ['NP300', 'Frontier', 'Navara'],
      'Mitsubishi': ['L200', 'L200 Triton', 'Montero Sport'],
      'Volkswagen': ['Amarok', 'Amarok V6'],
      'Great Wall': ['Poer', 'Wingle 7'],
      'JAC': ['T6', 'T8'],
      'Changan': ['Hunter']
    },
  },
  {
    id: 'tambor-freno',
    name: 'Tambores y Balatas Traseras',
    category: 'frenos',
    image: '/img/products/discos-freno.jpg',
    description: 'Tambor de freno trasero mecanizado con precisión y juego de balatas de frenado uniforme para pick-ups de carga.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'JAC', 'JMC', 'Great Wall', 'Mitsubishi'],
    compatibleModels: {
      'Maxus': ['T60', 'V80'],
      'Toyota': ['Hilux'],
      'Nissan': ['NP300'],
      'Mitsubishi': ['L200'],
      'Great Wall': ['Wingle 6', 'Wingle 7'],
      'JAC': ['T6'],
      'JMC': ['Vigus', 'Boarding']
    },
  },
  {
    id: 'cilindro-freno',
    name: 'Cilindro de Rueda / Freno Trasero',
    category: 'frenos',
    image: '/img/products/pastillas-freno.jpg',
    description: 'Cilindro hidráulico de rueda trasera con pistones tratados y retenes EPDM resistentes al líquido de freno DOT 4.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'JAC'],
    compatibleModels: {
      'Maxus': ['T60', 'V80'],
      'Toyota': ['Hilux'],
      'Nissan': ['NP300'],
      'Mitsubishi': ['L200'],
      'JAC': ['T6']
    },
  },

  /* ---- Eléctrico & Iluminación ---- */
  {
    id: 'ampolletas',
    name: 'Kit de Ampolletas Halógenas / LED',
    category: 'electrico',
    image: '/img/products/alternador.jpg',
    description: 'Ampolletas de alta potencia y visibilidad H4, H7, H11 en 12V con filtro UV para focos de camioneta.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'JAC', 'JMC', 'Great Wall', 'Volkswagen', 'DFSK', 'SsangYong', 'Changan'],
    compatibleModels: {
      'Maxus': ['T60', 'T90', 'V80', 'V90', 'G10', 'D60', 'D90', 'eDeliver 3'],
      'Toyota': ['Hilux', 'Hilux Revo', 'Fortuner', 'Land Cruiser Prado'],
      'Nissan': ['NP300', 'Frontier', 'Navara', 'X-Trail'],
      'Mitsubishi': ['L200', 'L200 Triton', 'Montero Sport'],
      'Volkswagen': ['Amarok', 'Amarok V6'],
      'Great Wall': ['Poer', 'Wingle 6', 'Wingle 7'],
      'JAC': ['T6', 'T8', 'T8 Pro'],
      'JMC': ['Vigus', 'Vigus Pro', 'Boarding'],
      'DFSK': ['Glory 580', 'EC35', 'C31'],
      'SsangYong': ['Actyon Sports', 'Musso'],
      'Changan': ['Hunter', 'Hunter Plus']
    },
  },
  {
    id: 'alternador',
    name: 'Alternador de Alto Amperaje',
    category: 'electrico',
    image: '/img/products/alternador.jpg',
    description: 'Alternador nuevo con regulador de voltaje incorporado y polea libre (OAP) para abastecer baterías y accesorios 4x4.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'Volkswagen', 'JAC'],
    compatibleModels: {
      'Maxus': ['T60', 'T90', 'V80', 'G10'],
      'Toyota': ['Hilux', 'Fortuner'],
      'Nissan': ['NP300', 'Navara'],
      'Mitsubishi': ['L200', 'Montero Sport'],
      'Volkswagen': ['Amarok'],
      'JAC': ['T6', 'T8']
    },
  },
  {
    id: 'motor-partida',
    name: 'Motor de Partida / Arranque Reforzado',
    category: 'electrico',
    image: '/img/products/motor-partida.jpg',
    description: 'Motor de partida con piñón Bendix reforzado y solenoide de alta potencia para arranques inmediatos en frío.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'JAC', 'Great Wall'],
    compatibleModels: {
      'Maxus': ['T60', 'T90', 'V80', 'G10'],
      'Toyota': ['Hilux', 'Hilux Revo'],
      'Nissan': ['NP300', 'Frontier'],
      'Mitsubishi': ['L200'],
      'Great Wall': ['Poer', 'Wingle 7'],
      'JAC': ['T6', 'T8']
    },
  },
  {
    id: 'sensor-abs',
    name: 'Sensor de Velocidad ABS',
    category: 'electrico',
    image: '/img/products/alternador.jpg',
    description: 'Sensor de rueda ABS con cable apantallado y conector sellado original para control de tracción y estabilidad.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'Volkswagen', 'Great Wall'],
    compatibleModels: {
      'Maxus': ['T60', 'T90', 'V80', 'G10', 'D60'],
      'Toyota': ['Hilux', 'Hilux Revo', 'Fortuner'],
      'Nissan': ['NP300', 'Navara'],
      'Mitsubishi': ['L200', 'Montero Sport'],
      'Volkswagen': ['Amarok'],
      'Great Wall': ['Poer']
    },
  },
  {
    id: 'desengrasante',
    name: 'Desengrasante Automotriz Concentrado',
    category: 'filtros',
    image: '/img/products/filtro-petroleo.jpg',
    description: 'Desengrasante biodegradable de grado profesional para lavado de motor, chasis y componentes mecánicos.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'JAC', 'JMC', 'Great Wall', 'DFSK', 'SsangYong', 'Changan'],
    compatibleModels: {
      'Maxus': ['T60', 'T90', 'V80', 'V90', 'G10', 'D60', 'D90', 'eDeliver 3'],
      'Toyota': ['Hilux', 'Hilux Revo', 'Fortuner', 'Land Cruiser Prado'],
      'Nissan': ['NP300', 'Frontier', 'Navara'],
      'Mitsubishi': ['L200', 'L200 Triton', 'Montero Sport'],
      'Volkswagen': ['Amarok', 'Amarok V6'],
      'Great Wall': ['Poer', 'Wingle 7'],
      'JAC': ['T6', 'T8'],
      'JMC': ['Vigus'],
      'DFSK': ['Glory 580', 'EC35'],
      'SsangYong': ['Actyon Sports', 'Musso'],
      'Changan': ['Hunter']
    },
  },
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
    number: '56961546709',
    display: '+56 9 6154 6709',
    label: 'Ventas',
  },
  whatsapp2: {
    number: '56968163883',
    display: '+56 9 6816 3883',
    label: 'Consultas',
  },
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
