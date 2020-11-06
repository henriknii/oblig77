import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Error from '../../components/general/Error';
import useCustomFrom from '../../hooks/useCustomForm';
import { StyledInput, SuccessButton } from '../../styled/Styled';

const initalState = { title: '', content: '' };

const CreatePosts = () => {
  const history = useHistory();
  const [error, setError] = useState('');
  const {
    values,
    errors,
    handleChange,
    validateForm,
    submitable,
  } = useCustomFrom({
    initalState,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    validateForm();
  };

  const submitForm = () => {
    const postData = async () => {
      try {
        const response = await axios.post(`http://localhost:5000/posts`, {
          values,
        });
        if (response.status === 200) {
          setError('');
          history.push('/posts');
        }
      } catch (error) {
        setError(error.message);
      }
    };
    postData();
  };

  useEffect(() => {
    if (submitable) {
      submitForm();
    }
  }, [submitable]);

  return (
    <>
      <h1>Create new post</h1>
      {error ||
        (errors && (
          <div>
            {<Error message={errors} />}
            {<Error message={error} />}
          </div>
        ))}
      <form onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          placeholder="title"
          name="title"
          onChange={handleChange}
          values={values.title}
        />
        <StyledInput
          type="text"
          placeholder="content"
          name="content"
          onChange={handleChange}
          values={values.content}
        />

        <SuccessButton $success type="submit">
          Submit
        </SuccessButton>
      </form>
    </>
  );
};

export default CreatePosts;
