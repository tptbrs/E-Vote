import React from 'react';

function Intro() {
    return (
        <div className="bg-stone-500 sm:p-16 p-6">
            <div>
                {/* Hero Section */}
                <div className='md:flex justify-between items-center'>
                    <p className="text-center text-5xl font-extrabold text-yellow-400 my-8">
                        Create and conduct polls in a minute. Use it in your flipped classroom, lecture, or just to engage your audience.
                    </p>
                    <div className='md:ml-8'>
                        <button className="my-8 h-20 w-80 bg-indigo-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-3xl">
                            Create Poll
                        </button>
                    </div>
                </div>

                {/* Video and Image Section */}
                <div className='md:flex justify-between items-center my-5'>
                    <div className='my-4 flex items-center justify-center md:w-1/2'>
                        <video className="rounded-lg" autoPlay muted loop>
                            <source src="Videos/video.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className="my-4 md:w-1/2 md:ml-6">
                        <img
                            className='rounded-3xl'
                            src="https://img.freepik.com/free-vector/quiz-show-concept-illustration_114360-9621.jpg?size=626&ext=jpg"
                            alt="Poll Illustration"
                        />
                    </div>
                </div>

                {/* Step Section */}
                <div className='pt-10'>
                    <div className='flex mb-10'>
                        <img className="rounded-l-3xl w-1/2" src="https://img.freepik.com/free-vector/instagram-poll-sticker-set_23-2150317764.jpg?size=626&ext=jpg" alt="Poll Steps" />
                        <section className='bg-purple-50 p-4 text-gray-700 rounded-r-3xl w-1/2 flex items-center'>
                            <p className='font-semibold md:text-2xl text-sm'>
                                With our intuitive platform, you can quickly create polls, add questions, and collect responses in real time. Engage your audience and visualize results instantly without any hassle.
                            </p>
                        </section>
                    </div>

                    <h1 className='text-2xl font-medium underline decoration-4 decoration-blue-800 text-yellow-400'>
                        Just take these easy steps!
                    </h1>
                    <p className='text-center m-2 font-medium text-white'>
                        Create and conduct polls in a minute. Use it in your flipped classroom, lecture, or just to impress your audience.
                    </p>
                    <div className='p-2 mt-4 flex flex-wrap justify-center gap-2'>
                        <button className='hover:scale-110 border-4 bg-red-800 rounded-full p-2 text-white'>1. Create poll</button>
                        <button className='hover:scale-110 border-4 bg-green-700 rounded-full p-2 text-white'>2. Add questions</button>
                        <button className='hover:scale-110 border-4 bg-blue-800 rounded-full p-2 text-white'>3. Share & Show</button>
                    </div>
                    <br />
                    <p className='text-center'>
                        Please check out our <a className='text-blue-400 underline' href="#">FAQ</a> for common questions. If that doesn’t help, contact us at <a className='text-blue-400 underline' href="mailto:tptbrs47@gmail.com">tptbrs47@gmail.com</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Intro;
