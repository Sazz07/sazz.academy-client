import React from 'react';

const Blog = () => {
    return (
        <div className="dark:bg-gray-800 dark:text-gray-100">
        <h1 className='text-center text-4xl my-10 font-bold text-violet-800'>Welcome to the Blog Section</h1>
            <div className="container my-10 max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-md bg-violet-100 dark:bg-gray-900">
                <div className="mt-3">
                    <h3 className="text-2xl font-semibold">1. What is cors?</h3>
                    <p className="mt-2">The word CORS stands for “Cross-Origin Resource Sharing”. Cross-Origin Resource Sharing is an HTTP-header based mechanism implemented by the browser which allows a server or an API(Application Programming Interface) to indicate any origins (different in terms of protocol, hostname, or port) other than its origin from which the unknown origin gets permission to access and load resources. The cors package available in the npm registry is used to tackle CORS errors in a Node.js application. </p>
                </div>
            </div>
            <div className="container my-10 max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-md bg-violet-100 dark:bg-gray-900">
                <div className="mt-3">
                    <h3 className="text-2xl font-semibold">2. Why are you using firebase? What other options do you have to implement authentication?</h3>
                    <p className="mt-2">Firebase is a product of Google which helps developers to build, manage and grow their apps easily. It helps developers to build their apps faster and in a more secure way. No programming is required on the firebase side which makes it easy to use its features more efficiently.<br /><br />
                    Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. 
                    It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
                </div>
            </div>
            <div className="container my-10 max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-md bg-violet-100 dark:bg-gray-900">
                <div className="mt-3">
                    <h3 className="text-2xl font-semibold">3. How does the private route work?</h3>
                    <p className="mt-2">The private route component is used to protect selected pages in a React app from unauthenticated users. <br />
                    The Private Route component will simply check the current user state from the user, destructed from the useContext hook. <br />
                    The Private Route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the Navigate component.</p>
                </div>
            </div>
            <div className="container my-10 max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-md bg-violet-100 dark:bg-gray-900">
                <div className="mt-3">
                    <h3 className="text-2xl font-semibold">4. What is Node? How does Node work?</h3>
                    <p className="mt-2">Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. <br /> <br /> Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;