import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const res = await axios.post(
      "https://win24-assignment.azurewebsites.net/api/forms/contact",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (res.status === 200) {
      setSubmitted(true);
      reset();
    }
  };

  const handleOk = () => {
    setSubmitted(false);
    reset();
  };

  if (submitted) {
    return (
      <div className="contactForm infobox">
        <p className="h1">Thank you for your message!</p>
        <p className="h2">We will contact you as soon as we can.</p>
        <button className="btn btn-primary" onClick={handleOk}>
          OK
        </button>
      </div>
    );
  }

  return (
    <section>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="contactForm"
      >
        <p className="h2">Get Online Consultation</p>

        <label className="contactLabel" htmlFor="fullName">
          Full Name{" "}
        </label>
        <input
          type="text"
          placeholder="Name"
          className="contactFormText"
          {...register("fullName", {
            required: "The name field is required",
            minLength: {
              value: 2,
              message: "Name to short",
            },
          })}
        />
        <span>{errors.fullName && errors.fullName.message}</span>

        <label className="contactLabel" htmlFor="email">
          Email
        </label>
        <input
          type="text"
          placeholder="Email"
          className="contactFormText"
          {...register("email", {
            required: "Enter a valid Email",
            pattern: {
              value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
              message: "Enter a valid email",
            },
          })}
        />
        <span>{errors.email && errors.email.message}</span>

        <label className="contactLabel" htmlFor="specialist">
          Specialist
        </label>
        <select
          className="contactFormText"
          {...register("specialist", {
            required: {
              value: true,
              message: "The specialist field is required",
            },
          })}
        >
          <option value="">Select...</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
        <span>{errors.specialist && errors.specialist.message}</span>

        <button type="submit" className="btn btn-primary btn-contact">
          {" "}
          Make an appointment
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
