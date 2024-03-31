import conf from '../conf/conf'
import {Client,ID,Account} from 'appwrite'
class Authservice{
    clint =new Client();
    account;
    constructor(){
        this.clint
                  .setEndpoint(conf.appwriteUrl) // Your API Endpoint
                  .setProject(conf.appwriteProjectId)        // Your project ID

           this.account=new Account(this.clint)
    }
     async  createAccount({email,password,username}) {
        try {
            return await this.account.create(ID.unique(),email,password,username)
            
        } catch (error) {
            console.log(`this error occur in auth.js::create_account : the error is =>${error.message}`)
            
        }
     }


     async login({email,password}) {
        try {
            return await this.account.createEmailSession(email,password)
        } catch (error) {
            console.log(`this error occur in auth.js::login: the error is =>${error.message}`)
           
        }
     }

     async logout(userId) {
            try {
                return await this.account.deleteSessions(userId)
            } catch (error) {
                console.log(`this error occur in auth.js::deleteuser : the error is =>${error.message}`)
              
            }
     }

     async getUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log(`this error occur in auth.js::getuser : the error is =>${error.message}`)
            
        }
     }

     async forgotPassword({email}){
        try {
            return await this. account.createRecovery(email, 'https://yourwebsite.com/recover');
            //i have to change it later the url of the recovery section
        } catch (error) {
            console.log(`this error occur in auth.js::forgotpassword : the error is =>${error.message}`)
                
        }

     }
     async resetPassword({userId,secretkey,password,reppassword}){
        try {
            return await this.account.updateRecovery(userId, secretkey, password, reppassword);
        } catch (error) {
            console.log(`this error occur in auth.js::resetpassword : the error is =>${error.message}`)
               
            
        }


     }

     async updateEmail({userId,email}){
        try {
            return await this.account.updateEmail(userId, email)
        } catch (error) {
            console.log(`this error occur in auth.js::updateEmail : the error is =>${error.message}`)
                
        }
     }
    async updateName({name}){
        try {
            return await this.account.updateName(name)
        } catch (error) {
            console.log(`this error occur in auth.js::updateName : the error is =>${error.message}`)
                
        }
    }
    



}

const authservice=new Authservice();
export default authservice