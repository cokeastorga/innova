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
    /* IMAGEN: /public/img/products/kit-distribucion.jpg */
    image: null,
    description: 'Kit completo con correa o cadena dentada de alta resistencia, tensores automáticos y poleas de guía. Calidad OEM.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'JAC', 'JMC', 'Mitsubishi'],
    featured: true,
    badge: 'Top Venta',
  },
  {
    id: 'bomba-agua',
    name: 'Bomba de Agua',
    category: 'motor',
    image: null,
    description: 'Bomba de agua con rodamiento sellado y sellos cerámicos de alta eficiencia para óptima refrigeración del motor.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'JAC'],
  },
  {
    id: 'empaquetaduras',
    name: 'Juego de Empaquetaduras',
    category: 'motor',
    image: null,
    description: 'Juegos de empaquetaduras de culata, múltiple de admisión/escape y tapa de válvulas reforzadas para motores turbo diésel.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'JMC'],
  },
  {
    id: 'correa-accesorios',
    name: 'Correa de Accesorios Poly-V',
    category: 'motor',
    image: null,
    description: 'Correas Poly-V estriadas de alta durabilidad para alternador, bomba de dirección y compresor de aire acondicionado.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Great Wall', 'JAC'],
  },
  {
    id: 'tensor-correa',
    name: 'Tensor de Correa Automático',
    category: 'motor',
    image: null,
    description: 'Tensor automático con rodamiento sellado y mecanismo de resorte para mantener tensión constante en la correa de distribución.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'JAC'],
  },
  {
    id: 'polea-guia',
    name: 'Polea de Guía',
    category: 'motor',
    image: null,
    description: 'Polea guía lisa con rodamiento blindado de alta durabilidad para correa de distribución y accesorios.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan'],
  },

  /* ---- Filtros & Lubricantes ---- */
  {
    id: 'filtro-aceite',
    name: 'Filtro de Aceite',
    category: 'filtros',
    image: null,
    description: 'Filtro de aceite blindado giratorio con elemento filtrante sintético y válvula anti-retorno para protección del motor.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'JAC', 'JMC', 'Great Wall'],
  },
  {
    id: 'filtro-aire',
    name: 'Filtro de Aire',
    category: 'filtros',
    image: null,
    description: 'Filtro de aire celulósico plisado de alta retención para caminos polvorientos y trabajo pesado.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'JAC', 'JMC'],
    featured: true,
  },
  {
    id: 'filtro-petroleo',
    name: 'Filtro de Petróleo',
    category: 'filtros',
    image: null,
    description: 'Filtro de combustible diésel con trampa separadora de agua de alta micrometría para protección de inyectores.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'JAC'],
  },
  {
    id: 'filtro-habitaculo',
    name: 'Filtro de Habitáculo',
    category: 'filtros',
    image: null,
    description: 'Filtro anti-polen con capa de carbón activado para aire limpio en la cabina. Retención de partículas PM2.5.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'Volkswagen'],
  },
  {
    id: 'aceite-5w30',
    name: 'Aceite 5W-30 Sintético 4L',
    category: 'filtros',
    image: null,
    description: 'Aceite 100% sintético Wolver especificación ACEA C3 / API SN. 4 litros. Máxima protección del motor, ideal para filtros DPF diésel.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'Volkswagen', 'JAC'],
    badge: 'Premium',
  },
  {
    id: 'aceite-transmision',
    name: 'Aceite de Transmisión 75W-90',
    category: 'filtros',
    image: null,
    description: 'Aceite de transmisión manual y transferencia 75W-90 GL-4/GL-5 sintético. Protección en altas temperaturas.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi'],
  },

  /* ---- Suspensión & Dirección ---- */
  {
    id: 'bandeja-suspension',
    name: 'Bandeja de Suspensión Delantera',
    category: 'suspension',
    image: null,
    description: 'Bandejas de suspensión delantera completas con rótula presensada y bujes vulcanizados. Lado izquierdo y derecho disponibles.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'Great Wall'],
  },
  {
    id: 'rotula',
    name: 'Rótulas de Suspensión',
    category: 'suspension',
    image: null,
    description: 'Rótulas de suspensión superior e inferior de alta carga para terrenos exigentes. Con guardapolvo incluido.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'JAC'],
    featured: true,
  },
  {
    id: 'terminal-direccion',
    name: 'Terminal de Dirección',
    category: 'suspension',
    image: null,
    description: 'Terminal de dirección interior y exterior con bota de caucho de alta resistencia y pasador cónico de acero.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'JMC', 'JAC'],
  },
  {
    id: 'cremallera',
    name: 'Cremallera de Dirección',
    category: 'suspension',
    image: null,
    description: 'Cremallera de dirección hidráulica y asistida electrónicamente para camionetas de trabajo.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan'],
  },
  {
    id: 'amortiguador',
    name: 'Amortiguadores',
    category: 'suspension',
    image: null,
    description: 'Amortiguadores de gas monotubo y bitubo para suspensión delantera y trasera. Respuesta firme en todo terreno.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'Great Wall'],
  },

  /* ---- Embrague & Transmisión ---- */
  {
    id: 'kit-embrague',
    name: 'Kit de Embrague Completo',
    category: 'embrague',
    image: null,
    description: 'Kit de embrague reforzado que incluye disco orgánico/cerámico, prensa y rodamiento de empuje. Calidad OEM.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'JAC', 'JMC'],
    featured: true,
    badge: 'Kit Completo',
  },
  {
    id: 'disco-embrague',
    name: 'Disco de Embrague',
    category: 'embrague',
    image: null,
    description: 'Disco de embrague orgánico con muelles amortiguadores para transmisión suave. Alta resistencia al desgaste.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi'],
  },
  {
    id: 'rodamiento-empuje',
    name: 'Rodamiento de Empuje (Collarín)',
    category: 'embrague',
    image: null,
    description: 'Rodamiento de empuje autoalineante con cuerpo metálico reforzado. Compatible con kits de embrague estándar y reforzado.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'JAC'],
  },
  {
    id: 'cruceta-cardan',
    name: 'Cruceta de Cardán',
    category: 'embrague',
    image: null,
    description: 'Cruceta de cardán con rodamientos de aguja sellados y grasera central. Para transmisión de fuerza sin vibraciones.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'Great Wall'],
  },

  /* ---- Frenos ---- */
  {
    id: 'pastillas-freno',
    name: 'Pastillas de Freno',
    category: 'frenos',
    image: null,
    description: 'Pastillas de freno cerámicas/semi-metálicas delanteras y traseras. Bajo nivel de polvo y ruido. Frenado seguro.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'JAC', 'JMC', 'Great Wall'],
  },
  {
    id: 'discos-freno',
    name: 'Discos de Freno',
    category: 'frenos',
    image: null,
    description: 'Discos de freno ventilados de hierro fundido gris con tratamiento anti-corrosión. Equilibrados de fábrica.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'Volkswagen'],
  },
  {
    id: 'tambor-freno',
    name: 'Tambor de Freno Trasero',
    category: 'frenos',
    image: null,
    description: 'Tambor de freno trasero de hierro fundido mecanizado con tolerancias precisas para frenado uniforme.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'JAC', 'JMC'],
  },
  {
    id: 'cilindro-freno',
    name: 'Cilindro de Freno',
    category: 'frenos',
    image: null,
    description: 'Cilindro de rueda trasero con pistones de aluminio y sellos de caucho EPDM. Presión de frenado uniforme.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi'],
  },

  /* ---- Eléctrico & Iluminación ---- */
  {
    id: 'ampolletas',
    name: 'Ampolletas Halógenas',
    category: 'electrico',
    image: null,
    description: 'Ampolletas halógenas de repuesto estándar y alta visibilidad. Formatos H4, H7, H11 en 12V.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'JAC', 'JMC'],
  },
  {
    id: 'alternador',
    name: 'Alternador',
    category: 'electrico',
    image: null,
    description: 'Alternador remanufacturado/nuevo con regulador de voltaje integrado. Amperaje según modelo. Garantía incluida.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi'],
  },
  {
    id: 'motor-partida',
    name: 'Motor de Partida',
    category: 'electrico',
    image: null,
    description: 'Motor de partida (arranque) con solenoide reforzado. Remanufacturado con componentes nuevos o 100% nuevo.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'JAC'],
  },
  {
    id: 'sensor-abs',
    name: 'Sensor ABS',
    category: 'electrico',
    image: null,
    description: 'Sensor de velocidad de rueda ABS con conector original y cable de longitud correcta. Delantero y trasero.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi'],
  },
  {
    id: 'desengrasante',
    name: 'Desengrasante Industrial',
    category: 'filtros',
    image: null,
    description: 'Desengrasante concentrado de grado industrial para limpieza de motores, transmisiones y chasis.',
    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'JAC', 'JMC', 'Great Wall', 'DFSK'],
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
