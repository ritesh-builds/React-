import React from 'react'
import {Editor} from '@tinymce/tinymce-react'
import {contrtoler} from 'react-hook-form'

// RTE Real time editor...
export default function RTE({name, control, label, placeholder,defaultValue = ""}) {
  return (
    <div className='w-full'> 
    {label && <label className='inline-block mb-1 pl-1 '>{label}</label>}
    <Controller 
       name={name || content}
       control={control}
       render={({field: {onChange}}) => (
        <Editor
      initialValue="default value"
      init={
        {
          initialValue: defaultValue,
          menubar: true,
          branding: false,
          height: 500,
          plugins: [
              "advlist",
              "autolink",
              "lists",
              "link",
              "image",
              "charmap",
              "preview",
              "anchor",
              "searchreplace",
              "visualblocks",
              "code",
              "fullscreen",
              "insertdatetime",
              "media",
              "table",
              "paste",
              "help",
              "wordcount",
              "codesample",
              "emoticons",
              "autosave",
              "quickbars",
              "directionality"
        ],
         toolbar:
              "undo redo | blocks | " +
              "bold italic underline strikethrough | " +
              "forecolor backcolor | " +
              "alignleft aligncenter alignright alignjustify | " +
              "bullist numlist outdent indent | " +
              "link image media | " +
              "codesample code | " +
              "removeformat | fullscreen preview | help",
              content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          
        }
      }
      onEditorChange={onChange}
    />
    )}
    />
    </div>
  )
}

 
