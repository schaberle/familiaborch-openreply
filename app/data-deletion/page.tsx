import type { Metadata } from "next";
import LegalShell from "@/components/legal-shell";
import { BRAND } from "@/lib/i18n/pt";

export const metadata: Metadata = {
  title: `Exclusão de dados — ${BRAND}`,
  description: `Como desconectar o Instagram e pedir a exclusão dos dados no ${BRAND}.`,
};

export default function DataDeletionPage() {
  return (
    <LegalShell
      title="Exclusão de dados"
      description="Use esta página para pedidos de exclusão da conta, do Instagram e das campanhas."
      updatedAt="15 de setembro de 2026"
    >
      <section>
        <h2 className="text-xl font-bold text-white">Desconectar Instagram</h2>
        <p className="mt-3">
          Entre, abra Configurações e escolha Desconectar. Isso remove o token e
          para o envio de DMs dessa conta.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">Apagar dados do espaço</h2>
        <p className="mt-3">
          Para apagar campanhas, logs e webhooks, escreva do mesmo e-mail usado
          no login. Informe o nome do espaço e o @ do Instagram conectado.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">Verificação</h2>
        <p className="mt-3">
          Podemos pedir confirmação do e-mail ou da conta antes de apagar.
          Pedidos são atendidos o mais rápido possível, salvo retenção exigida
          por lei ou segurança.
        </p>
      </section>
    </LegalShell>
  );
}
