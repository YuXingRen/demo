import Vue from "vue"
import VueRouter from "vue-router"
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}

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
    mode: "hash",
    routes
})
export default router
