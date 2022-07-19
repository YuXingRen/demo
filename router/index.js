import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "Main",
        component: () => import("../src/components/Main"),
        children: [
            {
                path: "/home",
                name: "home",
                component: () => import("../src/view/home")
            },
            {
                path: "/user",
                name: "user",
                component: () => import("../src/view/user")
            },
            {
                path: "/mall",
                name: "mall",
                component: () => import("../src/view/mall")
            },
            {
                path: "/PageOne",
                name: "page1",
                component: () => import("../src/view/other/pageOne")
            },
            {
                path: "/pageTwo",
                name: "page2",
                component: () => import("../src/view/other/pageTwo")
            }
        ]
    }
]
const router = new VueRouter({
    mode: "history",
    routes
})
export default router
