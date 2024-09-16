import React from "react";

function Footer() {
  return (
    <div className="flex w-[90%] border-y p-4 justify-between items-center m-10">
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
