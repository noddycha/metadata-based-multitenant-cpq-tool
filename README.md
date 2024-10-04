# Metadata Based Multitenant CPQ Tool

This is a DEMO project to demonstrate metadata driven frontend as per the requirements of "Expedite Commerce"

## Tasks

**1. Input Structure**

The metadata (JSON) which is used to build the UI on the frontend dynamically (which has the configuration of 3 steps / pages of the CPQ tool i.e Configure, Price and Quote) is available in:
* Microsoft UI Configuration: `server/data/ui-configuration-1001.json`
* Lenovo UI Configuration: `server/data/ui-configuration-1002.json`

The UI data which is loaded inside these components are available in 
* Microsoft UI Data: `server/data/ui-data-1001.json`
* Lenovo UI Data: `server/data/ui-data-1002.json`

Multitenancy of the frontend is demonstrated with frontend dynamically changing layout, components and functionality based on the UI configuration specific to the tenant (using tenantId as a query param for the application). Each step is handled as a route in the VueJS and each page can have nested components under the `children` property.

**2. Dummy Components**

Here is the list of components / functionalities supported by the frontend:

- **Pages**: Each step / stage of the frontend can be represented as a Page with it's own title, routing and children
- **Navigation**: Actions could be defined on supported components to be able to navigate from one page to the other page of the application
- **Header**: Application header which can be customized by changing it's logo, title and href
- **Table**: Table component which loads data either from the store or from the API configured in the data property
- **Card**: Component with surface that displays content and actions on a single topic
- **Grid**: Component to create flexible layouts
- **Image**: Component to render an image
- **Slideshow**: Component to render a slideshow of images and data
- **PricingSummary**: A CPQ usecase specific component which calculates pricing of the products and stores the data in the application store
- **Button**: Navigation option used to save data or navigate between pages (routes)
- **HtmlText**: Component that accepts HTML text and renders the respective HTML on the page. Also, accepts data params that could be used in the HTML template
- **Textbox**: Form input component which allows user to edit and update a specific data. Has handlers to update the user data in the dataPath of the store
- **Text**: Component that displays plain text on the page


**3. Metadata Processor**

The `MetadataProcessor (src/components/MetadataProcessor.vue)` vue component in the application is responsible for handling the component structure and visibility based on the UI metadata. This component is used recurssively for the pages' children to render all the nested components as per the configuration.

**4. Support data flow**

Data is passed / shared between the components in the following 2 approaches:
* Passed: When the data is passed from a parent component to the child component, Vue *Props* are used to pass the data
* Shared: When the data is supposed to be shared across components or needs a more global scope of availability, the data is stored and shared via the application store specific to the data using *Pinia state manager*

**5. What Could Go Wrong**

- If the **metadata (UI configuration JSON) is built incorrectly**, the UI will crash if that specific negative scenario is not handled properly
- There is a **security threat of modifying the UI config JSON with harmful data** which could expose sensitive data or enable XSS attacks
- If there are a lot of nested components (let's say more than 500 levels) **the page might get overloaded** and might crash the UI
- If user enters the data URL of an **API that doesn't accepts CORS requests, the UI data API might fail** as it is solely fetched from the UI configuration
- Since the **metadata offers a very opinionted solution, the user is restricted with his potential.** There is a chance of mis-using components which would lead to unexpected issues in the application
- It's **hard to debug** issues as the visibility is very less for the user who is configuring the metadata
- Since the frontend is multitenant, if the **scope of data on both configuration and UI data** is not managed correctly, might cause user data safety issues
- If the **component rendering failures are not handled correctly**, this might create a bad user experience for the end user

## Future enhancements

- Theme support based on the primary and secondary color preference for a tenant
- Localization (for currency based on the locale of the user)
- i18n Support
- Unit Tests
- More granular and user friendly error handling
- Automated Deployments
- Step and Form validations
- Evaluating expressions using dynamic template variables withing the configuration

## Prerequisites

- Node v20+
- NPM v10.8+

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Running necessary backend

Please install 'http-server' npm package to be able to run the backend which delivers the necessary JSON response for the frontend

```sh
cd server
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
