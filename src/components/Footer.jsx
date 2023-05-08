import React from "react";

export const Footer = () => {
  return (
    <footer aria-label="Site Footer" class="bg-gray-50 flex dark:bg-gray-900">
      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <p class="mt-4 text-center text-md text-gray-500 dark:text-gray-400 lg:mt-0 lg:text-right">
            Copyright &copy; 2023.  <a className="text-[#9BA4ED]" href="https://www.linkedin.com/in/brajhanlopez/"> @Brajhandev </a> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
