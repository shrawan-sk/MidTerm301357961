
import React from 'react';
import { useForm } from 'react-hook-form';
import './SignUpUser.css';

const SignUpUser = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    alert(JSON.stringify(data, null, 2));
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="sign-up-user-form">
      <input {...register('firstName', { required: true })} placeholder="First Name" />
      {errors.firstName && <span>This field is required</span>}
      <input {...register('lastName', { required: true })} placeholder="Last Name" />
      {errors.lastName && <span>This field is required</span>}
      <input {...register('userName', { required: true })} placeholder="Username" />
      {errors.userName && <span>This field is required</span>}
      <input {...register('email', { required: true, pattern: /^\S+@\S+$/i })} placeholder="Email" />
      {errors.email && <span>Invalid email address</span>}
      <input {...register('password', { required: true })} type="password" placeholder="Password" />
      {errors.password && <span>This field is required</span>}
      <input {...register('confirmPassword', { required: true })} type="password" placeholder="Confirm Password" />
      {errors.confirmPassword && <span>This field is required</span>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUpUser;
