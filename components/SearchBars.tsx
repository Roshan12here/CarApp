"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SearchManufacturer } from "."; // Make sure to provide the correct path to SearchManufacturer
import { useRouter } from "next/navigation"; // Correct import

const SearchButton = ({ otherclasses }: { otherclasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherclasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="magnifying"
      width={40}
      height={40}
      className="      object-contain"
      key="magnifying-glass" // Add a key prop here
    />
  </button>
);

const SearchBars = () => {
  const [manufacturers, setManufacturers] = useState("");
  const [modal, setModal] = useState("");
  const router = useRouter(); // Correct import

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturers === "" && modal === "") {
      return alert("Please fill in the search bar");
    }

    // Call the UpdateSearchParams function to update search parameters
    UpdateSearchParams(modal.toLowerCase(), manufacturers.toLowerCase());
  };

  const UpdateSearchParams = (modal: string, manufacturers: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (modal) {
      searchParams.set("modal", modal);
    } else {
      searchParams.delete("modal");
    }
    if (manufacturers) {
      searchParams.set("manufacturers", manufacturers);
    } else {
      searchParams.delete("manufacturers");
    }
    const newPathName = `${window.location.pathname}?${searchParams.toString()}`;

    router.push(newPathName);
  };

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <div className="searchbar__items">
        {/* Pass manufacturers and setManufacturers as props to SearchManufacturer */}
        <SearchManufacturer
          manufacturers={manufacturers}
          setmanufacturers={setManufacturers}
        />
        <SearchButton otherclasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px]  ml-4"
          alt="car-modal"
          key="model-icon" // Add a key prop here
        />

        <input
          type="text"
          name="modal"
          value={modal}
          onChange={(e) => {
            setModal(e.target.value);
          }}
          placeholder="Tigwan"
          className="searchbar__input"
        />
        <SearchButton otherclasses="sm:hidden" />
      </div>
      <SearchButton otherclasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBars;