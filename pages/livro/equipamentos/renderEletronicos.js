/* ======================
   SCHEMAS DAS TABELAS
====================== */
const schemas = {
  'Commlinks': {
    headers: ['Nome', 'Rating', '(D/F)', 'Slots', 'Dispon.', 'Preço'],
    map: [0, 1, 2, 3, 4, 5],
  },

  'Cyberdecks': {
    headers: [
      'Nome',
      'Rating',
      '(A/S)',
      'Slots',
      'Dispon.',
      'Preço',
    ],
    map: [0, 1, 2, 3, 4, 5],
  },

  'RCC': {
    headers: [
      'Nome',
      'Rating',
      'D/F',
      'Disponib.',
      'Preço',
    ],
    map: [0, 1, 2, 3, 4],
  },

  'Acessórios': {
    headers: [
      'Nome',
      'Rating do dispos.',
      'Disponib.',
      'Preço',
    ],
    map: [0, 1, 2, 3],
  },

  'Comunicação e Contramedidas': {
     headers: [
        'nome',
        'disponibilidade',
        'preço',
      ],
    map: [0, 1, 2],
  },

  'Tags':{
    headers: [
        'nome',
        'rating do dispos.',
        'disponib.',
        'preço',
    ],
    map: [0, 1, 2, 3],
  },
  'Software':{
    headers:[
        'nome',
        'disponib.',
        'preço',
    ],
    map: [0, 1, 2],
  },
  'Identificação':{
    headers: [
        'Nome',
        'Disponibilidade',
        'Preço',
    ],
    map: [0, 1, 2],
  },
  'Visual': {
    headers: [
        'nome',
        'capacid.',
        'disponib.',
        'preço',
    ],
    map: [0, 1, 2, 3],
  },
  'Melhorias Visuais': {
    headers: [
        'nome',
        'capacid.',
        'disponib.',
        'preço',
    ],
    map: [0, 1, 2, 3],
  },
  'Audio': {
    headers: [
        'nome',
        'capacid',
        'disponib',
        'preço',
    ],
    map: [0, 1, 2, 3],
  },
  'Melhorias Auditivas':{
    headers: [
        'nome',
        'capacid',
        'disponib',
        'preço',
    ],
    map:[0, 1, 2, 3],
  },
  'Sensores':{
    headers: [
        'nome',
        'capacid',
        'disponib',
        'preço',
    ],
    map: [0, 1, 2, 3],
  },
  'Conjunto de Sensores':{
    headers: [
        'tamanho do conjunto',
        'rating máximo de cada sensor',
    ],
    map: [0, 1],
  },
  'Função dos Sensores':{
    headers: [
        'nome',
        'alcance máximo',
    ],
    map: [0, 1],
  },

};



/* ======================
   COLUNAS QUE SÃO ''TAGS''
====================== */
const COLUNAS_COM_TAGS = ['Vetor', 'Efeitos'];

/* ======================
   FORMATAR TAGS
====================== */
function formatarTags(valor) {
  if (!valor || valor === '—') return '—';

  return valor
    .split(',')
    .map(tag => tag.trim())
    .join(' || ');
}

