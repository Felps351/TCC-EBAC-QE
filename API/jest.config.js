module.exports = {
  reporters: [
    'default',
    [
      'jest-html-reporter',
      {
        pageTitle: 'Relatório de Testes API - EBAC Shop',
        outputPath: 'reports/relatorio-api.html',
        includeFailureMsg: true,
        includeSuiteFailure: true,
      },
    ],
  ],
};