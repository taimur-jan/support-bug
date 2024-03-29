<template>
    <div class="auth-wrapper auth-v1 px-2">
        <div class="auth-inner py-2">

            <!-- Register v1 -->
            <b-card class="mb-0">
                <b-link class="brand-logo">
                    <vuexy-logo />
                    <h2 class="brand-text text-primary ml-1">
                        SupportBug
                    </h2>
                </b-link>

                <b-card-title class="mb-1">
                    Adventure starts here 🚀
                </b-card-title>
                <b-card-text class="mb-2">
                    Make your app management easy and fun!
                </b-card-text>

                <!-- form -->
                <validation-observer ref="registerForm">
                    <b-form class="auth-register-form mt-2" @submit.prevent="validationForm">
                        <!-- username -->
                        <b-form-group label="Username" label-for="username">
                            <validation-provider #default="{ errors }" name="Username" rules="required">
                                <b-form-input id="username" v-model="user.name" :state="errors.length > 0 ? false:null"
                                    name="register-username" placeholder="johndoe" />
                                <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
                        </b-form-group>

                        <!-- email -->
                        <b-form-group label="Email" label-for="email">
                            <validation-provider #default="{ errors }" name="Email" rules="required|email">
                                <b-form-input id="email" v-model="user.email" :state="errors.length > 0 ? false:null"
                                    name="register-email" placeholder="john@example.com" />
                                <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
                        </b-form-group>

                        <!-- password -->
                        <b-form-group label="Password" label-for="password">
                            <validation-provider #default="{ errors }" name="Password" rules="required">
                                <b-input-group class="input-group-merge" :class="errors.length > 0 ? 'is-invalid':null">
                                    <b-form-input id="password" v-model="user.password" :type="passwordFieldType"
                                        :state="errors.length > 0 ? false:null" class="form-control-merge"
                                        name="register-password" placeholder="············" />
                                    <b-input-group-append is-text>
                                        <feather-icon :icon="passwordToggleIcon" class="cursor-pointer"
                                            @click="togglePasswordVisibility" />
                                    </b-input-group-append>
                                </b-input-group>
                                <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
                        </b-form-group>

                        <!-- password -->
                        <b-form-group label="Confirm Password" label-for="password_confirmation">
                            <validation-provider #default="{ errors }" name="Password_confirmation" rules="required">
                                <b-input-group class="input-group-merge" :class="errors.length > 0 ? 'is-invalid':null">
                                    <b-form-input id="password_confirmation" v-model="user.password_confirmation" :type="passwordFieldType"
                                        :state="errors.length > 0 ? false:null" class="form-control-merge"
                                        name="register-password" placeholder="············" />
                                    <b-input-group-append is-text>
                                        <feather-icon :icon="passwordToggleIcon" class="cursor-pointer"
                                            @click="togglePasswordVisibility" />
                                    </b-input-group-append>
                                </b-input-group>
                                <small class="text-danger">{{ errors[0] }}</small>
                            </validation-provider>
                        </b-form-group>

                        <!-- checkbox -->
                        <b-form-group>
                            <b-form-checkbox id="register-privacy-policy" v-model="user.status" name="checkbox-1">
                                I agree to
                                <b-link>privacy policy & terms</b-link>
                            </b-form-checkbox>
                        </b-form-group>

                        <!-- submit button -->
                        <b-button variant="primary" block type="submit" :disabled="processing">
                            {{ processing ? "Please wait" : "Register" }}
                        </b-button>
                    </b-form>
                </validation-observer>

                <b-card-text class="text-center mt-2">
                    <span>Already have an account? </span>
                    <b-link :to="{name:'login'}">
                        <span>Sign in instead</span>
                    </b-link>
                </b-card-text>

                <div class="divider my-2">
                    <div class="divider-text">
                        or
                    </div>
                </div>

                <!-- social buttons -->
                <div class="auth-footer-btn d-flex justify-content-center">
                    <b-button variant="facebook" href="javascript:void(0)">
                        <feather-icon icon="FacebookIcon" />
                    </b-button>
                    <b-button variant="twitter" href="javascript:void(0)">
                        <feather-icon icon="TwitterIcon" />
                    </b-button>
                    <b-button variant="google" href="javascript:void(0)">
                        <feather-icon icon="MailIcon" />
                    </b-button>
                    <b-button variant="github" href="javascript:void(0)">
                        <feather-icon icon="GithubIcon" />
                    </b-button>
                </div>
            </b-card>
            <!-- /Register v1 -->
        </div>
    </div>

</template>

<script>
    import { mapActions } from 'vuex'
    import {
        ValidationProvider,
        ValidationObserver
    } from 'vee-validate'
    import {
        BCard,
        BLink,
        BCardTitle,
        BCardText,
        BForm,
        BButton,
        BFormInput,
        BFormGroup,
        BInputGroup,
        BInputGroupAppend,
        BFormCheckbox,
    } from 'bootstrap-vue'
    import VuexyLogo from '@core/layouts/components/Logo.vue'
    import {
        required,
        email
    } from '@validations'
    import {
        togglePasswordVisibility
    } from '@core/mixins/ui/forms'
    import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

    export default {
        components: {
            VuexyLogo,
            // BSV
            BCard,
            BLink,
            BCardTitle,
            BCardText,
            BForm,
            BButton,
            BFormInput,
            BFormGroup,
            BInputGroup,
            BInputGroupAppend,
            BFormCheckbox,
            // validations
            ValidationProvider,
            ValidationObserver,
        },
        mixins: [togglePasswordVisibility],
        data() {
            return {
                user:{
                    email: '',
                    name: '',
                    password: '',
                    password_confirmation:'',
                    status: ''
                },
                processing:false,


                // validation rules
                required,
                email,
            }
        },
        computed: {
            passwordToggleIcon() {
                return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
            },
        },
        methods: {
            ...mapActions({
                signIn:'auth/login'
            }),
            async register(){
                this.processing = true
                await axios.post('api/register',this.user).then(response=>{
                    this.signIn()
                }).catch(({response:{data}})=>{
                    alert(data.message)
                }).finally(()=>{
                    this.processing = false
                })
            },
            validationForm() {
                this.$refs.registerForm.validate().then(success => {
                    if (success) {
                        this.register();
                        this.$toast({
                            component: ToastificationContent,
                            props: {
                                title: 'Form Submitted',
                                icon: 'EditIcon',
                                variant: 'success',
                            },
                        })
                    }
                })
            },
        },
    }

</script>

<style lang="scss">
    @import '~@resources/scss/vue/pages/page-auth.scss';

</style>
