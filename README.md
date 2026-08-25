Conecta Seguro
Guia de Segurança Digital
O Conecta Seguro é um site educativo desenvolvido com HTML5, CSS3 e JavaScript. A ideia é ajudar pessoas da comunidade a utilizarem a internet com mais segurança e a reconhecerem situações que podem representar algum risco.
O site apresenta informações sobre problemas comuns no ambiente digital, como golpes, mensagens falsas, senhas inseguras e fraudes envolvendo PIX e WhatsApp.
O projeto foi desenvolvido como parte de uma atividade de caráter extensionista, utilizando os conhecimentos adquiridos durante a disciplina para criar uma solução que possa ser útil para a comunidade.

1. Processo de Ideação
Para começar o projeto, procuramos identificar um problema relacionado ao uso da tecnologia que pudesse afetar diferentes pessoas da comunidade.
Atualmente, muitas atividades do dia a dia são realizadas pela internet. Bancos, aplicativos de mensagens, redes sociais e serviços de pagamento digital fazem parte da rotina de muitas pessoas. Ao mesmo tempo, também é comum encontrar pessoas que têm dificuldade para identificar golpes ou não sabem quais cuidados devem tomar para proteger seus dados.
A partir dessa situação, decidimos desenvolver um site que reunisse informações sobre segurança digital de uma maneira simples e fácil de entender.
Além de apresentar informações, pensamos em tornar o site mais interativo. Por isso, foram incluídas funcionalidades que permitem ao usuário testar seus conhecimentos e verificar a segurança de uma senha.
Problema identificado
Muitas pessoas utilizam serviços digitais diariamente, mas nem sempre possuem conhecimento suficiente para identificar tentativas de golpe ou proteger suas informações.
Solução proposta
A proposta foi criar um site educativo com informações, exemplos e ferramentas interativas que ajudem o usuário a desenvolver hábitos mais seguros ao utilizar a internet.

2. Protótipo Inicial
Antes de começar a programação, desenvolvemos um protótipo para definir a estrutura das páginas, a organização das informações e a forma como o usuário iria navegar pelo site.
O protótipo foi desenvolvido utilizando o Figma.
Tela inicial
 
Página de golpes
 
Página de senhas
 
Página do quiz
 
As imagens acima representam o protótipo inicial do projeto. Elas devem ser substituídas pelos prints das telas desenvolvidas no Figma.

3. Caráter Extensionista
O projeto possui caráter extensionista porque utiliza conhecimentos adquiridos na faculdade para desenvolver uma solução voltada para uma necessidade que existe na comunidade.
O Conecta Seguro foi pensado principalmente para pessoas que utilizam a internet e serviços digitais, mas que podem ter dificuldade para identificar riscos relacionados à segurança digital.
O conteúdo foi organizado de forma simples para que possa ser entendido por pessoas com diferentes níveis de conhecimento em tecnologia.
Dessa maneira, o projeto procura levar para fora da sala de aula um conhecimento que pode ajudar os usuários a terem mais cuidado com seus dados e com suas atividades na internet.
Público-alvo
O site pode ser utilizado por:
•	Pessoas com pouca experiência em tecnologia;
•	Jovens que utilizam serviços digitais;
•	Pessoas que utilizam PIX e aplicativos bancários;
•	Usuários de WhatsApp e redes sociais;
•	Pessoas interessadas em aprender mais sobre segurança digital.
Impacto esperado
Com o projeto, esperamos ajudar os usuários a:
•	Reconhecer diferentes tipos de golpes digitais;
•	Criar e utilizar senhas mais seguras;
•	Identificar mensagens suspeitas;
•	Ter mais cuidado ao utilizar o PIX;
•	Desenvolver hábitos mais seguros na internet.

