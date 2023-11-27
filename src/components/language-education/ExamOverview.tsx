import Image from "next/image";

export default function ExamOverview() {

    return (
        <section>
            <section className="m-auto md:w-[86vw]  pt-14" id="exam-preparations">
                <section className="p-6 bg-[var(--primary-500)] text-white ">
                    <section className=" px-4  grid md:grid-cols-2 gap-6 py-4  md:py-0">
                        <div className='md:flex flex-col justify-center md:p-5 ' >
                            <section className="space-y-4">
                                <h3 className='heading2 mb-5 my-10'>Language Exam</h3>
                                <div className="space-y-4">
                                    <p>
                                        The solution for acing your language certification exam.
                                        Practice, gain confidence, and get your certification with our innovative approach and partner coaching centers across the globe as well as personalized preparation for language exams.
                                    </p>
                                    <p>
                                        Which certification are you preparing for? https://global-exam.com/en/exam
                                        English,
                                        French,
                                        Spanish,
                                        German,
                                        Mandarin
                                    </p>
                                </div>
                            </section>
                        </div>
                        <div className='md:flex gap-x-4'>
                            <Image width="500" height="500" style={{
                                width: "100%", objectFit: "cover", objectPosition: "center left"
                            }}
                                className='rounded-md'
                                src="https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=1600" alt='' ></Image>
                        </div>
                    </section>
                </section>
            </section>

            <div className="h-4 bg-gray-50 my-16"></div>

            <section className="m-auto md:w-[86vw]  " id="exam-preparations">
                <section className="p-6 text-black ">
                    <section className=" px-4  grid md:grid-cols-2 gap-6 py-4  md:py-0">
                        <div className='md:flex flex-col justify-center md:p-5 ' >
                            <section className="space-y-4">
                                <h3 className='heading2 mb-5 my-10'>Language Training</h3>
                                <div className="space-y-4">
                                    <p>The solution for learning a new language</p>
                                    <p>
                                        Begin or continue learning the language of your choice. Practice, speak, and gain confidence.
                                        With our unique approach and global leading partners delivering premium language training, we will provide you with the perfect solution for the language you desired to learn any where you are or in your preferred destination.
                                    </p>
                                    <p>
                                        What Language Will You Want To Learn ?
                                        English, Spanish, Français, Italiano, Deutsch, Português
                                    </p>
                                </div>
                            </section>
                        </div>
                        <div className='md:flex gap-x-4'>
                            <Image width="500" height="500" style={{
                                width: "100%", objectFit: "cover", objectPosition: "center left"
                            }}
                                className='rounded-md'
                                src="https://images.pexels.com/photos/5940706/pexels-photo-5940706.jpeg?auto=compress&cs=tinysrgb&w=1600" alt='' ></Image>
                        </div>
                    </section>
                </section>
            </section>

            <div className="h-4 bg-gray-50 my-16"></div>

        </section>
    )
}
