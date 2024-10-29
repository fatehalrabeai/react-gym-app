export const Hero = () => {
    return (
        <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
            <div className="flex flex-col gap-4">
                <p>
                    حان وقت
                </p>
                <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Gym<span
                    className="text-blue-400 ">Fit</span></h1>
            </div>
            <p className="text-sm md:text-base font-light">
                مرحبًا بك في موقع <span className="text-blue-400 font-medium">Gym Fit</span>، حيث نُقدّم لك كل ما تحتاجه
                لتحقيق أهدافك الرياضية والوصول إلى لياقتك المثالية. سواء كنت تسعى لاكتساب اللياقة، زيادة القوة، أو تحسين صحتك العامة، نوفر لك <span className="text-blue-400 font-medium">بيئة رياضية ملهمة</span> وأحدث الأجهزة والمعدات، بالإضافة إلى برامج تدريبية مُصممة خصيصًا لتناسب احتياجاتك وأهدافك الشخصية.
            </p>
            <button className="px-8 py-4 rounded-md border-[2px] bg-slate-950 border-blue-400 border-solid blueShadow duration-200">
                <p>موافق و لنبدأ</p>
            </button>
        </div>
    )
}