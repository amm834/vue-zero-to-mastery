export default {
    beforeMount(el, binding) {
        el.innerHTML += `<i class="fa fa-${binding.values} float-right text-green-400 text-xl"></i>`;
    }
};
