import React from 'react';
import { useForm } from 'react-hook-form';

const SignUpUser = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match");
    } else {
      alert(JSON.stringify(data, null, 2));
      console.log(data);
    }
  };
 
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name</label>
        <input {...register("firstName", { required: true })} />
        {errors.firstName && <span>This field is required</span>}
      </div>
      <div>
        <label>Last Name</label>
        <input {...register("lastName", { required: true })} />
        {errors.lastName && <span>This field is required</span>}
      </div>
      <div>
        <label>Username</label>
        <input {...register("userName", { required: true })} />
        {errors.userName && <span>This field is required</span>}
      </div>
      <div>
        <label>Email</label>
        <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
        {errors.email && <span>Please enter a valid email</span>}
      </div>
      <div>
        <label>Password</label>
        <input type="password" {...register("password", { required: true })} />
        {errors.password && <span>This field is required</span>}
      </div>
      <div>
        <label>Confirm Password</label>
        <input type="password" {...register("confirmPassword", { required: true })} />
        {errors.confirmPassword && <span>This field is required</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUpUser;
