import { useState } from "react";
import mobileNoIcon from "../../assets/icons/telephone.png";

export default function ContactSection(){
    const [result, setResult] = useState<string>("");

  const onSubmit = async (event:React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "c219979f-6951-40ae-b064-4128159a36aa");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };
    return (
        <section>
            <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 py-32 border-b border-gray-300 grid lg:grid-cols-[1fr_2fr] gap-12">
                <div>
                    <p className="uppercase text-gray-400 text-[10px] tracking-[0.2rem] font-medium">contact</p>
                    <h2 className="mt-3 text-5xl font-medium tracking-tight sm:text-5xl">Get in touch</h2>
                    <p className="mt-6 text-gray-500 text-sm max-w-xs leading-relaxed">Open to junior frontend roles, freelance projects, and collaboration. If you think we might work well together, reach out — I respond within 24 hours.</p>
                    <ul className="mt-8">
                        <li className="mb-3 flex items-center gap-2 text-gray-400 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github h-4 w-4" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                            <a href="https://github.com/Jories10" target="_blank">github.com/Jories10</a>
                        </li>
                        <li className="mb-3 flex items-center gap-2 text-gray-400 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin h-4 w-4" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            <a href="https://www.linkedin.com/in/mrdiscipline" target="_blank" >www.linkedin.com/in/mrdiscipline</a>
                        </li>
                        <li className="mb-3 flex items-center gap-2 text-gray-400 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail h-4 w-4" aria-hidden="true"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg>
                            <a href="mailto:joriescondat0@gmail.com">joriecondat0@gmail.com</a>
                        </li>
                        <li className="flex items-center gap-2 text-gray-400 text-sm">
                            <img className="w-5 h-5" src={mobileNoIcon} alt="" />
                             <a href="tel:+639511316138">09511316138</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <form onSubmit={onSubmit} className="space-y-5">
                        <fieldset className="mt-2 mb-5 flex flex-col">
                            <label className="text-gray-400 uppercase text-[10px] tracking-[0.2rem]" htmlFor="name">name</label>
                            <input className="p-3 border border-gray-300 mt-2 placeholder:text-sm" id="name" type="text" name="name" autoComplete="name" placeholder="Your name" required/>
                        </fieldset>
                        <fieldset className="mt-2 mb-5 flex flex-col">
                            <label  className="text-gray-400 uppercase text-[10px] tracking-[0.2rem]" htmlFor="email">email</label>
                            <input className="p-3 border border-gray-300 mt-2 placeholder:text-sm" id="email" type="text" name="email" autoComplete="email" placeholder="you@example.com" required/>
                        </fieldset>
                        <fieldset className="mb-5 mt-2 flex flex-col">
                            <label className="text-gray-400 uppercase text-[10px] tracking-[0.2rem]" htmlFor="name">name</label>
                            <textarea className="mt-3 border border-gray-300 p-2 resize-y placeholder:text-sm" rows={6} name="message" id="message" placeholder="Tell me about the role or project" required></textarea>
                        </fieldset>
                        <fieldset>
                            <button type="submit" className="h-11 bg-black text-white text-sm flex items-center gap-1 px-5">
                                Send Message
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                            </button>
                        </fieldset>
                    </form>
                    <p className="mt-5 font-medium text-lg bg-gray-200 p-4 text-green-700 max-w-80 tracking-wider">{result}
                        
                    </p>
                </div>
            </div>
        </section>
    );
}