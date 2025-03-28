 'use client'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link"
import { useForm } from "react-hook-form";
import { SignupFormSchema, SignupFormValues } from '@/lib/definitions'
import { signup } from '@/app/actions/auth'
import { toast } from "sonner"
import { useRouter } from "next/navigation"
export function SignupForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {

  const form = useForm<SignupFormValues>({
    resolver: zodResolver(SignupFormSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    }
  });
  const router = useRouter()

  const onSubmit = async (data: SignupFormValues) => {
    try {
      const result = await signup(data);
  
      if (result.errors) {
        // Show validation errors
        Object.entries(result.errors).forEach(([field, messages]) => {
          form.setError(field as keyof SignupFormValues, {
            type: 'manual',
            message: messages.join(', '),
          });
        });
        return;
      }
      
      router.push('/admin')
      // Success toast
      toast.success(result.message || 'Signup successful!');
  
    } catch (error) { 
      toast.error('Something went wrong! Please try again later.');
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Create an Account</CardTitle>
          <CardDescription>
            Enter your email and password to get started.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="m@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Sign Up
              </Button>
            </form>
          </Form>
          <div className="mt-4 text-center text-sm">
            
            <Link href="/admin/dashboard" className="cursor-pointer underline underline-offset-4">
              Go Back To Dashboard
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
