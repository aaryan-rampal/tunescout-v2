import {
    type RouteConfig,
    route,
} from '@react-router/dev/routes';

export default [
    route("/", "./App.tsx", [
        route("/callback", "./pages/Callback.tsx")
    ]),
] satisfies RouteConfig;
