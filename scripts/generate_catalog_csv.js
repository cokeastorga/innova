const fs = require('fs');

const brands = [
  {
    name: 'Maxus',
    models: [
      { name: 'T60', years: '2017-2024', type: 'Pickup 4x4 / 4x2' },
      { name: 'T90', years: '2023-2024', type: 'Pickup Bi-Turbo' },
      { name: 'V80', years: '2015-2024', type: 'Furgón Cargo / Pasajeros' },
      { name: 'V90', years: '2020-2024', type: 'Furgón Maxi Cargo' },
      { name: 'G10', years: '2015-2024', type: 'Van Pasajeros / Cargo' },
      { name: 'D60', years: '2021-2024', type: 'SUV Familiar' },
      { name: 'D90', years: '2022-2024', type: 'SUV 4x4 Offroad' },
      { name: 'eDeliver 3', years: '2022-2024', type: '100% Eléctrico' }
    ]
  },
  {
    name: 'Toyota',
    models: [
      { name: 'Hilux', years: '2005-2024', type: 'Pickup 4x4 / 4x2' },
      { name: 'Hilux Revo', years: '2016-2024', type: 'Pickup 4x4 / 4x2' },
      { name: 'Land Cruiser Prado', years: '2010-2024', type: 'SUV 4x4' },
      { name: 'Fortuner', years: '2016-2024', type: 'SUV 4x4' }
    ]
  },
  {
    name: 'Nissan',
    models: [
      { name: 'NP300', years: '2008-2024', type: 'Pickup 4x4 / 4x2' },
      { name: 'Frontier', years: '2015-2024', type: 'Pickup 4x4 / 4x2' },
      { name: 'Navara', years: '2015-2024', type: 'Pickup 4x4 / 4x2' },
      { name: 'X-Trail', years: '2014-2024', type: 'SUV' }
    ]
  },
  {
    name: 'Mitsubishi',
    models: [
      { name: 'L200', years: '2006-2024', type: 'Pickup 4x4 / 4x2' },
      { name: 'L200 Triton', years: '2015-2024', type: 'Pickup 4x4 / 4x2' },
      { name: 'Montero Sport', years: '2016-2024', type: 'SUV 4x4' }
    ]
  },
  {
    name: 'Volkswagen',
    models: [
      { name: 'Amarok', years: '2010-2024', type: 'Pickup 4x4 / 4x2' },
      { name: 'Amarok V6', years: '2018-2024', type: 'Pickup 4x4' }
    ]
  },
  {
    name: 'Great Wall',
    models: [
      { name: 'Poer', years: '2021-2024', type: 'Pickup 4x4 / 4x2' },
      { name: 'Wingle 6', years: '2015-2022', type: 'Pickup 4x4 / 4x2' },
      { name: 'Wingle 7', years: '2018-2024', type: 'Pickup 4x4 / 4x2' }
    ]
  },
  {
    name: 'JAC',
    models: [
      { name: 'T6', years: '2016-2024', type: 'Pickup 4x4 / 4x2' },
      { name: 'T8', years: '2019-2024', type: 'Pickup 4x4 / 4x2' },
      { name: 'T8 Pro', years: '2021-2024', type: 'Pickup 4x4 / 4x2' },
      { name: 'Sunray', years: '2018-2024', type: 'Furgón Cargo / Minibús' }
    ]
  },
  {
    name: 'JMC',
    models: [
      { name: 'Vigus', years: '2015-2024', type: 'Pickup 4x4 / 4x2' },
      { name: 'Vigus Pro', years: '2021-2024', type: 'Pickup 4x4 / 4x2' },
      { name: 'Boarding', years: '2016-2024', type: 'Pickup 4x2' },
      { name: 'Carrying', years: '2012-2024', type: 'Camión Ligero' }
    ]
  },
  {
    name: 'DFSK',
    models: [
      { name: 'Glory 580', years: '2019-2024', type: 'SUV Familiar' },
      { name: 'EC35', years: '2020-2024', type: 'Furgón Eléctrico' },
      { name: 'C31', years: '2015-2024', type: 'Minitruck Cabina Simple' },
      { name: 'K01', years: '2016-2024', type: 'Minitruck' }
    ]
  },
  {
    name: 'SsangYong',
    models: [
      { name: 'Actyon Sports', years: '2012-2022', type: 'Pickup 4x4 / 4x2' },
      { name: 'Musso', years: '2018-2024', type: 'Pickup 4x4 / 4x2' },
      { name: 'Musso Grand', years: '2020-2024', type: 'Pickup 4x4 / 4x2' },
      { name: 'Rexton', years: '2018-2024', type: 'SUV 4x4' }
    ]
  },
  {
    name: 'Changan',
    models: [
      { name: 'Hunter', years: '2021-2024', type: 'Pickup 4x4 / 4x2' },
      { name: 'Hunter Plus', years: '2022-2024', type: 'Pickup 4x4' }
    ]
  }
];

