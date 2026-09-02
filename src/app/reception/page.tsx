"use client";

import { useState } from "react";
import Link from "next/link";

export default function ReceptionPage() {
  const [isAgreed, setIsAgreed] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const isFormValid =
    formData.name.trim().length > 2 &&
    emailRegex.test(formData.email) &&
    formData.topic !== "" &&
    formData.message.trim().length > 5 &&
    isAgreed;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Обращение успешно отправлено!");
    setFormData({
      name: "",
      email: "",
      topic: "",
      message: "",
    });
    setIsAgreed(false);
  };

  const inputStyles =
    "w-full bg-transparent border-b border-brand-dark/30 pb-3 text-brand-dark focus:outline-none focus:border-brand-orange transition-colors placeholder:text-brand-dark/40";

  return (
    <main className="pt-32 pb-20 bg-brand-light">
      <div className="max-w-3xl mx-auto px-4 md:px-6 w-full">
        <h1 className="font-sans font-bold text-4xl md:text-5xl text-brand-dark mb-6">
          Электронная приемная
        </h1>
        <p className="text-brand-dark/80 text-lg mb-12">
          Официальный сервис для подачи электронного обращения, жалобы или
          предложения.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-10">
          <div>
            <input
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              type="text"
              placeholder="Введите ФИО"
              required
              className={inputStyles}
            />
          </div>
          <input
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            type="email"
            required
            placeholder="Введите адрес электронной почты"
            className={inputStyles}
          />
          <div>
            <select
              value={formData.topic}
              onChange={(e) =>
                setFormData({ ...formData, topic: e.target.value })
              }
              className={inputStyles}
              required
            >
              <option value="" disabled className="text-brand-dark/40">
                Выберите тему обращения
              </option>
              <option value="Жалоба">Жалоба</option>
              <option value="Предложение">Предложение</option>
              <option value="Вопрос">Вопрос</option>
            </select>
          </div>

          <textarea
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className={`${inputStyles} resize-none`}
            placeholder="Введите текст обращения"
            rows={5}
            required
          ></textarea>

          <div className="flex items-start gap-4 mt-4">
            <input
              type="checkbox"
              id="fz152"
              required
              checked={isAgreed}
              onChange={(e) => setIsAgreed(e.target.checked)}
              className="mt-1 w-5 h-5 accent-brand-orange cursor-pointer shrink-0"
            />
            <label
              htmlFor="fz152"
              className="text-sm text-brand-dark/70 cursor-pointer select-none"
            >
              Я даю согласие на обработку моих персональных данных в
              соответствии с{" "}
              <Link
                href="/privacy"
                className="text-brand-orange hover:underline"
              >
                Политикой конфиденциальности
              </Link>{" "}
              (ФЗ №152).
            </label>
          </div>

          <button
            type="submit"
            disabled={!isFormValid}
            className={`px-10 py-4 uppercase tracking-widest text-sm font-bold rounded-sm transition-all ${
              isFormValid
                ? "bg-brand-dark text-brand-gold hover:bg-brand-orange hover:text-brand-dark cursor-pointer"
                : "bg-brand-dark/20 text-brand-dark/40 cursor-not-allowed"
            }`}
          >
            Отправить обращение
          </button>
        </form>
      </div>
    </main>
  );
}
