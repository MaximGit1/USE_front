<script setup>
import { ref, onMounted } from 'vue'
import CodeMirror from 'codemirror'

// ✅ Импорт стилей (правильные пути)
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/yonce.css'

// ✅ Импорт модулей
import 'codemirror/mode/python/python.js'
import 'codemirror/addon/edit/closebrackets.js'
import 'codemirror/addon/display/placeholder.js'
import 'codemirror/addon/scroll/scrollpastend.js'

import { defineProps } from 'vue'

defineProps({
    showInfo: Boolean,
    toggleInfo: Function
})

const editor = ref(null)

onMounted(() => {
    if (!editor.value) return

    const codeEditor = CodeMirror.fromTextArea(editor.value, {
        mode: 'python',
        lineNumbers: true,
        theme: 'yonce',
        indentUnit: 4,
        tabSize: 4,
        indentWithTabs: false,
        smartIndent: true,
        autoCloseBrackets: true,
        placeholder: "Пишите код здесь...",
        scrollbarStyle: 'null'
    })

    // Лог изменений
    codeEditor.on("change", (cm) => {
        console.log("Текущий код:", cm.getValue())
    })
})
</script>

<template>
    <div class="code-form">
        <textarea ref="editor"></textarea>
    </div>

    <div class="solution">
        <button class="btn btn-sm btn-outline-primary">Запустить</button>
        <a class="btn btn-sm btn-outline-secondary" href="#task-description">Перейти к условию</a>
        <button class="btn btn-outline-info btn-sm" @click="toggleInfo">
            {{ showInfo ? 'Скрыть информацию' : 'О выполнение кода' }}
        </button>
        
        <div v-if="showInfo" class="modal-backdrop" @click="toggleInfo">
            <div class="modal-content" @click.stop>
                <h6>📌 Условия выполнения</h6>
                <p>Решите задачу, ответ нужно вывести в консоль.</p>
                <p>Разрешённые библиотеки: <b>itertools</b></p>
                <p>Уложитесь в лимит по времени</p>
                <p>Версия python: 3.12.5</p>
                <button class="btn btn-danger btn-sm" @click="toggleInfo">Закрыть</button>
            </div>
        </div>

    </div>
</template>

<style scoped>
.code-form {
    margin-top: 15px;
}

.solution {
    margin-top: 10px;
}

.modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

/* Окно */
.modal-content {
    background: white;
    padding: 20px;
    border-radius: 10px;
    max-width: 400px;
    text-align: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
</style>
