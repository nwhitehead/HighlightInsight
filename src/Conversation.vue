<script setup>

const props = defineProps(['dialog']);

</script>

<template>
    <p v-for="item in props.dialog">
        {{ item }}
    </p>
</template>
