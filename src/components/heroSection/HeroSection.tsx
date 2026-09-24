import { Link } from "react-router-dom";
import Himg from "../../assets/pic1.jpg";

function HeroSection() {
    return (
        <section className="my-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

            {/* Text */}
            <div className="w-full text-right">
                <h1 className="text-3xl font-bold text-gray-900">
                    خریدی ساده، سریع و مطمئن
                </h1>

                <p className="mt-4 p-3 text-lg leading-8 text-gray-600">
                    هر چیزی که نیاز داری، در یکجا پیدا کن.
                    محصولات موردنظرت را با بهترین قیمت انتخاب کن
                    و تجربه‌ای متفاوت از خرید آنلاین داشته باش.
                </p>
                <div className="mt-5">
                    <Link to='/store' className="mt-10 rounded-xl bg-green-500 px-6 py-3 font-semibold text-white transition hover:bg-green-600">
                    همین حالا خرید کن
                </Link>
                </div>
            </div>

            {/* Image */}
            <div className="w-full">
                <img
                    src={Himg}
                    alt="محصولات فروشگاه"
                    className="w-full rounded-xl object-cover"
                />
            </div>

        </section>
    );
}

export default HeroSection;
