'use client';

import React, { JSX, useEffect, useRef, useState } from 'react';

import { API_URL } from '@/lib/api';

import './_scss/form.scss';

export default function Form(): JSX.Element {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        if (status === 'success' || status === 'error') {
            dialogRef.current?.showModal();
        }
    }, [status]);

    function closeDialog(): void {
        dialogRef.current?.close();
        setStatus('idle');
    }

    async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        setStatus('sending');

        const form = event.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch(API_URL + '/contact', {
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

    const isSuccess = status === 'success';

    return (<>
        <form onSubmit={handleSubmit}>
            <fieldset disabled={status === 'sending'}>
                <input type="text" name="name" placeholder="Name" required/>
                <input type="email" name="email" placeholder="Email" required/>
                <textarea name="message" placeholder="Message" required/>
                <input type="text" name="website" tabIndex={-1} autoComplete="off" className="honeypot"/>
                <button type="submit">
                    {status === 'sending' ? 'Sending…' : 'Send'}
                </button>
            </fieldset>
        </form>

        <dialog ref={dialogRef} className={(isSuccess ? 'success' : 'error')} onCancel={closeDialog}>
            <div>
                <h2>
                    <span className="icon" aria-hidden="true">{isSuccess ? '✓' : '!'}</span>
                    {isSuccess ? 'Message sent' : 'Something went wrong'}
                </h2>
                <p>
                    {isSuccess
                        ? 'Thanks! Your message has been sent.'
                        : 'Please try again.'}
                </p>
                <button onClick={closeDialog}>{isSuccess ? 'Close' : 'Try again'}</button>
            </div>
        </dialog>
    </>);
}