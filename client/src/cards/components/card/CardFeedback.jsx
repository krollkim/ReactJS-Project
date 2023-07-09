import React from "react";
import { bool, object, func, string } from "prop-types";
import Spinner from "../../../components/Spinner";
import Error from "../../../components/Error";
import CardComponent from "./Card";

const CardFeedback = ({ pending, error, card, onDelete, onLike, onEdit }) => {
  if (pending) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  if (card)
    return (
      <CardComponent
        card={card}
        onDelete={onDelete}
        onEdit={onEdit}
        onLike={onLike}
      />
    );
  return null;
};

CardFeedback.propTypes = {
  pending: bool.isRequired,
  error: string,
  card: object,
  onDelete: func.isRequired,
  onLike: func.isRequired,
  onEdit: func.isRequired,
};

export default CardFeedback;