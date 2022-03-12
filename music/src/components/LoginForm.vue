<template>
    <div>
        <div class="text-white text-center font-bold p-5 mb-4"
             v-if="login_show_alert"
             :class="login_alert_varient"
        >
            {{ login_alert_message }}
        </div>

        <vee-form
            :validation-schema="loginSchema"
            @submit="login"
        >
            <!-- Email -->
            <div class="mb-3">
                <label class="inline-block mb-2">Email</label>
                <vee-field
                    type="email"
                    class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                    placeholder="Enter Email"
                    name="email"
                />
                <error-message name="email" class="text-red-600"></error-message>
            </div>
            <!-- Password -->
            <div class="mb-3">
                <label class="inline-block mb-2"
                >Password</label
                >
                <vee-field :bails="false" v-slot="{field,errors}" name="password">
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
            <button
                type="submit"
                class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
            >
                Submit
            </button>
        </vee-form>

    </div>
</template>

<script>
export default {
    name: "LoginForm",
    data() {
        return {
            loginSchema: {
                email: "required|email",
                password: "required"
            },
            login_in_submission: false,
            login_show_alert: false,
            login_alert_varient: "bg-blue-500",
            login_alert_message: "Please wait! Your account is being logged in."
        };
    },
    methods: {
        async login(values) {
            this.login_in_submission = true;
            this.login_show_alert = true;
            this.login_alert_varient = "bg-blue-500";
            this.reg_alert_message = "Please wait! Your account is being logged in.";
            try {
                await this.$store.dispatch("login", values);
            } catch (error) {
                this.login_alert_varient = "bg-red-500";
                this.login_alert_message = "Invalid Credentials";
                return;
            }

            this.login_alert_varient = "bg-green-500";
            this.login_alert_message = "Your account is being created";
        }
    }
};
</script>

<style scoped>

</style>
