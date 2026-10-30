import ContactImage from "../../assets/contact-us.png";

function ContactUs() {
    return (
        <section className="py-16">
            <div className="mx-auto max-w-7xl px-4">

                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

                    {/* Form */}
                    <div className="text-left">
                        <span className="font-semibold text-green-600">
                            Contact Us
                        </span>

                        <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
                            Get in Touch with Us
                        </h1>

                        <p className="mt-4 leading-8 text-gray-600">
                            If you have any questions, suggestions, or feedback,
                            please reach out to us using the form below.
                            Your message will be reviewed as soon as possible.
                        </p>

                        <form className="mt-8 space-y-5">

                            {/* Name */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="mb-2 block font-medium text-gray-700"
                                >
                                    Name
                                </label>

                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-left outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block font-medium text-gray-700"
                                >
                                    Email
                                </label>

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="example@email.com"
                                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-left outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
                                />
                            </div>

                            {/* Subject */}
                            <div>
                                <label
                                    htmlFor="subject"
                                    className="mb-2 block font-medium text-gray-700"
                                >
                                    Subject
                                </label>

                                <select
                                    id="subject"
                                    name="subject"
                                    defaultValue=""
                                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-left text-gray-700 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
                                >
                                    <option value="" disabled>
                                        Select a subject
                                    </option>

                                    <option value="order">
                                        Order Issue
                                    </option>

                                    <option value="tracking">
                                        Order Tracking
                                    </option>

                                    <option value="payment">
                                        Payment Issue
                                    </option>

                                    <option value="return">
                                        Return Request
                                    </option>

                                    <option value="suggestion">
                                        Suggestion
                                    </option>

                                    <option value="complaint">
                                        Complaint
                                    </option>

                                    <option value="other">
                                        Other
                                    </option>
                                </select>
                            </div>

                            {/* Message */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="mb-2 block font-medium text-gray-700"
                                >
                                    Message
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    placeholder="Write your message here..."
                                    className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 text-left outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
                                />
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full rounded-xl bg-green-500 px-6 py-3 font-semibold text-white transition hover:bg-green-600"
                            >
                                Send Message
                            </button>

                        </form>
                    </div>

                    {/* Image */}
                    <div className="hidden justify-center lg:flex">
                        <img
                            src={ContactImage}
                            alt="Contact Us"
                            className="w-full max-w-md"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}

export default ContactUs;
