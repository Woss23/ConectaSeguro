// Andre Elias Lemos Caputo - RA 10414551
// Paulo Cezar - RA 10780379
// Pedro Morais da Silva - RA 10771425
// Rafael Henrique Woss - RA 10771377

export const golpes = [
  {
    id: "phishing",
    rotulo: "Golpe comum",
    titulo: "Phishing, link falso",
    descricao:
      "Mensagens falsas que parecem ser de bancos, lojas ou governo. O objetivo é fazer você clicar num link e digitar seus dados",
    exemplo:
      '" BANCO DIGITAL: Sua conta foi BLOQUEADA por segurança. Clique agora para reativar: bit.ly/banco-reativa"',
  },
  {
    id: "golpe-do-pix",
    rotulo: "Golpe comum",
    titulo: "Golpe do Pix",
    descricao:
      "Criminosos criam situações de urgência para fazer você transferir dinheiro via PIX. Uma vez enviado, o dinheiro é muito difícil de recuperar.",
    exemplo:
      '"Oi mãe, troquei de número. Estou com uma emergência urgente e preciso de R$800 agora. Me manda PIX! Te explico depois."',
  },
  {
    id: "clonagem-de-whatsapp",
    titulo: "Clonagem de WhatsApp",
    descricao:
      "O criminoso assume sua conta do WhatsApp e usa para pedir dinheiro aos seus contatos fingindo ser você.",
    exemplo:
      "\"Você recebe: 'Olá, sou da operadora. Para confirmar seu cadastro, nos informe o código que você recebeu por SMS.' — Esse código é o de verificação do WhatsApp!\"",
  },
  {
    id: "falsos-premios",
    titulo: "Falsos prêmios e concursos",
    descricao:
      'Mensagens dizendo que você ganhou prêmios, mas para receber é preciso pagar uma "taxa" ou fornecer dados pessoais.',
    exemplo:
      '" PARABÉNS! Você foi sorteado e ganhou um iPhone 15! Para liberar o prêmio, pague a taxa de R$49,90 de seguro no link abaixo."',
  },
  {
    id: "falsa-oferta-de-emprego",
    titulo: "Falsa Oferta de Emprego",
    descricao:
      "Vagas de emprego falsas que pedem documentos pessoais ou solicitam pagamento de taxas de cadastro.",
    exemplo:
      'VAGA URGENTE — Trabalhe em casa e ganhe R$3.000/mês sem experiência. Envie CPF, RG e foto do documento para confirmar seu cadastro."',
  },
  {
    id: "falso-suporte-tecnico",
    titulo: "Falso Suporte Técnico",
    descricao:
      "Criminosos ligam fingindo ser da Microsoft, antivírus ou operadora dizendo que seu computador está com vírus.",
    exemplo:
      "\"Ligação: 'Aqui é do suporte da Microsoft. Detectamos um vírus grave no seu computador. Precisamos de acesso remoto agora para resolver\"",
  },
];
