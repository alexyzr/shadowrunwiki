// Dados das magias
const dadosMagias = [
    ["Jato de Ácido", "Combate", "LOS", "FísicoIndireto", "Instântaneo", "5", "EspecialFísico"],
    ["Onda Tóxica", "Combate", "LOS (Área)", "FísicoIndireto", "Instântaneo", "6", "EspecialFísico"],
    ["Pancada (Clout)", "Combate", "LOS", "FísicoIndireto", "Instântaneo", "3", "Stun"],
    ["Explosão (Blast)", "Combate", "LOS (Área)", "FísicoIndireto", "Instântaneo", "4", "Stun"],
    ["Flecha Flamejante", "Combate", "LOS", "FísicoIndireto", "Instântaneo", "5", "EspecialFísico"],
    ["Bola de Fogo", "Combate", "LOS (Área)", "FísicoIndireto", "Instântaneo", "6", "EspecialFísico"],
    ["Lança Congelante", "Combate", "LOS", "FísicoIndireto", "Instântaneo", "5", "EspecialFísico"],
    ["Nevasca (Ice Storm)", "Combate", "LOS (Área)", "FísicoIndireto", "Instântaneo", "6", "EspecialFísico"],
    ["Choque (Lightning Bolt)", "Combate", "LOS", "FísicoIndireto", "Instântaneo", "5", "EspecialFísico"],
    ["Relâmpago (Lightning Ball)", "Combate", "LOS (Área)", "FísicoIndireto", "Instântaneo", "6", "EspecialFísico"],
    ["Flecha de Mana", "Combate", "LOS", "DiretoMana", "Instântaneo", "4", "Físico"],
    ["Bola de Mana", "Combate", "LOS (Área)", "DiretoMana", "Instântaneo", "5", "Físico"],
    ["Flecha do Poder", "Combate", "LOS", "DiretoFísico", "Instântaneo", "4", "Físico"],
    ["Bola de Poder", "Combate", "LOS (Área)", "DiretoFísico", "Instântaneo", "5", "Físico"],
    ["Flecha de Atordoamento", "Combate", "LOS", "DiretoMana", "Instântaneo", "3", "Stun"],
    ["Bola de Atordoamento", "Combate", "LOS (Área)", "DiretoMana", "Instântaneo", "4", "Stun"],
    ["Analizar Dispositivo", "Detecção", "Toque", "Físico", "Sustentado", "2", "Inexistente"],
    ["Analizar Magia", "Detecção", "Toque", "Físico", "Sustentado", "3", "Inexistente"],
    ["Analizar Verdade", "Detecção", "Toque", "Mana", "Sustentado", "3", "Inexistente"],
    ["Clariaudiência", "Detecção", "Toque", "Mana", "Sustentado", "3", "Inexistente"],
    ["Clarividência", "Detecção", "Toque", "Mana", "Sustentado", "3", "Inexistente"],
    ["Senso de Combate", "Detecção", "Toque", "Mana", "Sustentado", "3", "Inexistente"],
    ["Detectar Inimigos", "Detecção", "Toque", "Mana", "Sustentado", "3", "Inexistente"],
    ["Detectar Vida", "Detecção", "Toque", "Mana", "Sustentado", "3", "Inexistente"],
    ["Detectar Magia", "Detecção", "Toque", "Mana", "Sustentado", "4", "Inexistente"],
    ["Telepatia (Mindlink)", "Detecção", "Toque", "Mana", "Sustentado", "3", "Inexistente"],
    ["Sonda Mental (Mind Probe)", "Detecção", "Toque", "Mana", "Sustentado", "5", "Inexistente"],
    ["Antídoto", "Saúde", "Toque", "Físico", "Permanente", "5", "Inexistente"],
    ["Estabilizar", "Saúde", "Toque", "Mana", "Permanente", "3", "Inexistente"],
    ["Cura", "Saúde", "Toque", "Físico", "Permanente", "3", "Inexistente"],
    ["Cura Purificadora", "Saúde", "Toque", "Físico", "Permanente", "5", "Inexistente"],
    ["Cura Refrescante", "Saúde", "Toque", "Físico", "Permanente", "5", "Inexistente"],
    ["Cura Quentinha", "Saúde", "Toque", "Físico", "Permanente", "5", "Inexistente"],
    ["Aumentar Reflexos", "Saúde", "Toque", "Físico", "Sustentado", "5", "Inexistente"],
    ["Aumentar Atributo", "Saúde", "Toque", "Físico", "Sustentado", "3", "Inexistente"],
    ["Diminuir Atributo", "Saúde", "Toque", "Físico", "Sustentado", "3", "Inexistente"],
    ["Resistir à Dor", "Saúde", "Toque", "Mana", "Sustentado", "3", "Inexistente"],
    ["Agonia", "Ilusão", "LOS", "ManaSingle-Sense", "Sustentado", "3", "Inexistente"],
    ["Confusão", "Ilusão", "LOS", "ManaMulti-Sense", "Sustentado", "3", "Inexistente"],
    ["Caos", "Ilusão", "LOS", "FísicoMulti-Sense", "Sustentado", "4", "Inexistente"],
    ["Silêncio (Hush)", "Ilusão", "Toque", "ManaSingle-Sense", "Sustentado", "3", "Inexistente"],
    ["Quietude (Silence)", "Ilusão", "Toque", "FísicoSingle-Sense", "Sustentado", "4", "Inexistente"],
    ["Invisibilidade", "Ilusão", "Toque", "ManaSingle-Sense", "Sustentado", "3", "Inexistente"],
    ["Manto (Improved Invisibility)", "Ilusão", "Toque", "FísicoSingle-Sense", "Sustentado", "4", "Inexistente"],
    ["Máscara", "Ilusão", "Toque", "ManaMulti-Sense", "Sustentado", "3", "Inexistente"],
    ["Máscara Física", "Ilusão", "Toque", "FísicoMulti-Sense", "Sustentado", "4", "Inexistente"],
    ["Fantasma", "Ilusão", "LOS (Área)", "ManaMulti-Sense", "Sustentado", "3", "Inexistente"],
    ["Fantasma Digital", "Ilusão", "LOS (Área)", "FísicoMulti-Sense", "Sustentado", "4", "Inexistente"],
    ["Manto Digital (Sensor Sneak)", "Ilusão", "Toque", "FísicoMulti-Sense", "Sustentado", "2", "Inexistente"],
    ["Animar Plástico", "Manipulação", "LOS", "Físico", "Limitado", "3", "Inexistente"],
    ["Animar Madeira", "Manipulação", "LOS", "Físico", "Limitado", "4", "Inexistente"],
    ["Animar Pedra", "Manipulação", "LOS", "Físico", "Limitado", "5", "Inexistente"],
    ["Animar Metal", "Manipulação", "LOS", "Físico", "Limitado", "6", "Inexistente"],
    ["Armadura", "Manipulação", "Toque", "Físico", "Sustentado", "4", "Inexistente"],
    ["Armadura Mística", "Manipulação", "Toque", "Mana", "Sustentado", "3", "Inexistente"],
    ["Armadura Elemental", "Manipulação", "Toque", "Mana", "Sustentado", "5", "Inexistente"],
    ["Controlar Ações", "Manipulação", "LOS", "Mana", "Limitado", "4", "Inexistente"],
    ["Controlar Pensamentos", "Manipulação", "LOS", "Mana", "Limitado", "4", "Inexistente"],
    ["Luz", "Manipulação", "LOS (Área)", "Físico", "Sustentado", "3", "Inexistente"],
    ["Escuridão", "Manipulação", "LOS (Área)", "Físico", "Sustentado", "3", "Inexistente"],
    ["Catapulta (Fling)", "Manipulação", "LOS", "Físico", "Instântaneo", "5", "Stun"],
    ["Levitar", "Manipulação", "LOS", "Físico", "Sustentado", "6", "Inexistente"],
    ["Barreira de Mana", "Manipulação", "LOS (Área)", "Mana", "Sustentado", "5", "Inexistente"],
    ["Barreira Física", "Manipulação", "LOS (Área)", "Físico", "Sustentado", "6", "Inexistente"],
    ["Manipular Plástico", "Manipulação", "LOS", "Físico", "Sustentado", "2", "Inexistente"],
    ["Manipular Madeira", "Manipulação", "LOS", "Físico", "Sustentado", "3", "Inexistente"],
    ["Manipular Pedra", "Manipulação", "LOS", "Físico", "Sustentado", "4", "Inexistente"],
    ["Manipular Metal", "Manipulação", "LOS", "Físico", "Sustentado", "5", "Inexistente"],
    ["Reforçar Parede", "Manipulação", "LOS (Área)", "Físico", "Sustentado", "4", "Inexistente"],
    ["Armadura Automobilística", "Manipulação", "Toque", "Físico", "Sustentado", "6", "Inexistente"],
    ["Explosão Foci (Focus Burst)", "Manipulação", "Toque", "Mana", "Sustentado", "7", "Inexistente"],
    ["Overclock", "Manipulação", "LOS", "Físico", "Sustentado", "4", "Inexistente"],
    ["Trovão", "Manipulação", "LOS (Área)", "Físico", "Sustentado", "3", "Inexistente"]
];


