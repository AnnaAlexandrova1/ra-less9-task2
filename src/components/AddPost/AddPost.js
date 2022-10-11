import { useNavigate } from "react-router-dom";
import links from "../../service/link";
import Form from "../Form/Form";

export default function AddPost() {
  const navigate = useNavigate();

  const handleSubmit = (text) => {
    const fetchBody = { id: 3, content: text };
    fetch(`http://localhost:7777/posts`,
      {
        method: 'POST',
        body: JSON.stringify(fetchBody),
      })
      .then(() => {
        navigate('/');
      });
  }

  const handleClose = () => {
    navigate('/');
  }

  return (
    <div className="add-post">
      <Form
        onSubmit={handleSubmit}
        onClose={handleClose}
      />
    </div>
  );
}