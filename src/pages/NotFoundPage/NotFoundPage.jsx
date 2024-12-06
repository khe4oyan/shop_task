// libs
import { useNavigate } from 'react-router-dom';

// styles
import classes from './styles.module.css';

export default function NotFoundPage() {
  const navigate = useNavigate();

  const goBackButton = () => {
    navigate(-1);
  }

  return (
    <div className={classes.root}>
      <div>
        <h3>404 | страница не найдена</h3>
        <button onClick={goBackButton}>вернуться назад</button>
      </div>
    </div>
  )
}