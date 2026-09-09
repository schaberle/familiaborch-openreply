export const BRAND = "Família Bosch";

export const pt = {
  brand: BRAND,
  tagline:
    "Quando alguém comenta uma palavra-chave no Instagram, o sistema responde em privado com o recado e o link que você definiu.",
  enter: "Entrar",
  signIn: "Entrar",
  signOut: "Sair",
  email: "E-mail",
  emailPlaceholder: "seu@email.com",
  sendMagicLink: "Enviar link de acesso",
  checkEmailTitle: "Confira seu e-mail",
  checkEmailBody:
    "Enviamos um link de acesso. Abra no mesmo aparelho para continuar.",
  backToSignIn: "Voltar ao login",
  loginSubtitle:
    "Entre com o e-mail. Depois conecte a conta profissional do Instagram.",
  nav: {
    dashboard: "Painel",
    overview: "Visão geral",
    inbox: "Caixa de entrada",
    campaigns: "Campanhas",
    logs: "Logs de DM",
    settings: "Configurações",
    diagnostics: "Diagnósticos",
  },
  menu: "Menu",
  connect: "Conectar",
  connectInstagram: "Conectar Instagram",
  accounts: (n: number) => (n === 1 ? "1 conta" : `${n} contas`),
  allAccounts: "Todas as contas",
  instagramAccount: "Conta do Instagram",
} as const;

export function t<K extends keyof typeof pt>(key: K): (typeof pt)[K] {
  return pt[key];
}
