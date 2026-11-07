/* Perguntas do briefing para o cliente responder sozinho.
   Os ids dos campos são os mesmos do formulário interno, para a skill briefing-site (modo 2) ler o .md igual. */

const SECOES = [
  { id: "contato", titulo: "Sobre você", intro: "Leva uns 10 minutos. Responda do seu jeito, com suas palavras: quanto mais detalhe, melhor o site fica. Suas respostas ficam salvas neste aparelho até você enviar.", campos: [
    { id: "briefing.respondente", rotulo: "Seu nome e sua função no negócio", tipo: "texto", obrig: true, ph: "Ex.: Ana, dona do salão" },
    { id: "contato.whatsapp", rotulo: "Seu WhatsApp para a gente falar com você", tipo: "tel", obrig: true, ph: "(61) 9 0000-0000" },
    { id: "briefing.decisor", rotulo: "Mais alguém participa da decisão sobre o site?", tipo: "texto", ph: "Ex.: decido sozinha / com meu sócio" },
  ]},
  { id: "negocio", titulo: "O negócio", campos: [
    { id: "negocio.nome", rotulo: "Nome do negócio, do jeito que aparece no Google", tipo: "texto", obrig: true, ph: "Ex.: Salão de Beleza Flor de Lis" },
    { id: "negocio.ramo", rotulo: "Qual é o ramo?", tipo: "um", obrig: true, opcoes: ["Salão / barbearia", "Estética", "Restaurante", "Bolos / encomendas", "Pet shop", "Clínica", "Loja", "Prestador de serviço", "Outro"] },
    { id: "negocio.descricao", rotulo: "O que vocês fazem, em poucas palavras? Há quanto tempo existem?", tipo: "area", obrig: true },
    { id: "negocio.diferencial", rotulo: "Por que os clientes escolhem vocês e não o concorrente?", tipo: "area", dica: "Pode escrever como você falaria para um amigo. Muitas vezes essa frase vira o título do site." },
    { id: "negocio.publico", rotulo: "Quem é o seu cliente típico?", tipo: "texto", ph: "Idade, bairro, como chega até vocês" },
    { id: "negocio.concorrentes", rotulo: "Algum concorrente que você admira ou acompanha?", tipo: "texto" },
    { id: "negocio.endereco", rotulo: "Endereço", tipo: "texto", ph: "Deixe em branco se atende só online ou a domicílio" },
    { id: "negocio.whatsapp", rotulo: "WhatsApp do negócio (o que vai aparecer no site)", tipo: "tel", ph: "Se for o mesmo seu, pode repetir" },
    { id: "negocio.instagram", rotulo: "Instagram", tipo: "texto", ph: "@perfil" },
    { id: "negocio.horario", rotulo: "Horário de funcionamento", tipo: "texto", ph: "Seg a sex 9h–19h, sáb 9h–14h" },
  ]},
  { id: "objetivo", titulo: "Objetivo do site", intro: "A parte mais importante: é ela que define o botão principal e a ordem do site.", campos: [
    { id: "objetivo.acao_principal", rotulo: "Quando alguém entrar no site, o que você quer que a pessoa faça?", tipo: "varios", obrig: true, dica: "Pode marcar mais de uma.", opcoes: ["Chamar no WhatsApp", "Agendar sozinha", "Ligar", "Ver preços / cardápio", "Chegar até o local", "Pedir orçamento", "Encomendar", "Comprar online"] },
    { id: "objetivo.hoje", rotulo: "Hoje, como os clientes marcam horário ou fazem pedidos? Quanto tempo isso toma do seu dia?", tipo: "area" },
    { id: "objetivo.sucesso", rotulo: "Como você vai saber que o site deu certo?", tipo: "texto", ph: "Ex.: menos mensagens repetidas, mais clientes novos" },
  ]},
  { id: "escopo", titulo: "O que o site precisa ter", campos: [
    { id: "escopo.lista_precos", rotulo: "Mostrar serviços ou produtos com preço?", tipo: "um", opcoes: ["Sim, com preço", "Sim, mas \"sob consulta\"", "Não mostrar"] },
    { id: "escopo.agendamento", rotulo: "Quer que o cliente agende sozinho pelo site?", tipo: "um", opcoes: ["Sim", "Não", "Talvez"] },
    { id: "escopo.profissionais", rotulo: "Quantas pessoas atendem? Cada uma tem horário próprio?", tipo: "texto" },
    { id: "escopo.painel", rotulo: "Quer uma área para a equipe ver os agendamentos ou pedidos?", tipo: "um", opcoes: ["Sim", "Não", "Não sei"] },
    { id: "escopo.extras", rotulo: "O que mais você gostaria no site?", tipo: "varios", dica: "Marque o que fizer sentido.", opcoes: ["Galeria de fotos", "Página Sobre", "Avaliações do Google", "Cardápio", "Catálogo", "Mais de uma unidade", "Pedido de orçamento", "Encomendas", "Venda online", "Controle de estoque"] },
    { id: "escopo.ramo", rotulo: "Algumas perguntas do seu ramo", tipo: "area", ramo: true },
  ]},
  { id: "identidade", titulo: "Visual", campos: [
    { id: "identidade.logo", rotulo: "Você tem logo?", tipo: "um", opcoes: ["Tenho o arquivo (PNG, PDF…)", "Só no Instagram", "Não tenho"] },
    { id: "identidade.referencias", rotulo: "2 ou 3 sites ou perfis de Instagram que você acha bonitos. O que te agrada em cada um?", tipo: "area", dica: "O \"porquê\" ajuda muito: as cores, as fotos, o jeito simples…" },
    { id: "identidade.evitar", rotulo: "Tem algo que você não quer de jeito nenhum?", tipo: "texto" },
    { id: "identidade.palavras", rotulo: "3 palavras que descrevem o seu negócio", tipo: "texto", ph: "Acolhedor, moderno, sofisticado…" },
    { id: "identidade.cores", rotulo: "Cores que marcam o negócio (fachada, uniforme, embalagem)", tipo: "texto" },
  ]},
  { id: "conteudo", titulo: "Fotos e textos", campos: [
    { id: "conteudo.fotos", rotulo: "Você tem fotos dos seus trabalhos, do espaço ou dos produtos?", tipo: "um", opcoes: ["Tenho boas", "Tenho poucas", "Não tenho"] },
    { id: "conteudo.autorizacao", rotulo: "Os clientes que aparecem nas fotos autorizaram o uso?", tipo: "um", opcoes: ["Sim", "Não", "Preciso verificar", "Não aparecem clientes"] },
    { id: "conteudo.textos", rotulo: "Os textos do site", tipo: "um", opcoes: ["Vocês escrevem e eu aprovo", "Eu mando os textos"] },
  ]},
  { id: "contas", titulo: "Endereço do site e manutenção", campos: [
    { id: "contas.dominio", rotulo: "Endereço próprio (www.seunegocio.com.br)", tipo: "um", opcoes: ["Já tenho", "Quero ter", "Não preciso", "Não sei o que é"] },
    { id: "contas.gmail", rotulo: "Tem um Gmail só do negócio?", tipo: "um", opcoes: ["Tenho", "Não tenho"] },
    { id: "contas.quem_atualiza", rotulo: "Quem vai atualizar preços e informações no dia a dia?", tipo: "texto" },
  ]},
  { id: "prazo", titulo: "Prazo", campos: [
    { id: "prazo.data", rotulo: "Para quando você precisa do site? Tem alguma data importante?", tipo: "texto", ph: "Ex.: antes do Dia das Mães" },
    { id: "prazo.investimento", rotulo: "Já pensou em quanto quer investir? (opcional)", tipo: "texto", dica: "Só para a gente montar uma proposta que caiba para você." },
    { id: "notas.gerais", rotulo: "Quer contar mais alguma coisa?", tipo: "area" },
  ]},
];

