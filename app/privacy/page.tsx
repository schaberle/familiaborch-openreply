import type { Metadata } from "next";
import LegalShell from "@/components/legal-shell";
import { BRAND } from "@/lib/i18n/pt";

export const metadata: Metadata = {
  title: `Privacidade — ${BRAND}`,
  description: `Como o ${BRAND} trata dados da conta, Instagram e campanhas.`,
};

export default function PrivacyPage() {
  return (
    <LegalShell
      title="Política de privacidade"
      description={`${BRAND} envia respostas privadas no Instagram quando alguém comenta uma palavra-chave num post ou reel ligado a esta conta.`}
      updatedAt="15 de setembro de 2026"
    >
      <section>
        <h2 className="text-xl font-bold text-white">Dados que coletamos</h2>
        <p className="mt-3">
          E-mail para login, dados do espaço de trabalho, identificadores da
          conta Instagram, tokens criptografados, configurações de campanha,
          conteúdo de webhooks e comentários necessários para responder, logs de
          envio e diagnósticos de operação.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">Uso</h2>
        <p className="mt-3">
          Autenticar quem entra, conectar o Instagram, reconhecer palavras-chave,
          enviar DMs pela API oficial da Meta, evitar envio duplicado e corrigir
          falhas.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">Instagram e Meta</h2>
        <p className="mt-3">
          Não pedimos senha do Instagram, não fazemos scraping e não usamos
          automação de navegador. Os tokens ficam criptografados e só servem para
          as ações autorizadas pela conta profissional conectada.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">Fornecedores</h2>
        <p className="mt-3">
          A instalação usa hospedagem, banco Postgres, fila Redis e e-mail
          (Resend) só para operar o serviço.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">Exclusão</h2>
        <p className="mt-3">
          Em Configurações dá para desconectar o Instagram. Isso apaga o token e
          para as campanhas. Pedidos de exclusão de conta estão na página de
          exclusão de dados.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">Contato</h2>
        <p className="mt-3">
          Dúvidas de privacidade: use o e-mail com o qual você entra neste
          painel.
        </p>
      </section>
    </LegalShell>
  );
}
