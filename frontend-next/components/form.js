import { useState } from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function Form() {

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
      const res = await fetch("../pages/api/sendgrid", {
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
      <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
            <div className="mx-auto max-w-lg lg:max-w-none">
              <form
                onSubmit={handleSubmit}
                className="form rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-white"
              >
                <h1 className="text-2xl font-bold dark:text-[#22A2A3]">
                  Send a message
                </h1>

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
                {errors?.email && (
                  <p className="text-red-500">Email cannot be empty.</p>
                )}

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
          </div>
    </div>
  )
}
