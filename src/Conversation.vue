<script setup>

</script>

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
        <button class="btn-blue" @click="handleClick">Get commentary on selection</button>
    </div>
</template>
