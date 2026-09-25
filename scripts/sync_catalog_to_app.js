const fs = require('fs');
const path = require('path');

const csvPath = path.join(__dirname, '..', 'catalogo_innova.csv');
const productsJsPath = path.join(__dirname, '..', 'data', 'products.js');

if (!fs.existsSync(csvPath)) {
  console.error('No se encontró el archivo catalogo_innova.csv');
  process.exit(1);
}

const rawCsv = fs.readFileSync(csvPath, 'utf8').replace(/^\uFEFF/, ''); // Quitar BOM si existe

// Simple CSV parser para punto y coma con soporte de comillas
function parseCsv(text, delimiter = ';') {
  const lines = text.split(/\r?\n/).filter(line => line.trim().length > 0);
  if (lines.length === 0) return [];

  function parseLine(line) {
    const values = [];
    let current = '';
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (char === '"') {
        if (inQuotes && line[i + 1] === '"') {
          current += '"';
          i++;
        } else {
          inQuotes = !inQuotes;
        }
      } else if (char === delimiter && !inQuotes) {
        values.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    values.push(current.trim());
    return values;
  }

  const headers = parseLine(lines[0]);
  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    const cols = parseLine(lines[i]);
    if (cols.length >= headers.length) {
      const obj = {};
      headers.forEach((h, idx) => {
        obj[h] = cols[idx];
      });
      rows.push(obj);
    }
  }
  return rows;
}

const parsedRows = parseCsv(rawCsv, ';');
console.log(`Leídos ${parsedRows.length} repuestos desde catalogo_innova.csv`);

const categoryMap = {
  'Motor & Distribución': 'motor',
  'Filtros & Lubricantes': 'filtros',
  'Suspensión & Dirección': 'suspension',
  'Embrague & Transmisión': 'embrague',
  'Frenos': 'frenos',
  'Carrocería & Eléctrico': 'carroceria'
};

const defaultImages = {
  'motor': '/img/products/kit-distribucion.jpg',
  'filtros': '/img/products/filtro-aceite.jpg',
  'suspension': '/img/products/bandeja-suspension.jpg',
  'embrague': '/img/products/kit-embrague.jpg',
  'frenos': '/img/products/pastillas-freno.jpg',
  'carroceria': '/img/products/opticos-focos.jpg'
};

// Leer data/products.js actual para mantener imágenes existentes si las hay
const existingJs = fs.readFileSync(productsJsPath, 'utf8');

const updatedProducts = parsedRows
  .filter(row => (row['Estado'] || 'Activo').toLowerCase() === 'activo')
  .map(row => {
    const catSlug = categoryMap[row['Categoria']] || 'motor';
    const codigo = row['Codigo'] || row['Nombre_Repuesto'].toLowerCase().replace(/[^a-z0-9]+/g, '-');
    
    // Buscar si existe imagen específica para el código en public/img/products/
    let img = defaultImages[catSlug];
    const specificImg = `/img/products/${codigo}.jpg`;
    if (fs.existsSync(path.join(__dirname, '..', 'public', 'img', 'products', `${codigo}.jpg`))) {
      img = specificImg;
    } else {
      const imgRegex = new RegExp(`id:\\s*'${codigo}',[\\s\\S]*?image:\\s*'([^']+)'`);
      const imgMatch = existingJs.match(imgRegex);
      if (imgMatch) {
        img = imgMatch[1];
      }
    }

    const isFeatured = (row['Destacado'] || '').toUpperCase() === 'SI';
    const badge = row['Etiqueta'] || '';

    return {
      id: codigo,
      name: row['Nombre_Repuesto'],
      category: catSlug,
      image: img,
      description: row['Descripcion'] || '',
      featured: isFeatured,
      ...(badge ? { badge: badge } : {})
    };
  });

// Generar nuevo bloque de products en products.js
let productsArrayCode = 'export const products = [\n';
let currentCat = '';

updatedProducts.forEach((p, index) => {
  if (p.category !== currentCat) {
    currentCat = p.category;
    productsArrayCode += `  /* ---- ${p.category.toUpperCase()} ---- */\n`;
  }
  productsArrayCode += '  {\n';
  productsArrayCode += `    id: '${p.id}',\n`;
  productsArrayCode += `    name: '${p.name.replace(/'/g, "\\'")}',\n`;
  productsArrayCode += `    category: '${p.category}',\n`;
  productsArrayCode += `    image: '${p.image}',\n`;
  productsArrayCode += `    description: '${p.description.replace(/'/g, "\\'")}',\n`;
  productsArrayCode += `    compatibleBrands: ['Maxus', 'Toyota', 'Nissan', 'Mitsubishi', 'Volkswagen', 'Great Wall', 'JAC', 'JMC', 'DFSK', 'SsangYong', 'Changan'],\n`;
  if (p.featured) {
    productsArrayCode += `    featured: true,\n`;
  }
  if (p.badge) {
    productsArrayCode += `    badge: '${p.badge.replace(/'/g, "\\'")}',\n`;
  }
  productsArrayCode += '  }' + (index < updatedProducts.length - 1 ? ',' : '') + '\n';
});
productsArrayCode += '];\n';

// Reemplazar en data/products.js desde "export const products = [" hasta antes de "export const maintenanceTips"
const startIdx = existingJs.indexOf('export const products = [');
const endIdx = existingJs.indexOf('export const maintenanceTips = [');

if (startIdx !== -1 && endIdx !== -1) {
  // Encontrar el inicio del comentario de sección anterior a maintenanceTips si existe
  const commentIdx = existingJs.lastIndexOf('/* ============================================================', endIdx);
  const cutIdx = commentIdx !== -1 && commentIdx > startIdx ? commentIdx : endIdx;

  const newJs = existingJs.substring(0, startIdx) + productsArrayCode + '\n' + existingJs.substring(cutIdx);
  fs.writeFileSync(productsJsPath, newJs, 'utf8');
  console.log(`✅ data/products.js actualizado exitosamente con ${updatedProducts.length} productos sincronizados.`);
} else {
  console.error('No se pudieron encontrar las marcas de delimitación en data/products.js');
}