const categories = {
  'motor': 'Motor & Distribución',
  'filtros': 'Filtros & Lubricantes',
  'suspension': 'Suspensión & Dirección',
  'embrague': 'Embrague & Transmisión',
  'frenos': 'Frenos',
  'carroceria': 'Carrocería & Eléctrico'
};

const products = [
  { id: 'kit-distribucion', name: 'Kit de Distribución Completo', category: 'motor', desc: 'Kit completo con correa o cadena dentada de alta resistencia, tensores automáticos y poleas de guía.' },
  { id: 'bomba-agua', name: 'Bomba de Agua Refrigeración', category: 'motor', desc: 'Bomba de agua con rodamiento sellado y sellos cerámicos de alta eficiencia.' },
  { id: 'empaquetaduras', name: 'Empaquetaduras de Motor', category: 'motor', desc: 'Juegos de empaquetaduras de culata multilámina, múltiple de admisión/escape y tapa de válvulas.' },
  { id: 'correa-accesorios', name: 'Correa de Accesorios Poly-V', category: 'motor', desc: 'Correas Poly-V estriadas de alta durabilidad para alternador, bomba de dirección y compresor A/C.' },
  { id: 'tensor-correa', name: 'Tensor de Correa Automático', category: 'motor', desc: 'Tensor automático con amortiguación hidráulica interna y polea termoplástica.' },
  { id: 'polea-guia', name: 'Polea de Guía y Desvío', category: 'motor', desc: 'Poleas locas y de desvío con rodamientos sellados de doble hilera de bolas.' },
  { id: 'filtro-aceite', name: 'Filtro de Aceite Blindado', category: 'filtros', desc: 'Filtro de aceite con válvula antidrenaje y papel filtrante de microfibra sintética.' },
  { id: 'filtro-aire', name: 'Filtro de Aire Motor', category: 'filtros', desc: 'Filtro de aire con plisado de alta densidad para máxima retención de partículas.' },
  { id: 'filtro-petroleo', name: 'Filtro de Petróleo / Diésel', category: 'filtros', desc: 'Filtro de combustible con separador de agua para sistemas common rail.' },
  { id: 'filtro-habitaculo', name: 'Filtro de Polen / Habitáculo', category: 'filtros', desc: 'Filtro de polen con capa de carbón activado antibacteriano.' },
  { id: 'aceite-5w30', name: 'Aceites de Motor 5W-30 / 5W-40', category: 'filtros', desc: 'Aceite de motor 100% sintético con especificación ACEA C2/C3 para motores con DPF.' },
  { id: 'refrigerantes', name: 'Refrigerantes 50/50 OAT', category: 'filtros', desc: 'Líquido refrigerante / anticongelante de larga duración orgánico premezclado.' },
  { id: 'aditivos', name: 'Aditivos para Diésel y Motor', category: 'filtros', desc: 'Tratamientos para sistema de inyección diésel, limpiadores y mejoradores de cetano.' },
  { id: 'aceite-transmision', name: 'Aceite de Transmisión 75W-90 GL-5', category: 'filtros', desc: 'Aceite sintético para transmisiones manuales, diferenciales y cajas de transferencia.' },
  { id: 'desengrasante', name: 'Desengrasantes Mecánicos', category: 'filtros', desc: 'Desengrasante de alta potencia para limpieza de motor y componentes mecánicos.' },
  { id: 'bandeja-suspension', name: 'Bandeja de Suspensión Delantera', category: 'suspension', desc: 'Bandejas de suspensión superior e inferior con bujes vulcanizados y rótula prensada.' },
  { id: 'rotula', name: 'Rótulas de Suspensión Reforzadas', category: 'suspension', desc: 'Rótulas de acero forjado con guardapolvo de poliuretano.' },
  { id: 'terminal-direccion', name: 'Terminales y Axiales de Dirección', category: 'suspension', desc: 'Terminales exteriores e interiores con rosca de precisión milimétrica.' },
  { id: 'cremallera', name: 'Cremallera de Dirección Hidráulica', category: 'suspension', desc: 'Cremalleras de dirección hidráulica y electroasistida completas.' },
  { id: 'amortiguador', name: 'Amortiguadores Delanteros y Traseros', category: 'suspension', desc: 'Amortiguadores a gas nitrógeno bitubo de respuesta progresiva.' },
  { id: 'kit-embrague', name: 'Kit de Embrague Reforzado', category: 'embrague', desc: 'Kit de embrague completo con prensa de diafragma templado y disco orgánico.' },
  { id: 'disco-embrague', name: 'Disco de Embrague de Repuesto', category: 'embrague', desc: 'Disco de embrague con forro de alta fricción y resortes amortiguadores dobles.' },
  { id: 'rodamiento-empuje', name: 'Rodamiento de Empuje / Collarín Hidráulico', category: 'embrague', desc: 'Rodamiento de empuje mecánico y collarines hidráulicos concéntricos.' },
  { id: 'cruceta-cardan', name: 'Cruceta de Cardán y Transmisión', category: 'embrague', desc: 'Crucetas de cardán con grasera de engrase y sellos laberinto de triple labio.' },
  { id: 'pastillas-freno', name: 'Pastillas de Freno Cerámicas Delanteras', category: 'frenos', desc: 'Pastillas de formulación cerámica de bajo polvo y alto coeficiente de fricción.' },
  { id: 'discos-freno', name: 'Discos de Freno Ventilados', category: 'frenos', desc: 'Discos de freno ventilados con aleación de alto contenido de carbono.' },
  { id: 'bomba-freno', name: 'Bombas de Freno', category: 'frenos', desc: 'Cilindro maestro de freno de doble circuito con depósito de líquido.' },
  { id: 'balatas-freno', name: 'Balatas de Freno', category: 'frenos', desc: 'Juegos de zapatas de freno traseras con forro de alta resistencia al calor.' },
  { id: 'tambor-freno', name: 'Tambores de Freno', category: 'frenos', desc: 'Tambores traseros de fundición gris equilibrados dinámicamente.' },
  { id: 'cilindro-freno', name: 'Cilindro de Rueda / Freno Trasero', category: 'frenos', desc: 'Cilindros receptores traseros con pistones de aluminio anodizado.' },
  { id: 'opticos-focos', name: 'Ópticos y Focos', category: 'carroceria', desc: 'Faros delanteros ópticos principales y focos traseros de alta durabilidad.' },
  { id: 'ampolletas', name: 'Kit de Ampolletas Halógenas / LED', category: 'carroceria', desc: 'Ampolletas H4, H7, H11 en tecnología halógena de alto rendimiento y LED Canbus.' },
  { id: 'alternador', name: 'Alternador de Alto Amperaje', category: 'carroceria', desc: 'Alternadores de 110A a 150A con regulador electrónico incorporado.' },
  { id: 'motor-partida', name: 'Motor de Partida / Arranque Reforzado', category: 'carroceria', desc: 'Motores de arranque con sistema de reducción planetaria de alto torque.' },
  { id: 'sensor-abs', name: 'Sensor de Velocidad ABS', category: 'carroceria', desc: 'Sensores de velocidad de rueda ABS de alta precisión magnética.' }
];

