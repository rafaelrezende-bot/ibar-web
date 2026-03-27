const STRAPI_URL = process.env.STRAPI_URL || 'https://tranquil-broccoli-67194e66a1.strapiapp.com';
const MAX_RETRIES = 10;
const DELAY = 5000;

async function warm() {
  for (let i = 1; i <= MAX_RETRIES; i++) {
    try {
      const res = await fetch(`${STRAPI_URL}/api/empresas?pagination[pageSize]=1`);
      if (res.ok) {
        console.log(`Strapi warm (attempt ${i}/${MAX_RETRIES})`);
        return;
      }
      console.log(`Strapi returned ${res.status}, retrying in ${DELAY / 1000}s...`);
    } catch (e) {
      console.log(`Strapi unreachable, retrying in ${DELAY / 1000}s...`);
    }
    await new Promise(r => setTimeout(r, DELAY));
  }
  throw new Error('Strapi Cloud did not wake up after ' + MAX_RETRIES + ' attempts');
}

warm();
