<template>
    <div class="navTabs">
        <div class="container">
            <div class="navTabsWrap ml-10">
                <router-link v-for="(nav, index) in navs"  
                            :to=nav.url 
                            :title=nav.text class="nav-btn" 
                            :class="[nav.url == this.$route.path ? 'nav-btn-active' : '']"
                            :key="index"
                >
                    {{ nav.text }}
                </router-link>
            </div>
        </div>
    </div>
</template>

<!-- <style scoped src="@/assets/css/rate/base.css"></style> -->
<style scoped lang="scss">
@import "@/assets/scss/rate/accessibility.scss";
</style>

<script>
export default {
    data(){
        return {
            navs: [
                {
                    text: "首頁",
                    url: "/"
                },
                {
                    text: "外幣存款利率",
                    url: "/ForexDepositRate"
                }
            ]
        }
    }
}

</script>