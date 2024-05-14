import {z} from "zod"

export const FormSchema = z.object({
    name:z.string().min(1, "Nome é obrigatório"),
    email:z.string().min(1, "Email é obrigatório").email("Forneça um email"),
    password:z.string().min(8,"Forneça ao mínimo 8 caracteres").regex(/[A-Z]/,"É necessário pelo menos uma letra maiúscula").regex(/[a-z]/,"É necessário pelo menos uma letra minúscula").regex(/[0-9]/,"É necessário pelo menos um número"),
    confirmPassword:z.string().min(1,"Esse campo é obrigatório"),
    bio:z.string().min(1,"Forneça uma bio"),
    contact:z.string().min(1,"Forneça um contato"),
    course_module:z.string().min(1,"Escolha um módulo"),
}).refine(({password,confirmPassword}) => password===confirmPassword,{
    message:"Senhas não correspondem",
    path:["confirmPassword"],
})