4. Tecnologias Utilizadas
O projeto foi desenvolvido utilizando HTML5, CSS3 e JavaScript.
HTML5
O HTML5 foi utilizado para criar a estrutura das páginas e organizar o conteúdo do site.
Entre os elementos utilizados estão:
<header>
<nav>
<main>
<section>
<article>
<footer>
<form>
<button>
Também foram utilizados elementos semânticos para deixar a estrutura do código mais organizada e facilitar a compreensão do conteúdo.
CSS3
O CSS3 foi utilizado para definir a aparência do site.
Com ele foram configurados:
•	Cores;
•	Tipografia;
•	Espaçamentos;
•	Botões;
•	Cards;
•	Organização do layout;
•	Responsividade;
•	Efeitos visuais.
Também foi utilizado Flexbox para organizar os elementos das páginas.
JavaScript
O JavaScript foi utilizado para adicionar as interações do site e fazer com que alguns elementos respondam às ações realizadas pelo usuário.
Entre as funcionalidades desenvolvidas estão:
•	Quiz de segurança digital;
•	Verificação da força de uma senha;
•	Alteração de elementos da página;
•	Validação de informações inseridas pelo usuário.

5. Funcionalidades
Quiz de Segurança Digital
Uma das funcionalidades do site é o quiz sobre segurança digital.
O usuário responde perguntas relacionadas a situações que podem acontecer no dia a dia. Depois de escolher uma alternativa, o JavaScript verifica se a resposta está correta e atualiza a pontuação.
Um exemplo simples dessa lógica é:
if (resposta === correta) {
    pontuacao++;
}
Nesse caso, a variável pontuacao é utilizada para armazenar a quantidade de respostas corretas.
Ao terminar o quiz, o usuário pode visualizar sua pontuação.
Verificador de Senhas
Outra funcionalidade é o verificador de segurança de senhas.
O usuário informa uma senha e o JavaScript verifica algumas características, como:
•	Quantidade de caracteres;
•	Letras maiúsculas;
•	Letras minúsculas;
•	Números;
•	Caracteres especiais.
Com base nessas características, o sistema apresenta uma classificação para indicar se a senha é fraca, média ou forte.
Essa ferramenta permite que o usuário entenda, na prática, quais características podem contribuir para uma senha mais segura.

6. Estrutura do Projeto
Os arquivos do projeto foram organizados da seguinte maneira:
conecta-seguro/
|
|-- index.html
|
|-- pages/
|   |-- golpes.html
|   |-- senhas.html
|   |-- quiz.html
|   |-- ajuda.html
|
|-- css/
|   |-- style.css
|
|-- js/
|   |-- quiz.js
|   |-- senha.js
|
|-- images/
|   |-- logo.png
|   |-- prototipo-inicio.png
|   |-- prototipo-golpes.png
|   |-- prototipo-senhas.png
|   |-- prototipo-quiz.png
|
|-- README.md
A organização dos arquivos pode sofrer alterações durante o desenvolvimento, dependendo da estrutura final do projeto.

7. Tutorial do Código
Nesta parte, são apresentados alguns exemplos utilizados no desenvolvimento do site e uma explicação sobre como cada tecnologia foi utilizada.
7.1 Estrutura HTML
O HTML é responsável pela estrutura e pelo conteúdo das páginas.
Um exemplo de estrutura utilizada no projeto é:
<header>
    <nav>
        <a href="index.html">Início</a>
        <a href="golpes.html">Golpes</a>
        <a href="senhas.html">Senhas</a>
        <a href="quiz.html">Quiz</a>
    </nav>
</header>

<main>
    <section>
        <h1>Conecta Seguro</h1>
        <p>Aprenda a se proteger no mundo digital.</p>
    </section>
</main>
O elemento <header> representa o cabeçalho da página.
Dentro dele, o <nav> reúne os links utilizados para navegar entre as páginas.
O <main> representa o conteúdo principal da página e o <section> permite organizar esse conteúdo em diferentes partes.
Os elementos <a> são utilizados para criar os links de navegação.
7.2 Estilização com CSS
O CSS é responsável pela parte visual do site.
Por exemplo:
button {
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
}
Nesse exemplo, o padding define o espaço interno do botão.
O border-radius modifica o formato das bordas, deixando-as arredondadas.
Já o cursor: pointer faz com que o cursor do mouse mude quando o usuário passa sobre o botão.
7.3 Interação com JavaScript
O JavaScript permite adicionar comportamentos ao site de acordo com as ações do usuário.
Por exemplo:
const botao = document.querySelector("#botao");