function toCsv(data, delimiter = ';') {
  return data.map(row => 
    row.map(val => {
      const str = String(val || '');
      if (str.includes(delimiter) || str.includes('"') || str.includes('\n')) {
        return '"' + str.replace(/"/g, '""') + '"';
      }
      return str;
    }).join(delimiter)
  ).join('\r\n');
}

// 1. Catálogo Completo (1,470 filas)
const rowsFull = [
  ['Marca', 'Modelo', 'Anos_Compatibilidad', 'Tipo_Vehiculo', 'Categoria', 'Repuesto', 'Codigo_Repuesto', 'Descripcion_Repuesto', 'Estado_Disponibilidad']
];

brands.forEach(b => {
  b.models.forEach(m => {
    products.forEach(p => {
      rowsFull.push([
        b.name,
        m.name,
        m.years,
        m.type,
        categories[p.category],
        p.name,
        p.id,
        p.desc,
        'Disponible'
      ]);
    });
  });
});

// 2. Resumen Marcas y Modelos (42 filas)
const rowsModels = [
  ['Marca', 'Modelo', 'Anos_Compatibilidad', 'Tipo_Vehiculo']
];
brands.forEach(b => {
  b.models.forEach(m => {
    rowsModels.push([b.name, m.name, m.years, m.type]);
  });
});

// 3. Resumen Repuestos (35 filas)
const rowsProducts = [
  ['Categoria', 'Repuesto', 'Codigo_Repuesto', 'Descripcion_Repuesto']
];
products.forEach(p => {
  rowsProducts.push([categories[p.category], p.name, p.id, p.desc]);
});

// Escribir con BOM UTF-8 (compatibilidad Excel)
const BOM = '\uFEFF';

// Versión estándar para Excel en español (; delimitador)
fs.writeFileSync('catalogo_repuestos_innova.csv', BOM + toCsv(rowsFull, ';'), 'utf8');
fs.writeFileSync('public/catalogo_repuestos_innova.csv', BOM + toCsv(rowsFull, ';'), 'utf8');

// Versión estándar internacional (, delimitador)
fs.writeFileSync('catalogo_repuestos_innova_comma.csv', BOM + toCsv(rowsFull, ','), 'utf8');

// Archivos de resumen
fs.writeFileSync('marcas_modelos.csv', BOM + toCsv(rowsModels, ';'), 'utf8');
fs.writeFileSync('repuestos_categorias.csv', BOM + toCsv(rowsProducts, ';'), 'utf8');

console.log('Archivos generados con éxito:');
console.log('- catalogo_repuestos_innova.csv (1,470 combinaciones)');
console.log('- marcas_modelos.csv (42 modelos)');
console.log('- repuestos_categorias.csv (35 repuestos)');