function formatarTipo(tipo) {
    return tipo
        .replace(/([A-Z])/g, ' $1')
        .replace(/\s+/g, ' ')
        .trim()
        .replace(/Single Sense/g, 'Single-Sense')
        .replace(/Multi Sense/g, 'Multi-Sense');
}

function formatarDano(dano) {
    if (dano === "Inexistente" || dano === "Stun") return dano;

    return dano
        .replace(/([A-Z])/g, ' $1')
        .replace(/\s+/g, ' ')
        .trim();
}

// NORMALIZAÇÃO ÚNICA (ESSENCIAL PARA FILTROS)
function normalizarTipo(tipo) {
    return formatarTipo(tipo)
        .replace(/\s+/g, '')
        .toLowerCase();
}


// ===============================
// CLASSES CSS
// ===============================
function getClassByContent(conteudo, tipo) {
    if (tipo === "escola") {
        switch (conteudo) {
            case "Combate": return "escola combate";
            case "Detecção": return "escola deteccao";
            case "Saúde": return "escola saude";
            case "Ilusão": return "escola ilusao";
            case "Manipulação": return "escola manipulacao";
            default: return "escola";
        }
    }

    if (tipo === "dano") {
        if (conteudo.includes("Físico")) return "dano fisico";
        if (conteudo === "Stun") return "dano stun";
        if (conteudo.includes("Mana")) return "dano mana";
        if (conteudo === "Inexistente") return "dano inexistente";
        return "dano";
    }

    return "";
}


