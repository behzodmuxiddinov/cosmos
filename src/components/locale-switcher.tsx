'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { i18n } from '../i18n-config'

export default function LocaleSwitcher() {
  const pathName = usePathname()
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <div className='mr-3'>
      <ul className='font-medium'>
        {i18n.locales.map((locale) => {
          return (
            <li key={locale} className='mb-1 last:mb-0'>
              <Link href={redirectedPathName(locale)} onClick={() => localStorage.setItem('locale', `${locale}`)} className={`border-indigo p-1 rounded-md ${pathName && pathName.includes(locale) ? 'border-[2px]' : ''}`}>{locale}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}