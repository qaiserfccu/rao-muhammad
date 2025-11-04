import fs from 'fs';
import path from 'path';
import https from 'https';

const FONTS_DIR = path.join(process.cwd(), 'src/fonts');

const GEIST_FONTS = [
  {
    name: 'Geist-Regular.woff2',
    url: 'https://vercel.com/font/geist-sans/Geist-Regular.woff2'
  },
  {
    name: 'Geist-Medium.woff2',
    url: 'https://vercel.com/font/geist-sans/Geist-Medium.woff2'
  },
  {
    name: 'Geist-SemiBold.woff2',
    url: 'https://vercel.com/font/geist-sans/Geist-SemiBold.woff2'
  },
  {
    name: 'Geist-Bold.woff2',
    url: 'https://vercel.com/font/geist-sans/Geist-Bold.woff2'
  },
  {
    name: 'GeistMono-Regular.woff2',
    url: 'https://vercel.com/font/geist-mono/GeistMono-Regular.woff2'
  },
  {
    name: 'GeistMono-Medium.woff2',
    url: 'https://vercel.com/font/geist-mono/GeistMono-Medium.woff2'
  },
  {
    name: 'GeistMono-SemiBold.woff2',
    url: 'https://vercel.com/font/geist-mono/GeistMono-SemiBold.woff2'
  },
  {
    name: 'GeistMono-Bold.woff2',
    url: 'https://vercel.com/font/geist-mono/GeistMono-Bold.woff2'
  }
];

// Create fonts directory if it doesn't exist
if (!fs.existsSync(FONTS_DIR)) {
  fs.mkdirSync(FONTS_DIR, { recursive: true });
}

// Download function
function downloadFont(url, filename) {
  return new Promise((resolve, reject) => {
    const filepath = path.join(FONTS_DIR, filename);
    const file = fs.createWriteStream(filepath);

    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {
        reject(err);
      });
    });
  });
}

// Download all fonts
async function downloadAllFonts() {
  try {
    await Promise.all(GEIST_FONTS.map(font => 
      downloadFont(font.url, font.name)
    ));
    console.log('All fonts downloaded successfully!');
  } catch (error) {
    console.error('Error downloading fonts:', error);
    process.exit(1);
  }
}

downloadAllFonts();