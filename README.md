# Boilerplate Next Js 14

![Github Banner 1280x640](https://github.com/cfatrane/nextjs-boilerplate/assets/17748314/392e9faa-349e-4a31-b550-b72c89709829)

WIP

## Table of Contents 📋

WIP

## Features 🛠️

- **Husky** 🐶 : Automatically lint your commit messages, code, and run tests upon committing or pushing.
- **i18n** : The process of designing and developing software so it can be adapted for users of different cultures and languages
- **ESlint** : Statically analyzes your code to quickly find problems. It is built into most text editors and you can run ESLint as part of your continuous integration pipeline.
- **Prettier** : An opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.
- **Shadcn** : A collection of beautifully designed, accessible, and customizable React components that you can use to build modern web applications with Next. js.
- **Tailwind** : A utility-first CSS framework that streamlines web development by providing a set of pre-designed utility classes.
- **VSCode** : Configuration file and recommended extensions

### Soon

- **Authentication**
- **Crowdin** : A localization management platform that aims to make the translation process more efficient.
- **Jest**: For unit and integration testing
- **React Hook Form** : A library that helps you validate forms in React.
- **Github Actions** : A continuous integration and continuous delivery (CI/CD) platform that allows you to automate your build, test, and deployment pipeline.
- **Storybook** : A development environment tool that is used as a playground for UI components. It allows us, the developers, to create and test components in isolation.
- **Sentry** : For real-time error tracking and monitoring
- **Stripe** : Stripe powers online and in-person payment processing and financial solutions for businesses of all sizes.

## Getting Started 🤔

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More 🧠

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel 🚀

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Project Structure 📁

```bash
├── .eslintrc.json        #
├── .git                  #
├── .gitignore            #
├── .husky                #
├── .prettierignore       #
├── .prettierrc           # Prettier configuration
├── .vscode               # VSCode configurations (extensions, settings ...)
├── messages              # Folder for all the translation files of i18n
├── src
│   ├── app               # Main folder
│   ├── assets            #
│   ├── components        #
│   ├── constants         #
│   ├── hooks             # List of personals hooks
│   ├── i18n              # Folder for all the configuration and translations files
│   ├── lib               # The lib folder contains all the utility functions
│   ├── redux             #
│   ├── services          # List of services
│   ├── styles            # List of styles
│   ├── tests             # List of tests
│   ├── types             #
│   └── utils             #
├── tailwind.config.ts    #
└── tsconfig.json         #
```

### i18n

WIP

### Shadcn

WIP

### Storybook

WIP

## Testing 🧪

WIP

## Translation 🗺️

WIP

## Vscode Extensions

### [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)

The Better Comments extension will help you create more human-friendly comments in your code.
With this extension, you will be able to categorise your annotations into:

- Alerts
- Queries
- TODOs
- Highlights
- Commented out code can also be styled to make it clear the code shouldn't be there
- Any other comment styles you'd like can be specified in the settings

### [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

Tailwind CSS IntelliSense enhances the Tailwind development experience by providing Visual Studio Code users with advanced features such as autocomplete, syntax highlighting, and linting.

### [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

Integrates ESLint into VS Code. If you are new to ESLint check the documentation.

The extension uses the ESLint library installed in the opened workspace folder. If the folder doesn't provide one the extension looks for a global install version. If you haven't installed ESLint either locally or globally do so by running npm install eslint in the workspace folder for a local install or `npm install -g eslint` for a global install.

On new folders you might also need to create an .eslintrc configuration file. You can do this by either using the VS Code command Create ESLint configuration or by running the eslint command in a terminal with `npx eslint --init`.

### [i18n Ally](https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarlint-vscode)

General Features

- Supports multi-root workspaces
- Supports remote development
- Supports numerous popular frameworks
- Supports linked locale messages
- Uses i18n for the extension itself, of course. Translation List

### [SonarLint](https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally)

SonarLint by Sonar is a free IDE extension that empowers you to fix coding issues before they exist. More than a linter, SonarLint detects and highlights issues that can lead to bugs, vulnerabilities, and code smells as you create your code. It offers clear remediation guidance and educational help, so you can fix issues before the code is committed. SonarLint in VS Code supports analysis of JS/TS, Python, PHP, Java, C, C++, C#, Go, and IaC code locally in your IDE.

### [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)

ErrorLens turbo-charges language diagnostic features by making diagnostics stand out more prominently, highlighting the entire line wherever a diagnostic is generated by the language and also prints the message inline.
