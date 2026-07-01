import React from 'react'
import {useForm} from 'react-hook-form'
import {Button, Input, RTE, Select} from '../index'
import appWriteService from '../../appwrite/appwrite'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'

function PostForm({post}) {

    const {register, handleSubmit, watch, setValue, control, getValues} = useForm({
        defaultValues: {
            title: post?.title || "",
            content: post?.content || "",
            status: post?.status || "active",
            category: post?.category || "",
            slug: post?.slug || "",
        }
    });

    const navigate = useNavigate()
    const userData = useSelector(state => state.auth.user)

    const submit = async (data) => {
        if(post) {
            const file = data.image[0] ? appWriteService.uploadFile(data.image[0])  : null

            if(file){
                appWriteService.deleteFile(post.featuredImage)
            }
            const dbPost = await appWriteService.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined,

            })

            if (dbPost){
                navigate(`/post/${dbPost.slug}`)
            } else {
                const file = await appWriteService.uploadFile(data.image[0])
            }

            if(file) {
                const fileId = file.$id
                data.featuredImage = fileId
                const dbPost = await appWriteService.createPost({
                    ...data,
                    uaerId: userData.$id,
                })
                if(dbPost) {
                    navigate(`/post/${dbPost.$id}`)
                }
            }
        }
        
    }

    const slugTransform = useCallback((value) => {
        if(value && typeof value === "string") return  value
            .trim()
            .toLowerCase()
            .replace(/[^a-zA-Z\d\s]+/g, '-')
        
        return  ''
    }, [])

    React.useEffect(() => {
        const subscription = watch((value, {name}) => { 
            if (name === "title"){
                setValue("slug", slugTransform(value.title), {shouldValidate: true})
            }
        })
        return () => {
            subscription.unsubscribe()
        }
    }, [watch, slugTransform, setValue])

  return (
    <div>
      
    </div>
  )
}

export default PostForm
