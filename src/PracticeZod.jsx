import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const signupSchema = z.object({
    name: z.string().min(3).max(15),
    email: z.string().email(),
    age: z.number().min(18).max(70),
    password: z.string().min(6).max(20),
    confirmPassword: z.string().min(6).max(20)

    .refine((data) => data.password === data.confirmPassword, {
        message: "Password do not match",
        path: ["confirmPassword"]
    })
})

const PracticeZod = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(signupSchema) });
  return (
    <div>
      <h2>PracticeZod</h2>
      <form>
        <input type="text" name="name" placeholder="Enter your name" {...register("name")}/>
        <p>{ errors?.name?.message}</p>

        <input type="email" name="email" placeholder="Enter your email" {...register("email")}/>
        <p>{ errors?.email?.message}</p>

        <input type="number" name="age" placeholder="Enter your age" {...register("age", { valueAsNumber: true })}/>
        <p>{ errors?.age?.message}</p>

        <input type="password" name="password" placeholder="Enter your password" {...register("password")}/>
        <p>{ errors?.password?.message}</p>

        <input type="password" name="confirmPassword" placeholder="Confirm your password" {...register("confirmPassword")}/>
        <p>{ errors?.confirmPassword?.message}</p>

        <button onClick={handleSubmit((data) => console.log(data))}> Sign Up </button>

      </form>
    </div>
  );
};

export default PracticeZod;