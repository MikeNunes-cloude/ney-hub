/* Base de datas do calendário editorial.
   Tipos: feriado (nacional/estadual), municipal (Poços de Caldas), facultativo,
   comemorativa (dia temático), local (evento/tradição da cidade).
   Cada item: [mês, dia, nome, tipo, dica de pauta] */

const DATAS_FIXAS = [
  // JANEIRO
  [1, 1, 'Confraternização Universal', 'feriado', 'Mensagem de Ano Novo curta, olhando pra frente: 3 metas da cidade para o ano.'],
  [1, 4, 'Dia Mundial do Braille', 'comemorativa', 'Mostrar onde a cidade tem sinalização em braille ou material acessível nas escolas.'],
  [1, 6, 'Dia de Reis', 'comemorativa', 'Folia de Reis tem tradição no Sul de Minas — registrar um grupo local.'],
  [1, 20, 'Dia do Farmacêutico', 'comemorativa', 'Homenagem aos farmacêuticos da rede municipal (Farmácia de Minas / postos).'],
  [1, 21, 'Dia Nacional de Combate à Intolerância Religiosa', 'comemorativa', 'Mensagem de respeito à diversidade de fé, sem favorecer uma religião.'],
  [1, 24, 'Dia Internacional da Educação', 'comemorativa', 'Volta às aulas se aproximando: o que a rede municipal preparou.'],
  [1, 24, 'Dia do Aposentado', 'comemorativa', 'Homenagem aos servidores aposentados do município.'],
  [1, 29, 'Dia da Visibilidade Trans', 'comemorativa', 'Avaliar com a assessoria se há política pública concreta a mostrar.'],
  // FEVEREIRO
  [2, 2, 'Dia Mundial das Zonas Úmidas', 'comemorativa', 'Nascentes e represas da cidade: preservação da água.'],
  [2, 4, 'Dia Mundial do Câncer', 'comemorativa', 'Serviços de prevenção e exames disponíveis na rede municipal.'],
  [2, 11, 'Dia das Mulheres e Meninas na Ciência', 'comemorativa', 'Destacar alunas da rede ou pesquisadoras da cidade (IFSULDEMINAS, PUC, Unifal).'],
  [2, 19, 'Dia do Esportista', 'comemorativa', 'Atletas locais e projetos esportivos da prefeitura.'],
  [2, 20, 'Dia Mundial da Justiça Social', 'comemorativa', 'Programas da assistência social em números.'],
  // MARÇO
  [3, 8, 'Dia Internacional da Mulher', 'comemorativa', 'Mulheres que fazem a prefeitura funcionar — evitar flores genéricas, mostrar pessoas reais.'],
  [3, 12, 'Dia do Bibliotecário', 'comemorativa', 'Biblioteca municipal: acervo, horários, um livro indicado pelo prefeito.'],
  [3, 15, 'Dia do Consumidor', 'comemorativa', 'Procon municipal: como e onde reclamar.'],
  [3, 19, 'Dia do Artesão', 'comemorativa', 'Artesanato de Poços (cerâmica, tricô, doces) — feira e artesãos locais.'],
  [3, 21, 'Dia Internacional da Síndrome de Down', 'comemorativa', 'Meias trocadas + história real de inclusão na rede municipal.'],
  [3, 21, 'Dia Internacional contra a Discriminação Racial', 'comemorativa', 'Ações de promoção da igualdade racial no município.'],
  [3, 21, 'Dia Internacional das Florestas', 'comemorativa', 'Áreas verdes e plantio de árvores na cidade.'],
  [3, 22, 'Dia Mundial da Água', 'comemorativa', 'Poços é a cidade das águas: DMAE, fontes, águas termais. Pauta forte.'],
  [3, 24, 'Dia Mundial de Combate à Tuberculose', 'comemorativa', 'Diagnóstico e tratamento gratuitos na rede.'],
  [3, 27, 'Dia Mundial do Teatro', 'comemorativa', 'Teatro da Urca e grupos de teatro locais.'],
  // ABRIL
  [4, 2, 'Dia Mundial de Conscientização do Autismo', 'comemorativa', 'Atendimento a pessoas com TEA: escola, saúde, carteirinha CIPTEA.'],
  [4, 7, 'Dia Mundial da Saúde', 'comemorativa', 'Balanço da saúde municipal: consultas, exames, filas reduzidas.'],
  [4, 7, 'Dia do Jornalista', 'comemorativa', 'Agradecimento à imprensa local — relação institucional.'],
  [4, 18, 'Dia Nacional do Livro Infantil', 'comemorativa', 'Prefeito lendo para crianças em uma escola municipal.'],
  [4, 19, 'Dia dos Povos Indígenas', 'comemorativa', 'Respeitar o nome atual (não "Dia do Índio"). Valorizar a cultura indígena com respeito.'],
  [4, 21, 'Tiradentes', 'feriado', 'Data magna de Minas Gerais — orgulho mineiro, história.'],
  [4, 22, 'Dia da Terra', 'comemorativa', 'Coleta seletiva, reciclagem e sustentabilidade na cidade.'],
  [4, 23, 'Dia Mundial do Livro', 'comemorativa', 'Gancho com o Flipoços (que costuma acontecer nessa época).'],
  [4, 28, 'Dia da Educação', 'comemorativa', 'Investimentos em escolas e CMEIs.'],
  // MAIO
  [5, 1, 'Dia do Trabalhador', 'feriado', 'Homenagem a quem trabalha na cidade + vagas do SINE/emprego.'],
  [5, 5, 'Dia Nacional das Comunicações', 'comemorativa', 'Bastidores da equipe de comunicação (humaniza).'],
  [5, 8, 'Dia Nacional do Turismo', 'comemorativa', 'Poços turística: hotéis, Thermas, Cristo, teleférico.'],
  [5, 12, 'Dia da Enfermagem', 'comemorativa', 'Homenagem nominal a enfermeiras e técnicos da rede.'],
  [5, 13, 'Abolição da Escravatura', 'comemorativa', 'Reflexão sobre memória e igualdade racial.'],
  [5, 13, 'Festa de São Benedito', 'local', 'Tradição de Poços com congadas e procissão — confirmar datas da festa no ano.'],
  [5, 15, 'Dia da Família', 'comemorativa', 'Espaços públicos para famílias: praças, parques.'],
  [5, 15, 'Dia do Assistente Social', 'comemorativa', 'Equipes do CRAS/CREAS.'],
  [5, 16, 'Dia do Gari', 'comemorativa', 'Pauta certeira para prefeito: café da manhã com a equipe de limpeza urbana.'],
  [5, 17, 'Dia Mundial da Reciclagem', 'comemorativa', 'Coleta seletiva: dias e bairros.'],
  [5, 17, 'Dia Internacional contra a LGBTfobia', 'comemorativa', 'Avaliar com a assessoria; se houver serviço público, divulgar.'],
  [5, 18, 'Dia de Combate ao Abuso e Exploração Sexual Infantil', 'comemorativa', 'Faça Bonito — canais de denúncia (Disque 100, Conselho Tutelar).'],
  [5, 18, 'Dia Internacional dos Museus', 'comemorativa', 'Museu Histórico e Geográfico e acervos da cidade.'],
  [5, 25, 'Dia Nacional da Adoção', 'comemorativa', 'Adoção de crianças e também de animais (centro de zoonoses).'],
  [5, 25, 'Dia da Indústria', 'comemorativa', 'Indústrias locais e geração de emprego.'],
  [5, 27, 'Dia da Mata Atlântica', 'comemorativa', 'O planalto de Poços tem remanescentes — parques e reservas.'],
  [5, 31, 'Dia Mundial sem Tabaco', 'comemorativa', 'Programa de cessação do tabagismo na rede.'],
  // JUNHO
  [6, 3, 'Dia Nacional da Educação Ambiental', 'comemorativa', 'Projetos ambientais nas escolas municipais.'],
  [6, 5, 'Dia Mundial do Meio Ambiente', 'comemorativa', 'Ações ambientais da gestão em números.'],
  [6, 12, 'Dia dos Namorados', 'comemorativa', 'Poços romântica: Fonte dos Amores, pontos turísticos para casais.'],
  [6, 12, 'Dia Mundial contra o Trabalho Infantil', 'comemorativa', 'Canais de denúncia e programas de proteção.'],
  [6, 14, 'Dia Mundial do Doador de Sangue', 'comemorativa', 'Hemocentro / campanha de doação — prefeito doando gera muito alcance.'],
  [6, 15, 'Dia de Conscientização da Violência contra a Pessoa Idosa', 'comemorativa', 'Junho Prata — canais de denúncia.'],
  [6, 24, 'Dia de São João', 'comemorativa', 'Festas juninas das escolas e bairros.'],
  [6, 26, 'Dia Internacional contra as Drogas', 'comemorativa', 'Rede de atenção psicossocial (CAPS AD).'],
  [6, 28, 'Dia do Orgulho LGBTQIA+', 'comemorativa', 'Avaliar com a assessoria.'],
  // JULHO
  [7, 2, 'Dia do Bombeiro', 'comemorativa', 'Visita ao quartel do Corpo de Bombeiros.'],
  [7, 13, 'Aniversário do ECA', 'comemorativa', 'Conselho Tutelar e direitos das crianças.'],
  [7, 20, 'Dia do Amigo', 'comemorativa', 'Conteúdo leve, de bastidores, com a equipe.'],
  [7, 25, 'Dia do Motorista', 'comemorativa', 'Motoristas do transporte escolar, saúde e coletivo.'],
  [7, 25, 'Dia da Mulher Negra Latino-americana e Caribenha', 'comemorativa', 'Mulheres negras da cidade que inspiram.'],
  [7, 26, 'Dia dos Avós', 'comemorativa', 'Centros de convivência do idoso.'],
  [7, 27, 'Dia do Motociclista', 'comemorativa', 'Segurança no trânsito e motoboys.'],
  [7, 28, 'Dia do Agricultor', 'comemorativa', 'Zona rural e produtores (café, leite, morango) — feira do produtor.'],
  // AGOSTO
  [8, 5, 'Dia Nacional da Saúde', 'comemorativa', 'Bastidores de uma UBS.'],
  [8, 7, 'Aniversário da Lei Maria da Penha', 'comemorativa', 'Agosto Lilás — rede de proteção à mulher no município.'],
  [8, 8, 'Dia do Pedestre', 'comemorativa', 'Calçadas, faixas e travessias seguras.'],
  [8, 11, 'Dia do Estudante', 'comemorativa', 'Alunos da rede municipal em destaque.'],
  [8, 12, 'Dia Internacional da Juventude', 'comemorativa', 'Programas para jovens: primeiro emprego, esporte, cultura.'],
  [8, 17, 'Dia do Patrimônio Histórico', 'comemorativa', 'Thermas Antônio Carlos, Palace Hotel, Palace Casino — Poços tem muito patrimônio.'],
  [8, 19, 'Dia Mundial da Fotografia', 'comemorativa', 'Fotos de Poços enviadas pelos seguidores (UGC).'],
  [8, 19, 'Dia do Ciclista', 'comemorativa', 'Ciclovias e ciclismo na serra.'],
  [8, 22, 'Dia do Folclore', 'comemorativa', 'Lendas e tradições do Sul de Minas.'],
  [8, 24, 'Dia da Infância', 'comemorativa', 'Educação infantil e CMEIs.'],
  [8, 25, 'Dia do Soldado', 'comemorativa', 'Respeito institucional ao Exército.'],
  [8, 29, 'Dia Nacional de Combate ao Fumo', 'comemorativa', 'Reforço do programa antitabagismo.'],
  // SETEMBRO
  [9, 1, 'Dia do Profissional de Educação Física', 'comemorativa', 'Academias ao ar livre e programas de atividade física.'],
  [9, 5, 'Dia da Amazônia', 'comemorativa', 'Ligar ao cuidado ambiental local.'],
  [9, 5, 'Dia Internacional da Mulher Indígena', 'comemorativa', 'Conteúdo respeitoso e educativo.'],
  [9, 7, 'Independência do Brasil', 'feriado', 'Desfile cívico das escolas — cobertura ao vivo nos stories.'],
  [9, 10, 'Dia Mundial de Prevenção do Suicídio', 'comemorativa', 'Setembro Amarelo — CVV 188 e CAPS. Tom sério, sem sensacionalismo.'],
  [9, 21, 'Dia da Árvore', 'comemorativa', 'Plantio de mudas com crianças — pauta clássica e de alto engajamento.'],
  [9, 21, 'Dia Nacional de Luta da Pessoa com Deficiência', 'comemorativa', 'Acessibilidade na cidade: rampas, transporte, inclusão escolar.'],
  [9, 21, 'Dia Mundial do Alzheimer', 'comemorativa', 'Apoio às famílias e cuidadores.'],
  [9, 22, 'Dia Mundial sem Carro', 'comemorativa', 'Mobilidade urbana e transporte coletivo.'],
  [9, 25, 'Dia do Rádio', 'comemorativa', 'Rádios locais — participação do prefeito em programa.'],
  [9, 26, 'Dia Nacional do Surdo', 'comemorativa', 'Vídeo com intérprete de Libras.'],
  [9, 27, 'Dia Mundial do Turismo', 'comemorativa', 'Poços como destino: números do turismo, novidades e eventos.'],
  [9, 29, 'Dia Mundial do Coração', 'comemorativa', 'Prevenção cardiovascular na atenção básica.'],
  // OUTUBRO
  [10, 1, 'Dia Internacional da Pessoa Idosa', 'comemorativa', 'Programas para a terceira idade.'],
  [10, 1, 'Dia do Vereador', 'comemorativa', 'Mensagem institucional à Câmara Municipal.'],
  [10, 4, 'Dia dos Animais', 'comemorativa', 'Castração, adoção e bem-estar animal — sempre engaja muito.'],
  [10, 5, 'Aniversário da Constituição', 'comemorativa', 'Cidadania e direitos.'],
  [10, 10, 'Dia Mundial da Saúde Mental', 'comemorativa', 'Rede de saúde mental do município (CAPS).'],
  [10, 10, 'Dia Nacional da Guarda Municipal', 'comemorativa', 'Homenagem à Guarda Municipal de Poços.'],
  [10, 12, 'Nossa Senhora Aparecida', 'feriado', 'Padroeira do Brasil — mensagem respeitosa.'],
  [10, 12, 'Dia das Crianças', 'comemorativa', 'Ação em escola ou praça; brinquedos nos parques.'],
  [10, 15, 'Dia do Professor', 'comemorativa', 'Homenagem nominal a professores da rede municipal.'],
  [10, 16, 'Dia Mundial da Alimentação', 'comemorativa', 'Merenda escolar e banco de alimentos.'],
  [10, 18, 'Dia do Médico', 'comemorativa', 'Médicos da rede municipal.'],
  [10, 25, 'Dia do Dentista', 'comemorativa', 'Saúde bucal nas UBS e escolas.'],
  [10, 28, 'Dia do Servidor Público', 'facultativo', 'Data mais importante para o público interno — reconhecer o servidor municipal.'],
  [10, 29, 'Dia Nacional do Livro', 'comemorativa', 'Biblioteca e leitura.'],
  [10, 31, 'Dia da Reforma Protestante', 'comemorativa', 'Mensagem respeitosa à comunidade evangélica.'],
  // NOVEMBRO
  [11, 2, 'Finados', 'feriado', 'Cemitérios: horários, limpeza, acessos. Tom sóbrio.'],
  [11, 6, 'Aniversário de Poços de Caldas', 'municipal', 'Maior data do ano para a cidade — planejar série com antecedência (história, moradores, presente para a cidade).'],
  [11, 6, 'Nossa Senhora da Saúde', 'local', 'Padroeira da cidade, celebrada junto com o aniversário.'],
  [11, 14, 'Dia Mundial do Diabetes', 'comemorativa', 'Testes de glicemia gratuitos nas UBS.'],
  [11, 15, 'Proclamação da República', 'feriado', 'Conteúdo cívico leve.'],
  [11, 17, 'Dia Mundial da Prematuridade', 'comemorativa', 'Novembro Roxo — maternidade e UTI neonatal.'],
  [11, 17, 'Dia de Combate ao Câncer de Próstata', 'comemorativa', 'Novembro Azul — mutirão de exames.'],
  [11, 19, 'Dia da Bandeira', 'comemorativa', 'Escolas e civismo.'],
  [11, 19, 'Dia da Mulher Empreendedora', 'comemorativa', 'Empreendedoras locais e Sala do Empreendedor.'],
  [11, 20, 'Dia da Consciência Negra', 'feriado', 'Feriado nacional — Zumbi dos Palmares, história e igualdade racial.'],
  [11, 22, 'Dia do Músico', 'comemorativa', 'Músicos e bandas locais, Banda Municipal.'],
  [11, 25, 'Dia pela Eliminação da Violência contra a Mulher', 'comemorativa', 'Início dos 16 dias de ativismo — canais de denúncia (180).'],
  // DEZEMBRO
  [12, 1, 'Dia Mundial de Luta contra a AIDS', 'comemorativa', 'Dezembro Vermelho — testagem gratuita.'],
  [12, 2, 'Dia Nacional do Samba', 'comemorativa', 'Escolas de samba e cultura popular.'],
  [12, 3, 'Dia Internacional da Pessoa com Deficiência', 'comemorativa', 'Ações de acessibilidade do ano.'],
  [12, 5, 'Dia Internacional do Voluntário', 'comemorativa', 'Voluntários e entidades da cidade.'],
  [12, 10, 'Dia dos Direitos Humanos', 'comemorativa', 'Cidadania e serviços sociais.'],
  [12, 24, 'Véspera de Natal', 'facultativo', 'Mensagem de Natal do prefeito (vídeo).'],
  [12, 25, 'Natal', 'feriado', 'Decoração natalina da cidade e mensagem às famílias.'],
  [12, 31, 'Véspera de Ano Novo', 'facultativo', 'Retrospectiva do ano em vídeo — conteúdo de maior alcance do ano.'],
];

