import PropTypes from "prop-types";
import { Card, Typography } from "@material-tailwind/react";
import { FaStar } from "react-icons/fa";

export function TeamCard({ name, position }) {
  return (
    <Card color="transparent" shadow={false} className="text-center">
      <Typography variant="h5" color="blue-gray" className="mt-6 mb-1">
        {name}
      </Typography>
      <div className="flex space-x-4 mx-auto my-6">
        <FaStar className="w-5 h-5 text-yellow-800" />
        <FaStar className="w-5 h-5 text-yellow-800" />
        <FaStar className="w-5 h-5 text-yellow-800" />
        <FaStar className="w-5 h-5 text-yellow-800" />
        <FaStar className="w-5 h-5 text-yellow-800" />
      </div>
      {position && (
        <Typography className="font-bold text-blue-gray-500">
          "{position}"
        </Typography>
      )}
    </Card>
  );
}

TeamCard.defaultProps = {
  position: "",
};

TeamCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string,
};

TeamCard.displayName = "/src/widgets/layout/team-card.jsx";

export default TeamCard;
