
import React from 'react';

const inputClasses = 'appearance-none block w-full bg-zinc-200 text-zinc-700 border border-zinc-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-zinc-500';
const buttonClasses = 'w-full sm:w-auto bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline';

const ContactForm = () => {
  return (
    <div className="bg-white dark:bg-zinc-800 transition duration-500">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-zinc-800 dark:text-white">Entre em contato pelo formulário</h2>
          <div className="w-12 h-1 bg-red-500 mt-2 mb-6"></div>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8">Peça seu orçamento sem compromisso por este formulário e entraremos em contato o mais rápido possível.</p>
          <form>
            <div className="flex flex-wrap -mx-2 mb-4">
              <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
                <input className={inputClasses} type="text" placeholder="Seu Nome Aqui" />
              </div>
              <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
                <input className={inputClasses} type="email" placeholder="Seu Email" />
              </div>
              <div className="w-full md:w-1/3 px-2">
                <input className={inputClasses} type="tel" placeholder="Telefone" />
              </div>
            </div>
            <div className="mb-4">
              <input className={inputClasses} type="text" placeholder="Assunto" />
            </div>
            <div className="mb-8">
              <textarea className={inputClasses} rows="5" placeholder="Sua Mensagem"></textarea>
            </div>
            <button className={buttonClasses} type="button">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;