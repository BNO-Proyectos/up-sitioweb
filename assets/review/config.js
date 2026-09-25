// Configuración específica del proyecto. Es lo ÚNICO que se edita al instalar
// BnO Review en un sitio nuevo. El núcleo (review.js, ui.js, etc.) no lee nada
// del proyecto que no pase por este objeto.
export const CONFIG = {
  projectId: 'up-posgrados-2026',
  tokens: ['bno-interno', 'cliente-up-posgrados'], // equipo B&O · cliente UP (rotables por ronda)
  namespace: 'bno-review',
  storage: 'supabase',                          // 'local' (demo, por navegador) | 'supabase' (compartido)
  supabase: {
    url: 'https://gvnnhkectrnwhqkcrlar.supabase.co', // Supabase del equipo B&O (compartido entre proyectos; se separa por projectId)
    publishableKey: 'sb_publishable_Frc_cn6l4BfMbrSh7WFkIQ_6-fqqej4', // publishable (pública; segura por RLS)
  },
  version: '2.0.0',
};
