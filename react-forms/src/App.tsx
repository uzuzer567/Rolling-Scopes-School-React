import './styles/main.css';
import { useState } from 'react';
import Form from './components/Form';
import Card from './components/Card';
import { FormItemProps } from './type';

export const App = () => {
  const [formValues, setFormValues] = useState<FormItemProps[]>([]);
  return (
    <div>
      <Form setFormValues={setFormValues} />
      <main>
        {formValues.map((item, index) => {
          return <Card item={item} key={index.toString()} />;
        })}
      </main>
    </div>
  );
};

export default App;
