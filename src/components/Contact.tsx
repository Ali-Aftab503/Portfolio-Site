"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { useState } from "react";
import emailjs from "@emailjs/browser";

// Initialize EmailJS
if (typeof window !== "undefined") {
  emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }
      );

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      setError("Failed to send message. Please try again.");
      console.error("Email error:", err);
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
    hover: {
      scale: 1.1,
      color: "#2563eb",
    },
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gray-800 transition-colors"
    >
      <div className="max-w-3xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          Get In Touch
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants}>
            <label className="block text-gray-300 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:border-blue-400 transition"
              placeholder="Your name"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-gray-300 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:border-blue-400 transition"
              placeholder="your.email@example.com"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-gray-300 font-semibold mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 border-2 border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:border-blue-400 transition"
              placeholder="Your message..."
            ></textarea>
          </motion.div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-red-900 text-red-200 rounded-lg text-center"
            >
              {error}
            </motion.div>
          )}

          <motion.button
            type="submit"
            variants={itemVariants}
            disabled={loading}
            whileHover={!loading ? { scale: 1.02 } : {}}
            whileTap={!loading ? { scale: 0.98 } : {}}
            className="w-full px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, linear: true }}
                >
                  ⏳
                </motion.span>
                Sending...
              </span>
            ) : submitted ? (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                ✓ Message Sent!
              </motion.span>
            ) : (
              "Send Message"
            )}
          </motion.button>
        </motion.form>

        <motion.div
          className="mt-12 flex justify-center gap-6 flex-wrap"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* {portfolioData.socials.map((social) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={socialVariants}
              whileHover="hover"
              className="text-blue-400 font-semibold transition"
            >
              {social.name}
            </motion.a>
          ))} */}
        </motion.div>
      </div>
    </section>
  );
}