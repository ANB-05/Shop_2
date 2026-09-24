import ContactImage from "../../assets/contact-us.png";

function ContactUs() {
    return (
        <section className="py-16">
            <div className="mx-auto max-w-7xl px-4">

                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

                    {/* SVG */}
                    <div className="flex justify-center max-[699px]:hidden">
                        <img
                            src={ContactImage}
                            alt="ارتباط با ما"
                            className="w-full max-w-md"
                        />
                    </div>

                    {/* Form */}
                    <div className="text-right">
                        <span className="font-semibold text-green-600">
                            ارتباط با ما
                        </span>

                        <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
                            با ما در ارتباط باشید
                        </h1>

                        <p className="mt-4 leading-8 text-gray-600">
                            اگر سوال، پیشنهاد یا انتقادی دارید، از طریق فرم زیر
                            با ما در ارتباط باشید. پیام شما در سریع‌ترین زمان
                            ممکن بررسی خواهد شد.
                        </p>

                        <form className="mt-8 space-y-5">

                            {/* Name */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="mb-2 block font-medium text-gray-700"
                                >
                                    نام و نام خانوادگی
                                </label>

                                <input
                                    id="name"
                                    type="text"
                                    placeholder="نام خود را وارد کنید"
                                    className="w-full text-right rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block font-medium text-gray-700"
                                >
                                    ایمیل
                                </label>

                                <input
                                    id="email"
                                    type="email"
                                    placeholder="example@email.com"
                                    className="w-full text-right rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
                                />
                            </div>

                            {/* Subject */}
                            

                            <div>
                                <label
                                    htmlFor="subject"
                                    className="mb-2 block font-medium text-gray-700"
                                >
                                    موضوع
                                </label>

                                <select
                                    id="subject"
                                    defaultValue=""
                                    className="w-full text-right rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-700 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
                                >
                                    <option value="" disabled>
                                        موضوع مورد نظر را انتخاب کنید
                                    </option>

                                    <option value="order">
                                        مشکل در سفارش
                                    </option>

                                    <option value="tracking">
                                        پیگیری سفارش
                                    </option>

                                    <option value="payment">
                                        مشکل پرداخت
                                    </option>

                                    <option value="return">
                                        درخواست مرجوعی
                                    </option>

                                    <option value="suggestion">
                                        پیشنهاد
                                    </option>

                                    <option value="complaint">
                                        انتقاد
                                    </option>

                                    <option value="other">
                                        سایر موارد
                                    </option>
                                </select>
                            </div>

                            {/* Message */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="mb-2 block font-medium text-gray-700"
                                >
                                    پیام
                                </label>

                                <textarea
                                    id="message"
                                    rows={5}
                                    placeholder="پیام خود را بنویسید..."
                                    className="w-full text-right resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
                                />
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full rounded-xl bg-green-500 px-6 py-3 font-semibold text-white transition hover:bg-green-600"
                            >
                                ارسال پیام
                            </button>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default ContactUs;

