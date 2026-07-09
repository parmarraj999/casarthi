

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-8 right-8 flex items-center gap-0 z-50">
      {/* WhatsApp Button */}
      <div className="flex items-center bg-[#4ccc5b] rounded-full pr-4 shadow-lg hover:shadow-xl transition-shadow">
        <div className="w-16 h-16 flex items-center justify-center">
          <img src='../../../../assets/images/billing.png' alt="WhatsApp" className="w-12 h-12 object-contain" />
        </div>
        <span className="text-white text-xl font-medium pr-2">Whatsapp</span>
      </div>

      {/* Phone Button */}
      <button className="w-16 h-16 bg-black rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow ml-2">
        <img src='../../../../assets/images/billing.png' alt="Phone" className="w-11 h-11 object-contain" />
      </button>
    </div>
  );
}
