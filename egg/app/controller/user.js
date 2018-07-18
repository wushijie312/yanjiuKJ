const Controller =require('egg').Controller;
class UserController extends Controller{
    async login(){
        const {app,ctx} = this;
        const body = ctx.request.body;
        console.log(body);
        const user= await app.mysql.get('users',{username: body.username});
        
        if(body.username===user.username && body.password === user.password){
            let token =Date.now();
            tokens[user.id]=token;
            this.ctx.body={
                code:0,
                msg:'登录成功',
                data: user,
                tk:token
            }
        }else{
            this.ctx.body={
                code:1,
                data:'账号或者密码错误!ao '
            }
        }
    }
    async userinfo(){
        this.ctx.body={
            code:0,
            msg:'xxx'
        }
    }
    async out(){
        let {token,uid} = this.ctx.header;
        delete tokens[uid];
        this.ctx.body={
            code:0,
            msg:'退出成功！'
        }
    }
}

module.exports = UserController;