import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const signupSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    age: z.coerce.number().min(18, "You must be at least 18 years old"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })

  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const SignUpReactHookForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(signupSchema) });

  return (
    <div>
      <h2>SignUp Zod</h2>

      <input type="text" placeholder="Enter your name" {...register("name")} />
      <p>{errors?.name?.message}</p>

      <input type="email" placeholder="Enter your email" {...register("email")}/>
      <p>{errors?.email?.message}</p>

      <input type="number" placeholder="Enter your age" {...register("age")} />
      <p>{errors?.age?.message}</p>

      <input type="password" placeholder="Enter your password" {...register("password")}/>
      <p>{errors?.password?.message}</p>

      <input type="password" placeholder="Confirm your password" {...register("confirmPassword")}/>
      <p>{errors?.confirmPassword?.message}</p>

      <button onClick={handleSubmit((data) => console.log(data))}> Sign Up </button>
    </div>
  );
};

export default SignUpReactHookForm 