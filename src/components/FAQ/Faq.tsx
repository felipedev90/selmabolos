"use client";

import { useState } from "react";
import { faqData } from "@/src/data/faqData";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-section-y bg-bg-alt md:scroll-mt-32" id="faq">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="text-center flex flex-col items-center gap-2 mb-12 md:mb-16">
          <span className="font-hand text-3xl md:text-4xl text-primary -rotate-3 inline-block">
            Dúvidas frequentes
          </span>
          <h2 className="font-display text-5xl md:text-6xl text-ink">
            Perguntas que a gente mais ouve
          </h2>
          <p className="font-sans text-ink-soft max-w-2xl mx-auto text-lg mt-3">
            Se ficar alguma dúvida, é só chamar no WhatsApp.
          </p>
        </div>

        {/* LISTA DE PERGUNTAS (ACCORDION) */}
        <div className="flex flex-col gap-4 max-w-[820px] mx-auto">
          {faqData.map((f, i) => (
            <div
              key={i}
              className={`faq-item bg-surface border rounded-theme-lg p-6 md:px-8 cursor-pointer transition-colors duration-300 shadow-sm hover:shadow-md ${
                open === i ? "faq-open border-primary/50" : "border-line"
              }`}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="flex justify-between items-center gap-4">
                <span className="font-serif font-semibold text-xl text-ink">
                  {f.q}
                </span>

                <span className="faq-chevron font-display text-3xl text-primary leading-none flex-shrink-0">
                  +
                </span>
              </div>

              <div className="faq-answer font-sans text-ink-soft text-base leading-relaxed">
                {f.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
