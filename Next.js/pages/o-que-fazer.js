// Andre Elias Lemos Caputo - RA 10414551
// Paulo Cezar - RA 10780379
// Pedro Morais da Silva - RA 10771425
// Rafael Henrique Woss - RA 10771377

import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/OQueFazer.module.css";

export default function OQueFazer() {
  return (
    <Layout titulo="ConectaSeguro - O que fazer">
      <main className={styles.conteudoDaPagina}>
        <div className={styles.faixaComentario} role="alert">
          <p>Orientações de Emergência</p>
        </div>

        <section>
          <h1 className={styles.tituloPrimario}>
            O que fazer se você foi enganado?
          </h1>
          <p className={styles.textoPrimario}>
            Não entre em pânico. Siga estes passos com calma — agir rápido faz
            toda a diferença.
          </p>
          <div className={styles.chamadaUrgente}>
            <h3 className={styles.tituloChamada}>Velocidade é essencial!</h3>
            <p className={styles.textoChamada}>
              Quanto mais rápido você agir, maiores são as chances de minimizar
              os danos e recuperar seu dinheiro. Comece pelo passo 1
              imediatamente.
            </p>
          </div>
        </section>

        <section className={styles.todoConteudo}>
          <section className={styles.colunaPrincipal}>
            <h2 className={styles.tituloSecundario}>
              Qual situação aconteceu com você?
            </h2>

            <article className={styles.cartaoCenario}>
              <button type="button" className={styles.headerCartao}>
                <span className={styles.tituloCartao}>
                  Passei dados bancários para desconhecidos
                </span>
              </button>
              <ol>
                <li className={styles.conteudoCartao}>
                  <div className={styles.numeroPassoVermelho}>1</div>
                  <div className={styles.textoPasso}>
                    <h4 className={styles.tituloPasso}>
                      Ligue imediatamente para seu banco <span className={styles.etiquetaUrgente}>URGENTE</span>
                    </h4>
                    <p className={styles.descricaoPasso}>
                      Use o número no verso do cartão ou o app oficial. Avise sobre a situação e peça para bloquearem sua conta e cartões.
                    </p>
                  </div>
                </li>
                <li className={styles.conteudoCartao}>
                  <div className={styles.numeroPassoVermelho}>2</div>
                  <div className={styles.textoPasso}>
                    <h4 className={styles.tituloPasso}>
                      Troque sua senha imediatamente <span className={styles.etiquetaUrgente}>URGENTE</span>
                    </h4>
                    <p className={styles.descricaoPasso}>
                      Acesse pelo app oficial e mude todas as senhas: internet banking, cartão e acesso ao app.
                    </p>
                  </div>
                </li>
                <li className={styles.conteudoCartao}>
                  <div className={styles.numeroPassoAzul}>3</div>
                  <div className={styles.textoPasso}>
                    <h4 className={styles.tituloPasso}>
                      Registre um Boletim de Ocorrência
                    </h4>
                    <p className={styles.descricaoPasso}>
                      Acesse a delegacia virtual do seu estado ou vá a uma delegacia. O B.O. é fundamental para recuperação de valores.
                    </p>
                  </div>
                </li>
                <li className={styles.conteudoCartao}>
                  <div className={styles.numeroPassoAzul}>4</div>
                  <div className={styles.textoPasso}>
                    <h4 className={styles.tituloPasso}>
                      Monitore suas transações
                    </h4>
                    <p className={styles.descricaoPasso}>
                      Fique de olho no extrato por alguns dias e conteste imediatamente qualquer cobrança desconhecida.
                    </p>
                  </div>
                </li>
              </ol>
            </article>

            <article className={styles.cartaoCenario}>
              <button type="button" className={styles.headerCartao}>
                <span className={styles.tituloCartao}>
                  Minha conta do WhatsApp foi clonada
                </span>
              </button>
              <ol>
                <li className={styles.conteudoCartao}>
                  <div className={styles.numeroPassoVermelho}>1</div>
                  <div className={styles.textoPasso}>
                    <h4 className={styles.tituloPasso}>
                      Avise seus contatos imediatamente <span className={styles.etiquetaUrgente}>URGENTE</span>
                    </h4>
                    <p className={styles.descricaoPasso}>
                      Se possível por outro app, avise família e amigos que sua conta foi clonada e para não enviarem dinheiro.
                    </p>
                  </div>
                </li>
                <li className={styles.conteudoCartao}>
                  <div className={styles.numeroPassoVermelho}>2</div>
                  <div className={styles.textoPasso}>
                    <h4 className={styles.tituloPasso}>
                      Tente recuperar sua conta <span className={styles.etiquetaUrgente}>URGENTE</span>
                    </h4>
                    <p className={styles.descricaoPasso}>
                      Instale o WhatsApp com seu número. O app enviará um código SMS. Isso desconecta o invasor automaticamente.
                    </p>
                  </div>
                </li>
                <li className={styles.conteudoCartao}>
                  <div className={styles.numeroPassoAzul}>3</div>
                  <div className={styles.textoPasso}>
                    <h4 className={styles.tituloPasso}>
                      Ative a verificação em duas etapas
                    </h4>
                    <p className={styles.descricaoPasso}>
                      Em Configurações → Conta → Verificação em duas etapas. Crie um PIN de 6 dígitos que só você conhece.
                    </p>
                  </div>
                </li>
                <li className={styles.conteudoCartao}>
                  <div className={styles.numeroPassoAzul}>4</div>
                  <div className={styles.textoPasso}>
                    <h4 className={styles.tituloPasso}>
                      Registre um Boletim de Ocorrência
                    </h4>
                    <p className={styles.descricaoPasso}>
                      Acesse a delegacia virtual ou vá a uma delegacia presencialmente com os prints das conversas fraudulentas.
                    </p>
                  </div>
                </li>
              </ol>
            </article>

            <article className={styles.cartaoCenario}>
              <button type="button" className={styles.headerCartao}>
                <span className={styles.tituloCartao}>
                  Fiz um PIX para um golpista
                </span>
              </button>
              <ol>
                <li className={styles.conteudoCartao}>
                  <div className={styles.numeroPassoVermelho}>1</div>
                  <div className={styles.textoPasso}>
                    <h4 className={styles.tituloPasso}>
                      Ligue para seu banco imediatamente <span className={styles.etiquetaUrgente}>URGENTE</span>
                    </h4>
                    <p className={styles.descricaoPasso}>
                      Relate a situação e peça o cancelamento ou devolução. Quanto mais rápido, maiores as chances de recuperar.
                    </p>
                  </div>
                </li>
                <li className={styles.conteudoCartao}>
                  <div className={styles.numeroPassoVermelho}>2</div>
                  <div className={styles.textoPasso}>
                    <h4 className={styles.tituloPasso}>
                      Solicite o &apos;MED&apos; (Mecanismo Especial de Devolução) <span className={styles.etiquetaUrgente}>URGENTE</span>
                    </h4>
                    <p className={styles.descricaoPasso}>
                      O Banco Central criou esse mecanismo para fraudes PIX. Seu banco pode acionar para tentar reaver o valor.
                    </p>
                  </div>
                </li>
                <li className={styles.conteudoCartao}>
                  <div className={styles.numeroPassoAzul}>3</div>
                  <div className={styles.textoPasso}>
                    <h4 className={styles.tituloPasso}>
                      Registre um Boletim de Ocorrência
                    </h4>
                    <p className={styles.descricaoPasso}>
                      Na delegacia virtual ou presencial. Guarde o comprovante de PIX, prints e qualquer dado do golpista.
                    </p>
                  </div>
                </li>
                <li className={styles.conteudoCartao}>
                  <div className={styles.numeroPassoAzul}>4</div>
                  <div className={styles.textoPasso}>
                    <h4 className={styles.tituloPasso}>
                      Denuncie ao Banco Central
                    </h4>
                    <p className={styles.descricaoPasso}>
                      Acesse registrato.bcb.gov.br para reportar golpes de PIX. Isso ajuda a investigação e futuras vítimas.
                    </p>
                  </div>
                </li>
              </ol>
            </article>

            <article className={styles.cartaoCenario}>
              <button type="button" className={styles.headerCartao}>
                <span className={styles.tituloCartao}>
                  Cliquei num link suspeito
                </span>
              </button>
              <ol>
                <li className={styles.conteudoCartao}>
                  <div className={styles.numeroPassoVermelho}>1</div>
                  <div className={styles.textoPasso}>
                    <h4 className={styles.tituloPasso}>
                      Não digite mais nenhum dado <span className={styles.etiquetaUrgente}>URGENTE</span>
                    </h4>
                    <p className={styles.descricaoPasso}>
                      Feche imediatamente o site ou aplicativo. Não preencha nenhum formulário, mesmo que pareça legítimo.
                    </p>
                  </div>
                </li>
                <li className={styles.conteudoCartao}>
                  <div className={styles.numeroPassoVermelho}>2</div>
                  <div className={styles.textoPasso}>
                    <h4 className={styles.tituloPasso}>
                      Troque as senhas das contas importantes <span className={styles.etiquetaUrgente}>URGENTE</span>
                    </h4>
                    <p className={styles.descricaoPasso}>
                      Priorize: banco, e-mail, WhatsApp e redes sociais. Use senhas diferentes para cada serviço.
                    </p>
                  </div>
                </li>
                <li className={styles.conteudoCartao}>
                  <div className={styles.numeroPassoAzul}>3</div>
                  <div className={styles.textoPasso}>
                    <h4 className={styles.tituloPasso}>
                      Verifique se há aplicativos suspeitos instalados
                    </h4>
                    <p className={styles.descricaoPasso}>
                      Em configurações do celular, veja os apps instalados recentemente. Desinstale qualquer coisa estranha.
                    </p>
                  </div>
                </li>
                <li className={styles.conteudoCartao}>
                  <div className={styles.numeroPassoAzul}>4</div>
                  <div className={styles.textoPasso}>
                    <h4 className={styles.tituloPasso}>
                      Ative o antivírus
                    </h4>
                    <p className={styles.descricaoPasso}>
                      Instale um antivírus confiável (Avast ou AVG são gratuitos) e faça uma varredura completa.
                    </p>
                  </div>
                </li>
              </ol>
            </article>
          </section>

          <aside className={styles.colunaSecundaria}>
            <h2 className={styles.tituloSecundario}>Contatos importantes</h2>

            <article className={styles.cartaoContato}>
              <h4 className={styles.nomeContato}>Emergências</h4>
              <p className={styles.subtituloContato}>Polícia Militar</p>
              <p className={styles.textoContato}>190</p>
            </article>

            <article className={styles.cartaoContato}>
              <h4 className={styles.nomeContato}>Delegacia Virtual SP</h4>
              <p className={styles.subtituloContato}>B.O. online (São Paulo)</p>
              <p className={styles.textoContato}>delegaciavirtual.ssp.sp.gov.br</p>
            </article>

            <article className={styles.cartaoContato}>
              <h4 className={styles.nomeContato}>Banco Central</h4>
              <p className={styles.subtituloContato}>Denúncias e reclamações</p>
              <p className={styles.textoContato}>0800 979 2345</p>
            </article>

            <article className={styles.cartaoContato}>
              <h4 className={styles.nomeContato}>SaferNet Brasil</h4>
              <p className={styles.subtituloContato}>Denúncia de crimes online</p>
              <p className={styles.textoContato}>safernet.org.br</p>
            </article>

            <article className={styles.campoPreto}>
              <h2 className={styles.tituloCampoPreto}>Não se culpe</h2>
              <p className={styles.textoCampoPreto}>
                Golpistas são profissionais. Qualquer pessoa pode ser vítima. O
                importante é agir rápido e aprender para se proteger no futuro.
              </p>
            </article>
          </aside>

          <article className={styles.bigBox}>
            <h2 className={styles.tituloLink}>Aprenda a evitar no futuro</h2>
            <p className={styles.textoLink}>
              Conheça os golpes mais comuns e saiba como identificá-los antes de
              cair.
            </p>
            <Link href="/golpes" className={styles.botaoLink}>
              Ver golpes comuns →
            </Link>
          </article>
        </section>
      </main>
    </Layout>
  );
}