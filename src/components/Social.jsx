const SocialComponent = () => {
  const socialLink = [
    [
      "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
      "https://www.youtube.com/watch?v=aWIRSRMmdN0",
    ],
    [
      "https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png",
      "https://www.instagram.com/xuanloanfabrics/",
    ],
  ];

  return (
    <div class="d-flex justify-content-center">
      {socialLink.map((item) => (
        <a href={item[1]} target="_blank" rel="noreferrer" className="flexItem">
          <img src={item[0]} alt={item} width="100%" />
        </a>
      ))}
    </div>
  );
};

export default SocialComponent;
