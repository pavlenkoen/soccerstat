import { Link } from "react-router-dom";
import { Alert } from "@mui/material";

export const NotFoundPage = () => {
  return (
    <>
      <Alert
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          fontSize: "2em",
        }}
        severity="error"
      >
        <h5>Ошибка 404</h5>
        <div>Страница не найдена</div>
        <Link to={"/"}>Вернуться на главную страницу</Link>
      </Alert>
    </>
  );
};
