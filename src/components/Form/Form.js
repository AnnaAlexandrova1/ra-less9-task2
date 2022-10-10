import PropTypes from 'prop-types';
import { useState } from 'react';
import './form.css'

export default function Form({ post, onSubmit, onClose }) {
    const [form, setForm] = useState({ text: post.content })
    
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(form.text)
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm(prevState => ({...prevState, [name]: value}))
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <div className='form__close' onClick={onClose}>X</div>
            <textarea className='form__textarea' name='text' value={form.text} onChange={handleChange}></textarea>
            <button className='form__button'>Опубликовать</button>
        </form>
    )
}

Form.propTypes = {
  post: PropTypes.shape({
    content: PropTypes.string,
  }),
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
}

Form.defaultProps = {
  post: { content: '' },
};