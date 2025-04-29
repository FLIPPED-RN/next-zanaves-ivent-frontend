'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

import { Loader2 } from "lucide-react"

import { toast } from 'sonner'
 
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Имя должно содержать минимум 2 символа",
  }).max(50, {
    message: "Имя не должно превышать 50 символов"
  }),

  phone: z.string()
    .min(9, {message: "Номер телефона слишком короткий"})
    .max(13, { message: "Номер телефона слишком длинный" })
    .regex(/^(\+7|8)[\d\- ]{9,12}$/, { message: "Введите российский номер" }),

  description: z.string()
    .max(500, {message: "Описание привышает 500 символов"})
})

export default function UserForm(){

    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          phone: "",
          description: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true)

        try {
            const message = `📌 Новая заявка:\n\n👤 Имя: ${values.name}\n📞 Телефон: ${values.phone}\n📝 Описание: ${values.description || 'Не указано'}`

            const response = await fetch('/api/send-to-telegram', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  message,
                }),
            })

            if (!response.ok) throw new Error('Ошибка отправки')
                
                toast.success('Заявка отправлена!', {
                    description: 'Мы свяжемся с вами в ближайшее время',
                  })
                  form.reset()

        } catch (error) {
            toast.error('Ошибка', {
                description: 'Не удалось отправить заявку. Попробуйте позже.',
            })
        } finally{
            setIsLoading(false)
        }
    }

    return(
        <div className="max-w-[1000px] border border-amber-300 rounded-lg p-7 w-full">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Как вас зовут?</FormLabel>
                            <FormControl>
                                <Input placeholder="Артемий Сибиряков" {...field} />
                            </FormControl>
                            <FormMessage />

                            {/* описание под формой */}
                            {/* <FormDescription>
                                This is your public display name.
                            </FormDescription> */}
                        </FormItem>
                    )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Ваш номер телефона</FormLabel>
                            <FormControl>
                                <Input placeholder="8911..." {...field} />
                            </FormControl>
                            <FormMessage />

                            {/* описание под формой */}
                            {/* <FormDescription>
                                This is your public display name.
                            </FormDescription> */}
                        </FormItem>
                    )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Краткое описание</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Расскажите чтобы вы хотели организовать в клубе..." {...field}/>
                            </FormControl>
                            <FormMessage />

                            {/* описание под формой */}
                            {/* <FormDescription>
                                This is your public display name.
                            </FormDescription> */}
                        </FormItem>
                    )}
                    />
                    <Button 
                        type="submit" 
                        disabled={isLoading}
                        className="flex mx-auto w-full max-w-[250px] h-10"
                    >
                        {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Отправка...
                        </>
                        ) : 'Отправить заявку'}
                    </Button>
                </form>
            </Form>
        </div>
    )
}