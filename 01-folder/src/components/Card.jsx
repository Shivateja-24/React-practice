import { Bookmark } from "lucide-react";
const Card = (props) => {
  const {
    brandLogo,
    companyName,
    datePosted,
    positionName,
    tag1,
    tag2,
    payout,
    location,
  } = props;
  return (
    <div className="card">
      <div>
        <div className="top">
          <img src={brandLogo} alt="Logo" />
          <button>
            Save <Bookmark size={14} />
          </button>
        </div>
        <div className="center">
          <h3>
            {companyName} <span>{datePosted}</span>
          </h3>
          <h2>{positionName}</h2>
          <div className="tags">
            <h5>{tag1}</h5>
            <h5>{tag2}</h5>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h3>{payout}</h3>
          <h3 className="location">{location}</h3>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};
export default Card;
