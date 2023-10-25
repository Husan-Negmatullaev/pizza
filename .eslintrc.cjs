module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'roc',
		'airbnb',
		'prettier',
		'airbnb/hooks',
		'airbnb-typescript',
		'eslint:recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'plugin:react-hooks/recommended',
		'plugin:@typescript-eslint/recommended',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		tsconfigRootDir: __dirname,
		sourceType: 'module',
	},
	settings: {
		'import/resolver': {
			typescript: true,
			node: true,
			// typescript: {},
			// "node": {
			// 	"extensions": [".js", ".jsx", ".ts", ".tsx"]
			// }
		},
		'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
	},
	plugins: ['react-refresh'],
	rules: {
		indent: ['error', 'tab'],
		'@typescript-eslint/indent': ['error', 'tab'],
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
		// "import/extensions": ["error", "always", {
		// 	ignorePackages: true,
		// 	'index.ts': {
		// 		'ts': 'never'
		// 	}
		// }],
		// "import/extensions": ["never"],
		// "import/extensions": [
		// 	"error",
		// 	"ignorePackages",
		// ],
		'react/react-in-jsx-scope': 'off',
		'import/prefer-default-export': 'off',
		'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
	},
};
