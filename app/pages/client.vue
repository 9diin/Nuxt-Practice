<template>
    <div class="page">
        <!-- 애플리케이션 소개 문구(텍스트) 레이아웃 -->
        <AppBanner />

        <!-- 메인 콘텐츠 레이아웃 -->
        <MainContent :data="store.mainArticle" />
        <Separator label="Or" class="my-6" />

        <!-- 최근 콘텐츠 레이아웃 -->
        <div class="w-full flex flex-col gap-6">
            <div class="w-full flex items-center justify-between">
                <h4 class="scroll-m-20 text-2xl font-semibold tracking-tight">Latest News</h4>
                <Button class="bg-red-500 hover:bg-red-600">
                    See all
                    <ArrowRight />
                </Button>
            </div>
            <div class="w-full grid grid-cols-4 gap-6">
                <SkeletonSubContent />
                <SkeletonSubContent />
                <SkeletonSubContent />
                <SkeletonSubContent />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
/** 커스텀 컴포넌트 */
import { AppBanner, MainContent } from "@/components/common";
import { SkeletonSubContent } from "@/components/skeleton";
/** Shadcn-vue 컴포넌트 */
import { ArrowRight } from "lucide-vue-next";
import { useStore } from "@/stores";

const store = useStore();

onMounted(() => {
    store.getNews();
});
</script>
