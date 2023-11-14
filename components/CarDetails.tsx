"use client"
import React from 'react';
import { CarCardprops } from '@/Types';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { getCarImageURL } from '@/utils';

interface CarDetailProps {
  isOpen: boolean;
  classModal: () => void;
  car: CarCardprops;
}

const CarDetails = ({ isOpen, classModal, car }: CarDetailProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 flex items-center justify-center z-50" onClose={classModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-100"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200 "
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25"></div>
          </Transition.Child>

          <div className="relative max-w-md w-full bg-white rounded-lg shadow-lg">
            <button
              type="button"
              className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
              onClick={classModal}
            >
              <Image src="/close.svg" alt="close" width={20} height={20} className="object-contain" />
            </button>

            <div className="flex-1 flex flex-col gap-3">
              <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                {/* Main Image */}
                <Image
                  src={getCarImageURL(car)}  // Replace with your main image source
                  alt="car-modal"
                  layout="fill"
                  objectFit="contain"
                  priority
                />
              </div>
              
              <div className="flex gap-3">
                {/* Display your three images below the main image */}
                <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                  <Image
                    src={getCarImageURL(car,"29")}  // Replace with your image source
                    alt="image2"
                    layout="fill"
                    objectFit="contain"
                    priority
                  />
                </div>
                <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                  <Image
                    src={getCarImageURL(car,"33")} // Replace with your image source
                    alt="image2"
                    layout="fill"
                    objectFit="contain"
                    priority
                  />
                </div>
                <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                  <Image
                    src={getCarImageURL(car,"13")} // Replace with your image source
                    alt="image3"
                    layout="fill"
                    objectFit="contain"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className='p-4'>
              <h2 className='font-semibold text-xl capitalize mb-2'>
                {car.make} {car.model}
              </h2>
              <div className='mt-3 flex flex-wrap gap-4'>
                {Object.entries(car).map(([key, value]) => (
                  <div className='flex justify-between w-full text-right' key={key} >
                    <h4 className='text-grey capitalize'>
                      {key.split("_").join(" ")}
                    </h4>
                    <p className='text-black-100 font-semibold'>
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
