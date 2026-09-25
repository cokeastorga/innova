const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const images = [
  {
    name: 'correa-accesorios',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Courroie_accessoire_crant%C3%A9e.jpg'
  },
  {
    name: 'aceite-transmision',
    url: 'https://m.media-amazon.com/images/I/71k+V28nJ3L._AC_SL1500_.jpg'
  },
  {
    name: 'desengrasante',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/27/CRC_Brakleen_Brake_Parts_Cleaner.jpg'
  },
  {
    name: 'terminal-direccion',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Tie_rod_end.jpeg'
  },
  {
    name: 'cremallera',
    url: 'https://m.media-amazon.com/images/I/61kYQG1i5TL._AC_SL1500_.jpg'
  },
  {
    name: 'rodamiento-empuje',
    url: 'https://m.media-amazon.com/images/I/71YJk7sP9VL._AC_SL1500_.jpg'
  },
  {
    name: 'cruceta-cardan',
    url: 'https://m.media-amazon.com/images/I/71b2tqXyZKL._AC_SL1500_.jpg'
  },
  {
    name: 'tambor-freno',
    url: 'https://m.media-amazon.com/images/I/81k7U0M0XIL._AC_SL1500_.jpg'
  },
  {
    name: 'cilindro-freno',
    url: 'https://m.media-amazon.com/images/I/61x0S6v1zNL._AC_SL1500_.jpg'
  },
  {
    name: 'opticos-focos',
    url: 'https://m.media-amazon.com/images/I/81f-7uP6qML._AC_SL1500_.jpg'
  },
  {
    name: 'ampolletas',
    url: 'https://m.media-amazon.com/images/I/71lq1q1b4KL._AC_SL1500_.jpg'
  },
  {
    name: 'aceite-5w30',
    url: 'https://m.media-amazon.com/images/I/71oVfW9I-BL._AC_SL1500_.jpg'
  },
  {
    name: 'sensor-abs',
    url: 'https://m.media-amazon.com/images/I/61Uq-4H3JPL._AC_SL1500_.jpg'
  }
];

const tempDir = path.join(__dirname, 'temp_raw_images');
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir, { recursive: true });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: status code ${res.statusCode}`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve());
      });
      file.on('error', (err) => {
        fs.unlink(dest, () => reject(err));
      });
    });
    req.on('error', reject);
  });
}

async function run() {
  for (const item of images) {
    const ext = path.extname(item.url.split('?')[0]) || '.jpg';
    const dest = path.join(tempDir, `${item.name}${ext}`);
    try {
      console.log(`Downloading ${item.name}...`);
      await download(item.url, dest);
      const stat = fs.statSync(dest);
      console.log(`Downloaded ${item.name}: ${stat.size} bytes`);
    } catch (err) {
      console.error(`Error downloading ${item.name}:`, err.message);
    }
  }
}

run();
