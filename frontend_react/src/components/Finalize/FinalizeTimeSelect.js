import { useField } from 'formik';

function generateTimeSlots() {
  const now = new Date();
  now.setSeconds(0, 0);

  const minutes = now.getMinutes();
  const nextSlot = new Date(now);
  nextSlot.setMinutes(minutes + (15 - (minutes % 15)));

  const slots = [];

  const endLimit = new Date();
  endLimit.setHours(22, 15, 0, 0); // 22:15

  while (nextSlot <= endLimit) {
    const start = new Date(nextSlot);
    const end = new Date(start.getTime() + 15 * 60 * 1000);
    const format = (d) =>
      d.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      });

    slots.push(`${format(start)} - ${format(end)}`);
    nextSlot.setMinutes(nextSlot.getMinutes() + 15);
  }

  return slots;
}


const FinalizeTimeSelect = ({ name }) => {
  const [field, meta] = useField(name);
  const slots = generateTimeSlots();

  return (
    <div className="finalize__input-wrapper">
      <select {...field} id={name} className="finalize__select">
        <option value="" disabled>Оберіть час</option>
        {slots.map((slot, i) => (
          <option key={i} value={slot}>{slot}</option>
        ))}
      </select>
      {meta.touched && meta.error && (
        <div className="error">{meta.error}</div>
      )}
    </div>
  );
};

export default FinalizeTimeSelect;
