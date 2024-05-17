'use client';
import React, { useState } from 'react';
import '@/onboarding/_styles/components/_createAlert.scss';
import { IoSearchOutline } from 'react-icons/io5';
import Select from './Select';

interface CreateAlertProps {
  value?: string;
  source?: string;
  frequency?: string;
  sendTo?: string;
  onCreate({
    value,
    source,
    frequency,
    sendTo
  }: {
    value: string;
    source: string;
    frequency: string;
    sendTo: string;
  }): void;
}
const CreateAlert: React.FC<CreateAlertProps> = (props) => {
  const [optionsActive, setOptionsActive] = useState(false);
  const [inputValue, setInputValue] = useState<string>(props.value ?? '');
  const [source, setSource] = useState<string>(props.source ?? '');
  const [frequency, setFrequency] = useState<string>(props.frequency ?? '');
  const [sendTo, setSendTo] = useState<string>(props.sendTo ?? '');

  return (
    <div className="create-alert">
      <div className="create-alert__input-holder">
        <IoSearchOutline stroke="#787878" />
        <input
          className="create-alert__input"
          placeholder="Create an alert about..."
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
      </div>
      <div
        className="create-alert__option-holder"
        style={optionsActive ? {} : { display: 'none' }}
      >
        <div className="create-alert__option">
          <label>Sources</label>
          <Select
            {...(source === undefined ? {} : { selectedOption: source })}
            onChange={(value) => {
              setSource(value);
            }}
            options={['Reddit & Twitter', 'Reddit', 'Twitter']}
          />
        </div>
        <div className="create-alert__option">
          <label>How often</label>
          <Select
            {...(frequency === undefined ? {} : { selectedOption: frequency })}
            onChange={(value) => {
              setFrequency(value);
            }}
            options={[
              'As it happens',
              'At most once a day',
              'At most once a week'
            ]}
          />
        </div>
        <div className="create-alert__option">
          <label>Send To</label>
          <input
            placeholder="E-mail"
            value={sendTo}
            onChange={(event) => {
              setSendTo(event.target.value);
            }}
          />
        </div>
      </div>
      <div className="create-alert__button-holder">
        <button
          className="create-alert__button-create"
          onClick={() => {
            props.onCreate({ value: inputValue, source, frequency, sendTo });
          }}
        >
          Create Alert
        </button>
        <button
          className={
            (optionsActive ? 'active ' : '') + 'create-alert__button-options'
          }
          onClick={() => {
            setOptionsActive(!optionsActive);
          }}
        >
          {optionsActive ? 'Hide Options' : 'Show Options'}{' '}
          <svg
            width="17"
            height="12"
            viewBox="0 0 17 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8.5 12L0.272758 0L16.7272 0L8.5 12Z" fill="white" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CreateAlert;
