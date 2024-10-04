# Multitenant CPQ Tool

This is a DEMO project to demonstrate metadata driven frontend as per the requirements of "Expedite Commerce"

## What could go wrong?

- If the metadata (UI configuration JSON) is built incorrectly, the UI will crash if that specific negative scenario is not handled properly
- There is a security threat of modifying the UI config JSON with harmful data which could expose sensitive data or enable XSS attacks
- If there are a lot of nested components (let's say more than 500 levels) the page might get overloaded and might crash the UI
- If user enters the data URL of an API that doesn't accepts CORS requests, the UI data API might fail as it is solely fetched from the UI configuration
- Since the metadata offers a very opinionted solution, the user is restricted with his potential. There is a chance of mis-using components which would lead to unexpected issues in the application
- It's hard to debug issues as the visibility is very less for the user who is configuring the metadata
- Since the frontend is multitenant, if the scope of data on both configuration and UI data is not managed correctly, might cause user data safety issues
- If the component rendering failures are not handled correctly, this might create a bad user experience for the end user

## Future enhancements

- Making components more generic and un-opinionated
- More granular and user friendly error handling
- Theme support based on the primary and secondary color preference for a tenant
- Localization (for currency based on the locale of the user)
- i18n Support
- Unit Tests
- Automated Deployments
- Step and Form validations
- Evaluating expressions using dynamic template variables withing the configuration

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Running necessary backend

Please install 'http-server' npm package to be able to run the backend which delivers the necessary JSON response for the frontend

```sh
npm install -g http-server
http-server
```

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
