<template>
    <div>
        <home-header></home-header>
        <div class="img-box">
            <img src="../../public/img/appimg/login-user.jpg" alt="">
        </div>
        <div class="login-box">
            <div class="userico" :class="[!isLogin ? 'active' : '']" @click="isLogin=false">会员账号登录</div>
            <div class="mobileico" :class="[isLogin ? 'active':'']" @click="isLogin=true">注册</div>
        </div>
        <div class="loginUser" v-if="!isLogin">
            <ul class="login-list">
                <li>
                    <span>账号 :</span>
                    <i class="iconfont icon-yonghu2"></i>
                    <input type="text" placeholder="请输入用户名"  @blur="loginUser" v-model="uname">
                </li>
                <li>
                    <span>密码 :</span>
                    <i class="iconfont icon-suo"></i>
                    <input type="password" placeholder="请输入密码" @blur="loginUpwd" v-model="pwd">
                </li>
            </ul>
            <button class="login-button" @click="goLogin">登录</button>
        </div>
        <div class="regUser" v-if="isLogin">
            <ul class="login-list">
                <li>
                    <span>账号 :</span>
                    <i class="iconfont icon-yonghu2"></i>
                    <input type="text" placeholder="请输入用户名" @blur="regUser" v-model="regUname">
                </li>
                <li>
                    <span>密码 :</span>
                    <i class="iconfont icon-suo"></i>
                    <input type="password" placeholder="请输入密码" @blur="regUpw" v-model="regUpwd">
                </li>
                 <li>
                    <span>确认 :</span>
                    <i class="iconfont icon-suo"></i>
                    <input type="password" placeholder="请确认密码" @blur="regUpw1" v-model="regUpwd1">
                </li>
            </ul>
            <button class="login-button" @click="goReg">注册</button>
        </div>
        
    </div>
</template>
<script>
import qs from '../../node_modules/qs/dist/qs' 
import homeHeader from './child/Home-header'
export default {
    data(){
        return{
            uname:'',//用户名
            pwd:'',//密码
            regUname:'',
            regUpwd:'',
            regUpwd1:'',
            isLogin:false
        }
    },
    components:{
      "home-header":homeHeader,
    },
    methods:{
        //用户名失焦验证
        loginUser(){
            var reg=/^\w{4,8}$/i
            if(!this.uname){
               this.$toast({
                   message:'用户名不能为空',
                   position:'center',
                   duration:1000
               })
            }else if(!reg.test(this.uname)){
                 this.$toast({
                   message:'用户名4-8字符',
                   position:'center',
                   duration:1000
               })
            }
        },
         //密码失焦验证
        loginUpwd(){
            var reg=/^\w{6,8}$/
            var pwd=this.pwd;
            if(!pwd){
               this.$toast({
                   message:'密码不能为空',
                   position:'center',
                   duration:1000
                   })
            }else if(!reg.test(pwd)){
                this.$toast({
                   message:'密码6-8字符',
                   position:'center',
                   duration:1000
               })
            }
        },
        //登录验证
        goLogin(){
            var uname=this.uname;
            var upwd=this.pwd;
            this.axios.post("user/login",qs.stringify({uname,upwd}))
            .then(result=>{
                if(result.data.code>0){
                    this.$toast({
                   message:'登陆成功',
                   position:'center',
                   duration:1000
                   });
                   setTimeout(()=>{this.$router.replace('/')},2000)
                    sessionStorage.setItem("uname",this.uname)
                }else{
                 this.$toast({
                   message:'用户名或密码不正确',
                   position:'center',
                   duration:1000
                 })
                } 
            })
        },
        //注册用户验证
        regUser(){
            var reg=/^\w{4,8}$/i
            if(!this.regUname){
               this.$toast({
                   message:'用户名不能为空',
                   position:'center',
                   duration:1000
               })
            }else if(!reg.test(this.regUname)){
                 this.$toast({
                   message:'用户名4-8字符',
                   position:'center',
                   duration:1000
               })
            }else{
                this.axios.post("user/check",qs.stringify({uname:this.regUname})).then(result=>{
                    if(result.data.code>0){
                        this.$toast({
                            message:'该用户名已注册',
                            position:'center',
                            duration:1000
                            })
                    }
                })
            }
        },
        //密码
        regUpw(){
            var reg1=/^\w{6,8}$/
            var regUpwd=this.regUpwd
            if(!regUpwd){
                this.$toast({
                   message:'密码不能为空',
                   position:'center',
                   duration:1000
               })
            }else if(!reg1.test(regUpwd)){
                this.$toast({
                   message:'密码6-8位字符',
                   position:'center',
                   duration:1000
               })
            }
        },
        //再次确认密码
        regUpw1(){
            if(!this.regUpwd1){
                this.$toast({
                   message:'密码不能为空',
                   position:'center',
                   duration:1000
               })
            }else if(this.regUpwd1!=this.regUpwd){
                this.$toast({
                   message:'密码不一致',
                   position:'center',
                   duration:1000
               })
            }
        },
        // 注册
        goReg(){
            if(!this.regUser){
                this.$toast({
                   message:'请输入用户名密码',
                   position:'center',
                   duration:1000
               })
            }else{
                var  url="/user/reg"
                this.axios.post(url,qs.stringify({uname:this.regUname,upwd:this.regUpwd})).then(result=>{
                    if(result.data.code>0){
                        this.$toast({
                            message:'注册成功',
                            position:'center',
                            duration:1000
                        })
                         setTimeout(()=>{this.isLogin=false},1000)
                    }
                })
            }
        }
    }
}
</script>

<style>
.img-box{
    width:100%;
}
.img-box img{
    width:100%;
}
.login-box{
    width: 100%;
    height:2.5rem;
    border-bottom: 0.01rem solid #ccc;
    display: flex;
}
.login-box div{
    width:50%;
    text-align: center;
    line-height: 2.5rem;
    font-size: 1rem;
}
.active{
    border-bottom: 0.01rem solid #000;   
}
.login-list{
    width:100%;
    border-bottom: 0.01rem solid #ccc;
    margin-left: 0.5rem;
}
.login-list li{
    width:100%;
    height:3rem;
    text-align: center;
    padding:0.1rem;
}
.login-list li span{
width:30%;
height:3rem;
line-height: 3rem;
margin-right:1rem;
}
.login-list li input{
    width:70%;
    height:3rem;
    padding:0.5rem;
    box-sizing: border-box;
    border-bottom: 0.01rem solid #ccc;
}
.login-list li:last-child input{
    border-bottom: none;
}
.login-button{
    width:100%;
    height:2.5rem;
    line-height: 2.5rem;
    text-align: center;
    background:#666;
    margin-top:2rem;
    color:#fff;

}
</style>

