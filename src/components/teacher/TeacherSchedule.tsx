interface Schedule {
  days: string;
  time: string;
}

interface Props {
  schedule: Schedule[];
}

function TeacherSchedule({ schedule }: Props) {
  return (
    <div className="sticky top-6 space-y-4">
      <div className="bg-white rounded-2xl border-2 border-blue-100 p-6 shadow-lg">
        <h3 className="text-lg font-bold text-slate-900">
          Dars beradigan vaqtlari
        </h3>
        <div className="space-y-3 mt-4">
          {schedule.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b border-slate-100 pb-3"
            >
              <span className="text-slate-600">{item.days}</span>
              <span className="text-blue-600 font-medium">{item.time}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100">
          <p className="text-sm text-slate-500">
            Yangi guruh <span className="font-bold text-blue-600">1-iyul</span>{" "}
            kuni boshlanadi. Joylar soni cheklangan.
          </p>
          <button className="w-full mt-4 bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition">
            Kursga yozilish
          </button>
        </div>
      </div>
    </div>
  );
}

export default TeacherSchedule;
