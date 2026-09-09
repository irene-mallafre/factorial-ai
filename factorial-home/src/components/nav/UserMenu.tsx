import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useNavigate } from 'react-router-dom'
import CompanyAvatarTestDeVerdad from '../../generated/CompanyAvatar_TestDeVerdad'
import ModuleIconHome from '../../generated/ModuleIcon_home'
import RailAvatarAdmin from '../../generated/RailAvatar_admin'
import RailAvatarEmployee from '../../generated/RailAvatar_employee'
import { Icons } from '../../generated/icons.gen'
import { PERSONA_LABEL, setPersona, usePersona, type Persona } from '../../state/persona'
import { applyTheme, toggleTheme, useTheme } from '../../state/theme'
import { Icon } from '../ui/Icon'
import { MenuDivider, MenuRow, Scrim } from '../ui/Menu'

const COMPANIES = [
  { id: 'factorial', name: 'Factorial' },
  { id: 'test-de-verdad', name: 'Test de verdad' },
]

const Check = () => <Icon icon={Icons.CurrentEmployees} size="sm" color="info" />

/** Avatar button at the bottom of the rail and its popover menu. */
export function UserMenu() {
  const persona = usePersona()
  const theme = useTheme()
  const navigate = useNavigate()
  const anchor = useRef<HTMLButtonElement>(null)
  const [open, setOpen] = useState(false)
  const [pos, setPos] = useState<{ left: number; bottom: number } | null>(null)
  const [company, setCompany] = useState('factorial')

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  const toggle = () => {
    if (!open && anchor.current) {
      const rect = anchor.current.getBoundingClientRect()
      setPos({ left: rect.right + 8, bottom: window.innerHeight - rect.bottom })
    }
    setOpen((o) => !o)
  }

  const menu = open && pos && (
    <>
      <Scrim onClick={() => setOpen(false)} />
      <div
        className="f0c-popover fixed z-50 flex w-[248px] flex-col rounded-md border border-solid border-f1-border-secondary bg-f1-background p-1 shadow-[0_4px_20px_0_rgba(13,22,37,0.08)]"
        style={{ left: pos.left, bottom: pos.bottom, transformOrigin: 'bottom left' }}
      >
        <div className="p-2 text-sm font-medium text-f1-foreground-secondary">alicia.keys@factorial.co</div>
        {COMPANIES.map((c) => (
          <MenuRow
            key={c.id}
            icon={c.id === 'factorial' ? <ModuleIconHome /> : <CompanyAvatarTestDeVerdad />}
            label={c.name}
            trailing={company === c.id ? <Check /> : undefined}
            onClick={() => setCompany(c.id)}
          />
        ))}
        <MenuDivider />
        <MenuRow icon={<Icon icon={Icons.DiscoverFactorial} size="md" color="default" />} label="Discover Factorial" />
        <MenuDivider />
        {(['admin', 'employee'] as Persona[]).map((p) => (
          <MenuRow
            key={p}
            icon={<Icon icon={p === 'admin' ? Icons.Security : Icons.Icon} size="md" color="default" />}
            label={`View as ${PERSONA_LABEL[p].toLowerCase()}`}
            trailing={persona === p ? <Check /> : undefined}
            onClick={() => {
              setPersona(p)
              setOpen(false)
            }}
          />
        ))}
        <MenuDivider />
        <MenuRow
          icon={<Icon icon={theme === 'dark' ? Icons.Opportunities : Icons.SwitchToDarkMode} size="md" color="default" />}
          label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          onClick={toggleTheme}
        />
        <MenuRow
          icon={<Icon icon={Icons.ScreenSettings} size="md" color="default" />}
          label="Settings"
          onClick={() => {
            setOpen(false)
            navigate('/p/home?view=preferences')
          }}
        />
        <MenuDivider />
        <MenuRow icon={<Icon icon={Icons.BackToCatalog} size="md" color="default" />} label="Back to catalog" onClick={() => navigate('/')} />
      </div>
    </>
  )

  return (
    <>
      {menu && createPortal(menu, document.body)}
      <button ref={anchor} onClick={toggle} aria-label="Open user menu" className="f0c-pressable flex cursor-pointer items-center justify-center rounded-full">
        {persona === 'employee' ? <RailAvatarEmployee /> : <RailAvatarAdmin />}
      </button>
    </>
  )
}
