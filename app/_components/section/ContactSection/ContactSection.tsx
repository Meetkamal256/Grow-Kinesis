"use client";
import { useState } from "react";
import styles from "./ContactSection.module.css";
import Image from "next/image";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // success or error
  const [fadeOut, setFadeOut] = useState(false);

  // Regex for stricter validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nameRegex = /^[a-zA-Z' ]+$/; // Allows alphabets, spaces, and apostrophes
  const phoneRegex = /^[+]?[0-9]{10,15}$/; // Allows phone numbers with optional "+" and 10-15 digits

  // Handle form inputs
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error when user starts typing
  };

  // Validate form fields before submission
  const validateForm = () => {
    let valid = true;
    const newErrors = { name: "", email: "", phone: "" };

    // Check for empty fields or fields containing only whitespace
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
      valid = false;
    } else if (!nameRegex.test(formData.name)) {
      newErrors.name =
        "Please enter a valid name (letters, spaces, and apostrophes only).";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      valid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
      valid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number (10-15 digits).";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");
    setFadeOut(false);

    // Validate form data before submitting
    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }
    
    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setMessage("You have successfully joined the waitlist!");
        setMessageType("success");
        setFormData({ name: "", email: "", phone: "" }); // Clear the form
      } else {
        setMessage(
          "There was an issue submitting your form. Please try again."
        );
        setMessageType("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setMessage("An unexpected error occurred. Please try again.");
      setMessageType("error");
    } finally {
      setIsSubmitting(false);

      // Start the fade-out process after 5 seconds
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          setMessage("");
        }, 500);
      }, 5000);
    }
  };

  return (
    <section>
      <div className={styles.contactSection}>
        <div className={styles.contactLeft}>
          <h2 className={styles.title}>Ready to Transform?</h2>
          <p className={styles.description}>
            Don’t wait another day to start your journey. Join our waiting list
            and get notified <strong>IMMEDIATELY</strong> when our app launches.
          </p>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Kindly type your name"
              className={styles.input}
              value={formData.name}
              onChange={handleInputChange}
            />
            {errors.name && (
              <span className={styles.inputError}>{errors.name}</span>
            )}

            <input
              type="email"
              name="email"
              placeholder="Kindly type your email address"
              className={styles.input}
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && (
              <span className={styles.inputError}>{errors.email}</span>
            )}

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className={styles.input}
              value={formData.phone}
              onChange={handleInputChange}
            />
            {errors.phone && (
              <span className={styles.inputError}>{errors.phone}</span>
            )}

            <button
              className={styles.button}
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Join The Waitlist"}
            </button>
          </form>

          {/* Display success or error message */}
          {message && (
            <p
              className={`${styles.message} ${
                messageType === "success" ? styles.success : styles.error
              } ${fadeOut ? styles.fadeOut : ""}`}
            >
              {message}
            </p>
          )}
        </div>
        <div className={styles.contactRight}>
          <Image
            src="/images/contactimage.png"
            alt="contact-img"
            width={1138}
            height={664}
            className={styles.contactImage}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
