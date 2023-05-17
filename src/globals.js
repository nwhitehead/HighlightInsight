
import { reactive } from 'vue';
import { storageBacked } from './storageBacked.js';

export const configuration = storageBacked('config',
    reactive({
        'context': true,
    })
);
