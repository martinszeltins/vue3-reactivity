<template>
    <button @click="addTask">
        Add new task
    </button>
</template>

<script>
    import useTasks from '../composition/useTasks.js'

    export default {
        setup()
        {
            const { add } = useTasks()

            function addTask() {
                add('My new task')
            }

            return { addTask }
        }
    }
</script>