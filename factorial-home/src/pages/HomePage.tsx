import { useCallback, useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ActivityBoard } from '../components/activity/ActivityBoard'
import { PreferencesScreen } from '../components/preferences/PreferencesScreen'
import { MyAgentPanel } from '../components/agent/MyAgentPanel'
import { OnboardingFab } from '../components/onboarding/OnboardingFab'
import { SetupExperience } from '../components/onboarding/SetupExperience'
import { CanvasHeader } from '../components/canvas/CanvasHeader'
import { HomeContent } from '../components/canvas/HomeContent'
import { GREETINGS } from '../data/greetings'
import { Nav } from '../components/nav/Nav'
import { PANE_COLUMN_WIDTH, PANE_PREFIX, paneSpec } from '../components/panes/paneSpec'
import { DEFAULT_WIDGETS, WIDGETS, WIDGET_PREFIX, widgetSpec, type WidgetId } from '../components/widgets/registry'
import { FloatingPanel } from '../components/windows/FloatingPanel'
import { MaximizedWindow } from '../components/windows/MaximizedWindow'
import { WindowColumn } from '../components/windows/WindowColumn'
import { closeWithAnimation } from '../components/windows/animations'
import CalendarView from '../generated/CalendarView'
import PeopleView from '../generated/PeopleView'
import PoliciesView from '../generated/PoliciesView'
import PromptBar from '../generated/PromptBar'
import PromptBarEmployee from '../generated/PromptBar_employee'
import { CANVAS_MIN_WIDTH, columnsWidth, useWindowStack } from '../hooks/useWindowStack'
import { useAgentPanel } from '../state/agentPanel'
import { useAgentSetup, useJustLive, useSetupMode } from '../state/agentSetup'
import { Toast } from '../components/ui/Toast'
import { BuddyMark } from '../components/agent/BuddyMark'
import { isTicketKey, onPaneRequest, publishOpenPanes } from '../state/panes'
import { usePersona } from '../state/persona'
import { asView, type View } from '../types'

