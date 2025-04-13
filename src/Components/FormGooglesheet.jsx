import React from "react";
import { Formik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function FormGooglesheet() {
  // Function to submit form data to Google Sheets
  const submitToGoogleSheet = async (values) => {
    try {
      const GOOGLE_SHEET_URL =
        "https://script.google.com/macros/s/AKfycbxjA2ACs1-x2ix5xj0CEG_yep71emsynD_DAIOLkPeQFXrSH0iTOm6hZbhfLYaP8WuL/exec";

      const response = await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors", // Important for cross-origin requests
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.floating_email,
          name: values.floating_first_name,
          phone: values.floating_phone,
          message: values.floating_message,
          timestamp: new Date().toString(),
        }),
      });

      // Since we're using no-cors, we can't actually read the response
      // We'll assume success if no error is thrown
      return true;
    } catch (error) {
      console.error("Error submitting to Google Sheet:", error);
      return false;
    }
  };

  return (
    <div id="contact" className="bg-gray-50 py-5 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 ">
            Contact Us
          </h2>
        </div>

        <div className="max-w-3xl mx-auto  rounded-lg shadow-md p-6 md:p-10">
          <Formik
            initialValues={{
              floating_email: "",
              floating_first_name: "",
              floating_phone: "",
              floating_message: "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values.floating_email) {
                errors.floating_email = "Email is required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                  values.floating_email
                )
              ) {
                errors.floating_email = "Invalid email address";
              }

              if (!values.floating_first_name) {
                errors.floating_first_name = "Name is required";
              }

              if (!values.floating_phone) {
                errors.floating_phone = "Phone number is required";
              } else if (!/^\d{8,}$/.test(values.floating_phone)) {
                errors.floating_phone =
                  "Phone number must contain at least 8 digits";
              }

              if (!values.floating_message) {
                errors.floating_message = "Message is required";
              }

              return errors;
            }}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              // Submit data to Google Sheet
              const success = await submitToGoogleSheet(values);

              if (success) {
                toast.success(
                  "Thank you for your message! We'll get back to you soon."
                );
                resetForm();
              } else {
                toast.error("Something went wrong. Please try again later.");
              }

              setSubmitting(false);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="relative z-0 w-full group">
                    <input
                      type="text"
                      name="floating_first_name"
                      id="floating_first_name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.floating_first_name}
                      className="block py-2.5 px-0 w-full text-base md:text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-red-600 peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="floating_first_name"
                      className="peer-focus:font-medium absolute text-base md:text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Name
                    </label>
                    {errors.floating_first_name &&
                      touched.floating_first_name && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.floating_first_name}
                        </p>
                      )}
                  </div>

                  {/* Email */}
                  <div className="relative z-0 w-full group">
                    <input
                      type="email"
                      name="floating_email"
                      id="floating_email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.floating_email}
                      className="block py-2.5 px-0 w-full text-base md:text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-red-600 peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="floating_email"
                      className="peer-focus:font-medium absolute text-base md:text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Email address
                    </label>
                    {errors.floating_email && touched.floating_email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.floating_email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone */}
                <div className="relative z-0 w-full group">
                  <input
                    type="tel"
                    name="floating_phone"
                    id="floating_phone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.floating_phone}
                    className="block py-2.5 px-0 w-full text-base md:text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-red-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="floating_phone"
                    className="peer-focus:font-medium absolute text-base md:text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Phone number
                  </label>
                  {errors.floating_phone && touched.floating_phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.floating_phone}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="relative z-0 w-full group">
                  <textarea
                    name="floating_message"
                    id="floating_message"
                    rows="4"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.floating_message}
                    className="block py-2.5 px-0 w-full text-base md:text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-red-600 peer"
                    placeholder=" "
                  ></textarea>
                  <label
                    htmlFor="floating_message"
                    className="peer-focus:font-medium absolute text-base md:text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Message
                  </label>
                  {errors.floating_message && touched.floating_message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.floating_message}
                    </p>
                  )}
                </div>

                <div className="flex justify-start mt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-base px-6 py-3 transition-colors duration-200 ease-in-out"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Submitting...
                      </div>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>

      {/* ToastContainer with better positioning */}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
