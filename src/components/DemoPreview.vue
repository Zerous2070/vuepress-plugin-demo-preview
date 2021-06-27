<template>
    <div v-show="false">
    <slot />
    </div>
    <vuep v-if="code" :template="code"></vuep>
</template>

<script>
import Vuep from './Vuep/index';
export default {
    name: 'demo-preview',
    components: { Vuep },
    data() {
        return {
            code: ''
        }
    },
    created() {
        this.code = this.$slots.default()[0].children;
    }
}
</script>

<style lang="scss">
@import "./Vuep/style/vuep.scss";
</style>