'use client';

import React, { JSX, useState } from 'react';
import { API_URL } from '@/lib/api';
import './_scss/form.scss';

export default function Form(): JSX.Element {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        setStatus('sending');

        const form = event.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch(`${API_URL}/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.get('name'),
                    email: formData.get('email'),
                    message: formData.get('message'),
                    website: formData.get('website'),
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            form.reset();
            setStatus('success');
        } catch {
            setStatus('error');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset disabled={status === 'sending'}>
                <input type="text" name="name" placeholder="Name" required/>
                <input type="email" name="email" placeholder="Email" required/>
                <textarea name="message" placeholder="Message" required/>
                <input type="text" name="website" tabIndex={-1} autoComplete="off" className="honeypot"/>
                <button type="submit">{status === 'sending' ? 'Sending…' : 'Send'}</button>
            </fieldset>

            {status === 'success' && (
                <p>Thanks! Your message has been sent.</p>
            )}

            {status === 'error' && (
                <p>Something went wrong. Please try again.</p>
            )}
        </form>
    );
}