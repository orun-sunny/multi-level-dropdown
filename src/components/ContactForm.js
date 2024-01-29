import "./ContactFormStyles.css"

function ContactForm() {
    return(
        <div id="contact" className="p-6 my-12 scroll-mt-16">
        <h2 className="text-3xl font-bold text-center sm:text-5xl mb-6 text-slate-900">
             Send a message to Us!
        </h2>
        <form action="" className="max-w-4xl mx-auto text-2xl sm:text-3xl flex flex-col  gap-4">

            <label for="subject">Subject:</label>
            <input type="text" id="subject" name="subject" required minlength="3" maxlength="60" placeholder="Your Subject" className="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 " />

            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required minlength="3" maxlength="60" placeholder="Your Name" className="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 " />

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required minlength="3" maxlength="60" placeholder="Your Email" className="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 " />

            <label for="message">Message:</label>
            <textarea name="message" id="message" cols="30" rows="10" placeholder="Your Message" required className="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 " ></textarea>
            <button className="flex mx-auto text-3xl  bg-teal-700 hover:bg-teal-600 active:bg-teal-500 text-white p-3 px-8 rounded-xl border border-solid border-slate-900 ">
                Submit
            </button>
            
        </form>
    </div>
    );
}

export default ContactForm;