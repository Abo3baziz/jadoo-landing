function SponserCard({ image }) {
  return (
    <li key={image.alt} className="w-[240px] rounded-[10px]">
      <img src={image.path} alt={image.alt} />
    </li>
  );
}

export default SponserCard;