const RAMO = {
  "Salão / barbearia": "Cada profissional tem sua própria escala? Tem serviços combinados (ex.: corte + escova)? Qual o prazo para cancelar? Tem recepção?",
  "Estética": "Trabalha com pacotes e sessões? Tem contraindicações que o cliente precisa saber? Usa termo de consentimento?",
  "Restaurante": "O cardápio muda com frequência? Faz delivery (iFood ou próprio)? Aceita reserva de mesa? O horário muda no fim de semana?",
  "Bolos / encomendas": "Tem catálogo ou é tudo personalizado? Qual o prazo mínimo de produção? Quantas encomendas aceita por dia? Cobra sinal? Retirada ou entrega?",
  "Pet shop": "Precisa saber porte e raça do pet? O preço muda pelo porte? Tem leva e traz?",
  "Clínica": "Atende convênios? Usa termo de consentimento? Algum cuidado especial com dados dos pacientes?",
  "Loja": "Quantos produtos, mais ou menos? Têm variações (tamanho, cor)? Como controla o estoque hoje? Entrega, retirada ou correio? Já usa alguma maquininha ou serviço de pagamento? Emite nota fiscal?",
  "Prestador de serviço": "Qual a área que você atende? Trabalha com orçamento? Tem certificações ou registros profissionais?",
};

const vazio = (v) => v == null || v === "" || (Array.isArray(v) && v.length === 0);

/* Gera o .md no mesmo formato do formulário interno (lido pela skill briefing-site). */
function gerarMd(campos, meta) {
  meta = meta || {};
  const val = (id) => {
    const v = campos[id];
    if (vazio(v)) return "PENDENTE";
    return (Array.isArray(v) ? v.join(", ") : String(v)).trim().replace(/\n/g, "\n  ");
  };
  const linhas = [`# Briefing: ${campos["negocio.nome"] || "PENDENTE"}`, ""];
  linhas.push("## Reunião");
  linhas.push(`- Data: ${meta.data || "PENDENTE"} <!-- briefing.data -->`);
  linhas.push(`- Formato: Formulário online (cliente respondeu sozinho) <!-- briefing.formato -->`);
  if (meta.ref) linhas.push(`- Link enviado por: ${meta.ref} <!-- briefing.ref -->`);
  linhas.push("");
  SECOES.forEach((s, i) => {
    linhas.push(`## ${i + 1}. ${s.titulo}`);
    s.campos.forEach((c) => {
      let r = c.rotulo;
      if (c.ramo && RAMO[campos["negocio.ramo"]]) r += ` (${RAMO[campos["negocio.ramo"]]})`;
      linhas.push(`- ${r}: ${val(c.id)} <!-- ${c.id} -->`);
      if (c.id === "negocio.ramo" && campos["negocio.ramo_outro"]) linhas.push(`- Ramo (outro): ${campos["negocio.ramo_outro"]} <!-- negocio.ramo_outro -->`);
    });
    linhas.push("");
  });
  linhas.push("---", "Para o Claude: use a skill briefing-site (modo 2). O cliente respondeu sozinho, então confira o que ficou vago. Monte a análise: nível, estimativa de preço, riscos, o que falta perguntar, ordem das seções no celular e a mensagem de resumo para o cliente.");
  return linhas.join("\n");
}
