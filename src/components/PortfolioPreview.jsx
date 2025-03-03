const PortfolioPreview = ({ data }) => {
    if (!data) return <p>No portfolio data available</p>;
  
    return (
      <div className="p-4">
        <h2 className="text-2xl font-bold">{data.name}</h2>
        <p>{data.contact}</p>
        <p>{data.bio}</p>
        <p><strong>Skills:</strong> {data.skills}</p>
        {data.image && <img src={data.image} alt="Profile" className="w-32 h-32 rounded-full" />}
      </div>
    );
  };
  
  export default PortfolioPreview;
  