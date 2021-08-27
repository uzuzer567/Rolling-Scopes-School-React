import React, { FC, useEffect, useState } from 'react';
import '../styles/form.css';
import { FormProps } from '../type';

const Form: FC<FormProps> = ({ setFormValues }) => {
  const [formValid, setFormValid] = useState(false);

  const [userName, setUserName] = useState('');
  const [userNameDirty, setUserNameDirty] = useState(false);
  const [userNameError, setUserNameError] = useState('The field cannot be empty!');

  const [genderCheck, setGenderCheck] = useState<string | boolean>(false);
  const [genderCheckDirty, setGenderCheckDirty] = useState(false);
  const [genderCheckError, setGenderCheckError] = useState('You need to choose a gender!');

  const [agreeCheck, setAgreeCheck] = useState(false);
  const [agreeCheckDirty, setAgreeCheckDirty] = useState(false);
  const [agreeCheckError, setAgreeCheckError] = useState('You need to accept an agreement!');

  const [birthDate, setBirthDate] = useState('');
  const [birthDateError, setBirthDateError] = useState('You need to choose a birth date!');

  const [userGoal, setUserGoal] = useState<string | undefined>('');
  const [userGoalError, setUserGoalError] = useState('You need to choose a position!');

  const reset = () => {
    setAgreeCheck(false);
    setGenderCheck(false);
    setBirthDate('');
    setUserGoal('');
    setUserName('');
  };

  const showMessage = () => {
    const message = document.getElementById('form__message');
    if (message) {
      message.className = 'active';
    }
    setTimeout(function time() {
      if (message?.className) {
        message.className = message?.className.replace('active', '');
      }
    }, 3000);
  };

  const submitHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setFormValues((state) => [
      ...state,
      { userName, genderCheck, agreeCheck, birthDate, userGoal },
    ]);
    showMessage();
    reset();
  };

  useEffect(() => {
    if (
      agreeCheck === false ||
      genderCheck === false ||
      birthDateError ||
      userNameError ||
      userGoalError ||
      agreeCheckError ||
      genderCheckError
    ) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [
    userNameError,
    agreeCheckError,
    birthDateError,
    genderCheckError,
    userGoalError,
    agreeCheck,
    genderCheck,
  ]);

  const userNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
    const re = /^[a-zA-Z ]+$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setUserNameError('Invalid name!');
    } else {
      setUserNameError('');
    }
  };

  const birthDateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirthDate(e.target.value);
    if (!e.target.value) {
      setBirthDateError('You need to choose a correct date!');
    } else {
      setBirthDateError('');
    }
  };

  const genderCheckHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGenderCheck(e.target.value);
    if (!e.target.checked) {
      setGenderCheckError('You need to choose a gender!');
      setGenderCheckDirty(true);
    } else {
      setGenderCheckError('');
    }
  };

  const userGoalHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUserGoal(e.target.value);
    if (e.target.value === '1') {
      setUserGoalError('You need to choose a goal!');
    } else {
      setUserGoalError('');
    }
  };

  const agreeCheckHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgreeCheck(e.target.checked);
    if (!e.target.checked) {
      setAgreeCheckError('You need to accept an agreement!');
      setAgreeCheckDirty(true);
    } else {
      setAgreeCheckError('');
    }
  };

  const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case 'userName':
        setUserNameDirty(true);
        break;
      case 'agreeCheck':
        setAgreeCheckDirty(true);
        break;
      default:
    }
  };

  return (
    <div className="form__location">
      <form className="form" onSubmit={submitHandler}>
        <ul>
          <ol>
            {}
            {userNameDirty && userNameError && <div style={{ color: 'red' }}>{userNameError}</div>}
            <label htmlFor="userName" className="form__text">
              * Your name:
            </label>
            <br />
            <input
              className="form__input"
              onChange={(e) => userNameHandler(e)}
              value={userName}
              onBlur={(e) => blurHandler(e)}
              type="text"
              name="userName"
              required
            />
          </ol>
          <br />
          <ol>
            <label htmlFor="birthDate" className="form__text">
              * Your date of birth:
              <br />
              <input
                className="form__input"
                type="date"
                value={birthDate}
                min="1970-01-01"
                max="2002-12-31"
                onChange={(e) => birthDateHandler(e)}
                required
              />
            </label>
          </ol>
          <br />
          {}
          {genderCheckError && genderCheckDirty && (
            <div style={{ color: 'red' }}>{genderCheckError}</div>
          )}
          <ol>
            <label className="form__text" htmlFor="male">
              * Your gender:
            </label>
            <br />
            <input
              type="radio"
              name="genderCheck"
              value="male"
              id="male"
              onChange={(e) => genderCheckHandler(e)}
              checked={genderCheck === 'male'}
              required
            />
            <label className="form__text" htmlFor="male">
              Male
            </label>
            <br />
            <input
              type="radio"
              name="genderCheck"
              value="female"
              id="female"
              onChange={(e) => genderCheckHandler(e)}
              checked={genderCheck === 'female'}
              required
            />
            <label className="form__text" htmlFor="genderCheck">
              Female
            </label>
          </ol>
          <ol>
            <p>
              <label htmlFor="userGoal" className="form__text">
                * Your goal:
                <br />
                <select
                  className="form__text"
                  name="userGoal"
                  value={userGoal}
                  onBlur={(e) => userGoalHandler(e)}
                  onChange={(e) => userGoalHandler(e)}
                  required
                >
                  <option value="">Not selected</option>
                  <option>Nothing serious</option>
                  <option>Just communication</option>
                  <option>Serious relationship</option>
                  <option>Do not know yet</option>
                </select>
              </label>
            </p>
          </ol>
          <ol>
            {}
            {agreeCheckError && agreeCheckDirty && (
              <div style={{ color: 'red' }}>{agreeCheckError}</div>
            )}
            <input
              name="agreeCheck"
              checked={agreeCheck}
              type="checkbox"
              onChange={(e) => agreeCheckHandler(e)}
              required
            />
            <label htmlFor="agreeCheck" className="form__text">
              I agree to the processing of data
            </label>
          </ol>
          <ol>
            <button disabled={!formValid} type="submit" className="form__button">
              Submit
            </button>
          </ol>
        </ul>
      </form>
      <div id="form__message">
        <p>Your profile has been created!</p>
        <p>Have a good time!</p>
      </div>
    </div>
  );
};

export default Form;
