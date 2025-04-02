"use client";

export default function InvitesList() {
  const invites = [
    {
      name: "Velma Langosh",
      email: "Camille82@yahoo.com",
      phone: "326-485-1934",
      booked: "₦2,000",
      listed: "₦5,000",
    },
    {
      name: "Velma Langosh",
      email: "Camille82@yahoo.com",
      phone: "326-485-1934",
      booked: "₦2,000",
      listed: "₦5,000",
    },
    {
      name: "Velma Langosh",
      email: "Camille82@yahoo.com",
      phone: "326-485-1934",
      booked: "₦2,000",
      listed: "₦5,000",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold">Invites</h2>
        <a href="#" className="text-orange-500 font-semibold text-sm">
          SEE ALL
        </a>
      </div>

      {/* Invite List */}
      <div className="space-y-4">
        {invites.map((invite, index) => (
          <div key={index} className="flex items-center space-x-4">
            {/* Avatar */}
            <div className="w-10 h-10 flex items-center justify-center bg-orange-100 text-orange-500 font-bold rounded-full">
              TT
            </div>

            {/* Invite Info */}
            <div className="flex-1">
              <h3 className="font-semibold">{invite.name}</h3>
              <p className="text-sm text-orange-500">
                {invite.email} | {invite.phone}
              </p>
            </div>

            {/* Booking Details */}
            <div className="text-right text-sm">
              <p className="text-gray-400">
                Booked <span className="text-gray-500">{invite.booked}</span>
              </p>
              <p className="text-gray-400">
                Listed <span className="text-orange-500 font-semibold">{invite.listed}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}