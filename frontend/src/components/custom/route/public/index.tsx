import PropTypes from "prop-types";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  children: any;
};

const PublicRoute = ({ children }: Props): JSX.Element => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) navigate("/users");
  }, []);

  return children;
};

export default PublicRoute;
