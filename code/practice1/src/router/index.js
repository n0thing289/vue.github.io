import {createRouter, createWebHistory} from 'vue-router'

function createRoute(path, componentName){
    let basePath = '../components'
    return {
        path: path,
        component: () => import(/* @vite-ignore */basePath + componentName)
    }
}

const router = createRouter({
    history: createWebHistory('/'),
    routes:[
        createRoute('/', '/index.vue'),
        createRoute('/container', '/myContainer.vue'),
        createRoute('/form', '/myForm.vue'),
        createRoute('/table', '/myTable.vue'),
        createRoute('/dialog', '/myDialog.vue'),
        createRoute('/table2', '/myTable2.vue'),
    ]
})
export default router