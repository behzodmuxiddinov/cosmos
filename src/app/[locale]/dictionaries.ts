import 'server-only'

export type Locale = keyof typeof dictionaries
 
export const dictionaries = {
    uz: () => import('../../messages/uz.json').then((module) => module.default),
    en: () => import('../../messages/ru.json').then((module) => module.default),
    ru: () => import('../../messages/en.json').then((module) => module.default),
}
 
export const getDictionary = async (locale : Locale) => dictionaries
[locale]()