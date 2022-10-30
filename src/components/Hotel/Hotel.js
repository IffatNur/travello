import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Hotel = () => {
  const hotel = useLoaderData();
  const  { name, address, contact, phone} = hotel;
  console.log(hotel);
  return (
    <div>
      <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-auto">
        <Link href="#">
          <img
            class="rounded-t-lg"
            src="https://hips.hearstapps.com/bpc.h-cdn.co/assets/18/03/1516299055-presidential-cape-town.jpg"
            alt=""
          />
        </Link>
        <div class="p-5">
          <Link href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
          </Link>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <p>
            <b>Address : {address}</b>
          </p>
          <p>Email : {contact}</p>
          <small>Contact : {phone}</small>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
