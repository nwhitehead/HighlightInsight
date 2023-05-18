<script setup>

import { onMounted, ref, reactive } from 'vue';
import { configuration} from './globals';

async function handleConfig(button) {
    console.log('selection', selection);
    const msg = await chrome.runtime.sendMessage({type: "get_configuration"});
    console.log('msg', msg);
}

async function handleClick() {
    console.log('click');
    const [tab] = await chrome.tabs.query({active:true, lastFocusedWindow:true});
    const response = await chrome.tabs.sendMessage(tab.id, {method: "get_selection"});
    console.log('Got selection in popup of', response);
}

</script>

<style>
</style>

<template>
    <div class="container min-w-[300px] mx-auto p-4 bg-white">
        <h1 className="text-2xl font-bold">
            The Margin
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
