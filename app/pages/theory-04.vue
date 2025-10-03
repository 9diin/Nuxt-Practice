<template>
    <div>
        <h1>버튼을 클릭하여 포스트 API 호출하기 - 테스트 (useFetch)</h1>

        <!-- 추가된 코드 -->
        <button @click="() => refresh()" :disabled="pending">포스트 정보 로드</button>

        <div v-if="pending">로딩 중...</div>
        <div v-if="post">
            <h2>{{ post.title }}</h2>
            <p>{{ post.body }}</p>
        </div>
        <div v-if="error">에러: {{ error.message }}</div>
    </div>
</template>

<script setup lang="ts">
interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
}

const {
    data: post,
    pending,
    error,
    refresh, // 추가된 코드
} = await useFetch<Post>("https://jsonplaceholder.typicode.com/posts/1", {
    immediate: false, // 추가된 코드
    onResponse({ response }) {
        console.log("서버에서 응답 받음:", response); // 서버 터미널에 출력
    },
});
</script>
