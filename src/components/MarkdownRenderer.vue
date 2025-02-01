<script setup>
import { marked } from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css'; // 🎨 Выбери стиль подсветки

const props = defineProps({
    content: String // Передаём текст для рендеринга
});

// Функция рендеринга Markdown с подсветкой кода
const renderMarkdown = (text) => {
    return marked(text, {
        highlight: (code, lang) => {
            return hljs.highlightAuto(code, [lang]).value;
        }
    });
};
</script>

<template>
    <div class="markdown-body" v-html="renderMarkdown(content)"></div>
</template>

<style scoped>
.markdown-body pre {
    padding: 10px;
    border-radius: 6px;
    overflow-x: auto;
}
</style>
