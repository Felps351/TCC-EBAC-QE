import http from 'k6/http';
import { check, sleep } from 'k6';

// CT-PERF-01: Login sob carga (US-0002)
// 20 usuários virtuais, ramp-up de 20s, execução total de 2 minutos

export const options = {
  stages: [
    { duration: '20s', target: 20 }, // ramp-up
    { duration: '1m40s', target: 20 }, // sustentação
  ],
  thresholds: {
    http_req_duration: ['p(95)<3000'], // 95% das requisições abaixo de 3s
    http_req_failed: ['rate<0.05'],    // menos de 5% de falhas
  },
};

const BASE_URL = 'http://lojaebac.ebaconline.art.br';

const usuarios = [
  'user1_ebac',
  'user2_ebac',
  'user3_ebac',
  'user4_ebac',
  'user5_ebac',
];
const SENHA = 'psw!ebac@test';

export default function () {
  const usuario = usuarios[Math.floor(Math.random() * usuarios.length)];

  // 1. Acessa a página de login para obter o nonce (token de segurança do WordPress/WooCommerce)
  const paginaLogin = http.get(`${BASE_URL}/minha-conta/`);
  check(paginaLogin, {
    'página de login carregou (200)': (r) => r.status === 200,
  });

  const nonceMatch = paginaLogin.body.match(
    /name="woocommerce-login-nonce" value="([^"]+)"/
  );
  const nonce = nonceMatch ? nonceMatch[1] : '';

  // 2. Envia o login
  const resposta = http.post(
    `${BASE_URL}/minha-conta/`,
    {
      username: usuario,
      password: SENHA,
      'woocommerce-login-nonce': nonce,
      '_wp_http_referer': '/minha-conta/',
      login: 'Entrar',
    },
    {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      redirects: 0,
    }
  );

  check(resposta, {
    'login respondeu com sucesso (302 - redirect)': (r) => r.status === 302,
  });

  sleep(1);
}