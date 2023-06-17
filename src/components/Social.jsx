const SocialComponent = () => {
  const socialLink = [
    {
      image: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
      link: "https://www.youtube.com",
    },
    {
      image:
        "https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png",
      link: "https://www.instagram.com",
    },
  ];

  return (
    <div class="d-flex justify-content-center">
      {socialLink.map((item) => (
        <a
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className="flexItem"
        >
          <img src={item.image} alt={item} width="100%" />
        </a>
      ))}
    </div>
  );
};

export default SocialComponent;
