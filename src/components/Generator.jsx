import {SectionWrapper} from "./SectionWrapper.jsx";
import {WORKOUTS} from "../utils/fitgym.js";


const Header = (props) => {
    const {index, title, description} = props
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-center gap-2">
                <p className="text-3xl sm:text-4xl md:text-5xl
                font-semibold text-slate-400">{index}</p>
                <h4 className="text-lg sm:text-2xl md:text-3xl">{title}</h4>
            </div>
            <p className="text-sm sm:text-base mx-auto">{description}</p>
        </div>
    )
}

export const Generator = () => {
    return (
        // we added Section wrapper for content that will not be repeated
        <SectionWrapper header="قم بإنشاء تمرينك" title={['إنه ', 'هدف ', 'كبير']}>
            <Header index={'01'} title="اختر وضعية التمرين"
                    description="اختر التمرين الذي تريد تحمله."/>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 ">
                {Object.keys(WORKOUTS).map((type, typeIndex) => {
                    return (
                        <button className="bg-slate-950 border-blue-400 py-3 rounded-lg" key={typeIndex}>
                            <p>{type}</p>
                        </button>
                    )
                })}
            </div>
        </SectionWrapper>
    )
}