/* ======================
   CRIAR TABELA
====================== */
function criarTabela(categoria, itens, schema) {
  const section = document.createElement('section');

  /* ===== BLOCO ESPECIAL: RCC ===== */
if (categoria === 'RCC') {
  const titulo = document.createElement('h2');
  titulo.textContent = 'Rigger Command Console (RCC)';

  const paragrafo = document.createElement('p');

  paragrafo.append(
    'Também chamado de Cadeira do Capitão, o RCC é a plataforma utilizada para controlar múltiplos veículos de uma só vez. Um RCC pode ter um número de Veículos/Drones Superconectados (Slaved) igual à seu Rating x3. Você pode dar um comando com uma Ação Maior para quantos drones quiser. Este comando será obedecido por cada drone em seu devido turno. Além de controlar, o RCC fornece resistência contra hackers. Para hackear um drone slaved à um RCC ele primeiro tem que hackear o RCC em si. Pra se defender, o RCC tem seus próprios atributos de Processamento de Dados (D) e Firewall (F). Processamento de Dados é utilizado também pra determinar iniciativa quando em VR. ',
    document.createElement('br'),
    document.createElement('br'),
    'O RCC também pode rodar Autosofts e compartilhar o mesmo com todos os drones conectados. O número máximo de Autosofts e outros programas é igual ao Processamento de Dados do RCC.',
    document.createElement('br'),
    document.createElement('br'),
    'RCCs também providenciam redução de barulho (Noise) igual ao Rating do mesmo.'
  );

  section.appendChild(titulo);
  section.appendChild(paragrafo);
}


    /* ===== BLOCO ESPECIAL: Acessórios ===== */
  if (categoria === 'Acessórios') {
    const titulo = document.createElement('h2');
    titulo.textContent = 'Acessórios';

    const paragrafo = document.createElement('p');
    paragrafo.textContent =
      'Com raras excessões, todos os acessórios são compatíveis com todas as Commlinks, Cyberdecks e (Com a permissão do Mestre) outros dispositivos eletrônicos. Todos os acessórios são Wireless e, se não estiverem Superconectados (Slaved), podem virar uma porta de entrada silenciosa para um hacker. Uma Commlink ou Cyberdeck tem capacidade máxima de acessórios slaved igual ao seu Processamento de Dados (D). Todas as outras conexões são abertas e, portanto, suceetíveis a serem exploradas por deckers ou technomancers.';

    section.appendChild(titulo);
    section.appendChild(paragrafo);
  }

      /* ===== BLOCO ESPECIAL: Tags ===== */
  if (categoria === 'Tags') {
    const titulo = document.createElement('h2');
    titulo.textContent = 'Tags';

    const paragrafo = document.createElement('p');
    paragrafo.textContent =
      'Tag são compradas em pacotes com 10.';

    section.appendChild(titulo);
    section.appendChild(paragrafo);
  }

     /* ===== BLOCO ESPECIAL: Sensores ===== */
if (categoria === 'Sensores') {
  const titulo = document.createElement('h2');
  titulo.textContent = 'Sensores';

  const paragrafo = document.createElement('p');

  paragrafo.append(
    'Sensores precisam ser colocados em algum tipo de caixa ou dispositivo. Sensores podem gravar informação para eles (Ler Sensor Tag), mandar  em tempo real por uma conexão sem fio ou enviar como arquivo para outros dispositivos. Eles estão disponíveis em dois tipos: Único ou Conjunto. ',
    document.createElement('br'),
    document.createElement('br'),
    'Você pode usar um Conjunto de Sensores em testes de Percepção. Num teste de Percepção utilizando sensores, a Dice Pool seria Rating do Conjunto+Intuição/Lógica. ',
  );

  section.appendChild(titulo);
  section.appendChild(paragrafo);
}

  /* ===== TÍTULO DA CATEGORIA ===== */
  const h2 = document.createElement('h3');
  h2.textContent = categoria.replace(/-/g, ' ').toUpperCase();
  section.appendChild(h2);

  const table = document.createElement('table');

  /* ===== THEAD ===== */
  const thead = document.createElement('thead');
  const trHead = document.createElement('tr');

  schema.headers.forEach(header => {
    const th = document.createElement('th');
    th.textContent = header;
    trHead.appendChild(th);
  });

  thead.appendChild(trHead);
  table.appendChild(thead);

  /* ===== TBODY ===== */
  const tbody = document.createElement('tbody');

  itens.forEach(item => {
    const tr = document.createElement('tr');

    schema.map.forEach((index, colIndex) => {
      const td = document.createElement('td');
      const nomeColuna = schema.headers[colIndex];
      const valor = item[index];

      if (COLUNAS_COM_TAGS.includes(nomeColuna)) {
        td.textContent = formatarTags(valor);
        td.classList.add('tags');
      } else {
        td.textContent = valor ?? '—';
      }

      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  section.appendChild(table);

  return section;
}

/* ======================
   FILTRO + RENDER
====================== */
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('conteudo');
  const filtroNome = document.getElementById('filtro-nome');

  function aplicarFiltros() {
    const termo = filtroNome.value.toLowerCase();
    container.innerHTML = '';

    Object.entries(dadosEletronicos).forEach(([categoria, itens]) => {
      const schema = schemas[categoria];
      if (!schema) return;

      const filtrados = itens.filter(item =>
        item.some(campo =>
          String(campo).toLowerCase().includes(termo)
        )
      );

      if (filtrados.length > 0) {
        container.appendChild(
          criarTabela(categoria, filtrados, schema)
        );
      }
    });
  }

  filtroNome.addEventListener('input', aplicarFiltros);

  // render inicial
  aplicarFiltros();
});
