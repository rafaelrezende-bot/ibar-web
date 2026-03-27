const STRAPI_URL = import.meta.env.STRAPI_URL || 'https://tranquil-broccoli-67194e66a1.strapiapp.com';

export interface StrapiResponse<T> {
  data: T[];
  meta: { pagination: { page: number; pageSize: number; pageCount: number; total: number } };
}

export interface Empresa {
  id: number;
  documentId: string;
  nome: string;
  slug: string | null;
  descricao: string | null;
  ordem: number;
}

export interface Industria {
  id: number;
  documentId: string;
  nome: string;
  slug: string | null;
  descricao: string | null;
  tags: string | null;
  ordem: number;
}

export interface Depoimento {
  id: number;
  documentId: string;
  texto: string;
  autor: string;
  cargo: string | null;
  empresa: string | null;
  ordem: number;
}

export interface FAQ {
  id: number;
  documentId: string;
  pergunta: string;
  resposta: string;
  ordem: number;
}

async function fetchStrapi<T>(endpoint: string): Promise<T[]> {
  const res = await fetch(`${STRAPI_URL}/api/${endpoint}?sort=ordem:asc&pagination[pageSize]=100`);
  if (!res.ok) throw new Error(`Strapi ${endpoint}: ${res.status}`);
  const json: StrapiResponse<T> = await res.json();
  return json.data;
}

export interface HeroComponent {
  titulo: string;
  subtitulo: string;
  cta_texto: string;
  cta_link: string;
}

export interface CadeiaCard {
  nome: string;
  descricao: string;
  empresa_fornecedor: string;
  cta_link: string | null;
}

export interface Stat {
  numero: string;
  label: string;
}

export interface CtaContato {
  titulo: string;
  descricao: string;
  cta_texto: string;
  cta_link: string;
}

export interface HomePage {
  hero: HeroComponent;
  empresas_titulo: string;
  industrias_titulo: string;
  industrias_subtitulo: string;
  industrias_chips: string[];
  cadeia_titulo: string;
  cadeia_cards: CadeiaCard[];
  numeros_titulo: string;
  stats: Stat[];
  depoimentos_titulo: string;
  faq_titulo: string;
  cta_contato: CtaContato;
  seo_title: string;
  seo_description: string;
}

export const getEmpresas = () => fetchStrapi<Empresa>('empresas');
export const getIndustrias = () => fetchStrapi<Industria>('industrias');
export const getDepoimentos = () => fetchStrapi<Depoimento>('depoimentos');
export const getFAQs = () => fetchStrapi<FAQ>('faqs');

export async function getHomePage(): Promise<HomePage> {
  const res = await fetch(`${STRAPI_URL}/api/home-page?populate=*`);
  if (!res.ok) throw new Error(`Strapi home-page: ${res.status}`);
  const json = await res.json();
  return json.data;
}
