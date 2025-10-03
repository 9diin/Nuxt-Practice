<template>
    <div>
        <h1>버튼을 클릭하여 포스트 API 호출하기 - 테스트 ($fetch)</h1>
        <button @click="fetchPost" :disabled="loading">포스트 정보 로드 Load</button>

        <div v-if="loading">로딩 중...</div>

        <div v-if="post">
            <h2>{{ post.title }}</h2>
            <p>{{ post.body }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
}

const post = ref<Post | null>(null);
const loading = ref<boolean>(false);

async function fetchPost() {
    loading.value = true;

    try {
        post.value = await $fetch("https://jsonplaceholder.typicode.com/posts/1");
    } catch (error) {
        console.log(error);
        throw new Error(`POST API FETCH ERROR: ${error}`);
    } finally {
        loading.value = false;
    }
}
</script>
