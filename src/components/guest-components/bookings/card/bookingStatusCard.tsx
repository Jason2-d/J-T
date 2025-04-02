import React from 'react';
import { 
  ChevronRight, 
  CheckCircle,
  Clock,
  XCircle,
  Calendar,
  Users,
  ArrowRight
} from 'lucide-react';

// Define the possible status types
type BookingStatusCard = 'approved' | 'pending' | 'declined';

interface BookingStatusCardProps {
  id?: string;
  price?: number;
  currency?: string;
  title?: string;
  bookedOn?: string;
  thumbnailUrl?: string;
  status?: BookingStatusCard;
  dueDate?: string; // Optional, only needed for approved status
  guests?: number;
  nights?: number;
  checkIn?: string;
  checkOut?: string;
  onPrimaryAction?: () => void;
  onCardClick?: () => void;
  primaryActionLabel?: string; // For "Make Payment" or "Resend Request" buttons
}

const BookingStatusCard: React.FC<BookingStatusCardProps> = ({
  id = "BK000000",
  price = 0,
  currency = "₦",
  title = "Property Title",
  bookedOn = "Jan 1, 2025",
  thumbnailUrl = "/api/placeholder/400/300",
  status = "pending",
  dueDate,
  guests = 2,
  nights = 1,
  checkIn = "Jan 1, 2025",
  checkOut = "Jan 2, 2025",
  onPrimaryAction,
  onCardClick,
  primaryActionLabel
}) => {
  // Format price with commas
  const formattedPrice = new Intl.NumberFormat().format(price);

  // Status-based styling and content
  const getStatusConfig = () => {
    switch (status) {
      case 'approved':
        return {
          borderColor: 'border-l-green-500',
          bgColor: 'bg-green-50',
          icon: <CheckCircle size={18} className="text-green-600" />,
          text: 'Request Approved',
          textColor: 'text-[#089922]',
          actionText: dueDate ? `Pay before ${dueDate}` : '',
          idColor: 'text-green-600',
          priceColor: 'text-green-600',
          buttonLabel: primaryActionLabel || 'Make Payment',
          buttonClasses: 'bg-orange-500 hover:bg-orange-600 text-white'
        };
      case 'pending':
        return {
          borderColor: 'border-l-[#DF9409]',
          bgColor: 'bg-[#f99c1c]/10',
          icon: <Clock size={18} className="text-[#DF9409]" />,
          text: 'Pending Approval',
          textColor: 'text-[#2f2f2f]',
          actionText: '',
          idColor: 'text-[#DF9409]',
          priceColor: 'text-[#DF9409]',
          buttonLabel: '',
          buttonClasses: ''
        };
      case 'declined':
        return {
          borderColor: 'border-l-red-500',
          bgColor: 'bg-red-50',
          icon: <XCircle size={18} className="text-red-600" />,
          text: 'Request Declined',
          textColor: 'text-red-600',
          actionText: '',
          idColor: 'text-red-500',
          priceColor: 'text-red-500',
          buttonLabel: primaryActionLabel || 'Resend Request',
          buttonClasses: 'bg-red-50 border border-red-500 text-red-500 hover:bg-red-100'
        };
      default:
        return {
          borderColor: 'border-l-gray-300',
          bgColor: 'bg-gray-50',
          icon: null,
          text: '',
          textColor: 'text-gray-600',
          actionText: '',
          idColor: 'text-gray-600',
          priceColor: 'text-gray-600',
          buttonLabel: '',
          buttonClasses: ''
        };
    }
  };

  const statusConfig = getStatusConfig();

  return (
    <div 
      className={`w-full overflow-hidden rounded-lg shadow-sm border-t-4 md:border-l-4 ${statusConfig.bgColor} ${statusConfig.borderColor} mb-4`}
      onClick={onCardClick}
    >
      {/* Mobile View */}
      <div className="block lg:hidden p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-2 md:gap-3">
            <div className="h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
              <img 
                src={thumbnailUrl} 
                alt={title} 
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <div className='flex justify-between'>
              <p className={`${statusConfig.idColor} font-semibold`}>{id}</p>
              <p className={`${statusConfig.priceColor} font-bold`}>{currency} {formattedPrice}</p>
              </div>
              <h3 className="font-semibold text-base mt-1">{title}</h3>
              <p className="text-gray-600 text-sm">Booked on: {bookedOn}</p>
            </div>
          </div>
        </div>
        
        <div className={`mt-4 flex justify-between items-center p-2 rounded-md bg-[#f99c1c]/10 ${statusConfig.bgColor}`}>
          <div className="flex items-center gap-2">
            {statusConfig.icon}
            <span className={`text-sm font-medium ${statusConfig.textColor}`}>
              {statusConfig.text}
            </span>
          </div>
          <ChevronRight size={18} className={statusConfig.textColor} />
        </div>

        {/* Action buttons for mobile */}
        {status === 'approved' && (
          <div className="mt-4 flex justify-between items-center">
            <span className={`text-sm font-medium ${statusConfig.textColor}`}>
              {statusConfig.actionText}
            </span>
            <ChevronRight size={18} className={statusConfig.textColor} />
            {statusConfig.buttonLabel && (
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onPrimaryAction && onPrimaryAction();
                }}
                className={`px-4 py-2 rounded-md text-sm font-medium hidden md:block ${statusConfig.buttonClasses}`}
              >
                {statusConfig.buttonLabel}
              </button>
            )}
          </div>
        )}

        {status === 'declined' && (
          <div className="mt-4 flex justify-end">
            {statusConfig.buttonLabel && (
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onPrimaryAction && onPrimaryAction();
                }}
                className={`px-4 py-2 rounded-md text-sm font-medium ${statusConfig.buttonClasses}`}
              >
                {statusConfig.buttonLabel}
              </button>
            )}
          </div>
        )}
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block">
        <div className={`p-4 ${statusConfig.bgColor}`}>
          <div className="flex items-center">
            {/* Left side - Image and title info */}
            <div className="flex items-center gap-4 flex-grow">
              <div className="h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
                <img 
                  src={thumbnailUrl} 
                  alt={title} 
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className={`${statusConfig.idColor} font-semibold`}>{id}</p>
                <p className={`${statusConfig.priceColor} font-bold text-lg`}>{currency} {formattedPrice}</p>
                <h3 className="font-medium text-base">{title}</h3>
                <p className="text-gray-600 text-sm">Booked on: {bookedOn}</p>
              </div>
            </div>

            {/* Center - Booking details */}
            <div className="flex items-center gap-8 flex-grow justify-center">
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1">
                  <Users size={16} className="text-gray-600" />
                  <span className="text-sm font-medium">{guests}</span>
                </div>
                <span className="text-xs text-gray-500">Guest</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1">
                  <Clock size={16} className="text-gray-600" />
                  <span className="text-sm font-medium">{nights}</span>
                </div>
                <span className="text-xs text-gray-500">Nights</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1">
                  <Calendar size={16} className="text-gray-600" />
                  <span className="text-sm font-medium">{checkIn}</span>
                </div>
                <span className="text-xs text-gray-500">Check In</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1">
                  <Calendar size={16} className="text-gray-600" />
                  <span className="text-sm font-medium">{checkOut}</span>
                </div>
                <span className="text-xs text-gray-500">Check Out</span>
              </div>
            </div>

            {/* Right - Navigation arrow */}
            <div className="flex-shrink-0">
              <ChevronRight size={18} className="text-gray-400 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Status bar for desktop */}
        <div className={`px-4 py-3 flex justify-between items-center ${statusConfig.bgColor} border-t border-opacity-20 ${status === 'approved' ? 'border-green-500' : status === 'pending' ? 'border-amber-500' : 'border-red-500'}`}>
          <div className="flex items-center gap-2">
            {statusConfig.icon}
            <span className={`text-sm font-medium ${statusConfig.textColor}`}>
              {statusConfig.text}
            </span>
          </div>

          <div className="flex items-center gap-4">
            {status === 'approved' && statusConfig.actionText && (
              <span className={`text-sm font-medium ${statusConfig.textColor}`}>
                {statusConfig.actionText}
              </span>
            )}
            
            {statusConfig.buttonLabel && (
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onPrimaryAction && onPrimaryAction();
                }}
                className={`px-4 py-2 rounded-md text-sm font-medium ${statusConfig.buttonClasses}`}
              >
                {statusConfig.buttonLabel}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingStatusCard;