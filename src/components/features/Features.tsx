function Features() {
    return (
        <section className="mx-auto w-full max-w-7xl px-4 py-10">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

                {/* Box 1 */}
                <div className="rounded-xl bg-green-100 p-6 text-center shadow-sm">
                    <h3 className="text-xl font-bold text-green-800">
                        ارسال سریع
                    </h3>

                    <p className="mt-2 text-sm text-gray-600">
                        سفارش شما در کوتاه‌ترین زمان ارسال می‌شود.
                    </p>
                </div>

                {/* Box 2 */}
                <div className="rounded-xl bg-green-100 p-6 text-center shadow-sm">
                    <h3 className="text-xl font-bold text-green-800">
                        پرداخت امن
                    </h3>

                    <p className="mt-2 text-sm text-gray-600">
                        پرداخت شما با امنیت کامل انجام می‌شود.
                    </p>
                </div>

                {/* Box 3 */}
                <div className="rounded-xl bg-green-100 p-6 text-center shadow-sm">
                    <h3 className="text-xl font-bold text-green-800">
                        ضمانت کیفیت
                    </h3>

                    <p className="mt-2 text-sm text-gray-600">
                        کیفیت محصولات ما تضمین شده است.
                    </p>
                </div>

                {/* Box 4 */}
                <div className="rounded-xl bg-green-100 p-6 text-center shadow-sm">
                    <h3 className="text-xl font-bold text-green-800">
                        پشتیبانی
                    </h3>

                    <p className="mt-2 text-sm text-gray-600">
                        تیم پشتیبانی همیشه در کنار شماست.
                    </p>
                </div>

            </div>
        </section>
    );
}

export default Features;
