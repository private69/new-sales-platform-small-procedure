<template>
    <div>
        <el-card
        shadow="hover"
        class="el-login__card"
        >
            <h2 style="padding: 7vh 0;">Logging</h2>
            <el-form
            size="small"
            label-width="80px"
            :rules="rules"
            >
                <el-form-item
                label="用户名:"
                prop="username"
                >
                    <el-input 
                    v-model="longinMessage.usernmae" 
                    clearable
                    placeholder="输入用户名" 
                    suffix-icon="el-icon-user"/>
                </el-form-item>
                <el-form-item
                label="密码:"
                prop="password">
                    <el-input 
                    clearable
                    show-password
                    v-model="longinMessage.password"
                    placeholder="输入密码" 
                    suffix-icon="el-icon-unlock"/>
                </el-form-item>
                <el-form-item>
                    <el-button @click="logging()">登录</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>
<script>
export default {
    name: "login",
    data(){
        return {
            rules: {
                username: [
                    { required: true , message: "请输入用户名" , trigger: 'blur'},

                ],
                password: [
                    { required: true , message: "请输入密码" , trigger: 'blur'}
                ]
            },
            longinMessage: {
                usernmae: "",
                password: ""
            }
        }
    },
    methods: {
        logging(){
            this.$store.state.login = true
            this.$router.replace('/browse')
        }
    },
    created(){
    },
    mounted(){
        // this.$store.state.login = false
    }
}
</script>
<style scoped>
.el-login__card {
    width: 40vw;
    height: 50vh;
    margin: 20vh 0 0 50vw; 
}
</style>

