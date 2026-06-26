// pages/Contact.tsx
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Icon from "../components/ui/Icon";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

interface IContactForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  agree: boolean;
}

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<IContactForm>();

  const onSubmit = async (data: IContactForm) => {
    setIsSubmitting(true);
    try {
      console.log("📤 Xabar yuborilmoqda:", data);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success("Xabaringiz muvaffaqiyatli yuborildi!");
      form.reset();
    } catch (error) {
      toast.error("Xatolik yuz berdi, qayta urinib ko'ring");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900">
            Biz bilan bog'laning
          </h1>
          <p className="text-slate-500 mt-3 max-w-2xl mx-auto">
            Savollaringiz bormi? Bepul konsultatsiya olishni xohlaysizmi? Bizga
            yozing — javob beramiz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Xabar yuborish
              </h2>
              <p className="text-slate-500 text-sm mb-6">
                24 soat ichida javob beramiz.
              </p>

              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    form={form}
                    name="firstName"
                    label="Ism"
                    placeholder="Aziz"
                    rules={{ required: "Ism majburiy" }}
                  />
                  <Input
                    form={form}
                    name="lastName"
                    label="Familiya"
                    placeholder="Karimov"
                    rules={{ required: "Familiya majburiy" }}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    form={form}
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="aziz@example.uz"
                    leftIcon={<Icon.mail className="h-4 w-4 text-slate-400" />}
                    rules={{
                      required: "Email majburiy",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Noto'g'ri email format",
                      },
                    }}
                  />
                  <Input
                    form={form}
                    name="phone"
                    label="Telefon"
                    type="tel"
                    placeholder="+998 90 123 45 67"
                    leftIcon={<Icon.phone className="h-4 w-4 text-slate-400" />}
                    rules={{ required: "Telefon majburiy" }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Mavzu <span className="text-red-500">*</span>
                  </label>
                  <select
                    {...form.register("subject", { required: "Mavzu tanlang" })}
                    className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition bg-white"
                  >
                    <option value="">Mavzuni tanlang</option>
                    <option value="kurs">Kurs haqida ma'lumot</option>
                    <option value="ro'yxatdan o'tish">Ro'yxatdan o'tish</option>
                    <option value="to'lov">To'lov masalalari</option>
                    <option value="hamkorlik">Hamkorlik</option>
                    <option value="boshqa">Boshqa</option>
                  </select>
                  {form.formState.errors.subject && (
                    <span className="text-xs text-red-500">
                      {form.formState.errors.subject.message as string}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Xabar <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    {...form.register("message", {
                      required: "Xabar majburiy",
                    })}
                    rows={5}
                    placeholder="Xabaringizni shu yerda yozing..."
                    className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition resize-none"
                  />
                  <p className="text-xs text-slate-400 mt-1.5">
                    Iltimos, savolingizni iloji boricha aniq yozing.
                  </p>
                  {form.formState.errors.message && (
                    <span className="text-xs text-red-500">
                      {form.formState.errors.message.message as string}
                    </span>
                  )}
                </div>

                <div className="flex items-start gap-2.5">
                  <input
                    type="checkbox"
                    {...form.register("agree", {
                      required: "Rozilik majburiy",
                    })}
                    className="h-4 w-4 mt-0.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label className="text-sm text-slate-600">
                    Foydalanish shartlari va shaxsiy ma'lumotlarni qayta
                    ishlashga roziman.
                  </label>
                </div>
                {form.formState.errors.agree && (
                  <span className="text-xs text-red-500">
                    {form.formState.errors.agree.message as string}
                  </span>
                )}

                <Button
                  type="submit"
                  loading={isSubmitting}
                  className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition flex items-center justify-center gap-2"
                  rightIcon={<Icon.send className="h-4 w-4" />}
                >
                  {isSubmitting ? "Yuborilmoqda..." : "Xabarni yuborish"}
                </Button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sticky top-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Bog'lanish ma'lumotlari
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon.location className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-700">Manzil</p>
                    <p className="text-sm text-slate-500">
                      Amir Temur ko'chasi 108-uy,
                      <br />
                      Toshkent, O'zbekiston
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon.phone className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-700">Telefon</p>
                    <p className="text-sm text-slate-500">+998 71 123 45 67</p>
                    <p className="text-sm text-slate-500">+998 90 123 45 67</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon.mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-700">Email</p>
                    <p className="text-sm text-slate-500">info@oquv.uz</p>
                    <p className="text-sm text-slate-500">support@oquv.uz</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon.clock className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-700">Ish vaqti</p>
                    <p className="text-sm text-slate-500">
                      Du-Ju: 09:00 — 19:00
                    </p>
                    <p className="text-sm text-slate-500">Sha: 10:00 — 16:00</p>
                    <p className="text-sm text-slate-500">
                      Yakshanba: dam olish kuni
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <p className="font-medium text-slate-700 mb-4">
                  Ijtimoiy tarmoqlarda
                </p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-blue-50 hover:text-blue-600 transition"
                  >
                    <Icon.telegram className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-blue-50 hover:text-blue-600 transition"
                  >
                    <Icon.instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-blue-50 hover:text-blue-600 transition"
                  >
                    <Icon.youtube className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-blue-50 hover:text-blue-600 transition"
                  >
                    <Icon.facebook className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
