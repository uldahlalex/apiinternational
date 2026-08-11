import {useEffect, useState, type ChangeEvent} from "react";

export interface MyRegisterForm {
    email: string;
    password: string;
}

export function APITester() {

    const [registerForm, setRegisterForm] = useState<MyRegisterForm>({
        password: '',
        email: 'your@email.com'
    })

    const [response, setResponse] = useState<string>()

    function onChangeEvent(e: ChangeEvent<HTMLInputElement, HTMLInputElement>) {
        setRegisterForm({...registerForm, email: e.target.value})
    }

    async function sendForm() {
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(registerForm)
        })
        const json = await response.json();
        setResponse(json.message)
    }

    return (
    <div>
        {response}
        <input value={registerForm.email} onChange={e => onChangeEvent(e)} />
        <input type="password" onChange={e =>
            setRegisterForm({...registerForm, password: e.target.value})} />
      <button onClick={() => sendForm()}>click me</button>
 </div>
  );
}
