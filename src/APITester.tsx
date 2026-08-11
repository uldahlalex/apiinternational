import {useEffect, useState} from "react";

export interface MyRegisterForm {
    email: string;
    password: string;
}

export function APITester() {

  const [registerForm, setRegisterForm] = useState<MyRegisterForm>({
      password: '',
      email: 'your@email.com'
  })


    function loadData() {

    }

    function onChangeEvent() {
        
    }

    return (
    <div>
        <input value={registerForm.email} onChange={onChangeEvent} />
        <input type="password" />
      <button onClick={() => loadData()}>click me</button>
 </div>
  );
}
