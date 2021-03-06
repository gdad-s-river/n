const isTest = String(process.env.NODE_ENV) === 'test';

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: isTest ? 'commonjs' : false,
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    'transform-class-properties',
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
  ],
};