// ===============================
// TABELA
// ===============================
function renderizarTabela(dados) {
    const corpoTabela = document.getElementById("corpo-tabela");
    corpoTabela.innerHTML = "";

    dados.forEach(magia => {
        const tr = document.createElement("tr");

        magia.forEach((valor, index) => {
            const td = document.createElement("td");

            // Tipo
            if (index === 3) {
                const tipoFormatado = formatarTipo(valor);
                td.className = "tipo";

                tipoFormatado.split(/\s+/).forEach(palavra => {
                    const span = document.createElement("span");
                    span.textContent = palavra;
                    td.appendChild(span);
                    td.appendChild(document.createTextNode(" "));
                });
            }
            // Dano
            else if (index === 6) {
                const danoFormatado = formatarDano(valor);
                td.className = getClassByContent(valor, "dano");

                danoFormatado.split(/\s+/).forEach(palavra => {
                    const span = document.createElement("span");
                    span.textContent = palavra;
                    span.className = "palavra-dano";
                    td.appendChild(span);
                    td.appendChild(document.createTextNode(" "));
                });
            }
            // Escola
            else if (index === 1) {
                td.textContent = valor;
                td.className = getClassByContent(valor, "escola");
            }
            // Outros
            else {
                td.textContent = valor;
            }

            tr.appendChild(td);
        });

        corpoTabela.appendChild(tr);
    });
}


// ===============================
// FILTROS
// ===============================
function gerarTiposUnicos() {
    const set = new Set();
    dadosMagias.forEach(magia => set.add(formatarTipo(magia[3])));
    return [...set].sort();
}

function preencherFiltroTipos() {
    const filtro = document.getElementById("filtro-tipo");

    while (filtro.options.length > 1) {
        filtro.remove(1);
    }

    gerarTiposUnicos().forEach(tipo => {
        const option = document.createElement("option");
        option.value = normalizarTipo(tipo);
        option.textContent = tipo;
        filtro.appendChild(option);
    });
}

function filtrarMagias() {
    const escola = document.getElementById("filtro-escola").value;
    const nome = document.getElementById("filtro-nome").value.toLowerCase();
    const tipo = document.getElementById("filtro-tipo").value;
    const dv = parseInt(document.getElementById("filtro-dv").value);

    const filtrado = dadosMagias.filter(magia => {
        if (escola !== "todas" && magia[1] !== escola) return false;
        if (nome && !magia[0].toLowerCase().includes(nome)) return false;

        if (tipo !== "todos") {
            if (normalizarTipo(magia[3]) !== tipo) return false;
        }

        if (dv < 10 && parseInt(magia[5]) > dv) return false;

        return true;
    });

    renderizarTabela(filtrado);
}


// ===============================
// INIT
// ===============================
document.addEventListener("DOMContentLoaded", () => {
    preencherFiltroTipos();
    renderizarTabela(dadosMagias);

    document.getElementById("filtro-escola").addEventListener("change", filtrarMagias);
    document.getElementById("filtro-nome").addEventListener("input", filtrarMagias);
    document.getElementById("filtro-tipo").addEventListener("change", filtrarMagias);
    document.getElementById("filtro-dv").addEventListener("change", filtrarMagias);
});
