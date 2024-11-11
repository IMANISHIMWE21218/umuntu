/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';
// import '../src/App.css';
const Model = ({onClose}) => {
    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
          onClose(); // This will call handleCloseModal from App
        }
      };
    return (
        <div onClick={handleOverlayClick} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg text-center w-72 relative">
        {/* Close button (X icon) */}
        <button 
        
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          <FaTimes className="w-5 h-5" onClick={onClose} />
        </button>

        {/* Modal Title */}
        <h2 className="text-lg font-semibold mb-4">Confirm Donation</h2>
        <p className="mb-6">If you are sure and want to proceed with the donation:</p>

        {/* MoMo Donation */}
        <div className="mb-6">
          <p className="text-gray-700 font-medium mb-2">Donate with MoMo:</p>
          <p className="text-lg font-semibold text-yellow-500">*182*1*4#</p>
        </div>

        {/* PayPal Button */}
        <button 
         
          className="bg-brandPrimary text-white py-2 px-4 rounded-md hover:bg-sky-800 w-full mb-4"
        >
          Pay with PayPal
        </button>

        {/* Cancel Button */}
        <button onClick={onClose}
         
          className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 w-full"
        >
          Cancel
        </button>
      </div>
    </div>
      
        )
}

Model.prototype = {
    onClose: PropTypes.func.isRequired, // Ensure onClose is a function and required
  };
  

export default Model