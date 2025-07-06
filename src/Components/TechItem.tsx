
function TechItem({ src, label }: { src: string; label: string }) {
  return (
    <div className="flex items-center justify-center">
      <img src={src} alt={`${label} Logo`} className="h-8 w-8 mr-3" />
      <span className="text-xl text-white">{label}</span>
    </div>
  );
}

export default TechItem;