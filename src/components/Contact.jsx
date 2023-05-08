import React from "react";

export const Contact = () => {
  return (
    <div className="mb-3">
      <h1 className="text-[32px] font-bold text-white">
        <span className="text-[#9BA4ED]">Contact</span> Me
      </h1>

      <section class="bg-[#1A1A1AE5] bg-opacity-70 ">
        <div class="mx-auto max-w-screen-xl px-4 py-5 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-x-16 gap-y-2 lg:grid-cols-5">

            <div class="rounded-lg bg-[#3E3C3CE5] p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form action="" class="space-y-4">
                <div>
                  <label class="sr-only" for="name">
                    Name
                  </label>
                  <input
                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                  />
                </div>

                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label class="sr-only" for="email">
                      Email
                    </label>
                    <input
                      class="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Email address"
                      type="email"
                      id="email"
                    />
                  </div>

                  <div>
                    <label class="sr-only" for="phone">
                      Phone
                    </label>
                    <input
                      class="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                    />
                  </div>
                </div>



                <div>
                  <label class="sr-only" for="message">
                    Message
                  </label>

                  <textarea
                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Message"
                    rows="8"
                    id="message"
                  ></textarea>
                </div>

                <div class="mt-4">
                  <button
                    type="submit"
                    class=" border border-white inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Send Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
