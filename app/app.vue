<template>
    <div class="app">
        <AppHeader />
        <!-- 현재 경로에 맞는 페이지가 여기에 렌더링됩니다 -->
        <NuxtPage />
    </div>
</template>

<script setup lang="ts">
import AppHeader from "./components/common/AppHeader.vue";
</script>

<style>
body {
    overflow-x: hidden; /* 수평 스크롤 숨기기 */
}

.app {
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}

.page {
    width: 100%;
    max-width: 1132px;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    margin-top: 57px;
    padding: 24px 0;

    gap: 24px;
}
</style>
