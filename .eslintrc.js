module.exports = {
  parser: "babel-eslint",
  extends: "airbnb-base",
  plugins: ["import", "flowtype"],
  env: {
    node: true,
    jest: true
  },
  rules: {
    "no-underscore-dangle": 0,
    "global-require": 0,
    "flowtype/boolean-style": [2, "boolean"],
    "flowtype/define-flow-type": 1,
    "flowtype/delimiter-dangle": [2, "never"],
    "flowtype/generic-spacing": [2, "never"],
    "flowtype/no-primitive-constructor-types": 2,
    "flowtype/no-weak-types": 2,
    "flowtype/object-type-delimiter": [2, "comma"],
    "flowtype/require-parameter-type": 0,
    "flowtype/require-return-type": 0,
    "flowtype/require-valid-file-annotation": 2,
    "flowtype/semi": [2, "always"],
    "flowtype/space-after-type-colon": [2, "always"],
    "flowtype/space-before-generic-bracket": [2, "never"],
    "flowtype/space-before-type-colon": [2, "never"],
    "flowtype/union-intersection-spacing": [2, "always"],
    "flowtype/use-flow-type": 1,
    "flowtype/valid-syntax": 1,
    "flowtype/no-weak-types": 0,
  },
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true
    }
  }
};
