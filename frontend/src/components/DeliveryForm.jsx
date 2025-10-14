import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Yup validation schema
const DeliverySchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9+()\s-]{7,}$/, "Invalid phone number")
    .required("Phone number is required"),
  address: Yup.object().shape({
    street: Yup.string().required("Street is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    zipCode: Yup.string().required("Zip code is required"),
    country: Yup.string().required("Country is required"),
  }),
});

const DeliveryForm = ({ deliveryInfo, setDeliveryInfo, formikRef }) => {
  return (
    <Formik
      innerRef={formikRef} // 👈 lets parent trigger validation
      initialValues={deliveryInfo}
      validationSchema={DeliverySchema}
      enableReinitialize
      onSubmit={(values) => setDeliveryInfo(values)} // no form submit, just sync
    >
      {({ errors, touched }) => (
        <Form
          className="grid grid-cols-1 xl:grid-cols-2 gap-4 text-gray-900"
          noValidate
        >
          {/* First Name */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">First Name</label>
            <Field
              type="text"
              name="firstName"
              placeholder="John"
              className={`border ${
                errors.firstName && touched.firstName
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black`}
            />
            <ErrorMessage name="firstName" component="div" className="text-red-500 text-xs mt-1" />
          </div>

          {/* Last Name */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Last Name</label>
            <Field
              type="text"
              name="lastName"
              placeholder="Doe"
              className={`border ${
                errors.lastName && touched.lastName
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black`}
            />
            <ErrorMessage name="lastName" component="div" className="text-red-500 text-xs mt-1" />
          </div>

          {/* Email */}
          <div className="flex flex-col xl:col-span-2">
            <label className="text-sm font-medium mb-1">Email</label>
            <Field
              type="email"
              name="email"
              placeholder="john.doe@email.com"
              className={`border ${
                errors.email && touched.email
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black`}
            />
            <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
          </div>

          {/* Street */}
          <div className="flex flex-col xl:col-span-2">
            <label className="text-sm font-medium mb-1">Street Address</label>
            <Field
              type="text"
              name="address.street"
              placeholder="123 Main St"
              className={`border ${
                errors.address?.street && touched.address?.street
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black`}
            />
            <ErrorMessage name="address.street" component="div" className="text-red-500 text-xs mt-1" />
          </div>

          {/* City */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">City</label>
            <Field
              type="text"
              name="address.city"
              placeholder="London"
              className={`border ${
                errors.address?.city && touched.address?.city
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black`}
            />
            <ErrorMessage name="address.city" component="div" className="text-red-500 text-xs mt-1" />
          </div>

          {/* State */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">State</label>
            <Field
              type="text"
              name="address.state"
              placeholder="England"
              className={`border ${
                errors.address?.state && touched.address?.state
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black`}
            />
            <ErrorMessage name="address.state" component="div" className="text-red-500 text-xs mt-1" />
          </div>

          {/* Zip */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Zip Code</label>
            <Field
              type="text"
              name="address.zipCode"
              placeholder="EC1A 1BB"
              className={`border ${
                errors.address?.zipCode && touched.address?.zipCode
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black`}
            />
            <ErrorMessage name="address.zipCode" component="div" className="text-red-500 text-xs mt-1" />
          </div>

          {/* Country */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Country</label>
            <Field
              type="text"
              name="address.country"
              placeholder="United Kingdom"
              className={`border ${
                errors.address?.country && touched.address?.country
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black`}
            />
            <ErrorMessage name="address.country" component="div" className="text-red-500 text-xs mt-1" />
          </div>

          {/* Phone */}
          <div className="flex flex-col xl:col-span-2">
            <label className="text-sm font-medium mb-1">Phone</label>
            <Field
              type="tel"
              name="phone"
              placeholder="+44 7123 456789"
              className={`border ${
                errors.phone && touched.phone
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black`}
            />
            <ErrorMessage name="phone" component="div" className="text-red-500 text-xs mt-1" />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default DeliveryForm;

