import { ref } from 'vue'

export default function useTasks() {
    const tasks = ref(['First task'])

    function add(task) {
        alert(`Adding task - ${task}`)
        tasks.value.push(task)
    }

    return { tasks, add }
}