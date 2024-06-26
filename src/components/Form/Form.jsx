import React, { useState, useEffect, useCallback } from 'react';
import './Form.css'
import { useTelegram } from '../../hooks/useTelegram';

const Form = () => {
    const [country, setCountry] = useState('');
    const [street, setStreet] = useState('');
    const [subject, setSubject] = useState('individual');
    const {tg} = useTelegram();

    const onSendData = useCallback(()=> {
        const data = {
            country,
            street,
            subject,
        }
        Telegram.WebApp.sendData(JSON.stringify(data));

    }, [country, street, subject]);

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

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