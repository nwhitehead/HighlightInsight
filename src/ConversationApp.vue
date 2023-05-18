<script setup>

import Conversation from './Conversation.vue';

const dialog = [
    { who: 'human', what: 'Hello, please tell me the summation of the numbers 1 through 10.'},
    { who: 'gpt', what: 'Sum them yourself.'},
];

</script>

<template>
    <div class="container min-w-[300px] mx-auto p-4 bg-white">
        <h1 className="text-2xl font-bold">
            The Margin
        </h1>
        <p>Let's chat...</p>
        <Conversation :dialog="dialog" />
    </div>
</template>
