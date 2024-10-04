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
  BUTTON = 'button',
  HTMLTEXT = 'html',
  PRICING_SUMMARY = 'pricing_summary',
  GRID = 'grid',
  IMAGE = 'image',
  CARD = 'card'
}

export enum DataActionType {
  API = 'API',
  STORE = 'STORE',
  NAV = 'NAV'
}

export enum HttpMethod {
  GET = 'GET',
  POST = 'POST'
}

export interface Column {
  name: string
  title: string
  primaryKey?: boolean
  type: ComponentType
}

export interface Data {
  type: string
  method?: string
  URL?: string
  path?: string
  body?: string | number
}

export interface Action {
  type: DataActionType
  method?: HttpMethod
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

export interface Param {
  key: string
  value: string
}
export interface Children {
  name: string
  type: ComponentType
  dataPath: string
  title: string
  columns?: Column[]
  data?: Data
  actions?: Action[]
  children?: Children[]
  params?: Param[]
}

export interface Page {
  name: string
  type: ComponentType
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
  currency: Currency
  supportedLanguages: Languages[]
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
