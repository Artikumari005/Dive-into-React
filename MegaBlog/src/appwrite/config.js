import conf from "../conf";
import {Client , ID ,Databases, Storage,Query } from "appwrite";

export class Service{
    Client = new Client();
    databases;
    bucket;
    constructor(){
        this.Client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId); 
        this.databases= new Databases(this.Client);
        this.bucket= new Storage(this.Client);
    }
    async createPost({title, slug , content, featuredImage, status,
         userId}){
            try{
                return await this.databases.createDocument(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    slug,{
                        title, slug, content, featuredImage, status,
                        userId,
                    }
                )

            }catch(error){
                throw error;
            }
         }
    async updatePost(slug , {title, content, featuredImage, status,
         }){
            try{
                return await this.databases.updatePost(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    slug,
                    {
                        title, content, featuredImage, status
                    }
                )

            }catch(error){
                throw error;
            }
         }
    async deletePost(slug){
            try{
               await this.databases.deleteDocument(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    slug
                )
                return true;

            }catch(error){
                throw error;
                return false;
            }
         }
         async getPost(slug){
            try{
                return await this.databases.getDocumenrt(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    slug
                )

            }catch(error){
                throw error;
                return false;
            }
         }
}




const services =  new Service();
export default Service;