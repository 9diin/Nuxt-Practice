<template>
    <div></div>
</template>

<script setup lang="ts">
useHead({
    title: "DO-iT, Vue.js 프레임워크 Nuxt 4",
    meta: [{ name: "description", content: "Nuxt 4를 활용한 모던 웹 개발 가이드입니다. 빠르고 효율적인 SSR 및 SEO 최적화를 경험하세요." }],
    bodyAttrs: { class: "nuxt-app" },
    script: [{ innerHTML: `console.log('Nuxt 4 공식 가이드에 오신 것을 환영합니다!')` }],
});

useSeoMeta({
    title: "DO-iT Nuxt 4 공식 가이드",
    ogTitle: "DO-iT Nuxt 4 공식 가이드",
    description: "Nuxt 4를 활용한 최신 웹 개발 가이드로, SEO와 SSR 최적화 방법을 자세히 다룹니다.",
    ogDescription: "Nuxt 4 공식 가이드에서 빠르고 효율적인 서버사이드 렌더링과 SEO 최적화를 배워보세요.",
    ogImage: "https://do-it-example.com/og-image.png",
});
</script>
