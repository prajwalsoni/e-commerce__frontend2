import React from "react";

const AddressCard = ({address}) => {
  return (
    <div>
      {/* <h1 className="text-lg font-semibold py-4">Delivery Adress</h1> */}
      <div className="space-y-3">
        <p className="font-semibold">Prajwal Soni</p>

        <p>
          Ram Lila Maidan Purani Bazar Pachperwa Balrampur , UP
        </p>

        <div className="space-y-1">
          <p className="font-semibold">Phone No.</p>
          <p>8931097680</p>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
