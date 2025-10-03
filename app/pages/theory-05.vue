<template>
    <div>
        <h1>버튼을 클릭하여 포스트 API 호출하기 - 테스트 (useAsyncData)</h1>

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
    refresh,
} = await useAsyncData<Post>(
    "posts",
    async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        console.log("서버에서 응답 받음:", response);

        if (!response.ok) {
            throw new Error("API 요청 실패");
        }
        return response.json();
    },
    {
        immediate: false, // 자동 호출 방지
    }
);
</script>
