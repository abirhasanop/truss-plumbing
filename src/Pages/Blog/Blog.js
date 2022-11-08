import React from 'react';

const Blog = () => {
    return (
        <div className='bg-slate-100'>
            <div className='container mx-auto bg-white mt-14 shadow-xl rounded-lg p-9'>
                <header>
                    <h1 className='text-5xl text-center mb-5 font-semibold'>Blog</h1>
                </header>
                <section>
                    <h1 className='text-4xl mb-4'>Difference between SQL and NoSQL?</h1>
                    <div className='text-2xl'>
                        <p>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQLSQL databases are efficient at processing queries and joining data across tables, making it easier to perform complex queries against structured data, including ad hoc requests. NoSQL databases lack consistency across products and typically require more work to query data, particular as query complexity increases.These databases are commonly called NoSQL. SQL and NoSQL differ in whether they are relational (SQL) or non-relational (NoSQL), whether their schemas are predefined or dynamic, how they scale, the type of data they include and whether they are more fit for multi-row transactions or unstructured data</p>
                    </div>
                </section><br /><br />
                <section>
                    <h1 className='text-4xl mb-4'>What is JWT, and how does it work??</h1>
                    <div className='text-2xl'>
                        <p>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. Figure 1 shows that a JWT consists of three parts: a header, payload, and signature.</p><br />
                        <p>Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. Resource server then verifies the authenticity of the token using the secret salt/ public key. Information Exchange: JWTs are a good way of securely transmitting information between parties because they can be signed.</p>
                    </div>
                </section><br /><br />
                <section>
                    <h1 className='text-4xl mb-4'>What is the difference between javascript and NodeJS?</h1>
                    <div className='text-2xl'>
                        <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. To summarize, Node. js is a cross-platform JavaScript runtime environment for servers and applications. It is built on a single-threaded, non-blocking event loop, the Google Chrome V8 JavaScript engine, and a low-level I/O API. The short answer is yes, you need to learn JavaScript in order to use Nodejs. Nodejs is a toolkit built around JavaScript and all of the code you will be writing will be in JavaScript. nodejs is what you want, however it is arguably better to have the command be called node for compatibility with scripts that use #!/usr/bin/env node</p>
                    </div>
                </section><br /><br />
                <section>
                    <h1 className='text-4xl mb-4'>How does NodeJS handle multiple requests at the same time?</h1>
                    <div className='text-2xl'>
                        <p>How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. Single Threaded: Node JS works using a single thread. This means that there isn't a pool of threads, which is assigned to handle client requests, but only a single thread to accept the incoming requests. So, even if there are 100 clients, we have a single thread to handle them, in one server They handle 40K requests per second having Node. Node. js runs JavaScript code in a single thread, which means that your code can only do one task at a time. However, Node. js itself is multithreaded and provides hidden threads through the libuv library, which handles I/O operations like reading files from a disk or network requests</p>
                    </div>
                </section><br /><br />
            </div>
        </div>
    );
};

export default Blog;