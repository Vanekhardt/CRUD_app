import { createRouter,createWebHistory } from "vue-router";
import homeview from "@/views/homeview.vue";
import jobsview from "@/views/jobsview.vue";
import notfounview from "@/views/notfounview.vue";
import jobdetail from "@/views/jobdetail.vue";
import addjob from "@/views/addjob.vue";
import editjob from "@/views/editjob.vue";
const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes : [
        {
            path:'/',
            name:'home',
            component:homeview
        },
        {
            path:'/jobs',
            name:'jobs',
            component:jobsview
        },
        {
            path:'/jobs/:id',
            name:'jobdetail',
            component:jobdetail

        },
        {
            path:"/jobs/add",
            name:"add-job",
            component:addjob
        },
        {
            path:"/jobs/edit/:id",
            name:"edit-job",
            component:editjob,

        },
        
        {
            path:'/:catchAll(.*)',
            name:'not-found',
            component:notfounview
        }
    ] 
})


export default router;