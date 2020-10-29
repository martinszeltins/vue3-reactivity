<template>
    <div v-for="task in tasks">
        {{ task }}
    </div>

    <add-task />
</template>

<script>
    import AddTask from './components/AddTask.vue'
    import useTasks from './composition/useTasks.js'

    export default {
        components: {
            AddTask
        },

        setup() {
            const { tasks } = useTasks()

            return { tasks }
        },
    }
</script>
