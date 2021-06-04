const useRefChildrenRoutes = [
  { path: "/use-ref/apps/focus-app", component: "Focus" },
  { path: "/use-ref/apps/copy-app", component: "Copy" },
  { path: "/use-ref/apps/media-player-app", component: "Media Player" },
  {
    path: "/use-ref/apps/scroll-animation-app",
    component: "Scroll Animation",
  },
  { path: "/use-ref/apps/render-app", component: "Render" },
  { path: "/use-ref/apps/loading-app", component: "Loading" },
];

const customHooksChildrenRoutes = [
  {
    path: "/custom-hooks/apps/counter-app",
    component: "useCounter",
  },
  {
    path: "/custom-hooks/apps/todo-app",
    component: "useTodos",
  },
  {
    path: "/custom-hooks/apps/mouse-position-app",
    component: "useMousePosition",
  },
  {
    path: "/custom-hooks/apps/local-storage-app",
    component: "useLocalStorage",
  },
  {
    path: "/custom-hooks/apps/event-listener-app",
    component: "useEventListener",
  },
];

const routes = [
  { path: "/use-state", component: "useState" },
  { path: "/use-reducer", component: "useReducer" },
  {
    path: "/use-ref",
    component: "useRef",
    children: useRefChildrenRoutes,
  },
  { path: "/use-callback", component: "useCallback" },
  { path: "/use-memo", component: "useMemo" },
  { path: "/use-imperative-handle", component: "useImperativeHandle" },
  {
    path: "/custom-hooks",
    component: "Custom Hooks",
    children: customHooksChildrenRoutes,
  },
];

export { routes };
