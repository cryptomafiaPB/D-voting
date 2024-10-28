import React, { useRef, useState } from "react";
import { useWeb3Context } from "../../context/UseWeb3Context";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function VotingTimePeriod() {
  const { web3State } = useWeb3Context();
  const { contractInstance } = web3State;
  const [loading, setLoading] = useState(false);

  const startref = useRef(null);
  const endref = useRef(null);

  const handleTimePeriod = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const startTime = Math.floor(
        new Date(startref.current.value).getTime() / 1000
      );
      const endTime = Math.floor(
        new Date(endref.current.value).getTime() / 1000
      );

      if (endTime <= startTime) {
        toast.error("End time must be greater than start time.");
        setLoading(false);
        return;
      }

      const transaction = await contractInstance.setVotingPeriod(
        startTime,
        endTime
      );

      const receipt = await transaction.wait();
      if (receipt.status === 1) {
        toast.success("Voting period set successfully.");
         startref.current.value = "";
         endref.current.value = "";
      } else {
        toast.error("Failed to set voting period");
      }
       
    } catch (error) {
      console.error(error);
      toast.error("Failed to set voting period. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center rounded-lg shadow-md bg-gray-100 p-4">

      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Set Voting Time Period
      </h2>
      <form
        onSubmit={handleTimePeriod}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <div className="mb-4">
          <label
            htmlFor="start-time"
            className="block text-gray-700 font-semibold mb-1"
          >
            Start Time:
          </label>
          <input
            id="start-time"
            type="datetime-local"
            ref={startref}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="end-time"
            className="block text-gray-700 font-semibold mb-1"
          >
            End Time:
          </label>
          <input
            id="end-time"
            type="datetime-local"
            ref={endref}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className={`w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition duration-300 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Setting Time..." : "Set Time"}
        </button>
      </form>
    </div>
  );
}

export default VotingTimePeriod;
