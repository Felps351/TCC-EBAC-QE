import http from 'k6/http';
import { check, sleep } from 'k6';

// CT-PERF-02: Navegação no catálogo de produtos sob carga (US-0004)
// 20 usuários virtuais, ramp-up de 20s, execução total de 2 minutos

export const options = {
  stages: [
    { duration: '20s', target: 20 }, // ramp-up
    { duration: '1m40s', target: 20 }, // sustentação
  ],
  thresholds: {
    http_req_duration: ['p(95)<3000'],
    http_req_failed: ['rate<0.05'],
  },
};

const BASE_URL = 'http://lojaebac.ebaconline.art.br';

export default function () {
  const resposta = http.get(`${BASE_URL}/produtos/`);

  check(resposta, {
    'catálogo carregou com sucesso (200)': (r) => r.status === 200,
    'página contém a listagem de produtos': (r) =>
      r.body.includes('products-grid'),
  });

  sleep(1);
}