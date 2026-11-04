// Andre Elias Lemos Caputo - RA 10414551
// Paulo Cezar - RA 10780379
// Pedro Morais da Silva - RA 10771425
// Rafael Henrique Woss - RA 10771377

export const cenarios = [
  {
    titulo: "Passei dados bancários para desconhecidos",
    passos: [
      {
        titulo: "Ligue imediatamente para seu banco",
        descricao:
          "Use o número no verso do cartão ou o app oficial. Avise sobre a situação e peça para bloquearem sua conta e cartões.",
        urgente: true,
      },
      {
        titulo: "Troque sua senha imediatamente",
        descricao:
          "Acesse pelo app oficial e mude todas as senhas: internet banking, cartão e acesso ao app.",
        urgente: true,
      },
      {
        titulo: "Registre um Boletim de Ocorrência",
        descricao:
          "Acesse a delegacia virtual do seu estado ou vá a uma delegacia. O B.O. é fundamental para recuperação de valores.",
        urgente: false,
      },
      {
        titulo: "Monitore suas transações",
        descricao:
          "Fique de olho no extrato por alguns dias e conteste imediatamente qualquer cobrança desconhecida.",
        urgente: false,
      },
    ],
  },
  {
    titulo: "Minha conta do WhatsApp foi clonada",
    passos: [
      {
        titulo: "Avise seus contatos imediatamente",
        descricao:
          "Se possível por outro app, avise família e amigos que sua conta foi clonada e para não enviarem dinheiro.",
        urgente: true,
      },
      {
        titulo: "Tente recuperar sua conta",
        descricao:
          "Instale o WhatsApp com seu número. O app enviará um código SMS. Isso desconecta o invasor automaticamente.",
        urgente: true,
      },
      {
        titulo: "Ative a verificação em duas etapas",
        descricao:
          "Em Configurações → Conta → Verificação em duas etapas. Crie um PIN de 6 dígitos que só você conhece.",
        urgente: false,
      },
      {
        titulo: "Registre um Boletim de Ocorrência",
        descricao:
          "Acesse a delegacia virtual ou vá a uma delegacia presencialmente com os prints das conversas fraudulentas.",
        urgente: false,
      },
    ],
  },
  {
    titulo: "Fiz um PIX para um golpista",
    passos: [
      {
        titulo: "Ligue para seu banco imediatamente",
        descricao:
          "Relate a situação e peça o cancelamento ou devolução. Quanto mais rápido, maiores as chances de recuperar.",
        urgente: true,
      },
      {
        titulo: "Solicite o 'MED' (Mecanismo Especial de Devolução)",
        descricao:
          "O Banco Central criou esse mecanismo para fraudes PIX. Seu banco pode acionar para tentar reaver o valor.",
        urgente: true,
      },
      {
        titulo: "Registre um Boletim de Ocorrência",
        descricao:
          "Na delegacia virtual ou presencial. Guarde o comprovante de PIX, prints e qualquer dado do golpista.",
        urgente: false,
      },
      {
        titulo: "Denuncie ao Banco Central",
        descricao:
          "Acesse registrato.bcb.gov.br para reportar golpes de PIX. Isso ajuda a investigação e futuras vítimas.",
        urgente: false,
      },
    ],
  },
  {
    titulo: "Cliquei num link suspeito",
    passos: [
      {
        titulo: "Não digite mais nenhum dado",
        descricao:
          "Feche imediatamente o site ou aplicativo. Não preencha nenhum formulário, mesmo que pareça legítimo.",
        urgente: true,
      },
      {
        titulo: "Troque as senhas das contas importantes",
        descricao:
          "Priorize: banco, e-mail, WhatsApp e redes sociais. Use senhas diferentes para cada serviço.",
        urgente: true,
      },
      {
        titulo: "Verifique se há aplicativos suspeitos instalados",
        descricao:
          "Em configurações do celular, veja os apps instalados recentemente. Desinstale qualquer coisa estranha.",
        urgente: false,
      },
      {
        titulo: "Ative o antivírus",
        descricao:
          "Instale um antivírus confiável (Avast ou AVG são gratuitos) e faça uma varredura completa.",
        urgente: false,
      },
    ],
  },
];
