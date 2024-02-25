/**
 *   npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser \
 *     @vue/eslint-config-prettier @vue/eslint-config-typescript \
 *     eslint eslint-plugin-import eslint-plugin-prettier eslint-plugin-vue \
 *     eslint-config-prettier vue-eslint-parser prettier typescript
 */
const tsRules = {
	"@typescript-eslint/typedef": [
		"error",
		{
			variableDeclaration: true,
			arrowParameter: false,
		},
	],
	"@typescript-eslint/array-type": [
		"error",
		{
			default: "array",
			readonly: "array",
		},
	],
	"@typescript-eslint/explicit-function-return-type": [
		"error",
		{ allowExpressions: true, allowTypedFunctionExpressions: true },
	],
	"@typescript-eslint/no-unsafe-member-access": "error",
	"@typescript-eslint/explicit-module-boundary-types": "error",
	"@typescript-eslint/no-inferrable-types": "off",
	"@typescript-eslint/no-explicit-any": "error",
	"@typescript-eslint/no-unused-vars": "error",
	"@typescript-eslint/no-misused-new": "error",
	// We must disable the base rule as it can report incorrect errors
	"lines-between-class-members": "off",
	"@typescript-eslint/lines-between-class-members": [
		"error",
		"always",
		{
			exceptAfterOverload: true,
			exceptAfterSingleLine: true,
		},
	],
	"@typescript-eslint/no-unsafe-assignment": "off",
	"@typescript-eslint/consistent-type-definitions": ["error", "interface"],
	"@typescript-eslint/member-delimiter-style": [
		"error",
		{
			multiline: { delimiter: "semi", requireLast: true },
			singleline: { delimiter: "semi", requireLast: false },
		},
	],
	"@typescript-eslint/no-empty-interface": [
		"error",
		{
			allowSingleExtends: true,
		},
	],
	"@typescript-eslint/naming-convention": [
		"error",
		{
			selector: "default",
			format: ["camelCase"],
			leadingUnderscore: "allow",
			trailingUnderscore: "allow",
		},
		{
			selector: "import",
			format: ["camelCase", "PascalCase"],
		},
		{
			selector: "variable",
			format: ["camelCase", "UPPER_CASE"],
			leadingUnderscore: "allow",
			trailingUnderscore: "allow",
		},
		{
			selector: "function",
			format: ["camelCase", "PascalCase"],
			leadingUnderscore: "allow",
			trailingUnderscore: "allow",
		},
		{
			selector: "typeLike",
			format: ["PascalCase"],
		},
		{
			selector: "enumMember",
			format: ["PascalCase"],
		},
		{
			selector: "property",
			modifiers: ["static"],
			format: ["UPPER_CASE"],
			leadingUnderscore: "allow",
			trailingUnderscore: "allow",
		},
		{
			selector: "property",
			modifiers: ["static"],
			types: ["function"],
			format: ["camelCase"],
			leadingUnderscore: "allow",
			trailingUnderscore: "allow",
		},
		{
			selector: "objectLiteralProperty",
			format: ["camelCase", "PascalCase"],
			leadingUnderscore: "allow",
			trailingUnderscore: "allow",
		},
	],
};

module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ["eslint:recommended", "plugin:import/errors", "prettier"],
	plugins: ["import", "prettier"],
	rules: {
		"prettier/prettier": "error",
		"max-classes-per-file": "error",
		"use-isnan": "error",
		"no-new-wrappers": "error",
		"no-continue": "error",
		"no-cond-assign": ["error", "always"],
		radix: ["error", "always"],
		curly: "error",
		eqeqeq: ["error", "always"],
		"no-restricted-globals": [
			"error",
			{ name: "isNaN", message: "Use `Number.isNaN` instead." },
			{ name: "isFinite", message: "Use `Number.isFinite` instead." },
			{
				name: "fdescribe",
				message: "Do not commit `fdescribe`. Use `describe` instead.",
			},
			{ name: "fit", message: "Do not commit `fit`. Use `it` instead." },
		],
		"no-restricted-properties": [
			"error",
			{
				object: "arguments",
				property: "callee",
				message: "arguments.callee is deprecated",
			},
			{
				property: "__defineGetter__",
				message: "Please use Object.defineProperty instead.",
			},
			{
				property: "__defineSetter__",
				message: "Please use Object.defineProperty instead.",
			},
			{
				object: "describe",
				property: "only",
				message: "Do not commit `describe.only`. Use `describe` instead.",
			},
			{
				object: "it",
				property: "only",
				message: "Do not commit `it.only`. Use `it` instead.",
			},
		],
		"import/order": [
			"error",
			{
				"newlines-between": "always",
				alphabetize: { order: "asc", caseInsensitive: true },
			},
		],
		"import/newline-after-import": "error",
		"sort-imports": [
			"error",
			{
				ignoreDeclarationSort: true,
				ignoreCase: false,
				ignoreMemberSort: false,
			},
		], // Everything else done by `import` plugin
	},
	overrides: [
		{
			// enable the rule specifically for TypeScript files
			files: ["*.ts", "*.tsx"],
			extends: [
				"plugin:@typescript-eslint/recommended",
				"plugin:@typescript-eslint/recommended-requiring-type-checking",
				"plugin:import/typescript",
			],
			parser: "@typescript-eslint/parser",
			parserOptions: {
				project: "./tsconfig.json",
				ecmaFeatures: {
					jsx: true,
				},
			},
			rules: tsRules,
		},
		{
			files: ["*.vue"],
			extends: [
				"plugin:vue/vue3-recommended",
				"@vue/typescript/recommended",
				"@vue/prettier",
				"@vue/eslint-config-prettier",
				"eslint:recommended",
				"plugin:@typescript-eslint/recommended",
				"plugin:@typescript-eslint/recommended-requiring-type-checking",
				"plugin:import/errors",
				"plugin:import/typescript",
				"prettier",
			],
			parser: "vue-eslint-parser",
			parserOptions: {
				project: "./tsconfig.json",
				ecmaFeatures: {
					jsx: true,
				},
			},
			rules: tsRules,
		},
	],
};
