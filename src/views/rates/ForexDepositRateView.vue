<template>
    <NavBar />
    <ForexDepositRate />
</template>

<script>

import ForexDepositRate from '@/components/rates/ForexDepositRate.vue'
import NavBar from '@/components/rates/shared/NavBar.vue'

export default {
    components: {
        ForexDepositRate,
        NavBar
    }
}

</script>