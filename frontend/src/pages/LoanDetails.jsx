import React, { useState } from 'react';
import './loanDetails.css';
import Back from "../common/Back"
import Featured from '../Components/featured/Featured';

function LoanApplicationForm() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    panchayat: '',
    phoneNumber: '',
    municipality: '',
    email: '',
    birthCertificate: null,
    passportPhoto: null,
    bankStatementPhoto: null,
    aadhaarCard: null,
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const updatedValue = type === 'file' ? e.target.files[0] : value;
    
    setFormData({
      ...formData,
      [name]: updatedValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Prepare form data to send to the server (excluding file inputs)
    const formDataToSend = { ...formData };
    delete formDataToSend.birthCertificate;
    delete formDataToSend.passportPhoto;
    delete formDataToSend.bankStatementPhoto;
    delete formDataToSend.aadhaarCard;

    // Handle form submission logic here, like sending data to a server
    console.log(formDataToSend);

    // You can also handle file uploads separately
    // For example, using FormData to send files to the server
    const formDataWithFiles = new FormData();
    formDataWithFiles.append('birthCertificate', formData.birthCertificate);
    formDataWithFiles.append('passportPhoto', formData.passportPhoto);
    formDataWithFiles.append('bankStatementPhoto', formData.bankStatementPhoto);
    formDataWithFiles.append('aadhaarCard', formData.aadhaarCard);
    
    // Send formDataWithFiles to the server using fetch or axios
  };

  return (
    <div className='center-content'>
        
        
      <span><h2>Loan Application Form</h2></span>
      <form onSubmit={handleSubmit} className='f1' style={{ marginTop: '30px' }}>
        {/* Basic Information */}
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Panchayat:</label>
          <input
            type="text"
            name="panchayat"
            value={formData.panchayat}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Municipality:</label>
          <input
            type="text"
            name="municipality"
            value={formData.municipality}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Document Uploads */}
        <div>
          <label>Upload Birth Certificate:</label>
          <input
            type="file"
            name="birthCertificate"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Upload Passport Size Photo:</label>
          <input
            type="file"
            name="passportPhoto"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Upload Bank Statement Photo:</label>
          <input
            type="file"
            name="bankStatementPhoto"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Upload Aadhaar Card:</label>
          <input
            type="file"
            name="aadhaarCard"
            onChange={handleChange}
            required
          />
        </div>
        <br></br>
        <button className="bn1" type="submit"style={{marginLeft: '200px'}}>Submit Application</button>
       
      </form>
      <br></br>
      <Featured/>
    </div>
   
  );

}

export default LoanApplicationForm;