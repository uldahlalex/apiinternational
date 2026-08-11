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

    function onChangeEvent(e: ChangeEvent<HTMLInputElement, HTMLInputElement>) {
        setRegisterForm({...registerForm, email: e.target.value})
    }

    function sendForm() {
        
    }

    return (
    <div>
        <input value={registerForm.email} onChange={e => onChangeEvent(e)} />
        <input type="password" onChange={e =>
            setRegisterForm({...registerForm, password: e.target.value})} />
      <button onClick={() => sendForm()}>click me</button>
 </div>
  );
}
