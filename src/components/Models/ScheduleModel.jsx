export default function ScheduleModel({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 " onClick={onClose}>
      {/* Modal box */}
      <div className="relative max-w-2xl bg-white text-(--primary-color) rounded-[26px] shadow-2xl overflow-hidden primary-background p-4 sm:p-8 max-sm:mx-4" onClick={(e) => e.stopPropagation()}>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-gray-600 hover:text-black text-lg font-semibold"
        >
          ✕
        </button>

        {/* Heading */}
        <h2 className="text-center text-[22px] sm:text-[30px] font-semibold sm:mt-0 mt-8 mb-6">
          Schedule a Conversation
        </h2>

        {/* Form */}
        <form className="space-y-4 text-start">
          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
            <div>
              <label className="block mb-1 font-semibold">
                First Name
              </label>
              <input
                type="text"
                placeholder="Sheikh"
                className="input-primary w-full input-border"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Aashir"
                className="input-primary w-full input-border"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-semibold">
                Email Address
              </label>
              <input
                type="email"
                placeholder="sheikhaashir23@gmail.com"
                className="input-primary w-full input-border"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">
                Mobile Phone
              </label>
              <input
                type="tel"
                placeholder="03212111623"
                className="input-primary w-full input-border"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1 font-semibold">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="123 Main Street"
              className="input-primary w-full input-border"
            ></textarea>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="py-2 px-6 border-2 border-(--primary-color) text-(--primary-color) rounded-4xl hover:bg-(--primary-color) hover:text-white transition w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
