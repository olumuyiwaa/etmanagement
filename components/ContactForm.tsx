"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
    const [status, setStatus] = useState<Status>("idle");
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setStatus("submitting");
        setErrorMessage(null);

        const form = event.currentTarget;
        const data = new FormData(form);

        // Honeypot: bots tend to fill every field, humans never see this one.
        if (data.get("company_website")) {
            setStatus("success");
            form.reset();
            return;
        }

        const payload = {
            name: String(data.get("name") ?? ""),
            email: String(data.get("email") ?? ""),
            company: String(data.get("company") ?? ""),
            message: String(data.get("message") ?? ""),
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!res.ok) {
                const body = await res.json().catch(() => null);
                throw new Error(body?.error ?? "Something went wrong. Please try again.");
            }

            setStatus("success");
            form.reset();
        } catch (err) {
            setStatus("error");
            setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
        }
    }

    if (status === "success") {
        return (
            <div className="rounded-2xl border border-line bg-paper p-8 text-center">
                <p className="font-display text-xl font-semibold text-ink">Message sent</p>
                <p className="mt-2 text-sm text-muted">
                    Thanks for reaching out. A member of our team will follow up within one business day.
                </p>
                <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-6 font-mono text-xs uppercase tracking-widest text-authority hover:underline"
                >
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="rounded-2xl border border-line bg-paper p-8">
            <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                    <label htmlFor="name" className="font-mono text-xs uppercase tracking-widest text-muted">
                        Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        className="mt-2 w-full rounded-lg border border-line bg-surface px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-authority"
                        placeholder="Adaeze Okafor"
                    />
                </div>

                <div className="sm:col-span-1">
                    <label htmlFor="email" className="font-mono text-xs uppercase tracking-widest text-muted">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className="mt-2 w-full rounded-lg border border-line bg-surface px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-authority"
                        placeholder="adaeze@company.com"
                    />
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="company" className="font-mono text-xs uppercase tracking-widest text-muted">
                        Company <span className="normal-case text-muted/70">(optional)</span>
                    </label>
                    <input
                        id="company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        className="mt-2 w-full rounded-lg border border-line bg-surface px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-authority"
                        placeholder="Company name"
                    />
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="message" className="font-mono text-xs uppercase tracking-widest text-muted">
                        How can we help?
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="mt-2 w-full resize-none rounded-lg border border-line bg-surface px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-authority"
                        placeholder="Tell us about the objective you're trying to solve."
                    />
                </div>

                {/* Honeypot field: hidden from real users, visible to bots */}
                <input
                    type="text"
                    name="company_website"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden="true"
                />
            </div>

            {status === "error" && (
                <p className="mt-4 text-sm text-red-600" role="alert">
                    {errorMessage}
                </p>
            )}

            <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-6 inline-flex items-center justify-center rounded bg-action px-8 py-3 font-mono text-sm uppercase tracking-widest text-paper transition-transform hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
            >
                {status === "submitting" ? "Sending..." : "Send message"}
            </button>
        </form>
    );
}