import { createRouter, createWebHistory } from 'vue-router'
import TaskListPage from '../pages/TaskListPage.vue'
import TaskDetailPage from '../pages/TaskDetailPage.vue'
import TheoryPage from '../pages/TheoryPage.vue'

const routes = [
    { path: '/', component: TaskListPage },
    { path: '/:taskId/detail', component: TaskDetailPage },
    { path: '/theory', component: TheoryPage },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
