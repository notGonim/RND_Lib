module.exports = {
    extends: ['airbnb', 'airbnb/hooks', 'prettier', 'plugin:storybook/recommended', 'plugin:storybook/recommended', 'plugin:storybook/recommended', 'plugin:storybook/recommended'],
  plugins: ['prettier'],
    rules: {
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'react/prop-types': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/prefer-default-export': 'off',
        'no-use-before-define': 'off',
        'no-console': 'off',
        'no-alert': 'off',
        'no-underscore-dangle': 'off',
        'react/jsx-props-no-spreading': 'off',
        'jsx-a11y/label-has-associated-control': 'off',
        'jsx-a11y/label-has-for': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'react/jsx-curly-newline': 'off',
        'react/jsx-curly-brace-presence': 'off',
        'react/jsx-wrap-multilines': 'off',
        'react/jsx-fragments': 'off',
        'react/jsx-indent': 'off',
        'react/jsx-indent-props': 'off',
        'react/jsx-max-props-per-line': 'off',
        'react/jsx-first-prop-new-line': 'off',
        'react/jsx-closing-bracket-location': 'off',
        'react/jsx-closing-tag-location': 'off',
        'react/jsx-equals-spacing': 'off',
        'react/jsx-tag-spacing': 'off',
        'react/jsx-space-before-closing': 'off',
        'react/jsx-boolean-value': 'off',
        'react/jsx-child-element-spacing': 'off',
        'react/jsx-no-useless-fragment': 'off',
        'react/jsx-no-undef': 'off',
        'react/jsx-uses-react': 'off',
        'react/jsx-uses-vars': 'off',
        'react/jsx-no-duplicate-props': 'off',
        'react/jsx-no-constructed-context-values': 'off',
        'react/jsx-no-comment-textnodes': 'off',
        'react/jsx-no-target-blank': 'off',
        'react/jsx-no-standalone': 'off',
        'react/jsx-no-script-url': 'off',
        'prettier/prettier': ['error'],
    }
  };
  