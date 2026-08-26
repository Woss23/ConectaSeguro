Conecta Seguro
Guia de Segurança Digital
O Conecta Seguro é um site educativo desenvolvido com HTML5, CSS3 e JavaScript. A nossa ideia foi ajudar pessoas da comunidade a utilizarem a internet com mais segurança e a reconhecerem situações que podem representar algum risco.
O site apresenta informações sobre problemas comuns no ambiente digital, como golpes, mensagens falsas, senhas inseguras e fraudes envolvendo PIX e WhatsApp.


1. Processo de Ideação:
Para começar o projeto, percebemos um problema comum: muitas pessoas usam a internet todos os dias, mas têm dificuldade para identificar golpes e proteger seus dados. Por isso, decidimos criar um site educativo sobre segurança digital, com informações simples, exemplos e ferramentas interativas. O nosso objetivo é ajudar os usuários a aprender mais sobre segurança e desenvolver hábitos para usarem a internet de maneira mais segura.

2. Protótipo Inicial:
Antes de começarmos a programar, desenvolvemos um protótipo para fazermos a estrutura das páginas, a organização das informações e a forma como o usuário iria navegar pelo site.
O protótipo foi desenvolvido utilizando o Figma, no seguinte formato:

Tela inicial
 
Página de golpes
 
Página de senhas
 
Página do quiz
 
3. Caráter Extensionista:
O projeto é extensionista porque usa conhecimentos da faculdade para ajudar a comunidade. O Conecta Seguro foi criado para pessoas que usam a internet e serviços digitais, mas podem ter dificuldade para identificar golpes e proteger seus dados. O site apresenta informações simples para ajudar os usuários a reconhecer golpes, criar senhas seguras, identificar mensagens suspeitas e ter mais cuidado com o PIX e outros serviços digitais.

4. Tutorial do Código:
Nesta parte, são apresentados alguns exemplos utilizados no desenvolvimento do site e uma explicação sobre como cada tecnologia foi utilizada.

4.1 Estrutura HTML:
O HTML é responsável pela estrutura e pelo conteúdo das páginas.
O elemento <header> representa o cabeçalho da página.
Dentro dele, o <nav> reúne os links utilizados para navegar entre as páginas.
O <main> representa o conteúdo principal da página e o <section> permite organizar esse conteúdo em diferentes partes.
Os elementos <a> são utilizados para criar os links de navegação.
 
4.2 Estilização com CSS:
O CSS é responsável pela parte visual do site.
Por exemplo:
button {
    padding: 10px 20px
    border-radius: 8px
    cursor: pointer
}
Nesse exemplo, o padding define o espaço interno do botão.
O border-radius modifica o formato das bordas, deixando-as arredondadas.
Já o cursor: pointer faz com que o cursor do mouse mude quando o usuário passa sobre o botão.

4.3 Interação com JavaScript:
O JavaScript permite adicionar comportamentos ao site de acordo com as ações do usuário.
Por exemplo:
const botao = document.querySelector("#botao")

botao.addEventListener("click", function() {
    alert("Cuidado! Nunca compartilhe sua senha.")
});
Primeiro, o querySelector() é utilizado para localizar o botão dentro do HTML.
Depois, o addEventListener() é utilizado para identificar quando o usuário realiza uma determinada ação.
Nesse exemplo, a ação é o clique no botão.
Quando o botão é pressionado, uma mensagem aparece para o usuário.
Esse tipo de interação deixa o site mais dinâmico e permite que o conteúdo responda às ações feitas pelo usuário.


5. Aprendizados:
O desenvolvimento do Conecta Seguro permitiu nos colocar em prática os conhecimentos aprendidos na disciplina, como HTML5, CSS3, Flexbox, JavaScript, layouts responsivos, organização de arquivos e uso do Git e GitHub. Além da parte técnica, o projeto mostrou a importância de pensar no usuário, criando um site simples, organizado e fácil de usar.

6. Conclusão:
O desenvolvimento do Conecta Seguro permitiu unir os conhecimentos de HTML5, CSS3 e JavaScript com uma proposta voltada para a comunidade.
Durante o projeto, foi possível perceber que desenvolver um site envolve mais do que escrever o código. Antes de começar a programação, foi necessário pensar bastante, como identificar um problema, pensar no público que vai utilizar o site, definir uma solução, criar um protótipo e planejar a organização das páginas.
O projeto também mostrou como a tecnologia pode ser utilizada para compartilhar informações e ajudar as pessoas em situações que fazem parte do seu dia a dia.
Com o Conecta Seguro, nós buscamos criar uma ferramenta simples e interativa que ajude os usuários a entender melhor os riscos presente que tem no ambiente digital e começar a ter cuidados básicos para usar a internet de forma mais segura.

7. Integrantes:
Nome	RA
Rafael Henrique Woss	[10771377]
Paulo Neto	[10780379]
Pedro Morais da Silva	[10771425]

Projeto Acadêmico
Disciplina: Web Mobile
Curso: Sistemas de Informação
Instituição: Universidade Presbiteriana Mackenzie
Projeto: Lagarta - Projeto Extensionista
Ano: 2026