// Campanhas de conscientização que cobrem o mês inteiro
const CAMPANHAS = {
  1: [['Janeiro Branco', 'saúde mental'], ['Janeiro Roxo', 'hanseníase']],
  2: [['Fevereiro Roxo', 'Alzheimer, lúpus e fibromialgia'], ['Fevereiro Laranja', 'leucemia']],
  3: [['Março Lilás', 'câncer do colo do útero'], ['Março Azul-Marinho', 'câncer colorretal']],
  4: [['Abril Azul', 'autismo'], ['Abril Verde', 'segurança no trabalho']],
  5: [['Maio Amarelo', 'segurança no trânsito'], ['Maio Laranja', 'combate ao abuso infantil']],
  6: [['Junho Vermelho', 'doação de sangue'], ['Junho Prata', 'pessoa idosa']],
  7: [['Julho Amarelo', 'hepatites virais']],
  8: [['Agosto Lilás', 'violência contra a mulher'], ['Agosto Dourado', 'aleitamento materno']],
  9: [['Setembro Amarelo', 'prevenção do suicídio'], ['Setembro Verde', 'doação de órgãos e inclusão da PcD']],
  10: [['Outubro Rosa', 'câncer de mama']],
  11: [['Novembro Azul', 'saúde do homem'], ['Novembro Roxo', 'prematuridade']],
  12: [['Dezembro Vermelho', 'HIV/AIDS'], ['Dezembro Laranja', 'câncer de pele']],
};

