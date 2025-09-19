function SponserCard({ sponser }) {
  return (
    <li className="w-[240px] rounded-[10px]">
      <img src={sponser.path} alt={sponser.alt} />
    </li>
  );
}

export default SponserCard;
