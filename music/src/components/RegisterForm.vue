<template>
    <div>
        <div class="text-white text-center font-bold p-5 mb-4"
             v-if="reg_show_alert"
             :class="reg_alert_varient"
        >
            {{ reg_alert_message }}
        </div>
        <vee-form :validation-schema="schema"
                  @submit="register"
                  :initial-values="userData"
        >
            <!-- Name -->
            <div class="mb-3">
                <label class="inline-block mb-2">Name</label>
                <vee-field
                    type="text"
                    name="name"
                    class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                    placeholder="Enter Name"
                />
                <error-message name="name" class="text-red-600"></error-message>
            </div>
            <!-- Email -->
            <div class="mb-3">
                <label class="inline-block mb-2">Email</label>
                <vee-field
                    type="email"
                    name="email"
                    class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                    placeholder="Enter Email"
                />
                <error-message name="email" class="text-red-600"></error-message>
            </div>
            <!-- Age -->
            <div class="mb-3">
                <label class="inline-block mb-2">Age</label>
                <vee-field
                    type="number"
                    name="age"
                    class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                />
                <error-message name="age" class="text-red-600"></error-message>
            </div>
            <!-- Password -->
            <div class="mb-3">
                <label class="inline-block mb-2"
                >Password</label
                >

                <vee-field
                    name="password"
                    :bails="false"
                    v-slot="{field,errors}"
                >
                    <input
                        type="password"
                        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                        placeholder="Password"
                        v-bind="field"
                    />
                    <div v-for="error in errors" :key="error" class="text-red-600">
                        {{ error }}
                    </div>
                </vee-field>
            </div>
            <!-- Confirm Password -->
            <div class="mb-3">
                <label class="inline-block mb-2"
                >Confirm Password</label
                >
                <vee-field
                    type="password"
                    name="confirm_password"
                    class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                    placeholder="Confirm Password"
                />
                <error-message name="confirm_password" class="text-red-600"></error-message>

            </div>
            <!-- Country -->
            <div class="mb-3">
                <label class="inline-block mb-2">Country</label>
                <vee-field
                    as="select"
                    name="country"
                    class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                >
                    <option value="USA">USA</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Germany">Germany</option>
                    <option value="Antarctica">Antarctica</option>
                </vee-field>
                <error-message name="country" class="text-red-600"></error-message>

            </div>
            <!-- TOS -->
            <div class="mb-3 pl-6">
                <vee-field
                    type="checkbox"
                    name="tos"
                    value="1"
                    class="w-4 h-4 float-left -ml-6 mt-1 rounded"
                    id="tos"
                />
                <label class="inline-block" for="tos"
                >Accept terms of service</label
                >
                <error-message name="tos" class="text-red-600 block"></error-message>

            </div>
            <button
                type="submit"
                :disabled="reg_in_submission"
                class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
            >

                Submit
            </button>
        </vee-form>
    </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
    name: "RegisterForm",
    data() {
        return {
            schema: {
                name: "required|min:3|max:16|alpha_spaces",
                email: "required|email",
                age: "required|min_value:18|max_value:100",
                password: "required|min:3|max:16",
                confirm_password: "required|password_mismatch:@password",
                country: "required|excluded:Antarctica",
                tos: "tos"
            },
            userData: {
                country: "USA"
            },
            reg_in_submission: false,
            reg_show_alert: false,
            reg_alert_varient: "bg-blue-500",
            reg_alert_message: "Please wait! Your account is being created."
        };
    },
    methods: {
        register(values) {
            this.reg_in_submission = true;
            this.reg_show_alert = true;
            this.reg_alert_varient = "bg-blue-500";
            this.reg_alert_message = "Please wait! Your account is being created.";

            this.reg_alert_varient = "bg-green-500";
            this.reg_alert_message = "Your account is being created";
            console.log(values);
        }
    }


};
</script>

<style scoped>

</style>
