import { useForm } from 'react-hook-form';

const SignUpReactHookForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const password = watch("password");
    return (
        <form>
            <h2>SignUp React Hook Form</h2>
            <input type="text" placeholder="Enter your name" name="name" {...register("name", { 
                required: "Name is required",
                minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters"
                } 
                })} />
            <p>{ errors?.name?.message }</p>

            <input type="email" placeholder="Enter your email" name="email" {...register("email", { 
                required: "Email is required",
                pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address"
                }  
                })} />
            <p>{ errors?.email?.message }</p>

            <input type="number" placeholder="Enter your age" name="age" {...register("age", { 
                required: "Age is required",
                min: {
                    value: 18,
                    message: "You must be at least 18 years old"
                }
            })}/>
            <p>{ errors?.age?.message }</p>

            <input type="password" placeholder="Enter your password" name="password" {...register("password", { 
                required: "Password is required",
                minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters"
                } 
                })} />
            <p>{ errors?.password?.message }</p>

            <input type="password" placeholder="Confirm your password" name="confirmPassword" {...register("confirmPassword", { 
                required: "Please confirm your password",
                validate: (value) => value === password || "Passwords do not match"
            })} />
            <p>{ errors?.confirmPassword?.message }</p>

            <button onClick={handleSubmit((data) => console.log(data))}>Sign Up</button>
        </form>
    );
};

export default SignUpReactHookForm;