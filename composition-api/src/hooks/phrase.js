import { watchEffect, ref } from "vue";

export const usePhrase = () => {
    let phrase = ref("");
    let reversePhrase = ref("");
    watchEffect(() => {
        reversePhrase.value = phrase.value.split("").reverse().join("");
    });

    return {
        phrase,
        reversePhrase,
    };
};
