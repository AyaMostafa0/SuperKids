import React from 'react';
const SocialMediaLinks = () => {
  const iconStyle = {
    marginRight: '8px',
  };

  return (
    <div className="buttons">
      <a
        href="https://www.facebook.com/your-facebook-page"
        target="_blank"
        className="buttons"
      >
        <i class="fa-brands fa-facebook" style={iconStyle}/>
        <span>Facebook</span>
      </a>
      <a
        href="https://twitter.com/your-twitter-profile"
        target="_blank"
        className="buttons"
      >
        <i class="fa-brands fa-twitter" style={iconStyle}/>
        <span>Twitter</span>
      </a>
      <a
        href="https://www.instagram.com/your-instagram-profile"
        target="_blank"
        className="buttons"
      >
        <i class="fa-brands fa-instagram" style={iconStyle}/>
        <span>Instagram</span>
      </a>
      <h5 className='call'>Call Center : 15075</h5>
      <h5 className='call1'>Email : info@superkids.@gmail.com</h5>
    </div>
  );
};

export default SocialMediaLinks;
