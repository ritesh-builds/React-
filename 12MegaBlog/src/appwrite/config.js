import conf from '../conf/conf';
import { Client, ID, Databases, Storage, Query } from "appwrite";

// Service class...

export class Service {

    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
                .setEndpoint(conf.appWriteUrl)
                .setProject(conf.appWriteProjectId)
        
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

// Create the post from here...

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            );
        } catch (error) {
            console.error(`Appwrite service :: createPost :: error ${error}`)
        }

    }

    // update the post from here...

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            ) 
        } catch (error) {
            console.error(`Appwrite service :: updatePost :: error ${error}`)
        }
    }

    // delete the post from here...

    async deletePost(){
        try {
            await this.databases.deleteDocument(
            conf.appWriteDatabaseId,
            conf.appWriteCollectionId,
            slug
            )

            return true;
        } catch (error) {
            console.error(`Appwrite service :: deletePost :: error ${error}`)
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug
            )
        } catch (error) {
            console.error(`Appwrite service :: getPost :: error ${error}`)
            return false
        }
    }

    // get all the posts...

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return this.databases.listDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                queries,
                100,
                0,

            )
        } catch (error) {
            console.error(`Appwrite service :: getPosts :: error ${error}`)
            return false
        }
    }

    // image file upload service...

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appWriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.error(`Appwrite service :: uploadFile :: error ${error}`)
            return false
            
        }
    }

// delete the image file...

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appWriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.error(`Appwrite service :: deleteFile :: error ${error}`)
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appWriteBucketId,
            fileId
        )
    }

}

const service = new Service

export default service