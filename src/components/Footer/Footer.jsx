import React from 'react';
import {
  exploreItems,
  footerServicesItems,
  socialmediaItems,
} from '@data/FooterItems';

const Footer = () => {
  return (
    <div className="py-16">
      <div className="flex justify-between w-4/5 mx-auto">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">Explore</h3>
          <ul className="text-[#8A888D] leading-relaxed">
            {exploreItems.map((exploreItem) => (
              <li key={exploreItem.id}>{exploreItem.title}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">Services</h3>
          <ul className="text-[#8A888D] leading-relaxed">
            {footerServicesItems.map((footerServicesItem) => (
              <li
                key={footerServicesItem.id}
                className={`${footerServicesItem.style}`}
              >
                {footerServicesItem.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold ">Available n</h3>
          <p className="text-[#8A888D] leading-relaxed">
            East London, North <br /> London, South East <br /> London, South
            London, <br /> South West London West <br /> London, Balham, <br />{' '}
            Battersea, Brixton, Canary <br /> Wharf <br />
            <br />
            More locations…
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <ul className="flex flex-col gap-10 text-[#8A888D] ">
            <li>+44 079 7628 2828</li>
            <li>
              92 Lairg Road, <br />
              New York
            </li>
            <li>abc@mail.com</li>
          </ul>
        </div>
      </div>

      <ul className="flex justify-end gap-5 w-4/5 mx-auto mt-10">
        {socialmediaItems.map((socialmediaItem) => (
          <li key={socialmediaItem.id} className="text-3xl text-[#414242] ">
            {socialmediaItem.icon}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
