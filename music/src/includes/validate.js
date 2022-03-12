import { Form as VeeForm, Field as VeeField, defineRule, ErrorMessage, configure } from "vee-validate";
import {
    alpha_spaces,
    max,
    min,
    required,
    email,
    min_value,
    max_value,
    confirmed,
    not_one_of as excluded
} from "@vee-validate/rules";

export default {
    install(app) {
        app.component("VeeForm", VeeForm);
        app.component("VeeField", VeeField);
        app.component("ErrorMessage", ErrorMessage);

        defineRule("required", required);
        defineRule("tos", required);
        defineRule("min", min);
        defineRule("max", max);
        defineRule("alpha_spaces", alpha_spaces);
        defineRule("email", email);
        defineRule("min_value", min_value);
        defineRule("max_value", max_value);
        defineRule("confirmed", confirmed);
        defineRule("password_mismatch", confirmed);
        defineRule("excluded", excluded);

        configure({
            generateMessage(ctx) {
                const messages = {
                    required: `The ${ctx.field} field is required`,
                    min: `The ${ctx.field} is too short `,
                    max: `Ths ${ctx.field} is too long`,
                    alpha_spaces: `This ${ctx.field} may contain only alphabetical characters and spaces`,
                    email: `The ${ctx.field} must be valid email`,
                    min_value: `The ${ctx.field} is too low`,
                    max_value: `The ${ctx.field} is too high`,
                    password_mismatch: `The ${ctx.field} should must with password`,
                    tos: `You must agree with term of service`,
                    excluded: `You are not allowed ${ctx.field} due to the restriction`
                };
                const message = messages[ctx.rule.name] ? messages[ctx.rule.name] : `The ${ctx.field} is invalid`;
                return message;
            },
            validateOnBlur: true,
            validateOnChange: true,
            validateOnInput: false,
            validateOnModelUpdate: true
        });
    }
};
