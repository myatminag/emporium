'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Divider } from '@nextui-org/react';

import {
  MainLogo,
  FacebookIcon,
  TwitterIcon,
  AppStoreIcon,
  PlayStoreIcon,
} from '@ecommerce/ui';

const data = [
  {
    title: 'About',
    links: [
      { label: 'Features', link: '#' },
      { label: 'Pricing', link: '#' },
      { label: 'Support', link: '#' },
      { label: 'Forums', link: '#' },
    ],
  },
  {
    title: 'Project',
    links: [
      { label: 'Contribute', link: '#' },
      { label: 'Media assets', link: '#' },
      { label: 'Changelog', link: '#' },
      { label: 'Releases', link: '#' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Join Discord', link: '#' },
      { label: 'Follow on Twitter', link: '#' },
      { label: 'Email newsletter', link: '#' },
      { label: 'GitHub discussions', link: '#' },
    ],
  },
];

const Footer = () => {
  // const groups = data.map((group) => {
  //   const links = group.links.map((link, index) => (
  //     <Text<'a'>
  //       key={index}
  //       component="a"
  //       href={link.link}
  //       onClick={(event) => event.preventDefault()}
  //     >
  //       {link.label}
  //     </Text>
  //   ));

  //   return (
  //     <Stack key={group.title}>
  //       <Text>{group.title}</Text>
  //       {links}
  //     </Stack>
  //   );
  // });

  return (
    <footer className="container w-full py-6 lg:py-8">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <div className="flex items-center gap-x-3">
            <MainLogo />
            <h3 className="text-primary text-xl font-medium">Emporium</h3>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-6">
          <div>
            <h2 className="mb-6 text-base font-medium uppercase text-neutral-900">
              About
            </h2>
            <ul className="flex flex-col gap-y-4 text-base text-neutral-600">
              <li>About Us</li>
              <li>Categories</li>
              <li>Find Store</li>
              <li>Policy</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-base font-medium uppercase text-neutral-900">
              Users
            </h2>
            <ul className="flex flex-col gap-y-4 text-base text-neutral-600">
              <li>Login</li>
              <li>Register</li>
              <li>Profile</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-base font-medium uppercase text-neutral-900">
              Information
            </h2>
            <ul className="flex flex-col gap-y-4 text-base text-neutral-600">
              <li>Support</li>
              <li>Shipping</li>
              <li>Refund</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-base font-medium uppercase text-neutral-900">
              Get App
            </h2>
            <ul className="flex flex-col gap-y-4">
              <li>
                <AppStoreIcon />
              </li>
              <li>
                <PlayStoreIcon />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Divider className="my-8" />
      <div className="lg:item flex flex-col items-center justify-center lg:flex-row lg:justify-between">
        <span className="text-sm text-gray-600 sm:text-center dark:text-gray-400">
          © {new Date().getFullYear()}{' '}
          <a href="https://flowbite.com/" className="hover:underline">
            Emporium™
          </a>
          . All Rights Reserved.
        </span>
        <div className="mt-5 flex items-center gap-x-3 lg:mt-0">
          <FacebookIcon className="hover:text-primary h-4 w-4 cursor-pointer text-neutral-600" />
          <TwitterIcon className="hover:text-primary h-4 w-4 cursor-pointer text-neutral-600" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
