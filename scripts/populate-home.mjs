const STRAPI = 'https://tranquil-broccoli-67194e66a1.strapiapp.com';
const TOKEN = process.argv[2] || '4d9ea69cb65640039351af1e2e7bb9cec3bc1d29bdc145458ed70d966c3a2069f465a535b11cc1833c2544fdfb96e757d2d05ab9b775e22bceb96c0fc23d059535bef228d287cf79e32e84dd27a3216a43a75ee177a4c5a1abe5a35e0c2922d8db66018b943ce44b341673feada31f6ccd17cb34c51cb147d066588cbb7b4803';

const headers = { 'Content-Type': 'application/json', Authorization: `Bearer ${TOKEN}` };

const data = {
  hero: {
    titulo: 'Refratários, minerais industriais e soluções técnicas para siderurgia, cimento, petroquímica e agronegócio',
    subtitulo: 'O Grupo IBAR reúne seis empresas especializadas com mais de 50 anos de atuação, atendendo as maiores indústrias do Brasil e da América Latina.',
    cta_texto: 'Conheça nossas soluções',
    cta_link: '#cadeia'
  },
  empresas_titulo: 'Seis empresas especializadas, um grupo integrado',
  industrias_titulo: 'Encontre a solução ideal para sua indústria',
  industrias_subtitulo: 'Cada setor industrial tem desafios únicos. Conheça como o Grupo IBAR atende as necessidades específicas da sua operação.',
  industrias_chips: ['Todos','Siderurgia','Cimento','Petroquímica','Agronegócio','Construção Civil','Vidro','Cerâmica'],
  cadeia_titulo: 'Da jazida ao forno. Soluções para toda a cadeia refratária.',
  cadeia_cards: [
    { nome: 'Mineração', descricao: '43 jazidas próprias para extração de MgO, argilas, sílica e quartzo.', empresa_fornecedor: 'IBAR Nordeste' },
    { nome: 'Matérias-Primas', descricao: 'Beneficiamento e preparação de matérias-primas para a indústria refratária.', empresa_fornecedor: 'IBAR Refratários' },
    { nome: 'Refratários Moldados', descricao: 'Tijolos e peças refratárias prensadas para revestimento de equipamentos industriais.', empresa_fornecedor: 'IBAR Refratários' },
    { nome: 'Refratários Monolíticos', descricao: 'Concretos, argamassas e massas refratárias para aplicação in loco.', empresa_fornecedor: 'IBAR Refratários' },
    { nome: 'Fibras Cerâmicas', descricao: 'Mantas, módulos e peças de fibra cerâmica para isolamento em altas temperaturas.', empresa_fornecedor: 'Nutec IBAR' },
    { nome: 'Isolantes Térmicos', descricao: 'Lã de rocha e soluções de isolamento térmico e acústico industrial.', empresa_fornecedor: 'Nutec IBAR' },
    { nome: 'Serviços Técnicos', descricao: 'Instalação, manutenção e engenharia de aplicação refratária.', empresa_fornecedor: 'Global Service' },
    { nome: 'Soluções Integradas', descricao: 'Gestão completa de refratários: do projeto à operação assistida.', empresa_fornecedor: 'Grupo IBAR' }
  ],
  numeros_titulo: 'Mais de 50 anos de expertise em refratários e minerais industriais',
  stats: [
    { numero: '+50', label: 'Anos de experiência no mercado de refratários e minerais industriais' },
    { numero: '+1.000', label: 'Colaboradores em unidades no Brasil e América Latina' },
    { numero: '+20.000', label: 'Clientes atendidos em diversos setores industriais' },
    { numero: '6', label: 'Empresas especializadas sob um grupo integrado' }
  ],
  depoimentos_titulo: 'O que nossos clientes dizem sobre o Grupo IBAR',
  faq_titulo: 'Perguntas frequentes sobre refratários, minerais industriais e o Grupo IBAR',
  cta_contato: {
    titulo: 'Fale com um especialista do Grupo IBAR',
    descricao: 'Atendimento técnico especializado para siderurgia, cimento, petroquímica e agronegócio.',
    cta_texto: 'Enviar solicitação',
    cta_link: '#contato'
  },
  seo_title: 'Grupo IBAR — Refratários, Minerais Industriais e Soluções Técnicas',
  seo_description: 'O Grupo IBAR reúne seis empresas especializadas com mais de 50 anos de atuação em refratários, minerais industriais e soluções técnicas.'
};

const res = await fetch(`${STRAPI}/api/home-page`, { method: 'PUT', headers, body: JSON.stringify({ data }) });
if (!res.ok) {
  console.error('Error:', res.status, await res.text());
  process.exit(1);
}
const json = await res.json();
console.log('✅ Home Page populated:', json.data.documentId);
