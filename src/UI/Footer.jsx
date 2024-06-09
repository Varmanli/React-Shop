import React from "react";

function Footer() {
  return (
    <div className="flex flex-col gap-10 lg:w-[90%] border-y p-4 lg:justify-between lg:items-center lg:m-10 lg:flex-row">
      <ul>
        <li className="text-[#8254F8] font-semibold">Products</li>
        <li>Web Studio</li>
        <li>DynamicBox Flex</li>
        <li>Programming Forms</li>
        <li>Integrations</li>
        <li>Command-line</li>
      </ul>
      <ul>
        <li className="text-[#8254F8] font-semibold">Resources</li>
        <li>Documentation</li>
        <li>Tutorials & Guides</li>
        <li>Blog</li>
        <li>Support Center</li>
        <li>Partners</li>
      </ul>
      <ul>
        <li className="text-[#8254F8] font-semibold">Company</li>
        <li>Home</li>
        <li>About us</li>
        <li>Company values</li>
        <li>Pricing</li>
        <li>Privacy Policy</li>
      </ul>
    </div>
  );
}

export default Footer;
