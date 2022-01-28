 /* eslint-disable */
/* This example requires Tailwind CSS v2.0+ */
import React from 'react'
import {
    CloudUploadIcon,
    LockClosedIcon,
    RefreshIcon,
    
  } from '@heroicons/react/outline'
  
import match from '../images/match.png'
import results from '../images/results.png'
import clean from '../images/clean.png'
import map from '../images/map.png'
  // const features = [
  //   { name: '1. Match', icon: CloudUploadIcon },
  //   { name: '2. Deliver', icon: LockClosedIcon },
  //   { name: '3. Results', icon: RefreshIcon },
  
  // ]
  
  export default function Services() {
    return (
      <div className="relative bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <h2 style={{color:"#C8A762"}} className="text-base font-semibold tracking-wider text-gray-900 uppercase">How it works</h2>
          <p style={{color: '#1070D9' }} className="mt-2 text-3xl font-extrabold text-indigo-600 tracking-tight sm:text-4xl">
          Stress-free house cleans
          </p>
         
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
             
                <div className="pt-6">
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className=" bg-indigo-200 inline-flex items-center justify-center p-3 bg-white border-2 border-white rounded-md shadow-xl">
                          <img src={map} alt="match" className="h-6 w-6 " aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">1. Match</h3>
                      <p className="mt-5 text-base text-gray-500">
                      Enter your post code and we’ll find you a cleaner local to you with a great price!
                      </p>
                    </div>
                  </div>
                  
                </div>

                <div className="pt-6">
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className=" bg-indigo-200 inline-flex items-center justify-center p-3 bg-white border-2 border-white rounded-md shadow-xl">
                          <img src={clean} alt="match" className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">2. Clean</h3>
                      <p className="mt-5 text-base text-gray-500">
                      Our professional cleaners will put in the work and effort in cleaning your property!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex bg-indigo-200 items-center justify-center p-3 bg-white border-2 border-blue-400 rounded-md shadow-xl">
                          <img src={results} alt="match" className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">3. Results</h3>
                      <p className="mt-4 text-base text-gray-500">
                      Have you seen anything with this kind of shine? Our cleaners will leave your place spotless. 

                      </p>
                    </div>
                  </div>
                </div>
             
            </div>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <button
            style={{backgroundColor:"#1070D9"}}
            	className="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
            >
            Find Your Cleaner</button>
        </div>
      </div>
    )
  }
  