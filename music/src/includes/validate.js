import { Form as VeeForm, Field as VeeField, defineRule, ErrorMessage } from "vee-validate";
import { alpha_spaces, max, min, required } from "@vee-validate/rules";

export default {
    install(app) {
        app.component("VeeForm", VeeForm);
        app.component("VeeField", VeeField);
        app.component("ErrorMessage", ErrorMessage);

        defineRule("required", required);
        defineRule("min", min);
        defineRule("max", max);
        defineRule("alpha_spaces", alpha_spaces);
    }
};
