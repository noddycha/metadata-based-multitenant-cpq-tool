export enum Currency {
  'INR' = 'INR',
  'DLR' = 'DLR',
  'YEN' = 'YEN'
}

export enum Languages {
  'EN' = 'EN',
  'FR' = 'FR',
  'ES' = 'ES'
}

export enum ComponentType {
  PAGE = 'page',
  TABLE = 'table',
  HIDDEN = 'hidden',
  TEXT = 'text',
  TEXTBOX = 'textbox',
  BUTTON = 'button'
}

export enum DataActionType {
  API = 'API',
  STORE = 'STORE'
}

export enum HttpMethod {
  GET = 'GET',
  POST = 'POST'
}

export interface Column {
  name: string
  title: string
  primaryKey?: boolean
  type: typeof ComponentType
}

export interface Data {
  type: string
  method?: string
  URL?: string
  path?: string
}

export interface Action {
  type: typeof DataActionType
  method?: typeof HttpMethod
  body?: string
  dataPath?: string
  URL?: string
  route?: string
  condition?: {
    LHS: string
    operator: string
    RHS: string | number
  }
  errorMessage?: string
  successMessage?: string
}

export interface Children {
  name: string
  type: typeof ComponentType
  dataPath: string
  title: string
  columns?: Column[]
  data?: Data
  actions?: Action[]
  children?: Children[]
}

export interface Page {
  name: string
  type: typeof ComponentType
  dataPath: string
  title: string
  defaultPage?: true
  route: string
  children?: Children[]
}

export interface uiConfig {
  tenantId: number
  tenantName: string
  defaultLanguage: string
  currency: typeof Currency
  supportedLanguages: (typeof Languages)[]
  header: {
    logo: string
    title: string
    href: string
  }
  theme: {
    primaryColor: string
    secondaryColor: string
  }
  pages: Page[]
}