export default function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const view = asView(searchParams.get('view'))
  const setView = (next: View | null) => setSearchParams(next ? { view: next } : {})
  const [greeting] = useState(() => GREETINGS[Math.floor(Math.random() * GREETINGS.length)])
  const persona = usePersona()
  const agentOpen = useAgentPanel()
  const setup = useAgentSetup()
  const setupMode = useSetupMode()
  const justLive = useJustLive()

  const widgets = useWindowStack({ open: DEFAULT_WIDGETS })
  const panes = useWindowStack({ columnWidth: PANE_COLUMN_WIDTH })

  useEffect(() => {
    document.title = 'Home · f0compose'
  }, [])

  // Comms conversations and Inbox tickets ask to be opened from the side panel.
  const { openReplacing, close: closePaneNow, maximize: maximizePane, restore: restorePanes, toggleMaximized: togglePaneMaximized } = panes
  const { toggleMaximized: toggleWidgetMaximized, restore: restoreWidgets } = widgets
  const openPanes = panes.state.open
  const maximizedWidget = widgets.state.maximized
  useEffect(
    () =>
      onPaneRequest((key) => {
        if (openPanes.includes(key)) {
          closeWithAnimation(`${PANE_PREFIX}:${key}`, () => closePaneNow(key))
          return
        }
        if (maximizedWidget) toggleWidgetMaximized(maximizedWidget)
        const same = (k: string) => isTicketKey(k) === isTicketKey(key)
        const otherKindOpen = openPanes.some((k) => !same(k))
        openReplacing(key, same)
        if (isTicketKey(key) && !otherKindOpen) maximizePane(key)
        else restorePanes()
      }),
    [openPanes, closePaneNow, maximizedWidget, toggleWidgetMaximized, openReplacing, maximizePane, restorePanes],
  )

  useEffect(() => {
    publishOpenPanes(openPanes)
  }, [openPanes])

  // Switching screens drops any maximized window.
  useEffect(() => {
    restoreWidgets()
    restorePanes()
  }, [view, restoreWidgets, restorePanes])

  // Track the canvas width so side columns can overlay when they no longer fit.
  // A callback ref re-attaches the observer whenever the canvas remounts (e.g. after a maximize/restore).
  const [canvasWidth, setCanvasWidth] = useState(0)
  const observer = useRef<ResizeObserver | null>(null)
  const canvasRef = useCallback((el: HTMLDivElement | null) => {
    observer.current?.disconnect()
    observer.current = null
    if (!el) return
    const measure = () => setCanvasWidth(el.getBoundingClientRect().width)
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    observer.current = ro
  }, [])

  const isScreen = view === 'calendar' || view === 'people' || view === 'activity' || view === 'preferences'
  const showPromptBar = !isScreen
  // Like the original's conversation panel, the agent panel takes the widgets' place.
  const hideWidgets = view !== null || agentOpen || setupMode

  const widgetsWidth = hideWidgets ? 0 : columnsWidth(widgets.state)
  const panesWidth = columnsWidth(panes.state)
  const room = canvasWidth - CANVAS_MIN_WIDTH
  const tooWide = (w: number) => canvasWidth > 0 && w > room
  const bothTooWide = canvasWidth > 0 && panesWidth + widgetsWidth > room
  const widgetsOverlay = widgetsWidth > 0 && (tooWide(widgetsWidth) || (bothTooWide && widgetsWidth >= panesWidth))
  const panesOverlay = panesWidth > 0 && (tooWide(panesWidth) || (bothTooWide && panesWidth > widgetsWidth))
  const overlayMax = widgetsOverlay && panesOverlay ? canvasWidth / 2 : undefined

  const toggleWidget = (id: string) => {
    if (widgets.state.open.includes(id)) closeWithAnimation(`${WIDGET_PREFIX}:${id}`, () => widgets.close(id))
    else widgets.open(id)
  }
  const closeWidget = (id: string) => closeWithAnimation(`${WIDGET_PREFIX}:${id}`, () => widgets.close(id))
  const closePane = (key: string) => closeWithAnimation(`${PANE_PREFIX}:${key}`, () => panes.close(key))
  const specForWidget = (id: string) => widgetSpec(id, widgets.toggleFloating)

  let body
  if (widgets.state.maximized) {
    const id = widgets.state.maximized
    body = (
      <div className="flex min-h-full w-full overflow-hidden">
        <MaximizedWindow windowKey={`${WIDGET_PREFIX}:${id}`} spec={widgetSpec(id)} onRestore={() => widgets.toggleMaximized(id)} onClose={() => closeWidget(id)} />
      </div>
    )
  } else if (panes.state.maximized) {
    const key = panes.state.maximized
    body = (
      <div className="flex min-h-full w-full overflow-hidden">
        <MaximizedWindow windowKey={`${PANE_PREFIX}:${key}`} spec={paneSpec(key)} onRestore={() => togglePaneMaximized(key)} onClose={() => closePane(key)} />
      </div>
    )
  } else {
    body = (
      <div className="flex min-h-full w-full overflow-hidden">
        <div ref={canvasRef} className="relative flex min-w-0 flex-1 overflow-hidden">
          <WindowColumn
            side="left"
            keyPrefix={PANE_PREFIX}
            noun="chat"
            panelKey={(k) => (isTicketKey(k) ? 'ticket' : 'conversation')}
            state={panes.state}
            overlay={panesOverlay}
            maxWidth={overlayMax}
            specFor={paneSpec}
            onClose={closePane}
            onToggleMaximized={panes.toggleMaximized}
            onSetColumnWidth={panes.setColumnWidth}
            onResizeBetween={panes.resizeBetween}
            onResizeColumnsBetween={panes.resizeColumnsBetween}
          />
          <div
            className="flex flex-col overflow-hidden"
            style={
              widgetsOverlay || panesOverlay
                ? { flex: '0 0 auto', width: CANVAS_MIN_WIDTH, marginLeft: panesOverlay ? 'auto' : undefined }
                : { flex: '1 1 0%', minWidth: CANVAS_MIN_WIDTH }
            }
          >
            <div className="flex flex-col">
              <CanvasHeader view={view} openWidgets={widgets.state.open} onToggleWidget={toggleWidget} quiet={setupMode} />
            </div>
            <div className={`flex min-h-0 w-full flex-1 flex-col items-center ${isScreen ? '' : 'px-4 pt-6'}`}>
              {setupMode && view === null ? (
                <SetupExperience />
              ) : (
                <>
                  <div className={`flex min-h-0 w-full flex-1 flex-col items-center ${isScreen ? 'overflow-hidden' : 'home-canvas-scroll overflow-y-auto'}`}>
                    {view === 'policies' ? <PoliciesView /> : view === 'calendar' ? <CalendarView /> : view === 'people' ? <PeopleView /> : view === 'activity' ? <ActivityBoard /> : view === 'preferences' ? <PreferencesScreen /> : <HomeContent greeting={greeting} onAddWidget={widgets.open} />}
                  </div>
                  {showPromptBar && (persona === 'employee' ? <PromptBarEmployee /> : <PromptBar />)}
                </>
              )}
            </div>
          </div>
          {!hideWidgets && (
            <>
              {widgets.state.floating
                .filter((id) => widgets.state.open.includes(id))
                .map((id) => {
                  const def = WIDGETS[id as WidgetId]
                  const Content = def.floatingContent ?? def.content
                  return (
                    <FloatingPanel key={id} title={def.title} width={def.floatingWidth ?? 188} anchorSelector="[data-home-clockin-button]" onDock={() => widgets.toggleFloating(id)} onClose={() => closeWidget(id)}>
                      <Content />
                    </FloatingPanel>
                  )
                })}
              <WindowColumn
                side="right"
                keyPrefix={WIDGET_PREFIX}
                noun="widget"
                state={widgets.state}
                overlay={widgetsOverlay}
                maxWidth={overlayMax}
                specFor={specForWidget}
                onClose={closeWidget}
                onToggleMaximized={widgets.toggleMaximized}
                onSetColumnWidth={widgets.setColumnWidth}
                onResizeBetween={widgets.resizeBetween}
                onResizeColumnsBetween={widgets.resizeColumnsBetween}
              />
            </>
          )}
        </div>
        {agentOpen && !setupMode && <MyAgentPanel />}
      </div>
    )
  }

  return (
    <div id="f0-layout" className={`flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625] ${justLive ? 'f0c-reveal' : ''}`}>
      <div className="h-screen w-screen">
        <div className="scrollbar-macos grid h-screen grid-cols-1 grid-rows-[auto_minmax(0,1fr)]">
          <div className="col-[1/-1]"></div>
          <div className="relative isolate flex h-full">
            <Nav view={view} onView={setView} setupMode={setupMode} />
            {!setupMode && <OnboardingFab />}
            {justLive && (
              <Toast>
                <BuddyMark size="sm" />
                <span>{setup.name} is live</span>
              </Toast>
            )}
            <div className="relative min-w-0 flex-1" style={{ paddingRight: '0px' }}>
              <main id="content" className="relative z-10 flex h-full max-w-full flex-1 xs:py-1 overflow-auto xs:pr-1 pl-0" style={{ opacity: 1 }}>
                <div className="flex max-w-full flex-1 overflow-auto">{body}</div>
              </main>
              <div
                className="pointer-events-none [&_.copilotKitSidebarContentWrapper]:relative [&_.copilotKitSidebarContentWrapper]:h-full [&_.copilotKitSidebarContentWrapper]:w-full absolute right-0 top-0 bottom-0 z-0 pl-0"
                style={{ width: '360px' }}
              >
                <div className="copilotKitSidebarContentWrapper ">
                  <div className="h-full w-full copilotKitSidebar"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
