module.exports = {
  presets: [
    '@babel/env',
    '@babel/react'
  ],
  plugins: [
    '@babel/proposal-object-rest-spread',
    '@babel/transform-modules-commonjs',
    '@babel/transform-react-jsx'
  ],
  ignore: [
    'node_modules/**/*'
  ],
  env: {
    dev: {},
    test: {},
    build: {},
    production: {}
  }
}
