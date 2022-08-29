import { FC, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact: FC = () => {
    const form = useRef();

    const sendEmail = e => {
        e.preventDefault();

        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_TEMPLATE_ID,
                form.current,
                process.env.NEXT_PUBLIC_EMAILJS_KEY,
            )
            .then(
                result => {
                    Swal.fire({
                        icon: 'success',
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 1500,
                        title: 'Your message was sent',
                    });
                },
                error => {
                    Swal.fire({
                        icon: 'error',
                        text: error.text,
                        title: 'Oops...',
                    });
                },
            );
    };

    return (
        <section
            className="contact h-screen
             text-center flex flex-col 
             justify-center items-center md:p-32 pb-16 p-16"
            id="contact"
        >
            <h2 className="text-7xl md:text-9xl font-bold font-Nicollast mb-8">
                Contact <span className="text-yellow-600">Me!</span>
            </h2>
            <form
                className="flex flex-col 
            justify-center items-center w-full space-y-5"
                onSubmit={sendEmail}
                ref={form}
            >
                <input
                    className="border
                     border-gray-300 rounded-lg p-4 md:w-1/4 w-full"
                    name="name"
                    placeholder="your name is..."
                    type="text"
                />
                <input
                    className="border
                     border-gray-300 rounded-lg p-4 md:w-1/4 w-full"
                    name="from"
                    placeholder="your email is..."
                    type="email"
                />
                <input
                    className="border
                     border-gray-300 rounded-lg p-4 md:w-1/4 w-full"
                    name="subject"
                    placeholder="subject..."
                    type="text"
                />
                <textarea
                    className="border border-gray-300 
                    rounded-lg p-4 md:w-1/4 w-full"
                    name="message"
                    placeholder="message"
                />
                <input
                    className="md:w-1/4 w-full 
                    cursor-pointer bg-yellow-600
                     font-Montserrat-Bold text-white p-2 
                     rounded-md hover:bg-white border-white
                      hover:border-yellow-500 hover:text-gray-900
                       border transition-all duration-200 ease-in"
                    type="submit"
                    value="send"
                />
            </form>
        </section>
    );
};

export { Contact };
