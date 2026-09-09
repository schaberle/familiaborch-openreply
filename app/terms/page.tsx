import type { Metadata } from "next";
import LegalShell from "@/components/legal-shell";
import { BRAND } from "@/lib/i18n/pt";

export const metadata: Metadata = {
  title: `Termos — ${BRAND}`,
  description: `Termos de uso do painel ${BRAND} para respostas automáticas no Instagram.`,
};

export default function TermsPage() {
  return (
    <LegalShell
      title="Termos de uso"
      description={`Estes termos valem para o uso do painel ${BRAND} de comentário para DM no Instagram.`}
      updatedAt="15 de setembro de 2026"
    >
      <section>
        <h2 className="text-xl font-bold text-white">Uso autorizado</h2>
        <p className="mt-3">
          Use só com contas profissionais do Instagram que você administra. Você
          é responsável pelas campanhas, palavras-chave, links e mensagens.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">Regras da Meta</h2>
        <p className="mt-3">
          É preciso seguir os termos da Meta, do Instagram e as leis de
          mensagens e privacidade. Campanhas que gerem risco de abuso ou spam
          podem ser pausadas.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white">Disponibilidade</h2>
        <p className="mt-3">
          O serviço depende da Meta, do e-mail, da hospedagem, do banco e da
          fila. Trabalhamos para manter no ar, mas não há garantia de
          disponibilidade ininterrupta.
        </p>
      </section>
    </LegalShell>
  );
}