const ANO_FUNDACAO_POCOS = 1872;

function _pascoa(ano) {
  const a = ano % 19, b = Math.floor(ano / 100), c = ano % 100, d = Math.floor(b / 4), e = b % 4;
  const f = Math.floor((b + 8) / 25), g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30, i = Math.floor(c / 4), k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7, m = Math.floor((a + 11 * h + 22 * l) / 451);
  const mes = Math.floor((h + l - 7 * m + 114) / 31), dia = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(ano, mes - 1, dia);
}
function _soma(d, n) { const x = new Date(d); x.setDate(x.getDate() + n); return x; }
function _nDomingo(ano, mes, n) { // n-ésimo domingo do mês (mes 1-12)
  const d = new Date(ano, mes - 1, 1);
  while (d.getDay() !== 0) d.setDate(d.getDate() + 1);
  d.setDate(d.getDate() + 7 * (n - 1));
  return d;
}
function _ultimoDiaSemana(ano, mes, dow) {
  const d = new Date(ano, mes, 0);
  while (d.getDay() !== dow) d.setDate(d.getDate() - 1);
  return d;
}

// Datas que mudam a cada ano
function datasMoveis(ano) {
  const p = _pascoa(ano);
  return [
    [_soma(p, -48), 'Carnaval (segunda)', 'facultativo', 'Operação Carnaval: segurança, saúde e trânsito; eventos na cidade.'],
    [_soma(p, -47), 'Carnaval', 'facultativo', 'Cobertura de bastidores das equipes que trabalham no feriado.'],
    [_soma(p, -46), 'Quarta-feira de Cinzas', 'facultativo', 'Expediente a partir do meio-dia.'],
    [_soma(p, -2), 'Sexta-feira Santa', 'feriado', 'Mensagem respeitosa; tom sóbrio.'],
    [p, 'Páscoa', 'comemorativa', 'Mensagem de Páscoa às famílias.'],
    [_soma(p, 60), 'Corpus Christi', 'facultativo', 'Tapetes de rua das paróquias — registro bonito da tradição.'],
    [_nDomingo(ano, 5, 2), 'Dia das Mães', 'comemorativa', 'Histórias reais de mães da cidade (servidoras, moradoras).'],
    [_nDomingo(ano, 8, 2), 'Dia dos Pais', 'comemorativa', 'Pais da cidade; conteúdo pessoal do prefeito funciona bem.'],
    [_ultimoDiaSemana(ano, 5, 3), 'Dia do Desafio', 'comemorativa', 'Prefeito puxando atividade física com a população.'],
    [_ultimoDiaSemana(ano, 1, 0), 'Dia Mundial de Combate à Hanseníase', 'comemorativa', 'Janeiro Roxo — diagnóstico gratuito.'],
  ].map(([d, nome, tipo, dica]) => ({ data: _iso(d), nome, tipo, dica }));
}

