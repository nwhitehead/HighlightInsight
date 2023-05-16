<script setup>

import { onMounted, ref, reactive } from 'vue';

const configuration = storageBacked('config',
    reactive({
        'context': true,
    })
);

</script>

<style>
.btn {
    @apply font-bold py-2 px-4 rounded;
}
.btn-blue {
    @apply btn bg-blue-500 text-white;
}
.btn-blue:hover {
    @apply bg-blue-700;
}
.btn-green {
    @apply btn bg-green-500 text-white;
}
.btn-green:hover {
    @apply bg-green-700;
}
span.note {
    @apply font-bold;
}
</style>

<template>
    <div class="container min-w-[300px] mx-auto p-4 bg-white">
        <h1 className="text-2xl font-bold">
            Highlight→Insight
        </h1>

        <fieldset class="border border-solid border-stone-300 p-3 mt-4">
            <legend>Options</legend>
            <div class="mb-4 select-none">
                <label>
                    <input type="checkbox" id="avatar" v-model="configuration.context" class="mr-2 leading-tight" />
                    Include context of page in request
                </label>
            </div>
        </fieldset>
    </div>
</template>