botao.addEventListener("click", function() {
    alert("Cuidado! Nunca compartilhe sua senha.");
});
Primeiro, o querySelector() é utilizado para localizar o botão dentro do HTML.
Depois, o addEventListener() é utilizado para identificar quando o usuário realiza uma determinada ação.
Nesse exemplo, a ação é o clique no botão.
Quando o botão é pressionado, uma mensagem é apresentada ao usuário.
Esse tipo de interação deixa o site mais dinâmico e permite que o conteúdo responda às ações realizadas pelo usuário.

8. Responsividade
O site também foi desenvolvido pensando em diferentes tamanhos de tela.
Foram utilizadas Media Queries do CSS para adaptar o conteúdo a computadores, tablets e celulares.
Um exemplo é:
@media (max-width: 768px) {
    .menu {
        flex-direction: column;
    }
}
Nesse caso, quando a largura da tela é menor que 768 pixels, os elementos do menu passam a ser organizados verticalmente.
Essa adaptação permite que o conteúdo continue sendo utilizado em dispositivos com telas menores.

9. Testes
Durante o desenvolvimento, foram realizados testes para verificar o funcionamento das principais partes do site.
Foram testados:
•	Links de navegação;
•	Botões;
•	Quiz;
•	Verificador de senhas;
•	Responsividade;
•	Formatação das páginas;
•	Interações desenvolvidas em JavaScript.
Os problemas encontrados durante o desenvolvimento foram corrigidos para melhorar o funcionamento do site.

10. Aprendizados
O desenvolvimento do Conecta Seguro permitiu colocar em prática os conhecimentos estudados durante a disciplina.
Entre os principais aprendizados estão:
•	Criação de páginas utilizando HTML5;
•	Utilização de elementos semânticos;
•	Estilização de páginas com CSS3;
•	Utilização de Flexbox;
•	Criação de layouts responsivos;
•	Utilização de JavaScript para criar interações;
•	Manipulação de elementos do HTML;
•	Criação de eventos;
•	Organização de arquivos em um projeto web;
•	Utilização do Git e GitHub.
Além da parte técnica, o projeto também mostrou a importância de pensar no usuário antes e durante o desenvolvimento de uma aplicação.
Foi necessário considerar o público que utilizará o site, a forma como as informações seriam apresentadas e quais recursos poderiam tornar a experiência mais simples.

11. Conclusão
O desenvolvimento do Conecta Seguro permitiu unir os conhecimentos de HTML5, CSS3 e JavaScript com uma proposta voltada para a comunidade.
Durante o projeto, foi possível perceber que desenvolver um site envolve mais do que escrever o código. Antes de começar a programação, foi necessário identificar um problema, pensar no público-alvo, definir uma solução, criar um protótipo e planejar a organização das páginas.
O projeto também mostrou como a tecnologia pode ser utilizada para compartilhar informações e ajudar as pessoas em situações que fazem parte do seu cotidiano.
Com o Conecta Seguro, buscamos criar uma ferramenta simples e interativa que ajude os usuários a entender melhor os riscos presentes no ambiente digital e a adotar cuidados básicos para utilizar a internet de forma mais segura.

12. Integrantes
Nome	RA
Rafael Henrique Woss	[10771377]
Paulo Neto	[10780379]
[Pedro Moraes]	[10771425]

Projeto Acadêmico
Disciplina: Web Mobile
Curso: Sistemas de Informação
Instituição: Universidade Presbiteriana Mackenzie
Projeto: Lagarta - Projeto Extensionista
Ano: 2026
