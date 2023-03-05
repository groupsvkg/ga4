# Google Analytics

## Project Setup

- Create nextjs project - `npx create-next-app@latest --ts`
- Create `.nvmrc` and `.npmrc` for engine locking
- Update `.eslintrc.json`
- Run `npm run lint`
- Add `prettier` package - `npm install -D prettier`
- Create `.prettierignore`
- Create `.prettierrc`
- Update `package.json` script - `"prettier": "prettier --write ."`
- Run `npm run prettier`
- Add `husky` package - `npm add -D husky`
- Install `husky` - `npx husky install`
- Add `husky` pre-commit commands
  - `npx husky add .husky/pre-commit "npm run lint"`
  - `npx husky add .husky/pre-push "npm run build"`
- Update `package.json` to include `"prepare": "husky install"`
- Add commit lint packages - `npm add -D @commitlint/config-conventional @commitlint/cli`
- Create and update `commitlint.config.js`
- Enable commit lint - `npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'`
- Create `.vscode` folder
  - Create and update `setting.json`
  - Create and update `launch.json` for client, server, or fullstack debugging
- Install `cross-env` package - `npm install -D cross-env`
- Update `package.json` dev script - `"dev": "cross-env  NODE_OPTIONS='--inspect' next dev"`
- Install `storybook` package - `npx sb init --builder webpack5`
- Run `npm install`
- Run `npm run storybook`
- Add `tailwindcss`
  - `npm install -D tailwindcss postcss autoprefixer`
  - `npx tailwindcss init -p`
  - Update `tailwind.config.js`
  - Update `globals.css`
  - Run `npm run dev`
- Install `redux` packages - `npm install @reduxjs/toolkit react-redux`
- Add `Google Analytics` package - `npm install nextjs-google-analytics`