function _iso(d) {
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}

const _cacheMoveis = {};
// Todas as datas de um dia (yyyy-mm-dd), incluindo as personalizadas da equipe
function datasDoDia(iso, personalizadas = []) {
  const [ano, mes, dia] = iso.split('-').map(Number);
  const out = [];
  for (const [m, d, nome, tipo, dica] of DATAS_FIXAS) {
    if (m === mes && d === dia) {
      let n = nome;
      if (nome === 'Aniversário de Poços de Caldas') n += ` · ${ano - ANO_FUNDACAO_POCOS} anos`;
      out.push({ nome: n, tipo, dica, data: iso });
    }
  }
  if (!_cacheMoveis[ano]) _cacheMoveis[ano] = datasMoveis(ano);
  for (const x of _cacheMoveis[ano]) if (x.data === iso) out.push(x);
  for (const p of personalizadas) {
    const bate = p.anual ? p.data.slice(5) === iso.slice(5) : p.data === iso;
    if (bate) out.push({ nome: p.nome, tipo: p.tipo || 'local', dica: p.dica || '', data: iso, custom: p.id });
  }
  const ordem = { feriado: 0, municipal: 1, local: 2, facultativo: 3, comemorativa: 4 };
  return out.sort((a, b) => ordem[a.tipo] - ordem[b.tipo]);
}

