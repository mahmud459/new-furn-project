
import styles from '../../pages/pages.module.css'
import React, { useState } from "react";
import { useComments } from "../../HomePage/context/CommentsContext";

function ReviewForm({ productId , form_name = "post a comment", }) {
  const { addCommentToProduct } = useComments();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "الاسم مطلوب";
    if (!formData.email.trim()) newErrors.email = "الإيميل مطلوب";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "الإيميل غير صالح";
    if (!formData.message.trim()) newErrors.message = "الرسالة مطلوبة";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});

      // تحضير تعليق جديد
      const newComment = {
        id: Date.now(),
        name: formData.name || "Anonymous User",
        email: formData.email,
        number: formData.number,
        message: formData.message,
        date: new Date().toLocaleString(),
        img: formData.img || "/default-user-image.png", 
      };

      // إضافة التعليق للمنتج عبر الـ context
      addCommentToProduct(productId, newComment);

      // تنظيف الحقول
      setFormData({ name: "", email: "", number: "", message: "" });
    }
  };

  return (
    <div className="review_box">
      <h4 className='mb-4 mt-0'>{form_name}</h4>
      <form className="row g-3" onSubmit={handleSubmit} noValidate>
        <div className="col-12">
          <input
            type="text"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            id="name"
            name="name"
            placeholder="Your Full name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        <div className="col-12">
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            id="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        <div className="col-12">
          <input
            type="tel"
            className="form-control"
            id="number"
            name="number"
            placeholder="Phone Number"
            value={formData.number}
            onChange={handleChange}
          />
        </div>

        <div className="col-12">
          <textarea
            className={`form-control ${errors.message ? "is-invalid" : ""}`}
            id="message"
            name="message"
            rows="3"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <div className="invalid-feedback">{errors.message}</div>}
        </div>

        <div className="col-12 text-end">
          <button type="submit" className={styles.supmet_button}>
            Submit Now
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
