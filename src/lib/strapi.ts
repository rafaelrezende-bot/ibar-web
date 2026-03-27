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

export const getEmpresas = () => fetchStrapi<Empresa>('empresas');
export const getIndustrias = () => fetchStrapi<Industria>('industrias');
export const getDepoimentos = () => fetchStrapi<Depoimento>('depoimentos');
export const getFAQs = () => fetchStrapi<FAQ>('faqs');
