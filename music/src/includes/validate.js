import { Form as VeeForm, Field as VeeField, defineRule, ErrorMessage } from "vee-validate";
import { alpha_spaces, max, min, required, email, min_value, max_value } from "@vee-validate/rules";

export default {
    install(app) {
        app.component("VeeForm", VeeForm);
        app.component("VeeField", VeeField);
        app.component("ErrorMessage", ErrorMessage);

        defineRule("required", required);
        defineRule("min", min);
        defineRule("max", max);
        defineRule("alpha_spaces", alpha_spaces);
        defineRule("email", email);
        defineRule("min_value", min_value);
        defineRule("max_value", max_value);
    }
};