/* Banco de ideias: séries e formatos pensados para perfil de prefeito.
   [título, formato, pilar, frequência, descrição] */
const IDEIAS = [
  ['Prefeito Responde', 'Reels', 'Prestação de contas', 'Semanal', 'Caixinha de perguntas nos stories na segunda; resposta em Reels na quinta. Cria hábito e mostra escuta.'],
  ['Antes e Depois', 'Carrossel', 'Obras', 'Sempre que houver entrega', 'Foto do mesmo ângulo antes e depois da obra. O formato mais compartilhado em perfis de gestão.'],
  ['Obra em timelapse', 'Reels', 'Obras', 'Por obra', 'Câmera fixa registrando a obra do início ao fim; 15 segundos de transformação.'],
  ['Onde está seu imposto', 'Carrossel', 'Prestação de contas', 'Mensal', 'Dados simples e visuais de quanto foi investido em cada área no mês.'],
  ['Prefeito no bairro', 'Reels', 'Proximidade', 'Semanal', 'Visita a um bairro, conversa com moradores, demanda anotada e retorno mostrado depois.'],
  ['Demanda resolvida', 'Reels', 'Proximidade', 'Quinzenal', 'Morador pediu → equipe resolveu → vídeo mostrando o morador satisfeito. Fecha o ciclo.'],
  ['Conheça quem faz', 'Foto', 'Servidores', 'Semanal', 'Um servidor por semana: nome, função, tempo de casa. Aproxima e valoriza o público interno.'],
  ['Poços que dá orgulho', 'Reels', 'Turismo e cidade', 'Semanal', 'Cartões-postais (Thermas, Cristo, teleférico, Fonte dos Amores) com olhar novo: drone, golden hour.'],
  ['Agenda da semana', 'Stories', 'Bastidores', 'Toda segunda', 'O que o prefeito vai fazer na semana, em 3–4 stories com enquete.'],
  ['Resumo da semana', 'Carrossel', 'Prestação de contas', 'Toda sexta', '5 a 7 entregas da semana, uma por slide, com foto real.'],
  ['Mito ou verdade', 'Reels', 'Serviço', 'Quando surgir boato', 'Desmente boato com calma e dados. Rápido, sem atacar ninguém.'],
  ['Serviço útil', 'Carrossel', 'Serviço', 'Semanal', 'Passo a passo de um serviço: emitir IPTU, agendar consulta, matrícula escolar, castração.'],
  ['Bastidores do gabinete', 'Stories', 'Bastidores', 'Diário', 'Momentos espontâneos do dia; humaniza sem esforço de produção.'],
  ['Responde comentário', 'Reels', 'Proximidade', 'Semanal', 'Vídeo respondendo um comentário real do perfil (recurso nativo do Instagram).'],
  ['Dados em 15 segundos', 'Reels', 'Prestação de contas', 'Quinzenal', 'Um número impactante da gestão explicado em 15 segundos.'],
  ['História de Poços', 'Carrossel', 'Turismo e cidade', 'Mensal', 'Fotos antigas x atuais com curiosidades históricas. Engaja muito com quem é da cidade.'],
  ['Depoimento do cidadão', 'Reels', 'Proximidade', 'Quinzenal', 'Morador conta como um serviço da prefeitura mudou algo na vida dele. Prova social.'],
  ['Trend com propósito', 'Reels', 'Bastidores', 'Quando houver trend boa', 'Áudio em alta adaptado a uma entrega real. Alcança quem não segue.'],
  ['Collab com secretarias', 'Reels', 'Serviço', 'Mensal', 'Post em colaboração com o perfil da prefeitura ou de uma secretaria: soma os dois públicos.'],
  ['Live mensal', 'Live', 'Prestação de contas', 'Mensal', 'Bate-papo de 30 min respondendo perguntas ao vivo; recortar trechos para Reels depois.'],
  ['Promessa cumprida', 'Carrossel', 'Prestação de contas', 'Por entrega', 'Compromisso de campanha × entrega realizada, com data e foto.'],
  ['Um dia com…', 'Reels', 'Servidores', 'Mensal', 'Prefeito acompanha um dia de trabalho de um gari, enfermeira, professor ou guarda.'],
];
