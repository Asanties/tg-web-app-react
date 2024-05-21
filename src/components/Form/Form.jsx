import React, { useState, useEffect } from 'react';
import './From.css'
import { useTelegram } from '../../hooks/useTelegram';

const Form = () => {
    const [country, setCountry] = useState('');
    const [street, setStreet] = useState('');
    const [subject, setSubject] = useState('individual');
    const {tg} = useTelegram();

    useEffect(() => { tg.MainButton.setParams({
        text:'send data'
    })

    }, []);

    useEffect(()=>{
        if (!street || !country ){
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();

        }
    }, [country, street])

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    };

    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    };

    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    };

  return (
    <div className={'form'}>
    <h3> Enter Data</h3>
    <input className={'input'} type ='text'  placeholder= {'Country'} value={country} onChange={onChangeCountry}/>
    <input className={'input'} type ='text'  placeholder= {'Street'} value={street} onChange={onChangeStreet}/>
    <select className={'select'} value={subject} onChange={onChangeSubject}>
        <option value={'physical'}> Individual </option>
        <option value={'legal'}>Legal </option>
    </select>
    </div>
    
  )
}

export default Form