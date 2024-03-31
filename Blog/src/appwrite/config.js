import { ID,Client,Databases,Storage ,Query} from "appwrite";
import conf from "../conf/conf";

class Service{
    clint=new Client();
     databases;
    bucket;//nothing but a storage
    constructor(){
        this.clint
        .setEndpoint(conf.appwriteUrl) // Your API Endpoint
        .setProject(conf.appwriteProjectId)        // Your project ID

        this. databases=new Databases(this.clint)
        this.bucket=new Storage(this.clint)
    }
    //document id is the "slug"
    async createPost({slug,title,content,image, status}){
        try {
            return await this. databases.createDocument(
                conf.appwriteCollectionId,
                conf.appwriteDatabaseId,
                slug,
                {
                    title,
                    content,
                    image,
                    status,
                    
                })
        } catch (error) {
            console.log(`this error occur in config.js::createPost: the error is =>${error.message}`)
            throw error
        }
    }

    async updatePost(slug,{title,content,image,status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    image,
                    status,

                }
            )
        } catch (error) {
            console.log(`this error occur in config.js::updatepost: the error is =>${error.message}`)
            throw error
        }
    }
    async deletepost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            
            )
            return true
            
        } catch (error) {
            console.log(`this error occur in config.js::deletepost: the error is =>${error.message}`)
            throw error
            return false
        }
    }
    async getpost(){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            
            )
        } catch (error) {
            console.log(`this error occur in config.js::getpost: the error is =>${error.message}`)
            throw error
            return false
        }
    }
    async getposts(queries){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries=[Query.equal("status","publish")],
                

            )
            
        } catch (error) {
            console.log(`this error occur in config.js::getposts: the error is =>${error.message}`)
            throw error
        }
    }
    ///file path
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }


}
const service=new Service();
export default service