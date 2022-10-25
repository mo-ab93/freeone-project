import { useState } from "react";

export default function Contact() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  //   Form validation state
  const [errors, setErrors] = useState({});

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState("Send");

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  // Validation check method
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  //   Handling form submit

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
    }
    console.log(fullname, email, subject, message);
  };

  return (

    <div>
      <div className="relative bg-indigo-800">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
          alt=""
        />
        <div className="absolute inset-0 bg-indigo-800 mix-blend-multiply" aria-hidden="true" />
      </div>
      <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Get in touch</h1>
        <p className="mt-6 max-w-3xl text-xl text-indigo-100">
          Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque lacus nisi urna, arcu sociis eu. Orci vel
          lectus nisl eget eget ut consectetur. Sit justo viverra non adipisicing elit distinctio.
        </p>
      </div>
    </div>


    <form
      onSubmit={handleSubmit}
      className="form rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-white"
    >
      <h1 className="text-2xl font-bold dark:text-[#22A2A3]">Send a message</h1>

      <input
        type="text"
        value={fullname}
        onChange={(e) => {
          setFullname(e.target.value);
        }}
        name="fullname"
        placeholder="Full name"
        className="form-input block w-full rounded-md border mt-5 py-2 px-3 placeholder-gray-400  focus:outline-none focus:rounded-md focus:ring-1 ring-green-500"
      />
      {errors?.fullname && (
        <p className="text-red-500">Full name cannot be empty.</p>
      )}

      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="E-mail"
        className="form-input block w-full rounded-md border mt-5 py-2 px-3 placeholder-gray-400  focus:outline-none focus:rounded-md focus:ring-1 ring-green-500"
      />
      {errors?.email && <p className="text-red-500">Email cannot be empty.</p>}

      <input
        type="text"
        name="subject"
        value={subject}
        onChange={(e) => {
          setSubject(e.target.value);
        }}
        placeholder="Subject"
        className="form-input block w-full rounded-md border mt-5 py-2 px-3 placeholder-gray-400  focus:outline-none focus:rounded-md focus:ring-1 ring-green-500"
      />
      {errors?.subject && (
        <p className="text-red-500">Subject cannot be empty.</p>
      )}

      <textarea
        name="message"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        placeholder="Message"
        className="form-input block w-full rounded-md border mt-5 py-2 px-3 placeholder-gray-400  focus:outline-none focus:rounded-md focus:ring-1 ring-green-500"
      ></textarea>
      {errors?.message && (
        <p className="text-red-500">Message body cannot be empty.</p>
      )}
      <div className="flex flex-row items-center justify-start">
        <button
          type="submit"
          className="text-white bg-[#E60D51] hover:bg-[#22A2A3] focus:outline-none focus:ring-1 focus:ring-[#E60D51] font-medium rounded-md text-sm mt-5 px-5 py-2.5 text-center mb-2 dark:bg-[#E60D51] dark:hover:bg-[#22A2A3] dark:focus:ring-[#E60D51]"
        >
          {buttonText}
        </button>
      </div>
      <div className="text-left">
        {showSuccessMessage && (
          <p className="text-green-500 font-semibold text-sm my-2">
            Thankyou! Your Message has been delivered.
          </p>
        )}
        {showFailureMessage && (
          <p className="text-red-500">
            Oops! Something went wrong, please try again.
          </p>
        )}
      </div>
    </form>

    </div>
    
    
  );
}
