/* ======================
   SCHEMAS DAS TABELAS
====================== */
const schemas = {
  medicina: {
    headers: ['Nome', 'Disponibilidade', 'Custo'],
    map: [0, 1, 2],
  },

  toxinas: {
    headers: [
      'Nome',
      'Poder',
      'Velocidade',
      'Duração',
      'Vetor',
      'Efeitos',
      'Disponib.',
      'Preço',
    ],
    map: [0, 1, 2, 3, 4, 5, 6, 7],
  },

  drogas: {
    headers: [
      'Nome',
      'Poder',
      'Velocidade',
      'Duração',
      'Vetor',
      'Disponib.',
      'Preço',
    ],
    map: [0, 1, 2, 3, 4, 5, 6],
  },

  grades: {
    headers: [
      'Tipo',
      'Essência',
      'Preço',
      'Disponibilidade',
    ],
    map: [0, 1, 2, 3],
  },

  cyberware: {
     headers: [
        'nome',
        'essência',
        'capacid.',
        'disponib.',
        'preço',
      ],
    map: [0, 1, 2, 3, 4],
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

  /* ===== BLOCO ESPECIAL: GRADES ===== */
  if (categoria === 'grades') {
    const titulo = document.createElement('h2');
    titulo.textContent = 'Aumentações';

    const subtitulo = document.createElement('h3');
    subtitulo.textContent = 'Grades';

    const paragrafo = document.createElement('p');
    paragrafo.textContent =
      'Toda aumentação, seja cyberware ou Bioware, pode ser comprada numa grade diferente. Os números que aparecem são para o Grade Normal. Caso queira um Grade diferente, adapte o Preço, Essência e disponibilidade de acordo com a tabela abaixo.';

    section.appendChild(titulo);
    section.appendChild(subtitulo);
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

    Object.entries(dadosBiotech).forEach(([categoria, itens]) => {
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
