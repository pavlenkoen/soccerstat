import { Card } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import logo from "../../img/logo.svg";
import { useNavigate } from "react-router-dom";

const CompetitionCard = ({ props }) => {
  const navigate = useNavigate();
  return (
    <Card
      onClick={() => {
        navigate(`/league/#${props.id}`);
      }}
      sx={{
        minWidth: "90%",
        minHeight: "50%",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        marginTop: "2rem",
        width: "100px",
        height: "400px",
        border: "1px solid",
        boxShadow: "8px 10px 5px 2px blue",
        "&:hover": {
          background: "lightblue",
        },
      }}
    >
      <CardHeader
        sx={{
          maxHeight: "100%",
          maxWidth: "100%",
          height: "100px",
          justifyContent: "center",
        }}
        title={props.name}
        subheader={props.area.name}
      />
      <CardMedia
        component="img"
        height="194"
        sx={{
          width: "150px",
          height: "150px",
          objectFit: "contain",
          marginTop: "50%",
          marginRight: "10%",
          marginBottom: "10%",
          marginLeft: "10%",
          transform: "translateY(-50%)",
          maxWidth: "100%",
        }}
        image={props.emblem ? props.emblem : logo}
      />
    </Card>
  );
};

export default CompetitionCard;
