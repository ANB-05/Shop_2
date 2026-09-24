import { useRef } from "react";
import AboutImage from "../../assets/pic1.jpg";

function AboutUs() {
    const imageRef = useRef<HTMLImageElement>(null);

    const handleMouseMove = (
        e: React.MouseEvent<HTMLDivElement>
    ) => {
        if (!imageRef.current) return;

        const rect = e.currentTarget.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY = ((x - centerX) / centerX) * 5;
        const rotateX = -((y - centerY) / centerY) * 5;

        imageRef.current.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.03)
        `;
    };

    const handleMouseLeave = () => {
        if (!imageRef.current) return;

        imageRef.current.style.transform = `
            perspective(1000px)
            rotateX(0deg)
            rotateY(0deg)
            scale(1)
        `;
    };

    return (
        <section className="py-16">
            <div className="mx-auto max-w-7xl px-4">

                <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">

                    {/* Image */}
                    <div
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        className="overflow-hidden rounded-2xl"
                    >
                        <img
                            ref={imageRef}
                            src={AboutImage}
                            alt="درباره فروشگاه"
                            className="w-full object-cover transition-transform duration-200 ease-out"
                        />
                    </div>

                    {/* Content */}
                    <div className="text-right">

                        <span className="font-semibold text-green-600">
                            درباره ما
                        </span>

                        <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
                            تجربه‌ای متفاوت از خرید آنلاین
                        </h2>

                        <p className="mt-6 text-base leading-8 text-gray-600">
                            ما این فروشگاه را با هدف ایجاد یک تجربه ساده،
                            سریع و مطمئن برای خرید آنلاین ایجاد کرده‌ایم.
                            تلاش می‌کنیم محصولات باکیفیت را با قیمت مناسب
                            در اختیار شما قرار دهیم.
                        </p>

                        <p className="mt-4 text-base leading-8 text-gray-600">
                            رضایت مشتریان برای ما اهمیت زیادی دارد و همیشه
                            تلاش می‌کنیم خدمات خود را بهتر کنیم و تجربه‌ای
                            لذت‌بخش از خرید برای شما ایجاد کنیم.
                        </p>

                        {/* Features */}
                        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">

                            <div className="rounded-xl bg-green-50 p-4">
                                <h3 className="font-bold text-green-700">
                                    کیفیت بالا
                                </h3>

                                <p className="mt-1 text-sm text-gray-600">
                                    ارائه محصولات باکیفیت و قابل اعتماد
                                </p>
                            </div>

                            <div className="rounded-xl bg-green-50 p-4">
                                <h3 className="font-bold text-green-700">
                                    ارسال سریع
                                </h3>

                                <p className="mt-1 text-sm text-gray-600">
                                    ارسال سفارش‌ها در سریع‌ترین زمان ممکن
                                </p>
                            </div>

                            <div className="rounded-xl bg-green-50 p-4">
                                <h3 className="font-bold text-green-700">
                                    قیمت مناسب
                                </h3>

                                <p className="mt-1 text-sm text-gray-600">
                                    قیمت‌گذاری منصفانه برای محصولات
                                </p>
                            </div>

                            <div className="rounded-xl bg-green-50 p-4">
                                <h3 className="font-bold text-green-700">
                                    پشتیبانی
                                </h3>

                                <p className="mt-1 text-sm text-gray-600">
                                    پاسخگویی و پشتیبانی در کنار شما
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;



