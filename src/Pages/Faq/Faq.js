import React from 'react';

const Faq = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24 h-screen text-gray-800">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="text-2xl font-semibold sm:text-4xl text-center mb-5">Frequently Asked Questions</h2>
                <div className="mt-4 mb-8 space-y-4">
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 text-xl focus:outline-none focus-visible:ring-violet-400">1. What is this site all about?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">This site is about online learning. You can learn various things on various topics from here. <br /> We have some great courses on some some popular topics. This is absolutely a free site. <br /> All you need to do is create an account. Logged in and get accessed to our courses.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 text-xl focus:outline-none focus-visible:ring-violet-400">2. Is this site secured?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">Yes, This is a very secured site. You can easily sign up to our site. <br /> This site is created using firebase. You can login to our site by using your Google or Github Account. <br /> No personal information going to be leaked from our site.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 text-xl focus:outline-none focus-visible:ring-violet-400">3. How do I take a course? </summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">It's very simple. First, create an account and then make sure to logged in. <br />
                            After that go to our course section. There you will get some courses. Select your desire course. <br />
                            Then clicked to the Premium Access button and you will get the course.
                        </p>
                    </details>
                </div>
            </div>
        </div>
    );
};

export default Faq;